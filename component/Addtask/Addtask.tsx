'use client'
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Model from '../model/Model';

const Addtask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <button
        style={{ width: '100%' ,backgroundColor:'blue'}}
        className='btn btn-primary '
        onClick={openModal}
      >
        Add List 
      </button>
      {isModalOpen && <Model onClose={closeModal} />}
    </div>
  );
}

export default Addtask;
