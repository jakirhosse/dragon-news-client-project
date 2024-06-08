import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { AiFillFacebook, AiFillGithub, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import Carocel from '../Carocel/Carocel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Videos from '../Videos/Videos';

const RightSide = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handlegoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <ButtonGroup className='w-100 mb-5' vertical>
                <Button className='mb-2' variant="outline-success" onClick={handlegoogleSignin}>
                    <FcGoogle /> Login with Google
                </Button>
                <Button variant="outline-secondary">
                    <AiFillGithub /> Login with Github
                </Button>
            </ButtonGroup>
            <div>
                <ListGroup className='mb-2'>
                    <ListGroup.Item className='mb-3'><FcGoogle /> Google</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><AiFillFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><AiFillYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><AiFillTwitterSquare /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carocel />
            </div>
            <div>
                <Videos></Videos>
            </div>
        </div>
    );
};
export default RightSide;
