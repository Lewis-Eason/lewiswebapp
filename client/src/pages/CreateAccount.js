import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const createAccountPage = () => {
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" id="username" name="username"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" id="email" name="email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="text-section-break">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" id="password" name="password"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicConfirmPassword" className="text-section-break">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword"/>
                            </Form.Group>

                            <Button variant="success btn-block" type="submit" className="text-section-break">Register</Button>
                            <p className="text-section-break">Already a member? <Link to="/login">Click here</Link> to sign in.</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default createAccountPage;