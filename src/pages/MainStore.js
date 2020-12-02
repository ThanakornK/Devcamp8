import React from 'react';
import './../styles/MainStore.css';
import { Row, Col } from 'react-bootstrap';
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import axios from 'axios'
import userData from '../testData/userdata'
import url from '../service/apiService'
import SearchBar from './../component/SearchBar.js';

export default class MainStore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: []
        };
    }

    componentDidMount() {
        // console.log(axios.get(`http://8cf0d250a525.ngrok.io/api/courses/1`).data)
        // console.log(userData)
        axios.get(url + `/api/courses/getToStore/` + localStorage.getItem('user_id'))
            .then(res => {
                const course = res.data;
                console.log(course);
                this.setState({ course: course });
            })
        console.log(this.state.course);
    }

    render() {
        return (
            <div style={{ padding: "10px", height: "100vh" }}>
                <SearchBar />

                <ListGroup className="CourseList">
                    {this.state.course.map(val =>
                        <ListGroupItem className="list" onClick={() => { window.location.pathname = '/store/preview/' + val.id }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div><img style={{ width: "100px", height: "100px" }} src={url+val.img} /></div>
                                <div style={{ paddingLeft: "10px" }}>

                                    <div><h4>{val.c_name}</h4></div>

                                    <Container className="DetailCourse" fluid="true">
                                        <div style={{ paddingRight: "10px" }}>Type: {val.type} </div>
                                        <div style={{ paddingRight: "20px" }}>Toy type: {val.toy_type}</div>
                                        <div style={{ paddingRight: "5px" }}>by {val.owner}</div>
                                    </Container>
                                    <div style={{ fontSize: "18px" }}>price: {val.price} baht</div>
                                </div>
                            </div>
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>

        )
    }
}


