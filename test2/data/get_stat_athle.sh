

COUNTER=0
         while [  $COUNTER -lt 48 ]; do
             echo The counter is $COUNTER
             curl -G "http://bases.athle.com/asp.net/liste.aspx?frmpostback=true&frmbase=calendrier&frmmode=1&frmespace=0&frmsaison=2016&frmtype1=Hors+Stade&frmtype2=&frmtype3=&frmtype4=&frmniveau=&frmniveaulab=&frmligue=&frmepreuve=&frmdate_j1=&frmdate_m1=&frmdate_a1=&frmdate_j2=&frmdate_m2=&frmdate_a2=&frmposition=$COUNTER" > athle$COUNTER.html
             let COUNTER=COUNTER+1 
         done