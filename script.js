function copy(that){
var inp =document.createElement('input');
document.body.appendChild(inp);
inp.value= $(that).css("background-color");
inp.select();
document.execCommand('copy',false);
 window.getSelection().empty();
$('input').addClass('popclass').css({"background-color": inp.value, "color": "black"}).show();
setTimeout(function(){inp.remove();},1000);

}
