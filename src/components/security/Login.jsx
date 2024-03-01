import { useRef } from 'react';
import { Container, Button, Form, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// redux hooks
import { useDispatch } from 'react-redux';

// redux actions
import { addScrutinizedUserAction } from '../../redux/features/usersSlice';
import { changeLoadingAction } from "../../redux/features/loadingSlice";
import { addVehicleDataAction } from "../../redux/features/vehiclesSlice";
import { addStockDataAction } from "../../redux/features/stockSlice";

// api request fuction
import { readUserRequest } from '../../apiRequests/usersAPIs';
import { readVehiclesRequest } from "../../apiRequests/vehicleAPIs";
import { readStockRequest } from "../../apiRequests/stockAPIs";

// component
import LoadingModal from '../modals/LoadingModal';

// This component checks user credentials
// Users: routes/publicRoutes.js
const Login = () => {
    // Initialized reference hooks
    const emailID = useRef(null);
    const password = useRef(null);

    // Instance of navigation hook
    const navigate = useNavigate();

    // Instance of redux dispatch hook
    const dispatch = useDispatch();

    // This function handle user credentials
    // Callers: /login button
    const handleLogin = async (e) => {
        e.preventDefault();

        // update redux to show loading modal
        dispatch(changeLoadingAction(true));

        // Storing user's input in object
        const crediantials = {
            email: emailID.current,
            password: password.current.toString()
        }

        // api request to get scrutinized user details
        const user = await readUserRequest(crediantials);

        // update redux to hide loading modal
        dispatch(changeLoadingAction(false));

        if (user.code === 404) {
            alert(user.message);
            return
        }

        if (user.code === 403) {
            alert("Password not matching, please check again.")
            return
        }

        // Successfull scrutinization
        if (user.token) {
            // update redux to show loading modal
            dispatch(changeLoadingAction(true));

            // update redux to store user details
            dispatch(addScrutinizedUserAction(user));

            // Get vehicles data and set in redux store
            const vehicleData = await readVehiclesRequest(user);
            dispatch(addVehicleDataAction(vehicleData));

            // Get stock data and set in redux store
            const stockData = await readStockRequest(user);
            dispatch(addStockDataAction(stockData));

            // update redux to hide loading modal
            dispatch(changeLoadingAction(false));

            // navigate to user or stock page
            user.user === "auth"
                ? navigate("/private/users")
                : navigate("/private/stock");
        }
    }

    return (
        <>
            <Container style={{ width: "22rem" }} className='border rounded p-4 shadow mt-3' >
                <Form onSubmit={handleLogin} >
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                    <Form.Floating className="mb-4">
                        <Form.Control name="email" type="email" placeholder="Enter email" required
                            onChange={(e) => emailID.current = e.target.value}
                        />
                        <Form.Label className="text-primary fw-bold">Enter email</Form.Label>
                    </Form.Floating>

                    <Form.Floating className="mb-4">
                        <Form.Control name="password" type="password" placeholder="Enter password" required
                            onChange={(e) => password.current = e.target.value}
                        />
                        <Form.Label className="text-primary fw-bold">Enter password</Form.Label>
                    </Form.Floating>

                    < Button variant="primary" type="submit" >
                        Login
                    </Button>
                </Form>

                <Nav className='d-flex justify-content-center mt-4'>
                    <Nav.Link onClick={() => navigate("/forgotpass")}>Forgot password</Nav.Link>
                </Nav>
            </Container >

            {/* showing loading modal if that taking time */}
            < LoadingModal />
        </>
    )
}

export default Login