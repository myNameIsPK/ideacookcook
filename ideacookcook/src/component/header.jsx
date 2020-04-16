import React, { Component } from "react";
import axios from "axios";
import "./styles/headerstyles.css";
import Loginer from "./loginer.jsx";
import Register from "./register.jsx";

class Header extends Component {
  state = {
    currentUser: null,
    currentMemID: null,
  };
  openLoginer() {
    window.Loginer.setState({ showModal: true });
  }
  openRegister() {
    window.Register.setState({ showModal: true });
  }

  updateCurrentUser = async () => {
    console.log("updatecurrentUser");
    this.setState({
      currentMemID: window.Loginer.state.currentMemID,
    });
    await axios
      .get(
        "https://us-central1-ideacookcook.cloudfunctions.net/IdeaCookCook/User/data/" +
          window.Loginer.state.currentMemID
      )
      .then((res) => {
        this.setState({ currentUser: res.data.data.KnownName });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <React.Fragment>
        <header>
          {this.state.currentUser ? (
            <div class="login_regis">
              <div onClick={this.openLoginer}>{this.state.currentUser}</div>
              <div onClick={this.openRegister}>Logout</div>
            </div>
          ) : (
            <div class="login_regis">
              <div onClick={this.openLoginer}>เข้าสู่ระบบ</div>
              <div onClick={this.openRegister}>สมัครสมาชิก</div>
            </div>
          )}

          <div class="mainheader">
            <div id="logo">
              <a href="/">
                <h1>
                  {" "}
                  IDEA<br></br>COOK<br></br>COOK{" "}
                </h1>
              </a>
            </div>
            <div>
              <input type="text" placeholder="ค้นหาสูตรอาหาร ..."></input>
            </div>
            <a href="food.html">
              <button type="button">
                {" "}
                <b>ค้นหา</b>{" "}
              </button>
            </a>
            <a href="inputrecipe.html">
              <button type="button">
                {" "}
                <b>เพิ่มสูตร</b>{" "}
              </button>
            </a>
          </div>
        </header>
        <Loginer
          triggerUserCurrentUpdate={this.updateCurrentUser}
          ref={(Loginer) => {
            window.Loginer = Loginer;
          }}
        />
        <Register
          ref={(Register) => {
            window.Register = Register;
          }}
        />
      </React.Fragment>
    );
  }
}

export default Header;
