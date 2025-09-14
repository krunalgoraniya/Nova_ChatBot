import { useState } from 'react'
import React from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import  ChatMessages  from './components/ChatMessages.jsx'
import dayjs from 'dayjs'
import './App.css'

        function App(){
          const array = React.useState([
          {
            message: "Hello! I'm Nova, your chatbot powered by Google Gemini. How can I help you today?",
            sender: 'robot',
            id: '1',
            time: dayjs().format('HH:mm')
          }
        ]);
          const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];
        return(
           <div className="app-container">
            <ChatMessages
              chatMessages = {chatMessages}
            />
              <ChatInput
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}
            />
          </div>
        );
      }

export default App
