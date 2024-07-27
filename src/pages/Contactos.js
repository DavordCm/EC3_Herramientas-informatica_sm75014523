import React from 'react';

const Contact = () => {
return (
    <div style={{ textAlign: 'center' }}>
    <h1>Contactos</h1>
    <p>¿Tienes preguntas, comentarios o estás interesado en colaborar con nosotros? ¡Estamos aquí para ayudarte!</p>
    
    <h2>Información de los Contactos</h2>
    <p>Puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
    <ul style={{ listStyleType: 'none', padding: 0, display: 'inline-block' }}>
        <li><strong>Correo Electrónico:</strong> <a href="sm7501423@idat.edu.pe">sm7501423@idat.edu.pe</a></li>
        <li><strong>Teléfono:</strong> +51 979 075 540</li>
        <li><strong>Dirección:</strong> Garcilazo 2 e mz</li>
    </ul>

    <h2>Envíanos un Mensaje</h2>
    <form
        action="sm7501423@idat.edu.pe"  
        method="POST"
        encType="text/plain"
        style={{ display: 'inline-block', textAlign: 'left' }}
    >
        <div style={{ marginBottom: '10px' }}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit">Enviar</button>
    </form>
    </div>
);
};

export default Contact;
