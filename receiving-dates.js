$(document).ready(function() {   
    // window.addEventListener('beforeunload', function (e) {
    //     e.preventDefault();
    //     e.returnValue = '';
    // });
    
    $('#arrival_date_in').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#validity_start_date_ed').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#validity_end_date_ed').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#validity_start_date').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#validity_end_date').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#date_from').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#date_to').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#manufac_date_in').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#expiry_date_in').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#manufac_date_in_ed').datetimepicker({
        format:'D-MMM-YYYY',
    });
    $('#expiry_date_in_ed').datetimepicker({
        format:'D-MMM-YYYY',
    });
});