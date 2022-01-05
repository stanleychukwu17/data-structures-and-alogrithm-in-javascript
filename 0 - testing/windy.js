const cursor = {x:0, y:0};
window.addEventListener('mousemove', event => {
    cursor.x = (event.clientX / 800) - 0.5
    cursor.y = (event.clientY / 600) - 0.5
    console.log(cursor)
})