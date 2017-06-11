<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                    mdl-textfield--floating-label mdl-textfield--align-right">
          <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
          </div>
        </div>
      </div>
    </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Vue.js sample</span>
        <nav class="mdl-navigation">
          <router-link to="/" class="mdl-navigation__link">Top</router-link>
          <router-link to="/sample" class="mdl-navigation__link">Sample</router-link>
          <router-link to="/list" class="mdl-navigation__link">List</router-link>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content">

          <!--  Page Contents here -->
          <router-view></router-view>

        </div>
      </main>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
