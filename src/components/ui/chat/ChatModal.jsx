import "./Chat.css";

const ChatModal = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <button className="back-btn">
          <ion-icon name="arrow-back"></ion-icon>
        </button>
        <span>Thematic Team</span>
        <button className="dots">
          <ion-icon name="ellipsis-vertical"></ion-icon>
        </button>
      </div>
      <div className="chat-body"></div>
      <div className="chat-keyboard">
        <input type="text" placeholder="Enter Your Message..."/>
      </div>
    </div>
  );
};

export default ChatModal;
