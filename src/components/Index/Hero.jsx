import React from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { RiPlayFill } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleShowCV = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const navigate = useNavigate();

    const handleOpenTrabajos = () => {
        navigate('/trabajos');
    };


    return (
        <section className="hero" style={{ color: 'black' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="hero-text">
                        <h5>Frontend Developer</h5>
                        <h1>Juan Triana</h1>
                        <div className="profile-statement">
                            <h3 className="fresh-graduate">Ingeniero Multimedia</h3>
                        </div>
                        <div className="d-flex gap-3">
                            <Button variant="primary" onClick={handleShowCV}>CV</Button>
                            <Button variant="outline-light" onClick={handleOpenTrabajos}>
                                <RiPlayFill className="me-2" />Mirá mis Trabajos
                            </Button>
                        </div>
                    </Col>

                    <Col lg={6} className="hero-img text-end">
                        <img
                            src="/assets/imgs/sergie.png"
                            alt=""
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>

            {/* Modal para CV */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'black' }}>Mi CV</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: '80vh' }}>
                    <iframe
                        src="/PDF/Profile.pdf"
                        title="CV"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', minHeight: '70vh' }}
                    />
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default Hero;
