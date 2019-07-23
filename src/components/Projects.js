import React from 'react';
import image from '../assets/ball.jpg';
import hello from '../assets/hello.jpeg';

function Projects() {
    return (
        <section id="projects">
            <h4 className="text-center">Projects</h4>
            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={{width: '19rem'}}>
                        <img src={hello} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">hello</h5>
                            <p className="card-text">why would i do that</p>
                            <a href="/" className="btn btn-outline-primary btn-block">View Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{width: '19rem'}}>
                        <img src={hello} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">hello</h5>
                            <p className="card-text">why would i do that</p>
                            <a href="/" className="btn btn-outline-primary btn-block">View Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;