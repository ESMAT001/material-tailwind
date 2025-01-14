import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarList({ children, leftSide, className }) {
    return (
        <ul
            className={`flex lg:items-center flex-col lg:flex-row list-none ${
                leftSide ? 'mr-auto' : 'ml-auto'
            } ${className}`}
        >
            {children}
        </ul>
    );
}

NavbarList.defaultProps = {
    leftSide: false,
};

NavbarList.propTypes = {
    children: PropTypes.node.isRequired,
    leftSide: PropTypes.bool.isRequired,
};
