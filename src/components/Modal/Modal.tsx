import React from 'react';
import ReactDom from 'react-dom';


import { Button } from 'components';
import { NEW_GAME } from '../../utils/variables';
import './Modal.css';

type ModalProps = {
  open: boolean
  children: string
  onClose: () => any
};

export const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
  if (!open) {
    return null;
  };
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="modal">
          <p>{children}ffff</p>
          <Button buttonText={NEW_GAME} onClickFunction={onClose} />
        </div>
      </div>
    </>, document.getElementById('portal') as HTMLElement);
};