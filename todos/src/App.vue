<template lang="html">
    <section class="todoapp">
		<header class="header">
			<h1>todos</h1>
				<input type="text" placeholder="what need to be done?" class="new-todo"
                    @keyup.enter="addTodo"
                >
		</header>
		<section class="main" style="">
			<input type="checkbox" class="toggle-all" :checked="allChecked"
                @change="toggleAll(!allChecked)">
				<ul class="todo-list" v-for="(todo,index) in filteredTodos">
                    <todo :todo="todo" :index="index"></todo>
				</ul>
		</section>
		<footer class="footer" style="">
			<span class="todo-count"><strong>{{remaining}}</strong> items left</span>
			<ul class="filters">
				<li><a href="" :class="{selected:visibility=='all'}" @click.prevent="visibility='all'">all</a></li>
				<li><a href="" :class="{selected:visibility=='active'}" @click.prevent="visibility='active'">active</a></li>
				<li><a href="" :class="{selected:visibility=='completed'}" @click.prevent="visibility='completed'">completed</a></li>
			</ul>
			<button class="clear-completed" v-show="todos.length > remaining"
                @click="clearCompleted">clear completed</button>
		</footer>
	</section>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import Todo from './components/Todo'


const filters = {
    all : todos => todos,
    active : todos => todos.filter(todo => !todo.done),
    completed : todos => todos.filter(todo => todo.done)
}

export default {
    data(){
        return {
            visibility : 'all'
        }
    },
    computed : {
        ...mapState(['todos']),
        ...mapGetters([
            'allChecked',
            'remaining'
        ]),
        filteredTodos(){
            return filters[this.visibility](this.todos);
        }
    },
    methods : {
        ...mapMutations([
            'toggleAll',
            'clearCompleted'
        ]),
        addTodo(e){
            let text = e.target.value.trim();
            if(text) {
                this.$store.commit('addTodo',{text});
                
                e.target.value = "";
            }
        }
    },
    components : {
        Todo
    }
}
</script>

<style lang="css">
</style>
