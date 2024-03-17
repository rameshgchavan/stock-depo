import { useRef, useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

import { createFormRequest } from "../../apiRequests/createFUserAPIs"
import { useSelector } from 'react-redux';

const NestedForm = () => {
    const { scrutinizedUser } = useSelector(state => state.usersReducer);

    const [formData, setFormData] = useState({
        name: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },
    });

    const formForm = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(formForm.current);

        const fData = Object.fromEntries(formData.entries());

        console.warn(fData);

        const response = await createFormRequest(scrutinizedUser, fData);
        alert(response.message);
    };

    return (
        <Form ref={formForm} onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Floating className="my-3">
                    <Form.Control type="text" id="name" name="name" placeHolder="Name" defaultValue={formData.name} />
                    <Form.Label className="text-primary fw-bold">Name</Form.Label>
                </Form.Floating>
            </FormGroup>

            <FormGroup>
                <Form.Floating className="my-3">
                    <Form.Control type="text" id="address.street" name="address.street" placeHolder="Streat" defaultValue={formData.address.street} />
                    <Form.Label className="text-primary fw-bold">Streat</Form.Label>
                </Form.Floating>
                <Form.Floating className="my-3">
                    <Form.Control type="text" id="address.city" name="address.city" placeHolder="City" defaultValue={formData.address.city} />
                    <Form.Label className="text-primary fw-bold">City</Form.Label>
                </Form.Floating>
                <Form.Floating className="my-3">
                    <Form.Control type="text" id="address.state" name="address.state"  placeHolder="State" defaultValue={formData.address.state} />
                    <Form.Label className="text-primary fw-bold">State</Form.Label>
                </Form.Floating>
                <Form.Floating className="my-3">
                    <Form.Control type="text" id="address.zip" name="address.zip"  placeHolder="Zip" defaultValue={formData.address.zip} />
                    <Form.Label className="text-primary fw-bold">Zip</Form.Label>
                </Form.Floating>
            </FormGroup>

            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default NestedForm;