
import { create } from 'zustand';

export type Technology = {
  id: string;
  name: string;
  color: { bg: string; text: string };
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  category: string;
  link: string;
};

export type FilterState = {
  searchQuery: string;
  selectedTechnologies: string[];
  selectedCategory: string | null;
};

interface ProjectStore {
  // State
  projects: Project[];
  filters: FilterState;
  
  // Actions
  setSearchQuery: (query: string) => void;
  setSelectedTechnologies: (techs: string[]) => void;
  setSelectedCategory: (category: string | null) => void;
  clearFilters: () => void;
  toggleCategory: (category: string) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [
    {
      id: '1',
      title: 'Modern E-commerce Platform',
      description: 'A fully responsive e-commerce platform with real-time inventory management.',
      image: '/placeholder.svg',
      technologies: [
        { id: 'react', name: 'React.js', color: { bg: '#E9F3F7', text: '#487CA5' } },
        { id: 'typescript', name: 'TypeScript', color: { bg: '#F6F3F8', text: '#8A67AB' } },
        { id: 'node', name: 'Node.js', color: { bg: '#EEF3ED', text: '#548164' } },
      ],
      category: 'ecommerce',
      link: '#',
    },
    // Add more mock projects here
  ],
  
  filters: {
    searchQuery: '',
    selectedTechnologies: [],
    selectedCategory: null,
  },

  setSearchQuery: (query) => set((state) => ({
    filters: {
      ...state.filters,
      searchQuery: query,
      selectedTechnologies: [],
      selectedCategory: null,
    }
  })),

  setSelectedTechnologies: (techs) => set((state) => ({
    filters: {
      ...state.filters,
      selectedTechnologies: techs,
      searchQuery: '',
      selectedCategory: null,
    }
  })),

  setSelectedCategory: (category) => set((state) => ({
    
    filters: {
      ...state.filters,
      selectedCategory: category,
      searchQuery: '',
      selectedTechnologies: [],
    }
  })),

  clearFilters: () => set((state) => ({
    filters: {
      searchQuery: '',
      selectedTechnologies: [],
      selectedCategory: null,
    }
  })),

  toggleCategory: (category) => set((state) => ({
    filters: {
      ...state.filters,
      selectedCategory: state.filters.selectedCategory === category ? null : category,
      searchQuery: '',
      selectedTechnologies: [],
    }
  })),
}));
