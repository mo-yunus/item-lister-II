let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

//addItem
function addItem(e) {
    e.preventDefault();
    console.log('submitted');
    console.dir(e);

    //get input value
    let newItem = document.getElementById('item').value;

    //create new li element
    li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    let deleteBtn = document.createElement('button');

    //add classes to del button
    deleteBtn.className = 'btn-2 delete'

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    //append li to list
    itemList.appendChild(li);

}

//remove item
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        };
    };
}

//filter items
filter.addEventListener('keyup', filterItems);


function filterItems(e) {
    //convert text to lowercase
    let text = e.target.value.toLowerCase();

    //get lis
    let items = itemList.getElementsByTagName('li');
    //convert the HTMLcollection into an Array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });
}