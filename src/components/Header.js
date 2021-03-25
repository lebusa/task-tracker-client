import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const Header = ({title, date}) => {
    const someFunc = () => {
        console.log(`logging ${Date.now()}`);
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button /* name='Add' bgClr='green'  */onClick={someFunc} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
    date: "23 March 2021",
}

Header.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
}

export default Header
