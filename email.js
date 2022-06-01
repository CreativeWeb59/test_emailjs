var lemessage = document.getElementById('result-form');
var nom = document.getElementById("nom");
var email = document.getElementById("email");
var telephone = document.getElementById("telephone");
var message = document.getElementById("message");

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_yasjqvw', 'template_xt8qu9l', this)
            .then(function() {
                console.log('SUCCESS!');
                success();
            }, function(error) {
                console.log('FAILED...', error);
                failed();
            });
    });
}

function success(){
    // message pour l'utilisateur
    lemessage.innerHTML ="Message envoyé ! <br>Nous vous recontacterons dès que possible.";

    //suppression du contenu des champs du formulaire
    nom.value = "";
    email.value = "";
    telephone.value = "";
    message.value = "";
}

function failed(){
    lemessage.style.color = 'red';
    lemessage.innerHTML ="Une erreur s'est produite,<br>veuillez réessayer.";
}
