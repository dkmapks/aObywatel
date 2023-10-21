import React, { useState } from 'react';

const LargeTextModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="modal-button" onClick={openModal}>
        
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">

            <button className="close-button" onClick={closeModal}>
              Zamknij
            </button>
          </div>
        </div>
      )}
      <style jsx>
        {`
          .modal-button {
            background-color: white;
            border: none;
            border-radius: 10px;
            padding: 10px 20px;
            cursor: pointer;
            border:1px solid gray;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            border: 3px solid gray;
            padding: 10px 20px;
          }

          .close-button {
            background-color: white;
            border: none
            border-radius: 10px;
            padding: 10px 20px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default LargeTextModal;
