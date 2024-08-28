import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsUpload } from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function AddVideo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        <BsUpload/>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='border border-3 rounded m-5 p-5'>
          <Modal.Title><PiVideoFill className='me-3'/>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please fill the following details
        </Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video caption"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video Image"className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video URL">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo