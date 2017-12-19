var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// **************
// Find your case
//
router.post('/find-your-case', function (req, res) {

    var referenceNumber = req.session.data['reference-number'];
    var yourPostCode = req.session.data['your-postcode'];

    if (referenceNumber === "") {
        res.redirect ('/find-your-case-error');
    } else if (yourPostCode === "") {
        res.redirect ('/find-your-case-error');
    } else {
        req.session.data ['first-name'] = "Sam";
        req.session.data ['last-name'] = "Smith";
        req.session.data ['address-line-1'] = "38A Baker Street";
        req.session.data ['address-line-2'] = "";
        req.session.data ['address-line-3'] = "";
        req.session.data ['town-or-city'] = "London";
        req.session.data ['county'] = "";
        req.session.data ['post-code'] = "W1 7SX";

        res.redirect ('/your-details');
    }
    
})

// *************************
// Find your case error page
//
router.post('/find-your-case-error', function (req, res) {

    var referenceNumber = req.session.data['reference-number'];
    var yourPostCode = req.session.data['your-postcode'];

    if (referenceNumber === "") {
        res.redirect ('/find-your-case-error');
    } else if (yourPostCode === "") {
        res.redirect ('/find-your-case-error');
    } else {
        req.session.data ['first-name'] = "Sam";
        req.session.data ['last-name'] = "Smith";
        req.session.data ['address-line-1'] = "38A Baker Street";
        req.session.data ['address-line-2'] = "";
        req.session.data ['address-line-3'] = "";
        req.session.data ['town-or-city'] = "London";
        req.session.data ['county'] = "";
        req.session.data ['post-code'] = "W1 7SX";

        res.redirect ('/your-details');
    }

})
   








// ************
// Your details
//
router.post('/your-details', function (req, res) {

    //var nameAddressGroup = req.session.data ['name-address-group'];
    var emailAddress = req.session.data['email'];
    //var dobDay = req.session.data['dob-day'];
    //var dobMonth = req.session.data['dob-month'];
    //var dobYear = req.session.data['dob-year'];
    
    if (emailAddress == "") {
        res.redirect('/your-details-error')
    } else {
        res.redirect('/your-plea')
    }

})

// ***********************
// Your details error page
//
router.post('/your-details-error', function (req, res) {

    //var nameAddressGroup = req.session.data ['name-address-group'];
    var emailAddress = req.session.data['email'];
    //var dobDay = req.session.data['dob-day'];
    //var dobMonth = req.session.data['dob-month'];
    //var dobYear = req.session.data['dob-year'];
    
    if (emailAddress == "") {
        res.redirect('/your-details-error')
    } else {
        res.redirect('/your-plea')
    }

})









// **********
// Your plea
//
router.post('/your-plea', function (req, res) {
    
  var howDoYouPlea = req.session.data['how-do-you-plea']
  var pleaValidation = ""
  
  if (howDoYouPlea == "0") {
      pleaValidation = "1"
  } else {
      pleaValidation = "0"
  }

  if (pleaValidation == "1") {
    res.redirect('/your-plea-error')
  } else if (howDoYouPlea == "1" && pleaValidation == "0"){
    req.session.data['how-do-you-plea'] = "Guilty";
    res.redirect('/guilty-plea')
  } else if (howDoYouPlea == "2" && pleaValidation == "0") {
    req.session.data['how-do-you-plea'] = "Not guilty";
    res.redirect('/not-guilty-plea')
  } else {
      res.redirect('/your-plea-error')
  }

})

// ********************
// Your plea error page
//
router.post('/your-plea-error', function (req, res) {

  var howDoYouPlea = req.session.data['how-do-you-plea']
  var pleaValidation = ""
  
  if (howDoYouPlea == "0") {
      pleaValidation = "1"
  } else {
      pleaValidation = "0"
  }

  if (pleaValidation == "1") {
    res.redirect('/your-plea-error')
  } else if (howDoYouPlea == "1" && pleaValidation == "0"){
    req.session.data['how-do-you-plea'] = "Guilty";
    res.redirect('/guilty-plea')
  } else if (howDoYouPlea == "2" && pleaValidation == "0") {
    req.session.data['how-do-you-plea'] = "Not guilty";
    res.redirect('/not-guilty-plea')
  } else {
      res.redirect('/your-plea-error')
  }

})









// ***********
// Guilty plea
//
router.post('/guilty-plea', function (req, res) {
    
    var guiltyComeToCourt = req.session.data['guilty-come-to-court']
    
    if (guiltyComeToCourt == "1"){
        req.session.data['guilty-come-to-court'] = "No";
        res.redirect('/your-finances')
    } else if (guiltyComeToCourt == "2") {
        req.session.data['guilty-come-to-court'] = "Yes";
        res.redirect('/your-court-hearing')
    } else {
        res.redirect('guilty-plea-error')
    }

})

// **********************
// Guilty plea error page
//
router.post('/guilty-plea-error', function (req, res) {
    
    var guiltyComeToCourt = req.session.data['guilty-come-to-court']
    
    if (guiltyComeToCourt == "1"){
        req.session.data['guilty-come-to-court'] = "No";
        res.redirect('/your-finances')
    } else if (guiltyComeToCourt == "2") {
        req.session.data['guilty-come-to-court'] = "Yes";
        res.redirect('/your-court-hearing')
    } else {
        res.redirect('guilty-plea-error')
    }

})









// ******************
// Your court hearing
//
router.post('/your-court-hearing', function (req, res) {
        
    if (req.session.data['interpreter-required'] == "1") {
        req.session.data['interpreter-required'] = "Yes";
        if (req.session.data['interpreter-language'] == "") {
            res.redirect('/your-court-hearing-error-2')
        }
        req.session.data['interpreter-language'] = "- " + req.session.data['interpreter-language'];
        res.redirect('/your-finances')
    } else if (req.session.data['interpreter-required'] == "2") {
        req.session.data['interpreter-required'] = "No";
        res.redirect('/your-finances')
    } else {
        res.redirect('/your-court-hearing-error')
    }
    
})

// *****************************
// Your court hearing error page
//
router.post('/your-court-hearing-error', function (req, res) {
        
    if (req.session.data['interpreter-required'] == "1") {
        req.session.data['interpreter-required'] = "Yes";
        if (req.session.data['interpreter-language'] == "") {
            res.redirect('/your-court-hearing-error-2')
        }
        req.session.data['interpreter-language'] = "- " + req.session.data['interpreter-language'];
        res.redirect('/your-finances')
    } else if (req.session.data['interpreter-required'] == "2") {
        req.session.data['interpreter-required'] = "No";
        res.redirect('/your-finances')
    } else {
        res.redirect('/your-court-hearing-error')
    }
    
})

// ************************££*****
// Your court hearing error page 2
//
router.post('/your-court-hearing-error-2', function (req, res) {
        
    if (req.session.data['interpreter-required'] == "1") {
        req.session.data['interpreter-required'] = "Yes";
        if (req.session.data['interpreter-language'] == "") {
            res.redirect('/your-court-hearing-error-2')
        }
        req.session.data['interpreter-language'] = "- " + req.session.data['interpreter-language'];
        res.redirect('/your-finances')
    } else if (req.session.data['interpreter-required'] == "2") {
        req.session.data['interpreter-required'] = "No";
        res.redirect('/your-finances')
    } else {
        res.redirect('/your-court-hearing-error')
    }
    
})









// ***************
// Not guilty plea
//
router.post('/not-guilty-plea', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    // **************************
    // Radio buttons setting data
    //
    // Interpreter required?
    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    // Do you agree with the witness statement?
    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    // Enter the name of the witness and what you disagree with
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    // Are there any dates you can’t attend court?
    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  

    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error')
    } else {
        res.redirect('/your-finances')
    }
    
})

// **************************
// Not guilty plea error page
//
router.post('/not-guilty-plea-error', function (req, res) {
    
    req.session.data['how-do-you-plea-2'] = "Yes - there will be a court hearing when pleading not guilty";
    
    // **************************
    // Radio buttons setting data
    //
    // Interpreter required?
    if (req.session.data['interpreter-required'] == "1") {
            req.session.data['interpreter-required'] = "Yes"
    }
    if (req.session.data['interpreter-required'] == "2") {
            req.session.data['interpreter-required'] = "No"
    }

    // Do you agree with the witness statement?
    if (req.session.data['witness-statement-group'] == "1") {
            req.session.data['witness-statement-group'] = "Yes"
    }  
    if (req.session.data['witness-statement-group'] == "2") {
            req.session.data['witness-statement-group'] = "No"
    }
    
    // Enter the name of the witness and what you disagree with
    if (req.session.data['own-witness-group'] == "1") {
            req.session.data['own-witness-group'] = "Yes"
    }  
    if (req.session.data['own-witness-group'] == "2") {
            req.session.data['own-witness-group'] = "No"
    }  

    // Are there any dates you can’t attend court?
    if (req.session.data['nogo-dates-group'] == "1") {
            req.session.data['nogo-dates-group'] = "Yes"
    }  
    if (req.session.data['nogo-dates-group'] == "2") {
            req.session.data['nogo-dates-group'] = "No"
    }  

    if (req.session.data['mitigation-textarea'] == "") {
        res.redirect('/not-guilty-plea-error')
    } else {
        res.redirect('/your-finances')
    }

})










// ***********
// Your income
//
router.post('/your-income', function (req, res) {

    //var frequencyGroup = req.session.data['frequency-group'];
    var averageIncome = req.session.data['average-income']
    var employmentStatus = req.session.data['employment-status-group'];
    //var benefitsStatus = req.session.data['claiming-benefits-group'];
    //var benefitsClaimed = req.session.data['benefits-claimed'];\\
    
    if ((averageIncome != "") && (employmentStatus == "1")) {
        res.redirect('/deductions-from-earnings')
    } else if (averageIncome == "") {
        res.redirect('/your-income-error')
    } else {
        res.redirect('/your-outgoings')
    }
    
    /*
    if (averageIncome == "") {
        res.redirect('/your-income-error')
    } else if (employmentStatus == 1) {
        res.redirect('/deductions-from-earnings')
    } else {
        res.redirect('/your-outgoings')
    }
    */

    /* *************
    /* *************
    /* *************
    /* *************
    /* *************
    /* *************
    if (req.session.data['frequency-group'] !== "1") {
        if (req.session.data['frequency-group'] !== "2") {
            if (req.session.data['frequency-group'] !== "3") {
                res.redirect('/your-income-error')
            }
        }
    }

    if (employmentStatus == "1") {
        req.session.data['employment-status-group'] = "Employed (full or part-time)"
        res.redirect('/deductions-from-earnings')
    } else if (employmentStatus == "2") {
         req.session.data['employment-status-group'] = "Self-employed"
   } if (employmentStatus == "3") {
        req.session.data['employment-status-group'] = "Unemployed"
    } if (employmentStatus == "4") {
        req.session.data['employment-status-group'] = "Other"
        req.session.data['other-employment-status'] = "- " + req.session.data['other-employment-status']
    }

    if (benefitsStatus == "1") {
        req.session.data['claiming-benefits-group'] = "Yes"
        req.session.data['benefits-claimed'] = "- " + req.session.data['benefits-claimed']
        res.redirect('/your-benefits')
    } else if (benefitsStatus == "2") {
        req.session.data['claiming-benefits-group'] = "No"
    }
    
    res.redirect('/your-outgoings')
    ************** *
    ************** *
    ************** *
    ************** */


})

// **********************
// Your income error page
//
router.post('/your-income-error', function (req, res) {
    
    //var frequencyGroup = req.session.data['frequency-group'];
    var averageIncome = req.session.data['average-income']
    var employmentStatus = req.session.data['employment-status-group'];
    //var benefitsStatus = req.session.data['claiming-benefits-group'];
    //var benefitsClaimed = req.session.data['benefits-claimed'];
  
    if ((averageIncome != "") && (employmentStatus == "1")) {
        res.redirect('/deductions-from-earnings')
    } else if (averageIncome == "") {
        res.redirect('/your-income-error')
    } else {
        res.redirect('/your-outgoings')
    }

})









// ************************
// Deductions from earnings
//
router.post('/deductions-from-earnings', function (req, res) {

    var deductFromYourEarnings = req.session.data['deduct-from-earnings-group']
    var benefitsStatus = req.session.data['claiming-benefits-group']

    if (deductFromYourEarnings == "1"){
        req.session.data['deduct-from-earnings-group'] = "Yes"
        res.redirect('/your-employment')
    } else if ((deductFromYourEarnings == "2") && (benefitsStatus == "1")) {
        req.session.data['deduct-from-earnings-group'] = "No"
        res.redirect('/your-benefits')
    } else if ((deductFromYourEarnings == "2") && (benefitsStatus == "2")) {
        req.session.data['deduct-from-earnings-group'] = "No"
        res.redirect('/your-outgoings')
    } else {
        res.redirect('/deductions-from-earnings-error')
    }

})

// ***********************************
// Deductions from earnings error page
//
router.post('/deductions-from-earnings-error', function (req, res) {
    
    var deductFromYourEarnings = req.session.data['deduct-from-earnings-group']
    var benefitsStatus = req.session.data['claiming-benefits-group']

    if (deductFromYourEarnings == "1"){
        req.session.data['deduct-from-earnings-group'] = "Yes"
        res.redirect('/your-employment')
    } else if ((deductFromYourEarnings == "2") && (benefitsStatus == "1")) {
        req.session.data['deduct-from-earnings-group'] = "No"
        res.redirect('/your-benefits')
    } else if ((deductFromYourEarnings == "2") && (benefitsStatus == "2")) {
        req.session.data['deduct-from-earnings-group'] = "No"
        res.redirect('/your-outgoings')
    } else {
        res.redirect('/deductions-from-earnings-error')
    }

})








// ***************
// Your employment
//
router.post('/your-employment', function (req, res) {

    var employerName = req.session.data['employer-name']
    var benefitsStatus = req.session.data['claiming-benefits-group']

    if (employerName == ""){
        res.redirect('/your-employment-error')
    } else if (benefitsStatus == "1") {
        res.redirect('/your-benefits')
    } else {
        res.redirect('/your-outgoings')
    }
    
})

// **************************
// Your employment error page
//
router.post('/your-employment-error', function (req, res) {
    
    var employerName = req.session.data['employer-name']
    var benefitsStatus = req.session.data['claiming-benefits-group']

    if (employerName == ""){
        res.redirect('/your-employment-error')
    } else if (benefitsStatus == "1") {
        res.redirect('/your-benefits')
    } else {
        res.redirect('/your-outgoings')
    }

})











// ***************
// Your benefits
//
router.post('/your-benefits', function (req, res) {
    
    var deductFromBenefitsGroup = req.session.data['deduct-from-benefits-group']

    if (deductFromBenefitsGroup == "1"){
        req.session.data['deduct-from-benefits-group'] = "Yes"
        res.redirect('/your-outgoings')
    } else if (deductFromBenefitsGroup == "2") {
        req.session.data['deduct-from-benefits-group'] = "No"
        res.redirect('/your-outgoings')
    } else {
        res.redirect('/your-benefits-error')
    }

})

// ************************
// Your benefits error page
//
router.post('/your-benefits-error', function (req, res) {
    
    var deductFromBenefitsGroup = req.session.data['deduct-from-benefits-group']

    if (deductFromBenefitsGroup == "1"){
        req.session.data['deduct-from-benefits-group'] = "Yes"
        res.redirect('/your-outgoings')
    } else if (deductFromBenefitsGroup == "2") {
        req.session.data['deduct-from-benefits-group'] = "No"
        res.redirect('/your-outgoings')
    } else {
        res.redirect('/your-benefits-error')
    }

})










// **************
// Your outgoings
//
router.post('/your-outgoings', function (req, res) {
    
    var yourOutgoings = req.session.data['your-outgoings-group']

    if (yourOutgoings == "1") {
        req.session.data['your-outgoings-group'] = "Yes"
        res.redirect('/your-outgoings-details')
    } else if (yourOutgoings == "2") {
        req.session.data['your-outgoings-group'] = "No"
        res.redirect('/check-your-answers')
    } else {
        res.redirect('/your-outgoings-error')
    }
    
})

// *************************
// Your outgoings error page
//
router.post('/your-outgoings-error', function (req, res) {
    
    var yourOutgoings = req.session.data['your-outgoings-group']

    if (yourOutgoings == "1") {
        req.session.data['your-outgoings-group'] = "Yes"
        res.redirect('/your-outgoings-details')
    } else if (yourOutgoings == "2") {
        req.session.data['your-outgoings-group'] = "No"
        res.redirect('/check-your-answers')
    } else {
        res.redirect('/your-outgoings-error')
    }
    
})








// **********************
// Your outgoings details
//
router.post('/your-outgoings-details', function (req, res) {
      
    var accomodationTotal = parseInt(req.session.data['accomodation'])
    var councilTaxTotal = parseInt(req.session.data['council-tax'])
    var houseHoldBillsTotal = parseInt(req.session.data['household-bills'])
    var travelExpensesTotal = parseInt(req.session.data['travel-expeneses'])
    var childMaintenanceTotal = parseInt(req.session.data['child-maintenance'])
    var otherExpensesTotal = parseInt(req.session.data['other-expenses-amount'])
    
    if (accomodationTotal != accomodationTotal) {
        accomodationTotal = 0;
    }
    if (councilTaxTotal != councilTaxTotal) {
        councilTaxTotal = 0;
    }
    if (houseHoldBillsTotal != houseHoldBillsTotal) {
        houseHoldBillsTotal = 0;
    }
    if (travelExpensesTotal != travelExpensesTotal) {
        travelExpensesTotal = 0;
    }
    if (childMaintenanceTotal != childMaintenanceTotal) {
        childMaintenanceTotal = 0;
    }
    if (otherExpensesTotal != otherExpensesTotal) {
        otherExpensesTotal = 0;
    }

    if (req.session.data['other-expenses-list'] !== "") {
        req.session.data['other-expenses-list'] = " including: " + req.session.data['other-expenses-list']
    }
    
    req.session.data['benefits-total'] = accomodationTotal + councilTaxTotal + houseHoldBillsTotal + travelExpensesTotal + childMaintenanceTotal + otherExpensesTotal;
    
    if (req.session.data['benefits-total'] == "0") {
        req.session.data['benefits-total'] = "0 - you didn't specify any outgoings"
    }
    
    res.redirect('/check-your-answers')
    
})








// ******************
// Check your answers
//







// ***********
// Declaration
//
router.post('/declaration', function (req, res) {

  var declarationTicked = req.session.data['confirmation-group']

  if (declarationTicked == "1"){
    res.redirect('/confirmation')
  } else {
      res.redirect('/declaration-error')
  }

})

// **********************
// Declaration error page
//
router.post('/declaration-error', function (req, res) {

  var declarationTicked = req.session.data['confirmation-group']

  if (declarationTicked == "1"){
    res.redirect('/confirmation')
  } else {
      res.redirect('/declaration-error')
  }

})