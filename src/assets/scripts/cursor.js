const cursor = document.querySelector('.cursor');

const cursor_funct = (e) => {
    let x = e.pageX - 20;
    let y = e.pageY - 20;
    cursor.setAttribute('style', `top: ${y}px; left: ${x}px;`);
};

window.addEventListener('mousemove', cursor_funct);