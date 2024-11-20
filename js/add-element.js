/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class

// traverse the elements

// add a new element by clicking the plus sign

// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
  // add a input text box
  
  // whenever the user are done add the element
  $('input').blur(convertLi);
  $('#save').text("Need Save to Database");
  
}
function convertLi(){
  var userinput = $(this).val();
  console.log(userinput);
  $('#todo').append('<li class="cool">' + userinput+' </li>');
  $(this).remove();
}
// bind click with the event handler

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
$('li').click(changeStyle);
function changeStyle() {
  if ($(this).hasClass

}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
}
