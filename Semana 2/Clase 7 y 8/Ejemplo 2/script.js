// Datos de los usuarios
const users = [
    {
        id: 1,
        name: "María González",
        email: "maria.gonzalez@example.com",
        position: "Desarrolladora Frontend",
        phone: "+34 600 123 456",
        location: "Madrid, España",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        id: 2,
        name: "Carlos Pérez",
        email: "carlos.perez@example.com",
        position: "Ingeniero de Software",
        phone: "+34 611 234 567",
        location: "Barcelona, España",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        skills: ["Java", "Python", "SQL", "AWS"]
    },
    {
        id: 3,
        name: "Laura Martínez",
        email: "laura.martinez@example.com",
        position: "Diseñadora UX/UI",
        phone: "+34 622 345 678",
        location: "Valencia, España",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        skills: ["Figma", "Sketch"]
    },
    {
        id: 4,
        name: "Javier Rodríguez",
        email: "javier.rodriguez@example.com",
        position: "Desarrollador Full Stack",
        phone: "+34 633 456 789",
        location: "Sevilla, España",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        skills: ["JavaScript", "Node.js", "MongoDB"]
    },
    {
        id: 5,
        name: "Ana López",
        email: "ana.lopez@example.com",
        position: "Gerente de Proyectos",
        phone: "+34 644 567 890",
        location: "Bilbao, España",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        skills: ["Scrum"]
    },
    {
        id: 6,
        name: "David Sánchez",
        email: "david.sanchez@example.com",
        position: "Especialista en Marketing",
        phone: "+34 655 678 901",
        location: "Málaga, España",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        skills: ["SEO", "Redes Sociales", "Analítica", "Contenidos"]
    }
];

//Funcion para renderizar
let container = document.getElementById("usersContainer");

users.forEach(function(persona){
    
    let habilidades = "";
    persona.skills.forEach(function(skill){
        habilidades+=`<span class="skill-tag">${skill}</span>`;
    });

    container.innerHTML+= `<div class="user-card">
    <img src="${persona.image}" alt="imagen del usuario" class="user-image">
    <div class="user-info">
        <h2 class="user-name">${persona.name}</h2>
        <p class="user-email">${persona.email}</p>
        
        <div class="user-details">
            <p><strong>Cargo:</strong> ${persona.position}</p>
            <p><strong>Teléfono:</strong> ${persona.phone}</p>
            <p><strong>Ubicación:</strong> ${persona.location}</p>
        </div>
        
        <div class="user-skills">
            ${habilidades}
        </div>
        
        <div class="actions">
            <button class="btn btn-contact" onclick="">Contactar</button>
            <button class="btn btn-profile" onclick="">Ver Perfil</button>
        </div>
    </div>
    </div>`;
})