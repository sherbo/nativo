const images = {
  Rojo: require('../assets/rojo.png'),
  Perro: require('../assets/perro.png'),
  Pavo: require('../assets/pavo.png'),
  Moto: require('../assets/moto.png'),
  Boca: require('../assets/boca.png')
};

export default word => images[word];
