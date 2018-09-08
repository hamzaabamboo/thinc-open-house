<template>
	<div>
    <!--  
      Pass itemName and quantity to Modal component below
      Example: v-bind:itemName="itemName"
    -->
    <Modal
      v-bind:active="showModal" 
      v-if="showModal"
      @close="showModal = false"
    />

		<nav>
      <div class="container">
        <h2 class="logo">Thinc.</h2>
      </div>
		</nav>
		<main class="container">
			<div class="row">
				<div class="col">
          <img class="prod-image" v-bind:src="require('../assets/' + activeImage + '.png')"/>

          <div class="prod-gallery">
            <!-- Make the images change activeImage when clicked using @click -->
            <!-- The image names are 'art1' and 'art2' -->
            <img class="prod-gallery-image" src="../assets/art1.png"/>
            <img class="prod-gallery-image" src="../assets/art2.png"/>
          </div>

				</div>
				<div class="col prod-detail">
					<div class="prod-info">
            <!-- Try rearranging elements -->
						<h3 class="price">$<!-- Display price here --></h3>
						<p class="prod-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						<h1 class="prod-title">{{ itemName }}</h1>
					</div>
					<div class="prod-control row">
            <!-- Try rearranging elements -->
						<div class="prod-summary col row">
							<span>
								Total: <h3>$<!-- Show total price here. HINT: The total is equal to quantity * price --></h3>
							</span>

							<!-- 
                Make the button below show the modal on click.
              -->
              <button>Add to Cart</button>

						</div>
						<div class="button-group col">
              <button @click="quantity -= 1">-</button>
              <div class="text-display">{{ quantity }}</div>
              <button @click="quantity += 1">+</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "HelloWorld",
  components: {
    Modal
  },
  data() {
    return {
      itemName: "Title",
      activeImage: "art1",
      showModal: false,
      quantity: 0
      // Add price
    };
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.prod-image {
  background-color: #eee;
  width: 400px;
}
.prod-gallery {
  display: flex;
  margin-top: 15px;
}
.prod-gallery:last-child {
  margin-right: 0;
}
.prod-gallery-image {
  background-color: #eee;
  box-sizing: border-box;
  height: 100px;
  margin-right: 15px;
  width: 100px;
}
.prod-gallery-image:hover {
  outline-color: #fedc36;
  outline-style: solid;
}
.prod-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  width: 100%;
}

.price {
  background-color: #e36464;
  color: white;
  display: inline-block;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 7px 15px;
}

.prod-description {
  font-size: 17px;
}

.prod-control {
  border-top: solid 4px #fedc36;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
}
.prod-summary {
  align-self: flex-end;
}
.prod-summary span {
  margin-right: 20px;
}
</style>
