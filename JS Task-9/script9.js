// switch statement logical operators in JavaScript
// Question 1: Voting Eligibility
// Scenario: Determine if a person is eligible to vote.
// Inputs:
// •	age
// •	citizenship (boolean)
// Outputs:
// •	canVote
// Algorithm:
// 1.	Check if the age of the person is 18 or older.
// 2.	Check if the person has citizenship.
// 3.	If both conditions are true, print canVote.
// 4.	Otherwise, print cannotVote.
// Example:
// •	Input: age = 20, citizenship = true
// •	Output: canVote
// var age = 14; //cannotVote
var age = 20; //canVote
var citizenship = true;
if (age >= 18 && citizenship == true) {
  console.log("canVote");
} else {
  console.log("cannotVote");
}

// Question 2: Admission to a Club
// Scenario: Determine if a person can enter a club.

// Inputs:

// age
// hasInvitation (boolean)
// Outputs:

// canEnterClub
// Algorithm:

// Check if the age of the person is 21 or older.
// Check if the person has an invitation.
// If either condition is true, print canEnterClub.
// Otherwise, print cannotEnterClub.
// Example:

// Input: age = 20, hasInvitation = true
// Output: canEnterClub
//var age = 16; //cannotEnterClub
var age = 20; //canEnterClub
var hasInvitation = true;
if (age >= 21 || hasInvitation == true) {
  console.log("canEnterClub");
} else {
  console.log("cannotEnterClub");
}

// Question 3: Discount Eligibility
// Scenario: Determine if a person is eligible for a discount at a store.
// Inputs:
// •	isMember (boolean)
// •	age
// Outputs:
// •	isEligibleForDiscount
// Algorithm:
// 1.	Check if the person is a member.
// 2.	Check if the person is a senior (65 years old or older).
// 3.	If either condition is true, print isEligibleForDiscount.
// 4.	Otherwise, set isNotEligibleForDiscount.
// Example:
// •	Input: isMember = false, age = 70
// •	Output: isEligibleForDiscount
var isMember = false;
var age = 16; //isNotEligibleForDiscount
var age = 70; //isEligibleForDiscount
if (age >= 65 || isMember == true) {
  console.log("isEligibleForDiscount");
} else {
  console.log("isNotEligibleForDiscount");
}

// Question 4: Scholarship Eligibility
// Scenario: Determine if a student is eligible for a scholarship.

// Inputs:

// gpa
// extracurriculars (boolean)
// recommendation (boolean)
// Outputs:

// isEligibleForScholarship (boolean)
// Algorithm:

// Check if the GPA of the student is 3.5 or higher.
// Check if the student participates in extracurricular activities.
// Check if the student has a recommendation letter.
// If the GPA is 3.5 or higher AND either participation in extracurricular activities or a recommendation letter is true, print isEligibleForScholarship.
// Otherwise, set isNotEligibleForScholarship.
// Example:

// Input: gpa = 3.6, extracurriculars = true, recommendation = false
// Output: isEligibleForScholarship
// var gpa = 3.0; //isNotEligibleForScholarship
var gpa = 3.6; //isEligibleForScholarship
var extracurriculars = true;
var recommendation = false;

if ((gpa >= 3.5 && extracurriculars == true) || recommendation == true) {
  console.log("isEligibleForScholarship");
} else {
  console.log("isNotEligibleForScholarship");
}
