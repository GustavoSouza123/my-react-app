import React from "react";
import "./css/Navbar.css";

const sections = [
    {id: 1, name: 'header', active: true},
    {id: 2, name: 'about', active: false},
    {id: 3, name: 'projects', active: false},
    {id: 4, name: 'contact', active: false},
];

function handleClick(key) {
    const section = sections.find(section => section.id === key)
    sections.forEach(section => section.active = false);
    section.active = true;

    const sectionLi = document.querySelectorAll('li');
    sectionLi.forEach(section => section.style.color = '');
    sectionLi[key-1].style.color = '#61dbfb';
}

function Navbar() {
    const listItems = sections.map(section => 
        <li
            key={section.id}
            style={{
                color: section.active && '#61dbfb'
            }}
            onClick={() => {handleClick(section.id)}}
        >
            {section.name}
        </li>
    );

    return (
        <nav>
            <ul>
                {listItems}
            </ul>
        </nav>
    );
}

export default Navbar;