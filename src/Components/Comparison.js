import { Col, Row } from 'react-bootstrap'
import Nutrients from './Nutrients'

const Comparison = (props) => {
    
    console.log(props.otherbrand)

    if (Object.keys(props.otherbrand).length === 0) {
        return <div>
            <h5 className='grey-text' style={{textAlign: "center"}}>Select a pet food brand to get a nutrient comparison</h5>
        </div>
    } else {
        return (
            <div className='grey-text'>
                <label>{props.otherbrand.Name} contains {props.otherbrand.MinProtein} min protein, {props.otherbrand.MinFat} min fat, and has a calorie density of {props.otherbrand.KCal}kcal/kg.</label>
                <Row >
                    <Col style={{padding: "50px 20px 0px 0px"}}>
                        <div style={{height: "37px"}}/>
                        <Row className='justify-content-end' >
                            <img style={{maxWidth: "164px", maxHeight: "221px", padding: "20px"}} src={require(`../Images/${props.otherbrand.Img}`)} alt={`${props.otherbrand.name}`} />
                        </Row>
                        <Row>
                            <label className='food-descriptor-other-brand'>Protein</label>
                            <h2 className='food-details-other-brand'>{props.otherbrand.Protein}</h2>
                            <label className='food-descriptor-other-brand'>Fat</label>
                            <h2 className='food-details-other-brand'>{props.otherbrand.Fat}</h2>
                            <label className='food-descriptor-other-brand'>Carbohydrates</label>
                            <h2 className='food-details-other-brand'>{props.otherbrand.Carbohydrates}</h2>
                        </Row>
                    </Col>
                    <Col style={{padding: "20px"}}>
                        <img style={{height: "20px", marginBottom: "10px"}} src={require("../Images/nom_nom_straight.png")} />
                        <h3  className='sub-title'>{props.nomnom.Name}</h3>
                        <Row>
                            <img  style={{maxWidth: "240px", maxHeight: "250px"}} src={require(`../Images/${props.nomnom.Img}`)} alt={`${props.nomnom.name}`} />
                        </Row>
                        <Row>
                            <label className='food-descriptor-nomnom'>Protein *</label>
                            <h2 className='food-details-nomnom' style={{color: "#f35000"}}>{props.nomnom.Protein}</h2>
                            <label className='food-descriptor-nomnom'>Fat</label>
                            <h2 className='food-details-nomnom' style={{color: "#e782a9"}}>{props.nomnom.Fat}</h2>
                            <label className='food-descriptor-nomnom'>Carbohydrates</label>
                            <h2 className='food-details-nomnom' style={{color: "#e1cd00"}}>{props.nomnom.Carbohydrates}</h2>
                        </Row>
                    </Col>
                </Row>
                <Nutrients />
            </div>
    
        )
    }
    

}

export default Comparison;