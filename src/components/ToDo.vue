<template>

<!-- TO DO column -->
       <div class="col-sm">
         <div class="card" style="width: 18rem;">
                
            <div class="card-body">
             <h5 class="card-title alert-primary">TO DO</h5>
              <small class="card-text">What you have to do</small> 
              
            </div>
                
            <ul class="list-group list-group-flush">
             
              <li v-if="oneList.status" v-for="(oneList, index) in lists" class="list-group-item">
              <template v-if="isEditing == true">
              <app-edit isEditing :lists="oneList"></app-edit>
            </template>
             <template v-else>

                <p v-if="oneList.title">Title : {{oneList.title}}</p>
                <p v-if="oneList.details">Details : {{oneList.details}}</p>
                <p v-if="oneList.dueDate">Due Date : {{oneList.dueDate}}</p>
                <p v-if="oneList.currentDate">Created on : {{oneList.currentDate}} </p>

                <button @click="isEditing = !isEditing"  class="btn btn-info">Edit</button>

                <button @click="addToDoing(oneList)"  class="btn btn-warning">Doing</button>
                <button @click="addToDone(oneList)"  class="btn btn-success">Done</button>
             </template>
                </li>
            </ul>



              <div class="card-body">
              <button @click="show =!show" class="form-control btn btn-primary">Add a Task</button>
                  <div v-show="show">
                    <br>
                    
                    <form>
                    <input v-model="title" :id="title" type="text" class="form-control" placeholder="Title">
                    <br>
                    <textarea v-model="details" :id="details" class="form-control" placeholder="Some Details"></textarea>
                    <p>Due Date :
                    <input v-model="dueDate" :id="dueDate" type="date" class="form-control" placeholder="Due Date"></p>
                    <p>Current Date :
                    <input :id="currentDate" v-model="currentDate" type="text" class="form-control" :placeholder="{currentDate}" disabled></p>
                    <button @click="add" class="btn btn-success form-control">Add</button>
                    </form>
                  </div> 
              </div>
          </div>
        </div>


</template>


<script>
import Edit from './Edit.vue';

export default {
  components: {
    'app-edit': Edit,
  },
  props: ['lists', 'listDoing', 'listDone'],
  data() {
    return {
      show: false,
      isEditing: false,
      currentDate: new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, '/'),
    };
  },
  methods: {
    add() {
      const newItem = {
        title: this.title,
        details: this.details,
        dueDate: this.dueDate.replace(/-/g, '/'),
        currentDate: this.currentDate,
        status: 'toDo',
      };

      this.lists.push(newItem);
      this.title = '';
      this.dueDate = '';
      this.details = '';
      this.show = false;
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
      this.lists.splice(index, 1);
    },
    addToDone(index) {
      const newItem = {
        title: this.title,
        details: this.details,
        dueDate: this.dueDate,
        currentDate: this.currentDate,
        status: 'done',
      };
      this.listDone.push(index);
      this.lists.splice(index, 1);
    },
  },
};
</script>


<style scoped>
.btn-warning {
  color: white;
}
</style>
