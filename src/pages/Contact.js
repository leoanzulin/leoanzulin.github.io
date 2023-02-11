import React from 'react';
import Header from '../components/Header'

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Contact</h1>
        <h2>Email</h2>
        <p>leoanzulin@gmail.com</p>
        <h2>Celular</h2>
        <p>(16) 99346-4300</p>
      </div>
    );
  }
}

export default Contact;