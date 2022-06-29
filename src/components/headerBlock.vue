<template>
  <div class="wrapper">
    <header class="header__wrapper">
      <div class="header__content">
        <nav class="nav">
          <div class="line">
            <a href="" class="line__element" @click="$router.push('/dreadlocksAbout')"
              ><div class="dot"></div>
              <div class="word">О дрэдах</div></a
            >
            <a href="" class="line__element"
              ><div class="dot"></div>
              <div class="word">О мастере</div></a
            >
            <a href="" class="line__element"
              ><div class="dot"></div>
              <div class="word">Преимущества</div></a
            >
            <a href="" class="line__element"
              ><div class="dot"></div>
              <div class="word">Услуги</div></a
            >
            <a href="" class="line__element"
              ><div class="dot"></div>
              <div class="word"></div
            ></a>
            <a href="" class="line__element"
              ><div class="dot"></div>
              <div class="word"></div
            ></a>
            <a href="" class="line__element"
              ><div class="dot"></div>
              <div class="word"></div
            ></a>
            <a href="" class="line__element"
              ><div class="dot"></div>
              <div class="word"></div
            ></a>
          </div>
        </nav>
        <div class="header__content-textblock">
          <h2 class="header__content-title">Привет, я Солнце</h2>
          <div class="header__content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste
            at ipsum cumque, quidem neque?
          </div>
        </div>
        <img src="@/assets/img/logo.png" alt="" class="logo" />
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header__wrapper {
  min-height: 100vh;
  background-image: radial-gradient(
    circle at 112.04% 21.07%,
    #db1f7b 0,
    #c3177a 16.67%,
    #a91076 33.33%,
    #8c096e 50%,
    #700564 66.67%,
    #56045b 83.33%,
    #400552 100%
  );
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  width: 100vw;
  background-size: cover;
}
.header {
  padding-top: 15vh;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header__content-title {
  font-size: 50px;
}
.header__content-text {
  font-size: 25px;
  margin-top: 30px;
}
.header__content-textblock {
  max-width: 500px;
}
.logo {
  height: 500px;
  width: 500px;
}
</style>