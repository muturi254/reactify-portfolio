import React from 'react';

function Navbar() {
    return (
       <div className="container navigation">
            <nav className="navbar  sticky-top navbar-expand-lg navbar-light ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <a className="nav-link" href="#n">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">skill</a>
                        </li>
                    </ul>
                </div>
            </nav>

       </div>
    );
}

export default Navbar;