/*Travsersing the Dom  
var itemList= document.querySelector('#items');
//console.log(itemList.parentElement); 
//itemList.parentElement.style.backgroundColor='Black'; 
//itemList.parentNode.style.backgroundColor='Black'; 

// Child nodes 
console.log(itemList.childNodes); 
itemList.childNodes.style.backgroundColor='pink';*/  
//Get element by ID 
//var headerTitle = (document.getElementById('header-title')); 
//headerTitle.innerHTML='Hello <p> add some items here <p>';
/*var itemList= document.querySelector('#items'); 
itemList.children[1].style.backgroundColor ='yellow';
itemList.children[0].style.backgroundColor ='lightblue';*/ 

// siblings 
//var itemList= document.querySelector('#items'); 
//console.log(itemList.nextElementSibling); 

// createElement 
// create a div 
/*var newDiv= document.createElement('div'); 
//Add class
newDiv.className='hello';
//Add Id
newDiv.id='hello 1';
//Add attr  
newDiv.setAttribute('title' , 'Hello div');
//create Text node 
var newDivText = document.createTextNode('HELLO WORLD');
//Add text to Div 
newDiv.appendChild(newDivText); 
newDiv.style.fontSize='30px' ;
newDivText.style.color='blue';
console.log(newDiv); */ 

/*var button = document.getElementById('button').addEventListener('click',buttonClick);
function buttonClick(e){
   // document.getElementById('header-title').textContent='CHANGED';
    // document.querySelector('#main').getElementsByClassName.backgroundColor = 'black';

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className); 
    console.log(e.target.classList); 

} */  
var form = document.getElementsById('addForm');
var itemList = document.getElementsById('items');

//Form submit event 
form.addEventLitener('submit',addItem);
//Add item 
function addItem(e) 
{
    e.preventDefault(); 

    // GET input value 
    var newItem = document.getElementById('item ').value; 
    // Create new li element 
    var li= document.createElement('li');
    //Add class 
    li.className =' list-group-item';
    // Add text node with input value 
    li.appendChild(document.createTextNode(newItem));
    
    //Create del button element 
    var deleteBtn  = document.createElement('button'); 
    
    //Add classes to del button 
    deleteBtn.className ='btn btn-danger btn-sm float-right delete '; 

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X')); 
    //Apend buton to li
    li.appendChild(deleteBtn); 
    //Apennd li to list 
    itemList.appendChild(li);

}