//create
const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar(){
    return this.marca + ' acelerou'
  },
  buzinar(){
    return this.marca + ' buzinou'
  }
};

const vw = Object.create(carro).init('vw');
vw.marca = 'vw';

const ferrari = Object.create(carro).init('ferrari');


//assign
const automovel = {
  acelerar() {
    return 'acelerou'
  },
  buzinou() {
    return 'acelerou'
  },
};

const moto = {
  capacete: true,
};

Object.assign(moto, automovel, carro);


//defineProperties (propriedades imutaveis, get, set)
Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor*4
    }
  },
})


//getOwnPropertyDescriptors
const innerHeightConfig = Object.getOwnPropertyDescriptors(window, 'innerHeight');


//keys, values, entries
Object.keys(moto);
Object.values(moto);
Object.entries(moto);


//is
Object.is(moto, automovel);


const carro2 = {
  marca: 'fiat',
  ano: 2018,
}

//freeze, seal, preventExtensions
Object.freeze(carro2); //bloqueia o obj
Object.seal(carro2); //bloqueia add/del propriedades
Object.preventExtensions(carro2);  //bloqueia add propriedades

//verificação
Object.isFrozen(carro2);
Object.isSealed(carro2);
Object.isExtensible(carro2);


//propriedades e metodos do protótipo
const frutas = ['Banana', 'Uva'];

frutas.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true
Array.prototype.isPrototypeOf(frutas); // true

frutas.toString()

//verificar tipo do objeto
Object.prototype.toString.call(frutas);