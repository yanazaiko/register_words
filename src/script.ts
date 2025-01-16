
const inputText = document.getElementById("inputText") as HTMLTextAreaElement;
const processButton = document.getElementById("processButton") as HTMLButtonElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;


const capitalizeWords = (text: string): string => {
    return text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}


processButton.addEventListener("click", () => {
    if (inputText.value.trim() === "") {
        outputDiv.textContent = "Введіть речення ";
        return;
    }

    const capitalizedText = capitalizeWords(inputText.value);
    outputDiv.textContent = `Результат: ${capitalizedText}`;
});
