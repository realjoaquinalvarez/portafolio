import { Menu } from 'lucide-react';
import { CATEGORIES } from '@/constants/categories';
import { useProjectStore } from '@/store/useProjectStore';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const { isSidebarCollapsed, toggleSidebar, filters, toggleCategory } = useProjectStore();

  return (
    <div
      className={`fixed top-0 left-0 h-screen transition-all duration-300 ${
        isSidebarCollapsed ? 'w-16' : 'w-16 md:w-64'
      }`}
    >
      <div className="relative flex h-full flex-col border-r border-gray-100 bg-white/50 backdrop-blur-sm">
        <button
          onClick={toggleSidebar}
          className="absolute hidden md:block -right-3 top-4 rounded-full bg-white p-1 shadow-sm hover:shadow-md transition-shadow"
        >
          <Menu className="h-4 w-4 text-gray-600" />
        </button>

        <div className="p-4">
          <h2 className={`text-sm font-medium text-gray-900 ${isSidebarCollapsed ? 'hidden' : 'hidden md:block'}`}>
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
              {!isSidebarCollapsed && <span className='hidden md:block'>{category.name}</span>}
            </button>
          ))}
        </nav>

        <Link to="/">
          <div className="absolute left-3 bottom-4 flex flex-row items-center">
            <img
              className={`h-10 w-10 ${isSidebarCollapsed && 'bg-gray-900 border-gray-00 rounded-lg w-9 h-9'}`}
              src={`${isSidebarCollapsed ? '/icons/white.svg' : '/icons/back.svg' }`}
              alt="volver"
            />
            <p
              className={`text-2xl font-semibold text-gray-900 ${
                isSidebarCollapsed ? 'hidden' : 'block'
              } absolute left-8`}
            >
              Inicio
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
