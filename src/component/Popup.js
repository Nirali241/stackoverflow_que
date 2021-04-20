import React from "react";
import Modal from "react-modal";
const Popup = ({ curr, modalOpen, setModalOpen }) => {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={{
        overlay: {},
        content: {
          position: "absolute",
          top: 100,
          left: 350,
          right: 500,
          bottom: 200,
          borderRadius: 30,
          backgroundColor: "rgb(131, 165, 197)",
        },
      }}
    >
      <div className="modal_cont">
        <h4>Author : </h4>
        <div>{curr?.owner.display_name}</div>
        <h4>Title :</h4>
        <div>{curr?.title}</div>
        <h4>Creation Date :</h4>
        <div>{curr?.creation_date}</div>
        <div>
          
          <a href={`${curr?.link}`}>Question</a>
        </div>
      </div>
      <br />
      <button className="modal_btn" onClick={() => setModalOpen(false)}>
        Close
      </button>
    </Modal>
  );
};

export default Popup;