import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import data from '../data/portfolio.json';

export default function Skills() {
  const getLevelVariant = (level: number): string => {
    if (level >= 85) return 'success';
    if (level >= 70) return 'primary';
    if (level >= 50) return 'info';
    return 'warning';
  };

  return (
    <div className="min-vh-100 bg-light">
      <Container className="py-5">
        <h1 className="display-5 fw-bold mb-4">Skills</h1>
        <p className="lead text-muted mb-5">
          Technologies and tools I work with
        </p>

        <Row>
          <Col lg={8}>
            {data.skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <strong>{skill.name}</strong>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <ProgressBar
                  now={skill.level}
                  variant={getLevelVariant(skill.level)}
                  style={{ height: '12px' }}
                />
              </div>
            ))}
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2 className="h4 fw-bold mb-4">Technologies</h2>
            <div className="d-flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge bg-secondary fs-6 py-2 px-3"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
