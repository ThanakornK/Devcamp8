import React from 'react'
import { Form, FormControl } from 'react-bootstrap'

function CreateContentForm() {
    return (
        <div>
            <Form>
                <FormControl placeholder="Title"/>
                <FormControl placeholder="Content"/>
            </Form>
        </div>
    )
}

export default CreateContentForm
