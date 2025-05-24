import { MouseEventHandler } from "react";

export interface Project {
  id: number;
  title: string;
  images?: { src: string }[];
  descriptions?: {pt? : string, en? : string};
  stacks?: string[];
  links?: {
    github?: string;
    site?: string;
    video?: string;
  };
}


interface Props {
  projects: Project[];
  onClickProject?: (event: React.MouseEvent<HTMLDivElement>, project: Project) => void;
}



export default function ProjectList({projects, onClickProject} : Props) {
  return (
    <div className="projects-list">
      {projects.map((project : any) => (
        <>
          { project.images != undefined && project.images.length > 0 &&
            <div key={project.title} className="project" onClick={(e) => onClickProject?.(e, project)}>
                <img  alt={project.title} src={project.images[0].src}></img>
            </div>
          }
        </>
      ))}

    </div>
  )
}