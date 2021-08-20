import { Component } from "react";
import ASD from "../assets/img/logo.jpg";

// Navigation Bar
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-md bg-dark">
          <img src={ASD} width="100rem" style={{ float: "left" }} />
        </nav>
      </div>
    );
  }
}
export default Navbar;
