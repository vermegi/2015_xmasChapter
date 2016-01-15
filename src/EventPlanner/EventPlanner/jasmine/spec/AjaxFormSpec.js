describe('an AJAX form', function () {

    var $el, subject;
    beforeEach(function() {
        $el = $('<form action="/foo" method="post" />');
        subject = new AjaxForm($el);
    });

    describe('when the form is submitted', function() {

        var submitEvent;
        beforeEach(function () {
            spyOn($, 'ajax');
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
    });
});