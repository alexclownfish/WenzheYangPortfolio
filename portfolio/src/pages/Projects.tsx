import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import data from '../data/portfolio.json';

export default function Projects() {
  return (
    <div className="min-vh-100 bg-white">
      <Container className="py-5">
        <h1 className="display-5 fw-bold mb-4">Projects</h1>
        <p className="lead text-muted mb-5">
          Some of my recent work
        </p>

        <Row>
          {data.projects.map((project) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="badge bg-light text-dark me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
