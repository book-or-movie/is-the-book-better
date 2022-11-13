
const Modal = ({modal, setModal, message1, message2}) => {
 console.log("this is message1:", message1) 
 console.log("this is message2:", message2)
  return (
    <div className={`modal-screen ${modal ? "active-modal" : ""}`}>
      <div className="warning-container">
        <p>{message1}</p>
        <p>{message2}</p>
        
        <button onClick = {()=>setModal(false)}>OK I'll come back later</button>
      </div>
    </div>
  )
}

export default Modal