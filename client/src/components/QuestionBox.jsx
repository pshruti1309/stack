import React from 'react'
import Avatar from '@material-ui/core/Avatar";
import "../Stylesheet/QuestionBox.css";
const QuestionBox = () => {
    return (
        <div className="QuestionBox">
         <div className="QuestionBox__user">
             <Avatar src="" alt="user__Profile" />
             <h4 className="user__username">Junior</h4>
             </div>
             <input type="text" placeholder="What is your question" 
             className="QuestionBox__inputField"/>

             
               

            
        </div>
    )
}

export default QuestionBox
