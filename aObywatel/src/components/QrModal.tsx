import { Modal } from "@mui/material";
import { QRCodeDisplay } from "../qr/QrDisplay";

type QrModalProps = {
    data: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

function QrModal({data, isOpen, setIsOpen}: QrModalProps) {

    const handleClose = () => {
        setIsOpen(false);
    };


    return <Modal
    open={isOpen}
    onClose={handleClose}
  >
    <div className="w-[100vw] h-[100vh] flex justify-center items-center" onClick={handleClose}>
      <QRCodeDisplay data={data} width={200} height={200} />
    </div>
  </Modal>

}

export default QrModal;