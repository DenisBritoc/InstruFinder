class Validator {

    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }

    //iniciar validação em todos os campos
    validate(form) {

        //pegar os inputs
        let inputs = form.getElementsByTagName('input');

        console.log(inputs);

        //transformo a HTMLCollection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validação conforme o que for encontrado
        inputsArray.forEach(function(input) {
            
            //loop em todas as validações existentes
            for(let i=0; this.validations.length > i; i++) {
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null) {
                    console.log(input.getAttribute(this.validations[i]));

                    console.log("achou validação");
                }
            }
        }, this);
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

//evento que vai disparar as validações

submit.addEventListener('click', function(e) {

    e.preventDefault();  

    validator.validate(form);

});

