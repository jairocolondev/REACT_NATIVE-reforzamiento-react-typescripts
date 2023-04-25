interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  ciudad: string;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Jairo",
    edad: 30,
    direccion: {
      pais: "Colombia",
      ciudad: "Cajicá",
    },
  };

  return (
    <>
      <h3> Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
