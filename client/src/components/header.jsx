import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SearchIcon from '@material-ui/icons/Search';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar';
import logo from "../images/logo.jpeg";
import "../Stylesheet/Header.css";
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />


const Header = ()=> {

    const location = window.location.href;
    
    return (
        <div className="Header">
        <div className="Header__left">
        <div className="left__logo">
            <img src={Logo} alt="Company Logo" className="left__logoImage"/>

            </div>
            <div className={`left__Home ${
                location == "http:/localhost:3000/" ? "current-location":  null
            }`}>
                <HomeIcon />
                <h4>Home</h4>
                </div>
                <div className={`left__notifications ${
                    location == "http:/localhost:3000/notifications" ? "current-location":  null
                }`}>
                
                    <NotificationsIcon />
                    <h4>Notifications</h4>

                    </div>  
                </div>  
                <div className="Header__center">
                    <input type="text" placeholder="Search"  className="center__inputfield"/>
                     <SearchIcon />
                    </div>  

                    <div className="Header__right">
                        <div className="right__user">
                            <Avatar src="" alt="User Profile" />
                        </div>
                        <LanguageIcon className="right__Icon" />
                        <button className="right-btn">Ask question</button>
                    
                    </div>     
        </div>
    );

    

};

export default Header;
