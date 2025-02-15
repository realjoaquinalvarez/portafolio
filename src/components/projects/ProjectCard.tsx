import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Plus } from 'lucide-react';
import { Project } from '@/store/useProjectStore';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  link,
}: Project) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const visibleTags = technologies.slice(0, 5);
  const hiddenTags = technologies.slice(5);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cierra el popover si se hace click fuera del contenedor
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setPopoverOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="project-card group">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className={`absolute inset-0 bg-gray-100 ${imageLoaded ? 'hidden' : 'block'}`} />
        <img
          src={image}
          alt={title}
          className={`h-48 w-full object-cover transition-all duration-300 group-hover:scale-[1.02] ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <h3 className="mb-2 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>

      <div className="flex flex-wrap gap-1.5 items-center">
        {visibleTags.map((tech) => (
          <span
            key={tech.id}
            style={{ backgroundColor: tech.color.bg, color: tech.color.text }}
            className="tech-tag"
          >
            {tech.name}
          </span>
        ))}
        {hiddenTags.length > 0 && (
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPopoverOpen((prev) => !prev);
                }}
                className="tech-tag bg-indigo-50 text-indigo-800 hover:bg-indigo-100 transition-colors"
              >
                <Plus className="h-3 w-3" />
                {hiddenTags.length}
              </button>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="end"
              className="z-[999] max-w-48 bg-white shadow-lg border border-gray-200 p-2"
              sideOffset={5}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-wrap gap-1.5 content-start max-w-48 max-h-[200px] overflow-y-auto">
                {hiddenTags.map((tech) => (
                  <span
                    key={tech.id}
                    style={{ backgroundColor: tech.color.bg, color: tech.color.text }}
                    className="tech-tag text-xs"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>

      <a
        href={link}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
      >
        Visit <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
};
