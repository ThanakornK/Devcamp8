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
<<<<<<< HEAD
        <img src={url + this.state.profile.img_pro} className="profileImg" style={{ width: "500px", height: "500px", }}></img>
        <div className="userName">Username: {this.state.profile.username}</div>
        <div className="description">{this.state.profile.bio}</div>
        <div className="collectionHeader">My Collection</div>

        <Row style={{ display: "flex", flexDirection: "column" }}>
          {this.state.img.map(val =>
            <Col>
              <div style={{ padding: "20px", margin: "20px" }}>
                <Card>
                  <Card.Img className="imageContent" variant="top" src={url + val.img} ></Card.Img>

                  {/* <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>
                      {val.text_content}
                    </Card.Text>
                  </Card.Body> */}
                </Card>

              </div>
            </Col>

          )}
        </Row>
=======
        <div className="profileImgHolder">
          <img src={url+this.state.profile.img_pro} className="profileImg"></img>
        </div>
        <div className="userName">Username: </div>
        <div className="description">{this.state.profile.bio}</div>
        <div className="collectionHeader">My Collection</div>

        <div class="card-group">
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect1} alt="Card image cap" />

          </div>
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect2} alt="Card image cap"/>

          </div>
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect3} alt="Card image cap"/>

          </div>
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect4} alt="Card image cap"/>

          </div>
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect5} alt="Card image cap"/>

          </div>
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect6} alt="Card image cap"/>

          </div>
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect7} alt="Card image cap"/>

          </div>
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect8} alt="Card image cap"/>

          </div>
          <div class="card" className="col-sm-4">
            <img className="collectionImg" src={url+this.state.profile.img_collect9} alt="Card image cap"/>

          </div>
        </div>
>>>>>>> 7e86195089005eb7e1480485ebfd919a74d351dc

        <a class="btn btn-primary btn-lg float-right" href="/editProfile" role="button">Edit Profile</a>
      </div>
    )
  }
}
