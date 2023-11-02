function toggleActive(ID,CLASS){
  document.getElementById(ID).classList.toggle(CLASS);
}
function removeActive(ID,CLASS){
  document.getElementById(ID).classList.remove(CLASS);
}
function addActive(ID,CLASS){
  document.getElementById(ID).classList.add(CLASS);
}



// function getHeight(){
//   if (document.getElementById("header")) {
//     var headerHeight = document.getElementById("header").offsetHeight;
//     var setHeight = "calc(100vh - " + headerHeight + "px)";
//     document.getElementById('contentBox').style.height = setHeight;
//   }
// }

// getHeight();
// window.onload = function(){
//   getHeight();
// }
// window.onresize = function(){
//   getHeight();
// }


// var headerHeight = document.getElementById("header").offsetHeight;
// // var footerHeight = document.getElementById("footerTop").offsetHeight;
// var setHeight = "calc(100vh - " + headerHeight + "px)";
// document.getElementById('contentBox').style.height = setHeight;

//////////////////////////////////////////////////////////////////////////// Content Box Height ////////////////////////////////////////////////////////////////////////////
// var data_setHeight;
// var Content_label = ["pieChart_one_lable","pieChart_two_lable","pieChart_three_lable"]
// var Content_data = ["pieChart_one_data","pieChart_two_data","pieChart_three_data"]
// Content_label.forEach((label) =>{
//  const lebel_height = document.getElementById(label).offsetHeight;
//  data_setHeight = "calc(100% - " + lebel_height + "px)";
// })
// Content_data.forEach((data)=>{
//   document.getElementById(data).style.height = data_setHeight;
// })
