<template>
  <ul class="tab-bar">
    <router-link
    v-for="(item,index) in list"
    :key="index"
    :to='item.pagePath'
    v-slot="{navigate, isActive, isExactActive}"
    custom
    >
    <li
    @click="navigate"
    :class="['tab-bar-item', isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
    :style="{color: isActive || isExactActive ? selectedColor : color}"
    >
      <i class="iconfont" v-html="item.icon"></i>
      <span>{{item.text}}</span>
    </li>
  </router-link>
  </ul>
</template>

<script>
export default {
  name:'tab-bar',
  props:{
    color:{
      type:String,
      default:'#666',
    },
    selectedColor:{
      type:String,
      default:'rgb(255, 0, 54)',
    },
    list:{
      type:Array,
      required:true,
      // 自定义验证规则
      validator(val){
        return val.length >= 2 && val.length <=5
      },
    },
    methods: {
    jump(path) {
      this.$router.push(path).catch(() => {}) // 静默处理异常
    },
  },
  },
}
</script>

<style lang="less">
.tab-bar {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    height: 64px;
    border-top: 1px solid #ccc;

    &-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .iconfont {
        font-size: 24px;
      }
    }
  }
</style>