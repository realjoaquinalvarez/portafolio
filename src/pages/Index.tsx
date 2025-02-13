import { Sidebar } from '@/components/layout/Sidebar';
import { SearchBar } from '@/components/filters/SearchBar';
import { TechnologyFilter } from '@/components/filters/TechnologyFilter';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { useProjectStore } from '@/store/useProjectStore';

const Index = () => {
  const { projects, filters } = useProjectStore();

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[-_\s]+/g, '') // Elimina guiones, guiones bajos y espacios
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Elimina acentos
  };

  const filteredProjects = projects.filter(project => {
    
    if (filters.searchQuery) {
      const query = normalizeText(filters.searchQuery);
      return (
        normalizeText(project.title).includes(query) ||
        normalizeText(project.description).includes(query) ||
        project.technologies.some(tech => 
          normalizeText(tech.name).includes(query)
        )
      );
    }

     if (filters.selectedTechnologies.length > 0) {
      return filters.selectedTechnologies.every(selectedTech =>
        project.technologies.some(tech => tech.id === selectedTech)
      );
    }

    if (filters.selectedCategory) {

      if(filters.selectedCategory === 'all') {
        return project.category
      } else {
        return project.category === filters.selectedCategory;
      }
       
    }

    return true;
  });

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />
      
      <main className="flex-1 px-6 py-8">
        <div className="container mx-auto max-w-6xl">
          <SearchBar />
          <TechnologyFilter />
          <ProjectGrid projects={filteredProjects} />
        </div>
      </main>
    </div>
  );
};

export default Index;
