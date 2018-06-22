<template :isEditing="isEditing">
   <form>
    <input v-model="title" :id="title" ref="title" type="text" class="form-control" :placeholder="lists.title">
   <br>
  <textarea v-model="details" :id="details" ref="details" class="form-control" :placeholder="lists.details"></textarea>
  <p>Due Date :
  <input v-model="dueDate" :id="dueDate" ref="due_date" type="date" class="form-control" :placeholder="lists.dueDate"></p>
  <button @click="save" class="btn btn-info">Edit</button>
   <button @click="mutateEdit=!mutateEdit" class="btn btn-danger">Go Back</button>
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
    mutateEdit: JSON.parse(this.isEditing);
  },

  methods: {
    save() {
      this.lists.title = this.$refs['title'].value;
      this.lists.details = this.$refs['details'].value;
      this.lists.dueDate = this.$refs['due_date'].value;
      this.mutateEdit = !this.mutateEdit;
      console.log(this.mutateEdit);
    },
  },
};
</script>

<style>
</style>
