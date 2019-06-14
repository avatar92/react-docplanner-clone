import React from 'react'; 
import './stats.css'
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'  

const cards=[
    {
        iconsrc:'https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x',
        title:'Leader in 10 countries',
        discription:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile',
        clasname:'cardwithnomargin'
    },
    {
        iconsrc:'https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x',
        title:'1.5 million appointments',
        discription:'booked last month',
        clasname:'cardwithmargin'
    },
    {
        iconsrc:'https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x',
        title:'30 million unique patients',
        discription:'visit us every month',
        clasname:'cardwithnomargin'
    },
    {
        iconsrc:'https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x',
        title:'2 million active doctors',
        discription:'trust in our solutions',
        clasname:'cardwithmargin'
    }
]
const Cards =  (props)=> props.cardsList.map((card, i) => <Col xs={12} sm={6} md={6} lg={6} key={i}>
                    <Card style={{ height: '18rem' }} className={card.clasname}>
                    <Card.Body>
                        <Card.Title><img srcSet={card.iconsrc} ></img></Card.Title>
                        <Card.Subtitle ><h3>{card.title}</h3></Card.Subtitle>
                        <Card.Text>
                        {card.discription}
                        </Card.Text>
                    </Card.Body>
                    </Card>


</Col>)

const Stats = () => <Container fluid className='backgroundStats'>   
                    <Container fluid className='statsContent'>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className='statsdescription'>
                            <h1 className='statsTitle'>
                                The world's
                                <br/>biggest healthcare platform
                            </h1>
                            <p className="statsParag">
                                We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
                            </p>
                        </Col >
                        <Col xs={12} sm={12} md={6} lg={6} className='cardsstats'>
                            <Row>
                                <Cards cardsList={cards}/>
                            </Row>
                        </Col>
                    </Row>    
                    </Container>
</Container>




export default Stats; 