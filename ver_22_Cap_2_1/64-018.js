// //It is static  row in Drupal. 

// <input type="text" name="CAP5_R500_C8" id="CAP5_R500_C8" field="CAP5_R500_C8" class="table number autofield float error" maxlength="20" decimal_length="1" value="4.0">

// //It is dynamic row in Drupal.
// //He can be the first row, the second, and so on.
// <input type="text" name="CAP5_R_C8[1]" id="CAP5_R_C8-1" field="CAP5_R_C8" class="table number float" maxlength="100" decimal_length="1" value="" row-index="1">

// <input type="text" name="CAP5_R_C8[2]" id="CAP5_R_C8-2" field="CAP5_R_C8" class="table number float" maxlength="100" decimal_length="1" value="" row-index="2">
    
//              I need to calculate the sum of the dynamic rows on column C8. 
//             I wrote this code

//             // Start 64-018
//             var sumCol1 = 0;

//             for (var m = 0; m < 1000; m++) {
//           if (!isNaN(Number(values["CAP5_R_C8[" + m + "]"]))) {
//                 sumCol1 += Number(values["CAP5_R_C8[" + m + "]"]);
//         }
//     }

//             if (!isNaN(Number(values["CAP5_R500_C8"]))) {
//         var col1 = Number(values["CAP5_R500_C8"]);
//     }

//             if (col1 !== sumCol1) {
//                 webform.errors.push({
//                     'fieldName': 'CAP5_R500_C8',
//                     'weight': 1,
//                     'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
//                 });
//     }

// }
// // End 64-018


// But sumCol1 is always 0


//             XPath dec/DataSet/Data/CAP5_R[line]/CAP5_R_C8


//             What's wrong ?

// Answer 




// Start 64-018
            var sumCol1 = 0;
            var rowCount = 0;

            // Loop through all input elements with name starting with "CAP5_R_C8"
            jQuery("input[name^='CAP5_R_C8']").each(function () {
    // Get the value of the input element and parse it as a float
    var value = parseFloat(jQuery(this).val());
            if (!isNaN(value)) {
                // If the value is a valid number, add it to the sum and increment the row count
                sumCol1 += value;
            rowCount++;
    }
});

if (rowCount > 0) {
    // If there are any dynamic rows, compare the sum to the static row
    var col1 = parseFloat(jQuery("#CAP5_R500_C8").val());
            if (!isNaN(col1) && col1 !== sumCol1) {
                webform.errors.push({
                    'fieldName': 'CAP5_R500_C8',
                    'weight': 1,
                    'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
                });
    }
}
// End 64-018



//------------------------------------------------------------------------------
//In this code 
// Start 64-018
var sumCol1 = 0;

// Initialize the values object with the form field values
var values = {};
var inputs = document.getElementsByName("CAP5_R_C8[]");
for (var i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
}
values["CAP5_R500_C8"] = document.getElementById("CAP5_R500_C8").value;

for (var m = 0; m < 1000; m++) {
    if (!isNaN(Number(values["CAP5_R_C8[" + m + "]"]))) {
        sumCol1 += Number(values["CAP5_R_C8[" + m + "]"]);
    }
}

if (!isNaN(Number(values["CAP5_R500_C8"]))) {
    var col1 = Number(values["CAP5_R500_C8"]);
}

if (col1 !== sumCol1) {
    webform.errors.push({
        'fieldName': 'CAP5_R500_C8',
        'weight': 1,
        'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
    });
}

// End 64-018



// When I have value in input CAP5_R500_C8 = 5 and in CAP5_R_C8[1] = 5
// Appear this mesaj  Tabel 5 Rînd. 500 col.1 - Cod eroare: 64-018 CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = 5, sumCol1 = 0


//

//In this code 

// Start 64-018
var sumCol1 = 0;

// Initialize the values object with the form field values
var values = {};
var inputs = document.getElementsByName("CAP5_R_C8[]");
for (var i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
}
values["CAP5_R500_C8"] = document.getElementById("CAP5_R500_C8").value;

for (var m = 0; m < 1000; m++) {
    if (!isNaN(Number(values["CAP5_R_C8[" + m + "]"]))) {
        sumCol1 += Number(values["CAP5_R_C8[" + m + "]"]);
    }
}

if (!isNaN(Number(values["CAP5_R500_C8"]))) {
    var col1 = Number(values["CAP5_R500_C8"]);
}

if (col1 !== sumCol1) {
    webform.errors.push({
        'fieldName': 'CAP5_R500_C8',
        'weight': 1,
        'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
    });
}

// End 64-018



// When I have value in input CAP5_R500_C8 = 5 and in CAP5_R_C8[1] = 5
// Appear this mesaj  Tabel 5 Rînd. 500 col.1 - Cod eroare: 64-018 CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = 5, sumCol1 = 0

// Next answer

// When I have value in input CAP5_R500_C8 = 5 and in CAP5_R_C8[1] = 5
////This code show this -- Tabel 5 Rînd. 500 col.1 - Cod eroare: 64-018 CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = 4, sumCol1 = 0


// Start 64-018
var sumCol1 = 0;

// Initialize the values object with the form field values
var values = {};
var inputs = document.getElementsByName("CAP5_R_C8[]");
for (var i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
}
values["CAP5_R500_C8"] = document.getElementById("CAP5_R500_C8").value;

for (var m = 1; m <= inputs.length; m++) {
    if (!isNaN(Number(values["CAP5_R_C8[" + m + "]"]))) {
        sumCol1 += Number(values["CAP5_R_C8[" + m + "]"]);
    }
}

if (!isNaN(Number(values["CAP5_R500_C8"]))) {
    var col1 = Number(values["CAP5_R500_C8"]);
}

if (col1 !== sumCol1) {
    webform.errors.push({
        'fieldName': 'CAP5_R500_C8',
        'weight': 1,
        'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
    });
}

// End 64-018




//Next 

// Start 64-018
var sumCol1 = 0;

// Initialize the values object with the form field values
var values = {};
var inputs = document.getElementsByName("CAP5_R_C8[]");
for (var i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
}
values["CAP5_R500_C8"] = document.getElementById("CAP5_R500_C8").value;

for (var m = 0; m < inputs.length; m++) {
    if (!isNaN(Number(values["CAP5_R_C8[" + m + "]"]))) {
        sumCol1 += Number(values["CAP5_R_C8[" + m + "]"]);
    }
}

if (!isNaN(Number(values["CAP5_R500_C8"]))) {
    var col1 = Number(values["CAP5_R500_C8"]);
}

if (col1 !== sumCol1) {
    webform.errors.push({
        'fieldName': 'CAP5_R500_C8',
        'weight': 1,
        'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
    });
}

// End 64-018


//

// Now in CAP5_R_C8[1] --  I have 60.0
// in CAP5_R_C8[2]  -- I  have 6.0

// In CAP5_R500_C8 I have 66.0

//But this code 

// Start 64-018
var sumCol1 = 0;

// Initialize the values object with the form field values
var values = {};
var inputs = document.getElementsByName("CAP5_R_C8[]");
for (var i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
}
values["CAP5_R500_C8"] = document.getElementById("CAP5_R500_C8").value;

for (var m = 0; m < inputs.length; m++) {
    if (!isNaN(Number(values["CAP5_R_C8[" + m + "]"]))) {
        sumCol1 += Number(values["CAP5_R_C8[" + m + "]"]);
    }
}

if (!isNaN(Number(values["CAP5_R500_C8"]))) {
    var col1 = Number(values["CAP5_R500_C8"]);
}

if (col1 !== sumCol1) {
    webform.errors.push({
        'fieldName': 'CAP5_R500_C8',
        'weight': 1,
        'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
    });
}

// End 64-018


//Show me

//Tabel 5 Rînd. 500 col.1 - Cod eroare: 64 - 018 CAP.5[r.500] =[r.510] + [r.511] + [r.512] + ... pentru CO1.col1 = 66, sumCol1 = 0

//The error message should not appear because it is not the error
// CAP5_R_C8[1] --  I have 60.0  +   CAP5_R_C8[2] --  I have 6.0 = 66
//And col1 == sumCol1
//error appear when col1 !== sumCol1

//Cod not work corectlly
//


// No When  of col1 and sumCol1 are the not  same.

//Next answer
//This code show
//Tabel 5 Rînd. 500 col.1 - Cod eroare: 64-018 CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = 66, sumCol1 = 0
// Again 
// Start 64-018
var sumCol1 = 0;
var inputs = document.getElementsByName("CAP5_R_C8[]");

// Iterate over the input fields and sum their values
for (var i = 0; i < inputs.length; i++) {
    if (!isNaN(Number(inputs[i].value))) {
        sumCol1 += Number(inputs[i].value);
    }
}

// Get the value of CAP5_R500_C8 input field
var col1 = Number(document.getElementById("CAP5_R500_C8").value);

// Check if the sum of CAP5_R_C8 inputs is equal to CAP5_R500_C8 input
if (col1 !== sumCol1) {
    webform.errors.push({
        'fieldName': 'CAP5_R500_C8',
        'weight': 1,
        'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
    });
}
// End 64-018



//But this code work 

//     // Start 64-018

var sumCol1 = 0;
var rowCount = 0;

// Loop through all input elements with name starting with "CAP5_R_C8"
jQuery("input[name^='CAP5_R_C8']").each(function () {
    // Get the value of the input element and parse it as a float
    var value = parseFloat(jQuery(this).val());
    if (!isNaN(value)) {
        // If the value is a valid number, add it to the sum and increment the row count
        sumCol1 += value;
        rowCount++;
    }
});

if (rowCount > 0) {
    // If there are any dynamic rows, compare the sum to the static row
    var col1 = parseFloat(jQuery("#CAP5_R500_C8").val());
    if (!isNaN(col1) && col1 !== sumCol1) {
        webform.errors.push({
            'fieldName': 'CAP5_R500_C8',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
        });
    }
}


// // End 64-018

//What is problems  ?