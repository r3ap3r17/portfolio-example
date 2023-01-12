import { Row } from "react-bootstrap";
import home1 from "./../../assets/img/home-1.jpg";
import home2 from "./../../assets/img/home-2.jpg";
import home3 from "./../../assets/img/home-3.jpg";
import home4 from "./../../assets/img/home-4.jpg";
import ImageComp from "./section-components/ImageComp";

// const IMAGES = { home1, home2, home3, home4 }

function ImagesSection({ id }) {
    return (
        < section id={ id } >
            <Row>
                {/* Add react lib slider  */ }
                <ImageComp key='1' img={ home1 } text="Modern Homes" num="01" />
                <ImageComp key='2' img={ home2 } text="Modern Homes" num="02" />
                <ImageComp key='3' img={ home3 } text="Modern Homes" num="03" />
                <ImageComp key='4' img={ home4 } text="Modern Homes" num="04" />
            </Row>
        </section >
    );
}

export default ImagesSection;