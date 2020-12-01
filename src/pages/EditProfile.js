import React, { Component } from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import './../styles/EditProfile.css';

export default class EditProfile extends Component {
    render() {
        return (
            <div>
                <div className="profileHeader">Edit Profile</div>
<<<<<<< HEAD
                <img src="./images/guest_profile.png" className="profileImg" />
                <form className="text-center">
                    <div class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <br />
                        <input type="file" class="form-control-file" id="img_pro" className="uploadProfileCenter" />
                    </div>
                </form>
                <div className="userName">Username: PondTHElnwZAAA</div>

                <form className="text-center">
                    <div class="form-group">
                        <textarea class="form-control" id="bio" rows="8">
                            ชายหนุ่มผู้มีความมุ่งมั่นที่จะเป็นเจ้าแห่งการต่อโมเดลและการลงสี เขาเริ่มทำการเก็บรวบรวมโมเดลจนครบ 7 ตัวเพื่อขอพรกับเทพเจ้าโมเดลให้ชุบชีวิตแฟนสาว
                    </textarea>
                    </div>
                </form>

                <div className="collectionHeader">My Collection</div>
=======
                <div className="profileImgHolder">
                    <img src="./images/guest_profile.png" className="profileImg"/>
                </div>

                    <Form>
                        <Form.Group style={{marginLeft:520}}> 
                            <Form.Label>Upload Image</Form.Label>
                            <Form.File id="newProfileImg"/>
                        </Form.Group>

                        <Form.Label className="bioHead">Username: PondTHElnwZAAA</Form.Label>

                        <InputGroup className="FormInput">
                            <FormControl as="textarea" placeholder="Enter Your Description" col="50" style={{marginLeft:0}} />
                        </InputGroup>
                    </Form>
>>>>>>> 7e86195089005eb7e1480485ebfd919a74d351dc

                <div class="card-group">
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect1" name/>
                            </span>
                        </form>
                    </div>
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect2" />
                            </span>
                        </form>
                    </div>
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect3" />
                            </span>
                        </form>
                    </div>
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect4" />
                            </span>
                        </form>
                    </div>
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect5" />
                            </span>
                        </form>
                    </div>
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect6" />
                            </span>
                        </form>
                    </div>
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect7" />
                            </span>
                        </form>
                    </div>
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect8" />
                            </span>
                        </form>
                    </div>
                    <div class="card" className="col-sm-4">
                        <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap" />
                        <form className="center">
                            <span class="form-group">
                                <label for="profileImg">Upload your Profile Picture</label>
                                <input type="file" class="form-control-file" id="img_collect9" />
                            </span>
                        </form>
                    </div>
                </div>

                <a class="btn btn-primary btn-lg float-right" role="button"
                    onClick={() => {
                        console.log(document.getElementById('img_pro').value)
                        var data = {
                            "img_pro": document.getElementById('img_pro').value,
                            "bio": document.getElementById('bio').value,
                            "img_collect1": document.getElementById('img_collect1').value,
                            "img_collect2": document.getElementById('img_collect2').value,
                            "img_collect3": document.getElementById('img_collect3').value,
                            "img_collect4": document.getElementById('img_collect4').value,
                            "img_collect5": document.getElementById('img_collect5').value,
                            "img_collect6": document.getElementById('img_collect6').value,
                            "img_collect7": document.getElementById('img_collect7').value,
                            "img_collect8": document.getElementById('img_collect8').value,
                            "img_collect9": document.getElementById('img_collect9').value,
                        }
                        console.log(data);
                    }}>Confirm</a>
            </div>
        )
    }
}
