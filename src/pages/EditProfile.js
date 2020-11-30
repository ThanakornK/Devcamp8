import React, { Component } from 'react'
import './../styles/EditProfile.css';

export default class EditProfile extends Component {
    render() {
        return (
            <div>
                <div className="profileHeader">Edit Profile</div>
                <img src="./images/guest_profile.png" className="profileImg"/>
                <form className="text-center">
                    <div class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <br/>
                        <input type="file" class="form-control-file" id="profileImg" className="center"/>
                    </div>
                </form>
                <div className="userName">Username: PondTHElnwZAAA</div>
                
                <form className="text-center">
                <div class="form-group">
                    <textarea class="form-control" id="userBio" rows="8">
                    ชายหนุ่มผู้มีความมุ่งมั่นที่จะเป็นเจ้าแห่งการต่อโมเดลและการลงสี เขาเริ่มทำการเก็บรวบรวมโมเดลจนครบ 7 ตัวเพื่อขอพรกับเทพเจ้าโมเดลให้ชุบชีวิตแฟนสาว
                    </textarea>
                </div>
                </form>
                
                <div className="collectionHeader">My Collection</div>
           
  <div class="card-group">
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <form className="center">
                    <span class="form-group">
                        <label for="profileImg">Upload your Profile Picture</label>
                        <input type="file" class="form-control-file" id="profileImg"/>
                    </span>
                </form>
    </div>
  </div>

  <a class="btn btn-primary btn-lg float-right" href="/profile" role="button">Confirm</a>
            </div>
        )
    }
}
