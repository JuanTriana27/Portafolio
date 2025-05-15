import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RiPlayFill } from "@remixicon/react";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


const Hero = () => {
    

    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <section className="hero" style={{ color: 'black' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="hero-text">
                        <h5>Frontend Developer</h5>
                        {/* <h4>ReactJS Tech Lead</h4> */}
                        <h1>Juan Triana</h1>
                        <div className="profile-statement">
                            <h3 className="fresh-graduate">Ingeniero Multimedia</h3>
                        </div>
                        <div className="d-flex gap-3">
                            <Button variant="primary" onClick={handleShowModal}>CV</Button>
                            <Button variant="outline-light" onClick={() => setShowModal('videos')}>
                                <RiPlayFill className="me-2" />Mirá mis Trabajos
                            </Button>
                        </div>
                    </Col>

                    <Col lg={6} className="hero-img text-end">
                        <img
                            src="/assets/imgs/sergie.png"
                            alt="iamge"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal === true || showModal === 'cv'} onHide={handleCloseModal} size="lg" centered>
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
                    ></iframe>
                </Modal.Body>
            </Modal>

            <Modal show={showModal === 'videos'} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'black' }}>Mis Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                        <iframe
                            src="https://www.behance.net/embed/project/207327371?ilo0=1"
                            height="316"
                            width="404"
                            allowFullScreen
                            loading="lazy"
                            frameBorder="0"
                            allow="clipboard-write"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Video 1"
                        ></iframe>
                        <iframe
                            src="https://www.behance.net/embed/project/207327549?ilo0=1"
                            height="316"
                            width="404"
                            allowFullScreen
                            loading="lazy"
                            frameBorder="0"
                            allow="clipboard-write"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Video 2"
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default Hero;