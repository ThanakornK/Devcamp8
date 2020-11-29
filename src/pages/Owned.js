import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default class Owned extends React.Component {
    render () {
        return (
            <div style={{padding:"10px"}}>
                <ListGroup>
                    <ListGroup.Item>test1 Owned</ListGroup.Item>
                    <ListGroup.Item>test2 Owned</ListGroup.Item>
                    <ListGroup.Item>test3 Owned</ListGroup.Item>
                    <ListGroup.Item>test4 Owned</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
