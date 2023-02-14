//  bold 
document.getElementById('bold').addEventListener('click', function() {
       document.getElementById('textarea').style.fontWeight="bold";
})
// italic
document.getElementById('italic').addEventListener('click', function() {
       document.getElementById('textarea').style.fontStyle="italic";
})
// underline
document.getElementById('underline').addEventListener('click', function() {
       document.getElementById('textarea').style.textDecoration="underline";
})
// text align left
document.getElementById('text-left').addEventListener('click', function() {
       document.getElementById('textarea').style.textAlign="left";
})
// text align center
document.getElementById('text-center').addEventListener('click', function() {
       document.getElementById('textarea').style.textAlign="center";
})
// text align right
document.getElementById('text-right').addEventListener('click', function() {
       document.getElementById('textarea').style.textAlign="right";
})
// text align justify
document.getElementById('text-justify').addEventListener('click', function() {
       document.getElementById('textarea').style.textAlign="justify";
})
// font size 
document.getElementById('fontSize').addEventListener('click', function(e) {
      let inputValue = e.target.value;      
      document.getElementById('textarea').style.fontSize = inputValue+'px';
})
document.getElementById('color').addEventListener('change', function(e) {
    let inputValue = e.target.value;      
    document.getElementById('textarea').style.color = inputValue;
})
