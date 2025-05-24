export default function ProjectList({projects} : {projects: []}){
  return (
    <div className="projects-list">
      {projects.map((project : any) => (
        <>
          { project.images != undefined && project.images.length > 0 &&
            <div key={project.title} className="project">
                <img  alt={project.title} src={project.images[0].src}></img>
            </div>
          }
        </>
      ))}

    </div>
  )
}