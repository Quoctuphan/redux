import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form"
import { useDispatch, useSelector } from "react-redux";
import { createNewUserRedux } from "../action/actions";

function FormAddNew() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUserName] = useState()
  const dispatch = useDispatch()
  const isCreate = useSelector(state => state.user.isCreate)
  const handlerCreateUser = () =>{
      dispatch(createNewUserRedux(email, password, username))
      setEmail("")
      setPassword("")
      setUserName("")
  }
    return ( 
        <div>
            <Container>
                <br />
            <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="name" value={username} onChange={(e) => setUserName(e.target.value)} />
      </Form.Group>
        <Button variant="primary" onClick={() => handlerCreateUser()} disabled={isCreate}>Create add </Button>
    </Form>
            </Container>
        </div>
     );
}

export default FormAddNew;