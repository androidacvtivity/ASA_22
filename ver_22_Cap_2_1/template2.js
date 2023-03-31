// Start 64-018

var sumCol1 = 0;
var sumCol2 = 0;
var sumCol3 = 0;
var rowCount = 0;

// Loop through all input elements with name starting with "CAP5_R_C8"
jQuery("input[name^='CAP5_R_C8']").each(function () {
    // Get the value of the input element and parse it as a float
    var value = parseFloat(jQuery(this).val());
    if (!isNaN(value)) {
        // If the value is a valid number, add it to the appropriate column sum and increment the row count
        if (jQuery(this).attr("name") === "CAP5_R500_C8") {
            sumCol1 += value;
        } else if (jQuery(this).attr("name") === "CAP5_R500_C9") {
            sumCol2 += value;
        } else if (jQuery(this).attr("name") === "CAP5_R500_C10") {
            sumCol3 += value;
        }
        rowCount++;
    }
});

if (rowCount > 0) {
    // If there are any dynamic rows, compare the sums to the static rows
    var col1 = parseFloat(jQuery("#CAP5_R500_C8").val());
    var col2 = parseFloat(jQuery("#CAP5_R500_C9").val());
    var col3 = parseFloat(jQuery("#CAP5_R500_C10").val());
    if (!isNaN(col1) && col1 !== sumCol1 || !isNaN(col2) && col2 !== sumCol2 || !isNaN(col3) && col3 !== sumCol3) {
        webform.errors.push({
            'fieldName': 'CAP5_R500_C8',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1, col2 = @col2, sumCol2 = @sumCol2, col3 = @col3, sumCol3 = @sumCol3', { '@col1': col1, '@sumCol1': sumCol1, '@col2': col2, '@sumCol2': sumCol2, '@col3': col3, '@sumCol3': sumCol3 })
        });
    }
}

// End 64-018


//-------------------------------------------------


// Start 64-018

var sumCol1 = 0, sumCol2 = 0, sumCol3 = 0;
var rowCount = 0;

// Loop through all input elements with name starting with "CAP5_R_C8", "CAP5_R_C9", and "CAP5_R_C10"
jQuery("input[name^='CAP5_R_C8'], input[name^='CAP5_R_C9'], input[name^='CAP5_R_C10']").each(function () {
    // Get the value of the input element and parse it as a float
    var value = parseFloat(jQuery(this).val());
    if (!isNaN(value)) {
        // If the value is a valid number, add it to the corresponding column sum and increment the row count
        var name = jQuery(this).attr('name');
        if (name.startsWith('CAP5_R_C8')) {
            sumCol1 += value;
        } else if (name.startsWith('CAP5_R_C9')) {
            sumCol2 += value;
        } else if (name.startsWith('CAP5_R_C10')) {
            sumCol3 += value;
        }
        rowCount++;
    }
});

if (rowCount > 0) {
    // If there are any dynamic rows, compare the sum to the static row for all columns
    var col1 = parseFloat(jQuery("#CAP5_R500_C8").val());
    var col2 = parseFloat(jQuery("#CAP5_R500_C9").val());
    var col3 = parseFloat(jQuery("#CAP5_R500_C10").val());
    if (!isNaN(col1) && col1 !== sumCol1) {
        webform.errors.push({
            'fieldName': 'CAP5_R500_C8',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
        });
    }
    if (!isNaN(col2) && col2 !== sumCol2) {
        webform.errors.push({
            'fieldName': 'CAP5_R500_C9',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO2. col2 = @col2, sumCol2 = @sumCol2', { '@col2': col2, '@sumCol2': sumCol2 })
        });
    }
    if (!isNaN(col3) && col3 !== sumCol3) {
        webform.errors.push({
            'fieldName': 'CAP5_R500_C10',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO3. col3 = @col3, sumCol3 = @sumCol3', { '@col3': col3, '@sumCol3': sumCol3 })
        });
    }
}

// End 64-018


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





// Start 64-018

var sumCol1 = 0, sumCol2 = 0, sumCol3 = 0;
var rowCount = 0;

// Loop through all input elements with name starting with "CAP5_R_C8", "CAP5_R_C9", and "CAP5_R_C10"
jQuery("input[name^='CAP5_R_C8'], input[name^='CAP5_R_C9'], input[name^='CAP5_R_C10']").each(function () {
    // Get the value of the input element and parse it as a float
    var value = parseFloat(jQuery(this).val());
    if (!isNaN(value)) {
        // If the value is a valid number, add it to the corresponding column sum and increment the row count
        var name = jQuery(this).attr('name');
        if (name.startsWith('CAP5_R_C8')) {
            sumCol1 += value;
        } else if (name.startsWith('CAP5_R_C9')) {
            sumCol2 += value;
        } else if (name.startsWith('CAP5_R_C10')) {
            sumCol3 += value;
        }
        rowCount++;
    }
});

if (rowCount > 0) {
    // If there are any dynamic rows, compare the sum to the static row for all columns
    var col1 = parseFloat(jQuery("#CAP5_R500_C8").val());
    var col2 = parseFloat(jQuery("#CAP5_R500_C9").val());
    var col3 = parseFloat(jQuery("#CAP5_R500_C10").val());
    if (!isNaN(col1) && col1 !== sumCol1) {
        webform.errors.push({
            'fieldName': 'CAP5_R500_C8',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
        });
    }
    if (!isNaN(col2) && col2 !== sumCol2) {
        webform.errors.push({
            'fieldName': 'CAP5_R500_C9',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO2. col2 = @col2, sumCol2 = @sumCol2', { '@col2': col2, '@sumCol2': sumCol2 })
        });
    }
    if (!isNaN(col3) && col3 !== sumCol3) {
        webform.errors.push({
            'fieldName': 'CAP5_R500_C10',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO3. col3 = @col3, sumCol3 = @sumCol3', { '@col3': col3, '@sumCol3': sumCol3 })
        });
    }
}

// End 64-018




//--------------------------------------------------------------------

//This code work
//     // Start 64-018

//     var sumCol1 = 0;
//     var rowCount = 0;

//     // Loop through all input elements with name starting with "CAP5_R_C8"
//     jQuery("input[name^='CAP5_R_C8']").each(function () {
//         // Get the value of the input element and parse it as a float
//         var value = parseFloat(jQuery(this).val());
//         if (!isNaN(value)) {
//             // If the value is a valid number, add it to the sum and increment the row count
//             sumCol1 += value;
//             rowCount++;
//         }
//     });

//     if (rowCount > 0) {
//         // If there are any dynamic rows, compare the sum to the static row
//         var col1 = parseFloat(jQuery("#CAP5_R500_C8").val());
//         if (!isNaN(col1) && col1 !== sumCol1) {
//             webform.errors.push({
//                 'fieldName': 'CAP5_R500_C8',
//                 'weight': 1,
//                 'msg': Drupal.t('Cod eroare: 64-018  CAP.5 [r.500] = [r.510] + [r.511] + [r.512] + ... pentru CO1. col1 = @col1, sumCol1 = @sumCol1', { '@col1': col1, '@sumCol1': sumCol1 })
//             });
//         }
//     }


// // End 64-018

//but  last you code not for all coluns


//Show me rezult of sum  ([r.510] + [r.511] + [r.512] +) IN THIS 
<input type="text" name="CAP5_R500_C8" id="CAP5_R500_C8" field="CAP5_R500_C8" class="table number autofield float error warning" maxlength="20" decimal_length="1" value="44.0"











