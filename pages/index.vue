<template>
  <div class="cv">
    <div class="key-info">
      <div class="picture">
        <img src="https://hanneko.no/hanne.jpg" alt="Picture" />
      </div>
      <div class="key-info-text">
        <div class="name">{{cv.info.name}}</div>
        <!---<div class="picture">{{cv.info.picture}}</div>-->
        <div class="key-qualifications">{{cv.key_qualifications}}</div>
      </div>
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
body {
  background-color: #ccc;
}
.cv {
  max-width: 1000px;
  min-width: 1000px;
  margin: 2em auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 250px;
  grid-template-areas:
    'key-information skills'
    'contact-info skills'
    'work skills'
    'work volunteer'
    'education education'
    'hobbies hobbies';
  background-color: #cdcdcd;
  padding: 10px;
}

.name {
  font-size: 2.5em;
  text-transform: uppercase;
  text-align: center;
}

.picture > img {
  border-radius: 8px;
}
.card {
  background-color: #e5e5e5;
  margin: 10px;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0px 2px 10px -6px black;
}
.card.dark {
  background-image: linear-gradient(0deg, #3a3a3a, #575757);
  color: #ddd;
  box-shadow: 0px 2px 10px -3px black;
}
.key-info {
  grid-area: key-information;
  grid-column-end: 3;
  background-color: #6e256e;
  color: white;
  margin: -10px -10px 0;
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.picture {
  flex: 0 0 19%;
}
.key-info-text {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}
.contact-info {
  grid-area: contact-info;
  grid-column-end: 3;
  background-color: #8a458a;
  color: white;
  margin: 0 -10px 0;
  padding: 1em;
  position: relative;
}
.contact-info::before {
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 5px;
  left: 0%;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent);
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
