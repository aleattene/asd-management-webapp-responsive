import ASD from "../assets/img/logo.jpg";

// Navigation Bar
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark">
        <a className="navbar-brand" href="">
          <img src={ASD} width="100rem" style={{ float: "left" }} />
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
