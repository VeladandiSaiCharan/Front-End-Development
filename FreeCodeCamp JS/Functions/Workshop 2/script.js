var minIncomeForDuplex = 60000;
var minCreditScoreForDuplex = 700;
var minIncomeForCondo = 45000;
var minCreditScoreForCondo = 680;
var minIncomeForCar = 30000;
var minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
        return "You qualify for a duplex, condo, and car loan.";
    } 
    else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan."
    }
    else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan."
    }
    else {
        return "You don't qualify for any loans.";
    }
}

var duplexLoanMsg = getLoanMessage(85000, 850);
var condoLoanMsg = getLoanMessage(65000, 690);
var carLoanMsg = getLoanMessage(45000, 660);
var noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);