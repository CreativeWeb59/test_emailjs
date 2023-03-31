// Pour respecter la spécification HTML5
// var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let myForm = document.getElementById('contact-form');
var myError = document.getElementById('result-form');
var emailInput = document.getElementById('email');
// On récupère tous les champs du formulaire dans une variable :

var nom = document.getElementById('nom');
var email = document.getElementById('email');
var telephone = document.getElementById('telephone');
var message = document.getElementById('message');


// On récupère l'evenement soumission du formulaire
myForm.addEventListener('submit', function(e) {
    // On teste si le champ est vide (rappel : le champ n'est pas obligatoire)
    if (emailInput.value.trim() == "") {
        myError.style.color = 'red';
        myError.innerHTML = "Le champs email est requis.";
        e.preventDefault();
        e.stopPropagation();
    }

    // S'il ne l'est pas, on vérifie que son contenu est une adresse e-mail valide.
    // renvoi true si pas d'erreur
    // renvoi false si l'une des deux expressions est fausse
    var testEmail = emailInput.value.length === 0 || emailRegExp.test(emailInput.value);

    // si testEmail égale true alors... sinon ...
    if (testEmail) {
        emailInput.className = "valid";
        myError.style.color = 'blue';
        myError.innerHTML = "L'email est valide.";

        // email ok, on envoie le formulaire à email.js
        emailjs.send('service_yasjqvw', 'template_xt8qu9l', {
            nom:nom.value,
            email:email.value,
            telephone:telephone.value,
            message:message.value
        })
            .then(function () {
                console.log('SUCCESS!');
                success();
            }, function (error) {
                console.log('FAILED...', error);
                failed();
            });

      } else {
        emailInput.className = "invalid";
        myError.style.color = 'red';
        errmyErroror.innerHTML = "L'email n'est pas valide";
        e.preventDefault();
        e.stopPropagation();
    }
}
);
