import React from 'react';
import ReactDom from 'react-dom';
import { CgCloseR } from 'react-icons/cg';

import { Button } from 'components';
import './Modal.css';

type ModalProps = {
  open: boolean;
  children: any;
  onClose: () => any;
  buttonText: string;
  onButtonClick?: () => void;
  buttonStyle?: string;
};

export const Modal: React.FC<ModalProps> = ({ open, children, onClose, buttonText, onButtonClick = onClose, buttonStyle = 'btn-primary-solid' }) => {
  if (!open) {
    return null;
  };
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="modal">
          <div className="modal-container">
            <button className="modal-close-btn" onClick={onClose} >
              <CgCloseR className="modal-close-btn-icon" />
            </button>
            <p className="modal-content">{children}</p>
            <Button type="button" buttonText={buttonText} buttonStyle={buttonStyle} onClickFunction={() => onButtonClick()} />
          </div>
        </div>
      </div>
    </>, document.getElementById('portal') as HTMLElement);
};