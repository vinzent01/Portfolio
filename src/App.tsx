import React, {MouseEventHandler, useEffect, useState} from 'react';
import { useSearchParams } from 'react-router'
import { GetAllProjects } from './GetData';
import './css/App.css';
import Header from './components/Header';
import Skill from './components/Skill';
import ProjectList, { Project } from './components/ProjectList';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectContainer from './components/ProjectContainer';

function App() {
  const [searchparams ] = useSearchParams();
  const [projects, setProjects] = useState([]);
  // currently selected project, if any
  const [project, setProject] = useState<Project | null>(null);

  const hideContact = searchparams.has('hide-contact');

  function OnClickProject(event : React.MouseEvent<HTMLDivElement> , project : Project) {
    setProject(project);
  }

  function OnCloseContainer() {
    setProject(null); 
  }

  useEffect( () => {
    
    GetAllProjects().then((data) => {
      setProjects(data);
    })
  }, []);

  return (
    <div className="App">
      <title>Portfólio </title>
      <meta property="og:title" content="Portfólio" />
      <meta property="og:description" content="Site de portfólio" />

      <Header hideContact={hideContact}/>

      {project && (
        <ProjectContainer project={project} onClose={OnCloseContainer}/>
      )}

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
            Olá, meu nome é Ryan da costa sousa e sou um desenvolvedor de softwares. 
            Tenho experiência em desenvolvimento front-end e back-end, além de habilidades em criações de jogos com a biblioteca Raylib. 
            Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
          </p>
        </section>

        <section className="skills" id="skills">
          <h2 className='highlight'>Skills</h2>
          <div className="skills-list">
            <Skill
              title="Front-End Development"
              description="Habilidades em desenvolvimento frontend com HTML, CSS e Javascript"
              icon="/svg/application-brackets.svg"
            />
            <Skill
              title="Back-End Development"
              description="Habilidades em desenvolvimento de aplicações Back-End com Node, NextJS e mais."
              icon="/svg/code.svg"
            />    
            <Skill
              title="Desenvolvimento de Games"
              description="proficiente em desenvolvimento de games em C#, Monogame e Raylib"
              icon="/svg/controller.svg"
            />
          </div>
        </section>

        <section className="projects" id="projetos">
          <h2 className='highlight'>Projetos</h2>
          <ProjectList projects={projects as []} onClickProject={OnClickProject}/>
        </section>

        {!hideContact && (
          <section className="contact" id="contact">
            <h2 className='highlight'>Contato</h2>
            <p>
              Se você está interessado em trabalhar comigo ou tem alguma dúvida, sinta-se à vontade para entrar em contato. 
              Estou sempre aberto a novas oportunidades e colaborações.
            </p>
            <ContactList/>
            <ContactForm />
          </section>
        )}
      </main>
    <Footer/>
    </div>
  );
}

export default App;
