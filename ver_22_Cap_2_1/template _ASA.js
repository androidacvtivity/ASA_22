//It is static  row in Drupal. 

<input type="text" name="CAP5_R500_C8" id="CAP5_R500_C8" field="CAP5_R500_C8" class="table number autofield float error" maxlength="20" decimal_length="1" value="4.0">

//It is dynamic row in Drupal.
//He can be the first row, the second, and so on.
<input type="text" name="CAP5_R_C8[1]" id="CAP5_R_C8-1" field="CAP5_R_C8" class="table number float" maxlength="100" decimal_length="1" value="" row-index="1">

<input type="text" name="CAP5_R_C8[2]" id="CAP5_R_C8-2" field="CAP5_R_C8" class="table number float" maxlength="100" decimal_length="1" value="" row-index="2">
    
             I need to calculate the sum of the dynamic rows on column C8. 
            I wrote this code

            // Start 64-018
            var sumCol1 = 0;

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

}
// End 64-018


But sumCol1 is always 0


            XPath dec/DataSet/Data/CAP5_R[line]/CAP5_R_C8


            What's wrong ?