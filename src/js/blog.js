// Fade in for summary
$('.card').click(function() {
    if (!$(this).closest('.column').hasClass('active')) {
        $(this).closest('.all').addClass('active');
        $(this).closest('.column').addClass('active');
    }
});

$('.blog_close').click(function() {
    $(this).closest('.column').removeClass('active');
    $(this).closest('.all').removeClass('active');
});