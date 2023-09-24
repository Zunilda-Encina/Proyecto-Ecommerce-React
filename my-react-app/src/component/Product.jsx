import '../App.css'
import React from 'react';
//import './Product.css'; // Importa el archivo CSS local

function Product({ modelos }) {
  return (
    <section className="products">
      <div className="container">
        <h2 className="text-center">Productos destacados</h2>
        <div className="row">
          {modelos.map((modelo) => (
            <div className="col-md-4" key={modelo.id}>
              <div className="card">
                <img src={modelo.imagen} className="card-img-top" alt={modelo.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{modelo.nombre}</h5>
                  <p className="card-text">Precio: {modelo.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
