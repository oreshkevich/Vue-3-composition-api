<template>
  <div class="modal-spinner">
    <img class="app-loader__img" src="../assets/spinner.gif" alt="Loading..." />
  </div>
</template>

<style scoped>
.modal-spinner {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

