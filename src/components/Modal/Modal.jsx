import { Component } from 'react';
import { DivModal, DivOverlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalKeyHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalKeyHandler);
  }
  closeModalKeyHandler = e => {
    if (e.code === 'Escape') {
      this.props.modalHandler({});
    }
  };
  render() {
    const { alt, src, modalHandler } = this.props;
    return (
      <DivOverlay
        onClick={e => {
          if (e.target === e.currentTarget) {
            modalHandler({});
          }
        }}
      >
        <DivModal>
          <img src={src} alt={alt} />
        </DivModal>
      </DivOverlay>
    );
  }
}

export default Modal;
