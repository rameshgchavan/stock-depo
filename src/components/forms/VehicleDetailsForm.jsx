import { useRef } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { FaRegSave } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { createVehicleRequest, updateVehicleRequest } from "../../apiRequests/vehicleAPIs";

import { addVehicleDetailsAction, updateVehicleDetailsAction } from "../../redux/features/vehiclesSlice";

// This component used by customerForm/index.js
// This component is part of customer form and holds customer details
const VehicleDetailsForm = ({ vehicleDetails }) => {
    const { scrutinizedUser } = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {
        _id, vehicle, rcNo, tareWeight,
        driver, owner
    } = vehicleDetails;

    const vehicleForm = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(vehicleForm.current);

        // const vehicleData = Object.fromEntries(formData.entries());
        const vehicleData = {};

        formData.forEach((value, key) => {
            if (key === "driver" || key === "owner") {
                vehicleData[key] = value.split(",")
            }
            else {
                vehicleData[key] = value;
            }
        });

        // Update
        if (_id) {
            const response = await updateVehicleRequest(scrutinizedUser, { _id }, vehicleData);
            dispatch(updateVehicleDetailsAction({ _id, vehicleData }));
            alert(response.message);
        }
        // Save
        else {
            const response = await createVehicleRequest(scrutinizedUser, vehicleData);
            dispatch(addVehicleDetailsAction(vehicleData));
            alert(response.message);
        }
    };

    return (
        <Form ref={vehicleForm} onSubmit={handleSubmit}>
            <FormGroup className="col border shadow rounded p-3">
                <Form.Floating className="my-3">
                    <Form.Control name="vehicle" placeholder="Vehicle" defaultValue={vehicle} required />
                    <Form.Label className="text-primary fw-bold">Vehicle</Form.Label>
                </Form.Floating>

                <Form.Floating className="my-3">
                    <Form.Control name="rcNo" placeholder="RC No" defaultValue={rcNo} required />
                    <Form.Label className="text-primary fw-bold">RC No</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="tareWeight" placeholder="Tare Weight" defaultValue={tareWeight} required />
                    <Form.Label className="text-primary fw-bold">Tare Weight</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="driver" placeholder="Driver Name" defaultValue={driver} />
                    <Form.Label className="text-primary fw-bold">Driver Name</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="owner" placeholder="Owner Name" defaultValue={owner} />
                    <Form.Label className="text-primary fw-bold">Owner Name</Form.Label>
                </Form.Floating>

                <Button variant="outline-success" size="sm" type="submit">
                    <FaRegSave style={{ fontSize: "1.2rem" }} />
                </Button>
            </FormGroup>
        </Form>
    )
}

export default VehicleDetailsForm;