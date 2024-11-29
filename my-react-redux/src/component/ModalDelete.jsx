import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({show, close, onClick}) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >  
      <Modal
        show={show}
        onHide={close}
        >
      <Modal.Dialog 
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you want delete this user?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="danger" onClick={onClick}>Delete</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
      
    </div>
  );
}

export default ModalDelete;