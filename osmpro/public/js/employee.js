frappe.ui.form.on("Employee", "age", function(frm) {
    var dob = new Date(frm.doc.date_of_birth);
    var now = new Date();
    var age_now = now.getFullYear() - dob.getFullYear();
  
    cur_frm.set_value("age", age_now);
    cur_frm.refresh();
  });