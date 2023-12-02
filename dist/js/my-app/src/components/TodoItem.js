"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Todo = ({ todo, updateTodo, deleteTodo }) => {
    const checkTodo = todo.status ? `line-through` : '';
    return (<div className='Card'>
      <div className='Card--text'>
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className='Card--button'>
        <button onClick={() => updateTodo(todo)} className={todo.status ? `hide-button` : 'Card--button__done'}>
          Complete
        </button>
        <button onClick={() => deleteTodo(todo._id)} className='Card--button__delete'>
          Delete
        </button>
      </div>
    </div>);
};
exports.default = Todo;
