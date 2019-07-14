import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" tabindex="-1" aria-disabled="true">Project</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;