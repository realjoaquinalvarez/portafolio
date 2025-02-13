
import { Sidebar } from '@/components/layout/Sidebar';
import { SearchBar } from '@/components/filters/SearchBar';
import { TechnologyFilter } from '@/components/filters/TechnologyFilter';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { useProjectStore } from '@/store/useProjectStore';

const Index = () => {
  const { projects, filters } = useProjectStore();

  const filteredProjects = projects.filter(project => {
    
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => 
          tech.name.toLowerCase().includes(query)
        )
      );
    }

    if (filters.selectedTechnologies.length > 0) {
      return project.technologies.some(tech =>
        filters.selectedTechnologies.includes(tech.id)
      );
    }

    if (filters.selectedCategory) {
      if(filters.selectedCategory === 'all'){
        
      }
      
      return project.category === filters.selectedCategory;
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
