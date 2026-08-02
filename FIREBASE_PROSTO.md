# Firebase — просто і по кроках (без термінів)

Головне, що треба зрозуміти: Firebase сам покаже тобі готовий шматок коду з усіма цими "іменами". Тобі **не треба розуміти, що означає кожен рядок** — просто копіюєш його ВЕСЬ ОДРАЗУ, одним шматком, і вставляєш у наш файл. Все.

---

### Крок 1. Створити проєкт

1. Відкрий **console.firebase.google.com**
2. Увійди своїм Google-акаунтом (той самий, що й Gmail)
3. Натисни **"Add project"** (Додати проєкт)
4. Впиши будь-яку назву, наприклад `mzshop`
5. Натискай **Continue** → **Continue** → **Create project** (Google Analytics можна вимкнути перемикачем)
6. Зачекай 20 секунд, натисни **Continue**

---

### Крок 2. Увімкнути базу і сховище фото

1. Зліва в меню знайди **Build** → всередині натисни **Firestore Database**
2. Натисни синю кнопку **Create database**
3. Обери **Production mode** → Next → обери будь-який регіон (наприклад той, що вгорі списку) → **Enable**
4. Тепер зліва знову **Build** → **Storage**
5. Натисни **Get started** → Next → **Done**

---

### Крок 3. Дозволити сайту користуватись базою

1. У Firestore Database вгорі є вкладки, натисни **Rules**
2. Там буде текст в рамці — виділи його весь і видали
3. Встав замість нього оцей текст:

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

4. Натисни **Publish**
5. Тепер перейди в **Storage** → там теж вкладка **Rules** — так само видали старий текст і встав:

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

6. **Publish**

---

### Крок 4. Отримати той самий "шматок коду" і вставити його

Ось тут і з'являються всі ті "імена" — але тобі не треба їх розбирати:

1. Зліва вгорі натисни на шестерню ⚙️ (поряд з "Project Overview") → **Project settings**
2. Прокрути вниз до розділу **"Your apps"**
3. Натисни іконку **`</>`** (це значок "веб-сайт")
4. Впиши будь-яку назву (наприклад `sайт`) → **Register app**
5. З'явиться сірий блок коду, який виглядає приблизно так:

```
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "mzshop-1234.firebaseapp.com",
  projectId: "mzshop-1234",
  storageBucket: "mzshop-1234.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

6. Це і є твій "ключ" — **скопіюй весь цей блок повністю**, від `const firebaseConfig` до закриваючої `};`
7. Відкрий наш файл **firebase-config.js**
8. Знайди там такий самий блок (він там вже є, тільки з написом `"ВАШ_..."` замість реальних значень)
9. Виділи його весь і встав замість нього те, що скопіював з Firebase — просто заміни один блок іншим цілком, нічого окремо не переписуй
10. Збережи файл

**Все, з базою даних і фото готово.** Пошту (лист на `soronovycz@gmail.com`) підключимо наступним кроком — скажи, коли будеш готовий, і я так само по кроках проведу через EmailJS.
