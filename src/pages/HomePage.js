
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// This is a home page
// Users: routes/pageRoutes/pageRoutes.js
const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Container className="mt-4">
            <Button variant="outline-danger" size="sm"
                onClick={() => navigate("/login")}
            >
                Go to Login
            </Button>
        </Container>
    )
}

export default HomePage;