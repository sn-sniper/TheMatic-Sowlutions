import "./JoinButton.css"

const JoinButton = ({text, isNav}) => {
  return (
      <button className=  {isNav ? "button" : "button wide"}>
        {text}
      </button>
  );
};


export default JoinButton;
