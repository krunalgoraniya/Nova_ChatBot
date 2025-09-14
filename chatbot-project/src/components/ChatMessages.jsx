import { useState,useEffect } from 'react';
import React from 'react';
import { ChatMessage } from './ChatMessage.jsx';

function ChatMessages({ chatMessages }) {
      const messagesEndRef = React.useRef(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);
    return (
        <div className="chat-messages-container">
            {chatMessages.map((chatMessage) => (
                <ChatMessage
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    key={chatMessage.id}
                    time={chatMessage.time} 
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default ChatMessages;
