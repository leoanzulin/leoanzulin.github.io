import React from 'react';
import Header from '../components/Header'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Home</h1>
        <h1>Leonardo Anzulin</h1>
        <h2>Front-End Developer</h2>
        <button onClick={() => window.open("https://www.linkedin.com/in/leoanzulin/")}>LinkeDin</button>
        <button onClick={() => window.open("https://github.com/leoanzulin")}>GitHub</button>
        <button>Download CV</button>
      </div>
    );
  }
}

export default Home;