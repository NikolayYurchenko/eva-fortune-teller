<template>
  <div class="sidebar">
    <div class="icons">
      <a href="https://t.me/yourname" target="_blank">
        <img src="./icons/tg.png" alt="Telegram" />
      </a>
      <a href="viber://chat?number=+380123456789">
        <img src="./icons/vb.png" alt="Viber" />
      </a>
      <a href="https://wa.me/380123456789" target="_blank">
        <img src="./icons/ws.png" alt="WhatsApp" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 12px;
  background: rgba(30, 10, 30, 0.4);
  border-radius: 40px;
  box-shadow: 0 0 15px rgba(173, 146, 224, 0.4);
  z-index: 999;
  backdrop-filter: blur(6px);
  height: auto;
  gap: 20px;
}

.icons {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
}

.sidebar a img {
  width: 54px;
  height: 54px;
  filter: drop-shadow(0 0 6px rgba(173, 146, 224, 0.6));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.sidebar a:hover img {
  transform: scale(1.2);
  filter: drop-shadow(0 0 12px rgba(255, 210, 100, 0.8));
}
</style>
<script setup lang="ts">
</script>