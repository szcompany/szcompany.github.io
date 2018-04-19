$(document).ready(function () {

    $('.menu-btn').click(function () {
        $('.menu-btn').hide();
        $('.menu-btn2').show();
    });
    $('.menu-btn2').click(function () {
        $('.menu-btn').show();
        $('.menu-btn2').hide();
    });


    $(window).bind('scroll', function () {
        $('.progress-bar').css({'transition': 'all 3s'});
        $('#ux').css({'width': '75%'});
        $('#web').css({'width': '90%'});
        $('#marketing').css({'width': '65%'});

    });



    $(window).on("load", function(){
        var $grid = $(".portfolio-item").isotope({
            layoutMode: 'fitRows',
            itemSelector: '.item',
            percentPosition: true,
            fitRows: {
                gutter: 0
            }


        });
        $(".filter-button-group").on("click", "button", function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });

    });

validName=false;
validEmail=false;

$('form').on("submit", function (ev) {

    ev.preventDefault();


    var name= $("#name").val();
    var email= $("#email").val();
    var title= $('#title').val();


    if(name==''){
        $("#name").parent().removeClass("has-success").addClass("has-error");
        validName=false;
    } else{
        $("#name").parent().removeClass("has-error").addClass("has-success");
        validName=true;
    }

    if(email==''){
        $("#email").parent().removeClass("has-success").addClass("has-error");
        validEmail=false;
    } else{
        $("#email").parent().removeClass("has-error").addClass("has-success");
        validEmail=true;
    }

    if(title==''){
        $("#title").parent().removeClass("has-success").addClass("has-error");
        validName=false;
    } else{
        $("#title").parent().removeClass("has-error").addClass("has-success");
        validName=true;
    }



    if(validName && validEmail){
        $("form").unbind("submit").submit();
    }else{
        $('#myModal').modal('show');
    }













})






})

