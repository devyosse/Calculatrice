// Variables
const touches = [...document.querySelectorAll('.button')];
const listeKeycode = touches.map(touches => touches.dataset.key);
console.log(touches)

const ecran = document.querySelector('.ecran');
// Evènement touche valeur
document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
})
// Evènement cibler la valeur au clic
document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur);
})
//calcul
const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}
//message d'erreur
window.addEventListener('error',(e) =>{
    alert('Erreur de calcul : ' + e.message);
})