
import { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";

import { useSelector } from 'react-redux';

import EntryModal from "../components/modals/EntryModal";
import EntryFilter from '../components/filters/EntryFilter';
// import NestedForm from '../components/forms/NestedForm';

// This is a home page
// Users: routes/pageRoutes/pageRoutes.js
const EntriesPage = () => {
    // Getting entries from store
    const { entries } = useSelector(state => state.entryReducer);

    // to hide/show modal
    const [entryModalShow, setEntryModalShow] = useState(false);
    // to prefill Form 
    const [entry, setEntry] = useState();

    const [slicedEntries, setSlicedEntries] = useState([]);
    const [firstRowIndex, setFirstRowIndex] = useState(0);

    const emptyEntry = {
        entry: "",
        date: "",
        time: "",
        vehicle: "",
        rcNo: "",
        tareWeight: 0,
        grossWeight: 0,
        driver: "",
        owner: "",
        stocker: "",
    };

    return (
        <Container>
            <EntryFilter entries={entries} setSlicedEntries={setSlicedEntries} setFirstRowIndex={setFirstRowIndex} />
            <Table striped hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Entry</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Vehicle</th>
                        <th>RC No</th>
                        <th>Tare Weight</th>
                        <th>Gross Weight</th>
                        <th>Brass</th>
                        <th>Driver</th>
                        <th>Owner</th>
                        <th>Stocker</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        slicedEntries.map((entry, index) => {
                            return <tr key={index}>
                                <td>{firstRowIndex + index + 1}</td>
                                <td>{entry.entry}</td>
                                <td>{entry.date}</td>
                                <td>{entry.time}</td>
                                <td>{entry.vehicle}</td>
                                <td>{entry.rcNo}</td>
                                <td>{entry.tareWeight}</td>
                                <td>{entry.grossWeight}</td>
                                <td>{((entry.grossWeight - entry.tareWeight) / 4800)?.toFixed(2)}</td>
                                <td>{entry.driver}</td>
                                <td>{entry.owner}</td>
                                <td>{entry.stocker}</td>
                                <td>
                                    <Button variant="outline-warning" size="sm"
                                        onClick={() => { setEntryModalShow(true); setEntry(entry) }}
                                    >
                                        <FaRegEdit style={{ fontSize: "1.2rem" }} />
                                    </Button >
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

            <Button variant="outline-primary" size="sm"
                onClick={() => { setEntryModalShow(true); setEntry(emptyEntry) }}
            >
                <FaPlusCircle style={{ fontSize: "1.2rem" }} />
            </Button>

            <EntryModal
                showMe={entryModalShow}
                closeMe={setEntryModalShow}
                title={"Entries"}
                entry={entry}
            />

            {/* <NestedForm /> */}
        </Container>
    )
}

export default EntriesPage;