let pessoa = {
    nome : "Ze neto",
    idade : 38,
    cc : 213
};

let operation = { 
    sacar: function(saldo, valor){
        return saldo -= valor;
    },

    depositar: function(saldo,valor){
        return saldo += valor;
    }
};

let banco = {
    pessoa: pessoa,
    operation: operation,
    saldo: 80
};

let velue=40;
console.log(banco.pessoa.nome + " O dono da conta " + banco.pessoa.cc +" realizou um saque no valor " + velue + " ficando com "+
banco.operation.sacar(banco.saldo, velue));


let valor=34;
console.log(banco.pessoa.name + " Portador da conta " + banco.pessoa.cc + " realizou um deposito com o valor " + valor + " ficando com " + banco.operation.depositar(banco.saldo, valor));