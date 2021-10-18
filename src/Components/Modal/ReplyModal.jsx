import React, {useState} from 'react';
import './Modal.css'
import { Modal } from 'react-bootstrap';
import ReplyInputForm from '../NewInputs/ReplyInputForm'


const ReplyModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <button className="new-reply-btn btns" onClick={handleShow}>
          New Reply
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
          className="modal"
        >
          <Modal.Header className="modal-content-edit">
            <Modal.Title><h1>New Reply</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-content-edit">
            <ReplyInputForm commentId={props.commentId} newReply={props.newReply} close={handleClose}/>
          </Modal.Body>
          <Modal.Footer className="modal-content-edit">
            <button className="btns" onClick={handleClose}>
              Exit (Without Saving)
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  

export default ReplyModal;