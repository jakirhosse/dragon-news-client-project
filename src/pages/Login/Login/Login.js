import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [error,seterror]= useState('')
    const{signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
        const handleSubmitLogin= (event) => {
                event.preventDefault();
                const form = event.target;
                const email = form.email.value;
                const password = form.password.value;
                console.log(email,password);
                signIn(email,password)
                .then(result => {
                        const user = result.user
                        console.log(user);
                        form.reset()
                        seterror('')
                        navigate(from,{replace:true})
                })
                .catch(error => {
                  console.error(error)
                  seterror(error.message)
                })
        }
        return (
                <Form onSubmit={handleSubmitLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Link to="/register">crate a new account</Link>
     <div className='flex'>
      <Button className='-mt-8 ' variant="primary" type="submit">
        Login
      </Button>
     </div>
      <Form.Text className='danger'>
        {error}
      </Form.Text>
    </Form>
        );
};

export default Login;