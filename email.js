var lemessage = document.getElementById('result-form');
var user_name = document.getElementById("user_name");
var user_email = document.getElementById("user_email");
var message = document.getElementById("message");

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // verification des champs du formulaire
        // stoppe l'envoi si erreur



        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_yasjqvw', 'template_xt8qu9l', this)
            .then(function () {
                console.log('SUCCESS!');
                success();
            }, function (error) {
                console.log('FAILED...', error);
                failed();
            });
    });
}




function success(){
    // message pour l'utilisateur
    lemessage.innerHTML ="Message envoyé ! <br>Nous vous recontacterons dès que possible.";

    //suppression du contenu des champs du formulaire
    user_name.value = "";
    user_email.value = "";
    message.value = "";
}

function failed(){
    lemessage.innerHTML ="Une erreur s'est produite,<br>veuillez réessayer.";
}

function validerEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}




/* Anciennes valeurs :
        emailjs.sendForm('service_yasjqvw', 'template_xt8qu9l', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
*/