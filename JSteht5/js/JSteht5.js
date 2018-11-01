
function teht51() {
  document.getElementById(
      'etunimi').innerHTML = '<td id="etunimi">Lauri </td></tr>';
  document.getElementById(
      'sukunimi').innerHTML = '<td id="sukunimi">Salminen </td></tr>';
  document.getElementById(
      'nikki').innerHTML = '<td id="nikki">lasalmin </td></tr>';
  document.getElementById(
      'osoite').innerHTML = '<td id="osoite">Konala </td></tr>';

  const div = document.querySelector('#puhelinnumero');
  const html =                                               
      ` <tr> <td id="puhelinnumero">Puhelinnumero</td><td id="numeroni"></td></tr>`;
  div.innerHTML = html;
  document.getElementById(
      'numeroni').innerHTML = '<td id="numeroni">0504037739 </td></tr>';


}