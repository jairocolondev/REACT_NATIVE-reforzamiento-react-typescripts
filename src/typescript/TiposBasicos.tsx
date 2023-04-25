import React from 'react'

function TiposBasicos() {

const nombre: any = 'Jairo'
const edad: number = 30;
const estaActivo: boolean = false;

const poderes: string[] = ['Velocidad Flash', 'Volar', 'Respirar en el agua', 'Fuego']


  return (
    <>
       <h3>Tipos básicos </h3>
       {nombre}, {edad}, {(estaActivo) ? 'Está activo' : 'No está activo'}
       <br />
       {poderes.join(', ')}
    </> 
  )
}

export default TiposBasicos