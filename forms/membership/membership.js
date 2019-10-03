/*
6-B
var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

function checkName(members){
  for(i=0;i<=members.length;i++){
       if(inptFirstName.value==members[i])
          return true
          else return false
       }
}


Submit.onclick=function(){
  if (checkName(members)==true){
    Check.value='Your name is on the list!'
  }else if (checkName(members)==false){
    members.push(inptFirstName.value)
    Check.value='You have been added to the list!'
  }else{
    Check.value='An error has occurred'
  }
}
*/
