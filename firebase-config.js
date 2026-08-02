// ==============================================================
// НАЛАШТУВАННЯ САЙТУ Mz shop
// Покроково як заповнити цей файл — дивіться INSTRUCTIONS.md
// ==============================================================

// 1. Firebase — спільна база даних + сховище фото (безкоштовно)
//    Beруться з Firebase Console → Project settings → SDK setup and configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB6ZEj9DjhqFBBLXwQTVNuK3lqQuNJ8cp8",
  authDomain: "mzshop-ea585.firebaseapp.com",
  projectId: "mzshop-ea585",
  storageBucket: "mzshop-ea585.firebasestorage.app",
  messagingSenderId: "1092255673249",
  appId: "1:1092255673249:web:7da016f0fba12f9f8439e0"
};

// 2. Telegram-бот — сповіщення про замовлення прийдуть тобі в Telegram
export const TELEGRAM_BOT_TOKEN = "8784699325:AAEl2LBi04buJdOKg2TSaVT2erFi1Z8icoI";
// Можна вказати декілька отримувачів — сповіщення прийде кожному з цього списку
export const TELEGRAM_CHAT_IDS = ["1865474893", "8689285693"];

// Керування товарами (додавання/видалення фото) тепер відбувається
// через Telegram-бота — дивись папку mzshop-bot/, а не тут.
