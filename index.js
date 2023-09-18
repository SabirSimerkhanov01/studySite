const questionInner = document.querySelectorAll('.question');
const triangle = document.querySelectorAll('.triangle');

const state = {
    prevId: '',
    id: '',
};

const render = (state) => {
    const { id } = state;
    const { prevId } = state;

    if (prevId !== '') {
        const previousValue = document.getElementById(Number(prevId));
        previousValue.classList.remove('open');
        previousValue.classList.add('close');

        const previousV = previousValue.parentNode.querySelector('.question_p');
        previousV.classList.remove('block');
        previousV.classList.add('none');
    }

    const openEl = document.getElementById(Number(id));
    const p = openEl.parentNode.querySelector('.question_p');
    openEl.classList.remove('close');
    openEl.classList.add('open');

    p.classList.remove('none');
    p.classList.add('block');

    if (prevId === id) {
        openEl.classList.remove('open');
        openEl.classList.add('close');
    
        p.classList.remove('block');
        p.classList.add('none');
        state.id = '';
    }
};

questionInner.forEach((el) => {
    el.addEventListener('click', (e) => {
        const nowEl = e.target;
        state.prevId = state.id;
        state.id = nowEl.id;
        render(state);
    });
});