import {Store} from 'vuex';

// Значения по умолчанию
let shouldSave = true; // Флаг для контроля сохранения состояния
let shouldRestore = true; // Флаг для контроля восстановления состояния

// Функция для установки флага shouldSave
export const setShouldSave = (value) => {
    shouldSave = value;
};

// Функция для установки флага shouldRestore
export const setShouldRestore = (value) => {
    shouldRestore = value;
};

export const plug = (store) => {
    store.subscribe((mutation, state) => {
        if (shouldSave) {
            localStorage.setItem('vuex-state', JSON.stringify(state));
        }
    });

    const storedState = localStorage.getItem('vuex-state');
    if (storedState && shouldRestore) {
        const state = JSON.parse(storedState);
        store.replaceState(state);
    }
};
