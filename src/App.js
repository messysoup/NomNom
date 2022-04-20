import { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import './App.css';
import Comparison from './Components/Comparison';
import DrQuote from './Components/DrQuote'
import Data from './data.js'

const App = () => {

	const [ otherBrandState, setOtherBrandState ] = useState({});
	const [ nomNomState, setNomNomState ] = useState({});

	useEffect(() => {
		if (Object.keys(nomNomState).length === 0) {
			setNomNomState(Data[0])
		}
	})

	const handleChange = (func, value) => {
		for (const item of Data) {
			if (item.Name === value) {
				func(item)
			}
		}
	}

	const otherBrands = Data.map((value, index) => {
		if (value.Brand !== "Nom Nom") {
			return <option key={index} onClick={() => otherBrandState(value)} >
				{value.Name}
			</option>
		}
	})

	const nomNom = Data.map((value, index) => {
		if (value.Brand === "Nom Nom") {
			return <option key={index} >
				{value.Name}
			</option>
		}
	})


  	return (
    	<Container>
      		<h1 className='title'>Comparison Calculator</h1>
      		<DrQuote/>
			<Row > 
				<Col className='brand-select'>
					<label className='brand-label'>Name of dog food brand</label>
					<Form.Select style={{backgroundColor: "white", color: "black"}} onChange={(e) => handleChange(setOtherBrandState, e.target.value)}>
						<option defaultValue="" disabled selected>Select a brand</option>
						{otherBrands}
					</Form.Select>
				</Col>
				<Col className='brand-select'>
					<label className='brand-label'>Compare with Nom Nom</label>
					<Form.Select style={{backgroundColor: "white", color: "black"}} onChange={(e) => handleChange(setNomNomState, e.target.value)}>
						{nomNom}
					</Form.Select>
				</Col>
			</Row>
			<Comparison otherbrand={otherBrandState} nomnom={nomNomState}/>
    	</Container>
  	)
}

export default App;
