import '../../assets/hamburger.css';

function NavMenu({ active, activeHandler }) {

    return (
        // is-active
        // hamburger hamburger--arrow-r
        <button type="button"
            onClick={ activeHandler }
            className={ active ? 'hamburger hamburger--emphatic is-active' : 'hamburger hamburger--emphatic' }>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default NavMenu;