/*
 * Nav3Project
 * http://samstevenm.com
 *
 * Copyright (c) 2015 Sam Myers - http://samstevenm.com
 *
 */
        jQuery(function ($) {
          
        var base_url = 'filebrowser://';
        var base_path = 'fs007/jobs/DOM/Ltg_Projects/Projects';
        var base_pdfex = 'pdfefile://';
        var base_pdfex_path = 'Documents/Downloads';
        var dummy = 1; //dummy counting
        var today = new Date(); //Today
        var today = today.toISOString().substring(0, 10); //better date]
        
        if ('saved_search_history' in localStorage) {
        // alert ("Stored")
        $('#clear_history').show( 'fast' );
        $('#search_history').html(localStorage.getItem('saved_search_history'));
          }
          
        if ('saved_PDF_search_history' in localStorage) {
        // alert ("Stored")
        $('#PDF_expert').show( 'fast' );
        $('#PDF_search_history').html(localStorage.getItem('saved_PDF_search_history'));
        $('#job_date').attr('value', today);

          }
          
        if ('last_job_number' in localStorage) {
        var last_job_number = parseInt((localStorage.getItem('last_job_number')));
        //alert (last_job_number);
        $('#job_number').val(last_job_number);
           }
           
        
		
		
		
		     $('#job_number').keypress(function (e) {
		        // Allow: backspace, delete, tab, escape, enter and .
           if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57)) {
            
        $('#err_msg').html('Job <u>NUMBER</u>').show().fadeOut('slow');
        dummy = dummy + 1;
        if (dummy > 3) { alert('Try entering numbers only.');}
        if (dummy > 5) { alert('Seriously?');}
        if (dummy > 7) { alert('Numbers?');
         window.location.replace('http://bfy.tw/1SQ9'); 
        }
        e.preventDefault();
               return false;
               
			   }
			   });
       
        
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { // check if mobile
        
        //stuff to do on mobile
        
        $('#auto_open').show( 'slow' );
        $('#fb_auto_open').attr('checked', true);
        
        } else {
        
        //stuff to do on desktop
  
          $('#desktop_mobile').show( 'slow' );
          $('.head').append("<link type='text/css' href='../../css/mobile.css' rel='stylesheet' media='screen' />");
          var base_url = 'file://';
        }
        
        $('#PDF_expert_toggle').click(function(e) {  //Submits the form
        $('#PDF_expert').toggle();
        $('#job_date').attr('value', today);
      
         e.preventDefault();
         });
         
          $('#new_signoff').click(function(e) { 
          
          var job_number = parseInt($('#job_number').val());
          var job_date = String($('#job_date').val());
          var new_SO = job_number + '_SO_' + job_date + ".pdf";
          var new_so_path = 'pdfehttp://samstevenm.com/share/Nav3Project/SOS/'+ new_SO; 
          window.open(new_so_path, '_blank');
         
           $.post( "copy.php", { new_SO: new_SO, TEST: today }) //Pass the directory to be deleted to delete.php, which will remove all files in the directory
            .done(function( data ) {
            alert (new_SO+ " will be downloaded to PDF Expert");
           
            });
       

         e.preventDefault();
         });
         
        
		
        $('#btn_project_folder').click(function(e) {  //Submits the form
        $('#frm_job_number').submit();
         e.preventDefault();
         });
         
         $('#clear_history').click(function(e) {  //Submits the form
          localStorage.clear();
          $('#search_history').html('');
           $('#PDF_search_history').html('');
          $('#clear_history').hide('fast');
         e.preventDefault();
         });
         
        
        $('#frm_job_number').submit(function(e) {  //Generates path to JN
        var job_number = parseInt($('#job_number').val());

       //JN Validation
         if (String(job_number).length < 7){
         alert('Probably not a valid job number. Here we go.'); 
         
		     }
         
        //alert ('You Entered This: ' + job_number);
         
        var job_proj = String(job_number).substring(0, 4);
        var full_proj_path = base_url + base_path + job_proj + "/" + job_number;
       
        
        //alert ('The path might be: ' + full_proj_path);
        
         $('#search_history').show( 'fast' );
         $('#search_history').prepend('<b>' +job_number + '</b> Project Folder: <a href="'+full_proj_path+'" target="_blank">' + full_proj_path + ' </a><br />');
         
        
         var full_pdf_path = base_pdfex + base_pdfex_path + '/'+ job_number + '_SO_' + $('#job_date').val() + ".pdf";
         $('#PDF_search_history').prepend('<b>' +job_number + '</b> PDF Expert: <a href="'+full_pdf_path+'" target="_blank">' + full_pdf_path + ' </a><br />');
        
         
         $('#clear_history').show('fast');
      
        
        localStorage.setItem('last_job_number', job_number); //save last job number
        var saved_search_history = $('#search_history').html();
        localStorage.setItem('saved_search_history', saved_search_history);
        var saved_PDF_search_history = $('#PDF_search_history').html();
        localStorage.setItem('saved_PDF_search_history', saved_PDF_search_history);

         
        if ($('#fb_auto_open').is(':checked')) {
           window.open(full_proj_path, '_blank');
           window.open(full_pdf_path, '_blank');
        } 
         
        e.preventDefault();
          
        });
        
        
        });
