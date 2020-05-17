$(document).ready(onReady);
let employees = [];
let costPerMonth =0;
let i = 0;
function onReady(){
    console.log('jQuery is loaded');

    $('#submitBtn').on('click', appendEmployees);
    $('#employeesTable').on('click','#deleteBtn',deleteItem);
}

function appendEmployees(){
    console.log("In appendEmployees");

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    employees.push(new employee(firstName,lastName,idNumber,jobTitle,annualSalary));

    $('#firstName').val(' ');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    costPerMonth += monthlyCost();
    $('#monthly_Cost').empty();
    $('#monthly_Cost').append('<p>Monthly Cost: $'+costPerMonth+'</p>');
    if (costPerMonth > 20000){
        $('#monthly_Cost').css("background-color", "red");
    }

    displayEmployees();
}

//create constructor function that creates person object
function employee(firstName, lastName, idNumber, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
}

function monthlyCost(){
    let totalCost;
    for (person of employees){
        totalCost = person.annualSalary / 12;
    }
    console.log("Monthly Cost: "+totalCost);
    return totalCost;
}

function deleteItem(){
    console.log("In deleteItem");
    $(this).parent().parent().remove();
}

function displayEmployees(){
    console.log("In displayEmployees");
    $('#employeesTable').append('<tr><td>'+employees[i].firstName+'</td><td>'+employees[i].lastName+'</td><td>'+employees[i].idNumber+'</td><td>'+employees[i].jobTitle+'</td><td>'+employees[i].annualSalary+'</td><td><button id="deleteBtn">delete</button></td></tr');
    i += 1;
}