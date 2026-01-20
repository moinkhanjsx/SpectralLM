// Navigation constants
export const NAVIGATION_LINKS = [
  { label: "Industries", href: "#industries" },
  { label: "Why Choose", href: "#why" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

// Performance monitoring constants
export const PERFORMANCE_THRESHOLDS = {
  FCP_GOOD: 1800,
  FCP_NEEDS_IMPROVEMENT: 3000,
  LCP_GOOD: 2500,
  LCP_NEEDS_IMPROVEMENT: 4000,
  FID_GOOD: 100,
  FID_NEEDS_IMPROVEMENT: 300,
  CLS_GOOD: 0.1,
  CLS_NEEDS_IMPROVEMENT: 0.25,
  LOAD_TIME_GOOD: 3000,
  LOAD_TIME_NEEDS_IMPROVEMENT: 5000,
} as const;

// Analytics tracking events
export const ANALYTICS_EVENTS = {
  HERO_REQUEST_DEMO: 'hero_request_demo',
  HERO_EXPLORE_SOLUTIONS: 'hero_explore_solutions',
  NAVIGATION_CLICK: 'navigation_click',
  CTA_SCHEDULE_CONSULTATION: 'cta_schedule_consultation',
  CTA_VIEW_CASE_STUDIES: 'cta_view_case_studies',
} as const;

// Error types
export const ERROR_TYPES = {
  JAVASCRIPT: 'javascript',
  PROMISE: 'promise',
  REACT_BOUNDARY: 'react-boundary',
} as const;

// Industry categories
export const INDUSTRIES = [
  'Electronics',
  'Pharmaceuticals', 
  'Aerospace',
  'Defense',
  'Automotive',
] as const;
