import React from "react"



import { ListItemIcon, List, ListItem, IconButton } from   "@mui/material"
import {  ThemeProvider,createTheme } from "@mui/material/styles"
import {makeStyles}from "@mui/styles"
import Facebook from "@mui/icons-material/Facebook"
import PropTypes from "prop-types"
import YouTube from "@mui/icons-material/YouTube"
import IG from "@mui/icons-material/Instagram"
import Twitter from "@mui/icons-material/Twitter"

import Header from "./header"
import Footer from "./ui/footer/Footer"
import Nav from "./ui/Nav/Nav"

import Give from "./give/Give"
import { ArrowUpwardRounded } from "@mui/icons-material"
import { CircleArrowUpIcon } from "lucide-react"
///import "./layout.css"
const theme = createTheme();
const Layout = ({ children }) => {
  const [socials, showSocials] = React.useState(false)
  const handleNavigation = () => window.scrollTo({ behavior: "smooth", top: 0 })
  const handleScroll = () => {
    const h = document.documentElement.clientHeight
    const arrow = document.querySelector(".navigation-arrow")
    if (arrow) {
      let scrolling = window.scrollY
      if (scrolling > h / 2) {
        arrow.style.visibility = "visible"
        arrow.style.bottom = scrolling / 100 + "%"
      } else {
        arrow.style.visibility = "hidden"
      }
    }
  }
  let arrowSize

  if (globalThis?.window !== undefined) {
    const smallScreen = document.documentElement.clientWidth
    arrowSize = smallScreen > 480 ? "2x" : "2x"
    if (smallScreen < 770) {
      window.onscroll = handleScroll
    }
  } else {
    var globalThis
  }

  React.useEffect(() => {
    let timer = setTimeout(() => showSocials(true), 5000)
    

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container ">
       <ThemeProvider theme={theme}> 
      <Header Socials={Socials} />
      <Nav />
      <Give />
      {children}
    
      <Footer />
      <CircleArrowUpIcon   className="navigation-arrow"
        icon="arrow-alt-circle-up"
        size={arrowSize}
        color="purple"
        onClick={handleNavigation}/>

     
      {socials ? <Socials useStyles={useStyles} /> : null}
      </ThemeProvider>
    </div>
  )
}

export default Layout
const useStyles = makeStyles({
  socials: {
    width: 50,
    background: "#fff",
    padding: ".15rem",
    position: "fixed",
    zIndex: 100,
    top: "20%",
    right: 10,
    borderRadius: 5,
    transform: "skew(10,10)",
    margin: "0.25rem auto",
    textAlign: "center",
    transitition: "all .25s ease-in",
    "@media (max-width:480px)": {
      right: -5,
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    textAlign: "center",
  },
})
let url = "https://www.youtube.com/channel/UCVzXXOTTs7PLfh5wjB3KB9g"

const Socials = ({ useStyles }) => {
  const classes = useStyles()
  return (
    <div className={classes.socials}>
      <List className={classes.list}>
        <ListItem
          button
          dense
          onClick={() =>
            window.open(
              "https://www.facebook.com/Lakeview-AGC-Nakuru-355976284540480"
            )
          }
        >
          <ListItemIcon>
            {" "}
            <Facebook fontSize="small" color="primary" />
          </ListItemIcon>
        </ListItem>
        <ListItem
          dense
          onClick={() => window.open("https://twitter.com/lakeviewagc")}
        >
          <ListItemIcon>
            {" "}
            <Twitter fontSize="small" color="primary" />
          </ListItemIcon>
        </ListItem>
        <ListItem button dense onClick={() => window.open(url)}>
          <ListItemIcon>
            {" "}
            <YouTube fontSize="small" color="secondary" />
          </ListItemIcon>
        </ListItem>
        <ListItem
          dense
          onClick={() =>
            window.open("https://www.instagram.com/lakeviewagcnakuru/")
          }
        >
          <ListItemIcon>
            {" "}
            <IG fontSize="small" color="secondary" />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
