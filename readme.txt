    I have a question. Which is more correct code in JS, I check this 
Cap.3 [r.320 c.1] >= [r.330 c.1]+ [r.340 c.1] + [r.350 c.1]' - relations. 
First version or second version ? 
    
     // First version 
     var sumR320 = Decimal(values.CAP3_R330_C1 || 0).plus(values.CAP3_R340_C1 || 0).plus(values.CAP3_R350_C1 || 0);

    if (!(Decimal(values.CAP3_R320_C1 || 0) >= sumR320)) {
        webform.errors.push({
            'fieldName': 'CAP3_R320_C1',
            'msg': Drupal.t('Cod eroare: 64-038, Cap.3 [r.320 c.1] >= [r.330 c.1]+ [r.340 c.1] + [r.350 c.1]')
        });
    }





     //Second  version

    // Start  64-038
    { 
        if (!isNaN(Number(values["CAP3_R320_C1"]))) {
            var col1 = Number(values["CAP3_R320_C1"]);}

        if (!isNaN(Number(values["CAP3_R330_C1"]))) {
            var col2 = Number(values["CAP3_R330_C1"]);
        }

        if (!isNaN(Number(values["CAP3_R340_C1"]))) {
            var col3 = Number(values["CAP3_R340_C1"]);
        }

        if (!isNaN(Number(values["CAP3_R350_C1"]))) {
            var col4  = Number(values["CAP3_R350_C1"]);
        }

        var sumR320 = col2 + col3 + col4 
        var sumR320_F = parseFloat(sumR320.toFixed(1));
       

        if (col1 < sumR320_F) {
        webform.errors.push({
            'fieldName': 'CAP3_R320_C1',
            'msg': Drupal.t('Cod eroare: 64-038, Cap.3 [r.320 c.1] >= [r.330 c.1]+ [r.340 c.1] + [r.350 c.1] -  @col1 <   @sumR320_F', { "@col1": col1, "@sumR320_F": sumR320_F })
        });
    }
}
// End  64-038