<template>
  <div class="cv">
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
    <div class="work card">
      <h2 class="title">Jobberfaring</h2>
      <div class="coop">{{'dummy'}}</div>
      <div class="selskap">{{'dummy'}}</div>
      <div class="swim">{{'dummy'}}</div>
    </div>
    <div class="education card">
      <h2 class="title">Utdanning</h2>
      <div v-for="e in cv.education" v-bind:key="e.school" class="item">{{e.school}}</div>
    </div>
    <div class="volunteer card">
      <h2 class="title">Frivillig Arbeid</h2>
      <div class="kose">{{'data'}}</div>
      <div class="counsil">{{'data'}}</div>
    </div>
    <div class="hobbies card">
      <h2 class="title">Hobbyer</h2>
      <div class="knitting">{{'data'}}</div>
      <div class="baking">{{'data'}}</div>
      <div class="programming">{{'data'}}</div>
      <div class="movies">{{'data'}}</div>
      <div class="music">{{'data'}}</div>
    </div>
    <div class="skills card dark">
      <h2 class="title">Kunnskaper</h2>
      <div class="python">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">Python</h3>
      </div>
      <div class="java">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">Java</h3>
      </div>
      <div class="HTML">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">HTML5</h3>
      </div>
      <div class="JavaScript">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">JavaScript</h3>
      </div>
      <div class="vue">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">Vue</h3>
      </div>
      <div class="NUXT">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">NUXT</h3>
      </div>
      <div class="css">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">CSS</h3>
      </div>
      <div class="node">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">Node</h3>
      </div>
      <div class="mySQL">
        {{'data'}}
        <div class="logo">{{'data'}}</div>
        <h3 class="title">mySQL</h3>
      </div>
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
.cv {
  max-width: 920px;
  min-width: 920px;
  display: grid;
  grid-template-columns: auto 25%;
  grid-template-rows: 20% 15% 15% 25% 20% 10%;
  grid-template-areas:
    'key-information skills'
    'contact-info skills'
    'work skills'
    'work volunteer'
    'education education'
    'hobbies hobbies';
  background-color: lightgray;
  padding: 10px;
}
.card {
  background-color: white;
  margin: 10px;
  border-radius: 8px;
}
.card.dark {
  background-color: black;
  color: #ddd;
}
.key-info {
  grid-area: key-information;
  grid-column-end: 3;
  background-color: violet;
  margin: -10px -10px 0;
}
.contact-info {
  grid-area: contact-info;
  grid-column-end: 3;
  background-color: plum;
  margin: 0 -10px 0;
}
.work {
  grid-area: work;
}
.education {
  grid-area: education;
}
.volunteer {
  grid-area: volunteer;
}
.hobbies {
  grid-area: hobbies;
}
.skills {
  grid-area: skills;
}
</style>
