function whichSchool(age) {
  if (age >= 1 && age < 13) {
    return "You should go to an elementary school.";
  }
  else if (age >= 13 && age <= 18) {
    return "You should join a secondary school.";
  }
  else {
    return "You should join LHL.";
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
