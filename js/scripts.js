//Entry function from the data submitted from the html form*/
function processor(){
  /*get input from the html form*/
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    /*checks if gener is male or female*/
      if(gender.toLowerCase() == "male".toLowerCase()){
          processDob(dob,gender)
      }else if(gender.toLowerCase() == "female".toLowerCase()){
          processDob(dob,gender);
      }else{
          alert("wrong entry");
      }
}

function processDob(dob,gender){
  /*Alternative method to get the day of the week from date*/

  var date = new Date(dob).getDay();//[0,1,2,3,4,5,6]
    alert(date);
  /*Array days of the week*/
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  /*Access a spefic day of the week from array days, using date*/
  var day = days[date];//days[1]
  var akan = "Your Akan name is: ";
  if(gender.toString()=="male".toString()){
      /*call to function maleNames to get the make akan name*/
      maleNames(akan, day);
  }else if(gender.toString()=="female".toString()){
    /*call to function femaleNames to get the make akan name*/
    femaleNames(akan, day);
  }else{
    alert("Wrong input");
  }
}

/*Get name of a male person*/
function maleNames(akan, day){
  if(day.toLowerCase() == "Sunday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Kwasi");
  }else if(day.toLowerCase() == "Monday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Kwadwo");
  }else if(day.toLowerCase() == "Tuesday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Kwabena");
  }else if(day.toLowerCase() == "Wednesday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Kwaku");
  }else if(day.toLowerCase() == "Thursday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Yaw");
  }else if(day.toLowerCase() == "Friday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Kofi");
  }else if(day.toLowerCase() == "Saturday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Kwame");
  }else{
    alert("Wrong Date Selected");
  }
}

/*Get name of a female person*/
function femaleNames(akan, day){
  if(day.toLowerCase() == "Sunday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Akosua");
  }else if(day.toLowerCase() == "Monday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Adwoa");
  }else if(day.toLowerCase() == "Tuesday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Abenaa");
  }else if(day.toLowerCase() == "Wednesday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Akua");
  }else if(day.toLowerCase() == "Thursday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Yaa");
  }else if(day.toLowerCase() == "Friday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Afua");
  }else if(day.toLowerCase() == "Saturday".toLowerCase()){
      alert("You were born on: "+day+". "+akan+"Ama");
  }else{
    alert("Wrong Date Selected");
  }
}

/*This function has a bug can not work with years that starts with Zero e.g. 2002 etc.*/
function processDobBackUp(dob,gender){
  /*the array is of length 10 2020-05-12*/
  var arrDate = dob.split("");
  /*get cc */
  var centuryOne= arrDate[0];
  var centuryTwo = arrDate[1];
  var cc = parseInt(centuryOne+centuryTwo);
  /*get yy */
  var yearOne = arrDate[2];
  var yearTwo = arrDate[3];
  var yyString = yearOne+yearTwo;
  alert(yyString);
  /*year that starts with 0 like 05, concatnate zero at the start*/
  if(yyString.toString().startsWith("0")){
    var yyParse = parseInt(yyString);
    var yyy = Number("0"+yyParse);
    var yy = 02;
    alert(yy);
  }else{
    var yy = parseInt(yyString);
  }
  /*get mm */
  var monthOne = arrDate[5];
  var monthTwo = arrDate[6];
  var mm = parseInt(monthOne+monthTwo);
  /*get dd */
  var dateOne = arrDate[8];
  var dateTwo = arrDate[9];
  var dd = parseInt(dateOne+dateTwo);
  var dayOfWeek = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
  /*Array length minus one*/
  var date = (Math.ceil(dayOfWeek))-parseInt(1);
  /*alert(cc);
  Alternative method to get the day of the week from date*/
  /*var date1 = new Date(dob).getDay();*/
  /*Array days of the week*/
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  /*Access a spefic date from array days*/
  var day = days[date];
  var akan = "Your Akan name is: ";
  if(gender.toString()=="male".toString()){
      maleNames(akan, day);
  }else if(gender.toString()=="female".toString()){
    femaleNames(akan, day);
  }else{
    alert("Wrong input");
  }
}
