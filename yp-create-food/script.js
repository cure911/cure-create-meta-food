$(document).ready(function () {
    function checkboxFunction() {
        $('.jss256').click(function() {
            var check = $(this).prop('checked');
            var findSVG = $(this).parent('span').children('.MuiSvgIcon-root');
            if (check == true) {
                findSVG.html(`<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>`);
                $(this).parent('span').children('.MuiSvgIcon-root').css('fill', '#f2a365');
                $(this).addClass('MuiIconButton-colorSecondary')
            } else {
                findSVG.html(`<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>`);
                $(this).parent('span').children('.MuiSvgIcon-root').css('fill', 'rgba(255, 255, 255, 0.7)');
                $(this).removeClass('MuiIconButton-colorSecondary')
            }
        })
    }
    checkboxFunction();

    var picker = "";

    $('.color-pci').click(function(e){
        e.preventDefault();
        $('.color-menu .MuiPaper-root').css('position', 'absolute');
        $('.color-menu .MuiPaper-root').css('top', e.pageY+15);
        $('.color-menu').fadeIn();
        $('.color-menu').css('display', 'flex');
        $('.color-ul').show();
        $('.bg-ul').hide();
        picker = $(this).attr('id');
    })
    $('.hide-color').click(function(){
        $('.color-menu').fadeOut();
    })

    $('.type').click(function(){
        var text = $(this).text();
        console.log(picker)
        $(`#${picker}`).children('div').text(`${text}`)
        $('.color-menu').hide();
    })
});