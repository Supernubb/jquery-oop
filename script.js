// class form1 {
//   constructor(helloWorld) {
//     //Форма регистрации
//     this.form1 = $("#registrity");
//     //ФИО
//     this.fio = $("#fio");
//     //Регион
//     this.region = $("#region");
//     //Населенный пункт
//     this.np = $("#np");
//     //Эл адрес
//     this.email = $("#email");
//     //Пароль
//     this.pass = $("#pass");
//     //День рождения
//     this.birthdate = $("#birthdate");
//     //Пол
//     this.t_sex = $("input[name='sex[]']");
//     //О себе
//     this.about = $("#about");
//     //Скрытая строка с полем городов
//     this.np_tr = $("#np_tr");
//     //Тег span в который помещаем дату-время
//     this.cur_time = $("#cur_time");
//     //Элемента формы с классом set_change, чтобы отслеживать событие onchange
//     this.sortOption = $(this.form1).find(".set_change");
//     //Строка с приветствием
//     this.hello = $("#p_hello");
//     //Кнопка очистки формы
//     this.bt_cleen = $("#bt_cleen");

//     // сеттер
//     this.hfio = helloWorld;

//     this.init();
//   }

//   _privateMethod() {
//     console.log(`private method`);
//   }

//   addHoursDate(dh) {
//     const inDate = new Date();

//     inDate.setHours(inDate.getHours() + 1 * dh);

//     const d = inDate.getDate();
//     const m = inDate.getMonth() + 1;
//     const y = inDate.getFullYear();
//     const hh = inDate.getHours();
//     const mm = inDate.getMinutes();
//     const ss = inDate.getSeconds();

//     return (
//       "" +
//       (d <= 9 ? "0" + d : d) +
//       "." +
//       (m <= 9 ? "0" + m : m) +
//       "." +
//       y +
//       " " +
//       (hh <= 9 ? "0" + hh : hh) +
//       ":" +
//       (mm <= 9 ? "0" + mm : mm) +
//       ":" +
//       (ss <= 9 ? "0" + ss : ss)
//     );
//   }

//   getSortOptionAttr(element) {
//     const sortDataOpt =
//       $(element)[0].options[$(element)[0].selectedIndex].dataset.tmz;
//     return sortDataOpt;
//   }

//   setHTMLElement(element, value) {
//     if (value != "") {
//       $(element).html(value);
//     } else {
//       $(element).html("");
//     }
//   }

//   trigger_select(element) {
//     //при изменении region показываем или скрываем список np
//     if ($(element)[0].id == "region") {
//       if ($(element)[0].value == "other_reg") {
//         this.np_tr.show();
//         this.np.attr("required", true); //становится обязательным
//       } else {
//         this.np_tr.hide();
//         this.np.attr("required", false); //теперь необязательное
//         this.setHTMLElement(this.cur_time, "");
//       }
//     } else if ($(element)[0].id == "np") {
//       if ($(element)[0].value != "") {
//         this.setHTMLElement(
//           this.cur_time,
//           this.addHoursDate(this.getSortOptionAttr(element))
//         );
//       }
//     }
//   }

//   trigger_click(element) {
//     if ($(element)[0].id == "bt_cleen") {
//       this.np_tr.hide();
//       this.setHTMLElement(this.cur_time, "");
//     }
//   }

//   hello_fio(fio) {
//     console.log("hello_fio: " + `${this.hfio} ${fio}`);
//     return `${this.hfio} ${fio}`;
//   }

//   get HelloFIO() {
//     console.log("getter: " + this.hfio);
//     return this.hfio;
//   }

//   set HelloFIO(helloWorld) {
//     console.log("setter: " + helloWorld);
//     this.hfio = helloWorld;
//   }

//   init() {
//     this._privateMethod();
//     this.sortOption.on("change", (e) => {
//       this.trigger_select(e.currentTarget);
//     });
//     this.bt_cleen.on("click", (e) => {
//       this.trigger_click(e.currentTarget);
//     });
//     this.form1.on("submit", (e) => {
//       this.setHTMLElement($("#p_fio"), this.hello_fio(this.fio.val()));
//       this.setHTMLElement(
//         $("#p_address"),
//         "Адрес: " +
//           this.region.find("option:selected").text() +
//           ", " +
//           this.np.val()
//       );
//       this.setHTMLElement($("#p_email"), "Эл адрес: " + this.email.val());
//       this.setHTMLElement($("#p_birthdate"), "д/р: " + this.birthdate.val());
//       this.setHTMLElement($("#p_sex"), "Пол: " + this.t_sex.val());
//       this.setHTMLElement($("#p_about"), "О себе: " + this.about.val());
//       return false;
//     });
//   }
// }

$(() => {
  // const objForm1 = new form1("Доброе утро");
  // objForm1.HelloFIO;
  // objForm1.HelloFIO = "Добрый день";
  // objForm1._privateMethod();

  
});
