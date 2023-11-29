--INSERT INTO CIS2.TABLE_OUT 
--(
--  PERIOADA,
--  FORM,
--  FORM_VERS,
--  ID_MDTABLE,
--  COD_CUATM,
--  NR_SECTIE,
--  NUME_SECTIE,
--  NR_SECTIE1,
--  NUME_SECTIE1,
--  NR_SECTIE2,
--  NUME_SECTIE2,
--  NR_ROW,
--  ORDINE,
--  DECIMAL_POS,
--  NUME_ROW,  
--  COL1,COL2
--)
--     
SELECT 
:pPERIOADA AS PERIOADA,
:pFORM AS FORM,
:pFORM_VERS AS FORM_VERS,
:pID_MDTABLE AS ID_MDTABLE,
:pCOD_CUATM AS COD_CUATM,    
'0' AS NR_SECTIE,
'0' AS NUME_SECTIE, 
'0' AS NR_SECTIE1,
'0' AS NUME_SECTIE1,
'0' AS NR_SECTIE2,
'0' AS NUME_SECTIE2, 
NR_ROW AS NR_ROW,
ORDINE AS ORDINE,
'00' AS DECIMAL_POS,
NUME_ROW AS NUME_ROW,
ROUND(COL1,1) AS COL1,
COL2
FROM
(

-------------------------------------------------------------------------------     
 SELECT  DISTINCT 
 R.RIND,
 CASE 
 
 WHEN R.RIND IN '600' THEN '45'   
 WHEN R.RIND IN '610' THEN '45.1'  
 WHEN R.RIND IN '620' THEN '45.2' 
 WHEN R.RIND IN '630' THEN '45.3' 
 WHEN R.RIND IN '640' THEN '45.4' 
 
 
 END AS NR_ROW,
 
 
 R.ORDINE,
 
 CASE 
 WHEN R.RIND IN '600' THEN SUBSTR(R.DENUMIRE,1,145)||SUBSTR(R.DENUMIRE,-8,7)
 ELSE SUBSTR(R.DENUMIRE,8,200) END AS NUME_ROW, 
 
 SUM(CIS2.NVAL( D.COL1)) AS COL1, 
 NULL AS COL2
FROM   
    CIS2.VW_DATA_ALL_COEF D INNER JOIN CIS2.MD_RIND R
    ON D.RIND=R.RIND AND D.RIND_VERS=R.RIND_VERS
    INNER JOIN (  
    
    SELECT DISTINCT D.CUIIO, D.CUIIO_VERS
    FROM CIS2.VW_DATA_ALL D
   WHERE D.FORM IN (64) AND D.PERIOADA IN (:pPERIOADA)
GROUP BY D.CUIIO, D.CUIIO_VERS
  HAVING MAX (
             CASE
                 WHEN D.CAPITOL IN (1129) AND D.RIND IN ('8') THEN D.COL31
                 ELSE NULL
             END) LIKE
             '45%'
             
             
             
             ) DD ON DD.CUIIO  = D.CUIIO AND DD.CUIIO_VERS = D.CUIIO_VERS 
          
WHERE
  (D.FORM=:pFORM) AND
  (D.FORM_VERS=:pFORM_VERS) AND
  (:pID_MDTABLE=:pID_MDTABLE) AND
  (D.CUATM_FULL LIKE '%'||:pCOD_CUATM||';%') AND   
  D.PERIOADA IN (:pPERIOADA) AND
  D.FORM IN (64) AND 
  D.CAPITOL IN (1178)   
  

  GROUP BY 
  R.RIND, 
  R.ORDINE, 
  R.DENUMIRE
   
  ORDER BY 
  R.ORDINE
 
 
 )
    