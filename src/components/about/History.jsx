import React from "react"
import $ from "jquery"
import {
  Grid,
  Card,
  CardMedia,
  Box,
  Typography,
  Paper,
} from   "@mui/material"

import { Clock, School, Users, Church } from 'lucide-react';
import churcharea2 from "../../images/assets/img/2022/IMG-20220112-WA0004.jpg"
import churcharea from "../../images/assets/img/2022/IMG-20220112-WA0003.jpg"
const History = () => {
  function slideToggle(e) {
    $("#brief").slideToggle(2000)
  }
  const today = new Date().getDay() % 2 === 0
  return (
    <Grid className="mb-5">
      <Box>
        <Typography variant="h5" className="text-center my-2 p-2">
          Brief History of Lakeview AGC
        </Typography>
        <CardMedia
          src={today ? churcharea : churcharea2}
          title="Church area"
          component="img"
          height={200}
        />
      </Box>
     <ChurchHistory />
    </Grid>
  )
}
export default History


const ChurchHistory = () => {
  const timelineEvents = [
    {
      date: "March 26th, 1978",
      title: "First Service",
      description: "First service conducted in a rented room in Afraha Social Hall, initially called Nakuru Town Church.",
      icon: <Church className="w-6 h-6 text-blue-600" />
    },
    {
      date: "21st July, 1985",
      title: "New Sanctuary",
      description: "Relocated to first owned sanctuary in Section 58 facing Lake Nakuru, christened as 'Lakeview Africa Gospel Church'. Unveiled by President Daniel Arap Moi.",
      icon: <Church className="w-6 h-6 text-blue-600" />
    },
    {
      date: "6th October, 2002",
      title: "Expanded Sanctuary",
      description: "Launched larger sanctuary to accommodate growing congregation, again inaugurated by President Daniel Arap Moi.",
      icon: <Church className="w-6 h-6 text-blue-600" />
    }
  ];
const years=new Date().getFullYear()-1978
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Lakeview Africa Gospel Church</span> has been in existence for the last {years} years with the sole purpose of sharing the light of the gospel of the Lord Jesus in Nakuru and beyond. It is one of the 1,600 congregations of Africa Gospel Church in Kenya.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center md:justify-center">
                <div className={`flex md:w-1/2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className={`bg-white rounded-lg shadow-sm p-6 mx-6 md:mx-8 w-full md:max-w-md transform transition-all duration-300 hover:shadow-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-blue-100 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                      {event.icon}
                    </div>
                    <h3 className="font-bold text-blue-600 mb-2">{event.date}</h3>
                    <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 transform transition-all duration-300 hover:shadow-md">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="font-semibold text-gray-900">Leadership</h3>
            </div>
            <p className="text-gray-700">
              Planted by Isaac and Susana Saoshiro missionaries with IGM (Immanuel General Mission) from Japan, Lakeview AGC is now run fully by local leadership, giving members a sense of ownership through the Local church council (LCC).
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 transform transition-all duration-300 hover:shadow-md">
            <div className="flex items-center mb-4">
              <School className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="font-semibold text-gray-900">Education</h3>
            </div>
            <p className="text-gray-700">
              The church has established Lakeview Academy, a Christian based academic institution, offering quality education for kindergarten students and promoting God fearing generation imparted with spiritual values.
            </p>
          </div>
        </div>

        {/* Current Mission */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-700 leading-relaxed">
            The church continues to evangelize the gospel of Jesus Christ all over Nakuru County both as a whole church and outside through our devoted missions and evangelism ministries. The church has ministries committed to spreading the gospel through fellowship and companionship.
          </p>
        </section>
      </div>
    </div>
  );
};
