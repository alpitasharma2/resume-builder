function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}


function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function coursesField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("corsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("co");
    let weAddButtonOb = document.getElementById("coursesButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

// generating cv

function generateCV()
{
    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    // direct

    document.getElementById("nameT2").innerHTML = nameField;

    // contact

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    // address

    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;

    // mail

    document.getElementById('mailT').innerHTML = document.getElementById("mailField").value;

    // github

    document.getElementById('githubT').innerHTML = document.getElementById("GithubField").value;

    // linkedin

    document.getElementById('linkedT').innerHTML = document.getElementById("linkedinField").value;

    // hobbies

    document.getElementById('hobbiesT').innerHTML = document.getElementById("hobbiesField").value;

    // Summary

    document.getElementById('summaryT').innerHTML = document.getElementById("summaryField").value;

    // we

    let wes = document.getElementsByClassName("weField");

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    // aq

    let aqs = document.getElementsByClassName("eqField");

    let str1 = "";

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    // coureses

    let cos = document.getElementsByClassName("coursesField");

    let str2 = "";

    for (let e of cos) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("coursesT").innerHTML = str1;

    // code for setting image.

    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    // set the image to template

    reader.onloadend = function()
    {
        document.getElementById('imgT').src=reader.result;
    };

    // 

    
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}

// print cv

function printCV() {
    window.print();
}

