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
        username : 'Shubham',
        age : 40,
        maride : true,
        img : 'https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    },
    {
        username : 'Rutik',
        age : 30,
        maride : false,
        img : 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    },
    {
        username : 'Sudarshan',
        age : 19,
        maride : false,
        img : 'https://images.unsplash.com/photo-1551022372-0bdac482b9d6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    },
    {
        username : 'Dipak',
        age : 20,
        maride : false,
        img : 'https://images.unsplash.com/photo-1592046285097-6cdf4daf0d69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    },
    {
        username : 'Sahil',
        age : 22,
        maride : true,
        img : 'https://images.unsplash.com/photo-1613852348851-df1739db8201?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        friend : 'Stranger'
    }
]


function upDate(searchText = ''){
    let sum = ''

    arr.forEach(function(elem, idx){

            if(elem.username.toLocaleLowerCase().includes(searchText.toLowerCase())){
            let btn = elem.friend === 'Stranger'?'Add Friend':'Unfriend'
            let color = elem.friend === 'Stranger'?'red':'green'
            let maride = elem.maride?'lightpink':'yellow'
            console.log(elem.username);
            

            
        
        sum += `<div class="card" style="background-color: ${maride};">
            <img src="${elem.img}" alt="">
            <h1>${elem.username}</h1>
            <h3>${elem.age}</h3>
            <h2>Maride : ${elem.maride}</h2>
               <h4>${elem.friend}</h4>
            <button id=${idx} style="background-color: ${color};">${btn}</button>
            
        </div>`
        
    }  
    })
    main.innerHTML = sum
}

upDate();

main.addEventListener('click', function(dets){
    // console.log(dets.target);
    let gold = arr[dets.target.id]

    if(gold.friend == 'Stranger'){
        gold.friend = 'Friends'
        
    }else{
        gold.friend = 'Stranger'
    }

    setTimeout(()=>{
        upDate(); 
    },1000)
})

let search = document.getElementById('search')

search.addEventListener('input', function(){
    upDate(this.value)
})



