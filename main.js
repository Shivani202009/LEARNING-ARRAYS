var studentarray=[]
console.log("hi")
function submit(){
    for(var x=1; x<=5; x++){
        var student=document.getElementById("input"+x).value
       studentarray.push(student)
       

    }
    console.log(studentarray) 
    displayarray=[]
    for(var m=0; m<studentarray.length; m++ ){
        displayarray.push("<h4>"+studentarray[m]+"</h4>")
        
    }
document.getElementById("outputwithcommas").innerHTML=displayarray;
var arraywithoutcommas=displayarray.join(" ")
document.getElementById("outputwithoutcommas").innerHTML=arraywithoutcommas
document.getElementById("submitbutton").style.display="none"
document.getElementById("sortbutton").style.display="inline-block"


}
function sort(){
    studentarray.sort()
    console.log(studentarray)
    sortedarray=[]
    for(var d=0; d<studentarray.length; d++){
        sortedarray.push("<h4>"+studentarray[d]+"</h4>")
        
    }
   document.getElementById("outputwithcommas").innerHTML=sortedarray; 
   var sortedwithoutcommas=sortedarray.join(" ")
   document.getElementById("outputwithoutcommas").innerHTML=sortedwithoutcommas;
}
