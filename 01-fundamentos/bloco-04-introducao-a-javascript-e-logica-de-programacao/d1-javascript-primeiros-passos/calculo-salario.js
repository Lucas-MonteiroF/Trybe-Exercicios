const salarioBruto = 5189.82;
const inss = 0.11;
const ir = 0.075;


let salarioInss = salarioBruto - salarioBruto * inss;
let salarioIr = salarioInss - salarioInss * ir;
var arredondar = Math.round(salarioIr);
 

console.log('Seu salário com todas as deduções será de aproximadamente: R$' + arredondar);