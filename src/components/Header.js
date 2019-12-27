import React from 'react';
import PropTypes from 'prop-types';

const Header = ( {titulo} ) => {
    return (
        <div>
            <nav className="nav-wrapper light-blue darken-3">
                <a className="brand-logo center">
                    { titulo }
                </a>
            </nav>
            
        </div>
    );
};

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}

export default Header;