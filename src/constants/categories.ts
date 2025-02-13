
export const CATEGORIES = [
  { id: 'all', name: 'Todos los proyectos', icon: '🎯' },
{ id: 'ecommerce', name: 'E-commerce', icon: '🛍️' },
{ id: 'finance', name: 'Finanzas', icon: '💰' },
{ id: 'health', name: 'Salud y bienestar', icon: '💖' },
{ id: 'productivity', name: 'Productividad', icon: '⚡' },
{ id: 'social', name: 'Redes sociales', icon: '📱' },
{ id: 'external-api', name: `API's externas`, icon: '🔄' },
{ id: 'fullstack', name: 'Full Stack', icon: '⚙️' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];
