import { useState } from 'react'
import React from 'react'
import dayjs from 'dayjs'
import { Chatbot } from 'supersimpledev' 


export function ChatInput({chatMessages, setChatMessages}){
        const [inputText, updatedText] = React.useState('');
        
        function saveInputText(event){
          updatedText(event.target.value);
        }
        
async function sendMessage() {
  const userMessage = {
    message: inputText,
    sender: "user",
    id: crypto.randomUUID(),
    time: dayjs().format("HH:mm"),
  };

  setChatMessages([...chatMessages, userMessage]);

  try {
    // Call Google Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCDovB6xHFHTVB5QWu_3U6zflaLL6xHX9s`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: inputText }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const botReply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I didn’t get that.";

    // Show bot's reply
    setChatMessages((prev) => [
      ...prev,
      {
        message: botReply,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().format("HH:mm"),
      },
    ]);
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    setChatMessages((prev) => [
      ...prev,
      {
        message: "⚠️ Error: Couldn’t reach Gemini API.",
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().format("HH:mm"),
      },
    ]);
  }

  updatedText("");
}


        return(
          <div className ="chat-input">
            <input 
              placeholder="Send a message to ChatBot" 
              size = "30" 
              onChange = {saveInputText} 
              value = {inputText}  
              className = "input-text"
              onKeyDown={(e) => {
                 if (e.key === "Enter") {
                    e.preventDefault();   
                    sendMessage();
                }
            }}
            />
            <button
             onClick = {sendMessage}
             className = "send-button"
            >Send</button>
          </div>
        );
      }