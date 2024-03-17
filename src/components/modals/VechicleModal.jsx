import VehicleForm from "../forms/VehicleForm";
import { Modal } from "react-bootstrap";

// This component used by pages/CustomersPage, cards/CustomerCard and cards/TransactionCard
const VehicleModal = ({ showMe, closeMe, title, vehicleDetails }) => {
    if (!showMe) return null;

    return (
        <div >
            <Modal show={showMe} fullscreen={true} onHide={() => closeMe(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ height: "16px", fontSize: "16px" }}>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <VehicleForm vehicleDetails={vehicleDetails} />
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={() => closeMe(false)}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default VehicleModal;