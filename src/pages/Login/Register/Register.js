import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap'; // Corrected import
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
        const {createuser} = useContext(AuthContext)
        const [error,seterror]= useState ('')
    const handleSubmitSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);

        createuser(email,password)
        .then(result => {
                const user = result.user
                console.log(user);
                seterror('')
                form.reset()
        })
        .catch(error => {
            console.error(error)
            seterror(error.message)
        })
    };

    return (
        <Form onSubmit={handleSubmitSingUp}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Link to="/register">Already account created</Link>
     <div className='flex'>
      <Button className='-mt-8 ' variant="primary" type="submit">
       register
      </Button>
     </div>
      <Form.Text className='danger'>
        {error}
      </Form.Text>
        </Form>
    );
};

export default Register;
