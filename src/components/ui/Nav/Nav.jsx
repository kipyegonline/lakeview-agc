import React, { useState } from "react"
import { Typography, IconButton, AppBar } from   "@mui/material"
import { Link as NavLink } from "gatsby"
import $ from "jquery"
import HomeIcon from "@mui/icons-material/Home"
import SchoolIcon from "@mui/icons-material/School"
import Close from "@mui/icons-material/Close"

import { SpeakerNotes } from "@mui/icons-material"
import { BookOpenText, Handshake, MailCheck } from "lucide-react"

const style = {
  color: "red",
  borderBottom: "1px solid purple",
  textDecoration: "none",
  padding: "0.25rem",
}

const Nav = ({ match }) => {
  function handleModal() {
    $("#giveModal").modal({
      show: true,
      keyboard: true,
    })
  }
  const selectedStylez = { color: "black" }
  const [toggle, setToggler] = useState(false)

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  py-lg-2 mt-2 d"
      style={{ borderBottom: "1px solid red" }}
    >
      <div className="container">
        <NavLink
          className="navbar-brand text-uppercase text-expanded font-weight-bold tagline-lower d-lg-none"
          to={"/"}
        >
          <Typography variant="h6" className="text-center">
            {" "}
            Lakeview AGC
          </Typography>
        </NavLink>

        <button
          className="navbar-toggler nav-tog  menu-icon"
          type="button"
          data-toggle="collapse"
          onClick={() => setToggler(!toggle)}
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="float-right"></span>
          {!toggle ? (
            <span className="navbar-toggler-icon menu-icon"></span>
          ) : (
            <Close fontSize="large" className="menu-icon" />
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav   mx-auto">
            <li className="nav-item px-lg-2">
              <NavLink
                activeStyle={style}
                className="nav-link text-uppercase  text-expanded"
                to={"/"}
              >
                <HomeIcon />
              </NavLink>
            </li>
            <li className="nav-item px-lg-2 ">
              <NavLink
                activeStyle={style}
                className="nav-link text-uppercase text-expanded "
                to={"/about-lakeview-agc"}
              >
               
                <Handshake/>
                About Us{" "}
              </NavLink>
            </li>
            {/* <li className="nav-item px-lg-2">
              <NavLink
                activeStyle={style}
                className="nav-link text-uppercase  text-expanded"
                to={"/our-ministries"}
              >
                <FontAwesomeIcon size="lg" className="mr-2" icon="users" />
                Ministries
              </NavLink>
          </li>*/}
            <li className="nav-item px-lg-2">
              <NavLink
                activeStyle={style}
                className="nav-link text-uppercase text-expanded "
                to={"/services"}
              >
                <SpeakerNotes size="small" />
                Sermons
              </NavLink>
            </li>

            <li className="nav-item px-lg-2">
              <NavLink
                activeStyle={style}
                className="nav-link text-uppercase text-expanded "
                to={"/home-fellowship-and-bible-study"}
              >
                <BookOpenText/>
               
                Disclipleship
              </NavLink>
            </li>

            <li className="nav-item px-lg-2">
              <NavLink
                activeStyle={style}
                className="nav-link text-uppercase text-expanded "
                to={"/get-in-touch"}
              >
              
                <MailCheck/>
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item px-lg-2">
              <NavLink
                activeStyle={style}
                className="nav-link text-uppercase text-expanded "
                to={"/lakeview-academy"}
              >
                <IconButton color="secondary" size="small" className="m-0 p-0">
                  {" "}
                  <SchoolIcon size="small" className="mr-2" />
                 Lakeview AGC academy
                </IconButton>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav
