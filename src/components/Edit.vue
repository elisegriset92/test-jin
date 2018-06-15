<template>
   <form>
    <input v-model="title" :id="title" type="text" class="form-control" :placeholder="newItem.title">
   <br>
  <textarea v-model="details" :id="details" class="form-control" :placeholder="newItem.details"></textarea>
  <p>Due Date :
  <input v-model="dueDate" :id="dueDate" type="date" class="form-control" :placeholder="newItem.dueDate"></p>
  <button @click="save" class="btn btn-info">Edit</button>
   <button @click="isEditing == !isEditing" class="btn btn-danger">Go Back</button>
  </form>

</template>

<script>
import ToDo from './ToDo.vue';

export default {
  components: {
    appToDo: ToDo,
  },
  props: ['lists', 'isEditing'],
  data() {
    return {
      newItem: {
        title: this.lists.title,
        details: this.lists.details,
        dueDate: this.lists.dueDate.replace(/-/g, '/'),
      },
    };
  },
  methods: {
    save() {
      console.log('save', this.newItem);
    },
  },
};
</script>

<style>
</style>
