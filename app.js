function convertToUpper() {
    let myInput = document.getElementById('inputText').value;
    if (myInput == "") {
        alert("Please Enter a text");
    } else {
        document.getElementById('result').innerText = myInput.toUpperCase();
    }
}

function convertToLower() {
    let myInput = document.getElementById('inputText').value;
    if (myInput == "") {
        alert("Please Enter a text");
    } else {
        document.getElementById('result').innerText = myInput.toLowerCase();
    }
}

function clearText() {
    let myInput = document.getElementById("inputText").value;

    if (myInput == "") {
        alert("Text Field is already Cleared");
        document.getElementById('countword').innerText += "0";
        document.getElementById('countchar').innerText += "0";
    } else {
        document.getElementById("inputText").value = "";
        if (document.getElementById("result").innerText != "Result") {
            document.getElementById("result").innerText = "Result";
        }

    }
}

function copyText() {
    let myInput = document.getElementById("inputText").value;

    if (myInput == "") {
        alert("Input filled is blank")
    } else {
        navigator.clipboard.writeText(myInput).then(() => {
            alert("text copied")
        }, () => {
            alert('Failed to copy');

        });

    }

}
function removeSpace() {
    let myInput = document.getElementById("inputText").value;

    if (myInput == "") {
        alert("Input filled is blank")
    } else {


        let str = document.getElementById("inputText").value;
        let newStr = str.replace(/\s/g, "");

        document.getElementById("result").innerText = newStr;
    }
}
function details() {
    let str = document.getElementById("inputText").value;
    if (str == "") {
        document.getElementById('countword').innerText = "Number of Words:0";
        document.getElementById('countchar').innerText = "Number of Characters:0";
    } else {
        let words = str.split(" ");
        let numWords = words.length;
        let numChars = str.length;
        document.getElementById('countword').innerText = "Number of Words:" + numWords;
        document.getElementById('countchar').innerText = "Number of Characters:" + numChars;
    }



}