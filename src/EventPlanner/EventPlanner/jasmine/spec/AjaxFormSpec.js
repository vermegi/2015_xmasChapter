describe('an AJAX form', function () {

    var $el, subject, successfunc;
    beforeEach(function() {
        $el = $('<form action="/foo" method="post" />');
        successfunc = jasmine.createSpy('successfunc');
        subject = new AjaxForm($el, successfunc);
    });

    describe('when the form is submitted', function() {

        var submitEvent, dataFromService;
        beforeEach(function () {
            dataFromService = { yada: 'dada' };
            spyOn($, 'ajax').and.callFake(function (req) {
                var d = $.Deferred();
                d.resolve(dataFromService);
                return d.promise();
            });
            submitEvent = $.Event('submit');
            subject.$form.trigger(submitEvent);
        });

        it('should prevent the default form submitted action', function() {
            expect(submitEvent.isDefaultPrevented()).toBeTruthy();
        });

        describe('the AJAX request', function() {
            it('should make a post', function() {
                expect($.ajax.calls.mostRecent().args[0].type).toEqual('post');
            });
            it('should go to /foo', function() {
                expect($.ajax.calls.mostRecent().args[0].url.indexOf('/foo')).not.toBe(-1);
            });
        });

        it('triggers a success event', function() {
            expect(successfunc).toHaveBeenCalledWith(dataFromService);
        });
    });
});