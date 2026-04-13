import { Container, Row, Col, Card } from 'react-bootstrap';
import data from '../data/portfolio.json';

export default function About() {
  return (
    <div className="min-vh-100 bg-white">
      <Container className="py-5">
        <h1 className="display-5 fw-bold mb-4">About Me</h1>
        
        <Row className="mb-5">
          <Col lg={8}>
            <p className="lead mb-4">{data.bio}</p>
            <p className="text-muted">
              I am a passionate developer focused on building scalable web applications
              and microservices. With experience in both frontend and backend development,
              I strive to create seamless user experiences backed by robust architectures.
            </p>
          </Col>
        </Row>

        <h2 className="h3 fw-bold mb-4">Experience</h2>
        <Row className="mb-5">
          {data.experience.map((exp, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h5 fw-bold">{exp.role}</h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-muted mb-2">{exp.period}</p>
                  <p className="mb-0">{exp.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="h3 fw-bold mb-4">Connect</h2>
        <Row>
          <Col>
            <div className="d-flex gap-3">
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                GitHub
              </a>
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                LinkedIn
              </a>
              <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                Twitter
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
