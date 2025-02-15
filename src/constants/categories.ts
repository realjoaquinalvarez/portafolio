
export const CATEGORIES = [
  { id: 'all', name: 'All Projects', icon: '🎯' },
  { id: 'ecommerce', name: 'Ecommerce', icon: '🛍️' },
  { id: 'finance', name: 'Finance', icon: '💰' },
  { id: 'health', name: 'Health', icon: '💖' },
  { id: 'productivity', name: 'Productivity', icon: '⚡' },
  { id: 'social', name: 'Social', icon: '📱' },
  { id: 'external-api', name: 'ExternalAPIs', icon: '🔄' },
  { id: 'fullstack', name: 'FullStack', icon: '⚙️' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];
