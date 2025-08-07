
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  link?: string;
  linkText?: string;
  className?: string;
  status?: 'active' | 'inactive' | 'yellow' | 'green' | 'red';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  year,
  link,
  linkText = "View Project",
  className,
  status
}) => {
  const getStatusColor = () => {
    switch(status) {
      case 'active':
      case 'green':
        return 'bg-green-500 animate-status-pulse';
      case 'yellow':
        return 'bg-yellow-400 animate-status-pulse';
      case 'red':
        return 'bg-red-500 animate-status-pulse';
      case 'inactive':
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className={cn("project-card", className)}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-xl">{title}</h3>
          {status && (
            <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor()}`}></span>
          )}
        </div>
        {year && <span className="text-sm text-muted-foreground">{year}</span>}
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      {link && (
        <a 
          href={link} 
          className="story-link text-sm"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
