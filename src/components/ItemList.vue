<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <div v-for="item in items" :key="item.id">
          {{item.id}} - {{item.name}}
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    getItems () {
      this.axios.get('http://localhost:18080/item/list').then((response) => {
        if (response.data.res) {
          this.items = response.data.data
        }
      })
    }
  },
  mounted () {
    this.getItems()
  }
}
</script>

<style scoped>
</style>
