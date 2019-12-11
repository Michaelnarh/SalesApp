import React from "react";
import { Link } from "../../node_modules/react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-area mt-5 bg-dark p-5 fixed-buttom">
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>We provide you with good qualities of phone products will comes with affordable prices</p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className="" id="mc_embed_signup">
                  <form target="_blank" method="get" className="form-inline">
                    <div className="d-flex flex-row">
                      <input type="text" placeholder="Email" className="text-center" />
                      <button className="click-btn btn btn-default">
                        <i className="fa fa-long-arrow-right fa-2x" />
                      </button>
                    </div>
                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">Instragram Feed</h6>
                <ul className="instafeed d-flex flex-wrap"></ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center justify-content-between">
                  <Link to="">
                    <i className="fa fa-facebook fa-2x" />
                  </Link>
                  <Link to="https://twitter.com/michaelnarh">
                    <i className="fa fa-twitter fa-2x fa" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-instagram fa-2x" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-linkedin fa-2x fa" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="text-center text-white mt-3">
            Copyright &copy; 2019 Made with Love by <b>MTN-Linkok &reg;</b>{" "}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
