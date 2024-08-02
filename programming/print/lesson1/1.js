function show() {
  let result = "<table>";
  for (let i = 1; i <= 10; i++) {
    result = result + "<tr>";
    for (let j = 1; j <= 10; j++) {
      result += `<td>${i * j}</td>`;
    }
    result += "</tr>";
  }
  result += "</table>";
  document.write(result);
}

show();
