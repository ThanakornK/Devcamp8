import React from 'react'
import { ListGroup, ListGroupItem, Container, Button, Row, Col } from 'react-bootstrap'
import { OwnData } from './../component/OwnData';
import OwnSideBar from './../component/OwnSideBar';
import ContentOwnField from './../component/ContentOwnField';
import { Height } from '@material-ui/icons';

export default class Owned extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "row", height: "95vh" }} fluid="true">
                <ContentOwnField />
                <div>
                    <OwnSideBar />
                </div>
            </div>
        )
    }
}
