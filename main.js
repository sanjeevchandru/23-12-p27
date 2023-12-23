document.write("28.to find the longest common starting substring in a set of strings."+"<br>");
function test28(arr){
    var a1=arr[0];
    var a2=arr[arr.length-1];
    let i=0;
    while(i<a1.length && (a1.charAt(i)===a2.charAt(i))){
    i++;
    } 
    return a1.substring(0,i);
    
}
document.write("the original array ['go', 'google'], ['SQLInjection', 'SQLTutorial']"+"<br>")
document.write(test28(['go', 'google'])+"<br>");
document.write(test28(['SQLInjection', 'SQLTutorial'])+"<br><br>");