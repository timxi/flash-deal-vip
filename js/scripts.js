var cache = {}

function refreshImages() {
    if (!cache.$images) {
        cache.$images = $('img.card-img-top')
    }
    cache.$images.each(function () {
        var $this = $(this)
        if ($this.attr('data-src') && $this.offset().top < ($(window).scrollTop() + window.innerHeight + 100)) {
            console.log($this.offset().top, $(window).scrollTop(), window.innerHeight)
            var source = $this.data('src');
            $this.attr('src', source);
            $this.removeAttr('data-src');
        }
    })
}

$(document).ready(function () {
    $('.code-active').click(function () {
        var $this = $(this)
        navigator.clipboard.writeText($this.attr('code').trim());
        $this.addClass('code-copied');
        setTimeout(function () {
            $this.removeClass('code-copied')
        }, 5000)
    })

    $('.p-buy').click(function () {
        var $this = $(this)
        if ($this.attr('code')) {
            navigator.clipboard.writeText($this.attr('code').trim());
        }
    })
    refreshImages()
    $(window).scroll(refreshImages)
})
