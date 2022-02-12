import React, { useState, useRef } from 'react';
import Footer from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';
import TasksFilter from '../TasksFilter/TasksFilter';

const TodoApp = () => {
  const [todosList, setTodoslist] = useState([]);
  const [tab, setTab] = useState('all');
  const clickHandler = (currentTab) => {
    setTab(currentTab);
  };
  const inputRef = useRef('');
  const activeCount = todosList.filter((item) => item.isDone).length;

  const onAdd = (event) => {
    if (event.code === 'Enter' && event.target.value !== '') {
      setTodoslist([...todosList, { name: event.target.value, id: Date.now() }]);
      inputRef.current.value = '';
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
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          ref={inputRef}
          onKeyUp={(event) => onAdd(event)}
        />
      </header>
      <TodoList
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
}

export default TodoApp;
