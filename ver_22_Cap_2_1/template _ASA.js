// Start  64-002

if (Decimal(values.CAP1_R151_C1 || 0).greaterThan(values.CAP1_R150_C1 || 0)) {
    webform.errors.push({
        'fieldName': 'CAP1_R151_C1',
        'msg': Drupal.t('Cod eroare: 64-002, [r.151 c.1] <= [r.150 c.1] -  @CAP1_R151_C1 >   @CAP1_R150_C1', { "@CAP1_R151_C1": values.CAP1_R151_C1, "@CAP1_R150_C1": values.CAP1_R150_C1 })
    });
}

// End  64-002


//Start 64-034

//------------------------------1
// Calculate the total value of CAP2_R241_C1 through CAP2_R243_C1
    function calculateTotalCap2R241ToR243C1(values) {
        return Decimal(values.CAP2_R241_C1 || 0)
            .plus(values.CAP2_R242_C1 || 0)
            .plus(values.CAP2_R243_C1 || 0);
    }

    // Check if CAP2_R240_C1 is less than the total value of CAP2_R241_C1 through CAP2_R243_C1
    function checkCap2R240C1(values, webform) {
        var totalCap2R241ToR243C1 = calculateTotalCap2R241ToR243C1(values);

       
        if (Decimal(values.CAP2_R240_C1 || 0).lessThan(totalCap2R241ToR243C1)) {
            webform.errors.push({
                'fieldName': 'CAP2_R240_C1',
                'msg': Drupal.t('Cod eroare: 64-034, [r.240 c.1] >= [r.241c.1] + [r.242 c.1] + [r.243 c.1] -  @CAP2_R240_C1 <   @totalCap2R241ToR243C1', { "@CAP2_R240_C1": values.CAP2_R240_C1, "@totalCap2R241ToR243C1": totalCap2R241ToR243C1.toFixed() })
            });
        }
    }

    // Call the checkCap2R240C1 function
    checkCap2R240C1(values, webform);
//------------------------------1

//------------------------------2

var sumR240 = Decimal(values.CAP2_R241_C1 || 0).plus(values.CAP2_R242_C1 || 0).plus(values.CAP2_R243_C1 || 0);
    if (Decimal(values.CAP2_R240_C1 || 0).lessThan(sumR240)) {
        webform.errors.push({
            'fieldName': 'CAP2_R240_C1',
            'msg': Drupal.t('Cod eroare: 64-034, [r.240 c.1] >= [r.241c.1] + [r.242 c.1] + [r.243 c.1]   -  @CAP2_R240_C1 < @CAP2_R241_C1 + @CAP2_R242_C1 + @CAP2_R243_C1', { "@CAP2_R240_C1": values.CAP2_R240_C1,
                "@CAP2_R241_C1": values.CAP2_R241_C1, "@CAP2_R242_C1": values.CAP2_R242_C1, "@CAP2_R243_C1": values.CAP2_R243_C1
})
        });
    }


//------------------------------2
    //End 64-034

//Start 64-033
{


    // Calculate the total value of CAP2_R221_C1 through CAP2_R243_C1
    function calculateTotalCap2R221ToR222C1(values) {
        return Decimal(values.CAP2_R221_C1 || 0)
            .plus(values.CAP2_R221_C1 || 0);

    }

    // Check if CAP2_R220_C1 is less than the total value of CAP2_R241_C1 through CAP2_R243_C1
    function checkCap2R220C1(values, webform) {
        var totalCap2R221ToR222C1 = calculateTotalCap2R221ToR222C1(values);


        if (Decimal(values.CAP2_R220_C1 || 0).lessThan(totalCap2R221ToR222C1)) {
            webform.errors.push({
                'fieldName': 'CAP2_R240_C1',
                'msg': Drupal.t('Cod eroare: 64-033, [r.220 c.1] >= [r.221c.1] + [r.222 c.1] -  @CAP2_R220_C1 <   @totalCap2R221ToR222C1', { "@CAP2_R220_C1": values.CAP2_R220_C1, "@totalCap2R221ToR222C1": totalCap2R221ToR222C1.toFixed() })
            });
        }
    }

    // Call the checkCap2R240C1 function
    checkCap2R220C1(values, webform);



}

//End 64-033