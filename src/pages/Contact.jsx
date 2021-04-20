import React from 'react';
import Header from '../components/Header';

function ContactMe() {
  const email = 'e-mail > lucas.movimento@gmail.com / lucasr.producao@gmail.com';
  const tel = 'telefone > +55 21 97213-9309';
  return (
    <div>
      <Header />
      <span>Hello, Contact!</span>
      <section>
        <section>
          <h2>Contatos</h2>
          <span>Sempre aberto a troca de informações, coversas e feedback. Só mandar uma mensagem. Abraços!</span>
        </section>
        <section>
          <h4>Fale Comigo!</h4>
          <span>{ email }</span>
          <span>{ tel }</span>
        </section>
        <section>
          <h4>redes sociais</h4>
          <a href="https://www.linkedin.com/in/lucas-rodrigues-0107a5b3/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          <a href="https://github.com/lucas-rodrigues0" rel="noopener noreferrer" target="_blank">Github</a>
          <a href="https://lucasrodrigues386908999.wordpress.com/" rel="noopener noreferrer" target="_blank">Wordpress</a>
          <a href="https://twitter.com/lucasrdecastro" rel="noopener noreferrer" target="_blank">Twitter</a>
          <a href="https://www.instagram.com/lucasrodriguesdecastro/" rel="noopener noreferrer" target="_blank">Instagram</a>
        </section>
      </section>
    </div>

  );
}

export default ContactMe;
