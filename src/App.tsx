import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router'
import logo from './logo.svg';
import './css/App.css';
import { GetAllProjects } from './GetData';

function ProjectList({projects} : {projects: []}){
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

function ProjectsSection({projects} : {projects: []}) {
  return (
    <section className="projects" id="projetos">
      <h2 className='highlight'>Projetos</h2>
      <ProjectList projects={projects}/>
    </section>
  )
}


function App() {
  const year = new Date().getFullYear();
  const [searchparams ] = useSearchParams();
  const [projects, setProjects] = useState([]);

  const hideContact = searchparams.has('hide-contact');

  useEffect( () => {
    document.title = "Vinzent - Portfolio";
    
    GetAllProjects().then((data) => {
      setProjects(data);
    })
  }, []);

  return (
    <div className="App">
      <header className='header'>
        
        <h2>
          <a href="#home" className='logo no-highlight'>
          Vinzent
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

      <main className='main'>
        <section className="hero" id="home">
          <h1 className='hero-title'>
            <span className='highlight'>{`<>`}</span>
            Olá, eu<br/>
            Sou um Desenvolvedor
            <span className='highlight'>{`</>`}</span>
          </h1>
          <p>
            Um programador fascinado por criar novos projetos e novas soluções criativas
          </p>
        </section>

        <section className="about" id="about">
          <h2 className='highlight'>Sobre mim</h2>
          <p>
            Olá, meu nome é Ryan da costa sousa e sou um desenvolvedor de software fascinado por criar soluções criativas. 
            Tenho experiência em desenvolvimento front-end e back-end, além de habilidades em design de jogos. 
            Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
          </p>
        </section>

        <section className="skills" id="skills">
          <h2 className='highlight'>Skills</h2>
          <div className="skills-list">
            <div className="skill">
              <object data="/svg/application-brackets.svg" width={60} height={60}/>
              <h3>Front-End Development</h3>
              <p>Habilidades em desenvolvimento frontend com HTML, CSS e Javascript</p>
            </div>
            <div className="skill">
              <img src="/svg/code.svg" width={60} height={60}/>
              <h3>Back-End Development</h3>
              <p>Habilidades em desenvolvimento de aplicações Back-End com Node, NextJS e mais.</p>
            </div>
            <div className="skill">
              <img src="/svg/controller.svg" width={60} height={60}/>
              <h3>Desenvolvimento de Games</h3>
              <p>proficiente em desenvolvimento de games em C#, Monogame e Raylib</p>
            </div>
          </div>
        </section>

        <ProjectsSection projects={projects as []}/>

        {!hideContact && (
          <section className="contact" id="contact">
            <h2 className='highlight'>Contato</h2>
            <p>
              Se você está interessado em trabalhar comigo ou tem alguma dúvida, sinta-se à vontade para entrar em contato. 
              Estou sempre aberto a novas oportunidades e colaborações.
            </p>
            <div className="contact-list">
              <div className='contact-item'>
                <img src="/svg/email.svg" width={52} height={52}></img> 
                <a href="mailto:ryan.costasousa@gmail.com" target='_blank'>ryan.costasousa01@gmail.com</a> 
              </div>
              <div className='contact-item'>
                <img src="/svg/github.svg" width={52} height={52}></img> 
                <a href="https://github.com/vinzent01" target='_blank'>github.com/vinzent01</a>
              </div>
            </div>
            <form className="contact-form">
              <input type="email" placeholder="Seu email" required />
              <textarea placeholder="Sua mensagem" required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </section>
        )}
      </main>


      <footer className='footer'>
        <a href="https://github.com/vinzent01/portfolio" target='_blank'>
          <img width={40} height={40} src="/svg/github.svg"/>
        </a>
        <p>Vinzent &copy; {year}</p>

      </footer>
        
    </div>
  );
}

export default App;
