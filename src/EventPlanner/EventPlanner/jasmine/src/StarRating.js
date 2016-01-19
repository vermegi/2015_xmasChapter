var StarRating = function(el, service) {
    this.el = $(el);
    this.service = service;
};

StarRating.prototype.render = function () {
    var _this = this;
    var template = '<span class="star" data-rating="1"></span>' +
        '<span class="star" data-rating="2"></span>' +
        '<span class="star" data-rating="3"></span>';
    this.el.append($(template));

    this.el.children().each(function() {
        $(this).on('click', $.proxy(_this.starIt, _this));
    });
};

StarRating.prototype.starIt = function (event) {
    var _this = this;
    var data = parseInt($(event.currentTarget).data('rating'), 10);
    this.service.addRating(data)
        .done($.proxy(_this.updateStars, _this));
};

StarRating.prototype.updateStars = function(data) {
    for (var i = 0; i < data; i++) {
        this.el.children().eq(i).addClass('filled');
    }
}; 