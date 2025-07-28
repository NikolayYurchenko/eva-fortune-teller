<script setup>
import { ref, reactive } from 'vue'

const name = ref('')
const contact = ref('')
const service = ref('')
const message = ref('')

const errors = reactive({})


const BOT_TOKEN = '8236006756:AAG5wb74CUGlnJxkyAMRrOa--QXKGYI6bc8'
const CHAT_ID = '529165676'
const TG_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

const validate = () => {
  errors.name = ''
  errors.contact = ''
  errors.service = ''

  let valid = true

  if (!name.value.trim()) {
    errors.name = 'Введіть ім\'я'
    valid = false
  }

  if (!contact.value.trim()) {
    errors.contact = 'Вкажіть телефон'
    valid = false
  } else {
    const phonePattern = /^(\+?380|0)\d{9}$/

    if (!phonePattern.test(contact.value)) {
      errors.contact = 'Введіть правильний номер (+380XXXXXXXXX)'
      valid = false
    }
  }

  if (!service.value) {
    errors.service = 'Виберіть послугу'
    valid = false
  }

  return valid
}

const sendToTelegram = async () => {
  if (!validate()) return
  const text = `
📌 <b>Новая заявка:</b>\n
👤 Имя: ${name.value}\n
📞 Контакт: ${contact.value}\n
🔮 Услуга: ${service.value}\n
💬 Сообщение: ${message.value}
`

  await fetch(TG_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'HTML'
    })
  })

  alert('✅ Заявка отправлена!')
  name.value = ''
  contact.value = ''
  service.value = ''
  message.value = ''
}
</script>
<template>
  <section class="booking-section" id="form">
    <div class="booking-form">
      <h2>Записатись на сеанс</h2>
      <p class="subtitle">Отримайте персональну консультацію та відповіді на ваші запитання</p>
      <form @submit.prevent="sendToTelegram">
        <label :class="{ errorLabel: errors.name }">Ваше ім'я</label>
        <input v-model="name" type="text" placeholder="Введіть ім'я">

        <label :class="{ errorLabel: errors.contact }">Телефон</label>
        <input  v-model="contact" type="text" placeholder="+380 ...">

        <label :class="{ errorLabel: errors.service }">Виберіть послугу</label>
        <select v-model="service">
          <option>Виберіть</option>
          <option>Ворожіння</option>
          <option>Таро</option>
          <option>Консультація</option>
        </select>

        <label>Ваше повідомлення</label>
        <textarea  v-model="message" placeholder="Опишіть ваш запит..."></textarea>

        <button type="submit">Надіслати заявку</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.errorLabel {
  color: #e05a5a;
  animation: shake 0.3s ease;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(0); }
}
.booking-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 20px;
}

.booking-form {
  background: rgba(20, 5, 20, 0.4);
  border-radius: 18px;
  padding: 50px;
  width: 80%;
  max-width: 1100px;
  box-shadow: 0 0 40px rgba(255, 230, 150, 0.15);
  text-align: center;
}

.booking-form h2 {
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  color: #f6f0e7;
  margin-bottom: 10px;
}

.subtitle {
  color: #d4cbb2;
  font-size: 24px;
  margin-bottom: 35px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

label {
  text-align: left;
  font-weight: 600;
  color: #f6f0e7;
  font-size: 20px;
}

input, select, textarea {
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 22px;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  min-height: 120px;
  resize: none;
}

button {
  background: #d4b77c;
  color: #1c0f1f;
  font-weight: 700;
  padding: 16px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #e8c98d;
  transform: scale(1.03);
}

/* 📱 Адаптивность */
@media (max-width: 1024px) {
  .booking-form {
    width: 90%;
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .booking-form {
    width: 95%;
    padding: 30px;
  }

  .booking-form h2 {
    font-size: 30px;
  }

  button {
    font-size: 16px;
    padding: 14px;
  }
}

@media (max-width: 480px) {
  .booking-section {
    padding: 80px 10px;
  }

  .booking-form {
    width: 100%;
    padding: 20px;
    border-radius: 12px;
  }

  .booking-form h2 {
    font-size: 26px;
  }

  input, select, textarea {
    font-size: 14px;
    padding: 12px;
  }

  button {
    font-size: 14px;
    padding: 12px;
  }
}
</style>
