var PPR = PPR || {};


window.KnackInit = function($) {
  'use strict';

  /*
  Page "scene_383": Program Program Attendance form
  ========================================================
  Views
  -----
  - view_154: Weekly Program Attendance form
  Fields
  ------
  - field_151: Number of Registered Participants 
  - field_150: Number of Unique Participants
  - field_152: Number of Spectators
  - field_148: Attendance Week
  - field_380: Facility Name
  */
  PPR.attendanceForm = PPR.attendanceForm || {};

  $(document).on('knack-page-render.scene_234', function(event, page) {
    var numericFields = [
      '#field_151',
      '#field_150',
      '#field_152'
    ];
    var $attendanceWeekFieldOld = $('#view_426-field_148');
    //var $facilityField = $('#view_661-field_380');
    var today, monday, daysSinceMonday;
     
      
    /**********************************
    /* Only allow Mondays to be selected
    /***********************************/
    $attendanceWeekFieldOld.datepicker('option', {
      beforeShowDay: function (date) {
        console.debug(date);
        return [date.getDay() == 1, ''];
      }
    });

    var lastDateOld = localStorage.getItem("formDateOld");

    //Set date if stored in localstorage
    if (lastDateOld != null) {
      console.log(lastDateOld);
      $attendanceWeekFieldOld.val(lastDateOld);
      
    }
    // If this is the first time the form has been loaded, use the Monday
    // immediately preceding today.
    else {
      today = new Date();
      monday = new Date(today);

      daysSinceMonday = today.getDay() - 1;  // 0 is Sunday, 1 is Monday
      daysSinceMonday = (daysSinceMonday + 7) % 7;  // Correct for negatives
      daysSinceMonday = daysSinceMonday || 7;  // Correct to last Monday if today is Monday
      monday.setDate(today.getDate() - daysSinceMonday - 7);
      $attendanceWeekFieldOld.val((monday.getMonth() + 1) + '/' + monday.getDate() + '/' + monday.getFullYear());
    }

    // Remember the attendance form date whenever it changes.
    $attendanceWeekFieldOld.on('change', function() {
      PPR.attendanceForm.lastDateOld = $attendanceWeekFieldOld.val();
      localStorage.setItem("formDateOld", PPR.attendanceForm.lastDateOld);
    });


    // Verify that numeric fields have a number in them
    $(numericFields.join(',')).each(function(i, el) {
      $(el).attr('pattern', '[0-9]*');
    });

    return true;
  });

$(document).on('knack-page-render.scene_362', function(event, page) {

    var numericFields = [
      '#field_151',
      '#field_150',
      '#field_152'
    ];
    var $attendanceWeekField = $('#view_661-field_148');
    var $facilityField = $('#view_661-field_380');
    var today, monday, daysSinceMonday;
     
      
    /**********************************
    /* Only allow Mondays to be selected
    /***********************************/
    $attendanceWeekField.datepicker('option', {
      beforeShowDay: function (date) {
        console.debug(date);
        return [date.getDay() == 1, ''];
      }
    });

    // If this is not the first time the form has been submitted, use the last
    // selected value for the date.
    var lastDate = localStorage.getItem("formDate");
    var lastFacility = localStorage.getItem("facilityName")

    //Set Facility Field if stored in localstorage
    if (lastFacility != null) {
      console.log(lastFacility);
      $facilityField.value = lastFacility;
      $facilityField.val(lastFacility);
      $facilityField.trigger("liszt:updated");
      $facilityField.chosen().trigger("change");
    };

    //Set date if stored in localstorage
    if (lastDate != null) {
      console.log(lastDate);
      $attendanceWeekField.val(lastDate);
      
    }
    // If this is the first time the form has been loaded, use the Monday
    // immediately preceding today.
    else {
      today = new Date();
      monday = new Date(today);

      daysSinceMonday = today.getDay() - 1;  // 0 is Sunday, 1 is Monday
      daysSinceMonday = (daysSinceMonday + 7) % 7;  // Correct for negatives
      daysSinceMonday = daysSinceMonday || 7;  // Correct to last Monday if today is Monday
      monday.setDate(today.getDate() - daysSinceMonday - 7);
      $attendanceWeekField.val((monday.getMonth() + 1) + '/' + monday.getDate() + '/' + monday.getFullYear());
    }

    // Remember the attendance form date whenever it changes.
    $attendanceWeekField.on('change', function() {
      PPR.attendanceForm.lastDate = $attendanceWeekField.val();
      localStorage.setItem("formDate", PPR.attendanceForm.lastDate);
    });

    // Remember the facility name whenever it changes.
     $facilityField.on('change', function() {
      PPR.attendanceForm.facilityName = $facilityField.val();
      localStorage.setItem("facilityName", PPR.attendanceForm.facilityName);
    });

    // Verify that numeric fields have a number in them
    $(numericFields.join(',')).each(function(i, el) {
      $(el).attr('pattern', '[0-9]*');
    });

    return true;
  });
};
