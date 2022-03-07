const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const endereco = "address";
  const cliente = order["name"];
  const telefone = order["phoneNumber"];
  const entregador = order.order.delivery.deliveryPerson;
  const rua = order[endereco].street;
  const numero = order[endereco].number;
  const apartamento = order[endereco].apartment;

  console.log(
    `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apartamento}`
  );
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const clienteNovo = (order.name = "Luiz Silva");
  const pizzas = Object.keys(order.order.pizza);
  const bebidas = order.order.drinks.coke.type;
  const totalNovo = (order.payment.total = "50");
  console.log(
    `Olá ${clienteNovo}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebidas} é R$ ${totalNovo},00.`
  );
};

orderModifier(order);

// Parte 3

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function adicionaChave(objeto, chave, valor) {
  objeto[chave] = valor;
}

adicionaChave(lesson2, "turno", "noite");

const listKeys = (objeto) => Object.keys(objeto);
console.log(listKeys(lesson1));

const sizeObj = (objeto) =>  Object.keys(objeto).length;
console.log(sizeObj(lesson1));

const listValues = (objeto) =>  Object.values(objeto);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = (objeto) => {
  let total = 0;
  const array = Object.keys(objeto);
  for (index in array) {
    total += objeto[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (objeto,number) => Object.values(objeto)[number];
console.log(getValueByNumber);

const verifyPair = (objeto, chave, valor) => {
  const arr = Object.entries(objeto);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === chave && arr[index][1] === valor) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));