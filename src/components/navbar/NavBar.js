import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import IconList from './IconList';
import NavMenu from './NavMenu';

function NavBar() {
    const navClasses = 'navbar-custom navbar-fixed p-sm-4';
    const navScrolled = 'navbar-custom navbar-fixed p-sm-4 navbar-scrolled';
    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleActive = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    return (
        <Container className={ scrolled ? navScrolled : navClasses }>
            <NavMenu active={ isActive } activeHandler={ handleActive } />
            <IconList active={ isActive } />
        </Container>
    );
}

export default NavBar;