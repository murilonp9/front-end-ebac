const alunos = [
    { nome: 'Alice', nota: 7 },
    { nome: 'Bob', nota: 5 },
    { nome: 'Charlie', nota: 8 },
    { nome: 'David', nota: 4 },
    { nome: 'Eva', nota: 9 },
];

const filtrarAlunosAprovados = arrayDeAlunos => arrayDeAlunos.filter(aluno => aluno.nota >= 6);

  // Chamar a função e exibir o resultado
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
