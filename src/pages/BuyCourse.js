import React, {useState, useEffect} from 'react';
import { Button, Container } from 'react-bootstrap';
// import DateTimePicker from './../component/DateTimePicker';
import './../styles/Store.css';
import axios from 'axios'
import url from '../service/apiService'

function BuyCourse() {
    const [course, setCourse] = useState([])
    useEffect(() => {
        // console.log(state)
        axios.get(url + `/api/get` + window.location.pathname)
            .then(res => {
                const course = res.data;
                console.log(course);
                setCourse(course)
            })
    }, [])
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
                {/* <div className="center" style={{ marginLeft: "-10%", padding: "10px"}}>
                    <h4>Upload Slip</h4>
                </div>
                <div className="center" style={{ marginLeft: "-30%", padding: "10px"}}>
                    <input type="file" class="form-control-file" id="profileImg" className="uploadProfileCenter" />
                </div> */}
                <div className="center" style={{ marginLeft: "-30%", padding: "10px"}}>
                    {/* <DateTimePicker /> */}
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: "-10%", paddingBottom: "10px" }}>
                    <div>
                        <Button>Back</Button>
                    </div>
                    <div>
                        <Button onClick={() => {
                            var formData = new FormData();
                            formData.append("cus_id", localStorage.getItem('user_id'))
                            axios.post(url + '/api/buy/'+course.id, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).then(res => {
                                console.log(res.data)
                            })
                            window.location.pathname = "/library"
                            }}>Confirm</Button>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default BuyCourse
