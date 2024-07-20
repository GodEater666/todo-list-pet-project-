const input = document.querySelector(".todo__text");
const date = document.getElementById('dateField').valueAsDate = new Date();
button.onclick = function () {
  const p = document.createElement("p");
  p.className += 'newClass'
  p.innerHTML = input.value;
  document.body.append(p);
};
remove.onclick = function () {
  document.querySelector('.newClass').remove()
};
sort.onclick = function () {
  alert(date)
}
