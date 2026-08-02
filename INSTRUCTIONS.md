# Налаштування Mz shop — покроково

Сайт готовий, лишилось підключити два безкоштовні сервіси: **Firebase** (база даних + фото, спільна для всіх відвідувачів) і **EmailJS** (лист на пошту при замовленні). Займає це хвилин 15.

---

## Крок 1. Firebase (база даних і фото)

1. Йдіть на **console.firebase.google.com**, увійдіть через Google-акаунт.
2. **Add project** → назвіть, наприклад `mzshop` → створіть проєкт (Google Analytics можна вимкнути).
3. У лівому меню: **Build → Firestore Database → Create database** → оберіть режим **production** → регіон (наприклад `eur3`) → Create.
4. Там же: **Build → Storage → Get started** → Create (той самий регіон).
5. Відкрийте вкладку **Rules** у Firestore і вставте:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /products/{doc} {
         allow read: if true;
         allow write: if true;
       }
       match /orders/{doc} {
         allow read: if false;
         allow create: if true;
       }
     }
   }
   ```
   Натисніть **Publish**.
6. Те саме для **Storage → Rules**:
   ```
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /products/{allPaths=**} {
         allow read: if true;
         allow write: if true;
       }
     }
   }
   ```
   **Publish**.
7. Тепер: значок ⚙️ (Project settings) → внизу **Your apps** → значок `</>` (Web) → назвіть додаток → **Register app**. Вам покажуть об'єкт `firebaseConfig` — скопіюйте його значення (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) у файл **firebase-config.js**, замінюючи `"ВАШ_..."`.

> ⚠️ Правила вище — спрощені (без пароля може писати будь-хто, хто знає адресу бази напряму). Для маленького магазину це звичайна практика, але якщо колись знадобиться серйозніший захист — скажіть, додамо повноцінну авторизацію.

---

## Крок 2. EmailJS (лист при замовленні)

1. Йдіть на **emailjs.com** → Sign up (безкоштовно, до 200 листів/міс).
2. **Email Services → Add New Service** → оберіть Gmail (або будь-яку пошту) → авторизуйтесь → скопіюйте **Service ID**.
3. **Email Templates → Create New Template**. Тема, наприклад: `Нове замовлення Mz shop від {{customer_name}}`. Текст листа:
   ```
   Нове замовлення!

   Клієнт: {{customer_name}}
   Телефон: {{phone}}
   Місто: {{city}}
   Відділення НП: {{branch}}
   Коментар: {{comment}}

   Товари: {{items}}
   ```
   У полі **To email** вкажіть `soronovycz@gmail.com`. Збережіть, скопіюйте **Template ID**.
4. **Account → General → Public Key** — скопіюйте.
5. Вставте всі три значення (`EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`) у **firebase-config.js**.

---

## Крок 3. Пароль адмінки

У тому ж файлі змініть `ADMIN_PASSWORD` на свій.

---

## Крок 4. Публікація

Завантажте всі 3 файли (`index.html`, `contacts.html`, `firebase-config.js`) на той самий хостинг, де вони вже лежать зараз (замініть старі версії). Файли мають бути **в одній папці**.

---

## Як користуватись адмінкою

1. Кнопка **«Адмін»** зверху праворуч → введіть пароль.
2. **«+ Додати фото»** → оберіть одразу хоч 40 файлів → оберіть одну категорію (застосується до всіх) → **Завантажити**. Фото автоматично стискаються перед завантаженням.
3. Все, що додасте, одразу з'являється в каталозі у **всіх** відвідувачів — не тільки у вас.
4. Видалити фото можна прямо в каталозі, коли увімкнено режим адміністратора (кнопка «Видалити» на картці).

## Як працює кошик

Відвідувач тисне на фото → відкривається перегляд з кнопкою **«Додати в кошик»** та вибором кількості → кошик відкривається праворуч → **«Оформити замовлення»** → форма (прізвище, ім'я, телефон, місто, відділення Нової Пошти, коментар) → після підтвердження замовлення зберігається в базі і на `soronovycz@gmail.com` приходить лист.
