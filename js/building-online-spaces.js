(function($) {
    $.fn.randomize = function(childElem) {
        return this.each(function() {
            var $this = $(this);
            var elems = $this.children(childElem);

            var colours=['orange','pink','red'];
            elems.sort(function() { return (Math.round(Math.random())-0.5); });

            $this.remove(childElem);

            for(var i=0; i < elems.length; i++) {
                $(elems[i]).css('background-color', colours[Math.floor(Math.random()*colours.length)]);
                $this.append(elems[i]);
            }

        });
    };
})(jQuery);

$('.outside-grid').masonry({
    itemSelector: 'grid-item',
    columnWidth: 150
});

$('.grid-item').click(function(){
    $('.outside-grid').randomize('.grid-item').masonry({
        itemSelector: 'grid-item',
        columnWidth: 150
    });
});
