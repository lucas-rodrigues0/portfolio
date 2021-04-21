import React from 'react';
import { Accordion, Card, Container, ListGroup, Row } from 'react-bootstrap';

export default function ProfessionalHistory() {
  return (
    <Accordion>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Card
            bg=""
            text="dark"
            style={ { width: '90%' } }
            className="mb-2"
          >
          <Card.Title as="h3">Experiência profissional</Card.Title>
            <Card
              bg=""
              text="dark"
              className="mb-2"
            >
              <Card.Header>
              <Accordion.Toggle as={ Card.Header } variant="link" eventKey="0">- Assistente de Bartender na MSC Cruise Line</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Card.Title as="h4">Entre Nov/2018 a Mar/2020</Card.Title>
                  <Card.Subtitle as="h5" className="mb-2 text-muted">Responsabilidades:</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Atendimento direto com os clientes assegurando o padrão de qualidade;</ListGroup.Item>
                    <ListGroup.Item>Supervisionar o trabalho dos auxiliares de Bar e garçons em suas estações de trabalho;</ListGroup.Item>
                    <ListGroup.Item>Atender ao cliente de forma profissional, cordial e rápida;</ListGroup.Item>
                    <ListGroup.Item>Atender a todos requerimentos de higiene aplicadas;</ListGroup.Item>
                    <ListGroup.Item>Auxiliar o Bartender em manter a área de trabalho limpa e higienizada, com estoque e seguindo o padrão estabelecido;</ListGroup.Item>
                    <ListGroup.Item>Assegurar da qualidade dos produtos perecíveis como sucos, frutas e preparados antes da utilização dos mesmos;</ListGroup.Item>
                    <ListGroup.Item>Auxiliar o Bartender na feitura de requisições e inventários do bar que lhe foi designado;</ListGroup.Item>
                    <ListGroup.Item>Saber todas as receitas apresentadas no manual do departamento de Bar da companhia;</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          <Card
            bg=""
            text="dark"
            className="mb-2"
          >
              <Card.Header>
              <Accordion.Toggle as={ Card.Header } variant="link" eventKey="1">- Bartender/ Gerente no espaço BOCA</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Card.Title as="h4">Entre Jul/2016 a Nov/2018</Card.Title>
                  <Card.Subtitle as="h5" className="mb-2 text-muted">Responsabilidades:</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Atendimento direto com os clientes assegurando o padrão de qualidade;</ListGroup.Item>
                    <ListGroup.Item>Criação da carta de bebidas e manutenção do estoque no espaço;</ListGroup.Item>
                    <ListGroup.Item>Organização de eventos culturais no espaço, como festas, shows, arte cênicas e outros eventos culturais;</ListGroup.Item>
                    <ListGroup.Item>Fazer o inventário e a requisição de fornecedores para a manutenção do estoque de produtos gerais;</ListGroup.Item>
                    <ListGroup.Item>Organizar os turnos e equipes de atendimento, limpeza e segurança;</ListGroup.Item>
                    <ListGroup.Item>Manutenção geral do espaço e seus equipamentos;</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          <Card
            bg=""
            text="dark"
            className="mb-2"
          >
              <Card.Header>
              <Accordion.Toggle as={ Card.Header } variant="link" eventKey="2">- Produtor de Eventos | Freelancer</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Card.Title as="h4">Entre Fev/2013 a Dez/2017</Card.Title>
                  <Card.Subtitle as="h5" className="mb-2">Produção de Festas de música e Festas artísticas</Card.Subtitle>
                  <Card.Text>Exemplo dessas festas: “Bota na Roda”, Festa que englobava música, performance e exposição realizada em locais diversos e alternativos, com edições mensais e com temáticas variadas, atuando na organização geral dos eventos; “Finalmente”, festa de música eletrônica, atuando no gerenciamento do bar; “Novo Romance”, atuando como bartender.</Card.Text>
                  <Card.Subtitle as="h5" className="mb-2 text-muted">Responsabilidades:</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Organizar e produzir a preparação de cada evento, as equipes de trabalho, fornecedores e serviços necessários;</ListGroup.Item>
                    <ListGroup.Item>Organizar a infraestrutura do Bar, Caixa de compra, iluminação e equipamentos de som;</ListGroup.Item>
                    <ListGroup.Item>Gerenciamento do bar durante o evento;</ListGroup.Item>
                    <ListGroup.Item>Atuar no atendimento direto com o público para manter o funcionamento do serviço oferecido;</ListGroup.Item>
                  </ListGroup>
                  <Card.Text>-</Card.Text>
                  <Card.Subtitle as="h5" className="mb-2">Produtor assistente - Autônomo</Card.Subtitle>
                  <Card.Text>Além das festas também trabalhou com eventos variados, incluindo montagem de exposições, festivais e eventos corporativos. Alguns exemplos: Coordenador de transporte aéreo para a RCMP Brazil Marketing em 2014 na Copa do Munda FIFA, operando para patrocinadores como Budweiser, Mc Donald, Sony entre outros.</Card.Text>
                  <Card.Subtitle as="h5" className="mb-2 text-muted">Responsabilidades:</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Interagir com o público/cliente assegurando a manter o padrão de qualidade estabelecido para cada evento;</ListGroup.Item>
                    <ListGroup.Item>Liderar time durante a realização do evento;</ListGroup.Item>
                    <ListGroup.Item>Organizar o transporte e acomodações para quem for necessário para cada evento;</ListGroup.Item>
                    <ListGroup.Item>Assegurar que o cronograma seja mantido como planejado;</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Card>
        </Row>
      </Container>
    </Accordion>
  );
}
