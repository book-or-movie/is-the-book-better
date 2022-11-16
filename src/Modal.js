import { useNavigate } from "react-router-dom";

const Modal = ({modal, setModal, message1, message2}) => {
  
  const navigate = useNavigate();


  const returnHome = () => {
    setModal(false)
    navigate(`/`)
  }

  return (
    <div className={`modal-screen ${modal ? "active-modal" : ""}`}>
      <div className="warning-container">
        <p>{message1}</p>
        <p>{message2}</p>
        
        <button onClick = {returnHome} className="modal-button">OK I'll come back later</button>
      </div>
    </div>
  )
}

export default Modal