import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StaffCard from "./section-components/StaffCard";

function StaffSection({ id }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section id={ id } className='p-md-5'>
            <Container className='my-5'>
                <p className="main-title text-secondary text-center">
                    Our Staff
                </p>
            </Container>
            <Row className="pt-5">
                <Col>
                    <Carousel
                        swipeable={ true }
                        infinite={ true }
                        responsive={ responsive }
                        className='mx-auto'>
                        <div>
                            <StaffCard src="https://randomuser.me/api/portraits/men/32.jpg" name='Mark Jhonson' />
                        </div>
                        <div>
                            <StaffCard src="https://randomuser.me/api/portraits/women/44.jpg" name='Gabby Wills' />
                        </div>
                        <div>
                            <StaffCard src="https://randomuser.me/api/portraits/men/18.jpg" name='Joe Marcus' />
                        </div>
                        <div>
                            <StaffCard src="https://randomuser.me/api/portraits/women/23.jpg" name='Edita Markus' />
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </section>
    );
}

export default StaffSection;