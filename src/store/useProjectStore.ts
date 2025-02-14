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
  // Estado
  projects: Project[];
  filters: FilterState;
  isSidebarCollapsed: boolean;
  
  // Acciones de filtros
  setSearchQuery: (query: string) => void;
  setSelectedTechnologies: (techs: string[]) => void;
  setSelectedCategory: (category: string | null) => void;
  clearFilters: () => void;
  toggleCategory: (category: string) => void;

  // Estado global del Sidebar
  toggleSidebar: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [
    {
      id: '1',
      title: 'Calculadora de Propinas',
      description: 'Calcula la propina en base al total de la cuenta.',
      image: '/01-propina.PNG',
      technologies: [
        { id: 'react', name: 'React.js', color: { bg: '#E9F3F7', text: '#487CA5' } },
        { id: 'typescript', name: 'TypeScript', color: { bg: '#F6F3F8', text: '#8A67AB' } },
        { id: 'tailwind', name: 'Tailwind CSS', color: { bg: '#F9F2F5', text: '#B35488' } },
      ],
      category: 'productivity',
      link: 'https://profound-valkyrie-2b3ada.netlify.app/',
    },
    {
      id: '2',
      title: 'Contador de Calorías',
      description: 'Balancea las calorías consumidas y quemadas.',
      image: '/02-calorias.PNG',
      technologies: [
        { id: 'react', name: 'React.js', color: { bg: '#E9F3F7', text: '#487CA5' } },
        { id: 'typescript', name: 'TypeScript', color: { bg: '#F6F3F8', text: '#8A67AB' } },
        { id: 'tailwind', name: 'Tailwind CSS', color: { bg: '#F9F2F5', text: '#B35488' } },
      ],
      category: 'health',
      link: 'https://sage-pasca-360189.netlify.app/',
    },
    {
      id: '3',
      title: 'Planificador de Gastos',
      description: 'Define un presupuesto y calcula lo gastado y sobrante.',
      image: '/03-gastos.PNG',
      technologies: [
        { id: 'react', name: 'React.js', color: { bg: '#E9F3F7', text: '#487CA5' } },
        { id: 'typescript', name: 'TypeScript', color: { bg: '#F6F3F8', text: '#8A67AB' } },
        { id: 'tailwind', name: 'Tailwind CSS', color: { bg: '#F9F2F5', text: '#B35488' } },
      ],
      category: 'finance',
      link: 'https://delicate-figolla-d3716c.netlify.app/',
    },
    {
      id: '4',
      title: 'Paciente Veterinaria',
      description: 'Monitorea la situación de los pacientes en una clínica veterinaria.',
      image: '/04-veterinaria.PNG',
      technologies: [
        { id: 'react', name: 'React.js', color: { bg: '#E9F3F7', text: '#487CA5' } },
        { id: 'typescript', name: 'TypeScript', color: { bg: '#F6F3F8', text: '#8A67AB' } },
        { id: 'tailwind', name: 'Tailwind CSS', color: { bg: '#F9F2F5', text: '#B35488' } },
      ],
      category: 'health',
      link: 'https://mellifluous-genie-770ba4.netlify.app/',
    },
    {
      id: '5',
      title: 'Aplicación de Clima',
      description: 'Consulta el clima en cualquier ciudad en tiempo real.',
      image: '/05-clima.PNG',
      technologies: [
        { id: 'react', name: 'React.js', color: { bg: '#E9F3F7', text: '#487CA5' } },
        { id: 'typescript', name: 'TypeScript', color: { bg: '#F6F3F8', text: '#8A67AB' } },
        { id: 'tailwind', name: 'Tailwind CSS', color: { bg: '#F9F2F5', text: '#B35488' } },
        { id: 'rest-api', name: 'RESTful APIs', color: { bg: '#F3EEEE', text: '#976D57' } },
      ],
      category: 'external-api',
      link: 'https://sparkly-pegasus-5d5f8d.netlify.app/',
    },
    {
      id: '6',
      title: 'Cotizador de Criptomonedas',
      description: 'Convierte dinero normal a criptomonedas con valor en tiempo real.',
      image: '/06-criptomonedas.PNG',
      technologies: [
        { id: 'react', name: 'React.js', color: { bg: '#E9F3F7', text: '#487CA5' } },
        { id: 'typescript', name: 'TypeScript', color: { bg: '#F6F3F8', text: '#8A67AB' } },
        { id: 'tailwind', name: 'Tailwind CSS', color: { bg: '#F9F2F5', text: '#B35488' } },
        { id: 'rest-api', name: 'RESTful APIs', color: { bg: '#F3EEEE', text: '#976D57' } },
      ],
      category: 'external-api',
      link: 'https://phenomenal-dolphin-3cfaaf.netlify.app/',
    },
    {
      id: '7',
      title: 'Tienda de Muebles',
      description: 'Tienda online de muebles con diseño atractivo.',
      image: '/07-muebles.png',
      technologies: [
        { id: 'html-css-js', name: 'HTML/CSS/JS', color: { bg: '#FAECEC', text: '#C4554D' } },
      ],
      category: 'ecommerce',
      link: 'https://housestore-page.vercel.app/tienda.html',
    },
    {
      id: '8',
      title: 'Venta de Auriculares',
      description: 'Tienda para venta de auriculares con diseño minimalista.',
      image: '/08-auriculares.png',
      technologies: [
        { id: 'html-css-js', name: 'HTML/CSS/JS', color: { bg: '#FAECEC', text: '#C4554D' } },
      ],
      category: 'ecommerce',
      link: 'https://2-tech-pro.vercel.app/',
    },
    {
      id: '9',
      title: 'Blog de Arquitectura Rústica',
      description: 'Blog para compartir contenido sobre arquitectura rústica.',
      image: '/09-arquitectura.png',
      technologies: [
        { id: 'html-css-js', name: 'HTML/CSS/JS', color: { bg: '#FAECEC', text: '#C4554D' } },
      ],
      category: 'social',
      link: 'https://arquitectura-bosque-ruby.vercel.app/',
    },
    {
      id: '10',
      title: 'Landing para App de Finanzas',
      description: 'Página de aterrizaje para una aplicación de finanzas.',
      image: '/10-finanzas.png',
      technologies: [
        { id: 'html-css-js', name: 'HTML/CSS/JS', color: { bg: '#FAECEC', text: '#C4554D' } },
      ],
      category: 'productivity',
      link: 'https://nucleus-delta.vercel.app/',
    },
    {
      id: '11',
      title: 'Página para Cafetería',
      description: 'Página web para una cafetería con diseño amigable.',
      image: '/11-cafeteria.png',
      technologies: [
        { id: 'html-css-js', name: 'HTML/CSS/JS', color: { bg: '#FAECEC', text: '#C4554D' } },
      ],
      category: 'social',
      link: 'https://cafeteria-fawn.vercel.app/',
    },
    {
      id: '12',
      title: 'Clone de DevTree',
      description: 'Clon de la plataforma DevTree, permitiendo gestionar proyectos y tareas.',
      image: '/12-devtree.png',
      technologies: [
        { id: 'react', name: 'React.js', color: { bg: '#E9F3F7', text: '#487CA5' } },
        { id: 'typescript', name: 'TypeScript', color: { bg: '#F6F3F8', text: '#8A67AB' } },
        { id: 'tailwind', name: 'Tailwind CSS', color: { bg: '#F9F2F5', text: '#B35488' } },
        { id: 'node', name: 'Node.js', color: { bg: '#EEF3ED', text: '#548164' } },
        { id: 'mongodb', name: 'MongoDB', color: { bg: '#EEF3ED', text: '#548164' } },
      ],
      category: 'fullstack',
      link: 'https://devtree-realjoaquin.netlify.app/',
    },
  ],
  filters: {
    searchQuery: '',
    selectedTechnologies: [],
    selectedCategory: null,
  },
  isSidebarCollapsed: false,
  
  setSearchQuery: (query) =>
    set((state) => ({
      filters: {
        ...state.filters,
        searchQuery: query,
        selectedTechnologies: [],
        selectedCategory: null,
      },
    })),
  
  setSelectedTechnologies: (techs) =>
    set((state) => ({
      filters: {
        ...state.filters,
        selectedTechnologies: techs,
        searchQuery: '',
        selectedCategory: null,
      },
    })),
  
  setSelectedCategory: (category) =>
    set((state) => ({
      filters: {
        ...state.filters,
        selectedCategory: category,
        searchQuery: '',
        selectedTechnologies: [],
      },
    })),
  
  clearFilters: () =>
    set(() => ({
      filters: {
        searchQuery: '',
        selectedTechnologies: [],
        selectedCategory: null,
      },
    })),
  
  toggleCategory: (category) =>
    set((state) => ({
      filters: {
        ...state.filters,
        selectedCategory: state.filters.selectedCategory === category ? null : category,
        searchQuery: '',
        selectedTechnologies: [],
      },
    })),
  
  toggleSidebar: () =>
    set((state) => ({
      isSidebarCollapsed: !state.isSidebarCollapsed,
    })),
}));
