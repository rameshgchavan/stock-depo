import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import redux methods
import { useDispatch, useSelector } from "react-redux";
import { addScrutinizedUserAction } from "../redux/features/usersSlice";
import { FaCubesStacked } from "react-icons/fa6";

// This component used in components/Header.jsx
// This component shows page navigation links
const NavBar = () => {
    const { scrutinizedUser } = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(addScrutinizedUserAction({}));
    }

    return (
        <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" style={{ textAlign: "left" }}>
            {/* Navbar on Login */}
            {scrutinizedUser.token ?
                <Container className="d-inline-flex">
                    <Navbar.Brand ><FaCubesStacked style={{ fontSize: "2rem" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* Comman Links (self Admin and User both can access) */}
                            {scrutinizedUser.user === "auth" &&
                                <Nav>
                                    <Nav.Link as={Link} to="/private/users">Users</Nav.Link>
                                    {/* <Nav.Link as={Link} to="/private/transactions">Transactions</Nav.Link> */}
                                </Nav>
                            }

                            {/* Admin Links (Only Admin can access) */}
                            {scrutinizedUser.user == "admin" &&
                                <Nav>
                                    <Nav.Link as={Link} to="/private/stock">Stock</Nav.Link>
                                    <Nav.Link as={Link} to="/private/vehicles">Vehicles</Nav.Link>
                                    {/* <Nav.Link as={Link} to="/private/users">Users</Nav.Link> */}
                                </Nav>
                            }
                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to="/login" onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

                : <Container> {/* Navbar after Logout */}
                    <Navbar.Brand ><FaCubesStacked style={{ fontSize: "2rem" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            }
        </Navbar >
    )
}

export default NavBar