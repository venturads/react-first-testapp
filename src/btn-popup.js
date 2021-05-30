import React from 'react';

function goPopup() {
  alert(123);
}
let el = document.getElementById('alertButton');
if (el) {
  el.addEventListener('click', goPopup, false);
}
