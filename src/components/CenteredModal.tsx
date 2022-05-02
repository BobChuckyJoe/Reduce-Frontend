import { useEffect, useState } from "react";
import Modal from "react-modal";

interface CenteredModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const CenteredModal = (props: CenteredModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.isOpen !== undefined) {
      setIsOpen(props.isOpen);
    }
  }, [props.isOpen]);

  const close = () => {
    if (props.onClose) {
      props.onClose();
    }
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      className="absolute rounded-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4/5 h-auto bg-white p-4 pt-2"
      shouldCloseOnOverlayClick
      onRequestClose={close}
      appElement={document.getElementById("root") as HTMLElement}
    >
      <div className="w-full text-right text-[#ff0000]">
        <button onClick={close}>x</button>
      </div>
      {props.children}
    </Modal>
  );
};

export default CenteredModal;
