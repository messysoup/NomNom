import { Card, Col, Row } from 'react-bootstrap'


const DrQuote = () => {
    return (
        <Card className="mb-3 h-100" style={{background: "#eee"}} >
            <Row className="g-0" >
                <Col className="md-4" style={{maxWidth: '100px'}} >
                    <img src={require("../Images/headshot_caitlyn.jpg")} className="img-fluid rounded-circle" alt={`Dr. Caitlyn Getty Portrain`} style={{margin: "7px"}} />
                </Col>
                <Col className="md-8">
                    <div className="card-body">
                        <p className="card-text">
                            Percentages on commercial pet food labels are not reliable because they are based on weight, not calories, and the values are affected by many factors, including moisture, fiber and minerals. Use this calculator to get a more accurate picture of how another pet food brand compares with Nom Nom.
                        </p>
                        <h5 className='card-title'>Dr. Caitlyn Getty</h5>
                        <p className="card-text" style={{fontStyle: 'italic'}}>Scientific Affairs Veterinarian</p>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default DrQuote;