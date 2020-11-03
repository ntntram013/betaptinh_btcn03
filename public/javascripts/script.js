

    function ErrorInput() {
        let num1 = document.getElementById("number1");
        let num2 = document.getElementById("number2");
        let noti = document.getElementById("noti");
        let notiTempt = "";
        let check = false;
        if (isNaN(num1.value)) {
            notiTempt += "Giá trị nhập vào ở ô <i>Số thứ nhất</i> không phải là số <br>";
            check = true;
        }
        if (isNaN(num2.value)) {
            notiTempt += "Giá trị nhập vào ở ô <i>Số thứ hai</i> không phải là số <br>";
            check = true;
        }
        if (check === false) {
            noti.innerHTML = "";
        } else {
            noti.innerHTML = notiTempt;
        }
        return check;
    }


    function GetOperator() {
        let operator = document.getElementsByName("operatorRadios");
        for (i = 0; i < operator.length; i++) {
            if (operator[i].checked) {
                return (operator[i].value);
            }
        }
        return ("none");
    }

    function CheckB4Calculate() {

        let opt = GetOperator();
        let num1 = document.getElementById("number1");
        let num2 = document.getElementById("number2");
        let noti = document.getElementById("noti");

        noti.innerHTML = "";
        let notiTempt = "";
        let check = true;
        if (num1.value.length === 0) {
            check = false;
            notiTempt += "Giá trị ở ô Số thứ nhất rỗng <br>";
        }
        if (num2.value.length === 0) {
            check = false;
            notiTempt += "Giá trị ở ô Số thứ hai rỗng <br>";
        }
        if (isNaN(num1.value) || isNaN(num2.value)) {
            check = false;
            ErrorInput();
        }
        if (opt === "none") {
            check = false;
            notiTempt += "Chưa chọn phép tính";
        }
        else{
            if(num2.value === "0"){
                check = false;
                notiTempt += "Số bị chia phải khác 0";
            }
        }

        if (check === false) {
            noti.innerHTML = noti.innerHTML + notiTempt;

        } else {
            noti.innerHTML = "";
        }

        return check;
    }



