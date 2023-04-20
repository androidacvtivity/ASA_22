// }
//Start 64-037
//In this case  In this case not work correctly. 
// CAP2_R310_C1 = 1314.5
// CAP2_R312_C1 = 552.0
var sumR311_312 = Decimal(values.CAP2_R311_C1 || 0).plus(values.CAP2_R312_C1 || 0);
var sumR310_037 = Decimal(values.CAP2_R310_C1 || 0);
// Round the values to one sign after zero
sumR311_312 = sumR311_312.toDecimalPlaces(1);
sumR310_037 = sumR310_037.toDecimalPlaces(1);
if (sumR310_037.toNumber().toFixed(1) < sumR311_312.toNumber().toFixed(1)) {
    var errorMsg = Drupal.t('Cod eroare: 64-037, Cap.2 [r.310 c.1] >= [r.311 c.1] + [r.312 c.1] - [r.310 c.1] < [r.311 c.1] + [r.312 c.1] = [sumR311_312] ', {
        '[sumR311_312]': sumR311_312.toFixed(1),
        '[r.310 c.1]': sumR310_037.toFixed(1),
        '[r.311 c.1]': Decimal(values.CAP2_R311_C1 || 0).toDecimalPlaces(1),
        '[r.312 c.1]': Decimal(values.CAP2_R312_C1 || 0).toDecimalPlaces(1),
        '[sumR311_312]': sumR311_312.toFixed(1)
    });
    webform.errors.push({
        'fieldName': 'CAP2_R310_C1',
        'msg': errorMsg
    });
}
//End 64-037

//But in this case  work correctly


//Start 64-037
var sumR311_312 = Decimal(values.CAP2_R311_C1 || 0).plus(values.CAP2_R312_C1 || 0);
var sumR310_037 = Decimal(values.CAP2_R310_C1 || 0);

// Round the values to one sign after zero
sumR311_312 = sumR311_312.toDecimalPlaces(1);
sumR310_037 = sumR310_037.toDecimalPlaces(1);



if (sumR310_037.lessThan(sumR311_312)) {
    var errorMsg = Drupal.t('Cod eroare: 64-037, Cap.2 [r.310 c.1] >= [r.311 c.1] + [r.312 c.1] - [r.310 c.1] < [r.311 c.1] + [r.312 c.1] = [sumR311_312] ', {
        '[sumR311_312]': sumR311_312.toFixed(1),
        '[r.310 c.1]': sumR310_037.toFixed(1),
        '[r.311 c.1]': Decimal(values.CAP2_R311_C1 || 0).toDecimalPlaces(1),
        '[r.312 c.1]': Decimal(values.CAP2_R312_C1 || 0).toDecimalPlaces(1),
        '[sumR311_312]': sumR311_312.toFixed(1)
    });
    webform.errors.push({
        'fieldName': 'CAP2_R310_C1',
        'msg': errorMsg
    });
}
//End 64-037


//Why ?

