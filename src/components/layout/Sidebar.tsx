
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { CATEGORIES } from '@/constants/categories';
import { useProjectStore } from '@/store/useProjectStore';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { filters, toggleCategory } = useProjectStore();

  return (
    <div
      className={`relative flex h-screen flex-col border-r border-gray-100 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
        isCollapsed ? 'w-15' : 'w-64'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 rounded-full bg-white p-1 shadow-sm hover:shadow-md transition-shadow"
      >
        <Menu className="h-4 w-4 text-gray-600" />
      </button>

      <div className="p-4">
        <h2 className={`text-sm font-medium text-gray-900 ${isCollapsed ? 'hidden' : 'block'}`}>
          Categorías
        </h2>
      </div>

      <nav className="flex-1 space-y-1 p-1">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => toggleCategory(category.id)}
            className={`w-full flex justify-start items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
              filters.selectedCategory === category.id
                ? 'bg-gray-50 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50/50'
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            {!isCollapsed && <span>{category.name}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};
