import photo from "../about.jpg";

function AboutPage() {
  return (
    <div className="w-full py-5 bg-white dark:bg-slate-600 text-slate-900 dark:text-white">
      <div className="w-full flex flex-col items-center justify-center my-5">
        <h1 className="mb-5 text-4xl font-bold">О нас</h1>
        <div className="max-w-screen-sm mb-5 w-4/5 overflow-hidden rounded-md">
          <img src={photo} loading="lazy" alt="" className="w-full" />
        </div>
        <div className="max-w-screen-sm w-4/5">
          <p className="indent-8 text-justify">
            "Драконий кунгфу: Пельменная эпоха" - это уникальное заведение в
            Москве, которое предлагает гостям необычные и вкусные пельмени,
            окунутых в атмосферу древнего востока.
            <br className="mb-2" />
            Интерьер пельменной оформлен в восточном стиле, создавая атмосферу
            таинственности и уюта. Яркие цвета, узоры и декоративные элементы
            погружают посетителей в атмосферу восточной культуры, создавая
            уникальное место для встреч с друзьями и семейных посиделок.
            <br className="mb-2" />
            Меню "Драконьей кунгфу: Пельменной эпохи" порадует гостей
            разнообразием видов пельменей. Здесь можно попробовать такие
            уникальные варианты, как "Манджурийский клубок", "Императорская
            клубка" и другие, каждый из которых имеет свою неповторимую начинку
            и вкус.
            <br className="mb-2" />
            Кулинарная команда "Драконьей кунгфу: Пельменной эпохи" готовит
            каждый пельмень с использованием качественных ингредиентов и с
            соблюдением традиционных рецептов, чтобы доставить незабываемое
            вкусовое удовольствие гостям.
            <br className="mb-2" />
            Помимо пельменей, в меню также представлены различные дополнительные
            блюда, напитки и десерты, чтобы угодить всем предпочтениям и вкусам.
            <br className="mb-2" />
            "Драконий кунгфу: Пельменная эпоха" приглашает всех ценителей
            восточной кухни и уникальных вкусовых сочетаний насладиться
            атмосферой и настоящими восточными пельменями.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
