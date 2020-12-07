import React from "react";
import MetaTags from 'react-meta-tags';


function Header() {
  return (
    <div>

      <MetaTags>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

        <title>Spicyo</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
      </MetaTags>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      {/* <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> */}


      <body className="main-layout">
        <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="" /></div>
        </div>

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
                      <a className="logo" href="index.html"><img src="images/logo.png" alt="#" /></a>
                    </div>
                  </div>
                  <div classNameName="col-md-9">
                    <div className="full">
                      <div className="right_header_info">
                        <ul>
                          <li className="dinone">Contact Us : <img style="margin-right: 15px;margin-left: 15px;" src="images/phone_icon.png" alt="#"/><a href="#">987-654-3210</a><li>
                            <li className="dinone"><img style="margin-right: 15px;" src="images/mail_icon.png" alt="#"><a href="#">demo@gmail.com</a><li>
                            <li className="dinone"><img style="margin-right: 15px;height: 21px;position: relative;top: -2px;" src="images/location_icon.png" alt="#"><a href="#">104 New york , USA</a><li>
                            <li className="button_user"><a className="button active" href="#">Login</a><a className="button" href="#">Register</a></li>
                            <li><img style="margin-right: 15px;" src="images/search_icon.png" alt="#"><li>
                            <li>
                              <button type="button" id="sidebarCollapse">
                              <img src="images/menu_icon.png" alt="#">
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Header;
