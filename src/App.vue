<template>
  
  <div id="app">
    <header class="header">
      <div class="container">
        <a href="#" class="header__logo">
         <img class="header__logo-img" src="./assets/images/logo.jpeg" alt="logo">
         <span class="header__logo-text">ИНДИНС</span>
        </a>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer >

    </footer>
    
  </div>
</template>

<style lang="scss">
  .header {
    padding-top: 7px;
    padding-bottom: 7px;
    background-color: #f9f9f9;
    &__logo {
      display: flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
    }
    &__logo-img {
      height: 42px;
      width: 42px;
      border-radius: 50%;
    }
    &__logo-text {
      color: #000000;
      font-size: 18px;
      font-weight: 500;
    }
  }
</style>
