const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b === 0 ? "Cannot divide by zero" : a / b
};

function cal(x, y, operation) {
    if (!operations[operation]) return "Invalid operation";
    return operations[operation](x, y);
}

function takeInput() {
    let val1 = Number(document.getElementById("userInput1").value);
    let val2 = Number(document.getElementById("userInput2").value);
    let operation = document.getElementById("operator").value;

    if (isNaN(val1) || isNaN(val2)) {
        document.getElementById("result").textContent = "Invalid input";
        return;
    }

    let result = cal(val1, val2, operation);
    document.getElementById("result").textContent = "Result: " + result;
}
document.getElementById("userInput1").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("userInput2").focus();
    }
});

document.getElementById("userInput2").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("operator").focus();
    }
});

document.getElementById("operator").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        takeInput();
    }
});

document.getElementById("calculateBtn").addEventListener("click", takeInput);

document.getElementById("clearBtn").addEventListener("click", clearAll);

function clearAll() {
    document.getElementById("userInput1").value = "";
    document.getElementById("userInput2").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result").textContent = "";

    document.getElementById("userInput1").focus(); // reset UX
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Delete") {
        clearAll();
    }
});

function showError(message) {
    let result = document.getElementById("result");
    result.textContent = message;

    setTimeout(() => {
        result.textContent = "";
    }, 2000);
} 