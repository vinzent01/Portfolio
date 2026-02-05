import { useEffect, useState } from "react";
import { Project } from "./ProjectList";


export default function ProjectContainer({project, onClose: closeContainer} : {project: Project, onClose: () => void}) {
    let [preview, setPreview] = useState<string | null>(null);

    function handleImageClick(imageSrc: string) {
        setPreview(imageSrc);
    }

    useEffect(() => {

        if (preview == null){
            if (project.images && project.images.length > 0) {
                setPreview(project.images[0].src);
            }
        }
        else {
            setPreview(preview);
        }
    }, [project, preview]);

    return (
        <div className="background">
            <div className="project-container">
                <div className="project-header">
                    <h2>{project.title}</h2>
                    <button className="close-button" onClick={() => closeContainer()}>
                        <img width={50} height={50} src="/svg/close.svg" alt="Close" />
                    </button>
                </div>
                <div>
                    {preview && (
                        <img className="project-preview" alt={project.title} src={preview} />
                    )}

                    <div className="project-images">
                        {project.images && project.images.map((image, index) => (
                            <img
                                key={index}
                                alt={`${project.title} ${index + 1}`}
                                src={image.src}
                                onClick={() => handleImageClick(image.src)}
                            />
                        ))}
                    </div>


                    {project.descriptions && project.descriptions.pt && (
                        <p>{project.descriptions.pt}</p>
                    )}

                    {project.links && (
                        <div className="project-links">
                            {project.links.github && (
                                <div className="project-link">
                                    <img width={50} height={50} src="/svg/github.svg" alt="GitHub" />
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">{project.links.github}</a>
                                </div>
                            )}
                            {project.links.site && (
                                <div className="project-link">
                                    <img width={50} height={50} src="/svg/site.svg" alt="Site" />
                                    <a href={project.links.site} target="_blank" rel="noopener noreferrer">{project.links.site}</a>
                                </div>
                            )}
                        </div>
                    )}

                    {project.stacks && project.stacks.length > 0 && (
                        <div className="project-stacks">
                            {project.stacks.map((stack, index) => (
                                <img key={index} className="project-stack" alt={stack} src={`${stack}`} />
                            ))}
                        </div>
                    )}
                </div>


            </div>

        </div>
       
    );
}