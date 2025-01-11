import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import {
  Grid,
  CardHeader,
  CardMedia,
  Card,
  Divider,
  Box,
  CardContent,
  Typography,
  Avatar,
  CircularProgress,
  TextField,
} from   "@mui/material"
import DatePicker from "react-datepicker"
import ArrowIcon from "@mui/icons-material/Link"
import ErrorIcon from "@mui/icons-material/Error"
import fasting from "../../../images/assets/img/2021/fastingwide.png"

import theme from "../../../images/assets/img/2022/theme_of_the_year.jpg"
import theme2025 from "../../../images/assets/img/2025/theme.jpg"
import {  StylesContext } from "@mui/material/styles"
import {makeStyles}from "@mui/styles"
import { Pagination } from "@mui/material"
const Intro = ({ churcharea = [], fast = {}, getDate, selected }) => {
  const PrayerFasting = (
    <Box>
      <Typography className="my-2">
        <Link to="/prayer-and-fasting">
          <ArrowIcon /> 21 days of prayers and fasting
        </Link>
      </Typography>
      <Typography variant="subtitle1">
        10<sup>th</sup>-31<sup>st</sup>January 2021 (
        <span className="text-danger">Day {fast?.id}</span>)
      </Typography>
    </Box>
  )
  return (
    <Box>
    

      {!!fast?.id &&
        new Date().getMonth() < 1 &&
        new Date().getFullYear() === 2022 && (
          <>
            <Fasting {...fast} getDate={getDate} selected={selected} />
          </>
        )}
<InfoSection />
      <Divider className="mt-4" />
    
      <WelcomeSection churcharea={churcharea[0]} />
      <Divider className="mt-4" />
      <FellowshipSection churcharea={churcharea[1]} />
     
      <Divider className="mt-4" />
      <Companionship churcharea={churcharea[2]} />
      <Divider className="mt-4" />
      <Missions churcharea={churcharea[3]} />
    </Box>
  )
}
export default Intro

const InfoSection = () => (
  <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Theme of the Year - 2025</h3>
      <p className="text-lg font-medium text-blue-700">GATHER GROW TRANSFORM</p>
    </div>
    
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Scripture of the Year - 2025</h3>
      <p className="text-lg font-medium text-blue-700">Acts 2:42-47</p>
    </div>
    
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Sunday Service Times</h3>
      <div className="space-y-2 text-gray-600">
        <p>First Service: 8:30 - 9:45 AM</p>
        <p>Second Service: 10:00 - 11:30 AM</p>
        <p>Youth Service & Sunday School: 9:30 - 11:30 AM</p>
      </div>
    </div>
  </div>
);
const WelcomeSection = ({ churcharea }) => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">Welcome to Lakeview Africa Gospel Church</h2>
        <p className="text-gray-600 leading-relaxed">
          We are delighted to have you in our church; "a house of prayer for all people" - Isaiah 56:7. 
          We are bound by our vision of sharing the light of the gospel of the Lord Jesus in Nakuru and beyond.
        </p>
        <div className="pt-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Celebrating and sharing the love of God.</h3>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg -order-1 md:order-1">
        <img 
          src={churcharea}
          alt="Church congregation" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);
const FellowshipSection = ({ churcharea }) => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Fellowship</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
          <img 
             src={churcharea}
            alt="Fellowship gathering" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <p className="text-gray-600 leading-relaxed">
            At Lakeview AGC, we proclaim the Gospel of Jesus Christ to all people through 
            preaching the word of God, Prayers, fellowship and communion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Prayer Groups</h4>
              <p className="text-gray-600">Join our weekly prayer meetings and spiritual growth sessions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600">Connect with fellow believers in our vibrant church community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const Fellowship = ({ churcharea }) => (
  <Card>
    <CardHeader title="Fellowship" className="text-center my-1 p-0 purped" />
    <CardContent className=" my-1 p-3">
      <Box className=" float-right">
        {" "}
        <CardMedia
          src={churcharea}
          component="img"
          className="thumbnail"
          height={200}
          width={100}
        />{" "}
      </Box>
      <Typography className=" my-1 p-0">
        At Lakeview AGC, we proclaim the Gospel of Jesus Christ to all people
        through preaching the word of God, Prayers, fellowship and communion.{" "}
      </Typography>
    </CardContent>
  </Card>
)

const Companionship = ({ churcharea }) => (
  <Box className="bg-gray-50 py-4 md:py-16">
    <Box className="max-w-7xl mx-auto px-4">
 
     
      <Typography className="text-3xl font-semibold text-center text-gray-900 mb-12">Companionship</Typography>
      <Box className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
      <Box className="p-2 md:p-6 " >
      <Typography className=" my-1p-2 md:p-4 text-gray-600 leading-loose">
        {" "}
        We believe in companionship as a family bound by the body of Jesus
        Christ. We endeavor , through word and deed, to witness and undertake
        projects and programmes that lessen and free people from the bondage of
        sin, poverty and disease and lead a Christian life in a Christian
        environment that inculcate the fruits of holy spirit as envisaged in
        Galatians 5:6.{" "}
      </Typography></Box>
      <Box className="-order-1 md:order-1">
        {" "}
        <CardMedia
          src={churcharea}
          component="img"
          className="thumbnail w-full h-full object-cover"
          
        />{" "}
      </Box>
      </Box>
      </Box>
   
  </Box>
)
const Missions = ({ churcharea }) => (
  <Box className="bg-gray-50 py-16">
  <Box  className="max-w-7xl mx-auto px-4 ">
   
    <Typography className="text-3xl font-semibold text-center text-gray-900 mb-12">Missions and Partnerships</Typography>
    <Box className="grid md:grid-cols-2 gap-12 items-center">
    <Box className="flex flex-col items-center">
      <Typography className="pb-2 leading-loose">
        We were honoured to have <b>Rev Isaac Saoshiro</b>, the founder of
        Lakeview AGC.{" "}
      </Typography>
      <Typography className="pb-2 leading-loose">
        {" "}
        We thank God for His blessings and for allowing us to reach the people
        of Turkana and Kakuma refugee camps.
      </Typography>
      <Typography>We are currently partnering with AGC
        mission station- Turkana/Kakuma.the missionaries on ground are{" "}
        <b>Zacceus</b> and <b>Faith Siele</b>.</Typography>
      <Typography className="pb-2 leading-loose">
        {" "}
        We thank God for our church plant Olive Fellowship AGC.Let's continue to
        pray for them.
      </Typography>
      </Box> <Box className="-order-1 md:order-1" >
        {" "}
        <CardMedia
          src={churcharea}
          component="img"
          className="thumbnail"
         
        />{" "}
      </Box>
    </Box>
   
  </Box>
  </Box>
)

export const Fasting = ({
  date,
  title,
  subtitle,
  message,
  id,
  verse,
  getDate,
  selected,
}) => {
  const DatePickers = (
    <TextField
      type="date"
      onChange={getDate}
      error
      variant="filled"
      size="small"
      value={selected}
      helperText="Check fasting day"
    />
  )
  const dayz = {
    background: "rgba(0,0,0,.75)",
    color: "white",
    padding: 10,
    borderRadius: "60%",
    fontSize: ".75rem",
    fontWeight: "bold",
    border: "2px solid white",
    position: "absolute",
    top: 0,

    margin: 5,
  }
  return (
    <Card
      className="w-100 mb-3 my-2 p-2 position-relative"
      style={{ background: "#ccc" }}
    >
      <small style={dayz}>
        Day{" "}
        {new Date(date).getDate() - new Date("2022", "0", "10").getDate() + 1}
      </small>
      <Typography
        variant="subtitle2"
        align="center"
        className="p-0 m-0 text-primary"
      >
        {" "}
        {date
          ? moment(date).format("dddd,MMMM Do, YYYY")
          : moment().format("dddd,MMMM Do, YYYY")}
      </Typography>
      <CardHeader
        className="text-center text-transform my-1 p-0 purped"
        title={
          <Typography variant="h6">
            21 Days of Prayer and Fasting {"       "}
          </Typography>
        }
      />

      <CardContent className=" my-1 p-3">
        <Box className=" floater">
          <CardMedia
            component="img"
            src={fasting}
            className="thumbnail mx-2 w-100"
            height="auto"
            width="100%"
          />{" "}
        </Box>
        {!!id ? (
          <Box>
            <Typography align="center" variant="h6">
              {title}
            </Typography>
            <Typography variant="body1" className="mb-2">
              {subtitle}
            </Typography>
            <Typography variant="subtitle2">{verse}</Typography>
            <Typography paragraph className="mb-2">
              <q> {message}</q>
            </Typography>
            <div className="my-2">
              <Divider />
              <div className="mt-3">
                <Typography>
                  {" "}
                  <Link to="/prayer-and-fasting" clasName="ml-3">
                    See all the 20 days of prayer and fasting.
                  </Link>
                </Typography>
              </div>
            </div>
          </Box>
        ) : id === 0 ? (
          <div className="p-4 mx-auto m-2 text-danger">
            <Typography align="center">
              {" "}
              <ErrorIcon color="secondary" /> Error loading data
            </Typography>{" "}
          </div>
        ) : (
          <div className="text-center my-4 mx-auto p-4">
            <CircularProgress size="3rem" color="primary" />
            <Typography>Loading...</Typography>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
const imgStyles = makeStyles({
  img: {
    "max-width": "600px",
    width: "100%",
    "@media (max-width:768px)": { maxWidth: 500, width: "100%" },
    "@media (max-width:480px)": { maxWidth: 300, width: "100%" },
  },
})
export const ThemeOfTheYear = () => {
  const styles = imgStyles()
  const year = new Date().getFullYear()
  return (
    <div className="p-4">
      <h6 className="py-2">Happy new Year {year} from Lakeview AGC</h6>
      <img
        className={styles.img}
        src={theme2025}
        alt={`Theme of the year ${year}`}
      />
    </div>
  )
}
