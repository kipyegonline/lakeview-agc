import React, { useState } from "react"
import { Link as NavLink } from "gatsby"
import { Users, Clock, ChurchIcon } from 'lucide-react';
import History from "./History"
import { Vision, Purpose, WhoWeAreTab } from "./WhoWeAre"
import PStaff from "./Staff"

const About = ({ children }) => {
  
  const [activeTab, setActiveTab] = useState(0);

  let Jsx=null
  switch (activeTab) {
    case 0:
      Jsx = WhoWeAreTab
      break
    case 1:
      Jsx = PStaff
      break
    case 2:
      Jsx = History
      break
    default:
      Jsx = WhoWeAreTab
      break
  }

  return (
    <div className="about-routes">
      
      <SubNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="min-h-screen bg-gray-50 p-4">
        <div className={` mx-auto transition-opacity duration-300 ${
          activeTab >=0 ? 'opacity-100' : 'opacity-0'
        }`}>
      <Jsx />
      </div>
      </div>
       
    </div>
  )
}
export default About
const selectedStyle = {
  color: "white",
  borderBottom: "1px solid purple",
  textDecoration: "none",
  padding: ".25rem",
}




const SubNavigation = ({activeTab, setActiveTab}) => {
 

  const navItems = [
    { id: 0, label: 'Who We Are', icon: <Users className="w-5 h-5" /> },
    { id: 1, label: 'Pastoral Staff', icon: <ChurchIcon className="w-5 h-5" /> },
    { id: 2, label: 'History', icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-blue-100 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <ul className="flex justify-center">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`px-8 py-4 text-sm font-medium transition-colors duration-200
                    ${activeTab === item.id 
                      ? 'text-white bg-purple-600' 
                      : 'text-gray-700 hover:bg-purple-500 hover:text-white'
                    }
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`
                  }
                >
                  <span className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                </button>
                {activeTab === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 transition-transform duration-300" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
        <ul className="flex justify-around items-center">
          {navItems.map((item) => (
            <li key={item.id} className="flex-1">
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full py-3 px-2 flex flex-col items-center justify-center space-y-1
                  ${activeTab === item.id 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-500'
                  }
                  transition-colors duration-200 focus:outline-none`
                }
              >
                {item.icon}
                <span className="text-xs font-medium">{item.label}</span>
                {activeTab === item.id && (
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-100 transition-transform duration-300" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

    

      {/* Add padding at bottom for mobile to account for fixed nav */}
      <div className="h-16 md:hidden" />
    </>
  );
};

