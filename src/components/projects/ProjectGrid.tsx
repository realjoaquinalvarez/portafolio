import { Project, useProjectStore } from "@/store/useProjectStore";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const { isSidebarCollapsed, toggleSidebar } = useProjectStore();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="animate-slide-up">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};
