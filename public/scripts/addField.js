//Procurar o botao
document
  .querySelector("#add-time")
  //Quando clicar no botao
  .addEventListener("click", cloneField);

// Executar uma ação
function cloneField() {
  //Duplicar os campos. Qual campo?
  const NewFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  //Pegar os campos. Que campos
  const fields = NewFieldContainer.querySelectorAll("input");

  // para cada campo, limpar
  fields.forEach(function (field) {
    //pegar o field do momento e limpa
    field.value = "";
  });

  //colocar na pagina: onde?
  document.querySelector("#schedule-items").appendChild(NewFieldContainer);
}
