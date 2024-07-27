import React, {useState} from 'react'
import './Review.css'
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap'


const Review = () => {
    const [clicked, setClicked] = useState(false);
    const [stars, setStars] = useState(1);
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);

    const onMouseOver = (rating) => {
        if(clicked) return;
        [...Array(rating)].map((x, i) => {
            document.querySelector(`#star-${i+1}`).classList.replace("far","fas");
        });
    };
    const onMouseOut = (rating) => {
        if(clicked) return;
        [...Array(rating)].map((x, i) => {
            document.querySelector(`#star-${i+1}`).classList.replace("fas","far");
        });
    };
    const onClick = (rating) => {
        setClicked(true);
        setStars(rating);

        [...Array(5)].map((x, i) => {
            document.querySelector(`#star-${i+1}`).classList.replace("fas","far");
        });

        [...Array(rating)].map((x, i) => {
            document.querySelector(`#star-${i+1}`).classList.replace("far","fas");
        });

    };
    const resetForm = (e) => {
        e.preventDefault();
        [...Array(5)].map((x, i) => {
            document.querySelector(`#star-${i+1}`).classList.replace("fas","far");
        });

        setStars(1);
        setReview("");
        setClicked(false);
    };

    const submitReview = (e) => {
        e.preventDefault();

        const newReview = {
            rating: stars,
            description: review,
        };

        setReviews([...reviews, newReview]);
        console.log(newReview);
        resetForm(e);
    };
    const deleteReview = (e, index) => {};

  return (
    <div className='review'>
        <div className="review-navigator">
            <div className="review-nav-box">Reviews</div>
        </div>
        <div className="review-reviewbox">
            <Container fluid className='Review text-dark text-center'>
                <Col md={  {span: 6, offset: 3} }>
                    <Row className='mt-5'>
                        <Col>
                            {[...Array(5)].map((s,i) => {
                                return <i className='far fa-star display-4' 
                                key={i}
                                onMouseOver={(e) => onMouseOver(i+1)} 
                                onMouseOut={(e) => onMouseOut(i+1)} 
                                onClick={(e) => onClick(i+1)} 
                                id={`star-${i+1}`}/>;
                            })}
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col>
                            <Form.Group>
                                <Form.Control as="textarea" rows={3} value={review} onChange={(e) => setReview(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col>
                            <Button variant='warning' onClick={(e) => resetForm(e)}>reset</Button>{" "}
                            <Button variant='success' disabled={review === ""} onClick={(e) => submitReview(e)}>Submit</Button>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col>
                            {reviews.map((r, rIndex) => {
                                return(
                                <Card key={rIndex}>
                                    <Card.Body>
                                        {[...Array(r.rating)].map((s,sIndex) => {
                                            return <i key={sIndex} className='fas fa-star'/>;
                                        })}
                                        <h3>{r.description}</h3>
                                    </Card.Body>
                                </Card>                                    
                                );
                            })}
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
        
    </div>
  )
}

export default Review