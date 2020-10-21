

let postcode = document.querySelector("#post");
let form = document.querySelector('form');
let p = document.querySelector('#alert');

let form1 = document.querySelector("#form1");
let email = document.querySelector("#email");
let alert1 = document.querySelector("#alert1");

let form2 = document.querySelector("#form2");
let phone = document.querySelector("#phone");
let alert2 = document.querySelector("#alert2");


//regular expression

let d = /^[0-9]{4}$/;
let k = /^([a-zA-Z0-9])+@([a-zA-Z0-9])+[\.]com$/;

//gp number

let n = /^(\+88)?(013)([0-9]){8}$/;
let n1 = /^(\+88)?(017)[0-9]{8}$/;

//bl number

let n2 = /^(\+88)?(019)[0-9]{8}$/;
let n3 = /^(\+88)?(014)[0-9]{8}$/;

//citycell number

let n4 = /^(\+88)?(0119)[0-9]{7}$/;

//robi number

let r = /^(\+88)?(018)[0-9]{8}$/;

//teletalk number

let t = /^(\+88)?(0155)[0-9]{7}$/;
let t1 = /^(\+88)?(015)[0-9]{8}$/;

//airtel number

let a = /^(\+88)?(016)[0-9]{8}$/;






let result = 0;
let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;
let result5 = 0;

let result6 = 0;
let result7 = 0;
let result8 = 0;

class validator {
    constructor(postcode, email, phone) {
        this.postcode = postcode;
        this.email = email;
        this.phone = phone;

    }
}

form.addEventListener('submit', e => {

    p.innerHTML = '';
    let v = new validator(postcode.value);

    if (postcode.value != '') {
        result = d.test(postcode.value);

        if (result == true) {
            p.innerHTML = `
       <p class="alert alert-success">
            ${postcode.value} is valid !</p>  `;
        }
        else {
            p.innerHTML = `
            <p class="alert alert-danger">
            ${postcode.value} is invalid postcode 
    <b> ex-2314 </b>
    ! </p>`;
        }
    }
    e.preventDefault();
});

//eamil validator

form1.addEventListener('submit', e => {

    alert1.innerHTML = '';
    if (email.value != '') {
        result = k.test(email.value);
        if (result == true) {
            alert1.innerHTML = `
            <p class="alert alert-success">
            ${email.value} is valid ! </p>`;
        }
        else {
            alert1.innerHTML = `
            <p class="alert alert-danger">
            ${email.value} is invalid email
                <b>ex- someone111@gamil.com </b>
                !</p> `;
        }
    }
    e.preventDefault();
});


//phone number validator 
form2.addEventListener('submit', e => {
    alert2.innerHTML = '';
    if (phone.value != '') {
        result = n.test(phone.value);
        result1 = n1.test(phone.value);
        result2 = n2.test(phone.value);
        result3 = n3.test(phone.value);
        result4 = n4.test(phone.value);
        result5 = r.test(phone.value);
        result6 = t.test(phone.value);
        result7 = t1.test(phone.value);
        result8 = a.test(phone.value);


        if (result1 == true) {
            alert2.innerHTML = `
            <p class="alert alert-success">
            ${phone.value} is valid ! <b>It's a Grameenphone number </b>
            <img src="./images/hp.png"style="height:100px"></p>
            `;
        }
        else if (result == true) {
            alert2.innerHTML = `
             <p class="alert alert-success">
             ${phone.value} is valid ! <b>It's a Grameenphone number (skitto)</b>
             <img src="./images/skitto.png" style="height:100px"></p>
             `;
        }

        else if (result2 == true || result3 == true) {
            alert2.innerHTML = `
             <p class="alert alert-success">
             ${phone.value} is valid ! <b>It's a Banglalink number </b>
             <img src="./images/bll.png" style="height:100px">
             </p>`;
        }

        else if (result4 == true) {
            alert2.innerHTML = `
              <p class="alert alert-success">
              ${phone.value} is valid ! <b>It's a Citycell number </b>
              <img src="./images/citycell.gif" style="height:100px">
              </p>`;
        }

        else if (result5 == true) {
            alert2.innerHTML = `
              <p class="alert alert-success">
              ${phone.value} is valid ! <b>It's a Robi number </b>
              <img src="./images/robi.png" style="height:100px">
              </p>`;
        }

        else if (result6 == true || result7 == true) {
            alert2.innerHTML = `
              <p class="alert alert-success">
              ${phone.value} is valid ! <b>It's a Teletalk number </b>
              <img src="./images/teletalk.png" style="height:100px">
              </p>`;
        }


        else if (result8 == true) {
            alert2.innerHTML = `
              <p class="alert alert-success">
              ${phone.value} is valid ! <b>It's a airtel number </b>
              <img src="./images/airtel.png" style="height:100px">
              </p>`;

        }
        else {
            alert2.innerHTML = `
            <p class="alert alert-danger">
            ${phone.value} is invalid phone number
                <b>ex- 8801724412345 </b>
                ! </p>`;
        }
    }
    e.preventDefault();
});
