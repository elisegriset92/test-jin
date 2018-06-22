<template>



<!-- DOING column -->
    <div class="col-sm">
       <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title alert-warning">DOING</h5>
             <small class="card-text">What you are currently doing</small> 
            </div>
 
        <ul class="list-group list-group-flush">
           <li v-if="oneList.title" v-for="(oneList, index) in listDoing" class="list-group-item">
                <p v-if="oneList.title">Title : {{oneList.title}}</p>
                <p v-if="oneList.details">Details : {{oneList.details}}</p>
                <p v-if="oneList.dueDate">Due Date : {{oneList.dueDate}}</p>
                <p v-if="oneList.currentDate">Created on : {{oneList.currentDate}} </p>
                <button @click="addToDo(oneList)" class="btn btn-primary">To Do</button>
                <button @click="addToDone(oneList)" class="btn btn-success">Done</button>
            </li>

        </ul>
        
        </div>
      </div>


</template>


<script>
export default {
  props: ['lists', 'listDoing', 'listDone'],

  data() {
    return {};
  },
  methods: {
    addToDone(index) {
      const newItem = {
        title: this.title,
        details: this.details,
        dueDate: this.dueDate,
        currentDate: this.currentDate,
      };
      this.listDone.push(index);
      this.listDoing.splice(index, 1);
    },
    addToDo(index) {
      const newItem = {
        title: this.title,
        details: this.details,
        dueDate: this.dueDate,
        currentDate: this.currentDate,
      };
      this.lists.push(index);
      this.listDoing.splice(index, 1);
    },
  },
};
</script>


<style scoped>
</style>
