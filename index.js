function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArray[i] = `${musician} plays ${instrument}`;
  }
  return newArray;
}