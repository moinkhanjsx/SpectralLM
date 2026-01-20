import { useState, useEffect } from 'react';
import { performanceMonitor } from '../utils/performanceMonitor';
import type { PerformanceMetrics } from '../utils/performanceMonitor';
import { PERFORMANCE_THRESHOLDS } from '../constants';

export default function Analytics() {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show analytics in development or with a special query param
    const shouldShow = import.meta.env.DEV || window.location.search.includes('analytics=true');
    setIsVisible(shouldShow);
    
    if (!shouldShow) return;
    
    const updateMetrics = () => {
      setMetrics(performanceMonitor.getMetrics());
    };
    
    // Update metrics every 2 seconds
    const interval = setInterval(updateMetrics, 2000);
    updateMetrics(); // Initial update
    
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const formatMetric = (value: number | undefined, unit: string = 'ms') => {
    return value !== undefined ? `${value.toFixed(2)}${unit}` : 'N/A';
  };

  const getScoreColor = (metric: number | undefined, good: number, needsImprovement: number) => {
    if (metric === undefined) return 'text-gray-400';
    if (metric <= good) return 'text-green-400';
    if (metric <= needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-xl z-50 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-white">Performance Monitor</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white transition"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-slate-400">FCP:</span>
          <span className={getScoreColor(metrics.fcp, PERFORMANCE_THRESHOLDS.FCP_GOOD, PERFORMANCE_THRESHOLDS.FCP_NEEDS_IMPROVEMENT)}>
            {formatMetric(metrics.fcp)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-slate-400">LCP:</span>
          <span className={getScoreColor(metrics.lcp, PERFORMANCE_THRESHOLDS.LCP_GOOD, PERFORMANCE_THRESHOLDS.LCP_NEEDS_IMPROVEMENT)}>
            {formatMetric(metrics.lcp)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-slate-400">FID:</span>
          <span className={getScoreColor(metrics.fid, PERFORMANCE_THRESHOLDS.FID_GOOD, PERFORMANCE_THRESHOLDS.FID_NEEDS_IMPROVEMENT)}>
            {formatMetric(metrics.fid)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-slate-400">CLS:</span>
          <span className={getScoreColor(metrics.cls, PERFORMANCE_THRESHOLDS.CLS_GOOD, PERFORMANCE_THRESHOLDS.CLS_NEEDS_IMPROVEMENT)}>
            {metrics.cls !== undefined ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-slate-400">Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, PERFORMANCE_THRESHOLDS.LOAD_TIME_GOOD, PERFORMANCE_THRESHOLDS.LOAD_TIME_NEEDS_IMPROVEMENT)}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-slate-700 text-xs text-slate-400">
        <div className="mb-1">🟢 Good 🟡 Needs Work 🔴 Poor</div>
        <div>Dev only • Add ?analytics=true to URL</div>
      </div>
    </div>
  );
}
