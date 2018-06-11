<template>


<!-- DONE column -->
    <div class="col-sm">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title alert-success">DONE</h5>
                <small class="card-text">What you've done so far</small> 
             </div>
    
            <ul class="list-group list-group-flush">
              <li v-if="oneList.status" v-for="(oneList, index) in listDone"  class="list-group-item">
                 <p v-if="oneList.title">Title : {{oneList.title}}</p>
                <p v-if="oneList.details">Details : {{oneList.details}}</p>
                <p v-if="oneList.dueDate">Due Date : {{oneList.dueDate}}</p>
                <p v-if="oneList.currentDate">Created on : {{currentDate}} </p>
                <button @click="addToDo(oneList)" class="btn btn-primary">To Do</button>
                <button @click="addToDoing(oneList)" class="btn btn-warning">Doing</button>
                <button @click="deleteItem(oneList)" class="btn btn-danger">Delete</button>

              </li>
            </ul>
              
            </div>
          </div>

</template>


<script>
export default {
  props: ['lists', 'listDoing', 'listDone'],
  methods: {
    addToDo(index) {
      const newItem = {
        title: this.title,
        details: this.details,
        dueDate: this.dueDate,
        currentDate: this.currentDate,
        status: 'doing',
      };
      this.lists.push(index);
      this.listDone.splice(index, 1);
    },
    addToDoing(index) {
      const newItem = {
        title: this.title,
        details: this.details,
        dueDate: this.dueDate,
        currentDate: this.currentDate,
        status: 'doing',
      };
      this.listDoing.push(index);
      this.listDone.splice(index, 1);
    },
    deleteItem(index) {
      confirm('are you sure you want to delete this item ?');
      this.listDone.splice(index, 1);
    },
  },
};
</script>


<style scoped>
.btn-warning {
  color: white;
}
</style>
