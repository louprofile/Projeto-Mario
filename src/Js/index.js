/* console.log('mostrar o document', document);
 Essa parte foi útil para que a vizualização no console fosse possivel.
console.log(document.querySelector(".button-trailer")) */

const buttonTrailer = document.querySelector(".button-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
/* console.log("mostrar o objeto da modal", modal);*/
const linkDoVideo = video.src;

function alterarModal(){
  modal.classList.toggle("aberto");
}

buttonTrailer.addEventListener("click", () => {
  alterarModal();
  video.setAttribute("src", linkDoVideo);
})

const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () => {
  alterarModal();
  video.setAttribute("src", "");
})

