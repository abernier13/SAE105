let param = new URLSearchParams(location.search);
let cles = param.get('SAE');

let listeapr = "" // permet d'afficher les AC
Object.keys(SAE[cles]['AC']).forEach(function (element) {// permet d'afficher dynamiquement le contenu des AC
    let lienpdf = `../pdf/${element}.pdf`; //création du lien pour récupérer dynamiquement les PDF
    listeapr += `<a href="${lienpdf}" target="_blank" class = "link-apr"><div class = "div-apr">${element} : ${SAE[cles]['AC'][element]}</div></a>`;
});

let listress = "" //permet d'afficher les ressources
Object.keys(SAE[cles]['ressources']).forEach(function (contenu) {
    listress += `<div class = "div-ressource"> ${contenu} : ${SAE[cles]['ressources'][contenu]}</div>`
});

console.log(listeapr)
console.log(listress)

document.querySelector("main").innerHTML += `
    <h2>${cles}</h2>
    <div class='titreSAE'>${SAE[cles].titre}</div>
    <div class='compétences'>Compétence(s) : ${SAE[cles].compétences}</div>
    <div class='flex'>
        <div class='description'>
            <div>Description :</div><br>
            ${SAE[cles].description}
        </div>
        <div class='semestre'>
            Semestre :
            ${SAE[cles].semestre}
        </div>
    </div>
    <div class='flex-2'>
        <div class='AC'>
            <div class='titreac'>Apprentissages critiques :</div>
            ${listeapr}
        </div> 
        <div class='ressources'>
            <div class='titreress'>Ressources :</div>
            ${listress}
        </div>
    </div>`
;