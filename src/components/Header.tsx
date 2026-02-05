export default function Header({hideContact = false} : {hideContact?: boolean}) {
  return (
    <header className='header'>
      <h2>
        <a href="#home" className='logo no-highlight'>
          Ryan C.S
        </a>
      </h2>
      <nav className='nav'>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          {!hideContact && (
            <li>
              <a href="#contact">Contato</a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}