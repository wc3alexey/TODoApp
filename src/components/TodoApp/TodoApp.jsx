import React, { useState, useRef } from 'react';

import { Footer } from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';
import TasksFilter from '../TasksFilter/TasksFilter';

const TodoApp = () => {
  const [todosList, setTodoslist] = useState([]);
  const [tab, setTab] = useState('all');
  const [title, setTitle] = useState('');
  const [minuts, setMinuts] = useState('');
  const [second, setSecond] = useState('');
  const clickHandler = (currentTab) => {
    setTab(currentTab);
  };
  const inputRef = useRef('');
  const activeCount = todosList.filter((item) => item.isDone).length;

  const onAdd = (title) => {
    if (title !== '') {
      setTodoslist([...todosList, { name: title, id: Date.now(), time: minuts * 60 + second }]);
      setTitle('');
      setMinuts('');
      setSecond('');
    }
  };
  const onRemove = (id) => {
    setTodoslist(todosList.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    setTodoslist(todosList.filter((item) => !item.isDone));
  };

  const onToggle = (id) => {
    setTodoslist(
      todosList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
        return item;
      })
    );
  };
  const onSetEdit = (id) => {
    setTodoslist(
      todosList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isActive: true,
          };
        }
        return { ...item, isActive: false };
      })
    );
  };

  const onEditActiveItem = (id, event) => {
    if (event.code === 'Enter' && event.target.value !== '') {
      setTodoslist(
        todosList.map((item) => {
          if (item.id === id) {
            return { ...item, name: event.target.value, isActive: false };
          }
          return item;
        })
      );
    }
  };
  const currentTodos = () => {
    if (tab === 'active') {
      return todosList.filter((item) => !item.isDone);
    }
    if (tab === 'сompleted') {
      return todosList.filter((item) => item.isDone);
    }
    return todosList;
  };
  const handlerSubmit = (event) => {
    event.prevent.default;
    onAdd(title);
  };
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handlerTitleMinutes = (event) => {
    setMinuts(event.target.value);
  };
  const handlerTitleSecond = (event) => {
    setSecond(event.target.value);
  };
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={handlerSubmit}>
          <input
            type="text"
            value={title}
            required
            id="newTodo"
            className="new-todo"
            placeholder="What needs to be done?"
            ref={inputRef}
            onChange={(event) => changeTitle(event)}
          />
          <input
            type="number"
            value={minuts}
            required
            className="new-todo-form__timer"
            placeholder={'Min'}
            onChange={handlerTitleMinutes}
            max="200"
          />
          <input
            type="number"
            value={second}
            required
            className="new-todo-form__timer"
            placeholder={'Sec'}
            onChange={handlerTitleSecond}
            max="59"
          />
          <input type="submit" />
        </form>
        <label htmlFor="newTodo" />
      </header>
      <TodoList
        title={title}
        minuts={minuts}
        second={second}
        todos={currentTodos()}
        handleRemove={onRemove}
        onToggle={onToggle}
        onSetEdit={onSetEdit}
        onEditActiveItem={onEditActiveItem}
      />
      <TasksFilter tab={tab} clickHandler={clickHandler} />
      <Footer handleClear={handleClear} activeCount={activeCount} />
    </section>
  );
};

export default TodoApp;
