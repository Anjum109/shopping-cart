function getTextElementValueById(elementId) {

    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalSytring = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalSytring);
    return currentPhoneTotal;
}

function setTextElementvalueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}


function calculateSubtotal() {
    //calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementvalueById('sub-total', currentSubTotal);

    //calculate tax

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementvalueById('tax-amount', taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementvalueById('final-total', finalAmount);

}

