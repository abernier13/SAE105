Object.keys(SAE).forEach(function (cles) {
    let comp = SAE[cles].compétences;
    let liste = "";

    comp.forEach(function (sep) {
        liste += "<div class='spaceSAE'>" + sep + "</div>"; // séparer les différentes compétences

    });
    console.log(comp)  // permet le débogage en cas de problèmes avec les différentes variables contenant les cles des objets dans la console du navigateur
    console.log(liste)
    document.querySelector("main").innerHTML += `
    <a href='../page/descriptif.html?SAE=${cles}' class='lien'>
        <div class="sae">
                    <div>${cles}</div>
                    <div>${SAE[cles].titre}</div>
                    <div class="style">${liste}</div>
         </div>   
    </a>`
});