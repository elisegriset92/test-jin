<template>



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


</template>


<script>
export default {
  props: ['lists'],

  data() {
    return {
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
  methods: {},
};
</script>


<style scoped>
.btn-warning {
  color: white;
}
</style>
