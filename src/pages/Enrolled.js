import React from 'react';
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EnrollData } from './../component/EnrollData';
import ContentCourse from './ContentCourse';
import './../styles/CourseList.css';
import axios from 'axios'
import userData from '../testData/userdata'
import url from '../service/apiService'

export default class Enrolled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          course: []
        };
      }
    // state = {
    //     course: []
    // }

    componentDidMount() {
        // console.log(axios.get(`http://8cf0d250a525.ngrok.io/api/courses/1`).data)
        // console.log(userData)
        axios.get(url+`/api/courses/getLearnCourse/`+userData)
            .then(res => {
                const course = res.data;
                console.log(course) ;
                this.setState({course: course});
            })
            console.log(this.state.course);
        }

    render() {
        // const course = {} ;
        return (
            <div style={{ padding: "10px" }}>
                <ListGroup className="CourseList">
                    {this.state.course.map(val =>
                        <ListGroupItem className="list" onClick={() => { window.location.pathname = '/library/'+val.id }}>
                            <div><h4>{val.c_name}</h4></div>
                            <Container className="DetailCourse" fluid="true">
                                <div style={{ paddingRight: "10px" }}>Type: {val.type} </div>
                                <div style={{ paddingRight: "20px" }}>Toy type: {val.toy_type}</div>
                                <div style={{ paddingRight: "5px" }}>by {val.owner}</div>
                            </Container>
                            <div style={{ fontSize: "18px" }}>price: {val.price} baht</div>
                        </ListGroupItem>

                    )}
                </ListGroup>
            </div>

            // <div style={{ padding: "10px" }}>
            //     <ListGroup className="CourseList">
            //         <div>{this.state.course}</div>
            //         {/* {this.state.course} */}
            //     </ListGroup>
            // </div>
        )
    }
}

