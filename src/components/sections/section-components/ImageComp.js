import { Col } from "react-bootstrap";

function ImageComp({ img, text, num }) {
    return (
        <Col sm={ 6 } lg={ 3 } className="height-full p-0 overflow-hidden" >
            <div className="w-100 h-100 img-wrapp">
                <img src={ img } alt="" className="sized-img"></img>
                <div className="img-text">
                    <p>{ num }</p>
                    <p className="text-secondary">{ text }</p>
                </div>
            </div>
        </Col>
    );
}

export default ImageComp;