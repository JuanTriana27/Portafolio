// components/Trabajos.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

const Trabajos = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const proyectos = [
        {
            title: "Cali Travel Guide",
            url: "https://calitravelguide.netlify.app/",
            ratio: "16/9"
        },
        {
            title: "Juego de Dibujo con Spring + React",
            url: "https://pintandoandamos.netlify.app/",
            ratio: "16/9"
        },
        {
            title: "Store Fly",
            url: "https://tienda-aviones.vercel.app/",
            ratio: "16/9"
        },
        // {
        //     title: "TN Shop",
        //     url: "https://tnshop.netlify.app/",
        //     ratio: "16/9"
        // },
        // {
        //     title: "Ruta del Café Colombiano",
        //     url: "https://rutadelcafecolombiano.netlify.app/",
        //     ratio: "16/9"
        // },
        {
            title: "Inmobiliaria En Spring Boot + React",
            url: "https://inmobiliariadb.netlify.app/",
            ratio: "16/9"
        }
    ];

    const handleNext = () => {
        setCurrentProjectIndex((prev) => (prev + 1) % proyectos.length);
    };

    const handlePrev = () => {
        setCurrentProjectIndex((prev) =>
            prev === 0 ? proyectos.length - 1 : prev - 1
        );
    };

    return (
        <div className="trabajos-page">
            <Container fluid className="h-100">
                <Row className="h-100 align-items-center">
                    <Col className="text-center position-relative">

                        {/* Botones de navegación */}
                        <div className="navigation-buttons">
                            <Button
                                variant="outline-light"
                                onClick={handlePrev}
                                className="me-2"
                            >
                                <RiArrowLeftSLine size={24} />
                            </Button>

                            <Button
                                variant="outline-light"
                                onClick={handleNext}
                            >
                                <RiArrowRightSLine size={24} />
                            </Button>
                        </div>

                        {/* Contador de proyectos */}
                        <div className="project-counter">
                            {currentProjectIndex + 1} / {proyectos.length}
                        </div>

                        {/* Contenedor del proyecto */}
                        <div className="project-container">
                            <h2 className="project-title mb-2">
                                {proyectos[currentProjectIndex].title}
                            </h2>

                            {/* Link debajo del título */}
                            <p className="project-link mb-4">
                                Para un mejor funcionamiento ingresa:{" "}
                                <a
                                    href={proyectos[currentProjectIndex].url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {proyectos[currentProjectIndex].url}
                                </a>
                            </p>

                            <div className="iframe-force-reset">
                                <iframe
                                    src={proyectos[currentProjectIndex].url}
                                    title={proyectos[currentProjectIndex].title}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '80vh',
                                        border: 'none',
                                        borderRadius: '15px',
                                        isolation: 'isolate',
                                        contain: 'strict',
                                        mixBlendMode: 'normal'
                                    }}
                                    sandbox="allow-scripts allow-same-origin"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    importance="low"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Trabajos;