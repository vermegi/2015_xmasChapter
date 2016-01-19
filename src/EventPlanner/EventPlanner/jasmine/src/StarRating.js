var StarRating = function(el) {
    this.el = $(el);
};

StarRating.prototype.render = function () {
    var template = '<span class="star"></span>' +
        '<span class="star"></span>' +
        '<span class="star"></span>';
    this.el.append($(template));
};