import React from 'react'
import '../styles/editField.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditField = ({modal, toggle}) => {
    return (
        <Modal isOpen={modal} toggle={toggle} animation={"false"}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form></form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Create</Button>{' '}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
}

export default EditField;