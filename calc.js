export class Calculadora {
    constructor(nome){
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }

    sum(x, y){
        return x + y;
    }

    multiply(i, j){
        return i * j;
    }

    condicional(i, j){
        if (i < j) {
            return i + j;
        } else if (i == j) {
            return i * j;
        } else {
            return i - j;
        }
    }
}
