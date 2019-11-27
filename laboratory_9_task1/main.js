document.getElementById("button").onclick = function() {
  let year_start = document.getElementById("year_start").value;
  let year_end = document.getElementById("year_end").value;
  let variant = document.getElementById("variant").value;
  var array = [0];
  var year_min = [0];

  document.getElementById("out").innerHTML = "Прибутки: " + "<br>";

  for (year_start; year_start < year_end; year_start++) {
    let P = (variant *(100 * Math.sin(year_start - 2000) + 10 * variant)).toFixed(2);

    array.push(P);
    year_min.push(year_start);

    if (P >= 100 && P <= 300) {
      document.getElementById("out").innerHTML += year_start + " рік:  " + P + "<br>";
    }
  }

//  document.getElementById("out2").innerHTML = "Збитки: " + "<br>";

  document.getElementById("out2").outerHTML = '<div class="burn">zbitki</div>';


  var min1 = Math.min.apply(null, array).toFixed(2);

  for (find in array) {
    if (array[find] == min1) {
      var yearmin = find;
    }
  }
  var year = year_min[yearmin];

//  document.getElementById("out2").innerHTML += year + " рік:  " + min1 + "<br>";
};
