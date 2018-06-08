<template>
<div class="container">
  <h4>To Do List</h4>
  
  <hr>
      <div>
          <div class="row">
          <transition name="slide" mode="out-in">
              <app-to-do></app-to-do>
          </transition>

          <transition name="slide" mode="out-in">
              <app-doing></app-doing>
          </transition>
            
            <transition name="slide" mode="out-in">
              <app-done></app-done>
          </transition>
       </div>
      </div>
    </div>
    
</template>

<script>
import ToDo from './components/ToDo.vue';
import Doing from './components/Doing';
import Done from './components/Done.vue';

export default {
  components: {
    appToDo: ToDo,
    appDoing: Doing,
    appDone: Done,
  },
};
</script>

<style>
body {
  padding: 30px;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>

