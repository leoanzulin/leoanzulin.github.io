import React from 'react';
import Header from '../components/Header'

class About extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>About</h1>
        <p>Olá meu nome é Leonardo Anzulin, tenho 26 anos sou Brasileiro residente em
São Carlos / SP, Curso Engenharia de Software na Universidade Estácio de Sá e Desenvolvimento web full stack na escola de programação Trybe. 
Durante a minha formação em Turismo tive contato com a programação e me apaixonei pela área, realizei alguns curso através da plataforma Udemy, e comecei a cursar Engenharia de Software, durante esse processo conheci a escola de programação Trybe e hoje além da Engenharia, curso Desenvolvimento Web Full Stack na Trybe e estou em busca da minha primeira oportunidade no mercado de trabalho na área.
        </p>
        <h1>Skils</h1>
        <h3>CSS</h3>
        <h3>HTML</h3>
        <h3>JavaScript</h3>
        <h3>Node.js</h3>
        <h3>React.js</h3>
        <h3>Jest</h3>
        <h3>RTL</h3>
      </div>
    );
  }
}

export default About;