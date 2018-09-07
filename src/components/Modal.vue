<template>
    <transition name="modal">
        <div class="modal-bg">
            <div class="modal">
                <h1 style="margin-bottom:10px;">Item added to cart</h1>
                <p>The following items have been added to the cart:</p>
                <div class="cart-item">
                    <h3>{{itemName}}</h3>
                    <h3>x{{ quantity }}</h3>
                </div>
                <button @click="$emit('close')">Dismiss</button>
            </div>
        </div>
    </transition>
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
<style scoped>
.modal-bg {
  align-items: center;
  background-color: rgba(64, 78, 90, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
}
.modal {
  background-color: white;
  padding: 30px;
  transition: all 0.3s ease-in-out;
}
.cart-item {
  align-items: center;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 20px 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-in-out;
}
.modal-enter .modal,
.modal-leave-active .modal {
  transform: scale(1.1);
}
</style>