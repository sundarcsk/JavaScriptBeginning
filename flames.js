function changeFunction() {
    // document.getElementById("demo").innerHTML = "JavaScript inside HTML works.";
    var x1 = document.forms["myForm"]["first"].value;
    var y1 = document.forms["myForm"]["last"].value;
    document.getElementById("inner").innerHTML = x1 + " when flamed with " +y1;
    countFunction(x1,y1);
}
function countFunction(name1,name2) {
    var replaceWord = name2;
    var totalLength=name1.length+name2.length;
    var arr=[];
    if(name1!=null && name2!= null) {
        for (i in name1) {
            for (j in name2) {
                if(name1[i].toUpperCase()==name2[j].toUpperCase()) {
                    // document.write(name1[i] +"<br>");
                    name2=name2.replace(name2[j],'');
                    console.log("Replaced word "+name2+"<br>");
                    arr.push(name1[i]);
                    break;
                }
            }
        }
    }
    //document.write(arr +"<br>");
    flamesFunction(name1,replaceWord,totalLength-(arr.length*2));
}
flamesFunction = (name,secName,count) => {
    var word="FLAMES";
    var temp="";
    while (word.length>1) {
    //    document.write(word +"<br>");
       var tmpLen = count % word.length; //finding char position to strike
       if(tmpLen != 0)
       {
           temp = word.substring(tmpLen) + word.substring(0, tmpLen-1); //Append part start from next char to strike and first charater to char before strike.
       }
       else
       {
              temp = word.substring(0, word.length-1);
       }
       word = temp; //Assign the temp to word for next iteration.
    }
    document.getElementById("inner").innerHTML = "According to FLAMES theory";
    switch(word){
        case 'F':
            document.getElementById("result").innerHTML = name +" is Friends with "+secName ;
        break;
        case 'L':
            document.getElementById("result").innerHTML = name +" is Lovable with "+secName ;
        break;
        case 'A':
            document.getElementById("result").innerHTML = name +" is Affectionate with "+secName ;
        break;
        case 'M':
            document.getElementById("result").innerHTML = name +" will Marry "+secName ;
        break;
        case 'E':
            document.getElementById("result").innerHTML = name +" is Enemy with "+secName ;
        break;
        case 'S':
            document.getElementById("result").innerHTML = secName +" is Sister with "+ name;
        break;  
    }
}