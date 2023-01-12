import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./section-components/ContactForm";

function ContactSection({ id }) {
    return (
        <section id={ id } className='p-5'>
            <Container className="m-0 p-0">
                <Container className='my-5'>
                    <p className="main-title text-secondary text-center">
                        Contact Us
                    </p>
                </Container>
                <Row className="mx-lg-5">
                    <Col lg={ 6 } className='mb-5 mb-lg-0'>
                        <Container className="p-0">
                            <ContactForm id='contactForm' />
                        </Container>
                    </Col>

                    <Col lg={ 6 }>
                        <Container className='p-0 p-sm-1 custom-col'>
                            <p className="title m-0">+381 034-255-252</p>
                            <p className="title">+381 012-192-168</p>
                            <p className="text">info@emporium.rs</p>
                            <p className="text">Serbia, Kragujevac, Tanaska Rajica 9</p>
                            <p className="text">
                                <i class="fa-brands fa-facebook-f me-3"></i>
                                <i class="fa-brands fa-linkedin"></i>
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactSection;