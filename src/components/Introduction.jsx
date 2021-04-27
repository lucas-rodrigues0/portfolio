import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

export default function Introduction() {
  return (
    <section>
      <Jumbotron fluid>
        <Container>
          <p>
            Profissional autônomo em transição de carreira para a área de técnologia. Atualmente estudo Desenvolvimento Full Stack na Trybe, além dos estudos pela internet.
          </p>
          <p>
            Sou luso-brasileiro, sendo brasileiro por parte de mãe e português por parte de pai. Nasci no Rio de Janeiro onde também moro atualmente. Tenho a formação superior de Tecnólogo em Cinema e Bacharel em Dança Contemporânea.
            Trabalhei artisticamente com diversos segmentos das artes (Cinema, Dança, Teatro e Circo) e na produção de eventos como festivais e exposições. Também tenho uma formação de Bartender pelo Senac/RJ, já tendo trabalhado com a coquetelaria de alta classe em navios de cruzeiros pelo Brasil e Europa.
          </p>
          <p>
            Tenho grande interesse em trabalhar com tecnologia para o desenvolvimento de ferramentas que possam beneficiar a sociedade. Principalmente nas áreas de segurança cibernética, de promoção dos direitos humanos, de combate a desigualdade e injustiça, ou na área ambiental. Uma frase que representa a síntese desse interesse seria "Salvando o Mundo com um Algoritmo de Cada Vez".
          </p>
        </Container>
      </Jumbotron>
    </section>
  );
}
