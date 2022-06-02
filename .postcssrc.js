module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 32, //根目录的字体大小设为32px
        propList: ['*'], //proplist:是那些属性需要转换成rem，全部
        minPixelValue: 2 //最小转换单位.2px
      }
    }
  };
