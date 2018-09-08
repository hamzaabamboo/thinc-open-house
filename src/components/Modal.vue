<template>
    <transition name="modal">
        <div class="modal-bg">
            <div class="modal">
                <h1 style="margin-bottom:10px;">Item added to cart</h1>
                <p>The following items have been added to the cart:</p>
                <div class="cart-item">
                    <h3><!-- Display Item Name Here --></h3>
                    <h3>x<!-- Display quantity here --></h3>
                </div>
                <button @click="$emit('close')">Dismiss</button>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  name: "Modal",
  // This component receives 3 props: The item name, quantity, and whether the modal is active
  props: {
    itemName: String,
    active: false
    // A Missing Prop
  }
};
</script>
<style scoped>
.modal-bg {
  align-items: center;
  background-color: rgba(77, 83, 88, 0.7);
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

.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease-in-out;
}
.modal-enter .modal,
.modal-leave-active .modal {
  transform: scale(1.1);
}
</style>