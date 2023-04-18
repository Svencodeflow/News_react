import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">

      {/* <NavLink className="navbar-brand navbar-logo" to="/">

      </NavLink> */}
      <form className="form_nav">
        <input className="search_nav" type="search" placeholder="Search" aria-label="Search" />
        <button className="button_nav" type="submit" >Search</button>
      </form>


      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              <i
                className="fas fa-tachometer-alt">
              </i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              <i
                className="far fa-address-book">
              </i>About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              <i
                className="far fa-copy">
              </i>Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;