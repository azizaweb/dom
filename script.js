// const listItem = document.getElementsByTagName('li') привязать если хотим
// console.log(listItem) tag

//  const listItem = document.getElementsByClassName('list-item') 
//  console.log(listItem) class

// const item = document.getElementById('click-btn') 
//  console.log(item)
//  id  с #

const item = document.querySelectorAll('.list-item') 
item.forEach((item) => {
    console.log(item)
})
 

