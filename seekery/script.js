let divHeight = 1000;
const div = document.getElementById("expandDiv");
const seekeryHeight = 31

function expandDivIfAtBottom() {
  const isAtBottom =
    window.pageYOffset + window.innerHeight >=
    document.documentElement.scrollHeight - 600

  if (isAtBottom) {
    divHeight += 100;
    div.style.height = `${divHeight}px`;
  }
  visualUpdate()
}

window.addEventListener("scroll", expandDivIfAtBottom);

function visualUpdate() {
    let seekeriesPassed = Math.floor((divHeight / seekeryHeight) * 10) / 10
    if (seekeriesPassed > 50) {
        document.getElementById("depthTrackerContainer").style.display = "block"
    }
    document.getElementById("depthTracker").textContent = seekeriesPassed.toString()
}

setInterval(visualUpdate, 500)