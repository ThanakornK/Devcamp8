import React from 'react'
import { ListGroup, ListGroupItem, Container, Button, Row, Col } from 'react-bootstrap'
import { OwnData } from './../component/OwnData';
import OwnSideBar from './../component/OwnSideBar';
import ContentOwnField from './../component/ContentOwnField';

export default class Owned extends React.Component {
    render() {
        return (
            // <div style={{ padding: "10px" }}>
            //     <Container fluid="true">
            //         <Row >
            //             <Col sm>
            //                 <ListGroup className="CourseList">
            //                     {OwnData.map((val, key) => {
            //                         return (
            //                             <ListGroupItem className="list">
            //                                 <div><h4>{val.title}</h4></div>
            //                                 <Container className="DetailCourse" fluid="true">
            //                                     <div style={{ paddingRight: "10px" }}>Type: {val.type} </div>
            //                                     <div style={{ paddingRight: "20px" }}>Toy type: {val.toytype}</div>
            //                                     <div style={{ paddingRight: "5px" }}>by {val.owner}</div>
            //                                 </Container>
            //                                 <div style={{ fontSize: "18px" }}>price: {val.cost} baht</div>
            //                                 <Button>Edit</Button>
            //                             </ListGroupItem>
            //                         )
            //                     })}
            //                 </ListGroup>
            //             </Col>
            //             <Col sm={2}>
            //                 <OwnSideBar />
            //             </Col>
            //         </Row>
            //     </Container>
            // </div>
            <div style={{ display: "flex", flexDirection: "row" }} fluid="true">
                <ContentOwnField />
                <div>
                    <OwnSideBar />
                </div>
            </div>
        )
    }
}
