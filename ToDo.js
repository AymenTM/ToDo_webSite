var list = document.querySelector('.list')
var btn_add = document.querySelector('.btn-add')
var input_todo = document.querySelector('.input-todo')

btn_add.addEventListener('click', (e) => {
  var todo = input_todo.value.substring(1, 65)
  add_item(todo)
  input_todo.value = ""
})




function add_item(input) {
  let done = false
  var div = document.createElement('div')
  var li = document.createElement('li')
  var trash_btn = document.createElement('button')
  var check_btn = document.createElement('button')
  trash_btn.classList.add('px-10', 'py-5', 'rounded', 'shadow', 'text-xl', 'font-bold', 'bg-red-700', 'hover:bg-red-500')
  check_btn.classList.add('px-10', 'py-5', 'rounded', 'shadow', 'text-xl', 'font-bold', 'bg-green-700', 'hover:bg-green-500')
  li.classList.add('w-2/4', 'py-4', 'bg-gray-100', 'rounded', 'shadow', 'px-4', 'text-2xl')
  div.classList.add('flex', 'justify-center', 'mt-6')
  trash_btn.innerHTML = `<i class="fas fa-trash"></i>`
  check_btn.innerHTML = `<i class="fas fa-check"></i>`
  li.innerHTML = input

  check_btn.addEventListener('click', (e) => {
     done = !done
    if(done){
      li.classList.add('line-through')
    }else{
      li.classList.remove('line-through')
    }
    
  })
  trash_btn.addEventListener('click', (e) => {

    div.style.display = 'none'


  })

  div.appendChild(li)
  div.appendChild(check_btn)
  div.appendChild(trash_btn)
  list.appendChild(div)
}