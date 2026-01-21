import React from "react";
// import fbimg from "../img/facebook.png"
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer1 = () => {
  return (
    <div className="footer-area bg-f">
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-3  col-md-6">
            <h3>About us</h3>
            <p>
              Integer cursus scelerisque ipsum id efficitur. Donec a dui
              fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac
              lectus a interdum. Vivamus semper posuere dui, at ornare turpis
              ultrices sit amet. Nulla cursus lorem ut nisi porta, ac eleifend
              arcu ultrices.
            </p>
          </div>
          <div className="col-lg-3  col-md-6">
            <h3>OPENING HOURS</h3>
            <p>
              <span className="text-color">Monday : </span> Closed
            </p>
            <p>
              <span className="text-color">Tue-Wed : </span> 9:AM-10PM
            </p>
            <p>
              <span className="text-color">Thu-Fri : </span> 9:AM-10PM
            </p>
            <p>
              <span className="text-color">Sat-Sun : </span> 9:AM-10PM
            </p>
          </div>
          <div className="col-lg-3  col-md-6">
            <h3>CONTACT INFO</h3>
            <p class="lead">Ipsum Street, Lorem Tower, MO, Columbia, 508000</p>
            <p className="lead">
              <a href="tel:+97976424895">97976424895</a>
            </p>
            <p className="lead">
            
            <a href="mailto:deemalviya18@gmail.com" target="_blank">deemalviya18@gmail.com</a>
            </p>
          </div>
          <div className="col-lg-3  col-md-6">
            <h3>SUBSCRIB</h3>

            <div className="subscrib-form">
              <form action="#" method="post" class="subscribe_form">
                <input
                  name="EMAIL"
                  id="subs-email"
                  class="form_input"
                  placeholder="Email Address..."
                  type="email"
                ></input>
                <button type="submit" class="submit">
                  SUBSCRIBE
                </button>
              </form>
            </div>
            <ul className="list-inline f-social">
            <li class="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li class="list-inline-item"><a href="https://www.google.com/" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>{" "}

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"> 
            <p className="company-name">All Rights Reserved. © 2045 Yamifood Restaurant Design By: HTML Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
