function AjaxForm($el) {
    this.$form = $el;
    this.form = $el[0];
    this.$form.on('submit', $.proxy(this.submit, this));
};

AjaxForm.prototype = {
    submit: function (e) {
        e.preventDefault();

        var _this = this;
        $.ajax({
            url: _this.form.action,
            type: _this.form.method
        });
    }
};