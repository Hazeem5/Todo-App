import React from 'react';

interface ModelProps {
  onClose: () => void;
}
const Model: React.FC<ModelProps> = ({ onClose }) => {
  return (
    <div className="modal model-open">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          x
        </button>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </div>
  );
}
export default Model;
