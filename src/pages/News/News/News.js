import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const News = () => {
        // const navigate = useNavigate();
        const news = useLoaderData()
        console.log(news);
        const {title,category_id,image_url,details}=news
        return (
                <Card style={{ width: '100%',border:'0' }}>
                <Card.Img style={{height:'100%'}} variant="top" src={image_url} />
                <Card.Body>
                       <Card.Title>{title}</Card.Title>
                  <Card.Text>
                     {details}
                        </Card.Text>
                        <Link to={`/catagory/${category_id}`}><Button variant="primary">Back to home</Button></Link>
                       <Link to='/register'>
                       </Link>
                </Card.Body>
              </Card>
              
        );
};

export default News;