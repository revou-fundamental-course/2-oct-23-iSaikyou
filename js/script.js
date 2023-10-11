document.getElementById("btnCtoF").addEventListener("click", function () {
  var suhuCelsius = parseFloat(document.getElementById("inputSuhu").value);
  if (!isNaN(suhuCelsius)) {
    var suhuFahrenheit = (suhuCelsius * 9) / 5 + 32;
    document.getElementById("hasilKonversi").textContent =
      suhuFahrenheit + " °F";
    document.getElementById("perhitungan").textContent =
      suhuCelsius + " °C * 9/5 + 32 = " + suhuFahrenheit + " °F";
  }
});

document.getElementById("btnFtoC").addEventListener("click", function () {
  var suhuFahrenheit = parseFloat(document.getElementById("inputSuhu").value);
  if (!isNaN(suhuFahrenheit)) {
    var suhuCelsius = ((suhuFahrenheit - 32) * 5) / 9;
    document.getElementById("hasilKonversi").textContent = suhuCelsius + " °C";
    document.getElementById("perhitungan").textContent =
      "(" + suhuFahrenheit + " °F - 32) * 5/9 = " + suhuCelsius + " °C";
  }
});

document.getElementById("btnClear").addEventListener("click", function () {
  document.getElementById("inputSuhu").value = "";
  document.getElementById("hasilKonversi").textContent = "";
  document.getElementById("perhitungan").textContent = "";
});
