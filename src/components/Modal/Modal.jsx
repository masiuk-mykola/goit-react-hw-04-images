import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', escClose);
  });

  const escClose = e => {
    if (e.code === 'Escape') {
      onCloseModal();
      window.removeEventListener('keydown', escClose);
    }
  };

  const closeModal = e => {
    if (e.target.nodeName === 'DIV') {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.protoTypes = {
  onCloseModal: PropTypes.func,
  children: PropTypes.object,
};
