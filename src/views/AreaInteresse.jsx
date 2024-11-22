import React from "react";
import "../styles/AreaInteresse.css";

const AreaInteresse = () => {
  const areas = [
    { id: 1, title: "Departamento de Medicina", icon: "💊", link: "#" },
    { id: 2, title: "Centro de Tratamento", icon: "🔬", link: "#" },
    { id: 3, title: "Equipamentos Modernos", icon: "🛡️", link: "#" },
    { id: 4, title: "Centro de Tratamento", icon: "🔬", link: "#" },
    { id: 3, title: "Equipamentos Modernos", icon: "🛡️", link: "#" },
    { id: 4, title: "Centro de Tratamento", icon: "🔬", link: "#" },
  ];

  return (
    <section id="area-interesse" className="area-interesse d-flex flex-column justify-content-center align-items-center">
      <h1 className="section-title">Minhas Áreas de Interesse</h1>

      <div className="area-grid">
        {areas.map((area) => (
          <div key={area.id} className="area-card">
            <div className="icon">{area.icon}</div>

            <h3>{area.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreaInteresse;
