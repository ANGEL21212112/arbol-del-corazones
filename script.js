const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const content = document.getElementById("content");
const fades = document.querySelectorAll(".fade");
const falling = document.querySelector(".falling-hearts");

// 🔴 CAMBIA ESTA FECHA
const startDate = new Date("2023-09-16T00:00:00");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  content.classList.remove("hidden");

  fades.forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), i * 600);
  });

  buildTree();
  startTimer();
  setInterval(createFallingHeart, 300);
});

/* Árbol redondeado */
function buildTree(){
  const container = document.querySelector(".hearts");
  container.innerHTML = "";

  const total = 375;
  const radius = 110;

  for(let i = 0; i < total; i++){
    setTimeout(() => {
      const angle = (i / total) * Math.PI * 2;
      const r = radius * Math.sqrt(Math.random());

      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);

      const heart = document.createElement("span");
      heart.style.left = (110 + x) + "px";
      heart.style.top  = (110 + y) + "px";

      heart.style.background =
        `hsl(${Math.random()*360},80%,80%)`;

      container.appendChild(heart);
    }, i * 30);
  }
}


/* Reloj */
function startTimer(){
  function update(){
    const now = new Date();
    const diff = now - startDate;

    const s = Math.floor(diff/1000)%60;
    const m = Math.floor(diff/60000)%60;
    const h = Math.floor(diff/3600000)%24;
    const d = Math.floor(diff/86400000);

    document.getElementById("time").textContent =
      `${d} días ${h} horas ${m} minutos ${s} segundos`;
  }
  update();
  setInterval(update, 1000);
}

/* Corazones cayendo */
function createFallingHeart(){
  const heart = document.createElement("span");
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (4 + Math.random()*4) + "s";
  heart.style.background =
    `hsl(${Math.random()*360},80%,75%)`;

  falling.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
