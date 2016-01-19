describe('star rating', function () {

    var starRating, ratingServiceSpy;
    beforeEach(function() {
        ratingServiceSpy = {
            addRating: function () { }
        };

        starRating = new StarRating('<div>', ratingServiceSpy);
        starRating.render();
    });

    it('initially sets all stars as empty', function() {
        expect(starRating.el.find('.star').length).toBe(3);
        expect(starRating.el.find('.filled').length).toBe(0);
    });

    describe('clicking on the first star', function () {

        beforeEach(function () {
            spyOn(ratingServiceSpy, 'addRating')
                .and.callFake(function(req) {
                    var d = $.Deferred();
                    d.resolve(1);
                    return d.promise();
                });
            starRating.el.find('.star').eq(0).trigger('click');
        });

        it('will make a call to the rating service', function() {
            expect(ratingServiceSpy.addRating).toHaveBeenCalledWith(1);
        });

        it('fills one star', function () {
            expect(starRating.el.find('.star').length).toBe(3);
            expect(starRating.el.find('.filled').length).toBe(1);
        });
    });

    describe('clicking on the second star', function () {

        beforeEach(function () {
            spyOn(ratingServiceSpy, 'addRating')
                .and.callFake(function (req) {
                    var d = $.Deferred();
                    d.resolve(2);
                    return d.promise();
                });
            starRating.el.find('.star').eq(1).trigger('click');
        });

        it('will make a call to the rating service', function() {
            expect(ratingServiceSpy.addRating).toHaveBeenCalledWith(2);
        });
    });
});