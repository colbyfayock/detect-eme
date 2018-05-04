function createListElement(text = '') {
  const list_element = document.createElement('li');
  list_element.textContent = text;
  return list_element;
}

getSupportedEME().then(function(data) {

  const list = document.getElementById('eme-list');

  if ( !Array.isArray(data) || data.length === 0 ) {
    list.appendChild(createListElement('Nothinggggg!'));
    return;
  }

  data.map((keysystem) => list.appendChild(createListElement(keysystem.id)));

  console.log('Supported EME', data);

});