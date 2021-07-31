const collapseContent = document.getElementById("collapseContent")
const collapseTopLine =document.getElementById("topLine")
const collapseBottomLine =document.getElementById("bottomLine")

const collapseToggle = () => {
  // collapseContent.classList.toggle("collapseHide");
  if (collapseContent.classList.contains("collapseHideFirst")) {
    collapseContent.classList.remove("collapseHideFirst");
    collapseBottomLine.classList.toggle("fadeLineIn");
    collapseTopLine.classList.toggle("fadeLineIn");
  } else {
    collapseContent.classList.toggle("collapseHide");
    
  }
  collapseTopLine.classList.toggle("fadeLine");
  collapseBottomLine.classList.toggle("fadeLine");
  collapseTopLine.classList.toggle("fadeLineIn");
  collapseBottomLine.classList.toggle("fadeLineIn");
  collapseContent.classList.toggle("collapseShow");
} 