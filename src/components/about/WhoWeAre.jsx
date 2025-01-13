import React from "react"
import {
  Grid,
  Card,
  Paper,
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from   "@mui/material"
import { ScrollText, Target, Heart } from 'lucide-react';

import { AboutNav } from "./About"
import church from "../../images/assets/img/2024/IMG-20231230-WA0006.jpg"
import frontchurch from "../../images/assets/img/2024/IMG-20231230-WA0006.jpg"

export const WhoWeAreTab = () => {
  const today = new Date().getDay() % 2 === 0
  return (
    <Grid className="mb-3">
      <Paper>
        <Typography variant="h5" className="p-2 my-2 text-center">
          Lakeview Africa Gospel Church-Section 58,Nakuru.
        </Typography>
        <CardMedia
          src={today ? church : frontchurch}
          component="img"
          height={250}
          className="w-100 max-h-[400px] "
        />
      </Paper>
      <Grid>
       <ChurchAboutPage/>
      </Grid>
    </Grid>
  )
}
//purpose
export const Purpose = () => (
  <Box className="mb-3">
    <Typography variant="h5" className="text-center">
      Our Purpose
    </Typography>
    <List>
      <ListItem dense>
        <ListItemText
          primary="To proclaim the Gospel of Jesus Christ to all who are and who are
               saved."
        />
      </ListItem>
      <ListItem dense>
        <ListItemText
          primary="To nurture the spiritual, physical and mental life of its members
               through preaching the word of God, Prayers, fellowship and
               communion."
        />
      </ListItem>
      <ListItem dense>
        <ListItemText
          primary=" To enable its members to identify, develop and use their
               spiritual gifts to serve both in and out of church."
        />
      </ListItem>
      <ListItem dense>
        <ListItemText
          primary="To witness through word and deed, undertake projects and
               programmes that lessen and free the people from the bondage of
               sin, poverty and disease."
        />
      </ListItem>
    </List>
  </Box>
)



const ChurchAboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      {/* Main content container */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Who We Are Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Who We Are </h1>
          <div className="bg-white rounded-lg shadow-sm p-8 transform hover:shadow-md transition-all duration-300">
            <p className="text-gray-700 leading-relaxed">
              Lakeview Africa Gospel Church is a christian based church situated in Nakuru, 
              a house of prayer for all people, with a mission of spreading the gospel of 
              Jesus Christ to all people across Nakuru County and beyond. We are part of a 
              large and diverse Africa Gospel Church congregation in Kenya.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8 transform hover:shadow-md transition-all duration-300">
            <p className="text-gray-700 mb-4">
              To fulfill the Great commandment of the Lord Jesus Christ according to the Great Plan.
            </p>
            <div className="text-left text-gray-600 space-y-2">
              <p>Mark 12:30-31;</p>
              <p>Mathew 28:19-20;</p>
              <p>Acts 1:8</p>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Our Purpose</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6 transform hover:shadow-md transition-all duration-300">
            <div className="text-left">
              {[
                "To proclaim the Gospel of Jesus Christ to all who are and who are saved.",
                "To nurture the spiritual, physical and mental life of its members through preaching the word of God, Prayers, fellowship and communion.",
                "To enable its members to identify, develop and use their spiritual gifts to serve both in and out of church.",
                "To witness through word and deed, undertake projects and programmes that lessen and free the people from the bondage of sin, poverty and disease."
              ].map((purpose, index) => (
                <div key={index} className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

