import React, { useState } from "react"
import { Typography, IconButton, AppBar } from   "@mui/material"
import { Link as NavLink } from "gatsby"
import $ from "jquery"
import HomeIcon from "@mui/icons-material/Home"
import SchoolIcon from "@mui/icons-material/School"
import Close from "@mui/icons-material/Close"

import { SpeakerNotes } from "@mui/icons-material"
import { BookOpenText, GraduationCap, Handshake, MailCheck, MessageSquareMore, Users } from "lucide-react"

const style = {
  color: "purple",
  borderBottom: "1px solid purple",
  textDecoration: "none",
 // padding: "0.25rem",
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
//navbar navbar-expand-lg navbar-lights text-black  py-lg-2 mt-2 border-red-400 border-solid border-1
const size=32

  return (
    <nav
      className="navbar navbar-expand-lg navbar-lights text-black  w-full py-lg-2 mt-2 "
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
          data-bs-toggle="collapsed"
          onClick={() => setToggler(!toggle)}
          data-bs-target="#navbarResponsive"
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
        {/**collapse navbar-collaps */}
        <div className="w-full   " id="navbarResponsive">
          <div className="hidden md:block py=2">   <AppNav setToggle={()=>null}/></div>
          <div className="block md:hidden py-2">  {toggle ? <AppNav setToggle={setToggler}/>:null}</div>
       
        
        </div>
      </div>
    </nav>
  )
}
export default Nav


const AppNav=({setToggle=()=>{}})=>{
  const handleClick=()=>{
    const isMobile=window.matchMedia("(max-width:540px)").matches;
    if(isMobile){
      setToggle(false)
    }
  }
  return(
    <ul className="navbar-nav   mx-auto flex  md:items-center " onClick={handleClick}>
    <li className="nav-item px-lg-2 mr-4">
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
        className="nav-link text-capitalize text-expanded "
        to={"/about-lakeview-agc"}
      >
       
        <Users className="inline mr-2" color="purple" />
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
        className="nav-link text-capitalize text-expanded "
        to={"/services"}
      >
       
        <MessageSquareMore   className="inline mr-2" color="purple" />
        Sermons
      </NavLink>
    </li>

    <li className="nav-item px-lg-2">
      <NavLink
        activeStyle={style}
        className="nav-link text-capitalize text-expanded "
        to={"/home-fellowship-and-bible-study"}
      >
        <BookOpenText  className="inline mr-2" color="purple"/>
       
        Disclipleship
      </NavLink>
    </li>

    <li className="nav-item px-lg-2">
      <NavLink
        activeStyle={style}
        className="nav-link text-capitalize text-expanded "
        to={"/get-in-touch"}
      >
      
        <MailCheck  className="inline mr-2" color="purple" />
        Contact Us
      </NavLink>
    </li>

    <li className="nav-item px-lg-2">
      <NavLink
        activeStyle={style}
        className="nav-link text-capitalize text-expanded "
        to={"/lakeview-academy"}
      >
        <GraduationCap className="inline mr-2" color="purple" size={32}/>
       
         Lakeview AGC academy
       
      </NavLink>
    </li>
  </ul>
  )
}