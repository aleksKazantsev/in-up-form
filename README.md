#Формы регистрации и авторизации
[![E-soft](logo/esoft-logo.svg)](https://esoft.tech/) 
Практическая работа для "Школы программирования - 2021" 
___
##Задание:
1) Сверстать форму авторизации и регистрации (index.html)
2) Применить к форме CSS-стили (style.css)
3) Разработать функции валидации и произвести валидацию формы (form-valid.js)
4) Процесс валидации отразить пользователю в формах валидации и авторизации (приминение css-стилей и js) (form-valid.js, style.css)
5) После прохождения валидации вывести введенные данные в консоль (form-valid.js)
6) Загрузить проект в репозиторий GitHab
___
##Описание работы:
### - Основные возможности и фичи:
1) Проект реализует веб интерфейс состоящий из 2-х форм(форма регистрации и форма авторизации). Формы сверстаны в одном html-документе. Благодоря приминению CSS и JS имеется механизм позволяющий отображать/скрывать необходимые формы с приминением эффектов анимации. 

2) Также реализованна фича 3-D анимирования формы в ответ на перемещение "компьютерной мыши" пользователем.

3) Имеется проверка введенных пользователем данных c отобржанием процесса валидации в формах

4) Реализована фича оформления Inputov, которая добавляет к ним эффект интераквной аниции в момент когда ползователь начинает вводить данные (анимированное подчеркивание поля и анимирование поднятие тега label)

5) Расширен функционал полей ввода паролей, который позволяет скрывать/отображать вводимые данные

### - Структура проекта:
файл/папка | описание
:---------:|:----------:
Index.html | Основной файл проекта, представляет собой сверстанный html-документ
style.css  | Файл с подключаемымми стилями оформления, содержит CSS правила стилизации основного файла
icons      | Папка, содержит набор стилизованных svg иконок, прменяемых в оформлении основного файла
container-transform.js | Файл содержит JS-скрипты, используемые для работы фич анимации элеметов основного файла: 1) 3D анимирование основного контейнера интерфейса в ответ на движение мыши, 2) Возможность анимированного переключения интерфейса между рижимами "идентификации" и "регистрации"
form-valid.js | Набор JS-скриптов, который позволяет проверять вводимые пользователем данные, проводить их стилизацию (по средствам динамического переопределения CSS стилей в документе) и выводить их в консоль
README.md | Файл с описанием проекта
logo      | Папка с спользуемыми логотипами

### - Подход и применяемые технологии:
1) HTML-5 синтаксис (https://www.w3.org/TR/html53/):
    1.1) В разметке используются элементы семантики такие как main и section в принятом для данных элеметов контексте.
    1.2) Используются новые семантические подходы в оформлении форм (теги fieldset и legend)

2) CSS (https://www.w3.org/Style/CSS/):
    2.1) Практические аспекты приминения различных селекторов (селекторы id(#), классов(.) универсальный селектор(*), селекторы элементов и контекстные селекторы, соседний селектор(+ (сразу за указанным элементом))
    2.2) Работа с селекторами псевдоклассов (:active, :focus, :last-child, :hover)
    2.3) Использование псевдоэлементов ::before и ::after
    2.4) Flex и Grid верстка
    2.5) Создание адаптивного интерфейса, приминение селекторов @media-запросов
    2.6) Анимация элементов HTML-страницы (z-index, transform, transition, opacity)
    2.7) Работа с тенями, градиентной заливкой и вставка изображений
    2.8) Использование box-sizing и overflow

3) Java Script (https://www.ecma-international.org/publications-and-standards/standards/ecma-262/):
    3.1) Поиск элементов в DOM дереве (querySelector, querySelectorAll, getElementById, getElementsByTagName)
    3.2) Создание, добавление в коллекцию и удаление дочерних элементов (createElement, appendChild, removeChild)
    3.3) Работа с классами элементов, их поиск, удаление и добавление (classList.add, classList.remove, classList.contains)
    3.4) Обход эелементов коллеций (for (let * of ***))
    3.5) Работа с событиями (события: input, focusout, click, submit, DOMContentLoaded). Назначения слушателя событий addEventListener. Вызов события dispatchEvent. Создание события new Event
    3.6) Приминение конструкций языка (if else и for, оператор break)
    3.7) Работа со структурами данных (массивы, FormData, JSON)
    3.8) Работа с консолью браузера
    3.9) Использование функций, функциональная декомпозиция, синтаксис стрелочных функций

___
##Данная работа охватывает в себя материалы уроков:
1) Урок1. [Основы HTML и CSS](https://docs.google.com/presentation/d/10eCiHF6zxeDgXrmm-RzEULo21eLhZ7viJI9M1xY-PEY/edit#slide=id.p) (задание форма регистрации и авторизации)
2) Урок2. [Рабочее окружение](https://docs.google.com/presentation/d/14KNKliKpuTYSoxTmGaO9QH-DX1YzUtUKwGOqnYqh-mQ/edit#slide=id.p) (задание загрузка на GitHab)
3) Урок5. [JS + HTML](https://docs.google.com/presentation/d/1787VkSeF_sQW6DwrLIlomRnwwRXsSiclb9fJBsGVi4A/edit#slide=id.p) (задание валидация формы)
