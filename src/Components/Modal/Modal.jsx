import React, {useState} from 'react';
import './Modal.css'
import { Modal } from 'react-bootstrap';
import NewCommentForm from '../NewInputs/NewCommentForm'

const ModalComment = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <button className="btns" onClick={handleShow}>
          New Comment
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
          className="modal"
        >
          <Modal.Header className="modal-content-edit">
            <Modal.Title><h1>New Comment</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-content-edit">
            <NewCommentForm newComment={props.newComment} post={props.post} close={handleClose}/> 
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
  

export default ModalComment;