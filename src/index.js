async function getData () {
    try {
        const fetchData=await fetch('http://api.weatherapi.com/v1/current.json?key=523aad0fd36442f98a4141313232903&q=paris',{mode:'cors'}); 
        const dataSet=await fetchData.json();
        console.log (dataSet);
    }
    catch(error) {
        console.log (error);
    }
}

getData();