<template>
  <div class="container">
    <div class="key-info">
      <div class="name">{{cv.info.name}}</div>
      <div class="picture">{{cv.info.picture}}</div>
      <div class="key-qualifications">{{cv.key_qualifications}}</div>
    </div>
    <div class="contact-info">
      <div class="number">{{cv.info.number}}</div>
      <div class="email">{{cv.info.email}}</div>
      <div class="website">{{cv.info.website[0]}}</div>
      <div class="adress">{{cv.info.adress}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData({ params }) {
    return axios.get('http://localhost:3000/api/cv').then(res => {
      return { cv: res.data }
    })
  },
}
</script>

<style scoped>
</style>
