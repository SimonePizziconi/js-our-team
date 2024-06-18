// Crea l’array di oggetti con le informazioni fornite.
const teamList = [
    
    {
        "name" : "Wayne Barnett",
        "role" : "Founder e CEO",
        "image" : "wayne-barnett-founder-ceo.jpg",
    },

    {
        "name" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "angela.caroll-chief-editor.jpg",
    },

    {
        "name" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "walter-gordon-office-manager.jpg",
    },

    {
        "name" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "angela-lopez-social-media-manager.jpg",
    },

    {
        "name" : "Scott Estrada",
        "role" : "Developer",
        "image" : "scott-estrada-developer.jpg",
    },

    {
        "name" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "barbara-ramos-graphic-designer.jpg",
    },
];
console.log(teamList);

// Stampa su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let key in teamList){
    console.log("Il nome del membro del team è: " + teamList[key].name + " Il ruolo del membro del team è: " +teamList[key].role + " La stringa della foto di ogni membro del team è: " + teamList[key].image);
};

// Prendi elemento HTML
const teamMembers = document.querySelectorAll(".team");

for(let i = 0; i < teamList.length; i++){
    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    teamMembers[i].innerHTML = (" Il nome del membro del team è: " + teamList[i].name + " Il ruolo del membro del team è: " + teamList[i].role + " La stringa della foto di ogni membro del team è: " + teamList[i].image);
}




