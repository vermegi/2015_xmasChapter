function TodoVM() {
    this.todos = ko.observableArray();
    this.currentTodo = ko.observable();
};

TodoVM.prototype.addTodo = function() {
    this.todos.push(this.currentTodo());
};

describe('TodoViewModel', function () {
    var vm;

    beforeEach(function() {
        vm = new TodoVM();
    });

    it('has an empty list of todos', function() {
        expect(vm.todos().length).toBe(0);
        expect(ko.isObservable(vm.todos)).toBeTruthy();
    });

    describe('adding a todo item', function() {

        beforeEach(function() {
            vm.currentTodo("do something");
            vm.addTodo();
        });

        it('adds the current todo to the list of todos', function() {
            expect(vm.todos().length).toBe(1);
        });
    });
});