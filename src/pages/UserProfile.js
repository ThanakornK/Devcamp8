import React from 'react';
import './../styles/UserProfile.css';
import userData from '../testData/userdata' ;
import url from '../service/apiService'
import axios from 'axios'

export default class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     profile: []
    };
  }

  componentDidMount() {
    // console.log(axios.get(`http://8cf0d250a525.ngrok.io/api/courses/1`).data)
    // console.log(userData)
    axios.get(url + `/api` + window.location.pathname)
      .then(res => {
        const profile = res.data;
        console.log(profile);
        this.setState({ profile: profile });
      })
    console.log(this.state.profile);
  }

  render() {
    return (
      <div>
        <div className="profileHeader">Profile</div>
        <img src={url+this.state.profile.img_pro} className="profileImg" style={{width:"500px",height:"500px",}}></img>
        <div className="userName">Username: </div>
        <div className="description">{this.state.profile.bio}</div>
        <div className="collectionHeader">My Collection</div>

        <div class="card-group">
          <div class="card" className="col-sm-4">
            <img class="card-img-top" style={{width:"512px",height:"512px",}} src={url+this.state.profile.img_collect1} alt="Card image cap" />
            <div class="card-body">
            </div>
          </div>
          <div class="card" className="col-sm-4">
            <img class="card-img-top" src={url+this.state.profile.img_collect2} alt="Card image cap" style={{width:"512px",height:"512px",}}/>
            <div class="card-body">
            </div>
          </div>
          <div class="card" className="col-sm-4">
            <img class="card-img-top" src={url+this.state.profile.img_collect3} alt="Card image cap" style={{width:"512px",height:"512px",}}/>
            <div class="card-body">
            </div>
          </div>
          <div class="card" className="col-sm-4">
            <img class="card-img-top" src={url+this.state.profile.img_collect4} alt="Card image cap" style={{width:"512px",height:"512px",}}/>
            <div class="card-body">
            </div>
          </div>
          <div class="card" className="col-sm-4">
            <img class="card-img-top" src={url+this.state.profile.img_collect5} alt="Card image cap" style={{width:"512px",height:"512px",}}/>
            <div class="card-body">
            </div>
          </div>
          <div class="card" className="col-sm-4">
            <img class="card-img-top" src={url+this.state.profile.img_collect6} alt="Card image cap" style={{width:"512px",height:"512px",}}/>
            <div class="card-body">
            </div>
          </div>
          <div class="card" className="col-sm-4">
            <img class="card-img-top" src={url+this.state.profile.img_collect7} alt="Card image cap" style={{width:"512px",height:"512px",}}/>
            <div class="card-body">
            </div>
          </div>
          <div class="card" className="col-sm-4">
            <img class="card-img-top" src={url+this.state.profile.img_collect8} alt="Card image cap" style={{width:"512px",height:"512px",}}/>
            <div class="card-body">
            </div>
          </div>
          <div class="card" className="col-sm-4">
            <img class="card-img-top" src={url+this.state.profile.img_collect9} alt="Card image cap" style={{width:"512px",height:"512px",}}/>
            <div class="card-body">
            </div>
          </div>
        </div>

        <a class="btn btn-primary btn-lg float-right" href="/editProfile" role="button">Edit Profile</a>
      </div>
    )
  }
}
