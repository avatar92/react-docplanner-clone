import React from 'react'; 
import './doctorandpatientcard.css'
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form';
const cards = [
    {
        secondarytitle : "For patient",
        primaryTitle : "Find a doctor, book a visit and solve any health-related doubt",
        selectbutton: "choose country",
        imagesrc:"https://www.docplanner.com/img/screen-marketplace@2x.png",
        bgColor:"#00ccb1"
    },
    {
        secondarytitle : "For doctors",
        primaryTitle : "Save time managing visits and cut no-shows by half        ",
        imagesrc:"https://www.docplanner.com/img/screen-saas@2x.png",
        bgColor:"#3d83df"
    }
]

const CardsList = (props) => props.cardslist.map((card,i) => <Col xs={12} sm={6} md={6} lg={6}>
    <Container fluid className="card" key={i} style={{backgroundColor: card.bgColor}} >
        <h2 className="secondarytitle" >{card.secondarytitle}</h2>
        <h1 className="primarytitle">{card.primaryTitle}</h1>
        {card.selectbutton &&   <Container fluid>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <Form.Group controlId="exampleForm.ControlSelect1" className="selectSize">
                                            <Form.Label ></Form.Label>
                                                <Form.Control as="select">
                                                    <option>Tunisia</option>
                                                    <option>Libie</option>
                                                    <option>Egypt</option>
                                                    <option>Tchad</option>
                                                    <option>Djazyer</option>
                                                </Form.Control>
                                            </Form.Group> 
                                        </Col>
                                    </Row>
                                </Container>
        }
        <img src={card.imagesrc} alt="img" class="imgs"></img>

    </Container>
</Col>
)

const DoctorAndPatientCard = () =><Container fluid className="cardContainer">
        <Row>
            <CardsList cardslist={cards} />
        </Row>
    </Container>





export default DoctorAndPatientCard;