<template>
  <div>
    <h1>Title<span v-if="isTyping"> หิวมาก</span></h1>
    <p>Description</p>
    <input v-model="cooltext"/>
    <p class="cool" v-bind:style="{ 'color' : color }">{{ cooltext }}</p>
    <div class="อาหารBox">
      <div class="อาหาร" v-for="food in myFavoriteFood">{{ food }}</div>
    </div>
    <button @click="changeColor">เปลี่ยนสีหน่อย</button>
  </div>
</template>

<script>
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      cooltext: "",
      color: "#000",
      myFavoriteFood: ["pizza", "เหนี่ยวไก่", "อะไรก็ได้อร่อยๆ"]
    };
  },
  methods: {
    changeColor() {
      this.color = getRandomColor();
      this.myFavoriteFood.push(this.cooltext);
      this.cooltext = "";
    }
  },
  computed: {
    isTyping() {
      return this.cooltext !== "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.อาหาร {
}
.อาหารBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
* {
  font-family: sans-serif;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cool {
  transition: all 1s ease;
  font-size: 7em;
  color: purple;
}
.cool:hover {
  text-shadow: 10px 10px 10px black;
  text-shadow: 5px 5px 5px red;
  transform: translate(-10px, -10px);
}
</style>
