import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './../styles/PreviewForm.css';

function PreviewForm() {
    return (
        <div>
            <Container style={{ padding: "5px" }}>
                <Row style={{ flexDirection: "column", alignItems: "center" }}>
                    <h2>Course Name:</h2>
                    <h3>by: </h3>
                </Row>

                <Row className=" center ">
                    <div style={{ width: "700px", height: "700px", marginLeft: "-50px", backgroundColor: "grey", marginBottom: "10px" }}>
                        <img className="imageShow" style={{ width: "100%", marginTop: "10%" }} src="/images/testPreview.jpg" />
                    </div>
                </Row>
                <Row style={{ flexDirection: "row", border: "2px groove black", padding: "10px" }}>
                    <div style={{ fontSize: "25px" }}>
                        Price:
                    </div>
                </Row>
                <Row style={{ border: "2px groove black", padding: "10px", height: "20vh" }}>
                    <div style={{ fontSize: "20px" }}>
                        สอนการปั้นแบบเบื้องต้น ที่ทั้งง่ายและสนุก ขนาดที่แมวได้ยินก็ยังปั้นตามได้
                    </div>
                </Row>
                <Row style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px" }}>
                    <Button onClick={() => { window.location.pathname = "/store/buy/:CourseId" }}>Buy Course</Button><Button>Contact Author</Button>
                </Row>
            </Container>
        </div>
    )
}

export default PreviewForm
