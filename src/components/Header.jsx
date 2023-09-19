/*
    File: Header.jsx
    Author: Usman Shafique
    Copyright: 2023 - Usman Shafique 
    Version: 1.0
    Created: 9/14/2023
    Last Modified: 9/14/2023
*/

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HeaderLogo from './HeaderLogo';

Header.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};

export default function Header({ isDarkMode, toggleDarkMode }) {
    return (
        <header className="flex flex-row flex-wrap justify-between items-center gap-6 px-mobileBound pt-6 pb-4">
            <Link to="/">
                <h2>
                    Uziee
                </h2>
            </Link>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>
    );
}