<template>
  <div class="wrapper">
    <header class="header__wrapper">
      <nav class="nav">
        <div class="words">
          <a href="" class="word" @click="$router.push('/dreadlocksAbout')"
            >О дрэдах</a
          ><a href="" class="word">О мастере</a
          ><a href="" class="word">Преимущества</a
          ><a href="" class="word">Услуги</a><a href="" class="word">Faq</a
          ><a href="" class="word">Портфолио</a
          ><a href="" class="word">Отзывы</a
          ><a href="" class="word">Контакты</a>
        </div>
        <div class="line">
          <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </nav>
      <div class="header__content-textblock">
        <h2 class="header__content-title">Привет, я Солнце</h2>
        <div class="header__content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste at
          ipsum cumque, quidem neque?
        </div>
      </div>
      <img src="@/assets/img/logo.png" alt="" class="logo" />
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
  justify-content: space-around;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  width: 100vw;
  background-size: cover;
}
.header {
  padding-top: 15vh;
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
.nav {
  width: 400px;
  display: flex;
  justify-content: space-around;
  height: 600px;
  
}
.line {
  width: 15px;
  background-image: linear-gradient(
    15deg,
    #ffbb00 0,
    #ffaa00 12.5%,
    #ff9700 25%,
    #ff8400 37.5%,
    #ff6f00 50%,
    #f25b14 62.5%,
    #e6481f 75%,
    #da3526 87.5%,
    #d0222d 100%
  );
  height: 100%;
  border-radius: 10px;
}
.dots {
  display: flex;
  height: 100%;
  transform: translateX(-1px);
  flex-direction: column;
  justify-content: space-between;
}
.dot {
  height: 15px;
  width: 15px;
  background-color: #6AF4F4;
  box-shadow: 0 0 3px 5px #a5e6e6, 0 0 9px 5px #a5e6e6;
  transform: rotate(45deg);
}
.words {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 25px;
}
.word {
  text-decoration: none;
  color: white;
  transition: .4s;
}
.word:hover{
    color: #39c4c4;
    font-size: 35px;
    transform: scale(105%);
}
</style>
