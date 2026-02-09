 var inp=  document.getElementById('inp')
    var btn=document.getElementById('btn')
    var div=  document.getElementById('l')
    var del= document.getElementById('dell')
    var cl = document.getElementById('bt')
    var arr =[]

    btn.addEventListener('click',()=>
    {
    arr.push(inp.value)
    console.log(arr)
    addtodo(inp.value)
    inp.value=' '
    })


    function addtodo(data)
    
    {
    var row= document.createElement('tr')
    var list =  document.createElement('td')
    var btn =document.createElement('button')
    var list2= document.createElement('td')
     list.style.width='60%';list2.style.width='40%';
     list.style.height='35px'; 
        list.innerText=data
        row.appendChild(list)
        div.appendChild(row)
         btn.innerText='Delete'
         btn.style.padding='7px';btn.style.borderRadius='10px'
        list2.appendChild(btn)
        row.appendChild(list2)
        btn.style.backgroundColor="red"
        btn.style.border='none'  
        btn.style.color="black"
        btn.style.width='65px'
        list.style.color="white"
        list.style.textAlign="center"
        btn.style.borderColor="Black"
        list.style.fontSize="20px"
            localStorage.setItem('todos',JSON.stringify(arr))
        list.addEventListener('click',
        () =>
        { 
        list.style.textDecoration="Line-through" 
         list.style.color='black'
        localStorage.setItem('todos',JSON.stringify(arr))
        
    })
    btn.addEventListener('click',()=>
    {   
        list.remove()
        btn.remove() 
        Remove(data)
       
        
    })
    del.addEventListener('click',
        ()=>{div.remove()
            Remove(data)
        }
    )
    
    }
    window.onload=()=>{
    arr= JSON.parse( localStorage.getItem('todos')) || []
    arr.forEach(x=>addtodo(x))
    }
    function Remove(data)   
    {
    var index = arr.indexOf(data)
    if(index >-1)
    {
        arr.splice(index,1)
        
        console.log(arr)      
        localStorage.setItem('todos',JSON.stringify(arr))
        
    }
    }
   