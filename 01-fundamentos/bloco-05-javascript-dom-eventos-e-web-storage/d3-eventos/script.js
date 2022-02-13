function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let count = 0; count < weekDays.length; count += 1) {
      const days = weekDays[count];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    }
  }
  
  createDaysOfTheWeek();
  
  const dezDaysList = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

  function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');

    for (let count = 0;count < dezDaysList.length; count += 1) {
      let day = dezDaysList[count];
      let dayItem = document.createElement('li');

      if (day === 28) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day === 18 || day === 25) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 16) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }
    }
  }

  createDaysOfTheMonth();

  function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  };

  createHolidayButton('Feriados');

  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let count = 0; count < getHolidays.length; count += 1) {
        if (getHolidays[count].style.backgroundColor === setNewColor) {
          getHolidays[count].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[count].style.backgroundColor = setNewColor;
        }
      }
    })
  }
  
  displayHolidays();

  function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  }
  
  createFridayButton('Sexta-feira');

  function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU MLK';
  
    getFridayButton.addEventListener('click', function() {
    for (let count = 0; count < fridays.length; count += 1) {
      if (fridays[count].innerHTML !== newFridayText) {
          fridays[count].innerHTML = newFridayText;
      } else {
          fridays[count].innerHTML = fridaysArray[count];
        }
      }
    })
  }
  
  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);

  function dayMouseOver() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '25px';
      event.target.style.fontWeight = '600';
    })
  }
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  }
  
  dayMouseOver();
  dayMouseOut();

  function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  }
  
  newTaskSpan('Projeto:');

  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  }
  
  newTaskDiv('blueviolet');

  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  }
  
  setTaskClass();

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  }
  
  setDayColor();

  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  }
  
  addNewTask();
