// State
const state = {
    previousValue: '',
    value: '',
};


// Отрисовка
const watchedstate = (state) => {
    const { previousValue } = state;
    const { value } = state;

    if (previousValue !== '') {
        const previousValueH = document.getElementById(Number(previousValue));
        previousValueH.classList.remove('open');
        previousValueH.classList.add('close');
    }

    const valueH = document.getElementById(Number(value));
    valueH.classList.remove('close');
    valueH.classList.add('open');

    if (value === previousValue) {
        const el = document.getElementById(Number(value));
        el.classList.remove('open');
        el.classList.add('close');
        state.value = '';
    }
};

// Event
const questions = document.querySelectorAll('.question_h3');

questions.forEach((el) => {
    el.addEventListener('click', (e) => {
        state.previousValue = state.value;
        state.value = e.target.id;
        watchedstate(state);
    });
});
