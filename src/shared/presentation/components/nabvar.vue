<script setup>

const items = [
  { label: 'option.home',       to: '/home'},
  { label: 'option.about',      to: '/about'},
  { label: 'option.rooms',      to: '/rooms'},
  { label: 'option.bookings',   to: '/bookings'}
];
</script>

<template>
  <div class="header">  
    <pv-toolbar class="bg-primary">
      <template #start>
        <h3>SmartStay</h3>
      </template>
      <template #end>
        <div class="flex-column mr-3">
          <pv-button v-for="item in items" :key="item.label" as-child v-slot ="slotProps">
            <router-link :to="item.to" :class="slotProps['class']">{{ t(item.label)}}</router-link>
          </pv-button>
        </div>
        <language-switcher/> 
      </template>
    </pv-toolbar>
  </div>
  

</template>

<style scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.main-content {
  margin-top: 60px;
}

</style>