let save_btn=document.getElementById('save');
save_btn.style.display="none"
let inputs=document.getElementsByClassName("input");
for(let i=0;i<inputs.length;i++){
  inputs[i].setAttribute("readonly","")
  inputs[i].style.backgroundColor="transparent"
  }

function change_value(){
  save_btn.style.display="block"
  for(let i=0;i<inputs.length;i++){
    if(i==1){
    }else{
      inputs[i].removeAttribute("readonly")
      inputs[i].style.backgroundColor="white"
    }
  }
}
function save(){
  for(let i=0;i<inputs.length;i++){
  inputs[i].setAttribute("readonly","")
  inputs[i].style.backgroundColor="transparent"
  }
  save_btn.style.display="none"
}
 
var SaveBtn=document.getElementById('save');
var CancleBtn=document.getElementById('cancle');
var EditIcon=document.getElementById('EditId');
var paragraph=document.getElementById("BioId");
  EditIcon.addEventListener('click',EditProfile);
CancleBtn.style.visibility="hidden";
SaveBtn.style.visibility="hidden";
function EditProfile()
{
CancleBtn.style.visibility="visible";
SaveBtn.style.visibility="visible"; 
var nameText=document.getElementById('name');
var addressText=document.getElementById('email');
var phoneText=document.getElementById('url');
paragraph.addEventListener('click',EditBio);
nameText.addEventListener('click',EditNameInfo);
phoneText.addEventListener('click',EditPhoneInfo);
addressText.addEventListener('click',EditAddressInfo);

function EditBio()
{ 
 var text = paragraph.textContent ? paragraph.textContent : paragraph.innerText;
 paragraph.innerHTML='<textarea class="textBio">'+text+'</textarea>';
}
function EditNameInfo()
{ 
  var  name=nameText.textContent ? nameText.textContent : nameText.innerText;
 nameText.innerHTML='<input type="text" value="' + name + '" >';  }
 function EditPhoneInfo()
{ 
phone=phoneText.textContent ?phoneText.textContent : phoneText.innerText;
phoneText.innerHTML='<input type="text" value="' + phone + '" >';  }
function EditAddressInfo()
{  
address=addressText.textContent ? addressText.textContent : addressText.innerText;
addressText.innerHTML='<input type="text" value="' + address + '" >';  }
var fileTag = document.getElementById("filetag");
preview = document.getElementById("preview"); 
fileTag.addEventListener("change", function() {
changeImage(this);
});
function changeImage(input) {
var reader;
if (input.files && input.files[0]) {
 reader = new FileReader();
 reader.onload = function(e) {
   preview.setAttribute('src', e.target.result);
 }
 reader.readAsDataURL(input.files[0]);
}}
} 