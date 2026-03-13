// Año automático
document.getElementById("year")?.append(new Date().getFullYear());

// Marcar link activo en el menú
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = (a.getAttribute("href")||"").toLowerCase();
    if(href === path) a.classList.add("active");
  });
})();

// Placeholder "Ahora al aire"
const demo = `Demo de avance: ${new Date().toLocaleString()}`;
document.getElementById("nowPlaying")?.append(demo);
document.getElementById("nowPlayingRadio")?.append("Programa demo (por configurar)");
document.getElementById("streamStatus")?.append("Listo para URL de streaming");
