export default function Skill( {title, description, icon} : {title: string, description: string, icon: string}) {
  return (
    <div className="skill">
      <object aria-label="skill icon" data={icon} width={60} height={60} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}