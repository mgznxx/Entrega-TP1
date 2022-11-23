import React from 'react';
import Cursos from "./Cursos/cursos";
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">INSTITUTO ALFA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Cursos />
                </div>
                    <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;
