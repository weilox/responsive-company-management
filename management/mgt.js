var sessionStarted = sessionStorage.getItem('sessionStarted');

if (!sessionStarted) {
    window.location.href = '../index.html';
}
const locationbox = document.getElementById("employees");
const getcompanyname = localStorage.getItem("companyname");
const getcompanyfield = localStorage.getItem("companyfield");
let salary = 15000;
let button = document.getElementById("add");
let employee = 0;
let employeemoney = 10000;
let sales = 0;

document.getElementById("companyname").innerHTML = getcompanyname + " Company";
document.getElementById("sector").innerHTML = getcompanyfield;
function performance() {
    if (salary <= 2500) {
        document.getElementById("performance").innerHTML = "Went bankrupt";
        return;
    }
    if (salary < 5000) {
        document.getElementById("performance").innerHTML = "Starter";
        return;
    }
    if (salary < 10000) {
        document.getElementById("performance").innerHTML = "Good";
        return;
    }
    if (salary < 30000) {
        document.getElementById("performance").innerHTML = "Very Good";
        return;
    }
    if (salary >= 30000) {
        document.getElementById("performance").innerHTML = "Perfect";
        return;
    }
}

money = function () {
    document.getElementById("salary").innerHTML = salary;
}

employe = function () {
    document.getElementById("staff").innerHTML = employee;
}

sold = function () {
    document.getElementById("sales").innerHTML = sales;
}

setInterval (money, 200);
setInterval (employe, 200);
setInterval (sold, 200);
setInterval (performance(), 200);

button.onclick = function(){
    if (employee > 6) {
        alert ("The maximum number of employees has been reached");
    }
    else {
        if (salary > 10000) {
            salary -=10000;
            const box = document.createElement("div");
            box.classList = "employee";
            const image = document.createElement("div");
            image.classList = "image";
            let name = document.createElement("h1");
            let money = document.createElement("h1");
            const trash = document.createElement("i")
            trash.classList = "fa" + " fa-trash-o";
    
            employee+=1;
            name.innerHTML = "Employee " + employee;
            money.innerHTML = employeemoney + "$";
            employees.append(box);
            box.append(image);
            box.append(name);
            box.append(money);
            box.append(trash);
    
            trash.onclick = function() {
                employees.removeChild(box);
                salary += 10000;
                employee-=1;
                performance()
            }
        }
        else {
            alert ("Your money is not enough 10000$");
        }
    }
    performance()
}

function box1() {
    let randomValue = Math.random();

    if (salary < 10000) {
        if (employee > 0) {
            if (salary > 2499) {
                if (randomValue <= 0.8) {
                    sales+=1;
                    alert("Project was successful! +2500$");
                    switch(employee) {
                        case 1:
                            come = salary+=2500;
                            break;
                        case 2:
                            come = salary+=3000;
                            break;
                        case 3:
                            come = salary+=3500;
                            break;
                        case 4:
                            come = salary+=4000;
                            break;
                        case 5:
                            come = salary+=4500;
                            break;
                        case 6:
                            come = salary+=5000;
                            break;
                        case 7:
                            come = salary+=5500;
                            break;
                    }
                }
                else {
                    sales+=1;
                    salary-=2500;
                    alert("Project wasn't successful! -2500$");
                }
            }
            else {
                alert ("Your company went bankrupt! Refresh the site.");
            }
        }
        else {
            alert("You need to add employee!")
        }
    }
    
    else if (salary > 9999) {
        if (employee > 0) {
            if (salary > 2499) {
                if (randomValue <= 0.5) {
                    sales+=1;
                    alert("Project was successful! +2500$");
                    salary+=2500;
                }
                else {
                    sales+=1;
                    salary-=2500;
                    alert("Project wasn't successful! -2500$");
                }
            }
            else {
                alert ("Your company went bankrupt! Refresh the site.");
            }
        }
        else {
            alert("You need to add employee!")
        }
    }
    performance()
}

function box2() {
    let randomValue = Math.random();

    if (employee > 0) {
        if (salary > 9999) {
            if (randomValue <= 0.3) {
                sales+=1;
                alert("Project was successful! +10000$");
                salary+=10000;
            }
            else {
                sales+=1;
                salary-=10000;
                alert("Project wasn't successful! -10000$");
            }
        }
        else {
            alert ("Your money is not enough! 10000$");
        }
    }
    else {
        alert("You need to add employee!")
    }
    performance()
}

function box3() {
    let randomValue = Math.random();

    if (employee > 0) {
        if (salary > 7999) {
            if (randomValue <= 0.5) {
                sales+=1;
                alert("The advertising project is successful! +6000$");
                salary+=6000;
            }
            else {
                sales+=1;
                salary-=3000;
                alert("The advertising project isn't successful! -3000$");
            }
        }
        else {
            alert ("Your money is not enough! 8000$");
        }
    }
    else {
        alert("You need to add employee!")
    }
    performance()
}

function box4() {
    let randomValue = Math.random();

    if (employee > 0) {
        if (salary > 49999) {
            if (randomValue <= 0.4) {
                sales+=1;
                alert("Project was successful! +50000$");
                salary+=50000;
            }
            else {
                sales+=1;
                salary-=50000;
                alert("The advertising project isn't successful! -50000$");
            }
        }
        else {
            alert ("Your money is not enough! 50000$");
        }
    }
    else {
        alert("You need to add employee!")
    }
    performance()
}
