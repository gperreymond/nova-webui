<template>
  <div>
    <header>
      <h1>Snapbook</h1>
      <h3>Applications</h3>
      <p>La reconnaissance d'images au service de l'édition</p>
    </header>
    <section v-if="store.applications !== false">
      <div class="title">
        <span />
        <button type="button" v-on:click="createApplication" class="success"><i class="fas fa-plus"></i>&nbsp;&nbsp;application</button>
      </div>
    </section>
    <section v-if="store.applications !== false">
      <ul class="content" v-if="store.applications.total > 0">
        <li v-for="(item, index) in store.applications.data">
          <input type="text" v-model.trim="item.name" v-on:keyup="(e) => updateApplication(e, index)" placeholder="Modifiez-moi" />
          <router-link v-bind:to="`/applications/${item.id}`"><button type="button" class="primary square"><i class="fas fa-edit"></i></button></router-link>
          <button type="button" v-on:click="(e) => deleteApplication(e, index)" class="danger square"><i class="fas fa-times"></i></button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script src="./script.js" />
<style scoped src="./style.css" />
