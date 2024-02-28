// "use strict";

// // // class form1 {
// // //   constructor(helloWorld) {
// // //     //Форма регистрации
// // //     this.form1 = $("#registrity");
// // //     //ФИО
// // //     this.fio = $("#fio");
// // //     //Регион
// // //     this.region = $("#region");
// // //     //Населенный пункт
// // //     this.np = $("#np");
// // //     //Эл адрес
// // //     this.email = $("#email");
// // //     //Пароль
// // //     this.pass = $("#pass");
// // //     //День рождения
// // //     this.birthdate = $("#birthdate");
// // //     //Пол
// // //     this.t_sex = $("input[name='sex[]']");
// // //     //О себе
// // //     this.about = $("#about");
// // //     //Скрытая строка с полем городов
// // //     this.np_tr = $("#np_tr");
// // //     //Тег span в который помещаем дату-время
// // //     this.cur_time = $("#cur_time");
// // //     //Элемента формы с классом set_change, чтобы отслеживать событие onchange
// // //     this.sortOption = $(this.form1).find(".set_change");
// // //     //Строка с приветствием
// // //     this.hello = $("#p_hello");
// // //     //Кнопка очистки формы
// // //     this.bt_cleen = $("#bt_cleen");

// // //     // сеттер
// // //     this.hfio = helloWorld;

// // //     this.init();
// // //   }

// // //   _privateMethod() {
// // //     console.log(`private method`);
// // //   }

// // //   addHoursDate(dh) {
// // //     const inDate = new Date();

// // //     inDate.setHours(inDate.getHours() + 1 * dh);

// // //     const d = inDate.getDate();
// // //     const m = inDate.getMonth() + 1;
// // //     const y = inDate.getFullYear();
// // //     const hh = inDate.getHours();
// // //     const mm = inDate.getMinutes();
// // //     const ss = inDate.getSeconds();

// // //     return (
// // //       "" +
// // //       (d <= 9 ? "0" + d : d) +
// // //       "." +
// // //       (m <= 9 ? "0" + m : m) +
// // //       "." +
// // //       y +
// // //       " " +
// // //       (hh <= 9 ? "0" + hh : hh) +
// // //       ":" +
// // //       (mm <= 9 ? "0" + mm : mm) +
// // //       ":" +
// // //       (ss <= 9 ? "0" + ss : ss)
// // //     );
// // //   }

// // //   getSortOptionAttr(element) {
// // //     const sortDataOpt =
// // //       $(element)[0].options[$(element)[0].selectedIndex].dataset.tmz;
// // //     return sortDataOpt;
// // //   }

// // //   setHTMLElement(element, value) {
// // //     if (value != "") {
// // //       $(element).html(value);
// // //     } else {
// // //       $(element).html("");
// // //     }
// // //   }

// // //   trigger_select(element) {
// // //     //при изменении region показываем или скрываем список np
// // //     if ($(element)[0].id == "region") {
// // //       if ($(element)[0].value == "other_reg") {
// // //         this.np_tr.show();
// // //         this.np.attr("required", true); //становится обязательным
// // //       } else {
// // //         this.np_tr.hide();
// // //         this.np.attr("required", false); //теперь необязательное
// // //         this.setHTMLElement(this.cur_time, "");
// // //       }
// // //     } else if ($(element)[0].id == "np") {
// // //       if ($(element)[0].value != "") {
// // //         this.setHTMLElement(
// // //           this.cur_time,
// // //           this.addHoursDate(this.getSortOptionAttr(element))
// // //         );
// // //       }
// // //     }
// // //   }

// // //   trigger_click(element) {
// // //     if ($(element)[0].id == "bt_cleen") {
// // //       this.np_tr.hide();
// // //       this.setHTMLElement(this.cur_time, "");
// // //     }
// // //   }

// // //   hello_fio(fio) {
// // //     console.log("hello_fio: " + `${this.hfio} ${fio}`);
// // //     return `${this.hfio} ${fio}`;
// // //   }

// // //   get HelloFIO() {
// // //     console.log("getter: " + this.hfio);
// // //     return this.hfio;
// // //   }

// // //   set HelloFIO(helloWorld) {
// // //     console.log("setter: " + helloWorld);
// // //     this.hfio = helloWorld;
// // //   }

// // //   init() {
// // //     this._privateMethod();
// // //     this.sortOption.on("change", (e) => {
// // //       this.trigger_select(e.currentTarget);
// // //     });
// // //     this.bt_cleen.on("click", (e) => {
// // //       this.trigger_click(e.currentTarget);
// // //     });
// // //     this.form1.on("submit", (e) => {
// // //       this.setHTMLElement($("#p_fio"), this.hello_fio(this.fio.val()));
// // //       this.setHTMLElement(
// // //         $("#p_address"),
// // //         "Адрес: " +
// // //           this.region.find("option:selected").text() +
// // //           ", " +
// // //           this.np.val()
// // //       );
// // //       this.setHTMLElement($("#p_email"), "Эл адрес: " + this.email.val());
// // //       this.setHTMLElement($("#p_birthdate"), "д/р: " + this.birthdate.val());
// // //       this.setHTMLElement($("#p_sex"), "Пол: " + this.t_sex.val());
// // //       this.setHTMLElement($("#p_about"), "О себе: " + this.about.val());
// // //       return false;
// // //     });
// // //   }
// // // }

// // // $(() => {
// // //   // const objForm1 = new form1("Доброе утро");
// // //   // objForm1.HelloFIO;
// // //   // objForm1.HelloFIO = "Добрый день";
// // //   // objForm1._privateMethod();
// // // });

// // $(() => {
// //   // // разворачиватель обработчик
// //   // const expanderClickHandler = (thisExpander) => {
// //   //   // инициализируем настройки разворачивателя
// //   //   const expander = $(thisExpander);
// //   //   const target = expander.attr(`expander--target-attr`);
// //   //   const id = expander.attr(`expander--target-id`);
// //   //   // инициализируем кнопки свернуть/развернуть
// //   //   const btnExpand = expander.find(`[expander__btn--expand]`);
// //   //   const btnCollapse = expander.find(`[expander__btn--collapse]`);
// //   //   // инициализируем треугольник
// //   //   const triangle = expander.find(`.elem-triangle`);

// //   //   // поворачиваем треугольник
// //   //   if (triangle.length) {
// //   //     triangle.toggleClass(`elem-triangle--active`);
// //   //   }

// //   //   // разворачиваем таргет(ы)
// //   //   if (target.length) {
// //   //     $(`[${target}=${id}]`).slideToggle();
// //   //   }

// //   //   // кнопки свернуть/развернуть
// //   //   if (btnCollapse.css(`display`) === `none`) {
// //   //     btnExpand.fadeToggle(200, () => {
// //   //       btnCollapse.fadeToggle(200);
// //   //     });
// //   //   } else {
// //   //     btnCollapse.fadeToggle(200, () => {
// //   //       btnExpand.fadeToggle(200);
// //   //     });
// //   //   }
// //   // };

// //   // // клик по разворачивателю
// //   // $(`[expander--target-attr]`).on(`click`, function () {
// //   //   expanderClickHandler(this);
// //   // });

// //   class expanderSlide {
// //     constructor(expander) {
// //       this.expander = $(expander);
// //       this.target = this.expander.attr(`expander--target-attr`);
// //       this.id = this.expander.attr(`expander--target-id`);
// //       this.btnExpand = this.expander.find(`[expander__btn--expand]`);
// //       this.btnCollapse = this.expander.find(`[expander__btn--collapse]`);
// //       this.triangle = this.expander.find(`.elem-triangle`);
// //     }

// //     toggle() {
// //       if (this.target.length) {
// //         $(`[${this.target}=${this.id}]`).slideToggle();
// //       }

// //       if (this.btnCollapse.css(`display`) === `none`) {
// //         this.btnExpand.fadeToggle(200, () => {
// //           this.btnCollapse.fadeToggle(200);
// //         });
// //       } else {
// //         this.btnCollapse.fadeToggle(200, () => {
// //           this.btnExpand.fadeToggle(200);
// //         });
// //       }

// //       if (this.triangle.length) {
// //         this.triangle.toggleClass(`elem-triangle--active`);
// //       }
// //     }

// //     init() {
// //       this.expander.on(`click`, () => {
// //         this.toggle();
// //       });
// //     }

// //     static initAll() {
// //       $(`[expander--target-attr]`).each((index, el) => {
// //         new expanderSlide(el).init();
// //       });
// //     }

// //     static destroyAll() {
// //       $(`[expander--target-attr]`).each((index, el) => {
// //         new expanderSlide(el).expander.off(`click`);
// //       });
// //     }

// //     static destroy(expander) {
// //       new expanderSlide(expander).expander.off(`click`);
// //     }

// //     static toggle(expander) {
// //       new expanderSlide(expander).toggle();
// //     }

// //     static toggleAll() {
// //       $(`[expander--target-attr]`).each((index, el) => {
// //         new expanderSlide(el).toggle();
// //       });
// //     }
// //   }

// //   expanderSlide.initAll();

// //   // expanderSlide.destroyAll();
// // });

// // "Named Class Expression"
// // (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)

// // function Clock({ template }) {

// //   let timer;

// //   function render() {
// //     let date = new Date();

// //     let hours = date.getHours();
// //     if (hours < 10) hours = '0' + hours;

// //     let mins = date.getMinutes();
// //     if (mins < 10) mins = '0' + mins;

// //     let secs = date.getSeconds();
// //     if (secs < 10) secs = '0' + secs;

// //     let output = template
// //       .replace('h', hours)
// //       .replace('m', mins)
// //       .replace('s', secs);

// //     console.log(output);
// //   }

// //   this.stop = function () {
// //     clearInterval(timer);
// //   };

// //   this.start = function () {
// //     render();
// //     timer = setInterval(render, 1000);
// //   };

// // }

// // class Clock {
// //     constructor({ template }) {
// //         this.template = template;
// //     }

// //     render() {
// //         let date = new Date();

// //         let hours = date.getHours();
// //         if (hours < 10) hours = '0' + hours;

// //         let mins = date.getMinutes();
// //         if (mins < 10) mins = '0' + mins;

// //         let secs = date.getSeconds();
// //         if (secs < 10) secs = '0' + secs;

// //         let output = this.template
// //             .replace('h', hours)
// //             .replace('m', mins)
// //             .replace('s', secs);

// //         console.log(output);
// //     }

// //     stop() {
// //         clearInterval(this.timer);
// //     };

// //     start() {
// //         this.render();
// //         this.timer = setInterval(() => { this.render() }, 1000);
// //     };

// // }

// // let clock = new Clock({ template: 'h:m:s' });
// // clock.start();

// // class Animal {
// //     constructor(name) {
// //         this.name = name;
// //     }
// // }

// // class Rabbit extends Animal {
// //     constructor(name) {
// //         super(name);
// //         this.created = Date.now();
// //     }
// // }

// // let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// // console.log(rabbit.name);

// // class Clock {
// //     constructor({ template }) {
// //         this.template = template;
// //     }

// //     render() {
// //         let date = new Date();

// //         let hours = date.getHours();
// //         if (hours < 10) hours = '0' + hours;

// //         let mins = date.getMinutes();
// //         if (mins < 10) mins = '0' + mins;

// //         let secs = date.getSeconds();
// //         if (secs < 10) secs = '0' + secs;

// //         let output = this.template
// //             .replace('h', hours)
// //             .replace('m', mins)
// //             .replace('s', secs);

// //         console.log(output);
// //     }

// //     stop() {
// //         clearInterval(this.timer);
// //     }

// //     start() {
// //         this.render();
// //         this.timer = setInterval(() => this.render(), 1000);
// //     }
// // }

// // class ExtendedClock extends Clock {
// //     constructor({ template, precision }) {
// //         super({ template });
// //         this.precision = precision ?? 1000;
// //     }

// //     start() {
// //         this.render();
// //         this.timer = setInterval(() => this.render(), this.precision);
// //     }
// // }

// // // const clock0 = new Clock({ template: "h:m:s" });
// // const clock1 = new ExtendedClock({ template: "h:m:s", precision: 2000 });

// // // clock0.start();
// // clock1.start();
// // class Article {
// //     constructor(title, date) {
// //         this.title = title;
// //         this.date = date;
// //     }

// //     static createTodays() {
// //         // помним, что this = Article
// //         return new this("Сегодняшний дайджест", new Date());
// //     }
// // }

// // let article = Article.createTodays();

// // console.log(article); // Сегодняшний дайджест

// // class Rabbit extends Object {
// //     constructor(name) {
// //         super();
// //         this.name = name;
// //     }
// // }

// // let rabbit = new Rabbit("Кроль");

// // console.log(rabbit.hasOwnProperty('name')); // Ошибк

// // class CoffeeMachine {
// //   _waterAmount = 0;

// //   set waterAmount(value) {
// //     if (value < 0) throw new Error("Отрицательное количество воды");
// //     this._waterAmount = value;
// //   }

// //   get waterAmount() {
// //     return this._waterAmount;
// //   }

// //   constructor(power) {
// //     this._power = power;
// //   }

// //   getPower() {
// //     return this._power;
// //   }
// // }

// // // создаём кофеварку
// // let coffeeMachine = new CoffeeMachine(100);

// // coffeeMachine._power = 555555; // Error (no setter)

// // console.log(`Мощность: ${coffeeMachine.getPower()}W`); // Мощность: 100W

// class Character {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
// }

// class Enemy extends Character {
//   constructor(name, phrase, power, speed) {
//     super(speed);
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//   }
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// class Alien extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "alien";
//   }
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
// }

// class Bug extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "bug";
//   }
//   hide = () => console.log("You can't catch me now!");
// }

// class Robot extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "robot";
//   }
//   transform = () => console.log("Optimus prime!");
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60);
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);
// const bug2 = new Bug("Erik", "I drink decaf!", 5, 120);
// const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30);
// const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40);

// выведи цифры по порядку в коде ниже
for (var i = 0; i < 10; i++) {
  (function (asdsad) {
    setTimeout(function () {
      console.log(asdsad);
    });
  })(i);
}

console.log(+new Date());
console.log(Date.now());
  