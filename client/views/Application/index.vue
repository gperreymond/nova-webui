<template>
  <div>
    <header>
      <h1>Snapbook</h1>
      <h3>Application | Détails</h3>
      <p>La reconnaissance d'images au service de l'édition</p>
    </header>
    <section v-if="store.application !== false">
      <div class="title">
        <router-link v-bind:to="'/applications'"><button type="button" class="success square"><i class="fas fa-arrow-left"></i></button></router-link>
        <button type="button" v-on:click="createPattern" class="success"><i class="fas fa-plus"></i>&nbsp;&nbsp;pattern</button>
      </div>
    </section>
    <section v-if="store.application !== false">
      <div class="title">
        <h2>Généralités</h2>
      </div>
      <ul class="content">
        <li><input type="text" v-model.trim="store.application.id" disabled="disabled" /></li>
        <li><input type="text" v-model.trim="store.application.name" v-on:keyup="(e) => updateApplication(e)" placeholder="Modifiez-moi" /></li>
      </ul>
    </section>
  </div>
</template>

<script src="./script.js" />
<style scoped src="./style.css" />
