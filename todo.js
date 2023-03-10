    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
      {
      "userId": 14,
      "id": 1,
      "title": "buy plants from nursery",
      "completed": false
  },
  {
      "userId": 20,
      "id": 2,
      "title": "plant and fertilize garden",
      "completed": false
  }]
  
  const fetchTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => response.json())
      .then( (json) => arrayOfTodos = json)
  }
  
  const logTodos = () => {
      console.log(arrayOfTodos)
  }
  
  const populateTodos = () => {
    for (let i = 0; i<arrayOfTodos.length; i++) {
      let firstToDoTitle = arrayOfTodos[i].title;
      let li = document.createElement('li')
      let text = document.createTextNode(firstToDoTitle)
      li.appendChild(text);
      document.getElementById('todo-list').appendChild(li);
    }
  }

  const filterTodos = () => {
    clearTodos();
    let userId = parseInt(document.getElementById('userid').value);
    const filteredArrayOfTodos = arrayOfTodos.filter((todo) => {
      return todo.userId === userId;
    })

    for (let i = 0; i<filteredArrayOfTodos.length; i++) {
      let todoTitle = filteredArrayOfTodos[i].title;
      let li = document.createElement('li')
      let text = document.createTextNode(todoTitle)
      li.appendChild(text);
      document.getElementById('todo-list').appendChild(li);
    }
  }

  const completedTodos = () => {
    clearTodos();
    const filteredArrayOfTodos = arrayOfTodos.filter((todo) => {
      return todo.completed === true;
    })

    for (let i = 0; i<filteredArrayOfTodos.length; i++) {
      let todoTitle = filteredArrayOfTodos[i].title;
      let li = document.createElement('li')
      let text = document.createTextNode(todoTitle)
      li.appendChild(text);
      document.getElementById('todo-list').appendChild(li);
    }
  }

  const incompleteTodos = () => {
    clearTodos();
    const filteredArrayOfTodos = arrayOfTodos.filter((todo) => {
      return todo.completed === false;
    })

    for (let i = 0; i<filteredArrayOfTodos.length; i++) {
      let todoTitle = filteredArrayOfTodos[i].title;
      let li = document.createElement('li')
      let text = document.createTextNode(todoTitle)
      li.appendChild(text);
      document.getElementById('todo-list').appendChild(li);
    }
  }

  const clearTodos = () => {
    document.getElementById('todo-list').innerHTML='';
  }
