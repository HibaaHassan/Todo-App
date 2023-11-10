var getul =document.getElementById('ul')

function add() {
    var a = document.getElementById('input')
    var li = document.createElement( 'li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = ' '
    var deletebtn = document.createElement('button')
    var deletebtnText =document.createTextNode('Delete')
    deletebtn.appendChild(deletebtnText)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick','del(this)')
    var editbtn = document.createElement('button')
    var editbtnText = document.createTextNode('Edit')
    editbtn.appendChild(editbtnText)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick' , "editfunc(this)")
}

function deleteAll() {
    getul.innerHTML=''
}

function del(e) {
    e.parentNode.remove()
}

function editfunc(e) {
    
    var a = prompt( "enter edit " , e.parentNode.firstChild .nodeValue);
  e.parentNode.firstChild .nodeValue = a
}