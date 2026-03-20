import Button from "./Button";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  rating: number;
}
const Modal = ({ isOpen, onClose, rating }: ModalProps) => {
  if (!isOpen) return null;

  return ( 
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You</h2>
        <p>You rated us {rating} star{rating > 1 && 's'}</p>
        <Button className="close-btn" onClickButton={onClose}>Close</Button>
      </div>
    </div>
   );
}
 
export default Modal;
