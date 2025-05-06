frappe.ui.form.on("Employee",  {
    date_of_birth (frm){
                var birthdate = frm.doc.date_of_birth; 
                var formname = frm.doc.employee_name && frm.doc.employee_number;
             
    var dobDate = new Date(birthdate);
    var today = new Date();
    var age = today.getFullYear() -dobDate.getFullYear();
   
    if (today.getMonth() < dobDate.getMonth() || (today.getMonth() == dobDate.getMonth() && today.getDate() < dobDate.getDay()))
        age--;
    
    frm.set_value("age",age);
    frm.set_value("formname",formname,birthdate);
    frm.set_value("formname",formname);


    }

     });
     frappe.ui.form.on("Employee",  {
        employee_name(frm){
                
                    var formname = frm.doc.employee_name && frm.doc.employee_number;
                 
       
        
       
        
        
        frm.set_value("age",age);
        frm.set_value("formname",formname,birthdate);
        frm.set_value("formname",formname);
    
    
        }
    
         });