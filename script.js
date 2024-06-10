
let form = document.getElementById("form");

        function clicked(event) {
            event.preventDefault();

            let userInfo = document.getElementById("userInfo");
            let firstName = document.getElementById("firstName").value;
            let age = document.getElementById("age").value;
            let gender = document.getElementById("gender").value;
            let order = document.getElementById("oredr").value;
            let radio;

            if (document.getElementById("cold").checked) {
                radio = document.getElementById("cold").value;
            } else {
                radio = document.getElementById("hot").value;
            }

            userInfo.innerHTML = 
                "My First name is: " + firstName + "<br><br>" +
                "My Age is: " + age + "<br><br>" +
                "My Gender is: " + gender + "<br><br>" +
                "My Order is: " + order + "<br><br>" +
                "My Drink is : " + radio;
        }

        form.addEventListener("submit", clicked);