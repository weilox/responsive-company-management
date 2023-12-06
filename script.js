function create() {
    const companyname = document.getElementById("companyname").value;
    const companyfield = document.getElementById("companyfield").value;
    /* Veriables */

    if (companyname.length == 0 && companyfield.length == 0) {alert("Please fill the boxes.");}
    else if (companyname.length == 0) {alert("Please fill the company name.");}
    else if (companyfield.length == 0) {alert("Please fill the field name.");}
    /* Check writed or not */

    if (companyname.length > 0 && companyname.length < 5) {alert("Please enter larger company name.");}
    if (companyfield.length > 0 && companyfield.length < 5) {alert("Please enter larger company field.");}

    if (companyname.length > 10) {alert("Please enter shorter company name.");}
    if (companyfield.length > 10) {alert("Please enter shorter company field.");}
    /* Check length */

    if (companyname.length > 0 && companyfield.length > 0) {
        if (companyname.length > 4 && companyfield.length > 4) {
            if (companyname.length < 10 && companyfield.length < 10) {
                localStorage.setItem("companyname", companyname);
                localStorage.setItem("companyfield", companyfield);
                sessionStorage.setItem('sessionStarted', 'true');
                window.location.href = "management/mgt.html";
            }
        }
    }
    /* Redirect */
}