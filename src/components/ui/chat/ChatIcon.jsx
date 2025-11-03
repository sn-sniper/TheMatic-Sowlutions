import "./Chat.css";
import { useState } from "react";
const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="ChatIcon" onClick={handleChatOpen}>
      <span>
        {isOpen ? (
          <ion-icon name="close"></ion-icon>
        ) : (
          <ion-icon name="chatbubble"></ion-icon>
        )}
      </span>
    </div>
  );
};

export default ChatIcon;
