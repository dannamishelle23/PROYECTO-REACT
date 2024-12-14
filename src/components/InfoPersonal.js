import React from 'react';

const PersonalInfo = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img 
                src="/imagenes1/foto-danna.jpg" 
                alt="Foto de Danna" 
                style={{
                    width: '345px',       //Ajusta el tamaño de la imagen
                    height: '300px',
                    borderRadius: '50%', 
                    border: '3px solid black'
                }}
            />
            <h2 style = {{color: '#8a3f2f'}}>Información Personal</h2>
            <p>Nombre: Danna Lopez</p>
            <p>Dirección: Flavio Alfaro Oe17-2 y San Vicente, San Carlos.</p>
            <p>Teléfono: 099 075 4359</p>
            <p>Correo Institucional: danna.lopez@epn.edu.ec</p>
        </div>
    );
};

export default PersonalInfo;
