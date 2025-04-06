let main = document.getElementById('main')

let arr = [
    {
        username : 'Rohit',
        age : 20,
        maride : false,
        img : 'https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    },
    {
        username : 'Karan',
        age : 22,
        maride : true,
        img : 'https://images.unsplash.com/photo-1511079727166-22288ec84472?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    },
    {
        username : 'shubham',
        age : 40,
        maride : true,
        img : 'https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    },
    {
        username : 'rutik',
        age : 30,
        maride : false,
        img : 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    }
]


function upDate(){
    let sum = ''

    arr.forEach(function(elem, idx){
        sum += `<div class="card">
            <img src="${elem.img}" alt="">
            <h1>${elem.username}</h1>
            <h3>${elem.age}</h3>
            <h2>Maride : ${elem.maride}</h2>
               <h4>${elem.friend}</h4>
            <button id=${idx}>Add Friend</button>
    
        </div>`
    })
    main.innerHTML = sum
}

upDate();

main.addEventListener('click', function(dets){
    console.log(dets.target.id);
    let gold = arr[dets.target.id]
    if(gold.friend == 'Stranger'){
        gold.friend = 'Friends'

    }else{
        gold.friend = 'Stranger'
    }
    upDate(); 
})


