import { Button, ButtonGroup, Container, Form, FormGroup } from "react-bootstrap"
import { useEffect, useRef, useState } from "react";

/*This component filters vehicles data as user choice*/
// This component is used in routes/FilterRoutes
const VehiclesFilter = ({ vehicleData, setSlicedVehicles, setFirstRowIndex }) => {
    // Initialized pagination data
    const rowsPerPage = useRef(12);
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = useRef(1);
    const firstRowIndex = useRef(0);
    const lastRowIndex = useRef(rowsPerPage.current);

    const searchedName = useRef("");

    const [filteredVehicles, setFilteredVehicles] = useState();

    // This function filters vehicles data as user choice
    // This function used by useEffect
    useEffect(() => {
        filterVehicles();
    }, [])

    const filterVehicles = () => {
        // Initialized data varible
        let filteredData;

        filteredData = vehicleData
            ?.filter((vehicles) => {
                return vehicles.rcNo.toLowerCase().includes(searchedName.current.toLowerCase())
            });


        // Set filtered vehicles data to state
        setFilteredVehicles(filteredData);
        setCurrentPage(1);

        // Send filtered vehicles to slice
        sliceVehicles(filteredData);
    };

    // This function slice filterd vehicles data
    // This function called by filtervehicless and handlePagination functions
    const sliceVehicles = (filteredData, curPage = 1) => {
        // Set up index for pages
        lastRowIndex.current = curPage * rowsPerPage.current;
        firstRowIndex.current = lastRowIndex.current - rowsPerPage.current;
        lastPage.current = Math.ceil(filteredData?.length / rowsPerPage.current)

        setSlicedVehicles(filteredData?.slice(firstRowIndex.current, lastRowIndex.current));
        setFirstRowIndex(firstRowIndex.current);
    }

    // This function calls sliceVehicless and setCurrentPage
    // This function used by pagination element (buttons) to move on first, last, next and pre page
    const handlePagination = (pageNo) => {
        sliceVehicles(filteredVehicles, pageNo);

        // set current page no to state
        setCurrentPage(pageNo);
       
    }

    return (
        <Container className="bg-secondary shadow rounded-bottom">
            <Form className="py-1">
                <div className="d-lg-flex justify-content-between align-items-start">
                    {/* Type and search */}
                    <FormGroup size="sm" className="d-flex mt-xl-0 mt-1 align-items-start">
                        <Form.Control type="text"
                            placeholder="Type and search"
                            onChange={(e) => { searchedName.current = e.target.value }} />
                        <Button className="ms-2"
                            onClick={() => { filterVehicles(); }}
                        >Search</Button>
                    </FormGroup>


                    {/* Page Navigation buttons */}
                    {filteredVehicles?.length > rowsPerPage.current &&
                        <FormGroup className="mt-2 d-flex justify-content-center align-items-start">
                            {currentPage > 1 && <ButtonGroup size="sm">
                                <Button variant="dark" className="fw-bold text-light"
                                    onClick={() => { handlePagination(1); }}
                                > First </Button>

                                <Button variant="light" className="fw-bold text-primary"
                                    onClick={() => { handlePagination(currentPage - 1); }}
                                >Prev</Button>
                            </ButtonGroup>}

                            <Form.Label className="text-light mx-2">
                                {
                                    firstRowIndex.current + 1 === filteredVehicles?.length // if first index equal to no of records
                                        ? ""
                                        : firstRowIndex.current + 1 + "-"
                                }
                                {
                                    lastRowIndex.current > filteredVehicles?.length // if last index is greater than no of records
                                        ? filteredVehicles?.length
                                        : lastRowIndex.current
                                }
                                {
                                    " of " + filteredVehicles?.length
                                }
                            </Form.Label>

                            {currentPage < lastPage.current && <ButtonGroup size="sm">
                                <Button variant="light" className="fw-bold text-primary"
                                    onClick={() => { handlePagination(currentPage + 1); }}
                                >Next</Button>

                                <Button variant="dark" className="fw-bold text-light"
                                    onClick={() => { handlePagination(lastPage.current); }}
                                >Last</Button>
                            </ButtonGroup>}
                        </FormGroup>
                    }
                </div>
            </Form>
        </Container>
    )
}

export default VehiclesFilter;