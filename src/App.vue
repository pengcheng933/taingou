<template>
  <div id="app">
    <header>
       <router-view name="header" />
    </header>
    <main>
       <router-view name="main"/>
    </main>
    <footer>
       <router-view name="footer"/>
    </footer>
  </div>
</template>
<script>
export default{
  name:'App',
}
</script>
<style lang="less">
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &>main{
    flex: 1;
    overflow: auto;
  }
}
@font-face {
  font-family: 'iconfont';  /* Project id 3411654 */
  src: url('//at.alicdn.com/t/font_3411654_0l83obf0bch.woff2?t=1652881032697') format('woff2'),
       url('//at.alicdn.com/t/font_3411654_0l83obf0bch.woff?t=1652881032697') format('woff'),
       url('//at.alicdn.com/t/font_3411654_0l83obf0bch.ttf?t=1652881032697') format('truetype');


}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

</style>
