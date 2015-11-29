var PPR = PPR || {};

window.KnackInit = function($) {
  'use strict';

  /*
  Page "scene_1": Weekly Program Attendance form and table
  ========================================================
  Views
  -----
  - view_1: Weekly Program Attendance form
  Fields
  ------
  - field_38: Number of Registered Participants
  - field_39: Number of Unique Participants
  - field_40: Number of Spectators
  - field_41: Attendance Week
  */


    
  $(document).on('knack-page-render.scene_1', function(event, page) {
    PPR.attendanceForm = PPR.attendanceForm || {};

    var numericFields = [
      '#field_38',
      '#field_39',
      '#field_40'
    ];
    var $attendanceWeekField = $('#view_1-field_41');
    var today, monday, daysSinceMonday;

    /**********************************
    / Pull in username for smooch ID
    /***********************************/
      
var u_givenname;
var u_surname;
var u_email; 
    
*var attributes = Knack.getUserAttributes();
u_givenname = attributes['name'].split(" ")[0];
u_surname = attributes['name'].split(" ")[1];
u_email = attributes['email'];
      
      
Smooch.init({
      appToken: '6jhd64mwwj4k58b4bnauonrt6',
      givenName: "test"//ugivenname,
      surname: "test"//usurname,
      email: "test" //uemail
      email: "test" //uemail
      });
     
      
    /**********************************
    /* Only allow Mondays to be selected
    /***********************************/
    $attendanceWeekField.datepicker('option', {
      beforeShowDay: function (dat
        //console.debug(date);
        return [date.getDay() == 1, ''];
      }
    });

    // If this is not the first time the form has been submitted, use the last
    // selected value for the date.
    if (PPR.attendanceForm.lastDate) {
      $attendanceWeekField.val(PPR.attendanceForm.lastDate);
    }

    // If this is the first time the form has been loaded, use the Monday
    // immediately preceding today.
    else {
      today = new Date();
      monday = new Date(today);

      daysSinceMonday = today.getDay() - 1;  // 0 is Sunday, 1 is Monday
      daysSinceMonday = (daysSinceMonday + 7) % 7;  // Correct for negatives
      daysSinceMonday = daysSinceMonday || 7;  // Correct to last Monday if today is Monday
      monday.setDate(today.getDate() - daysSinceMonday);
      $attendanceWeekField.val((monday.getMonth() + 1) + '/' + monday.getDate() + '/' + monday.getFullYear());
    }

    // Remember the attendance form date whenever it changes.
    $attendanceWeekField.on('change', function() {
      PPR.attendanceForm.lastDate = $attendanceWeekField.val();
    });

    // Verify that numeric fields have a number in them
    $(numericFields.join(',')).each(function(i, el) {
      $(el).attr('pattern', '[0-9]*');
    });
  });
};