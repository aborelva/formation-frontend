import React, { useState } from "react";
import Footer from "../components/Footer";
import "./nousContact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import sidimag from "./imag/design.svg";
import axios from "axios";
import Modale from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

import Modal from "react-modal";

export default function NousContacter() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [departement, setDepartement] = useState("");
    const [statu, setStatu] = useState("");
    const [participants, setParticipants] = useState("");
    const [theme, setTheme] = useState("");

    const [fullscreen, setFullscreen] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [mapShowModal, setMapShowModal] = useState(false);
    const [modalMessage, setmodalMessage] = useState("");
    const [recaptcha, setRecaptcha] = useState("");

    // const reCaptcharef = useRef(null);

    // console.log("recaptcha value ", recaptcha);
    // const onchange = (value) => {
    //     console.log("recaptcha value ", value);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name, email, message, departement, phone);
        await axios.post("http://localhost:5000/user/contactus", {
            name: name, phone: phone, email: email, message: message, captcha: recaptcha,
            departement: departement, statu: statu, participants: participants, theme: theme
        }).then((res) => {
            setmodalMessage(res.data);
            setShowModal(true);
            e.target.reset();
        }).catch(({ response }) => {
            console.log("contact us :", response);
            setmodalMessage(response.data);
            setShowModal(true);
        })

    };

    return (
        <>
            <div className="nouscontactform">
                {/* <h1 className="p-3 text-light">Nous contacter</h1> */}
                <div className="formul-nous-contact">
                    <div className="col-md-5 p-3">
                        <div className="nous-contact-side p-4">
                            <h1>IDOINE Formation</h1>
                            <hr className="khat-nous-contact" />
                            <h6>Vous avez une question à propos de nos formations ?
                                notre équipe s'engage à vous reppeler dans les plus bref délais.
                            </h6>
                            <div className="d-flex">
                                <span role="button" onClick={() => { setMapShowModal(true); setFullscreen(true) }} className='text-primary'><BsGeoAlt /></span><p className="ps-2"> 6 Rue Dorine Bourneton ZAC les coquelicots
                                    42160 Andrézieux-Bouthéon</p>
                            </div>
                            <div className="d-flex">
                                <a href="tel:+33688464682" className='text-primary'> <FiPhoneCall /></a>
                                <p className="ps-2"> +336-88-46-46-82</p>
                            </div>
                            <div className="inside-nous-contact">
                                <p>Vous êtes formateur? contactez nous à <br /> dominique.idoine@orange.fr </p>
                            </div>
                        </div>
                    </div>
                    <div className="contactform col-md-5">
                        <form className="p-2" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                            <div>
                                <label htmlFor="name" className="form-label"> Nom et Prènom </label>
                                <input type="text" id="name" name="name" className="form-control" required onChange={(e) => setName(e.target.value)} placeholder="Prènom et Nom *" />
                            </div>
                            <div className="email-content">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" name="email" className="form-control" required onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email *" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" id="phone" name="phone" className="form-control" required onChange={(e) => setPhone(e.target.value)} placeholder="téléphone *" />
                            </div>
                            <div>
                                <label htmlFor="ville" className="form-label">Département/Ville</label>
                                <input type="text" id="ville" name="ville" className="form-control" required onChange={(e) => setDepartement(e.target.value)} placeholder="Département/Ville *" />
                            </div>
                            <div>
                                <label htmlFor="statu" className="form-label">Statu</label>
                                <input type="text" id="statu" name="statu" className="form-control" required onChange={(e) => setStatu(e.target.value)} placeholder="Statu *" />
                            </div>

                            <div>
                                <label htmlFor="participants" className="form-label">Nombre de participants</label>
                                <input type="text" id="participants" name="participants" className="form-control" required onChange={(e) => setParticipants(e.target.value)} placeholder="participants *" />
                            </div>
                            <div>
                                <label htmlFor="theme" className="form-label">Thème de formation</label>
                                <input type="text" id="theme" name="theme" className="form-control" onChange={(e) => setTheme(e.target.value)} placeholder="Thème" />
                            </div>

                            <div>
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" name="message" spellCheck="true" className="form-control" required onChange={(e) => setMessage(e.target.value)} placeholder="message *"
                                />
                            </div>
                            <div className="form-group pt-3">
                                <ReCAPTCHA sitekey="6Le7E94eAAAAANxRH_jg71-jZsRL19pr5vicwkaH" onChange={(e) => setRecaptcha(e)} />
                            </div>
                            <button className="btn btn-primary mt-2" type="submit">Envoyer</button>
                            <button className="btn btn-warning ms-3 mt-2" type="reset">reset</button>
                        </form>
                    </div>
                </div>
            </div>
            <Modal className="modal-signup rounded-pill bg-light col-4" ariaHideApp={false} onRequestClose={() => setShowModal(false)} isOpen={showModal} >
                <h1>{modalMessage}</h1>
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>fermer</button>
            </Modal>
            <Modale fullscreen={fullscreen}
                show={mapShowModal} onHide={() => setMapShowModal(false)}>
                <ModalHeader closeButton />
                <MapContainer style={{ height: '50vh', width: '100%' }} center={[45.662623, 4.550621]}
                    zoom={9}
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://api.maptiler.com/maps/streets/style.json?key=EFRLexSapLPN3ME1xQx9'
                        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=EFRLexSapLPN3ME1xQx9"
                    />
                    <Marker position={[45.523434, 4.2955373]}>
                        <Popup>
                            6 Rue Dorine Bourneton ZAC les coquelicots <br />42160 Andrézieux-Bouthéon
                        </Popup>
                    </Marker>
                </MapContainer>
            </Modale>
            <footer>
                <Footer />
            </footer>
        </>
    );


}
