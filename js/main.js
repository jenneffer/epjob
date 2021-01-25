$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Next",
            previous: "Back",
            finish: 'Submit'
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex >= 1 ) {
                $('.steps ul li:first-child a img').attr('src','images/step-1.png');
            } else {
                $('.steps ul li:first-child a img').attr('src','images/step-1-active.png');
            }

            if ( newIndex === 1 ) {
                $('.steps ul li:nth-child(2) a img').attr('src','images/step-2-active.png');
            } else {
                $('.steps ul li:nth-child(2) a img').attr('src','images/step-2.png');
            }

            if ( newIndex === 2 ) {
                $('.steps ul li:nth-child(3) a img').attr('src','images/step-3-active.png');
            } else {
                $('.steps ul li:nth-child(3) a img').attr('src','images/step-3.png');
            }
            if ( newIndex === 3 ) {
                $('.steps ul li:nth-child(4) a img').attr('src','images/step-3-active.png');
            } else {
                $('.steps ul li:nth-child(4) a img').attr('src','images/step-3.png');
            }

            if ( newIndex === 4 ) {
                $('.steps ul li:nth-child(5) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(5) a img').attr('src','images/step-4.png');                
            }

            if ( newIndex === 5 ) {
                $('.steps ul li:nth-child(6) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(6) a img').attr('src','images/step-4.png');                
            }

            if ( newIndex === 6 ) {
                $('.steps ul li:nth-child(7) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(7) a img').attr('src','images/step-4.png');                
            }

            if ( newIndex === 7 ) {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4.png');                
            }

            if ( newIndex === 8 ) {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4.png');                
            }

            if ( newIndex === 9 ) {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4.png');                
            }

            if ( newIndex === 10 ) {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4.png');                
            }

            if ( newIndex === 11 ) {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(8) a img').attr('src','images/step-4.png');                
            }

            if ( newIndex === 12 ) {
                $('.steps ul li:nth-child(9) a img').attr('src','images/step-4-active.png');
                $('.actions ul').addClass('step-4');
            } else {
                $('.steps ul li:nth-child(9) a img').attr('src','images/step-4.png');    
                $('.actions ul').removeClass('step-4');              
            }
            return true; 
        }
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Click to see password 
    $('.password i').click(function(){
        if ( $('.password input').attr('type') === 'password' ) {
            $(this).next().attr('type', 'text');
        } else {
            $('.password input').attr('type', 'password');
        }
    }) 
    // Create Steps Image
    // $('.steps ul li:first-child').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-1-active.png" alt=""> ').append('<span class="step-order">Step 01</span>');
    // $('.steps ul li:nth-child(2').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-2.png" alt="">').append('<span class="step-order">Step 02</span>');
    // $('.steps ul li:nth-child(3)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 03</span>');
    // $('.steps ul li:nth-child(4)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 04</span>');
    // $('.steps ul li:nth-child(5)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 05</span>');
    // $('.steps ul li:nth-child(6)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 06</span>');
    // $('.steps ul li:nth-child(7)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 07</span>');
    // $('.steps ul li:nth-child(8)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 08</span>');
    // $('.steps ul li:nth-child(9)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 09</span>');
    // $('.steps ul li:nth-child(10)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 10</span>');
    // $('.steps ul li:nth-child(11)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 11</span>');    
    // $('.steps ul li:last-child a').append('<img src="images/step-4.png" alt="">').append('<span class="step-order">Step 05</span>');
    // Count input 
    $(".quantity span").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.hasClass('plus')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
    });  

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
