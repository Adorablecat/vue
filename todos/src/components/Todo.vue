<template lang="html">
    <li class="todo" :class="{completed : todo.done, editing : editing }">
		<div class="view">
			<input type="checkbox" class="toggle" :checked="todo.done"
                @change="toggleTodo(index)">
			<label @dblclick="editing=true">{{todo.text}}</label>
			<button class="destroy" @click="deleteTodo(index)"></button>
		</div>
		<input type="text" class="edit" :value="todo.text"
            @keyup.enter="doneEdit"
            @blur="doneEdit"
            @keyup.esc="cancenEdit"
        >
	</li>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            editing : false
        }
    },
    props : {
        todo : Object,
        index : Number
    },
    methods : {
        cancenEdit(){
            this.editing = false;
        },
        doneEdit(e){
            let text = e.target.value.trim();
            if (text) {
                this.updateTodo({text, index : this.index});
            } else {
                this.deleteTodo(this.index);
            }
            this.editing = false;
        },
        ...mapMutations([
            'deleteTodo',
            'toggleTodo',
            'updateTodo'
        ]),
    }
}
</script>

<style lang="css">
</style>
