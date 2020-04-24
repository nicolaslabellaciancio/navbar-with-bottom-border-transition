const items = document.querySelectorAll('li');
const underline = document.querySelector('.underline')

// set the initial size of the bar
underline.style.width = items[0].offsetWidth + 'px';

for (let i = 0; i < items.length; i++) {
    const li = items[i];

    li.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        li.classList.add('active');

        //move the bar dynamically
        let sizeToMove = 0;
        for (let j = 0; j < i; j++) {
            sizeToMove = items[j].offsetWidth + items[j].offsetLeft;
        }

        underline.style.left = (sizeToMove + items[0].offsetLeft) + 'px';
        underline.style.width = li.offsetWidth + 'px';
    })
}