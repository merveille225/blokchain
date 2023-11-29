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

function verifMdpConfirm(champ){
    var erreur = document.getElementById("msgErreurMdpConfirm");
    var mdp = document.getElementById("mdp");
    if(champ.value != mdp.value){
        erreur.innerHTML = "*Les mots de passe doivent être identique";
    } else {
        erreur.innerHTML = "";
    }
}

function verifPs(champ){
    var erreur = document.getElementById("msgErreurPs");
    if(champ.value){
        if (champ.value.length < 4){
            erreur.innerHTML = "*Le pseudonyme doit contenir au minimum 4 characteres";
        } else {
            erreur.innerHTML = "";
        }
    } else {
        erreur.innerHTML = "*Le pseudonyme doit contenir au minimum 4 characteres";
    }
}
