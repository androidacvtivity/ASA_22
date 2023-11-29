SELECT 
    D.CUIIO
------    D.CAPITOL,
----    D.RIND,
--    SUM(D.COL1) AS COL1


        FROM CIS2.VW_DATA_ALL D
        
        WHERE
        1=1
        
        AND D.FORM = 64
        
        AND D.PERIOADA = :pPERIOADA 
        
        AND D.CAPITOL = 1200
        AND D.RIND IN ('2113-1','2113-2','2113-3','2113-4','2117-4','2123-2','2123-4')
        
        
        GROUP BY 
           D.CUIIO
           
           

           
            
            
            ORDER BY 
            D.CUIIO