import { useRef, useState } from "react";

import { Button, Form, FormGroup } from "react-bootstrap";
import { FaRegSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { createStockRequest, updateStockRequest } from "../../apiRequests/stockAPIs";
import { addStockDetailsAction, updateStockDetailsAction } from "../../redux/features/stockSlice";

// This component used by customerForm/index.js
// This component is part of customer form and holds customer details
const StockDetailsForm = ({ stockDetails }) => {
    const { scrutinizedUser } = useSelector(state => state.usersReducer);
    const { vehicleData } = useSelector(state => state.vehiclesReducer);

    const dispatch = useDispatch();

    const {
        _id, entry, date, time, vehicle, rcNo,
        tareWeight, grossWeight,
        driver, owner, stocker
    } = stockDetails;

    const stockForm = useRef();
    const [vehicleDetails, setVehicleDetails] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(stockForm.current);

        const stockData = Object.fromEntries(formData.entries());

        // Update
        if (_id) {
            const response = await updateStockRequest(scrutinizedUser, { _id }, stockData);
            dispatch(updateStockDetailsAction({ _id, stockData }));
            alert(response.message);
        }
        // Save
        else {
            const response = await createStockRequest(scrutinizedUser, stockData);
            dispatch(addStockDetailsAction(stockData));
            alert(response.message);
        }
    };

    const handleInputChange = () => {
        const index = vehicleData.findIndex((vehicle) => vehicle.rcNo === stockForm.current.rcNo.value);

        if (index > -1) {
            setVehicleDetails(vehicleData[index]);

            stockForm.current.tareWeight.value = vehicleData[index].tareWeight;
        }
        else {
            setVehicleDetails({});
            stockForm.current.tareWeight.value = 0;
        }

        stockForm.current.brass.value = (
            (stockForm.current.grossWeight.value - stockForm.current.tareWeight.value) / 4800
        )?.toFixed(2);
    };

    return (
        <Form ref={stockForm} onSubmit={handleSubmit}>
            <FormGroup className="col border shadow rounded p-3">
                <div className="d-flex justify-content-evenly">
                    <Form.Floating className="my-3">
                        <Form.Select name="entry" type="entry" placeholder="Entry" defaultValue={entry} required >
                            <option>In</option>
                            <option>Out</option>
                        </Form.Select>
                        <Form.Label className="text-primary fw-bold">Entry</Form.Label>
                    </Form.Floating>

                    <Form.Floating className="my-3">
                        <Form.Control name="date" type="date" placeholder="Date" defaultValue={date} required />
                        <Form.Label className="text-primary fw-bold">Date</Form.Label>
                    </Form.Floating>

                    <Form.Floating className="my-3">
                        <Form.Control name="time" type="time" placeholder="Time" defaultValue={time} required />
                        <Form.Label className="text-primary fw-bold">Time</Form.Label>
                    </Form.Floating>
                </div>

                <Form.Floating className="mb-3">
                    <Form.Control name="vehicle" placeholder="Vehicle" defaultValue={vehicle} required
                        list="vehicleList"
                    />
                    <datalist id="vehicleList">
                        {
                            vehicleData?.map((vehicle, index) => {
                                return (
                                    <option key={index}> {vehicle.vehicle}</option>
                                )
                            })
                        }
                    </datalist>
                    <Form.Label className="text-primary fw-bold">Vehicle</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="rcNo" placeholder="RC No" defaultValue={rcNo} required
                        list="rcNoList"
                        onChange={handleInputChange}
                    />
                    <datalist id="rcNoList">
                        {
                            vehicleData?.map((vehicle, index) => {
                                return (
                                    <option key={index}> {vehicle.rcNo}</option>
                                )
                            })
                        }
                    </datalist>
                    <Form.Label className="text-primary fw-bold">RC No</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="tareWeight" placeholder="Tare Weight" defaultValue={tareWeight} required />
                    <Form.Label className="text-primary fw-bold">Tare Weight</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="grossWeight" placeholder="Gross Weight" defaultValue={grossWeight} required
                        onChange={handleInputChange}
                    />
                    <Form.Label className="text-primary fw-bold">Gross Weight</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="brass" placeholder="Brass" defaultValue={((grossWeight - tareWeight) / 4800)?.toFixed(2)} required />
                    <Form.Label className="text-primary fw-bold">Brass</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="driver" placeholder="Driver Name" defaultValue={driver}
                        list="driverList"
                    />
                    <datalist id="driverList">
                        {
                            vehicleDetails?.driver?.map((driver, index) => {
                                return (
                                    <option key={index}> {driver}</option>
                                )
                            })
                        }
                    </datalist>

                    <Form.Label className="text-primary fw-bold">Driver Name</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="owner" placeholder="Owner Name" defaultValue={owner}
                        list="ownerList"
                    />
                    <datalist id="ownerList">
                        {
                            vehicleDetails?.owner?.map((owner, index) => {
                                return (
                                    <option key={index}> {owner}</option>
                                )
                            })
                        }
                    </datalist>

                    <Form.Label className="text-primary fw-bold">Owner Name</Form.Label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control name="stocker" placeholder="Stocker Name" defaultValue={stocker} />
                    <Form.Label className="text-primary fw-bold">Stocker Name</Form.Label>
                </Form.Floating>

                <Button variant="outline-success" size="sm" type="submit">
                    <FaRegSave style={{ fontSize: "1.2rem" }} />
                </Button>
            </FormGroup>
        </Form>
    )
}

export default StockDetailsForm;