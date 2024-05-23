import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "./components/login/login.jsx";
import Register from "./components/register/register.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Row>
      {/* Register */}
      <Col xs={12} sm={12} md={6} lg={6}>
        <Register />
      </Col>

      {/* Login */}
      <Col xs={12} sm={12} md={6} lg={6}>
        <Login />
      </Col>
    </Row>
  )
}

export default App
