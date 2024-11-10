// Get refrences to the form and display area
var formm = document.getElementById('resume-form');
var resumedisplayelementt = document.getElementById('resume-display');
// Handel form submission
formm.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload 
    // collecting input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phoneno').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically 
    var resumehtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p  contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p  contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p  contenteditable=\"true\">").concat(skills, "</p>\n\n    ");
    //Display the genrated resume 
    if (resumedisplayelementt) {
        resumedisplayelementt.innerHTML = resumehtml;
    }
    else {
        console.error('the resume display element is missing. ');
    }
});