import React from 'react';

function TalentoLabTeam() {

    const teamMembers = [
        { name: "Ana Gómez", role: "Desarrolladora Frontend", imagen: "https://via.placeholder.com/100"},
        { name: "Luis Pérez", role: "Desarrollador Backend", imagen: "https://via.placeholder.com/100" },
        { name: "María Rodríguez", role: "Diseñadora UX/UI", imagen: "https://via.placeholder.com/100" },
    ];
    return (
        <section style={{ padding: "20px", textAlign: "center" }}>
            <h2>Equipo de Talento Lab</h2>
            <p>Conoce a los miembros del equipo de Talento Lab que hacen posible este proyecto.</p>
            <div style={{ diplay: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                {
                    // Al renderizar listas de elementos (en este caso, listas de img's) en React,
                    // es importante asignar una prop "key" única a cada elemento (la IA dice que
                    // es para ayudar a React a identificar qué elementos han cambiado, se han
                    // agregado o eliminado.
                    teamMembers.map((member, index) => (
                        <>  {/*JSX Fragment ¿para?*/} 
                            <p>{member.name}</p>
                            <p>{member.role}</p>
                            <img key={index} src={member.imagen} alt={`Imagen ${index + 1}`} style={{ with: "100", height: "100" }} />
                        </>
                    ))
                }
            </div>
        </section>
    );
}

export default TalentoLabTeam;
