jQuery(function ($) {
    $(document).ready(function () {
        $('.upload-file-wrapper').on('click', '.file-icon', function(e){
            $(this).parents('.upload-file-wrapper').find('input[type=file]').click();
        });

        //upload picture
        $('.upload-file-wrapper').on('change', 'input[type=file]', function(e){
            var filesName = e.target.files[0].name;
            if(filesName){
                $(this).parents('.upload-file-wrapper').find('.file-name').html(filesName);
            }
        });

        var formValid = document.getElementsByClassName('form-valid')[0];
        $('.valid-form-send').click(function () {
            $(this).parents('form').submit(function (e) {
                e.preventDefault();
                var el = document.querySelectorAll('.form-valid [data-reqired]');
                var erroreArrayElemnts = [];
                for (var i = 0; i < el.length; i++) {
                    if (el[i].value === '' || el[i].value === ' ' || el[i].value === '-') {
                        erroreArrayElemnts.push(el[i]);
                        $(el[i]).parents('.form-group').addClass('has-error');
                        $(el[i]).focus(function (e) {
                            $(e.target).parents('.form-group').removeClass('has-error');
                        });
                    }
                }

                var el = document.querySelectorAll('.form-valid input[type="radio"]');
                for (var i = 0; i < el.length; i++) {
                    var name = el[i].getAttribute('name');
                    if (document.querySelectorAll('[name=' + name + ']:checked').length === 0) {
                        if ($(el[i]).parents('.radio-group').length != 0) {
                            erroreArrayElemnts.push(el[i]);
                            $(el[i]).parents('.radio-group').addClass('has-error');
                            $('.radio-group input').change(function (e) {
                                $(e.target).parents('.radio-group').removeClass('has-error');
                            });
                        }
                    }
                }

                var el = document.querySelectorAll('.form-valid input[type="checkbox"]');
                for (var i = 0; i < el.length; i++) {
                    if ($(el[i]).parents('.check-group').length != 0 && el[i].checked != true) {
                        $(el[i]).parents('.check-group').addClass('has-error');
                        $('.check-group input').change(function (e) {
                            $(e.target).parents('.check-group').removeClass('has-error');
                        });
                    }
                }

                if (erroreArrayElemnts.length == 0) {
                    formValid.submit();
                }
                if (erroreArrayElemnts.length > 0) {
                    console.log('error');
                    return false;
                }
            });
        });

    });
});