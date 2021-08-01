jalaliDatepicker.startWatch({
  minDate: "attr",
  maxDate: "attr"
});

var elm=document.getElementById("jalaliDatePcker");

elm.addEventListener("focus", ()=> {
    jalaliDatepicker.show(elm);
})