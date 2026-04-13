import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../data/portfolio.json';

export default function Home() {
  return (
    <div className="bg-light min-vh-100">
      <Container className="py-5">
        <Row className="align-items-center py-5">
          <Col lg={7}>
            <h1 className="display-4 fw-bold text-dark mb-3">
              Hi, I&apos;m {data.name}
            </h1>
            <p className="lead text-muted mb-4">{data.title}</p>
            <p className="mb-4" style={{ fontSize: '1.1rem' }}>{data.bio}</p>
            <div className="d-flex gap-3">
              <Link to="/projects" className="btn btn-primary btn-lg">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline-dark btn-lg">
                Contact Me
              </Link>
            </div>
          </Col>
          <Col lg={5} className="text-center mt-4 mt-lg-0">
            <div className="bg-secondary bg-gradient rounded-circle d-inline-block p-5">
              <span className="display-1 text-white">{data.name.charAt(0)}</span>
            </div>
          </Col>
        </Row>

        <Row className="py-5">
          <Col md={4} className="mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">Clean Code</h3>
                <p className="card-text text-muted">Writing maintainable, well-documented code</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">Modern Tech</h3>
                <p className="card-text text-muted">Using latest technologies and best practices</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h3 className="card-title">DevOps</h3>
                <p className="card-text text-muted">Containerization and cloud deployment</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
