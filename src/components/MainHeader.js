import { Container } from "react-bootstrap";

function MainHeader() {
    return (
        <div id="home" className="header-wrap">
            <Container className="m-0 w-100 h-100">
                <Container className="p-3 pt-4 m-0 w-100">
                    <p className="m-0 mt-3 text-secondary">Emporium Design</p>
                </Container>
                <Container className="header-section mx-auto ms-lg-5 text-center text-sm-start">
                    <p className="main-title mb-4">we build best Scandinavian homes</p>
                    <button type="button" className="btn-custom">CONTACT US</button>
                </Container>
            </Container>
        </div >
    );
}

export default MainHeader;