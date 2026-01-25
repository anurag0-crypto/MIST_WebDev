function showSection(sectionId, clickedItem) {
  const sections = document.getElementsByClassName("content");
  const menuItems = document.querySelectorAll("nav li");

  for (let section of sections) {
    section.classList.add("hidden");
  }

  menuItems.forEach(item => item.classList.remove("active"));

  document.getElementById(sectionId).classList.remove("hidden");
  clickedItem.classList.add("active");
}

function revealText() {
  const text = document.getElementById("hidden-text");
  text.style.display = "block";
}
