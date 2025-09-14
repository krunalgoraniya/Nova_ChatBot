export function ChatMessage({message, sender,time}){
        return(
          <div className = {sender === 'user' ? 'user-message' : 'robot-message'}>
            { sender === 'robot' && 
              <img src = "https://img.freepik.com/premium-vector/robot-circle-flat-icon_418020-239.jpg" 
              width = "50"/>}
            <div className = "message-text">
              {message}
            <div style={{ fontSize: "12px", color: "gray" }}>{time}</div> 
            </div>
            {sender === 'user' && 
              <img src = "https://static.vecteezy.com/system/resources/previews/037/336/395/non_2x/user-profile-flat-illustration-avatar-person-icon-gender-neutral-silhouette-profile-picture-free-vector.jpg" 
              width = "50"/>}
          </div>
        );
      }
