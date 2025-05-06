frappe.ui.form.on("Employee",  {
    date_of_birth (frm){
                var birthdate = frm.doc.date_of_birth; 
              
             
    var dobDate = new Date(birthdate);
    var today = new Date();
    var age = today.getFullYear() -dobDate.getFullYear();
   
    if (today.getMonth() < dobDate.getMonth() || (today.getMonth() == dobDate.getMonth() && today.getDate() < dobDate.getDay()))
        age--;
    
    frm.set_value("age",age);
    //frm.set_value("formname",formname,birthdate);
   

    }

     });
     frappe.ui.form.on("Employee",  {
        first_name(frm){
                
                    var formname = frm.doc.employee_name;
                    var number = frm.doc.employee_number;
                    var all = formname, number;
       
        
       
        
        
        
        
        frm.set_value("formname",all);
    
    
        }
    
         });