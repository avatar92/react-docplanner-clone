import React from 'react';
import './introductionsection.css';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
const parags=[
    {
        paragraphe: 'We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that is why we are always next to them: to help them find the best possible care. Anytime, anywhere.' 
    },
    {
        paragraphe: 'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.'
    }
]
const ParagrapheList = (props) => props.paragrapheList.map((parag,i)=>
    <Col   xs={12} sm={6} md={6} lg={6}  >
        <p className="justifier marginparag" key={i} >{parag.paragraphe}</p>
    </Col>
)

const Introduction = () =><Container fluid className="introduction">
            
            <img className="lead__logo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x" alt="dockplannerLogo"></img>
            <h1 className="margintitle">Making the healthcare experience more humain</h1>
            <Container fluid>
                <Row >
                    <ParagrapheList paragrapheList={parags}/>
                </Row>
            </Container>
        
    </Container>
     

    
        




export default Introduction; 
