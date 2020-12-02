import React from 'react'
import { Button, Container, FormControl } from 'react-bootstrap';
import './../styles/Store.css';

function InformPayment() {
    return (
        <div style={{height:"95vh"}}>
            <Container >
                <div className="center" style={{ marginLeft: "-10%" }}>
                    <h3>InformPayment</h3>
                </div>
                <div className="center" style={{ marginLeft: "-10%" }}>
                    <h4>Upload Slip</h4>
                </div>
                <div className="center" style={{ marginLeft: "-30%", padding: "10px" }}>
                    <input type="file" class="form-control-file" id="profileImg" className="uploadProfileCenter" />
                </div>
                <div className="center" style={{ marginLeft: "-24%",display: "flex", flexDirection: "column"}}>
                    <div style={{ paddingTop:"5px", paddingBottom:"5px"}}>
                        <FormControl placeholder="วันที่โอนตามสลิป (dd/mm/yyyy) เช่น 25/12/2020 " style={{width:"400px"}}/>
                    </div>
                    <div style={{ paddingTop:"5px", paddingBottom:"5px"}}>
                        <FormControl placeholder="เวลาที่โอนตามสลิป (hh:mm) เช่น 12:30 " style={{width:"250px", marginLeft: "-30%"}} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: "-10%",paddingTop:"10px", paddingBottom: "10px" }}>
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
