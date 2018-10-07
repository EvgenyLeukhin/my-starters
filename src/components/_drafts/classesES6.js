// Весь React построен на классах (свойствах, методах и модульности)

// Свойства класса без параметров
class Someclass {
  constructor() {
    this.prop1 = 'Property1';
    this.prop2 = 'Property2';
  }
}
const classCopy = new Someclass();
console.log(classCopy.prop1); // 'Property1';


// Свойства класса с параметрами
class Someclass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const classCopy = new Someclass('John', 32);
const classCopy2 = new Someclass('Jack', 33);
console.log(classCopy.name); // 'John';

// Методы класса
class Someclass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Hello, ${this.name}`;
  }
}

const classCopy = new Someclass('John', 32);
console.log(classCopy.sayHello());

// Подкласс
class Someclass2 extends Someclass {
  constructor() {
    super(name, age); // какие параметры  унаследовать от родительского класса
    this.prop3 = 'New property'; // новое свойство
  }
}
