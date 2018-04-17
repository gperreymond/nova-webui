<template>
  <div>
    <header>
      <h1>Nova</h1>
      <h3>Heroes</h3>
      <p>Une accroche à mettre ici !</p>
    </header>
    <section v-if="store.heroes !== false">
      <div class="appbar">
        <span />
        <button type="button" v-on:click="createApplication" class="success"><i class="fas fa-plus"></i>&nbsp;&nbsp;hero</button>
      </div>
    </section>
    <section v-if="store.heroes !== false">
      <ul class="content" v-if="store.heroes.total > 0">
        <li v-for="(item, index) in store.heroes.data">
          <input type="text" v-model.trim="item.name" v-on:keyup="(e) => updateApplication(e, index)" placeholder="Modifiez-moi" />
          <router-link v-bind:to="`/heroes/${item.id}`"><button type="button" class="primary square"><i class="fas fa-edit"></i></button></router-link>
          <button type="button" v-on:click="(e) => deleteApplication(e, index)" class="danger square"><i class="fas fa-times"></i></button>
        </li>
      </ul>
      <h2 v-if="store.heroes.total === 0">Aucune hero disponible</h2>
    </section>
  </div>
</template>

<script src="./script.js" />
<style scoped src="./style.css" />
