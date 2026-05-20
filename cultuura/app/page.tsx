"use client";

export default function Home() {
  const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Colombia?",
      opciones: ["Medellín", "Bogotá", "Cali", "Barranquilla"],
      respuesta: "Bogotá",
    },
    {
      pregunta: "¿Qué mar baña la costa norte de Colombia?",
      opciones: ["Océano Pacífico", "Mar Caribe", "Océano Atlántico", "Mar Rojo"],
      respuesta: "Mar Caribe",
    },
    {
      pregunta: "¿Cuál es la moneda oficial de Colombia?",
      opciones: ["Peso colombiano", "Dólar", "Euro", "Bolívar"],
      respuesta: "Peso colombiano",
    },
    {
      pregunta: "¿Quién escribió Cien años de soledad?",
      opciones: [
        "Pablo Neruda",
        "Gabriel García Márquez",
        "Mario Vargas Llosa",
        "Julio Cortázar",
      ],
      respuesta: "Gabriel García Márquez",
    },
    {
      pregunta: "¿Cuál es la flor nacional de Colombia?",
      opciones: ["Rosa", "Orquídea", "Girasol", "Tulipán"],
      respuesta: "Orquídea",
    },
  ];

  const preguntaAleatoria =
    preguntas[Math.floor(Math.random() * preguntas.length)];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#38bdf8" }}>
          Cultura General de Colombia 🇨🇴
        </h1>

        <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
          {preguntaAleatoria.pregunta}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {preguntaAleatoria.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => {
                if (opcion === preguntaAleatoria.respuesta) {
                  alert("✅ ¡Correcto!");
                } else {
                  alert(
                    `❌ Incorrecto. La respuesta era: ${preguntaAleatoria.respuesta}`
                  );
                }
              }}
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: "#38bdf8",
                color: "white",
                fontSize: "16px",
                transition: "0.3s",
              }}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}