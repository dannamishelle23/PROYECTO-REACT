import React from 'react';

const Deportes = () => {
    return (
        <div>
            <h2 style = {{textAlign: 'center', color: '#8a3f2f'}}>Galería de Deportes y Hobbies Favoritos</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center'}}>
                <div>
                    <img 
                        src="/Imagenes1/natacion.jpeg" 
                        alt="Deporte 1" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px'}}
                    />
                    <p style = {{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Natación</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/Baloncesto.jpeg" 
                        alt="Deporte 2" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                    <p style = {{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Baloncesto</p>
                </div>
                <div>
                    <img 
                        src="/Imagenes1/hielo-patin.webp" 
                        alt="Deporte 3" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px'}}
                    />
                    <p style = {{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Patinaje sobre Hielo</p>
                </div>
            </div>
        </div>
    );
};

export default Deportes;