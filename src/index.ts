let a: string
a = 'aa'

function soma(a: number, b: number) {
  return a + b
}

let c
c = soma(1, 2)

interface Pessoa {
  nome: string;
  sexo: 'm' | 'f';
  [key: string]: string | number;
}

const gustavo: Pessoa = {
  nome: 'Gustavo',
  sexo: 'm',
  idade: '23',
  teste: 10
}

function ola(pessoa: Pessoa) {
  console.log('ola', pessoa.nome)
}

ola(gustavo)

class Funcionario {
  constructor(nome: string) {
    this.nome = nome;
  }
  nome: string;
}

let func1: Funcionario
func1 = new Funcionario('Gustavo')