import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router'
import { GetAllProjects } from './GetData';
import './css/App.css';
import Header from './components/Header';
import Skill from './components/Skill';
import ProjectList from './components/ProjectList';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
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
      <Header hideContact={hideContact}/>

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
          <ProjectList projects={projects as []}/>
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
