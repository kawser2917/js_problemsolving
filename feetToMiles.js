function feetToMiles(feet){
    var miles = feet / 5280;
    miles.toFixed(4)
    return miles;
}
console.log(feetToMiles(),"Miles");