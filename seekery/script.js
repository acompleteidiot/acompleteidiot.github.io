let divHeight = 100;
const div = document.getElementById("expandDiv");

function expandDivIfAtBottom() {
  const isAtBottom =
    window.pageYOffset + window.innerHeight >=
    document.documentElement.scrollHeight - 100

  if (isAtBottom) {
    divHeight += 10;
    div.style.height = `${divHeight}vh`;
  }
}

window.addEventListener("scroll", expandDivIfAtBottom);