window.addEventListener('DOMContentLoaded', (event)=> {
const value21Input = document.getElementById('value21');
const value20Input = document.getElementById('value20');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const resultElement = document.getElementById('result');
const boxResultatElement = document.getElementById('box-result');
const calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener('click', calculateTotal);

function calculateTotal(event) {
    event.preventDefault();
    let total = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseInt(checkbox.value);
        }
    });

    resultElement.textContent = total;

const numSellers = parseInt(value21Input.value)
const totalEarnings = parseInt(value20Input.value)

if (numSellers > 0 && totalEarnings > 0) {
    const boxPerPerson = totalEarnings / (total * numSellers);
    boxResultatElement.textContent = boxPerPerson.toFixed(2);
}
}
calculateTotal();
});
