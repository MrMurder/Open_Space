const password = "TrustNo1";
let checkBoxes = document.querySelectorAll("input[type=checkbox]");
let levers = document.querySelectorAll("input[type=range]");
let checkboxesReady = false;
let leversReady = false;

document.getElementById("ok-button").addEventListener("click", function () {
    if (document.getElementById("pass-field").value === password) {
        enableCheckboxes();
        enableLevers();
        document.getElementById("pass-field").disabled = true;
        document.getElementById("ok-button").disabled = true;
    }
});


function enableCheckboxes() {
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].disabled = false;
    }
}

function enableLevers() {
    for (let i = 0; i < levers.length; i++) {
        levers[i].disabled = false;
    }
}

function isAllChecked() {
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked !== true) {
            checkboxesReady = false;
            break;
        } else {
            checkboxesReady = true;
        }
    }
    checkLaunch();
}

function isRangesMax() {
    for (let i = 0; i < levers.length; i++) {
        if (levers[i].value < 100) {
            leversReady = false;
            break;
        } else {
            leversReady = true;
        }
    }
    checkLaunch();
}

function checkLaunch() {
    document.getElementById("launch-btn").disabled = !(checkboxesReady && leversReady);
}

function launchRocket() {
    let rocket = document.getElementById("rocket").animate([
            {transform: "translate(250px, -500px)"}
        ], {
            duration: 2000,
            iterations: 1
        }
    );

}