const images = {
  Spain: require('../assets/Spain.png'),
  Colombia: require('../assets/Colombia.png'),
  Mexico: require('../assets/Mexico.png'),
  Portugal: require('../assets/Portugal.png'),
  USA: require('../assets/USA.png'),
  Germany: require('../assets/Germany.png'),
  Russia: require('../assets/Russia.png'),
  England: require('../assets/England.png')
};

export default country => images[country];
