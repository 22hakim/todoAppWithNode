"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const TodoItem_1 = __importDefault(require("./components/TodoItem"));
const AddTodo_1 = __importDefault(require("./components/AddTodo"));
const Api_1 = require("./Api");
const App = () => {
    const [todos, setTodos] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetchTodos();
    }, []);
    const fetchTodos = () => {
        (0, Api_1.getTodos)()
            .then(({ data: { todos } }) => setTodos(todos))
            .catch((err) => console.log(err));
    };
    const handleSaveTodo = (e, formData) => {
        e.preventDefault();
        (0, Api_1.addTodo)(formData)
            .then(({ status, data }) => {
            if (status !== 201) {
                throw new Error("Error! Todo not saved");
            }
            setTodos(data.todos);
        })
            .catch(err => console.log(err));
    };
    const handleUpdateTodo = (todo) => {
        (0, Api_1.updateTodo)(todo)
            .then(({ status, data }) => {
            if (status !== 200) {
                throw new Error("Error! Todo not updated");
            }
            setTodos(data.todos);
        })
            .catch(err => console.log(err));
    };
    const handleDeleteTodo = (_id) => {
        (0, Api_1.deleteTodo)(_id)
            .then(({ status, data }) => {
            if (status !== 200) {
                throw new Error("Error! Todo not deleted");
            }
            setTodos(data.todos);
        })
            .catch(err => console.log(err));
    };
    return (<main className='App'>
      <h1>My Todos</h1>
      <AddTodo_1.default saveTodo={handleSaveTodo}/>
      {todos.map((todo) => (<TodoItem_1.default key={todo._id} updateTodo={handleUpdateTodo} deleteTodo={handleDeleteTodo} todo={todo}/>))}
    </main>);
};
exports.default = App;
