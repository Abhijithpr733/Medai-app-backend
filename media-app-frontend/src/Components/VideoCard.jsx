import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpEs9eKguMLUz3q5UVTsbE-oQjW8i4j8oimAfCezAnMg7RgjPsumoJqDy7ewpThkLq2s&usqp=CAU" onClick={handleShow}/>
      <Card.Body>
        <Card.Title>image</Card.Title>
        <Button variant="primary"><MdDelete /></Button>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpEs9eKguMLUz3q5UVTsbE-oQjW8i4j8oimAfCezAnMg7RgjPsumoJqDy7ewpThkLq2s&usqp=CAU" alt="" />
        </Modal.Body>
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

export default VideoCard