let timerID;

document.querySelectorAll('.dropdown-toggle').forEach((el) => {
    el.addEventListener('click', (e) => {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach((el) => {
            if (!document.querySelector(`[data-target="${path}"]`).classList.contains('open')) {
                document.querySelector(`[data-target="${path}"]`).classList.add('menu-active');
                timerID = setTimeout(() => {
                    document.querySelector(`[data-target="${path}"]`).classList.add('open');
                }, 0);
            } if (document.querySelector(`[data-target="${path}"]`).classList.contains('open')) {
                document.querySelector(`[data-target="${path}"]`).classList.remove('menu-active');
                timerID = setTimeout(() => {
                    document.querySelector(`[data-target="${path}"]`).classList.remove('open');
                }, 0);
            }
        });
    });
});








































// document.querySelectorAll('.dropdown-toggle').forEach((el) => {
//     el.addEventListener('click', (e) => {
//         const path = e.currentTarget.dataset.path;
//         document.querySelectorAll('.dropdown-menu').forEach((el) => {
//             if (!document.querySelector(`[data-target="${path}"]`).classList.contains('open')) {
//                 document.querySelector(`[data-target="${path}"]`).classList.add('menu-active');
//                 timerID = setTimeout(() => {
//                     document.querySelector(`[data-target="${path}"]`).classList.add('open');
//                 }, 0);
//             } if (document.querySelector(`[data-target="${path}"]`).classList.contains('open')) {
//                 document.querySelector(`[data-target="${path}"]`).classList.remove('menu-active');
//                 timerID = setTimeout(() => {
//                     document.querySelector(`[data-target="${path}"]`).classList.remove('open');
//                 }, 0);
//             }
//         });
//     });
// });