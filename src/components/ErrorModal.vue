<template>
  <div>
    <div class="backdrop" @click="closeModal"></div>
    <div class="card modal">
      <header class="header">
        <h2>Enter the correct name or a server error</h2>
      </header>
      <div class="content">
        <p>Please enter a valid name</p>
      </div>
      <footer class="actions">
        <button class="home__button" @click="closeModal">Okay</button>
      </footer>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['handleShow']);

const closeModal = () => emit('handleShow', false);
</script>
<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
}

.modal {
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
}

.header {
  background: #4f005f;
  padding: 1rem;
}

.header h2 {
  margin: 0;
  color: white;
}

.content {
  padding: 1rem;
}

.actions {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}
.card {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
}

@media (min-width: 768px) {
  .modal {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
