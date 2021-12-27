import React from 'react';
import header from "../../img/header-simpsons.gif"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img src={header} alt='logo del blog' className='logoBlog'/>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#navbarTogglerDemo02">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#navbarTogglerDemo02">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='#navbarTogglerDemo02'>Contacto</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-danger" type="submit">Búsqueda</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>);
    }

}

export default Navbar