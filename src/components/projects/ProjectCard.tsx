
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/store/useProjectStore';

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  link,
}: Project) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="project-card group">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div
          className={`absolute inset-0 bg-gray-100 ${
            imageLoaded ? 'hidden' : 'block'
          }`}
        />
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

      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech.id}
            style={{ backgroundColor: tech.color.bg, color: tech.color.text }}
            className="tech-tag"
          >
            {tech.name}
          </span>
        ))}
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
