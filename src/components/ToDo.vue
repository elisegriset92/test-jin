<template>

<div class="container">
  <h4>To Do List</h4>
  
  <hr>
    <div class="row">

<!-- TO DO column -->
       <div class="col-sm">
         <div class="card" style="width: 18rem;">
            <div class="card-body">
             <h5 class="card-title alert-primary">TO DO</h5>
              <small class="card-text">What you have to do</small> 
            </div>
 
            <ul class="list-group list-group-flush">
              <li v-for="(oneList, index) in lists" class="list-group-item">
                <p v-if="oneList.title">Title : {{oneList.title}}</p>
                <p v-if="oneList.details">Details : {{oneList.details}}</p>
                <p v-if="oneList.dueDate">Due Date : {{oneList.dueDate}}</p>
                <p v-if="oneList.currentDate">Created on : {{currentDate}} </p>

                <button @click="addToDoing" v-if="oneList.status" class="btn btn-warning">Doing</button>
                <button @click="addToDone" v-if="oneList.status" class="btn btn-success">Done</button>
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

<!-- DOING column -->
    <div class="col-sm">
       <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title alert-warning">DOING</h5>
             <small class="card-text">What you are currently doing</small> 
            </div>
 
        <ul class="list-group list-group-flush">
           <li v-for="(oneList, index) in listDoing" class="list-group-item">
                <p v-if="oneList.title">Title : {{oneList.title}}</p>
                <p v-if="oneList.details">Details : {{oneList.details}}</p>
                <p v-if="oneList.dueDate">Due Date : {{oneList.dueDate}}</p>
                <p v-if="oneList.currentDate">Created on : {{currentDate}} </p>
                <button @click="addToDoing" v-if="oneList.title" class="btn btn-warning">Doing</button>
                <button v-if="oneList.title" class="btn btn-success">Done</button>
                </li>

        </ul>
          <div class="card-body">
          </div>
        </div>
      </div>


<!-- DONE column -->
    <div class="col-sm">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title alert-success">DONE</h5>
                <small class="card-text">What you've done so far</small> 
             </div>
    
            <ul class="list-group list-group-flush">
              <li class="list-group-item"></li>
            </ul>
              <div class="card-body">

              </div>
            </div>
          </div>

    </div>
</div>
</template>


<script>
export default {
  data() {
    return {
      show: false,
      currentDate: new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, '/'),
      lists: [
        {
          title: '',
          details: '',
          dueDate: '',
          currentDate: '',
        },
      ],
      listDoing: [
        {
          title: '',
          details: '',
          dueDate: '',
          currentDate: '',
        },
      ],
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
      if ((this.title = '')) {
        return alert('You must fill the title field');
      }
      this.listDoing.push(newItem);
      this.lists.splice(index, 1);
    },

    addToDone(index) {
      console.log('click works');
    },
  },
};
</script>


<style scoped>
.btn-warning {
  color: white;
}

button {
  margin-top: 1vh;
}
</style>
