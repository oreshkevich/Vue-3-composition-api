<template>
  <article class="character-card">
    <div class="character-card__image-wrapper">
      <img :src="character.image" :alt="character.name" />
    </div>
    <div class="character-card__content-wrapper">
      <div class="character-card__section">
        <a rel="noopener noreferrer" target="_blank"
          ><h2>{{ character.name }}</h2></a
        >
        <span class="character-card__status">
          <span
            class="character-card__status-icon"
            :class="[
              character.status == 'Alive'
                ? 'character-card__red'
                : character.status == 'Dead'
                ? 'character-card__green'
                : '',
            ]"
          ></span>
          {{ character.status }}
          -
          {{ character.species }}
        </span>
      </div>
      <div class="character-card__section">
        <span class="character-card__text-gray">Last known location:</span>
        <a rel="noopener noreferrer" target="_blank">{{
          character.location.name
        }}</a>
      </div>
      <div class="character-card__section">
        <span class="character-card__text-gray">First seen in:</span>
        <a
          :href="character.episode[0].url"
          rel="noopener noreferrer"
          target="_blank"
          >{{ character.episode[0].name }}</a
        >
      </div>
    </div>
  </article>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  character: {
    type: Object,
    default: {},
    required: true,
  },
});
</script>

<style lang="scss">
.character-card {
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.character-card__image-wrapper {
  flex: 2 1 0%;
  width: 100%;
}

.character-card__image-wrapper img {
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}

.character-card__content-wrapper {
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
}

.character-card__section {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: start;
}

.character-card__section:first-child {
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.character-card a {
  color: rgb(245, 245, 245);
}

.character-card .character-card__status {
  font-size: 16px;
  font-weight: 500;
}

.character-card .status {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: capitalize;
}

.character-card h2 {
  font-size: 1.5rem;
}

.character-card .character-card__status-icon {
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  margin-bottom: 2px;

  border-radius: 50%;
}
.character-card .character-card__red {
  background: rgb(214, 61, 46);
}
.character-card .character-card__green {
  background: rgb(85, 204, 68);
}
.character-card__text-gray {
  color: rgb(158, 158, 158);
}
</style>

