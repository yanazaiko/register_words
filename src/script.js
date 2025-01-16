var inputText = document.getElementById("inputText");
var processButton = document.getElementById("processButton");
var outputDiv = document.getElementById("output");
var capitalizeWords = function (text) {
    return text
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(" ");
};
processButton.addEventListener("click", function () {
    if (inputText.value.trim() === "") {
        outputDiv.textContent = "Введіть речення ";
        return;
    }
    console.log(inputText.value);
    debugger;
    var capitalizedText = capitalizeWords(inputText.value);
    outputDiv.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(capitalizedText);
});
