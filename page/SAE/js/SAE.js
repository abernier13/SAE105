
// Première version du code sans l'utilisation de littéraux de gabarit:

 /*Object.keys(SAE).forEach(function(cles){
document.querySelector("main").innerHTML +="<div class='sae'> <table><tr><td>"+cles+"</td></tr><tr><td>"+SAE[cles].titre+"</td></tr><tr><td class='style'>"+SAE[cles].compétences+"</td></tr></table></div>";

});*/


Object.keys(SAE).forEach(function(cles) {
    document.querySelector("main").innerHTML += 
        `<a href='../DescriptifSAE/descriptif.html?SAE=${cles}' class='lien'>
            <div class="sae">
                <table>
                    <tr><td>${cles}</td></tr>
                    <tr><td>${SAE[cles].titre}</td></tr>
                    <tr><td class="style">${SAE[cles].compétences}</td></tr>
                </table>
            </div>
        </a>`;
});