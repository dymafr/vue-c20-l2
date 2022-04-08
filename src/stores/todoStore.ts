import { defineStore } from 'pinia';

interface TodoState {
  
}

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: [],
  }),
});
