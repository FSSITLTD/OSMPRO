frappe.ui.form.on("Employee",  {
    date_of_birth (frm){
                var birthdate = frm.doc.date_of_birth; 


    var dobDate = new Date(birthdate);
    var today = new Date();
    var age = today.getFullYear() -dobDate.getFullYear();
    if (today.getMonth() < dobDate.getMonth() || (today.getMonth() == dobDate.getMonth() && today.getDate() < dobDate.getDay()))
        age--;
    
    frm.set_value("age",age,birthdate);
   


    }

     });