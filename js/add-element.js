/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('#four').addClass('hot');
$('.hot').each(toocool);

function toocool() {
  $(this).removeClass('hot')
  $(this).addClass('cool')
}

// traverse the elements
$('#two').next().next().text("cheese");
$('#two').prev().text("water");

// add a new element by clicking the plus sign
$('#todo').append('<li class="cool"> meat </li>');
$('#add').click(addElement);

// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element with an input text box
  $('#todo').append('<li><input type ="text"></li>');
  
  // whenever the user is done, add the element
  $('input').blur(convertLi);
  $('#save').text("Need Save to Database");
}

function convertLi() {
  var userinput = $(this).val();
  console.log(userinput);

  // append the new item to the list and change the style
  $('#todo').append('<li class="cool">' + userinput + ' </li>');
  $(this).remove();
}

// bind click with the event handler

// click the li element will change the style
// three styles: complete, cool, hot
$('li').click(changeStyle);

function changeStyle() {
  // toggle between styles: complete, cool, and hot
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool').addClass('complete');
  } else if ($(this).hasClass('complete')) {
    $(this).removeClass('complete').addClass('hot');
  } else if ($(this).hasClass('hot')) {
    $(this).removeClass('hot').addClass('cool');
  }
}

// delete complete elements by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements with the "complete" class
  $('li.complete').remove();
  $('#save').text("Need Save to Database");
}
