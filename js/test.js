/*jslint browser: true*/
/*global $, jQuery, alert*/
(function($) {
    'use strict';

    $(function() {

        $(document).ready(function() {
            function triggerClick(elem) {   
                $(elem).click();                               
            }
            var $progressWizard = $('.stepper'),
                $tab_active,
                $tab_prev,
                $tab_next,
                $btn_prev = $progressWizard.find('.prev-step'),
                $btn_next = $progressWizard.find('.next-step'),
                $btn_submit = $progressWizard.find('.submit-form'),
                $tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
                $tooltips = $progressWizard.find('[data-toggle="tab"][title]');

            // To do:
            // Disable User select drop-down after first step.
            // Add support for payment type switching.

            //Initialize tooltips
            $tooltips.tooltip();

            //Wizard
            $tab_toggle.on('show.bs.tab', function(e) {
                var $target = $(e.target);

                if (!$target.parent().hasClass('active, disabled')) {
                    $target.parent().prev().addClass('completed');
                }
                if ($target.parent().hasClass('disabled')) {
                    return false;
                }
            });

            // $tab_toggle.on('click', function(event) {
            //     event.preventDefault();
            //     event.stopPropagation();
            //     return false;
            // });

            $btn_next.on('click', function() {                
                //validate inout
                $('#job_application').validate({
                    rules: {    
                        email: {
                            required: true,                            
                        },                 
                        pdpa:{
                            required:true
                        },
                        fullName:{
                            required:true
                        }, 
                        icPassport:{
                            required:true
                        },
                        phoneNumber:{
                            required:true
                        },
                        age:{
                            required:true
                        },
                        gender:{
                            required:true
                        },
                        nationality:{
                            required:true
                        },
                        dob:{
                            required:true
                        },
                        birthPlace:{
                            required:true
                        },
                        religion:{
                            required:true
                        },
                        race:{
                            required:true
                        },
                        marital_status:{
                            required:true
                        },
                        postal_address:{
                            required:true
                        },
                        current_address:{
                            required:true
                        },
                        driving_license:{
                            required:true
                        },
                        own_transport:{
                            required:true
                        },
                        position_applied:{
                            required:true
                        },
                        position_level:{
                            required:true
                        },
                        prev_position_level:{
                            required:true
                        },
                        expected_salary:{
                            required:true
                        },
                        prev_salary:{
                            required:true
                        },
                        start_work:{
                            required:true
                        },
                        learn_job_offer:{
                            required:true
                        },
                        academic_qualification:{
                            required:true
                        },
                        personality_test:{
                            required:true                            
                        },
                        iq_test:{
                            required:true
                        },
                        english:{
                            required:true                            
                        },
                        bahasa_malaysia:{
                            required:true                            
                        },
                        chinese:{
                            required:true                            
                        },
                        comp_word:{
                            required:true                            
                        },
                        comp_excel:{
                            required:true                            
                        },
                        comp_powerPoint:{
                            required:true                            
                        },
                        comp_autoCad:{
                            required:true                            
                        },
                        comp_codeProg:{
                            required:true                            
                        },
                        comp_databSQL:{
                            required:true                            
                        },
                        comp_mediaEditing:{
                            required:true                            
                        },
                        comp_hardware:{
                            required:true                            
                        },
                        comp_networking:{
                            required:true                            
                        }

                    },
                    // messages: {
                    //     email: "Email is required", //notice the comma I added       
                    //     pdpa: "Please select agree or disagree to continue",   
                    //     fullName: "Full name is required",
                    //     icPassport: "IC number or Passport is required",
                    //     phoneNumber: "Contact number is required",
                    //     age: "Age is is required",
                    //     gender: "Gender is required",
                    //     nationality: "Nationality is required",
                    //     dob: "Birth date is required",
                    //     birthPlace: "Birth place is required",
                    //     religion: "Religion is required",
                    //     race: "Race/Tribe/Dialect is required",     
                    //     marital_status: "Marital status is required",                                                                 
                    // },
                    // errorPlacement: function (error, element) {
                    //     alert(error.text());
                    // },
                });

                if ((!$('#job_application').valid())) {
                    
                    return false;
                }
                else{

                    $tab_active = $progressWizard.find('.active');
                    $tab_active.next().removeClass('disabled');
                    $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
                    triggerClick($tab_next);
                }
                

            });
            $btn_prev.click(function() {
                $tab_active = $progressWizard.find('.active');
                $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
                triggerClick($tab_prev);
            });

            //submit button
            $btn_submit.on('click', function(){
                alert("test");
                        //ajax to save the data -testing
                $.ajax({  
                    url:"index.php",  
                    method:"POST",  
                    data:{data : $('#job_application').serialize()},  
                    success:function(data){ 
                      // location.reload();                                                             
                    }  
                }); 
            });

            //check form validation


            var TABLE_FAMILY = [];
            $(".add-row-family").click(function(){
                var name = $("#fam_name").val();
                var relation = $("#fam_relation").val();
                var occupation = $("#fam_occupation").val();
                var company = $("#fam_company").val();
                var tel_no = $("#fam_phone").val();

                if(name == ""){
                    alert("name is required");  
                }
                else if(relation == ""){
                    alert("relation is required");  
                }
                else if(occupation == ""){
                    alert("occupation is required");  
                }
                else if(company == ""){
                    alert("Company is required");  
                }               
                else{
                    var currentData = new FamilyData(name, relation, occupation, tel_no, company);
                    TABLE_FAMILY.push(currentData);
                    $('#family_arr').val(JSON.stringify(TABLE_FAMILY)); //store array
                    var markup = "<tr><td>"+name+"</td><td>"+relation+"</td><td>"+occupation+"</td><td>"+tel_no+"</td><td>"+company+"</td></tr>";
                    $("#family-table").append(markup);

                }
                
                //clear input fields after populated in the table
                $("#fam_name").val('');
                $("#fam_relation").val('');
                $("#fam_occupation").val('');
                $("#fam_company").val('');
                $("#fam_phone").val('');
            });  

            var TABLE_FRIEND = [];
            $(".add-row-friend").click(function(){
                var friend_name = $("#friend_name").val();
                var friend_position = $("#friend_position").val();        
                var friend_relation = $("#friend_relation").val();        

                if(friend_name == ""){
                    alert("Friend's name is required");  
                }
                else if(friend_position == ""){
                    alert("Friend's position is required");  
                } 
                else if(friend_relation == ""){
                    alert("Relation is required");  
                }             
                else{
                    var currentData = new FriendData(friend_name, friend_position, friend_relation );
                    TABLE_FRIEND.push(currentData);
                    $('#friend_arr').val(JSON.stringify(TABLE_FRIEND)); //store array
                    var markup = "<tr><td>"+friend_name+"</td><td>"+friend_relation+"</td><td>"+friend_position+"</td></tr>";
                    $("#friend-table").append(markup);

                }
                
                //clear input fields after populated in the table
                $("#friend_name").val('');
                $("#friend_position").val('');  
                $("#friend_relation").val('');              
            });  

            var TABLE_SPOUSE = [];
            $(".add_spouse").click(function(){
                var name = $("#spouse_name").val();
                var child_no = $("#children_no").val(); 
                console.log(name);       

                if(name == ""){
                    alert("Spouse's name is required");  
                }
                else if(child_no == ""){
                    alert("Children number is required");  
                }              
                else{
                    var currentData = new SpouseData(name, child_no );
                    TABLE_SPOUSE.push(currentData);
                    $('#spouse_arr').val(JSON.stringify(TABLE_SPOUSE)); //store array
                    var markup = "<tr><td>"+name+"</td><td>"+child_no+"</td></tr>";
                    $("#spouse-table").append(markup);

                }
                
                //clear input fields after populated in the table
                $("#spouse_name").val('');
                $("#children_no").val('');        
            });

            var TABLE_REFERENCE = [];
            $(".add-reference").click(function(){
                var ref_name = $("#ref_name").val();
                var ref_contact = $("#ref_contact").val(); 
                var ref_position = $("#ref_position").val();
                var ref_company = $("#ref_company").val(); 
                       

                if(ref_name == ""){
                    alert("Reference's name is required");  
                }
                else if(ref_contact == ""){
                    alert("Reference's contact number is required");  
                }   
                else if(ref_position == ""){
                    alert("Reference's position is required");  
                } 
                else if(ref_company == ""){
                    alert("Reference's company is required");  
                }            
                else{
                    var currentData = new ReferenceData(ref_name, ref_contact, ref_position, ref_company);
                    TABLE_REFERENCE.push(currentData);
                    $('#reference_arr').val(JSON.stringify(TABLE_REFERENCE)); //store array
                    var markup = "<tr><td>"+ref_name+"</td><td>"+ref_contact+"</td><td>"+ref_position+"</td><td>"+ref_company+"</td></tr>";
                    $("#reference-table").append(markup);

                }
                
                //clear input fields after populated in the table
                $("#ref_name").val('');
                $("#ref_contact").val(''); 
                $("#ref_position").val('');
                $("#ref_company").val(''); 
            });

            var TABLE_QUALIFICATION = [];
            $(".add-qualification").click(function(){
                var qualification = $("#qualification").val();
                var institution = $("#institution").val(); 
                var ystarted = $("#ystarted").val();
                var yfinished = $("#yfinished").val(); 
                       

                if(qualification == ""){
                    alert("Qualification is required");  
                }
                else if(institution == ""){
                    alert("Institution is required");  
                }   
                else if(ystarted == ""){
                    alert("Year started is required");  
                } 
                else if(yfinished == ""){
                    alert("Yearfinished is required");  
                }            
                else{
                    var currentData = new QualificationData(qualification, institution, ystarted, yfinished);
                    TABLE_QUALIFICATION.push(currentData);
                    $('#qualification_arr').val(JSON.stringify(TABLE_QUALIFICATION)); //store array
                    //DISPLAY TEXT OF QUALIFICATION
                    var q_text = "";
                    if(qualification == 1 ) q_text = "Primary";
                    else if(qualification == 2 ) q_text = "Secondary/Middle School";
                    else if(qualification == 3 ) q_text = "Diploma";
                    else if(qualification == 4 ) q_text = "Undergraduate Degree";
                    else if(qualification == 5 ) q_text = "Post Graduate Diploma";
                    else if(qualification == 6 ) q_text = "Master Degree";
                    else if(qualification == 7 ) q_text = "PhD or Higher";
                    else if(qualification == 8 ) q_text = "Other";
                    else q_text = "";

                    var markup = "<tr><td>"+q_text+"</td><td>"+institution+"</td><td>"+ystarted+"</td><td>"+yfinished+"</td></tr>";
                    $("#qualification-table").append(markup);

                }
                
                //clear input fields after populated in the table
                $("#qualification").val('');
                $("#institution").val(''); 
                $("#ystarted").val('');
                $("#yfinished").val(''); 
            });

            var TABLE_EMPLOYMENT = [];
            $(".add-empHistory").click(function(){
                var orgname = $("#orgname").val();
                var position = $("#position").val(); 
                var last_salary = $("#last_salary").val();
                var startdate = $("#startdate").val(); 
                var enddate = $("#enddate").val();
                var leaving_reason = $("#leaving_reason").val(); 
                       
                // if(orgname == ""){
                //     alert("Company is required");  
                // }
                // else if(position == ""){
                //     alert("Position is required");  
                // }   
                // else if(last_salary == ""){
                //     alert("Last salary started is required");  
                // } 
                // else if(startdate == ""){
                //     alert("Started date is required");  
                // }  
                // else if(enddate == ""){
                //     alert("Ended date is required");  
                // }  
                // else if(leaving_reason == ""){
                //     alert("Reason of leaving is required");  
                // }           
                // else{
                    var currentData = new EmploymentData(orgname, position, last_salary, startdate, enddate, leaving_reason);
                    TABLE_EMPLOYMENT.push(currentData);
                    $('#employment_arr').val(JSON.stringify(TABLE_EMPLOYMENT)); //store array

                    var markup = "<tr><td>"+orgname+"</td><td>"+position+"</td><td>"+startdate+"</td><td>"+enddate+"</td><td>"+last_salary+"</td><td>"+leaving_reason+"</td></tr>";
                    $("#employment-table").append(markup);

                // }
                
                //clear input fields after populated in the table
                $("#orgname").val('');
                $("#position").val(''); 
                $("#last_salary").val('');
                $("#startdate").val(''); 
                $("#enddate").val('');
                $("#leaving_reason").val('');
            });
        });
    });

}(jQuery, this));

function EmploymentData(orgname, position, last_salary, startdate, enddate, leaving_reason){
    this.orgname = orgname;
    this.position = position;
    this.last_salary = last_salary;
    this.startdate = startdate;
    this.enddate = enddate;
    this.leaving_reason = leaving_reason;
}

function QualificationData(qualification, institution, ystarted, yfinished){
    this.qualification = qualification;
    this.institution = institution;
    this.ystarted = ystarted;
    this.yfinished = yfinished;
}

function ReferenceData(ref_name, ref_contact, ref_position, ref_company ){
    this.ref_name = ref_name;
    this.ref_contact = ref_contact;
    this.ref_position = ref_position;
    this.ref_company = ref_company;
}

function SpouseData(name, child_no ){
    this.name = name;
    this.child_no = child_no;
}

function FamilyData(name, relation, occupation, tel_no, company){
    this.name = name;
    this.relation = relation;
    this.occupation = occupation;
    this.company = company;
    this.tel_no = tel_no;
}

function FriendData(friend_name, friend_relation, position){
    this.friend_name = friend_name;
    this.position = position;
    this.friend_relation = friend_relation;
}