const jsonfile ="cv.json";
let temptext = "";
async function GetJson(){
  const data = await fetch(jsonfile);
    const cv = await data.json();
    for (let i = 0; i < cv.length; i++ ){
       temptext +="<br>";
        let first = cv[i];
        for( let key in first){
           let value = first [key]
            temptext +=  value += "<br>";
        }
        document.getElementById("cv").innerHTML=temptext;
    }
}
GetJson();
