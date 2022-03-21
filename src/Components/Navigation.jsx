import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AuthContext } from "../context/Auth";
import { logout } from "../context/AuthApi";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
export default function Navigation({ setUserID }) {
    const [isAuthenticated, setIsAuthenticated, role, setRole] = useContext(AuthContext);
    const navigate = useNavigate();
    const salleB = sessionStorage.getItem("salonBID");
    const salleA = sessionStorage.getItem("salonAID");

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        setUserID("");
        setRole(null);
        navigate(`/login`)
    }

    const logOutEleve = () => {
        sessionStorage.removeItem("salonBID");
        sessionStorage.removeItem("salonAID");
        navigate(`/eleveLogin`)
    }
    // console.log("isAutenticated Navbar", isAuthenticated);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="customNav" >
                <Container>
                    <Navbar.Brand >
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="100px" height="80px" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#08316B" stroke="none">
                                <path d="M2198 4755 c-50 -18 -111 -68 -143 -118 -88 -131 -100 -401 -25 -559
                                    107 -228 421 -240 538 -19 83 155 89 362 16 528 -29 66 -99 137 -160 163 -54
                                    24 -169 26 -226 5z m176 -48 c54 -31 92 -102 111 -208 19 -108 19 -223 0 -322
                                    -19 -99 -45 -156 -90 -196 -31 -27 -43 -31 -90 -31 -46 0 -59 5 -88 30 -82 72
                                    -116 231 -97 460 8 93 14 122 40 176 51 104 131 139 214 91z"/>
                                <path d="M3088 4378 c3 -386 -1 -448 -30 -448 -5 0 -7 -3 -5 -7 3 -5 46 -7 97
                                    -5 92 3 92 4 73 24 -16 18 -18 44 -21 274 -2 170 0 254 7 254 6 0 21 -15 33
                                    -34 13 -19 57 -80 98 -136 41 -56 89 -121 105 -145 17 -24 64 -90 105 -146
                                    l75 -103 5 410 c4 328 8 414 19 427 12 16 6 17 -83 17 l-97 0 21 -28 c19 -26
                                    20 -39 18 -282 l-3 -255 -39 55 c-22 30 -70 96 -106 145 -37 50 -113 154 -170
                                    233 -56 78 -103 142 -104 142 0 0 0 -176 2 -392z"/>
                                <path d="M3962 4763 l-183 -3 20 -27 c20 -25 21 -38 21 -397 0 -361 -1 -373
                                    -20 -394 l-21 -22 205 0 205 0 5 33 c3 17 10 63 16 101 6 37 9 71 5 74 -3 3
                                    -5 0 -5 -7 0 -30 -43 -102 -79 -130 -36 -29 -45 -31 -115 -31 l-76 0 0 175 0
                                    175 61 0 c72 0 96 -11 114 -53 13 -30 14 -26 15 68 l0 100 -20 -32 c-22 -37
                                    -46 -46 -116 -41 l-49 3 -3 178 -2 177 83 0 c92 0 131 -18 140 -63 2 -12 5 11
                                    6 51 1 53 -2 71 -11 70 -7 -2 -95 -4 -196 -5z"/>
                                <path d="M999 4734 c20 -26 21 -38 21 -394 0 -356 -1 -368 -21 -394 l-20 -26
                                    101 0 101 0 -20 26 c-20 26 -21 38 -21 388 0 342 1 363 20 394 l20 32 -101 0
                                    -100 0 20 -26z"/>
                                <path d="M1319 4734 c20 -26 21 -38 21 -393 0 -303 -3 -371 -15 -394 l-15 -29
                                    183 4 c164 3 186 5 223 25 136 73 201 252 174 483 -15 128 -63 217 -157 286
                                    -38 29 -142 44 -303 44 l-131 0 20 -26z m313 -38 c81 -34 128 -159 130 -346 3
                                    -191 -30 -295 -111 -357 -39 -30 -48 -33 -117 -33 l-74 0 0 375 0 375 69 0
                                    c38 0 84 -6 103 -14z"/>
                                <path d="M2752 4729 c23 -31 23 -32 23 -393 0 -330 -2 -364 -18 -389 l-17 -27
                                    94 0 94 0 -19 37 c-18 34 -19 64 -19 384 l0 346 25 37 24 36 -105 0 -105 0 23
                                    -31z"/>
                                <path d="M2552 3431 c-48 -74 -52 -84 -67 -192 -8 -63 -22 -154 -29 -204 -8
                                    -49 -24 -162 -36 -250 -13 -88 -26 -164 -31 -169 -7 -7 -64 25 -262 148 -31
                                    20 -74 46 -95 57 -20 11 -64 38 -97 59 -33 21 -79 48 -101 60 l-42 21 -60 -37
                                    c-66 -39 -94 -65 -76 -71 10 -3 56 -33 279 -178 121 -78 263 -169 285 -181 11
                                    -6 28 -18 38 -27 10 -10 23 -17 28 -17 5 0 22 -11 38 -24 l30 -23 -32 -119
                                    c-18 -65 -48 -175 -68 -244 -20 -69 -44 -156 -54 -195 -10 -38 -41 -153 -70
                                    -255 -54 -190 -69 -249 -70 -262 0 -5 51 -8 114 -8 l115 0 5 43 c20 162 28
                                    229 41 362 8 83 19 188 24 235 5 47 17 153 26 235 15 148 33 262 60 400 8 39
                                    17 90 20 115 4 25 16 90 26 145 20 103 57 309 89 495 10 58 21 117 25 133 4
                                    15 5 27 2 27 -3 0 -28 -35 -55 -79z"/>
                                <path fill="#FC3438" d="M2635 3480 c3 -19 19 -109 36 -200 16 -91 38 -214 49 -275 10 -60 26
                                    -148 35 -195 9 -47 24 -134 35 -195 10 -60 26 -148 34 -195 13 -73 35 -262 66
                                    -565 29 -284 51 -493 56 -512 4 -22 8 -23 120 -23 115 0 115 0 108 23 -4 12
                                    -10 36 -14 52 -4 17 -27 98 -50 180 -23 83 -48 173 -55 200 -7 28 -29 106 -48
                                    175 -20 69 -54 193 -77 275 -23 83 -44 157 -47 166 -3 11 25 34 97 80 56 35
                                    164 105 241 154 205 132 300 193 339 216 33 21 33 22 15 36 -11 8 -46 30 -78
                                    48 l-57 35 -63 -36 c-34 -19 -111 -66 -172 -104 -60 -38 -130 -81 -155 -95
                                    -25 -14 -78 -46 -118 -70 -41 -25 -77 -45 -81 -45 -5 0 -11 19 -15 43 -3 23
                                    -22 150 -41 282 -20 132 -40 275 -46 318 -12 95 -16 105 -74 192 -43 64 -46
                                    67 -40 35z"/>
                                <path d="M2172 3230 c-22 -14 -42 -39 -59 -76 -22 -48 -25 -66 -21 -124 7 -87
                                    36 -141 94 -172 l44 -23 36 20 c120 64 134 296 23 369 -47 31 -73 32 -117 6z"/>
                                <path fill="#FC3438" d="M2960 3232 c-41 -22 -80 -91 -87 -157 -13 -109 56 -225 133 -225 145
                                    0 194 293 63 376 -46 29 -63 30 -109 6z"/>
                                <path d="M870 803 l-85 -4 0 -224 0 -225 45 0 c34 0 41 3 32 12 -8 8 -12 46
                                    -12 105 l0 93 43 0 c24 0 48 -5 55 -12 9 -9 12 -5 12 20 0 31 -13 42 -25 22
                                    -3 -5 -24 -10 -46 -10 l-40 0 3 98 3 97 50 3 c38 3 52 -1 62 -14 12 -16 13
                                    -14 13 14 0 20 -5 31 -12 30 -7 -1 -51 -4 -98 -5z"/>
                                <path d="M1210 803 c-27 -10 -71 -57 -93 -98 -17 -33 -21 -57 -21 -130 1 -132
                                    38 -199 126 -228 43 -14 52 -14 99 1 65 21 103 68 120 150 23 113 -9 234 -75
                                    283 -31 23 -122 36 -156 22z m101 -23 c10 -6 29 -30 41 -53 18 -35 21 -59 22
                                    -152 0 -99 -2 -114 -24 -155 -46 -83 -117 -81 -160 5 -20 42 -24 65 -25 145 0
                                    104 13 154 50 194 25 27 62 33 96 16z"/>
                                <path d="M2595 780 c-8 -37 -34 -123 -95 -312 -36 -115 -37 -118 -16 -118 16
                                    0 21 7 22 28 1 15 8 44 17 65 15 36 18 37 66 37 46 0 50 -2 60 -31 6 -18 11
                                    -47 11 -65 0 -34 0 -34 49 -34 l49 0 -18 48 c-11 26 -38 108 -60 182 -23 74
                                    -50 158 -60 185 l-17 50 -8 -35z m30 -248 l7 -32 -46 0 c-52 0 -55 6 -32 67 8
                                    21 17 52 21 68 7 30 8 30 25 -21 10 -28 21 -65 25 -82z"/>
                                <path d="M2840 775 c1 -28 2 -29 14 -12 11 14 25 17 58 15 l43 -3 3 -193 c1
                                    -121 -1 -200 -8 -212 -10 -18 -7 -20 32 -20 l43 0 -3 215 -3 215 45 0 c32 0
                                    48 -5 55 -17 9 -15 10 -13 11 12 l0 30 -145 0 -145 0 0 -30z"/>
                                <path d="M3589 802 c-34 -16 -68 -50 -90 -92 -19 -37 -23 -61 -23 -135 -1 -82
                                    2 -95 29 -145 27 -49 36 -58 87 -77 55 -22 58 -22 108 -6 90 29 138 126 127
                                    257 -11 131 -66 198 -166 203 -31 1 -63 -1 -72 -5z m113 -32 c63 -49 79 -257
                                    27 -350 -67 -123 -173 -52 -186 125 -7 88 23 204 59 230 30 21 70 19 100 -5z"/>
                                <path d="M3958 581 l-3 -231 40 0 40 0 -3 152 -3 153 96 -130 c52 -72 104
                                    -141 114 -155 20 -25 20 -25 20 187 1 116 4 218 7 227 5 13 -2 16 -42 16 -37
                                    0 -45 -3 -36 -12 13 -13 18 -288 5 -288 -5 1 -28 30 -53 66 -25 35 -75 105
                                    -112 155 l-67 92 -3 -232z"/>
                                <path d="M1590 781 c15 -29 13 -404 -2 -419 -9 -9 -2 -12 32 -12 l45 0 0 212
                                    0 213 26 3 c37 4 61 -27 62 -85 2 -57 -18 -110 -45 -119 -13 -4 -16 -9 -10
                                    -17 5 -7 17 -37 27 -67 37 -120 56 -140 128 -140 28 1 30 2 15 13 -9 7 -32 46
                                    -52 86 -20 40 -41 80 -48 88 -10 13 -9 18 8 32 33 26 44 55 44 115 0 44 -5 60
                                    -26 85 -25 31 -27 31 -120 31 -91 0 -94 -1 -84 -19z"/>
                                <path d="M2017 790 c-3 -8 -12 -104 -21 -213 -8 -116 -20 -204 -27 -213 -9
                                    -11 -7 -14 14 -14 19 0 24 4 21 18 -2 9 2 69 10 132 l13 115 20 -45 c11 -25
                                    38 -87 59 -139 36 -89 38 -92 47 -65 15 50 88 229 97 238 4 4 11 -51 15 -123
                                    l8 -131 45 0 c34 0 42 3 35 13 -6 6 -13 46 -17 87 -29 354 -32 369 -60 299
                                    -70 -177 -110 -268 -117 -264 -4 3 -17 29 -27 58 -11 28 -32 78 -46 109 -14
                                    31 -26 60 -26 65 -1 4 -9 26 -20 48 -12 26 -20 35 -23 25z"/>
                                <path d="M3255 575 l0 -225 40 0 40 0 0 225 0 225 -40 0 -40 0 0 -225z" />
                            </g>
                        </svg>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><b>Menu</b></ Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-center ">
                        <Nav className="navbar-expand-lg">
                            {((!salleB) && (!salleA) && (
                                <>
                                    <li className="itemCover">
                                        <Link to="/" className="nav-item">ACCUEIL</Link>
                                    </li>
                                    <li className="itemCover">
                                        <Link to="/notremission" className="nav-item">NOTRE MISSION</Link>
                                        <div className="dropdown rounded">
                                            <Link to="/financer"><span className="p-2"> Financer votre formation</span></Link>
                                        </div>
                                    </li>

                                    <li className="itemCover">
                                        <Link to="/nosformation" className="nav-item">NOS FORMATIONS</Link>
                                    </li>
                                    <li className="itemCover">
                                        <Link to="/comptes" className="nav-item">AVIS</Link>
                                    </li>

                                    {/* <li className="itemCover">
                                        <Link to="/quisommesnous" className="nav-item">QUI SOMMES NOUS</Link>
                                    </li> */}
                                    <li className="itemCover">
                                        <Link to="/contact" className="nav-item">NOUS CONTACTER</Link>
                                    </li>
                                </>
                            ))}

                            {((!isAuthenticated) && (!salleB) && (!salleA) && (
                                <>
                                    <li className="itemCover">
                                        <span className="nav-item menu-button">COMPTES</span>
                                        <div className="dropdown rounded">
                                            <Link to="/login">Formateur</Link>
                                            <Link to="/eleveLogin">Eleve</Link>
                                        </div>
                                    </li>
                                </>
                            ))}
                            {(salleB && (<button className="btn btn-danger mt-3" onClick={logOutEleve} >Déconnexion</button>))}
                            {(salleA && (<button className="btn btn-danger mt-3" onClick={logOutEleve} >Déconnexion</button>))}
                            {(role === "formateur" && (
                                <li className="itemCover">
                                    {(role === "formateur" && (<Link className="nav-item menu-button" to="/profa">MON COMPTE</Link>))}
                                    <div className="dropdown rounded" style={{ backgroundColor: "#9c9fa1ad" }}>
                                        <Link to="/sallea" >Salle A</Link>
                                        <Link to="/salleb" >Salle B</Link>
                                        <button className="btn btn-danger mt-3" onClick={handleLogout} >Déconnexion</button>
                                    </div>
                                </li>
                            ))}
                            {(role === "admin" && (
                                <li className="itemCover">
                                    {(role === "admin" && (<Link className="nav-item menu-button" to="/admin ">ADMIN</Link>))}
                                    <div className="dropdown rounded">
                                        <button className="btn btn-danger mt-3" onClick={handleLogout} >Déconnexion</button>
                                    </div>
                                </li>
                            ))}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
