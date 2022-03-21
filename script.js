function converterMoeda() {
  var valorReal = parseFloat(document.getElementById("valor").value);
  var valorDolar = 5.0;
  var valorEuro = 5.59;
  var valorIene = 0.044;

  var convertidoDolar = (valorReal / valorDolar).toFixed(2);
  var convertidoEuro = (valorReal / valorEuro).toFixed(2);
  var convertidoIene = (valorReal / valorIene).toFixed(2);

  document.getElementById(
    "resultado__texto--dolar"
  ).innerHTML = `$ ${convertidoDolar}`;
  document.getElementById(
    "resultado__texto--euro"
  ).innerHTML = `€ ${convertidoEuro}`;
  document.getElementById(
    "resultado__texto--iene"
  ).innerHTML = `¥ ${convertidoIene}`;
}

function converterTemperatura() {
  var valorCelsius = parseFloat(document.getElementById("celsius").value);
  var resultadoCemK = (valorCelsius + 273.15).toFixed(2);
  var resultadoCemF = (valorCelsius * 1.8 + 32).toFixed(2);

  document.getElementById("resultado__texto--f").innerHTML = resultadoCemF;
  document.getElementById("resultado__texto--k").innerHTML = resultadoCemK;
}

function converterMedida() {
  var valorKm = parseFloat(document.getElementById("km").value);

  var kiloEmMetros = valorKm * 1000;
  var kiloEmCent = valorKm * 100000;

  document.getElementById("resultado__texto--m").innerHTML = kiloEmMetros;
  document.getElementById("resultado__texto--cm").innerHTML = kiloEmCent;
}