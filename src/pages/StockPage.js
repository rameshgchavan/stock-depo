
import { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";

import { useSelector } from 'react-redux';

import StockDetailsModal from "../components/modals/StockDetailsModal";
import StockFilter from '../components/filters/StockFilter';

// This is a home page
// Users: routes/pageRoutes/pageRoutes.js
const StockPage = () => {
    // Getting stock data from store
    const { stockData } = useSelector(state => state.stockReducer);

    // to hide/show modal
    const [stockDetailsModalShow, setStockDetailsModalShow] = useState(false);
    // to prefill Form 
    const [stockDetails, setStockDetails] = useState();

    const [slicedStock, setSlicedStock] = useState([]);
    const [firstRowIndex, setFirstRowIndex] = useState(0);

    const emptyData = {
        entry: "",
        date: "",
        time: "",
        vehicleNo: "",
        tareWeight: 0,
        grossWeight: 0,
        driver: "",
        owner: "",
        stocker: "",
    };

    return (
        <Container>
            <StockFilter stockData={stockData} setSlicedStock={setSlicedStock} setFirstRowIndex={setFirstRowIndex} />
            <Table striped hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Entry</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Vehicle No</th>
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
                        slicedStock.map((stockDetails, index) => {
                            return <tr key={index}>
                                <td>{firstRowIndex + index + 1}</td>
                                <td>{stockDetails.entry}</td>
                                <td>{stockDetails.date}</td>
                                <td>{stockDetails.time}</td>
                                <td>{stockDetails.vehicleNo}</td>
                                <td>{stockDetails.tareWeight}</td>
                                <td>{stockDetails.grossWeight}</td>
                                <td>{((stockDetails.grossWeight - stockDetails.tareWeight) / 4800)?.toFixed(2)}</td>
                                <td>{stockDetails.driver}</td>
                                <td>{stockDetails.owner}</td>
                                <td>{stockDetails.stocker}</td>
                                <td>
                                    <Button variant="outline-warning" size="sm"
                                        onClick={() => { setStockDetailsModalShow(true); setStockDetails(stockDetails) }}
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
                onClick={() => { setStockDetailsModalShow(true); setStockDetails(emptyData) }}
            >
                <FaPlusCircle style={{ fontSize: "1.2rem" }} />
            </Button>

            <StockDetailsModal
                showMe={stockDetailsModalShow}
                closeMe={setStockDetailsModalShow}
                title={"Stock Details"}
                stockDetails={stockDetails}
            />
        </Container>
    )
}

export default StockPage;