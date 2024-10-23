import React from 'react';
import { createRoot } from 'react-dom/client'; // Импорт createRoot
import "modern-normalize";
import App from "./components/App.jsx";
import "./index.css";

const container = document.getElementById('root'); // Получение контейнера
const root = createRoot(container); // Создание корня
root.render(<App />);