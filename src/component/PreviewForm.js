import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './../styles/PreviewForm.css';
import url from '../service/apiService'
import axios from 'axios'
import { useEffect, useState } from 'react'

function PreviewForm() {
    const [course, setCourse] = useState([])
    useEffect(() => {
        // console.log(state)
        axios.get(url + `/api` + window.location.pathname)
            .then(res => {
                const course = res.data;
                console.log(course);
                setCourse(course)
            })
    }, [])

    return (
        <div>
            <Container style={{ padding: "5px" }}>
                <div className="center" style={{ flexDirection: "column", alignItems: "center" , marginLeft:"-5%"}}>
                    <div>
                        <h2>{course.c_name}</h2>
                    </div>
                    <div>
                        <h3>by: {course.c_owner}</h3>
                    </div>
                </div>

                <div className=" center " style={{ marginLeft:"0%"}}>
                    <div style={{ width: "700px", height: "700px", marginLeft: "-50px", backgroundColor: "grey", marginBottom: "10px" }}>
                        <img className="imageShow" style={{ width: "100%" }} src={url + course.img} />
                    </div>
                </div>
                <div style={{ flexDirection: "row", border: "2px groove black", padding: "10px" }}>
                    <div style={{ fontSize: "25px" }}>
                        Price: {course.price}
                    </div>
                </div>
                <div style={{ border: "2px groove black", padding: "10px", height: "20vh" }}>
                    <div style={{ fontSize: "20px" }}>
                        {course.des}
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px" }}>
                    <Button onClick={() => { window.location.pathname = "/store/buy/"+course.id }}>Buy Course</Button><Button>Contact Author</Button>
                </div>
            </Container>
        </div>
    )
}

export default PreviewForm

{/* <Container style={{ padding: "5px" }}>
                <Row style={{ flexDirection: "column", alignItems: "center" }}>
                    <h2>{course.c_name}</h2>
                    <h3>by: {course.c_owner}</h3>
                </Row>

                <Row className=" center ">
                    <div style={{ width: "700px", height: "700px", marginLeft: "-50px", backgroundColor: "grey", marginBottom: "10px" }}>
                        <img className="imageShow" style={{ height: "100%", marginTop: "10%" }} src={url+course.img} />
                    </div>
                </Row>
                <Row style={{ flexDirection: "row", border: "2px groove black", padding: "10px" }}>
                    <div style={{ fontSize: "25px" }}>
                        Price: {course.price}
                    </div>
                </Row>
                <Row style={{ border: "2px groove black", padding: "10px", height: "20vh" }}>
                    <div style={{ fontSize: "20px" }}>
                        {course.des}
                    </div>
                </Row>
                <Row style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px" }}>
                    <Button onClick={() => { window.location.pathname = "/store/buy/:CourseId" }}>Buy Course</Button><Button>Contact Author</Button>
                </Row>
            </Container> */}
