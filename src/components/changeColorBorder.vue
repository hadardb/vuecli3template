<template>
  <div class="borderBody" :style="bodyStyle">
    <slot></slot>
    <div class="con transverse top" :style="transverse"></div>
    <div class="con vertical right" :style="vertical"></div>
    <div class="con transverse bottom" :style="transverse"></div>
    <div class="con vertical left" :style="vertical"></div>
  </div>
</template>

<script>
    export default {
        name: "changeColorBorder",
        props: {
            //  框架的属性
            bodyOptions: {
                type: Object,
                default: () => {
                    return {
                        width: '100%',
                        height: '100%',
                        radius: '6px',
                    }
                }
            },
            // 线的属性
            borderOptions: {
                type: Object,
                default: () => {
                    return {
                        width: '2px',
                        changeColor: ['#FFFFFF', '#1E62A9'],
                    }
                }
            }
        },
        computed: {
            bodyStyle() {
                let data = `width:${this.bodyOptions.width};
                 height:${this.bodyOptions.height};
                 border: ${this.borderOptions.width} ${this.borderOptions.changeColor[1].toString()} solid;
                 borderRadius: ${this.bodyOptions.radius};`
                return data
            },
            marginTop() {
                let dv = this.bodyOptions.height.match(/[A-Za-z]+/)[0]
                let data = `marginTop: ${parseInt(this.bodyOptions.height) * 0.1 + dv}`
                console.log(data)
                return data
            },
            changeColor() {
                let data = `backgroundImage: radial-gradient(${this.borderOptions.changeColor.toString()});`
                return data
            },
            transverse() {
                let data = `height:${this.borderOptions.width};` + this.changeColor
                return data
            },
            vertical() {
                let data = `width:${this.borderOptions.width};` + this.changeColor + this.marginTop
                return data
            }
        },
    }
</script>

<style scoped>
  .con {
    /*background-image: radial-gradient(#FFFFFF , #1E62A9 );*/
    position: absolute;
  }

  .transverse {
    margin-left: 10%;
    width: 80%;
    height: 2px;
  }

  .vertical {
    /*transform:rotate(90deg);*/
    /*transform-origin:left top;*/
    /*margin-top: 10%;*/
    height: 80%;
    width: 2px;
  }

  .borderBody {
    position: relative;
  }

  .top {
    top: -2px;
  }

  .right {
    left: 100%;
  }

  .left {
    left: -2px;
  }

  .right, .left {
    top: 0;
  }

  .bottom {
    top: 100%;
  }
</style>
