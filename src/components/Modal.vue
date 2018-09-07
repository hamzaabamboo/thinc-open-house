<template>
    <div class="modal-bg" v-if="active">
        <div class="modal">
            <h1>Item added to cart</h1>
            <p>The following items have been added to the cart:</p>
            <div class="cart-item">
                <div>
                    <img class="thumbnail" />
                    <h3>Item Name</h3>
                </div>
                <h3>x3</h3>
            </div>
            <button>Dismiss</button>
        </div>
    </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    itemName: String,
    quantity: 0,
    active: false
  }
};
</script>