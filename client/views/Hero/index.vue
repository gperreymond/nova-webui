<template>
  <div>
    <header>
      <h1>Nova</h1>
      <h3>Application | Détails</h3>
      <p>Une accroche à mettre ici !</p>
    </header>
    <section v-if="store.hero !== false">
      <div class="appbar">
        <router-link v-bind:to="'/heroes'"><button type="button" class="success square"><i class="fas fa-arrow-left"></i></button></router-link>
        <button type="button" class="success"><i class="fas fa-plus"></i>&nbsp;&nbsp;xxxxx</button>
      </div>
    </section>
    <section v-if="store.hero !== false">
      <div class="title">
        <h2>Généralités</h2>
      </div>
      <ul class="content">
        <li><input type="text" v-model.trim="store.hero.name" v-on:keyup="(e) => updateApplication(e)" placeholder="Modifiez-moi" /></li>
      </ul>
    </section>
  </div>
</template>

<script src="./script.js" />
<style scoped src="./style.css" />
