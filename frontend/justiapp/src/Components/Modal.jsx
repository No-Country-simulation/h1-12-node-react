// Modal.jsx
import React from "react";
//import xCircle from "../images/x-circle.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex  items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal-box relative bg-white p-9 rounded-2xl shadow border border-gray-200">
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          <img src="/images/x-circle.svg" alt="close button" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
