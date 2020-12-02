import React from 'react';
import './../styles/UserProfile.css';
import userData from '../testData/userdata';
import url from '../service/apiService'
import axios from 'axios'
import { Button, Container, Card, Row, Col, Modal } from 'react-bootstrap'

export default class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      img:[]
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

    axios.get(url + `/api/img` + window.location.pathname)
      .then(res => {
        const img = res.data;
        console.log(img);
        this.setState({ img: img });
      })
  }

  render() {
    return (
      <div>
        <div className="profileHeader">Profile</div>
        <div>
          <div  className="profileImgHolder">
          <img src={url + this.state.profile.img_pro} className="profileImg" style={{marginLeft:"15%"}}></img>
          </div>
        </div>
        <div className="userName">Username: {this.state.profile.username}</div>
        <div className="description">{this.state.profile.bio}</div>
        <div className="collectionHeader">My Collection</div>

        <div className="collectionContainer">
          {this.state.img.map(val =>
                <Card className="imgCard">
                  <Card.Img className="imageContent" variant="top" src={url + val.img} ></Card.Img>
                  {/* <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>
                      {val.text_content}
                    </Card.Text>
                  </Card.Body> */}
                </Card>
          )}
        </div>
        <div className="buttonContainer">
          <a style={{marginRight:15}} class="btn btn-primary btn-lg float-right" href={"/editProfile/"+localStorage.getItem('user_id')} role="button">Edit Profile</a>
          <a class="btn btn-primary btn-lg float-right" href={"/addCollection/"+localStorage.getItem('user_id')} role="button">Add Collection</a>
        </div>
      </div>
    )
  }
}
