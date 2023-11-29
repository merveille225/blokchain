function verifEmail(champ){
    var erreur = document.getElementById("msgErreurMail");
    if(champ.value){
        if (!champ.value.includes ("@") || !champ.value.includes(".")){
            erreur.innerHTML = "*Cette adresse email n'est pas valide";
        } else {
            erreur.innerHTML = "";
        }
    } else {
        erreur.innerHTML = "*Cette adresse email n'est pas valide";
    }
}

function verifMdp(champ){
    var erreur = document.getElementById("msgErreurMdp");
    if(champ.value){
        if (champ.value.length < 4){
            erreur.innerHTML = "*Le mot de passe doit contenir au minimum 4 characteres";
        } else {
            erreur.innerHTML = "";
        }
    } else {
        erreur.innerHTML = "*Le mot de passe doit contenir au minimum 4 characteres";
    }
}

function verifForm(){
    verifEmail(document.getElementById("mail").value);
    verifMdp(document.getElementById("mdp").value);
}