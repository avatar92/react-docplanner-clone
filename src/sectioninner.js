import React from 'react'; 
import './sectioninner.css';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
const innercards = [
    {
        imgsrcet:'https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x',
        titre:'Warsaw',
    },
    {
        imgsrcet:'https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x',
        titre:'Barcelona',
    },
    {
        imgsrcet:'https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x',
        titre:'Istanbul',
    },
    {
        imgsrcet:'https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x',
        titre:'Rome',
    },
    {
        imgsrcet:'https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x',
        titre:'Mexico City',
    },
    {
        imgsrcet:'https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x',
        titre:'Curitiba',
    },
]

const Innercards = (props) => props.innercardslist.map((innercard,i)=><Col xs={4} >
    <Card style={{ width: '100%',height:'90%' }} className='innercard'>
        <Card.Img variant="top" srcSet={innercard.imgsrcet} alt='city-image' />
        <Card.Body>
            <Card.Title className='usingflex'>
                <h6>{innercard.titre}</h6>
                <Button variant="primary" style={{ width: '50%',height:'35px'}}><p style={{fontSize:'13px'}}>See Openning</p></Button>
            </Card.Title>
            
        </Card.Body>
    </Card>
</Col>
)
const Innercards1 = (props) => props.innercardslist1.map((innercard,i)=><div  className='innercard1'>
        <Card.Img variant="top" srcSet={innercard.imgsrcet} alt='city-image' className='samewidthandheight' />
        <Card.Body>
            <Card.Title className='usingflex'>
                <h6>{innercard.titre}</h6>
                <Button variant="primary" style={{ width: '50%',height:'35px'}}><p style={{fontSize:'13px'}}>See Openning</p></Button>
            </Card.Title>
            
        </Card.Body>
    </div>
)
const SectionInner= () => <Container fluid > 
                            <Container fluid className="inner">
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <h1>Improve the lives of millions.
                                            <br/> Change yours forever</h1>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <p>More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and <br/> Curitiba, our search for great talent never stops.</p>
                                    </Col>
                                </Row>
                                <Row className='display0'>
                                    <Innercards innercardslist={innercards}></Innercards>
                                </Row>
                                <Row className='scrollmenu display1'>
                                    <Innercards1 innercardslist1={innercards} className='cardmargin'></Innercards1>
                                </Row>
                            </Container>
</Container>




export default SectionInner; 
