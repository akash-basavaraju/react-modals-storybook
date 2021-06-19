import "./index.css";

export default function CloseButton({
  className = "",
  buttonText = "X",
  onClose = () => {},
}) {
  return (
    <div className={`close_button_container ${className}`}>
      <button className="close_button" onClick={onClose}>
        {buttonText}
      </button>
    </div>
  );
}
