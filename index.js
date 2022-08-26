// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}
updateEmployeeWithKeyAndValue = (employee, name, streetAddress) => {
    let newObj = {...employee};
    newObj.streetAddress = "11 Broadway";
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = employee ;
    employee[key]= value;
    
    return newEmployee
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployeeDelete = employee;
    delete newEmployeeDelete[key];
    return newEmployeeDelete
}