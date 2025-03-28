let clique = 0;

document.getElementById("cliques").innerHTML = `${clique} Cliques`;
function clicado(){
    clique++;
    document.getElementById("cliques").innerHTML = `${clique} Cliques`;
}