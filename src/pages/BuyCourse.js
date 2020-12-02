import React from 'react';
import { Button, Container } from 'react-bootstrap';
// import DateTimePicker from './../component/DateTimePicker';
import './../styles/Store.css';

function BuyCourse() {
    return (
        <div>
            <Container >
                <div className="center" style={{ marginLeft: "-10%" }}>
                    <h2>Buy Course</h2>
                </div>
                <div className="center" style={{ marginLeft: "-10%" }}>
                    <h3>Course Name:</h3>
                </div>
                <div className="center" style={{ marginLeft: "-25%" }}>
                    <h4>Price :</h4>
                </div>
                <div className="center" style={{ marginLeft: "-10%" }}>
                    <di style={{ width: "500px", height: "700px", border: "2px solid black" }}>
                        Mock up payment
                    </di>
                </div>
                <div className="center" style={{ marginLeft: "-10%", padding: "10px"}}>
                    <h4>Upload Slip</h4>
                </div>
                <div className="center" style={{ marginLeft: "-30%", padding: "10px"}}>
                    <input type="file" class="form-control-file" id="profileImg" className="uploadProfileCenter" />
                </div>
                <div className="center" style={{ marginLeft: "-30%", padding: "10px"}}>
                    {/* <DateTimePicker /> */}
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: "-10%", paddingBottom: "10px" }}>
                    <div>
                        <Button>Back</Button>
                    </div>
                    <div>
                        <Button>Confirm</Button>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default BuyCourse
