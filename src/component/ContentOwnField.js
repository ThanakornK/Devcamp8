import React from 'react'
import { ListGroup, ListGroupItem, Container, Button, Row, Col } from 'react-bootstrap'
import { OwnData } from './../component/OwnData';
import url from '../service/apiService'
import axios from 'axios'
import { useEffect, useState } from 'react'
import userData from '../testData/userdata'

function ContentOwnField() {
    const [state, setState] = useState({
        course: []
    })

    useEffect(() => {
        console.log(state)
        axios.get(url + `/api/courses/getByOwnerID/`+localStorage.getItem('user_id'))
            .then(res => {
                const course = res.data;
                console.log(course);
                // setState({
                //     ...state,
                //     [name]: value
                // })
                setState({ course: course });
            })
    }, [])

    return (
        <div style={{ padding: "10px", width: "100%" }}>
            <ListGroup className="CourseList">
                {state.course.map((val, key) => {
                    return (
                        <ListGroupItem className="list">
                            <div><h4>{val.c_name}</h4></div>
                            <Container className="DetailCourse" fluid="true">
                                <div style={{ paddingRight: "10px" }}>Type: {val.type} </div>
                                <div style={{ paddingRight: "20px" }}>Toy type: {val.toy_type}</div>
                                <div style={{ paddingRight: "5px" }}>by {val.owner}</div>
                            </Container>
                            <div style={{ fontSize: "18px" }}>price: {val.price} baht</div>
                            <div style={{ display:"flex" , flexDirection:"row"}} >
                                <div style={{paddingRight:"10px"}}>
                                    <Button onClick={() => { window.location.pathname = "/editCourse/"+val.id; }}>Edit Course</Button>
                                </div>
                                <div>
                                    <Button onClick={() => { window.location.pathname = "/editContent/"+val.id; }}>Edit Content</Button>
                                </div>

                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default ContentOwnField
