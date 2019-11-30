import Buttons from '../components/Buttons.jsx'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'


const photo = {
    
    width:'50%',
    higth:'auto'
}
const datos={
    color: '#A944E8',
    fontFamily: "Post No Bills Jaffna Regular",
    fontSize: 20
}
const cont = {
    marginTop: '10%',
    marginBottom: '10%'
}
const titleStyle = {
    textAlign : 'center',
    color: '#438B31',
    fontFamily: "Post No Bills Jaffna Bold",
    fontSize: 30
}

class Ofrecedora extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

               <div className="container " style={cont}>
                
                <div className="media">
  <img src={require('../img/carnet.jpeg')}style={photo} classame="align-self-center mr-3" alt="..."/>
  <div className="media-body">
    <h5 style={titleStyle} className="mt-0">Antonia Zamorano Garcia</h5>
    
  </div>
</div>   
</div> 
<div style={datos}>
    <h5>Comunas:La florida, Puente alto, Buin, Macul</h5>
    <h5>Descripcion:trabajo principalmente el reciclaje de muebles llevando a lo material la idea de mis clientas</h5>
    <h5>telefono:+56987654321</h5>
    <h5>correo: antonia@gmail.com</h5>
</div>
               
            <div className="card-deck">
                <div className="card">
                    <img src={require('../img/cama.jpeg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../img/cocina.jpeg')} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../img/velador.jpeg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
          </React.Fragment >
                        )
    }
}

export default Ofrecedora
