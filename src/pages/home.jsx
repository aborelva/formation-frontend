import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Link } from 'react-router-dom';
// import vid from '../video/premier.mp4';
import { Container, Row, Col } from "react-bootstrap";
import imgUn from '../assets/images/chef1.jpg';
import imgdeux from '../assets/images/herbs.jpg';
import imgtrois from '../assets/images/resturant.jpg';
import '../Styles/home.css'
import Footer from '../components/Footer';
import axios from 'axios';
import { AuthContext } from '../context/Auth';



export default function home({ userID, setUserID }) {
    const [isAuthenticated, setIsAuthenticated, role, setRole] = useContext(AuthContext);

    const userId = userID ? userID : sessionStorage.getItem("userId");
    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:5000/user/login/${userId}`).then((res) => {
                console.log("user get homeJSX::::", res.data);
                const { user } = res.data;
                setUserID(user._id);
                setRole(user.role);
            }).catch((err) => {
                console.log("error get files :", err);
                console.error(err)
            })
        }
    }, [userId])
    return (
        <div>

            <section>
                <Carousel>
                    <Carousel.Item interval={3000} >
                        <img src={imgUn} className="home-slids" alt="premier block" />
                        <Carousel.Caption>
                            <h3>premier</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={imgdeux} className="home-slids" alt="deuxieme block" />
                        <Carousel.Caption>
                            <h3>Deuxieme</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={imgtrois} className="home-slids" alt="Troixieme block" />
                        <Carousel.Caption>
                            <h3>Troixieme</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </section>
            {/* section 2 */}
            <section className='p-4'>
                <div className="sect1">
                    <Container>
                        <Row>
                            <Col sm={6} className="col11" >
                                <div className="home-video">
                                    <div className="video" style={{ position: "relative", paddingBottom: "56.25%" /* 16:9 */, paddingTop: 35, height: 0 }}>
                                        {/* <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }}
                                            src="https://www.youtube.com/embed/BOwd8nsDh5Y" title="YouTube video player"
                                            frameBorder="0" allowFullScreen
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe> */}
                                    </div>
                                </div>
                            </Col>

                            <Col sm={6} className='home-text'>
                                <div className="text-center">
                                    <p>Une offre de formation 100% sur mesure</p>
                                    <p>Vous êtes intéressé par la restauration ?</p>
                                    <p>EUREKA vous accompagne et vous conseille dans vos projets de formation.</p>
                                    {/* <a href="###"><div>En savoir plus</div></a> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </section>
            <section className='sec-company p-4'>
                <h4 className='text-center'>Ils nous fait confiance</h4>
                <div className='d-flex flex-wrap justify-content-evenly p-4'>
                    <img className='company-markes' src="/images/basilic.jpg" alt="basilic" />
                    <img className='company-markes' src="/images/originalfood.jpg" alt="originalfood" />
                    <img className='company-markes' src="/images/ninkasi.jpg" alt="nankasi" />
                </div>
            </section>
            <section>
                <Footer />
            </section>

        </div>
    )
}
