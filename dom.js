const list = document.getElementById('list');
const input = document.getElementById('input');
const addButton = document.getElementById('button');

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const div = document.createElement('div');
    div.classList.add('flex__task');
    const chexBox = document.createElement('input')
    chexBox.setAttribute('type', 'checkbox')
    chexBox.classList.add('checkbox_class')
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task_text');
    
    taskDiv.textContent = input.value;
    taskDiv.style.textDecoration = 'none'
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove_btn');
    removeButton.textContent = 'x';

    removeButton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
    list.append(div)
    div.appendChild(chexBox)
    div.appendChild(taskDiv);
    div.appendChild(removeButton);


    chexBox.addEventListener('change', () => {
        if (chexBox.checked) {
            div.classList.add('inactive');
        } else {
            div.classList.remove('inactive');
        }
    });

    input.value = '';
});
