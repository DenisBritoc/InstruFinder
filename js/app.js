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
                    //limpar a string -> metodo
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    //valor do input
                    let value = input.getAttribute(this.validations[i]);

                    //invocação deo metodo
                    this[method](input, value);

                }
            }
        }, this);
    }
    //verifica se o input tem um numero min de caracteres
    minlenght(input, minValue) {
        console.log(input);
        console.log(minValue);
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

