// Performance monitoring utility
export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  loadTime: number; // Page load time
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];
  private clickHandler: ((event: Event) => void) | null = null;
  private scrollHandler: (() => void) | null = null;
  private unloadHandler: (() => void) | null = null;

  constructor() {
    this.init();
  }

  private init() {
    // Only run in production
    if (import.meta.env.DEV) return;

    this.observeWebVitals();
    this.trackPageLoad();
    this.trackErrors();
    this.trackUserInteractions();
  }

  private observeWebVitals() {
    try {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.fcp = entry.startTime;
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
        this.observers.push(observer);
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.metrics.lcp = lastEntry.startTime;
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(observer);
      }

      // First Input Delay
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-input') {
              this.metrics.fid = (entry as any).processingStart - entry.startTime;
            }
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
        this.observers.push(observer);
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          this.metrics.cls = clsValue;
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(observer);
      }
    } catch (error) {
      console.warn('Performance monitoring not fully supported:', error);
    }
  }

  private trackPageLoad() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
      }
      
      // Send metrics after page load
      setTimeout(() => this.sendMetrics(), 1000);
    });
  }

  private trackErrors() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.logError({
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
        timestamp: Date.now(),
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        type: 'promise',
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
      });
    });
  }

  private trackUserInteractions() {
    // Track button clicks and form submissions with throttling
    let lastClickTime = 0;
    this.clickHandler = (event: Event) => {
      const now = Date.now();
      if (now - lastClickTime < 100) return; // Throttle rapid clicks
      lastClickTime = now;

      const target = event.target as HTMLElement;
      const elementInfo = {
        tagName: target.tagName,
        id: target.id,
        className: target.className,
        text: target.textContent?.slice(0, 50),
        timestamp: Date.now(),
      };

      this.logInteraction('click', elementInfo);
    };

    // Track scroll depth
    let maxScroll = 0;
    this.scrollHandler = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      maxScroll = Math.max(maxScroll, scrollPercentage);
    };

    this.unloadHandler = () => {
      this.logInteraction('scroll_depth', { maxScroll });
    };

    document.addEventListener('click', this.clickHandler);
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('beforeunload', this.unloadHandler);
  }

  private logError(error: any) {
    console.error('Error logged:', error);
    // Send to your error tracking service
    this.sendToEndpoint('/api/errors', error);
  }

  private logInteraction(type: string, data: any) {
    console.log('Interaction logged:', type, data);
    // Send to your analytics service
    this.sendToEndpoint('/api/analytics', { type, data });
  }

  private sendMetrics() {
    console.log('Performance metrics:', this.metrics);
    // Send to your monitoring service
    this.sendToEndpoint('/api/performance', this.metrics);
  }

  private sendToEndpoint(endpoint: string, data: any) {
    if (import.meta.env.DEV) return;

    // Example: Send to your backend
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      }),
    }).catch(err => console.warn('Failed to send monitoring data:', err));
  }

  // Public method to get current metrics
  public getMetrics(): Partial<PerformanceMetrics> {
    return this.metrics;
  }

  // Cleanup method
  public destroy() {
    this.observers.forEach(observer => observer.disconnect());
    
    // Clean up event listeners
    if (this.clickHandler) {
      document.removeEventListener('click', this.clickHandler);
    }
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.unloadHandler) {
      window.removeEventListener('beforeunload', this.unloadHandler);
    }
  }
}

// Initialize monitoring
export const performanceMonitor = new PerformanceMonitor();

// Export for manual tracking
export const trackCustomEvent = (eventName: string, data: any) => {
  (performanceMonitor as any).logInteraction(eventName, data);
};
