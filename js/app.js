document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#dataEntryForm');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const deviceListItem = createdeviceListItem(event.target);
  const deviceList = document.querySelector('#stored-items-list');
  deviceList.appendChild(deviceListItem);

  event.target.reset();
}

const createdeviceListItem = function (form) {
  const deviceListItem = document.createElement('li');
  deviceListItem.classList.add('stored-items-list');

  const device = document.createElement('h2');
  device.textContent = form.device.value;
  deviceListItem.appendChild(device);

  const dfunction = document.createElement('h3');
  dfunction.textContent = form.deviceFunction.value;
  deviceListItem.appendChild(dfunction);

  const power = document.createElement('p');
  power.textContent = form.power.value;
  deviceListItem.appendChild(power);

  const room = document.createElement('p');
  room.textContent = form.room.value;
  deviceListItem.appendChild(room);

  return deviceListItem;
}

const handleDeleteAllClick = function (event) {
  const deviceList = document.querySelector('#stored-items-list');
  deviceList.innerHTML = '';
}
