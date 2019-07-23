import React from 'react';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
// import { url } from 'inspector';

function Main(props) {
    const styles ={
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // opacity: 0.7
        overlayColor: 'red',
    }
    return (
        <div className="row">
            <div className="col-md-6 right" style={styles}>
                
            </div>
            <div className="col-md-6 left" style={{backgroundColor: '#fff'}}>
                <Navbar />

                {/* content */}
                <section id='home'>
                    <article className="text-center">
                        <p>Hello am Peter Muturi, a fullstack developer whose interests span around bringing ideas from inception to completion. When am not writing code i enjoy my time listening to music, gaming and reading</p>

                        
                    </article>
                </section>
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default Main;