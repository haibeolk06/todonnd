const todos = [{
    
}];

exports.add = function (name) {
    todos.push({ name, done: false });
}

exports.getAll = function() {
    return todos;
}