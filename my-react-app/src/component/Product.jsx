import React from 'react'
import '../App.css'
import NikeAirUptempo from '../assets/imagenes/NikeAirUptempo.jpg'
import NikeCourt from '../assets/imagenes/NikeCourt.jpg'
import NikeDunk from '../assets/imagenes/NikeDunk.jpg'



function Product(){
  return (
    <>
    <section className="products">
    <div className="container"> 
      <h2 className="text-center">Productos destacados</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={NikeCourt} className="card-img-top" alt="Producto 1"/>
            <div className="card-body">
              <h5 className="card-title">Nike Court Low</h5>
              <p className="card-text">Precio: $99.99</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src= {NikeDunk} className="card-img-top" alt="Producto 2"/>
            <div className="card-body">
              <h5 className="card-title">Nike Dunk</h5>
              <p className="card-text">Precio: $79.99</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={NikeAirUptempo} className="card-img-top" alt="Producto 3"/>
            <div className="card-body">
              <h5 className="card-title">Nike Air Uptempo</h5>
              <p className="card-text">Precio: $129.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
export default Product;