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
                            <h5 className="card-title">react cards</h5>
                            <a href="https://muturi254.github.io/react-cards" className="btn btn-outline-primary btn-block">View Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{width: '19rem'}}>
                        <img src={hello} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">City of tours</h5>
                            <a href="https://tour-jiji.netlify.com" className="btn btn-outline-primary btn-block">View Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;