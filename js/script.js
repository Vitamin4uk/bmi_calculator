let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");
// Height variables
let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");
// Display slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;
// Update sliders in real time while dragging it
weightSlider.oninput = function () {
    weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
    heightOutput.innerHTML = this.value;
}
// Change weight-slider value on weight-number input
function showValWeight(newVal) {
    weightSlider.value = newVal;
};
// Change height-slider value on height-number input
function showValHeight(newVal) {
    heightSlider.value = newVal;
};
// *** Change number input when dragging slider ***
// Add 2 eventListeners for weight and input sliders
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
    weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
    heightOutput.value = e.srcElement.value;
}
// Calculate BMI
function calculateBmi() {
    let weight = document.bmiForm.realweight.value;
    let height = (document.bmiForm.realheight.value) / 100;
    let realbmi = (weight) / Math.pow(height, 2);
    let realbmiOutput = document.getElementById("yourbmi");
    let messageOutput = document.getElementById("evaluationMessage");
    let roundedBmi = realbmi.toFixed(1);
    messageOutput.innerHTML = ""; // Clear message before calculating new BMI
    realbmiOutput.innerHTML = " " + roundedBmi; // Print BMI
    // Appropriate message for your BMI rating
    if (roundedBmi > 26) {
        messageOutput.innerHTML = "<br>Start workout";
    }
}