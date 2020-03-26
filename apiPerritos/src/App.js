import React, { useEffect, useState } from "react";
import { Card, Cascader, Row, Col,Typography } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;



function App() {
  const options = [
    {
      value: 'husky',
      label: 'Husky'
    },
    {
      value: 'beagle',
      label: 'Beagle'
    },
    {
      value: 'chihuahua',
      label: 'Chihuahua'
    },
    {
      value: 'mexicanhairless',
      label: 'Xoloescuincle'
    }
  ]
  function onChange(value) {
    console.log(typeof(value))
    if(value[0]){
      setDogType(value[0])
    }
    
  }

  const [dogs, setDogs] = useState([])
  const [dogType, setDogType] = useState("beagle")
  const obtenerDatos = async () => {
    const result = await fetch(`https://dog.ceo/api/breed/${dogType}/images`);

    const json = await result.json();
    setDogs(json.message)
  }
  useEffect(() => {
    obtenerDatos();
  }, [dogType])

  return (
    <div> 
      <Typography style={{textAlign:'center', backgroundColor:'#3273dc', borderRadius:5}}><h1 style={{color:'white'}}>Perritos UwU</h1></Typography>
      <Typography style={{marginLeft:15}}>Quiero ver... <Cascader options={options} onChange={onChange}  /></Typography>
      <Row>
        {dogs.map((dog, index) => (
          <Col xs={24} sm={18} md={12} lg={6}key={index}>
            <Card 
              hoverable
              style={{margin:15}}
              cover={<img alt="guagua" src={dog} style={{height:300, padding:10}}/>}
            >
              <Meta title={dogType.toUpperCase()} style={{textAlign:'center'}}/>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
