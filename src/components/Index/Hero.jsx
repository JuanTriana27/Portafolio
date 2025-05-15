import { Container, Row, Col } from 'react-bootstrap';
import { RiPlayFill } from "@remixicon/react";
import { Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="hero-text">
                        <h5>Frontend Developer</h5>
                        {/* <h4>ReactJS Tech Lead</h4> */}
                        <h1>Juan Triana</h1>
                        <div class="profile-statement">
                            <h3 class="fresh-graduate">Ingeniero Multimedia</h3>

                        </div>
                        <div className="d-flex gap-3">
                            <Button variant="primary">CV</Button>
                            <Button variant="outline-light">
                                <RiPlayFill className="me-2" />Mirá mis videos
                            </Button>
                        </div>
                    </Col>

                    <Col lg={6} className="hero-img text-end">
                        <img
                            src="/assets/imgs/sergie.png"
                            alt="sergie code"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;