import { Link as NavLink } from "gatsby"
import React from "react"
import { 
  Home,
  Users,
  MessageSquareMore,
  BookOpenText,
  MailCheck,
  GraduationCap 
} from 'lucide-react';

const menuItems = [
  {
    path: '/',
    icon: <Home className="inline mr-2" color="purple" />,
    text: 'Home'
  },
  {
    path: '/about-lakeview-agc',
    icon: <Users className="inline mr-2" color="purple" />,
    text: 'About Us'
  },
  {
    path: '/services',
    icon: <MessageSquareMore className="inline mr-2" color="purple" />,
    text: 'Sermons'
  },
  {
    path: '/home-fellowship-and-bible-study',
    icon: <BookOpenText className="inline mr-2" color="purple" />,
    text: 'Discipleship'
  },
  {
    path: '/get-in-touch',
    icon: <MailCheck className="inline mr-2" color="purple" />,
    text: 'Contact Us'
  },
  {
    path: '/lakeview-academy',
    icon: <GraduationCap className="inline mr-2" color="purple" size={32} />,
    text: 'Lakeview AGC Academy'
  }
];

const Navigation = ({ setToggle=()=>{}}) => {
    const handleClick=()=>{
        const isMobile=window.matchMedia("(max-width:540px)").matches;
        if(isMobile){
          setToggle(false)
        }
      }
  return (
    <ul className="navbar-nav mx-auto flex md:items-center" onClick={handleClick}>
      {menuItems.map((item) => (
        <li key={item.path} className="nav-item px-lg-2 mr-4">
          <NavLink
            to={item.path}
            activeClassName="text-purple-800 border-purple-500 font-semibold"
            className={(({ isActive }) => `
              navlink text-capitalize text-expanded text-decoration-none !text-gray-800 p-2
             border-2 border-transparent hover:border-purple-500 hover:border-2 hover:rounded-md hover:p-2 hover:shadow-md
              ${isActive ? 'text-purple-500 font-semibold' : ''}
            `)(item.path===window.location.pathname)}
          >
            {item.icon}
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;