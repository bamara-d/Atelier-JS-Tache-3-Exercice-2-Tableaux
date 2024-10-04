// Déclarez un tableau de 10 étudiants dont un étudiant a ces informations : Prénom - Nom - Âge - Note
const students = [
    ["Seyni", "BADJI", 25, 15],
    ["Marie", "SANE", 22, 18],
    ["Paul", "SAMBOU", 27, 14],
    ["Lucie", "DIOP", 23, 17],
    ["Sophie", "GUEYE", 29, 16],
    ["Pierre", "DIOUF", 24, 19],
    ["Ousmane", "FAYE", 21, 13],
    ["Shanks", "LE ROUX", 26, 15],
    ["Laura", "BADIANE", 28, 12],
    ["Antoine", "DIOME", 30, 14]
];

// Affichez le tableau dans la console et sur la plage HTML (pour la page HTML le tableau s’affiche avec des bordures ayant les informations des 10 étudiants).

console.table(students);

let tabHTML = "<table border='1'><tr><th>Prénom</th><th>Nom</th><th>Âge</th><th>Note</th></tr>";
for (let i = 0; i < students.length; i++) {
    tabHTML += "<tr>";
    for (let j = 0; j < students[i].length; j++) {
        tabHTML += "<td>" + students[i][j] + "</td>";
    }
    tabHTML += "</tr>";
}
tabHTML += "</table>";

document.getElementById("tableauEtudiants").innerHTML = tabHTML;
