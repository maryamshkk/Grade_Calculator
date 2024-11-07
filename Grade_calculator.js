function gradecalculator(){
    // getname
    let getname = document.getElementById("name").value;
    // getmarks
    let obtm = parseFloat(document.getElementById("obtm").value);
    let tm = parseFloat(document.getElementById("tm").value);
    // Calculate percentage 
    let percentage = (obtm/tm) * 100;
    // Get grade
    let grade;
    if(percentage >= 90 && percentage <= 100){
        grade = 'A+';
    }
    else if(percentage >= 80 && percentage < 90){
        grade = 'A';        
    }
    else if(percentage >= 75 && percentage < 80){
        grade = 'B+';
    }
    else if(percentage >= 70 && percentage < 75){
        grade = 'B';
    }
    else if(percentage >= 65 && percentage < 70){
        grade = 'C+';
    }
    else if(percentage >= 60 && percentage < 65){
        grade = 'C';
    }
    else if(percentage >= 55 && percentage < 60){
        grade = 'D+';
    }
    else if(percentage >= 50 && percentage < 55){
        grade = 'E';
    }
    else{
        grade = 'F';
    }
    // get Result
    document.getElementById("result").innerHTML = getname + " You have got " + percentage + " % and your Grade is " + grade;
}