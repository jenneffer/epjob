<?php
$dbhost = "192.168.9.221";
$dbuser = "root";
$dbpass = "Ep492033";
$db = "epjob";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);


$param = array();
if(isset($_POST['data'])){
	parse_str($_POST['data'], $param); //unserialize jquery string data

	//PERSONAL INFO
	$fullname = isset($param['fullName']) ? $param['fullName'] : "";
	$chineseName = isset($param['chineseName']) ? $param['chineseName'] : "";
	$icPassport = isset($param['icPassport']) ? $param['icPassport'] : "";
	$phoneNumber = isset($param['phoneNumber']) ? $param['phoneNumber'] : "";
	$age = isset($param['age']) ? $param['age'] : "";
	$nationality = isset($param['nationality']) ? $param['nationality'] : "";
	$dob = isset($param['dob']) ? $param['dob'] : "";
	$email = isset($param['email']) ? $param['email'] : "";
	$gender = isset($param['gender']) ? $param['gender'] : "";
	$birthPlace = isset($param['birthPlace']) ? $param['birthPlace'] : "";
	$religion = isset($param['religion']) ? $param['religion'] : "";
	$race = isset($param['race']) ? $param['race'] : "";
	$marital_status = isset($param['marital_status']) ? $param['marital_status'] : "";
	$insert_personal_info = "INSERT INTO user_info 
						SET user_fullname='$fullname',
						user_chineseName='$chineseName',
						user_email='$email',
						user_nric='$icPassport',
						user_phonenum='$phoneNumber',
						user_age='$age',
						user_sex='$gender',
						user_nationality='$nationality',
						user_dob='$dob',
						user_placeofbirth='$birthPlace',
						user_religion='$religion',
						user_race='$race',
						user_marital_status='$marital_status'";

	$result1 = mysqli_query($conn, $insert_personal_info) or die(mysqli_error($conn));	
	$personal_id = mysqli_insert_id($conn);	

	//MARITAL STATUS
	$spouse_arr = isset($param['spouse_arr']) ? $param['spouse_arr'] : []; 
	$spouse = json_decode($spouse_arr);
	if (!empty($spouse_arr)) {
		# code...
		foreach ($spouse as $key => $value) {
		# code...
			$spouse_name = $value->name;
			$children_no = $value->child_no;	

			$insert_marital_status = "INSERT INTO marital_status 
								SET marstat_refuser='$personal_id',
								marstat_status='$marital_status',
								marstat_spouseN='$spouse_name',
								marstat_nochild='$children_no'";
			$result2 = mysqli_query($conn, $insert_marital_status) or die(mysqli_error($conn));	

		}
	}

	//ADDRESS & TRANSPORTATION
	$postal_address = isset($param['postal_address']) ? $param['postal_address'] : "";
	$current_address = isset($param['current_address']) ? $param['current_address'] : "";
	$driving_license = isset($param['driving_license']) ? $param['driving_license'] : "";
	$own_transport = isset($param['own_transport']) ? $param['own_transport'] : "";

	$insert_address = "INSERT INTO address_transport 
					SET at_refuser='$personal_id',
					at_postalAddress='$postal_address',
					at_curAddress='$current_address',
					at_drivLicemce='$driving_license',
					at_isTransport='$own_transport'";

	$result3 = mysqli_query($conn, $insert_address) or die(mysqli_error($conn));

	//F&f PARTICULARS
	$family_arr = isset($param['family_arr']) ? $param['family_arr'] : []; 
	$family = json_decode($family_arr);
	foreach ($family as $key => $value) {
		# code...
		$name = $value->name;
		$relation = $value->relation;
		$occupation = $value->occupation;
		$company = $value->company;
		$tel_no = $value->tel_no;

		$insert_family = "INSERT INTO family_friend 
					SET ff_refuser='$personal_id',
					ff_isFamFrnd='1',
					ff_relationship='$relation',
					ff_phoneno='$tel_no',
					ff_occupation='$occupation',
					ff_nameWorkPlace='$company',
					ff_name='$name'";

		$result4 = mysqli_query($conn, $insert_family) or die(mysqli_error($conn));

	}
	$friend_arr = isset($param['friend_arr']) ? $param['friend_arr'] : []; 
	$friend = json_decode($friend_arr);
	foreach ($friend as $key => $value) {
		# code...
		$friend_name = $value->friend_name;
		$friend_position = $value->position;	
		$friend_relation = $value->friend_relation;

		$insert_friend = "INSERT INTO family_friend 
					SET ff_refuser='$personal_id',
					ff_isFamFrnd='2',
					ff_relationship='$friend_relation',
					ff_position='$friend_position'";

		$result4 = mysqli_query($conn, $insert_friend) or die(mysqli_error($conn));

	}
	//PERSONAL REFERENCES
	$reference_arr = isset($param['reference_arr']) ? $param['reference_arr'] : []; 
	$reference = json_decode($reference_arr);
	foreach ($reference as $key => $value) {
		# code...
		$ref_name = $value->ref_name;
		$ref_contact = $value->ref_contact;	
		$ref_position = $value->ref_position;
		$ref_company = $value->ref_company;	

		$insert_ref = "INSERT INTO personal_reference
					SET pr_refuser='$personal_id',
					pr_name='$ref_name',
					pr_phoneNo='$ref_contact',
					pr_position='$ref_position',
					pr_nameWorkPlace='$ref_company'";

		$result5 = mysqli_query($conn, $insert_ref) or die(mysqli_error($conn));

	}
	//APPLICATION DETAILS
	$position_applied = isset($param['position_applied']) ? $param['position_applied'] : "";
	$position_level = isset($param['position_level']) ? $param['position_level'] : "";
	$prev_position_level = isset($param['prev_position_level']) ? $param['prev_position_level'] : "";
	$expected_salary = isset($param['expected_salary']) ? $param['expected_salary'] : "";
	$prev_salary = isset($param['prev_salary']) ? $param['prev_salary'] : "";
	$other_name = isset($param['other_name']) ? $param['other_name'] : "";
	$start_work = isset($param['start_work']) ? $param['start_work'] : "";
	$learn_job_offer = isset($param['learn_job_offer']) ? $param['learn_job_offer'] : "";
	$learn_job_offer_other = isset($param['learn_job_offer_other']) ? $param['learn_job_offer_other'] : "";

	$insert_application = "INSERT INTO application_detail
					SET ad_refuser='$personal_id',
					ad_applyPosition='$position_applied',
					ad_applylevelPostion='$position_level',
					ad_lastLevel='$prev_position_level',
					ad_expectedSalary='$expected_salary',
					ad_prevSalary='$prev_salary',
					ad_availability='$start_work',
					ad_availability_other='$other_name',
					ad_whereLearn='$learn_job_offer',
					ad_whereLearn_other='$learn_job_offer_other'";

	$result6 = mysqli_query($conn, $insert_application) or die(mysqli_error($conn));

	//EDU BACKGROUND
	$academic_qualification = isset($param['academic_qualification']) ? $param['academic_qualification'] : "";
	$academic_qualification_other = isset($param['academic_qualification_other']) ? $param['academic_qualification_other'] : "";
	$qualification_arr = isset($param['qualification_arr']) ? $param['qualification_arr'] : []; 
	$qualification = json_decode($qualification_arr);
	foreach ($qualification as $key => $value) {
		# code...
		$qualification = $value->qualification;
		$institution = $value->institution;	
		$ystarted = $value->ystarted;
		$yfinished = $value->yfinished;	

		$insert_qualification = "INSERT INTO edu_background
					SET eb_refuser='$personal_id',
					eb_academicLevel='$qualification',
					eb_academicInstitution='$institution',
					eb_yearStart='$ystarted',
					eb_yearEnd='$yfinished',
					eb_highest3_qualification='$academic_qualification',
					eb_qualification_other='$academic_qualification_other'";

		$result7 = mysqli_query($conn, $insert_qualification) or die(mysqli_error($conn));

	}



	//PERSONALITY & IQ
	$personality_test = isset($param['personality_test']) ? $param['personality_test'] : "";
	$iq_test = isset($param['iq_test']) ? $param['iq_test'] : "";

	$insert_personality_iq = "INSERT INTO personality_iq
						SET pi_refuser='$personal_id',
						pi_personltyType='$personality_test',
						pi_IQ='$iq_test'";

	$result8 = mysqli_query($conn, $insert_personality_iq) or die(mysqli_error($conn));

	//LANG PROFICIENCIES
	$bahasa_malaysia = isset($param['bahasa_malaysia']) ? $param['bahasa_malaysia'] : 0;
	$english = isset($param['english']) ? $param['english'] : 0;
	$chinese = isset($param['chinese']) ? $param['chinese'] : 0;
	$other_language = isset($param['other_language']) ? $param['other_language'] : "";

	$insert_lang = "INSERT INTO language 
				SET lang_refuser='$personal_id',
				english='$english',
				malay='$bahasa_malaysia',
				chinese='$chinese',
				other='$other_language'";

	$result9 = mysqli_query($conn, $insert_lang) or die(mysqli_error($conn));			

	//COMPUTER PROFICIENCIES
	$comp_word = isset($param['comp_word']) ? $param['comp_word'] : 0;
	$comp_excel = isset($param['comp_excel']) ? $param['comp_excel'] : 0;
	$comp_powerPoint = isset($param['comp_powerPoint']) ? $param['comp_powerPoint'] : 0;
	$comp_autoCad = isset($param['comp_autoCad']) ? $param['comp_autoCad'] : 0;
	$comp_codeProg = isset($param['comp_codeProg']) ? $param['comp_codeProg'] : 0;
	$comp_databSQL = isset($param['comp_databSQL']) ? $param['comp_databSQL'] : 0;
	$comp_mediaEditing = isset($param['comp_mediaEditing']) ? $param['comp_mediaEditing'] : 0;
	$comp_hardware = isset($param['comp_hardware']) ? $param['comp_hardware'] : 0;
	$comp_networking = isset($param['comp_networking']) ? $param['comp_networking'] : 0;
	$comp_others = isset($param['comp_others']) ? $param['comp_others'] : "";

	$insert_comp_pro = "INSERT INTO computer_pro
					SET comp_refuser='$personal_id',
					comp_word='$comp_word',
					comp_excel='$comp_excel',
					comp_powerPoint='$comp_powerPoint',
					comp_autoCad='$comp_autoCad',
					comp_codeProg='$comp_codeProg',
					comp_databSQL='$comp_databSQL',
					comp_mediaEditing='$comp_mediaEditing',
					comp_hardware='$comp_hardware',
					comp_networking='$comp_networking',
					comp_others='$comp_others'";

	$result10 = mysqli_query($conn, $insert_comp_pro) or die(mysqli_error($conn));

	//EMPLOYMENT HISTORY
	$employment_arr = isset($param['employment_arr']) ? $param['employment_arr'] : []; 
	$employment = json_decode($employment_arr);
	foreach ($employment as $key => $value) {
		# code...
		$orgname = $value->orgname;
		$position = $value->position;	
		$last_salary = $value->last_salary;
		$startdate = $value->startdate;	
		$enddate = ($value->enddate != '') ? $value->enddate : '1970-01-01';	//just for the sake of empty date end
		$leaving_reason = $value->leaving_reason;	
		$insert_employment = "INSERT INTO employment_history
					SET emph_refuser='$personal_id',
					emph_nameWorkPlace='$orgname',
					emph_position='$position',
					emph_startDte='$startdate',
					emph_endDte='$enddate',
					emph_lastSal='$last_salary',
					emph_leaveReason='$leaving_reason'";

		$result11 = mysqli_query($conn, $insert_employment) or die(mysqli_error($conn));

	}

	//PRO MEMBERSHIP
	$activeProfm = isset($param['activeProfm']) ? $param['activeProfm'] : "";
	$pastProfm = isset($param['pastProfm']) ? $param['pastProfm'] : "";

	if (!empty($activeProfm) || !empty($pastProfm)) {
		# code...
		$insert_pro_membership = "INSERT INTO professional_membership SET pm_refuser='$personal_id',
						pm_activeMembership='$activeProfm',
						pm_pastMembership='$pastProfm'";

		$result12 = mysqli_query($conn, $insert_pro_membership) or die(mysqli_error($conn));
	}


	//DECLARATION
	$ans1 = isset($param['ans1']) ? $param['ans1'] : "";
	$ans2 = isset($param['ans2']) ? $param['ans2'] : "";
	$ans3 = isset($param['ans3']) ? $param['ans3'] : "";
	$ans4 = isset($param['ans4']) ? $param['ans4'] : "";
	$ans5 = isset($param['ans5']) ? $param['ans5'] : "";
	$ans6 = isset($param['ans6']) ? $param['ans6'] : "";
	$ans7 = isset($param['ans7']) ? $param['ans7'] : "";
	$ans8 = isset($param['ans8']) ? $param['ans8'] : "";
	$ans9 = isset($param['ans9']) ? $param['ans9'] : "";

	$insert_dec = "INSERT INTO declaration 
				SET dec_refuser='$personal_id',
				dec_ans1='$ans1',
				dec_ans2='$ans2',
				dec_ans3='$ans3',
				dec_ans4='$ans4',
				dec_ans5='$ans5',
				dec_ans6='$ans6',
				dec_ans7='$ans7',
				dec_ans8='$ans8',
				ans9='$ans9'";

	$result13 = mysqli_query($conn, $insert_dec) or die(mysqli_error($conn));

}
?>