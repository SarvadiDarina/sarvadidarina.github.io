document.getElementById("button").onclick = function() {
  let start = document.getElementById("start").value;
  start = Number(start);
  let end = document.getElementById("end").value;
  end = Number(end) + 1;
  let array = [];
  let array2 = [];

  document.getElementById("out").innerHTML = "Масив: " + "<br>";
  for (start; start < end; start++) {
    array.push(start);
  }
  document.getElementById("out").innerHTML += array;

  document.getElementById("out2").innerHTML = "Масив Новий: " + "<br>";
  let start2 = -4;
  for (start2; start2 < 0; start2++) {
    array2.push(start2);
  }
  document.getElementById("out2").innerHTML += array2;

  let multi = array2[1] * array2[3];
  
  if (multi > 3) {
    document.getElementById("out3").innerHTML = multi;
  }
  document.getElementById("out3").innerHTML = "Дані відсутні";
};
