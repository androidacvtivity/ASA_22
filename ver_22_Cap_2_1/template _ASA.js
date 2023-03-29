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


//64 - 006

//Why this js  code work correctly

  var sumR291 = Decimal(values.CAP2_R2911_C1 || 0).plus(values.CAP2_R2912_C1 || 0);
    if (Decimal(values.CAP2_R291_C1 || 0).lessThan(sumR291)) {
        webform.errors.push({
            'fieldName': 'CAP2_R291_C1',
            'msg': Drupal.t('Cod eroare: 64-006, [r.291 c.1] >= [r.2911c.1] + [r.2912 c.1]')
        });
    }

    //but this no 

var sumR291 = Decimal(values.CAP2_R2911_C1 || 0).plus(values.CAP2_R2912_C1 || 0);
var cap2R291C1 = Decimal(values.CAP2_R291_C1 || 0);
if (
   // cap2R291C1 < sumR291
    Decimal(cap2R291C1 || 0).lessThan(sumR291)

    ) {
    var errorMsg = Drupal.t('Cod eroare: 64-006, r.291 c.1 >= r.2911c.1 + r.2912 c.1 - [r.291 c.1] < [r.2911c.1] + [r.2912 c.1]', {
        '[r.291 c.1]': cap2R291C1,
        '[r.2911c.1]': Decimal(values.CAP2_R2911_C1 || 0),
        '[r.2912 c.1]': Decimal(values.CAP2_R2912_C1 || 0)
    });
    webform.errors.push({
        'fieldName': 'CAP2_R291_C1',
        'msg': errorMsg
    });
}

//Second code show this errorMsg -- Capitol 2 Rînd. 291 col.1 - Cod eroare: 64-006, r.291 c.1 >= r.2911c.1 + r.2912 c.1 -

//but 1543.4 < 468.4 + 431.6 -- not corectly

//They have same logic

//End 64 - 006

//Why is wrong in this code

//Convert the Decimal objects to numbers and after compare 

var sumR320 = Decimal(values.CAP3_R330_C1 || 0).plus(values.CAP3_R340_C1 || 0).plus(values.CAP3_R350_C1 || 0);

if (!(Decimal(values.CAP3_R320_C1 || 0) >= sumR320)) {
    webform.errors.push({
        'fieldName': 'CAP3_R320_C1',
        'msg': Drupal.t('Cod eroare: 64-038, Cap.3 [r.320 c.1] >= [r.330 c.1]+ [r.340 c.1] + [r.350 c.1]')
    });
}



//First code 
var sumR320 = Decimal(values.CAP3_R330_C1 || 0).plus(values.CAP3_R340_C1 || 0).plus(values.CAP3_R350_C1 || 0);

if (!(Decimal(values.CAP3_R320_C1 || 0).toNumber() >= sumR320.toNumber())) {
    webform.errors.push({
        'fieldName': 'CAP3_R320_C1',
        'msg': Drupal.t('Cod eroare: 64-038, Cap.3 [r.320 c.1] >= [r.330 c.1]+ [r.340 c.1] + [r.350 c.1]')
    });
}

//Second code 


// Show all variable and use for 
// check             'msg': Drupal.t('Cod eroare: 64-038, Cap.3 [r.320 c.1] >= [r.330 c.1]+ [r.340 c.1] + [r.350 c.1]')

// that

//     < 

var sumR320 = Decimal(values.CAP3_R330_C1 || 0).plus(values.CAP3_R340_C1 || 0).plus(values.CAP3_R350_C1 || 0);

if (!(Decimal(values.CAP3_R320_C1 || 0) >= sumR320)) {
    webform.errors.push({
        'fieldName': 'CAP3_R320_C1',
        'msg': Drupal.t('Cod eroare: 64-038, Cap.3 [r.320 c.1] >= [r.330 c.1]+ [r.340 c.1] + [r.350 c.1]')
    });
}


//Which code is correct ?




//CAP 2.1 rd. 2100 col.1 = (rd. 2101+…+rd. 2130) col.1
//In this code js logic  it is  this 
//64-102  CAP 2.1 col.1 ≥ col 2 + col. 3 + col.4  pe toate rindurile

{
    function fun_row_36_002(row) {
        var i;
        i = row;
        if (


            2102 == i || 2104 == i || 2110 == i || 2111 == i || 2112 == i || 2113 == i || 2114 == i || 2115 == i
            || 2116 == i || 2117 == i || 2118 == i || 2119 == i || 2121 == i || 2123 == i || 2124 == i || 2125 == i || 2127 == i
            || 2128 == i



        )
            return true;

    }

    // Start 64-102
    for (var i = 2100; i < 2131; i++) {
        {
            if (fun_row_36_002((i))) {

                if (!isNaN(Number(values["CAP21_R" + i + "_3_C1"]))) {
                    var col3 = Number(values["CAP21_R" + i + "_3_C1"]);
                }

                if (!isNaN(Number(values["CAP21_R" + i + "_2_C1"]))) {
                    var col2 = Number(values["CAP21_R" + i + "_2_C1"]);
                }

                if (!isNaN(Number(values["CAP21_R" + i + "_4_C1"]))) {
                    var col4 = Number(values["CAP21_R" + i + "_4_C1"]);
                }



                if (!isNaN(Number(values["CAP21_R" + i + "_1_C1"]))) {
                    var col1 = Number(values["CAP21_R" + i + "_1_C1"]);
                }

                var SUM_COL2_COL4 = (col2 + col3 + col4).toFixed(1)

                if (col1 < (SUM_COL2_COL4)) {
                    webform.errors.push({
                        'fieldName': 'CAP21_R' + i + '_1_C1',
                        'weight': 1,
                        'msg': Drupal.t('Cod eroare: 64-102  CAP 2.1 col.1 ≥ col 2 + col. 3 + col.4  pe toate rindurile - @col1 <  @SUM_COL2_COL4 ', { "@col1": col1, "@SUM_COL2_COL4": SUM_COL2_COL4 })
                    });
                }

            }







        }
    }
}
     //End 64-102




//In this code js logic  it is  this
//64-102  CAP 2.1 col.1 ≥ col 2 + col. 3 + col.4  pe toate rindurile.
// /Type of variable is float. 

// -- Start    64-102

{
    function fun_row_36_001(row) {
        var i;
        i = row;
        if (


            2130 == i || 2120 == i || 2101 == i || 2103 == i || 2105 == i || 2106 == i || 2107 == i || 2108 == i
            || 2109 == i



        )
            return true;

    }

  
    for (var i = 2100; i < 2131; i++) {
        {
            if (fun_row_36_001((i))) {

                if (!isNaN(Number(values["CAP21_R" + i + "_3_C1"]))) {
                    var col3 = Number(values["CAP21_R" + i + "_3_C1"]);
                }

                if (!isNaN(Number(values["CAP21_R" + i + "_2_C1"]))) {
                    var col2 = Number(values["CAP21_R" + i + "_2_C1"]);
                }


                if (!isNaN(Number(values["CAP21_R" + i + "_1_C1"]))) {
                    var col1 = Number(values["CAP21_R" + i + "_1_C1"]);
                }

                var SUM_COL2_COL4 = (col2 + col3).toFixed(1)

                if (col1 < (SUM_COL2_COL4)) {
                    webform.errors.push({
                        'fieldName': 'CAP21_R' + i + '_1_C1',
                        'weight': 1,
                        'msg': Drupal.t('Cod eroare: 64-102  CAP 2.1 col.1 ≥ col 2 + col. 3 + col.4  pe toate rindurile - @col1 <  @SUM_COL2_COL4 ', { "@col1": col1, "@SUM_COL2_COL4": SUM_COL2_COL4 })
                    });
                }

            }







        }
    }
}



{
    function fun_row_36_002(row) {
        var i;
        i = row;
        if (


            2102 == i || 2104 == i || 2110 == i || 2111 == i || 2112 == i || 2113 == i || 2114 == i || 2115 == i
            || 2116 == i || 2117 == i || 2118 == i || 2119 == i || 2121 == i || 2123 == i || 2124 == i || 2125 == i || 2127 == i
            || 2128 == i



        )
            return true;

    }

 
    for (var i = 2100; i < 2131; i++) {
        {
            if (fun_row_36_002((i))) {

                if (!isNaN(Number(values["CAP21_R" + i + "_3_C1"]))) {
                    var col3 = Number(values["CAP21_R" + i + "_3_C1"]);
                }

                if (!isNaN(Number(values["CAP21_R" + i + "_2_C1"]))) {
                    var col2 = Number(values["CAP21_R" + i + "_2_C1"]);
                }

                if (!isNaN(Number(values["CAP21_R" + i + "_4_C1"]))) {
                    var col4 = Number(values["CAP21_R" + i + "_4_C1"]);
                }



                if (!isNaN(Number(values["CAP21_R" + i + "_1_C1"]))) {
                    var col1 = Number(values["CAP21_R" + i + "_1_C1"]);
                }

                var SUM_COL2_COL4 = (col2 + col3 + col4).toFixed(1)

                if (col1 < (SUM_COL2_COL4)) {
                    webform.errors.push({
                        'fieldName': 'CAP21_R' + i + '_1_C1',
                        'weight': 1,
                        'msg': Drupal.t('Cod eroare: 64-102  CAP 2.1 col.1 ≥ col 2 + col. 3 + col.4  pe toate rindurile - @col1 <  @SUM_COL2_COL4 ', { "@col1": col1, "@SUM_COL2_COL4": SUM_COL2_COL4 })
                    });
                }

            }







        }
    }
}
     //End 64-102

    
     //but is correctly ? 

     //
     //Modify me logic of this code, check if this condition --- (CAP 2.1 rd. 2100 col.1 = (row. 2101+…+rwo.2130) col.1)
     //is true if not true show error.