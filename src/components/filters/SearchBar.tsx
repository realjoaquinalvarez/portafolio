
import { Input } from '@/components/ui/input';
import { useProjectStore } from '@/store/useProjectStore';

export const SearchBar = () => {
  const { filters, setSearchQuery } = useProjectStore();

  return (
    <div className="flex justify-center mb-6">
      <Input
        type="text"
        placeholder="Buscar por título o categoría..."
        value={filters.searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-md bg-white/50 backdrop-blur-sm border-gray-200"
      />
    </div>
  );
};
