import { Col, Container, Row } from "react-bootstrap";
import about_img from "./../../assets/img/about-section-2.png";

function AboutSection({ id }) {
    const yt_link = 'https://www.youtube.com/watch?v=CmJ7YlnpdJ0';
    return (
        <section id={ id } className="py-5">
            <Row className="my-5 py-3 ms-lg-5">
                <Col lg='5' className="text-center text-sm-start p-0 m-0 mb-5 mb-lg-0">
                    <Container className="m-lg-0 px-5">
                        <p className="main-title text-secondary">
                            about company
                        </p>
                        <p className="text mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className="text">
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                        </p>
                        <p className="text text-secondary my-5">
                            WATCH VIDEO
                            <a href={ yt_link } target="_blank" rel="noreferrer">
                                <i class="fa-solid fa-play ms-3 text-secondary"></i>
                            </a>
                        </p>
                    </Container>
                </Col>
                <Col lg='7' className="position-relative img-wrapp p-0 overflow-hidden">
                    <img className="sized-img" src={ about_img } alt="" />
                    <a href={ yt_link } target="_blank" rel="noreferrer">
                        <i class="fa-regular fa-circle-play video-play-icon"></i>
                    </a>
                </Col>
            </Row>
        </section>
    );
}

export default AboutSection;