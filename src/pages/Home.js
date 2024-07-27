import React from 'react';

const Home = () => {
return (
    <div
    style={{
        padding: '20px',
        textAlign: 'center',
    }}
    >
    <h2>Explora Nuestros Juegos</h2>
    <p>Descubre nuestras ventas más recientes.</p>
    <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        }}
    >
        <div
        style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '200px',
            padding: '10px',
            textAlign: 'center',
        }}
        >
        <img
            src="4984b487a513d695b722ca1d784ecf56.jpg"
            alt="Juego 1"
            style={{
            width: '100%',
            height: 'auto',
            maxWidth: '150px',
            margin: '0 auto',
            }}
        />
        <h3>Juego 1: Half Life</h3>
        <p>Half-Life es una combina acción y aventura con tecnología galardonada para crear un mundo terriblemente inmersivo donde los jugadores deben pensar para sobrevivir</p>
        </div>
        <div
        style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '200px',
            padding: '10px',
            textAlign: 'center',
        }}
        >
        <img
            src="Codawc.webp"
            alt="Juego 2"
            style={{
            width: '100%',
            height: 'auto',
            maxWidth: '150px',
            margin: '0 auto',
            }}
        />
        <h3>Juego 2: Call of dutyadvanced warfare</h3>
        <p>El juego está ambientado en un futuro en el que tendrá lugar la tecnología y armamento avanzado, con trajes que dan habilidades sobrehumanas a los soldados, estas pueden ser: supersaltos, trepar paredes, múltiples habilidades y granadas especiales.</p>
        </div>
    </div>
    </div>
);
};

export default Home;
