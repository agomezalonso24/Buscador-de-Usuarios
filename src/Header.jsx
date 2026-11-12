import React from 'react';

export default function Header(props) {
  return (
    <div id="cabecera">
      <img src={"..public/sun.webp"} className="logo" alt="Logo" />
      <h3 className="mensaje">Bienvenido a la página de Alejandro Gomez Alonso</h3>
    </div>
  );
}

//process.env.PUBLIC_URL + "/sun.webp"