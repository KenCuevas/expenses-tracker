import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Login(){
    return (
        <>
        <h2>Login</h2>
          <Form>
            {/* email */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
    
            {/* password */}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
    
            {/* submit button */}
            <Button variant="primary" type="submit">
            Iniciar sesion
            </Button>
          </Form>
        </>
    );
}