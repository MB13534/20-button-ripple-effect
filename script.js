const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        // const buttonTop = event.target.offsetTop;
        // const buttonLeft = event.target.offsetLeft;

        // const x = event.clientX;
        // const y = event.clientY;

        // const xInside = x - buttonLeft;
        // const yInside = y - buttonTop;

        // const circle = document.createElement('span');
        // circle.classList.add('circle');
        // circle.style.top = yInside + 'px';
        // circle.style.left = xInside + 'px';


        // this.appendChild(circle);

        // setTimeout(() => circle.remove(), 500)

        button.innerHTML = `Click Me<span class="circle" style="top: ${event.layerY}px; left: ${event.layerX}px"></span>`
    })
})

