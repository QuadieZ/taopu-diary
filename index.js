//Buttons
const aboutBtn = document.getElementById("about");
const carerBtn = document.getElementById("me");

//Modals
const modal = document.getElementById("modal");
const aboutModal = document.getElementById("aboutModal");
const carerModal = document.getElementById("carerModal");
const taopuModal = document.getElementById("taopumodal");

let moved = 0;
var eggs = document.querySelectorAll(".egg");
var elem = document.getElementById("move");

aboutBtn.onclick = () => {
  modal.style.display = "flex";
  aboutModal.style.display = "flex";
  carerModal.style.display = "none";
};

carerBtn.onclick = () => {
  modal.style.display = "flex";
  aboutModal.style.display = "none";
  carerModal.style.display = "flex";
};

const taopu = () => {
  taopuModal.style.display = "flex";
};

const move = () => {
 

  if (moved == 0) {
    eggs.forEach((el) =>
      el.animate(
        [
          {
            transform: "translate3d(0, 0.5%, 0)",
          },

          {
            transform: "translate3d(0, 0.8%, 0)",
          },

          {
            transform: "translate3d(0, -1.2%, 0)",
          },

          {
            transform: "translate3d(0, 1.2%, 0)",
          },
        ],
        {
          duration: 500,
          direction: 'reverse',
          easing: 'ease-in',
        }
      )
    );
    moved++;
  } else if (moved == 1) {
    elem.animate([{ transform: "translateY(-30%)" }], {
      duration: 2000,
      fill: "forwards",
      easing: "ease-out",
    });
    elem.style.animationFillMode = "forwards";
    moved++;
  } else {
    elem.animate([{ transform: "translateY(0)" }], {
      duration: 2000,
      fill: "forwards",
      easing: "ease-out",
    });
    elem.style.animationFillMode = "forwards";
    moved = 0;
  }
};

window.onclick = function (event) {
  if (event.target == modal || event.target == taopuModal) {
    modal.style.display = "none";
    taopuModal.style.display = "none";
    elem.animate([{ transform: "translateY(0)" }], {
      duration: 1,
      fill: "forwards",
      easing: "ease-out",
    });
    elem.style.animationFillMode = "forwards";
    moved = 0;
  }
};
