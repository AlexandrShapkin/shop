# Пельменная "Драконий кунгфу: Пельменная эпоха"  
"Драконий кунгфу: Пельменная эпоха" - это уникальное заведение в Москве, которое предлагает гостям необычные и вкусные пельмени, окунутых в атмосферу древнего востока.  

---

## О проекте  
Это мой первый более-менее крупный проект на **react**, да, как и вообще первый такой проект связанный с разработкой web-страниц, в котором я постарался реализовать сайт пельменной. В целом я считаю, что у меня это получилось.  
![Скриншот главной страницы](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_1.png)
Конечно, выглядит он не идеально, в принципе, даже не хорошо, и я это понимаю. Но при его разработке я старался воплощать те идеи, которые мне приходят в голову, чтобы получше ознакомиться с технологиями, а не искать какие-то, возможно лучше работающие или лучше выглядящие, решения в интернете. Помимо лучшего ознакомления работы с инструментами, такой подход также позволил мне уже выявить некоторые ошибки, допущенные на стадии планирования, которые усложнили разработку.  

## Какие выводы я для себя сделал?  
Однозначно можно сказать, что мне стоит посмотреть на проекты "взрослых" разработчиков, для того чтобы увидеть как можно, и наверное нужно, писать код, так чтобы его было проще читать, разработка была более удобным и быстрым процессом.  
Еще однозначно, так или иначе я планировал это сделать в дальнейшем, мне нужно ознакомиться с методологиями и паттернами проектирования.  
Ну и однозначно нужно как-то развивать навыки дизайна, хотя я абсолютно не представляю как это делать. Художественных наклонностей у меня никогда и никаких не было, да и нет их сейчас. Копировать чужое мне не хочется, а сделать свое так, чтобы это было красиво у меня не получается. Так что я не знаю что с этим делать.  

---

## Демонстрация результата  
Так как для того, чтобы своими глазами посмотреть на рабочий экземпляр, требуется предпринять некоторые действия, я решил, что нужно разместить скриншоты, для того чтобы без каких-либо усилий, со стороны смотрящего, можно было посмотреть результаты работы.  
![Главная страница (белая тема)](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_1.png)  
На главной странице размещаются товары, понятно, что в пельменной - пельмени. Список товаров загружается с сервера, как и фото. Сами данные о товарах хранятся в базе данных [MongoDB](https://www.mongodb.com/).  

![Главная страница (темная тема)](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_2.png)  
Также есть темная тема. Последнее состояние темы сохраняется в куки. Переключение темы, как и почти весь дизайн, выполнено с помощью фреймворка [tailwindcss](https://tailwindcss.com/).  

![Футер](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_3.png)  
Футер. А также видно липкое меню сверху, при прокрутке сайта.  

![Страница продукта](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_4.png)  
Страницы с описанием продуктов генерируются автоматически и полученных с сервера данных.  

![Корзина](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_5.png)  
Корзина. Список товаров в корзине сохраняется в куки, для того чтобы не составлять новую корзину после каждой перезагрузки. Я не знал, что делать с кнопкой "заказать", поэтому она просто выводит алерт с json объектом заказа, который, можно было бы, например, отправить обратно на сервер.  

![Страница описания](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_6.png)  
Страница с описанием пельменной. Мне очень нравится, когда контент на страницах компонуют ближе к центру экрана.  

![Главная страница (на телефоне)](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_8.png)  
Главная страница на экране телефона. На странице используется Responsive Design для малых по ширине окон и экранов устройств. Выполнен он также при помощи tailwindcss.  

![Страница продукта (на телефоне)](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_9.png)  
Страница продукта на экране телефона. Я считаю, что правильно делать на небольших экранах элементы крупнее, чем на больших, для того чтобы контент было удобно просматривать.  

![Корзина (на телефоне)](https://github.com/AlexandrShapkin/shop/blob/master/screenshots/Screenshot_10.png)  
Корзина на экране телефона. Элементы корзины я не стал делать больше, так как это список и в нем, скорее, важно видеть все элементы в совокупности.  

---

## В разработке проекта использовались  
- [React](https://react.dev/) и некоторые дополнения к нему, например [styled-components](https://styled-components.com/) и [tailwindcss](https://tailwindcss.com/).  
- [MongoDB](https://www.mongodb.com/) для хранения данных о товаре.  
- [Express](https://expressjs.com/).  

---

Отдельная благодарность [coces](https://github.com/coces) и [muruloce](https://github.com/muruloce), за некоторую техническую поддержку.  
