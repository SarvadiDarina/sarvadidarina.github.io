document.getElementById("button").onclick = function() {
  let variant = 4;
  let cols = 5; //  candidate Кандидати
  let rows = 6; // city  Місто

  let arr = [];
  var sum = 0;

  document.getElementById("out0").innerHTML = "Результати голосування: " + "<br>";
  // Створює всі рядки:
  for (var i = 0; i < rows; i++) {
    // Створює порожній рядок
    arr.push([]);

    // Додає індекси в порожній рядок:
    arr[i].push(new Array(cols));

    for (var j = 0; j < cols; j++) {
      // Вставляєм значення:
      let voice = (Math.random() * (10 * variant + 50)).toFixed(0);
      voice = Number(voice);
      arr[i][j] = voice;
    }
  }
  document.getElementById("out").innerHTML = arr.join("<br>");

  document.getElementById("out1").innerHTML = "Кількість виборців які взяли участь у голосуванні у кожному населеному пункті: " + "<br>";
  for (var k = 0; k < 6; k++) {
    sum = 0;
    for (var j = 0; j < 5; j++) {
      sum += arr[k][j];
    }
    document.getElementById("out2").innerHTML += "Пункт: " + Number(k + 1) + "  виборців: " + sum + "<br>";
    
  }

};
