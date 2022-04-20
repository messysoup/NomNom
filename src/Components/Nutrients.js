import { Col, Row } from "react-bootstrap";

const Nutrients = () => {
    return <div>
        <Row>
            <Col className="col-12 col-lg-4">
                <h3>Protein</h3>
                <p>Not all proteins are created equal.  Kibble and other more processed foods can use less digestible, lower quality protein.</p>
            </Col>
            <Col className="col-12 col-lg-4">
                <h3>Fat</h3>
                <p>Fat can oxide over time, causeing issues with digestion.  We monitor our fresh diets for oxidations, and the fats are healthier since they are fresh.</p>
            </Col>
            <Col className="col-12 col-lg-4">
                <h3>Carbohydrates</h3>
                <p>Nom Nom uses only whole food sources of carbohydrates - no grain byproducts, sugars, or starches added.</p>
            </Col>
        </Row>
        <div style={{marginTop: "50px"}}>
            <p>
                * All units above are given in grams per 1000 calories (g/kcal).
            </p>
            <p>
                The information for other brands' foods should be used as a guide only, albeit one that is in most cases better than the percentage.  Actual values should be available from the manufacturer.  Nom Nom is not liable for any misues, inaccuracy, or other legal shenanigans related to the above.
            </p>
        </div>
    </div>
}

export default Nutrients;