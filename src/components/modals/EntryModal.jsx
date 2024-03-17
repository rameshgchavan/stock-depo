import EntryForm from "../forms/EntryForm";
import { Modal } from "react-bootstrap";

// This component used by pages/CustomersPage, cards/CustomerCard and cards/TransactionCard
const EntryModal = ({ showMe, closeMe, title, entry }) => {
    if (!showMe) return null;

    return (
        <div >
            <Modal show={showMe} fullscreen={true} onHide={() => closeMe(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ height: "16px", fontSize: "16px" }}>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EntryForm entry={entry} />
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

export default EntryModal;