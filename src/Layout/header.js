import React, { Component } from "react";
import "../Layout/header.css";
import { NavLink } from "react-router-dom";
import Logout from "./login";
import { Row, Col} from "react-bootstrap";

const white = {
  backgroundColor: "white",
  color: "black"
};
const black = {
  backgroundColor: "black",
  color: " white"
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      showadmin: false,
      color: white
    };
  }
  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  colorChange1 = () => {
    var newColor = this.state.color === white ? black : white;
    this.setState({
      color: newColor
    });
    console.log(newColor);

    //document.querySelector(".btn2").style.backgroundColor = "black";
    //  document.querySelector(".btn1").style.backgroundColor = "White";

    // console.log(newColor)
  };
  //   colorChange2 = () => {
  //     document.querySelector(".btn1").style.backgroundColor = "black";
  //     document.querySelector(".btn2").style.backgroundColor = "white";
  //   };

  render() {
    // let btn_class = this.state.color ? "black" : "white";
    return (
      <div id="main" className="Header">
        <Row>
          <Col md={2} sm={2} lg={2}>
            <a className="main-logo">
              <img
                src={"/images/beerboard-logo.png"}
                className="img"
                alt="logo"
              />
            </a>
          </Col>
          <Col md={8} sm={8} lg={8}>
            <Row className="float-left mt-3">
              {/* <Col md={3} sm={3} lg={3}>
                <button className="btn" onClick={this.colorChange1.bind(this)} style={this.state.color}> 
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color:"white" }}
                  >
                    DASHBOARD
                  </Link>
                </button>
              </Col>
              <Col md={3} sm={3} lg={3} className="ml-5">
                <button className="btn"  >
                  <Link
                    to="/lineCleaning"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    LINE-CLEANING
                  </Link>
                </button>
              </Col> */}
              <nav className="navbar navbar-default ">
              <ul className="nav nav-pills">
                <li>
                  <NavLink to="/dashboard" activeClassName="active"  style={{ textDecoration: "none"}} >
                    DASHBOARD
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/lineCleaning" activeClassName="active" style={{ textDecoration: "none"}}>
                    LINE-CLEANING
                  </NavLink>
                </li>
              </ul>
              </nav>
            </Row>
          </Col>
          <Col md={2} sm={2} lg={2} className="mc m-auto">
            <a className="main-admin" onClick={this.toggleHidden}>
              <span>ADMINISTRATOR </span>
              <img src={"/images/Icon-User.png"} className="img" alt="logo" />
            </a>
          </Col>
        </Row>
        <div className="logout" style={{ color: "white" }}>
          {!this.state.isHidden && <Logout />}
        </div>
      </div>
    );
  }
}

export default Header;
