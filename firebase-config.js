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

// 2. Cloudinary — сховище фото, безкоштовно і без банківської картки
export const CLOUDINARY_CLOUD_NAME = "ur0lu2ln";
export const CLOUDINARY_UPLOAD_PRESET = "ml_default";

// 3. EmailJS — надсилання листа про замовлення на пошту (безкоштовно)
export const EMAILJS_PUBLIC_KEY = "ВАШ_PUBLIC_KEY";
export const EMAILJS_SERVICE_ID = "ВАШ_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = "ВАШ_TEMPLATE_ID";

// 4. Пошта, куди приходитимуть замовлення
export const ORDER_EMAIL = "soronovycz@gmail.com";

// 5. Пароль для входу в адмін-панель (змініть на свій)
export const ADMIN_PASSWORD = "mzshop2026";
