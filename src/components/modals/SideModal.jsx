import React from 'react';

const SideModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50  flex justify-center items-center">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={onClose}
          >
            
          </div>
          <div className="relative h-full w-full z-50 bg-[#fff] rounded-lg p-2">
            <div className="absolute top-4 right-4">
              <button
                className=" text-[#000] text-lg rounded-full p-2" //bg-[#666]
                onClick={onClose}
              >
                X
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default SideModal;
