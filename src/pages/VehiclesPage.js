
import { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";

import { useSelector } from 'react-redux';

import VechicleDetailsModal from "../components/modals/VechicleDetailsModal";
import VehiclesFilter from '../components/filters/VehicleFilter';

// This is a home page
// Users: routes/pageRoutes/pageRoutes.js
const VehiclePage = () => {
    // Getting veshicle data from store
    const { vehicleData } = useSelector(state => state.vehiclesReducer);

    // to hide/show modal
    const [vehicleDetailsModalShow, setVehicleDetailsModalShow] = useState(false);
    // to prefill Form
    const [vehicleDetails, setVehicleDetails] = useState();

    const [slicedVehicles, setSlicedVehicles] = useState([]);
    const [firstRowIndex, setFirstRowIndex] = useState(0);

    const emptyData = {
        _id: null,
        vehicle: "",
        rcNo: "",
        tareWeight: 0,
        driver: "",
        owner: ""
    };

    return (
        <Container>
            <VehiclesFilter vehicleData={vehicleData} setSlicedVehicles={setSlicedVehicles} setFirstRowIndex={setFirstRowIndex} />
            <Table striped hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Vehicle</th>
                        <th>RC No</th>
                        <th>Tare Weight</th>
                        <th>Driver</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        slicedVehicles.map((vehicleDetails, index) => {
                            return <tr key={vehicleDetails._id}>
                                <td>{firstRowIndex + index + 1}</td>
                                <td>{vehicleDetails.vehicle}</td>
                                <td>{vehicleDetails.rcNo}</td>
                                <td>{vehicleDetails.tareWeight}</td>
                                <td>{(vehicleDetails.driver).join(",")}</td>
                                <td>{(vehicleDetails.owner).join(",")}</td>
                                <td>
                                    <Button variant="outline-warning" size="sm"
                                        onClick={() => { setVehicleDetailsModalShow(true); setVehicleDetails(vehicleDetails) }}
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
                onClick={() => { setVehicleDetailsModalShow(true); setVehicleDetails(emptyData) }}
            >
                <FaPlusCircle style={{ fontSize: "1.2rem" }} />
            </Button>

            <VechicleDetailsModal
                showMe={vehicleDetailsModalShow}
                closeMe={setVehicleDetailsModalShow}
                title={"Vehicle Details"}
                vehicleDetails={vehicleDetails}
            />
        </Container>
    )
}

export default VehiclePage;