function TodoVM() {
    this.todos = ko.observableArray();
};

describe('TodoViewModel', function () {
    var vm;

    beforeEach(function() {
        vm = new TodoVM();
    });

    it('has an empty list of todos', function() {
        expect(vm.todos.length).toBe(0);
        expect(ko.isObservable(vm.todos)).toBeTruthy();
    });

});