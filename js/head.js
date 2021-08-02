const collapseContent = document.getElementById("collapseContent")
const collapseTopLine =document.getElementById("topLine")
const collapseBottomLine =document.getElementById("bottomLine")

const collapseToggle = () => {
  // collapseContent.classList.toggle("collapseHide");
  if (collapseContent.classList.contains("hoc-head-collapseHideFirst")) {
    collapseContent.classList.remove("hoc-head-collapseHideFirst");
    collapseBottomLine.classList.toggle("hoc-head-fadeLineIn");
    collapseTopLine.classList.toggle("hoc-head-fadeLineIn");
  } else {
    collapseContent.classList.toggle("hoc-head-collapseHide");
    
  }
  collapseTopLine.classList.toggle("hoc-head-fadeLine");
  collapseBottomLine.classList.toggle("hoc-head-fadeLine");
  collapseTopLine.classList.toggle("hoc-head-fadeLineIn");
  collapseBottomLine.classList.toggle("hoc-head-fadeLineIn");
  collapseContent.classList.toggle("hoc-head-collapseShow");
} 