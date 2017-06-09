export default {
   
    addTodo(state,{text}) {
        state.todos.push({
            text,
            done : false
        });
    },
   
    deleteTodo(state,index) {
        state.todos.splice(index,1);
    },
    updateTodo(state,{text, index}){
        state.todos[index].text = text;
    },
    toggleTodo(state,index){
        state.todos[index].done = !state.todos[index].done;
    },
    toggleAll(state,done){ 
        state.todos.forEach( todo => todo.done = done );
    },
    clearCompleted(state){
        state.todos = state.todos.filter( todo => !todo.done);
    }
}
