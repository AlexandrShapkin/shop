import photo from "../res/team.png";

function VacanciesPage() {
  return (
    <div className="w-full py-5">
      <div className="w-full flex flex-col items-center justify-center my-5">
        <h1 className="mb-5 text-4xl font-bold">Вакансии</h1>
        <div className="max-w-screen-sm mb-5 w-4/5 overflow-hidden rounded-md">
          <img src={photo} loading="lazy" alt="" className="w-full" />
        </div>
        <div className="max-w-screen-sm w-4/5">
          <h2 className="mb-3 text-xl font-bold">
            Вакансии в "Драконий кунгфу: Пельменная эпоха"!
          </h2>
          <p className="indent-8 text-justify">
            Мы ищем талантливых, энергичных и страстных профессионалов, готовых
            присоединиться к нашей команде и помочь нам создавать незабываемый
            опыт для наших гостей. Если вы готовы погрузиться в мир восточной
            кухни и стиля Кунгфу, мы рады предложить вам следующие вакансии:
            <br className="mb-2" />
          </p>
          <ol start="1">
            <li>
              <p className="indent-8 text-justify">
                Повар-пельменщик: Ответственный за приготовление разнообразных
                видов пельменей с использованием традиционных рецептов и
                высококачественных ингредиентов.
              </p>
            </li>
            <li>
              <p className="indent-8 text-justify">
                Сервисный персонал: Включает официантов и официанток, которые
                создают приветливую и уютную атмосферу, обслуживают гостей и
                помогают им выбрать самые вкусные блюда.
              </p>
            </li>
            <li>
              <p className="indent-8 text-justify">
                Бариста: Отвечает за приготовление и подачу кофейных напитков,
                чая и других безалкогольных напитков, вдохновляя гостей своими
                навыками и творческим подходом.
              </p>
            </li>
            <li>
              <p className="indent-8 text-justify">
                Помощник по организации мероприятий: Отвечает за планирование и
                координацию различных мероприятий, создание незабываемых
                впечатлений и восторженных улыбок у наших гостей.
              </p>
            </li>
            <li>
              <p className="indent-8 text-justify">
                Уборщик/Уборщица: Отвечает за поддержание чистоты и порядка в
                пельменной, чтобы наши гости всегда чувствовали себя комфортно и
                уютно.
              </p>
            </li>
            <li>
              <p className="indent-8 text-justify">
                Менеджер по закупкам: Отвечает за закупку продуктов,
                ингредиентов и оборудования, чтобы наша пельменная продолжала
                радовать гостей своим качеством и разнообразием.
                <br className="mb-2" />
              </p>
            </li>
          </ol>
          <p className="indent-8 text-justify">
            Если вы готовы стать частью нашей команды, отправьте свое резюме на
            нашу электронную почту dragonkungfu@examplemail.com. Мы ждем ваших
            талантов и страсти к кулинарии!
            <br className="mb-2" />
            Примечание: У нас всегда есть возможности для профессионального
            роста и развития. Мы поддерживаем обучение и стремимся создать
            приятную и вдохновляющую рабочую среду для нашей команды.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VacanciesPage;
