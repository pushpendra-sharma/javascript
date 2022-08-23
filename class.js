class Customer {
  constructor(name, age) {
    // super
    this.state = {
      count: 0,
      title: 'class',
      isUseful: false,
    };
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
  setName(n) {
    this.name = n;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  getState() {
    return this.state;
  }

  render() {
    if (this.state !== this.getState()) {
      return console.log('Sate changed');
    }
    return console.log('Hello World');
  }
}

const cust = new Customer('Kjsbdf', 16);

console.log('cust', typeof cust);
console.log('initial state', cust.getState());

const x = cust.setState({
  count: 25,
});

console.log('updated state', cust.getState());

const v = cust.setState({
  count: 36,
  isUseful: true,
  title: 'aagya samgh',
});
console.log('updated state', cust.getState());

cust.render();
