  const urlParams = new URLSearchParams(window.location.search);
  const prefix = document.getElementsByClassName('prefix')[0]
  
const lastname = document.getElementsByClassName('lastname')[0]  // get the value of the 'lastname' search param
  // and set it as the .lastname text
  prefix.innerHTML = urlParams.get('prefix');
  // get the value of the 'company' search param
  // and set it as the .company text
  lastname.innerHTML = urlParams.get('lastname');

document.title = 'Merry Christmas ' + urlParams.get('prefix') +' '+ urlParams.get('lastname') + '!';