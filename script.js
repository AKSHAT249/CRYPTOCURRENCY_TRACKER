let tables = document.getElementById("tables");


async function renderDate(){
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    // console.log(res);
    const data = await res.json();
    // console.log("data", data);

    render(data);
}

renderDate();

const render = (data) => {
    tables.innerHTML = ""
    tables.innerHTML += ""

    data.map( (item, index) => {
        tables.innerHTML += `
        <tr >
            <td style="color:white;"><img style="width:20px; height:20px" src="${item.image} "/> ${item.name}</td>
            <td style="color:white">${item.symbol.toUpperCase()}</td>
            <td style="color:white">$${item.current_price}</td>
            <td style="color:white">$${item.total_volume}</td>
            <td style="color:${item.price_change_percentage_24h > 0 ? "green":"red"}">${item.price_change_24h.toFixed(2)}%</td>
            <td style="color:white">Mkt Cap: $${item.market_cap}</td>
            
        
        </tr>
        
        `
    } )
    
}


async function sortByMkyCap(){
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    
    const data = await res.json();
    // console.log("data", data);

    let sorted_data = data.sort(function(a, b){return b.market_cap-a.market_cap});

    render(sorted_data);
    

}


async function sortByPercentage(){
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    
    const data = await res.json();
    // console.log("data", data);

    let sorted_data = data.sort(function(a, b){return b.price_change_percentage_24h-a.price_change_percentage_24h});

    render(sorted_data);
    

}




async function searched(){
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
    
    const data = await res.json();
    // console.log("data", data);
    let searched_value = document.getElementById("search").value;
    // console.log(searched_value);
    let searched_data = []
    data.map( (item)=> {
        if(item.name.includes(searched_value)){
            searched_data.push(item)

        }
    })
    render(searched_data)

}

    


