


document.addEventListener("DOMContentLoaded", function(){
     let lists =  [
        {
          "user_name": "User1",
          "user_web" : "user@user.com",
          "registration": "2020-02-10T01:30:00.000-05:00",
          "last_activity": "2020-02-10T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User2",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User3",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User4",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User5",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User6",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User7",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User8",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User9",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User10",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User11",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User12",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User13",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User14",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User15",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User16",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User17",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User18",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        },
        {
          "user_name": "User19",
          "user_web" : "user@user.com",
          "registration": "2020-02-30T01:30:00.000-05:00",
          "last_activity": "2020-02-30T01:30:00.000-05:00",
          "last_move": "view_landing_course1",
          "good": "Как наладить отношения"
        }
          ]; 
     let usersField = document.querySelector(".users");
     let usersItems = [];
     unLoading();
     
    
       // Server request simulation

    function unLoading(){
         
        //здесь должен быть запрос с сервера
        
        /*   fetch('http://localhost:3000/users').then((response)=>{
                  return response.json()
             }).then((response)=>{})     */   
         
            let str = ``;

            for(let elem of lists){
                let date = new Date(elem.registration);
                let day = date.getDate();
                day = day < 10 ? "0" + day : day;
                let month = date.getMonth() + 1;
                month = month < 10 ? "0" + month : month;
                let year = date.getFullYear();
                
                let userItem = `
                         <div class="user-item">
                             <label class="check"></label>
                             <div class="user-info">
                                 <article class="item">
                                     <span class="user-name">${elem.user_name}</span>
                                     <span class="user-web">${elem.user_web}</span>
                                 </article>
                                 <span class="date-registration" data-date="${year},${month},${day}">${returnDate(elem.registration)}</span>
                                 <span class="date-of-last_activity">${returnDate(elem.last_activity)}</span>
                                 <label class="item-of-last-move">${elem.last_move}</label>
                                 <label class="item-of-good">${elem.good}</label>
                             </div>
 
                             <section class="edit-remove">
                                 <img src="images/edit.svg" alt="" class="edit">
                                 <img src="images/remove.svg" alt="" class="remove">
                             </section>
                         </div>
                      `
                 usersItems.push(userItem)
                 str += userItem;
            }
            usersField.innerHTML = str;  
    }
    // Server request simulation


    // date generating function
    function returnDate(datetime, short = false){
        let dateTime = new Date(datetime);
        let monthes;
        if(short == false){
            monthes = [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`];
        }
        else{
            monthes = [`Янв`, `Фев`, `Мар`, `Апр`, `Май`, `Июн`, `Июл`, `Авг`, `Сен`, `Окт`, `Ноя`, `Дек`];
        }
        
        let date = dateTime.getDate();
        let month = monthes[dateTime.getMonth()];
        let year = dateTime.getFullYear();
      
        return `${month} ${date}, ${year}`;
      }

    // date generating function



    //  settings for daterange calendar
    moment.locale('ru',{
        months:[`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`],
        monthsShort:[`Янв`, `Фев`, `Мар`, `Апр`, `Май`, `Июн`, `Июл`, `Авг`, `Сен`, `Окт`, `Ноя`, `Дек`]
    });

    let start = moment().subtract(29, 'days');
    let end = moment();

    let option1 = {
            "showCustomRangeLabel": false,
            "autoUpdateInput": false,
            ranges: {
                'Весь срок': [moment(`01-01-${new Date().getFullYear()}`), moment()],
                'Сегодня': [moment(), moment()],
                'Вчера': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Последние 7 дней': [moment().subtract(6, 'days'), moment()],
                'Последние 30 дней': [moment().subtract(29, 'days'), moment()],
                'В этом месяце': [moment().startOf('month'), moment().endOf('month')],
                'Прошлый месяц': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            "locale": {
                "format": "MMM D, YYYY"
            }
            
    }

      $("#date").daterangepicker(option1);

      $('#date').on('apply.daterangepicker', function(ev, picker) {
          showSelectedDates(event, picker.startDate._d, picker.endDate._d);
      });
      //  settings for daterange calendar


      

      let picker = document.querySelector('#date'),
          forDate = document.querySelector('.for-date'),
          img1 = document.querySelector('.list-sign1'),
          img2 = document.querySelector('.list-sign2'),
          startDate,
          endDate,
          active = false,
          selectedPeriod = false;
       

      //  settings for datepicker calendar
      let option2 = {
            range: 'period', 
            numberOfMonths: 1,
            showButtonPanel: true,
            currentText: 'Отмена',
            closeText: "Обновить",

            onSelect: function(dateText, inst, extensionRange) {
                startDate = extensionRange.startDateText;
                endDate = extensionRange.endDateText;
                $('#date').val("За 1 день");
            },

            onClose: function(dateText, inst){
                showSelectedDates(event, startDate, endDate);
                startDate = undefined;
                endDate = undefined;
                
            },
            monthNames: [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`], 
            monthNamesShort: [`Янв`, `Фев`, `Мар`, `Апр`, `Май`, `Июн`, `Июл`, `Авг`, `Сен`, `Окт`, `Ноя`, `Дек`], 
            dayNames: ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'], 
            dayNamesShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'], 
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
    };

    $('#date').datepicker(option2);
    

    let extensionRange = $('#picker').datepicker('widget').data('datepickerExtensionRange');
    if(extensionRange.startDateText && extensionRange.endtDateText) $('#date').val(returnDate(extensionRange.startDateText, true) + ' - ' + returnDate(extensionRange.endDateText, true));
    if(extensionRange.startDateText) $('#date').val(returnDate(extensionRange.startDateText, true));
    if(extensionRange.endtDateText) $('#date').val(returnDate(extensionRange.endDateText, true));
    //  settings for datepicker calendar
    
    



    /* displays selected dates */
    
    picker.addEventListener('click', showSelectedDates);

    function showSelectedDates(event, start, end){
       let target = event.target.classList.contains('ui-datepicker-close') || event.target.dataset.rangeKey;
        document.addEventListener('click', cancel);

        if(selectedPeriod){
            let currentField = document.querySelector('.alt-field');
            hideDateBlock(null, currentField);
            selectedPeriod = false;
        }
   
       if(event.target.closest('.for-date') && !active){
            forDate.style.background = 'url(images/calendar_2.svg) no-repeat top 0 left 0';
            picker.style.color = '#FF7439';
            img2.style.opacity = '1';
            img2.style.transform = "rotateX(180deg)";
            img1.style.opacity = "0";
            active = true;
            picker.removeEventListener('click', showSelectedDates);
       }
       else if(active){
            forDate.style.background = 'url(images/calendar.svg) no-repeat top 0 left 0';
            picker.style.color = '#000';
            img2.style.opacity = '0';
            img2.style.transform = "rotateX(180deg)";
            img1.style.opacity = "1";
            active = false;
            picker.addEventListener('click', showSelectedDates);
      }
       
       
       if(target){
           if(!start && !end){
               return;
           }
           
        let dateField = document.querySelector(".date-field");
        let dateBlock = document.querySelector(".alt-field");

            dateField.innerHTML = `${returnDate(start, true)} - ${returnDate(end, true)}`;
            dateBlock.classList.add('shown');
            dateBlock.querySelector('.close-selected-date').addEventListener("click", hideDateBlock);
            selectedPeriod = true;
            sort(start, end);
       }
       else{
        return;
       }
        
    }
      /* displays selected dates */



     /* delete marked dates */
    function cancel(event){
       if(event.target.classList.contains('ui-datepicker-current')){
        deleteSelectedIcons()
        startDate = undefined;
        endDate = undefined;     
       }
    }

    function deleteSelectedIcons(){
        let calendar = document.querySelector('.ui-datepicker-calendar');

        for(let row of calendar.children[1].rows){
            for(let cell of row.cells){
                if(  (cell.classList.contains('selected') && cell.classList.contains('selected-start') && cell.classList.contains('selected-end') && cell.classList.contains('ui-datepicker-current-day')) || 
                     (cell.classList.contains('selected') && cell.classList.contains('selected-start') || cell.classList.contains('selected-end')) || 
                     (cell.classList.contains('selected') && cell.classList.contains('selected-end') || cell.classList.contains('selected-start') && cell.classList.contains('ui-datepicker-current-day')) ||
                     cell.classList.contains('selected')
                 ){
                 cell.classList.remove('selected')
                 if(cell.classList.contains('ui-datepicker-current-day')){
                     cell.classList.remove('ui-datepicker-current-day')
                 }
                 if(cell.classList.contains('selected-start')){
                     cell.classList.remove('selected-start')
                 }
                 if(cell.classList.contains('selected-end')){
                     cell.classList.remove('selected-end')
                 }
                 
                }
            }  
        }  
    }
    /* delete marked dates */
     
    /* hide block with selected dates */
    function hideDateBlock(event, element = undefined){
        let target;
        if(!event){
           target = element 
        }
        else{
            target = event.target.closest('.alt-field');
        }
          target.classList.remove('shown');
          usersField.innerHTML = ``;
          usersItems.forEach((item)=>{
            usersField.innerHTML += item;
            })
          startDate = undefined;
          endDate = undefined;
    }
    /* hide block with selected dates */
    

    /* sorting users by selected dates */
    function sort(start , end){
         let dates = [new Date(start), new Date(end)];
         let forCurrentDates = [];
          
         dates.forEach((date, i)=>{
             let day = date.getDate();
                 day = day < 10 ? "0" + day : day;
             let month = date.getMonth() + 1;
                 month = month < 10 ? "0" + month : month;
             let year = date.getFullYear();
             dates[i] = new Date(`${year},${month},${day}`).getTime();
         })
        
       let registered = document.querySelectorAll(".date-registration");

       registered.forEach((register)=>{
           let compareDate = new Date(register.dataset.date).getTime();
           if(dates[0] == dates[1]){
               if(dates[0] == compareDate){
                   forCurrentDates.push(register);
               }
               else{
                forCurrentDates.push(); 
               }
           }
           else if(dates[0] !== dates[1]){
             
             let date_1 = new Date(dates[0]).getTime();
             let date_2 = new Date(dates[1]).getTime();
                 
                while(date_1 <= date_2){
                    if(date_1 == compareDate){
                    forCurrentDates.push(register);
                    }
                    
                    let newDate = new Date(date_1);
                    let day = newDate.getDate() + 1;
                    day = day < 10 ? "0" + day : day;
                    let month = newDate.getMonth() + 1;
                    month = month < 10 ? "0" + month : month;
                    let year = newDate.getFullYear();
                    date_1 = new Date(`${year},${month},${day}`).getTime();
                }
           }
       })
       usersField.innerHTML = ``;
       pasteUsers(forCurrentDates, usersField);      
    }
    /* sorting users by selected dates */

    /* paste users */
    function pasteUsers(array, field){

        for(let user of array){
           field.append(user.closest('.user-item'));
        }

    }
    /* paste users */

});
