import { Container, Row, Col, Card } from 'react-bootstrap';
import data from '../data/portfolio.json';

export default function Contact() {
  return (
    <div className="min-vh-100 bg-light">
      <Container className="py-5">
        <h1 className="display-5 fw-bold mb-4">Contact</h1>
        <p className="lead text-muted mb-5">
          Get in touch with me
        </p>

        <Row>
          <Col lg={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h3 className="h5 fw-bold mb-4">Contact Information</h3>
                
                <div className="mb-4">
                  <h4 className="h6 fw-bold text-muted mb-2">Email</h4>
                  <a href={`mailto:${data.email}`} className="text-decoration-none">
                    {data.email}
                  </a>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-bold text-muted mb-2">GitHub</h4>
                  <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    {data.github}
                  </a>
                </div>

                <div className="mb-4">
                  <h4 className="h6 fw-bold text-muted mb-2">LinkedIn</h4>
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    {data.linkedin}
                  </a>
                </div>

                <div>
                  <h4 className="h6 fw-bold text-muted mb-2">Twitter</h4>
                  <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    {data.twitter}
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="h5 fw-bold mb-4">Send a Message</h3>
                <p className="text-muted">
                  Feel free to reach out through any of the channels above.
                  I typically respond within 24-48 hours.
                </p>
                <p className="text-muted">
                  For quick communication, Twitter DMs are often the fastest way to get a response.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
