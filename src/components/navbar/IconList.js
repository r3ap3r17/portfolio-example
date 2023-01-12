function IconList({ active }) {
    return (
        <div className="my-auto">
            <ul className={ active ? 'd-none' : '' }>
                <li>
                    <a href="https://twitter.com" className='navbar-icons' target="_blank">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" className='navbar-icons' target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com" className='navbar-icons' target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </li>
            </ul>

            <ul className={ !active ? 'd-none' : '' }>
                <li>
                    <a href="#home" >
                        <span>HOME</span>
                    </a>
                </li>
                <li>
                    <a href="#about" >
                        <span>ABOUT</span>
                    </a>
                </li>
                <li>
                    <a href="#images" >
                        <span>IMAGES</span>
                    </a>
                </li>
                <li>
                    <a href="#staff" >
                        <span>STAFF</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" >
                        <span>CONTACT</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default IconList;