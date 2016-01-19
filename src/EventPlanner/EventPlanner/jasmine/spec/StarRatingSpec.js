describe('star rating', function () {

    var starRating;
    beforeEach(function() {
        starRating = new StarRating('<div>');
        starRating.render();
    });

    it('initially sets all stars as empty', function() {
        expect(starRating.el.find('.star').length).toBe(3);
        expect(starRating.el.find('.filled').length).toBe(0);
    });
});