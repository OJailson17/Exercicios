// Exercicio que realiza o calculo das quetro operações básicas através de funções em objeto

let operações = {
    x: 15,
    y: 5,

    // Functions
    soma: function(){
        return this.x() + this.y();
    },
    multiplicação: function(){
        return this.x() * this.y();
    },
    divisão:  function(){
        if(this.x > this.y){
            return this.x / this.y;
        }else{
            return this.y / this.x;
        }
    },
    subtração: function(){
        return this.x() - this.y();
    }
}

console.log(operações.divisão());