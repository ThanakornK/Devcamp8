import React from 'react'
import { Button, Container } from 'react-bootstrap';
import DateTimePicker from './../component/DateTimePicker';
import './../styles/Store.css';

function InformPayment() {
    return (
        <div>
            <Container>
                <div className="center" style={{ marginLeft: "-10%" }}>
                    InformPayment
                </div>
                <div className="center" style={{ marginLeft: "-10%" }}>
                    Upload Slip
                </div>
                <div className="center" style={{ marginLeft: "-30%", padding: "10px" }}>
                    <input type="file" class="form-control-file" id="profileImg" className="uploadProfileCenter" />
                </div>
                <div className="center" style={{ marginLeft: "-10%" }}>
                    <DateTimePicker />
                </div>
                <div  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: "-10%", paddingBottom: "10px" }}>
                    <div>
                        <Button>Cancel</Button>
                    </div>
                    <div>
                        <Button>Confirm</Button>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default InformPayment
