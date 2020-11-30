import React from 'react';
import './../styles/UserProfile.css';

export default class UserProfile extends React.Component {
    render () {
        return (
            <div>
                <div className="profileHeader">Profile</div>
                <img src="./images/guest_profile.png" className="profileImg"></img>
                <div className="userName">Username: PondTHElnwZAAA</div>
                <div className="description">ชายหนุ่มผู้มีความมุ่งมั่นที่จะเป็นเจ้าแห่งการต่อโมเดลและการลงสี เขาเริ่มทำการเก็บรวบรวมโมเดลจนครบ 7 ตัวเพื่อขอพรกับเทพเจ้าโมเดลให้ชุบชีวิตแฟนสาว</div>
                <div className="collectionHeader">My Collection</div>
           
  <div class="card-group">
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
    <div class="card" className="col-sm-4">
      <img class="card-img-top" src="./images/guest_profile.png" alt="Card image cap"/>
      <div class="card-body">
      </div>
    </div>
  </div>

  <a class="btn btn-primary btn-lg float-right" href="/library" role="button">Edit Profile</a>
  </div>
        )
    }
}
