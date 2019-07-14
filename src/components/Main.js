import React from 'react';
import Navbar from './Navbar';

function Main() {
    return (
        <div className="row">
            <div className="col-md-6 right" style={{backgroundColor: 'red'}}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores beatae nemo sit perspiciatis. Quos veritatis, itaque explicabo dicta, sit dolores deleniti magnam neque nobis iure et nisi ex? Distinctio, odio.</p>
            </div>
            <div className="col-md-6 left" style={{backgroundColor: '#fff'}}>
                <Navbar />

                {/* content */}
                <article className="text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit beatae illum quae ipsa nesciunt illo enim hic corporis! Hic aspernatur officiis sit tempora voluptate ad veniam, ipsa nesciunt aliquid!</p>

                    <button className="btn btn-outline-success">Read More</button>
                </article>
            </div>
        </div>
    );
}

export default Main;