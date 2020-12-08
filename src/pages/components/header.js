import React from "react"

// Import icons here
import phoneIcon from '../../images/phone_icon.png'
import logo from '../../images/logo.png'
import mailIcon from '../../images/mail_icon.png'
import locationIcon from '../../images/location_icon.png'
import searchIcon from '../../images/search_icon.png'
import menuIcon from '../../images/menu_icon.png'

function Header() {
  return (
    <>
      <main className="main-layout">
        {/* <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="" /></div>
        </div> */}

        <div className="wrapper">
          <div className="sidebar">
            <nav id="sidebar">
              <div id="dismiss">
                <i className="fa fa-arrow-left"></i>
              </div>

              <ul className="list-unstyled components">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="recipe.html">Recipe</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>

          <div id="content">
            <header>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    <div className="full">
                      <a className="logo" href="#"><img src={logo} alt="#" /></a>
                    </div>
                  </div>
                  <div classNameName="col-md-9">
                    <div className="full">
                      <div className="right_header_info">
                        <ul>
                          <li className="dinone">Contact Us : <img style={{ marginRight: "15px", marginLeft: "15px" }} src={phoneIcon} alt="#" /><a href="#">987-654-3210</a></li>
                          <li className="dinone"><img style={{ marginRight: "15px" }} src={mailIcon} alt="#" /><a href="#">demo@gmail.com</a></li>
                          <li className="dinone"><img style={{ marginRight: "15px", height: "21px", position: "relative", top: "-2px" }} src={locationIcon} alt="#" /><a href="#">104 New york , USA</a></li>
                          <li className="button_user"><a className="button active" href="#">Login</a><a className="button" href="#">Register</a></li>
                          <li><img style={{ marginRight: "15px" }} src={searchIcon} alt="#" /></li>
                          <button type="button" id="sidebarCollapse">
                            <img src={menuIcon} alt="#" />
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </main>
    </>
  )
}

export default Header
