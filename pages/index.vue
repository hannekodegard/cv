<template>
  <div class="cv">
    <div class="key-info">
      <img class="picture" src="https://hanneko.no/hanne.jpg" alt="Picture" />
      <div class="key-info-text">
        <h1 class="name">{{cv.info.name}}</h1>
        <!---<div class="picture">{{cv.info.picture}}</div>-->
        <div class="main-title">Web designer og utvikler</div>
        <p
          class="key-qualifications"
        >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    <div class="contact-info">
      <div class="item number">
        <font-awesome-icon :icon="['fas', 'mobile-alt']" />
        {{cv.info.number}}
      </div>
      <div class="item email">
        <font-awesome-icon :icon="['fas', 'at']" />
        {{cv.info.email}}
      </div>
      <div class="item website">
        <font-awesome-icon :icon="['fas', 'globe-europe']" />
        <a target="_blank" :href="cv.info.website[1]">{{cv.info.website[0]}}</a>
      </div>
      <div class="item adress">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        {{cv.info.adress}}
      </div>
      <div class="item github">
        <font-awesome-icon :icon="['fab', 'github']" />
        <a target="_blank" :href="cv.info.links.github">hannekodegard</a>
      </div>
      <div class="item linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <a target="_blank" :href="cv.info.links.linkedin">hanne-odegard</a>
      </div>
    </div>
    <div class="work card">
      <h2 class="title">Jobberfaring</h2>
      <div v-for="w in cv.work" v-bind:key="w.company" class="item">
        <div class="date">{{joinDates(w.startDate, w.endDate)}}</div>
        <h2 class="work-title">
          {{w.title}}
          <span class="location">- {{w.company}}</span>
        </h2>
        <p class="description">{{w.description}}</p>
      </div>
    </div>
    <div class="education card">
      <h2 class="title">Utdanning</h2>
      <div class="items">
        <div v-for="e in cv.education" v-bind:key="e.school" class="item">
          {{e.school}}
          <div class="date">{{joinDates(e.startDate, e.endDate)}}</div>
          <h2 class="major">{{e.type}}</h2>
        </div>
      </div>
    </div>
    <div class="volunteer card">
      <h2 class="title">Frivillig Arbeid</h2>
      <div v-for="v in cv.volunteer_work" v-bind:key="v.title" class="item">
        <div v-if="v.logo && v.logo.length" class="icon">
          <img class="hclogo" v-if="v.logo.slice(0,4)==='http'" :src="v.logo" />
          <font-awesome-icon v-else :icon="v.logo.split(' ')" />
        </div>
        <div class="title" v-html="v.title" />
        <p class="description" v-html="v.description" />
      </div>
    </div>
    <div class="hobbies card">
      <h2 class="title">Hobbyer</h2>
      <div v-for="h in cv.hobbies" v-bind:key="h.hobby" class="item">
        <font-awesome-icon :icon="h.logo.split(' ')" />
        <span>{{h.hobby}}</span>
      </div>
    </div>
    <div class="skills card dark">
      <h2 class="title">Ferdigheter</h2>
      <p>Ferdigheter jeg har tilegnet meg gjennom skole og hobbyprosjekter.</p>
      <div class="items">
        <div v-for="s in cv.skills" v-bind:key="s.skill" class="item">
          <font-awesome-icon
            :icon="s.logo.split(' ')"
            mask="circle"
            transform="shrink-8"
            size="lg"
          />
          <span>{{s.skill}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData({ params }) {
    return axios
      .get(`http://localhost:${process.env.port}/api/cv`)
      .then(res => {
        return { cv: res.data }
      })
  },
  methods: {
    joinDates(from, to) {
      const fromDate = new Date(from)
      const toDate = new Date(to)
      const fromStr = fromDate.getFullYear().toString()
      const toStr = toDate.getFullYear().toString()
      if (to) {
        if (fromStr.slice(0, 2) == toStr.slice(0, 2)) {
          return `${fromStr}-${toStr.slice(2, 4)}`
        }
        return `${fromStr}-${toStr}`
      }

      return `${fromStr}-Nå`
    },
  },
}
</script>

<style scoped>
body,
html {
  background-color: #a6a6a6;
  color: #e3e3e3;
}
.cv {
  max-width: 1000px;
  min-width: 1000px;
  height: calc(1000px * 1.414);
  margin: 2em auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 280px;
  grid-template-rows: auto auto auto 1fr auto auto;
  grid-template-areas:
    'key-information skills'
    'contact-info skills'
    'work skills'
    'work volunteer'
    'education education'
    'hobbies hobbies';
  background-color: #c6c6c6;
  padding: 10px;
  /* clip-path: polygon(
    0% 1px,
    5% 2px,
    10% 1px,
    15% 3px,
    20% 0px,
    25% 2px,
    30% 1px,
    35% 3px,
    40% 1px,
    45% 2px,
    50% 3px,
    55% 4px,
    60% 1px,
    65% 4px,
    70% 3px,
    75% 1px,
    80% 1px,
    85% 0px,
    90% 3px,
    95% 0px,
    calc(100% - 2px) 0%,
    calc(100% - 0px) 5%,
    calc(100% - 4px) 10%,
    calc(100% - 0px) 15%,
    calc(100% - 1px) 20%,
    calc(100% - 1px) 25%,
    calc(100% - 4px) 30%,
    calc(100% - 2px) 35%,
    calc(100% - 1px) 40%,
    calc(100% - 4px) 45%,
    calc(100% - 3px) 50%,
    calc(100% - 1px) 55%,
    calc(100% - 4px) 60%,
    calc(100% - 4px) 65%,
    calc(100% - 3px) 70%,
    calc(100% - 2px) 75%,
    calc(100% - 2px) 80%,
    calc(100% - 2px) 85%,
    calc(100% - 1px) 90%,
    calc(100% - 2px) 95%,
    100% calc(100% - 3px),
    95% calc(100% - 1px),
    90% calc(100% - 3px),
    85% calc(100% - 0px),
    80% calc(100% - 2px),
    75% calc(100% - 2px),
    70% calc(100% - 3px),
    65% calc(100% - 0px),
    60% calc(100% - 2px),
    55% calc(100% - 4px),
    50% calc(100% - 1px),
    45% calc(100% - 2px),
    40% calc(100% - 4px),
    35% calc(100% - 2px),
    30% calc(100% - 2px),
    25% calc(100% - 2px),
    20% calc(100% - 3px),
    15% calc(100% - 3px),
    10% calc(100% - 2px),
    5% calc(100% - 3px),
    4px calc(100% - 4px),
    3px 95%,
    3px 90%,
    1px 85%,
    2px 80%,
    1px 75%,
    1px 70%,
    1px 65%,
    1px 60%,
    0px 55%,
    3px 50%,
    3px 45%,
    1px 40%,
    0px 35%,
    1px 30%,
    0px 25%,
    2px 20%,
    0px 15%,
    2px 10%,
    3px 5%
  );
  */
}
h1 {
  font-size: 3.5em;
  text-align: center;
}
p {
  font-size: 0.85em;
  line-height: 1.5;
}
.name {
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 0.93;
}
.main-title {
  text-transform: uppercase;
  background-color: var(--secondary-color);
  display: inline-block;
  align-self: flex-start;
  border-radius: 1em;
  padding: 0.2em 1.1em;
  font-size: 1.1em;
  margin: 0.8em 0 1.2em;
}
.title {
  font-size: 1.8em;
  text-transform: uppercase;
  margin: 0.4em;
  font-weight: bold;
}
.picture {
  border-radius: 16px;
  width: 19%;
  margin-top: 1.4em;
}
.card {
  background-color: #e5e5e5;
  margin: 8px;
  border-radius: 12px;
  padding: 1em 1.2em;
  /*box-shadow: 0px 2px 10px -6px black;*/
}
.card > .title {
  color: #e5e5e5;
}
.card:not(.dark) > .title {
  margin-bottom: 1.2em;
  color: var(--secondary-color);
}
.card.dark {
  background-color: #242021;
  color: #b3b3b3;
  /*box-shadow: 0px 2px 10px -3px black;*/
}
.key-info {
  grid-area: key-information;
  grid-column-end: 3;
  background-color: #6e256e;
  background-color: var(--primary-color);
  color: #e3e3e3;
  margin: -10px -10px 0;
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.key-info-text {
  flex: 1 1 auto;
  margin-right: 280px;
  padding: 1em 2em 0;
  display: flex;
  flex-direction: column;
}
.contact-info {
  grid-area: contact-info;
  grid-column-end: 3;
  background-color: #8a458a;
  background-color: var(--secondary-color);
  color: #ddd;
  margin: 0 -10px 10px;
  padding: 1em 280px 1em 2em;
  position: relative;
  display: flex;
  flex-flow: row wrap;
}
.contact-info::before {
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 5px;
  left: 0%;
  /*background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent);*/
}
.contact-info > .item {
  flex: 1 1 50%;
  margin: 1em 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.contact-info > .item > svg {
  margin: 0 0.5em;
  font-size: 2em;
}
.contact-info a {
  color: #ddd;
}

.work {
  grid-area: work;
}
.work > .item {
  position: relative;
  height: 125px;
  margin-left: 5em;
  margin-right: 2em;
}
.work > .item:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 8px;
  background-size: 9px;
  background-repeat: repeat-x;
  background-image: radial-gradient(
    circle at center,
    #21212188 0,
    #21212188 10%,
    transparent 30%
  );
}
.work .work-title {
  color: var(--secondary-color);
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}
.work .work-title > span {
  color: #242021;
  font-size: 0.7em;
  text-transform: none;
}
.work > .item > .date {
  position: absolute;
  background-color: var(--secondary-color);
  transform: translate(-90px, calc(50% + 10px)) rotate(-90deg);
  border-radius: 1em;
  padding: 0.2em 1.1em;
  font-size: 1em;
  color: #e5e5e5;
  font-weight: bold;
  white-space: pre;
  font-family: monospace;
}
.education {
  grid-area: education;
  padding-bottom: 0;
}
.education .major {
  color: var(--secondary-color);
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}
.education .major > span {
  color: #242021;
  font-size: 0.7em;
  text-transform: none;
}
.education > .items {
  display: flex;
  flex-flow: row wrap;
}
.education > .items > .item {
  flex: 1 1 calc(50% - 80px);
  height: 120px;
  margin-left: 80px;
  position: relative;
}
.education > .items > .item > .date {
  position: absolute;
  background-color: var(--secondary-color);
  transform: translate(-90px, calc(50% - 15px)) rotate(-90deg);
  border-radius: 1em;
  padding: 0.2em 1.1em;
  font-size: 1em;
  color: #e5e5e5;
  font-weight: bold;
  white-space: pre;
  font-family: monospace;
}
.education > .items > .item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 20px;
  top: -15px;
  width: 8px;
  height: calc(100% - 25px);
  background-size: 9px 9px;
  background-repeat: repeat-y;
  background-image: radial-gradient(
    circle at center,
    #21212188 0,
    #21212188 10%,
    transparent 30%
  );
}
.volunteer {
  grid-area: volunteer;
}
.hclogo {
  filter: hue-rotate(-60deg);
  filter: invert(43%) sepia(52%) saturate(5425%) hue-rotate(266deg)
    brightness(85%) contrast(104%);
}

.volunteer .item > .icon > img {
  width: 1.3em;
}
.volunteer .item > .icon {
  font-size: 1.5em;
  color: var(--secondary-color);
  position: absolute;
  right: calc(100% + 15px);
  top: 0.2em;
  flex-direction: column;
}
.volunteer .item {
  font-size: 1em;
  position: relative;
  margin-left: 50px;
}
.volunteer .title {
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.4em 0;
}
.volunteer .description {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hobbies {
  grid-area: hobbies;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding-right: 4em;
}
.hobbies.card > .title {
  margin-bottom: 0.4em;
}
.hobbies > .item {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 1em 0;
}
.hobbies > .item > svg {
  color: var(--secondary-color);
  font-size: 3em;
}
.hobbies > .item > span {
  font-size: 0.75em;
  margin-top: 0.75em;
}
.skills {
  grid-area: skills;
  text-align: center;
  margin-top: 1.5em;
}
.skills > .title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.skills > .items {
  display: flex;
  flex-flow: row wrap;
}
.skills > .items > .item {
  color: #e3e3e3;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 14px 10px;
}
.skills > .items > .item > span {
  font-size: 0.75em;
  margin-top: 0.75em;
  text-transform: capitalize;
}
.skills > .items > .item > svg {
  font-size: 3.5em;
}

@media print {
  /*
  * {
    color: #000 !important;
  }
  .card {
    border: none !important;
  }
  .education.card {
    margin-top: -64px;
  }
  img {
    filter: none !important;
  }
  */
  .cv {
    margin: 0;
  }
  @page {
    margin: 0mm 0mm 0mm 0mm;
    size: 1000px calc(1000px * 1.4142);
  }
}
</style>
