import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
// import logo from "../assets/logoSite.jpeg";
import './footer.css';
import { BsFillEnvelopeFill, BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()

    return (
        <>
            <section className='bg-light p-5'>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={3} >
                            <img src="/images/logosite.svg" loading='lazy' width={200} height={200} title='logo-footer' onClick={() => navigate("/")} className="img-fluid footer-icon " alt="logo"></img>
                        </Col>

                        <Col sm={6} md={3} >
                            <div className="p-2">
                                <p>Nous trouver :</p>
                                <Row className='p-2'>
                                    <Col sm={4} xs={4}>
                                        <a href='https://www.linkedin.com/in/dominiquedura' rel="noopener noreferrer" target={"_blank"}><BsLinkedin /></a>
                                    </Col>
                                    <Col sm={4} xs={4}  >
                                        <a href='tel:+33688464682' className='text-primary'> <FiPhoneCall /></a>
                                    </Col>
                                    <Col sm={4} xs={4} >
                                        <a href="mailto:dominique.dura@orange.fr" className='text-primary'><BsFillEnvelopeFill /></a>
                                    </Col>
                                </Row>

                                {/* <Col sm={4} xs={4}  >
                                        <a href="tel:votre numero" className='text-primary'> <FiPhoneCall /></a>
                                    </Col>
                                    <Col sm={4} xs={4} >
                                        <a href="mailto:dominique.dura@orange.fr" className='text-primary'><BsFillEnvelopeFill /></a>
                                    </Col> */}
                            </div>
                        </Col>

                        <Col sm={6} md={3}>
                            <div>
                                <Link className="d-block p-2" to={'/mentionlegales'}>Mentions légales</Link>
                                <Link className="d-block p-2" to={'/gestioncookies'}>Confidentialité</Link>
                                {/* <p className="d-block p-2">Conditions Générales</p> */}
                            </div>
                        </Col>

                        <Col sm={6} md={3}>
                            {/* <div className="d-block "> */}
                            <Link className="d-block p-2" to={'/nosformation'}>Nos formations</Link>
                            <Link className="d-block p-2" to={'/notremission'}>Notre mission</Link>
                            <Link className="d-block p-2" to={'/financer'}>Financer votre formation</Link>
                            {/* </div> */}
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}
