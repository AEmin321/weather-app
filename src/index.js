async function getData () {
    try {
        // const fetchCurrentData=await fetch('http://api.weatherapi.com/v1/current.json?key=523aad0fd36442f98a4141313232903&q=paris',{mode:'cors'}); 
        // const currentData=await fetchCurrentData.json();
        const fetchForeCastData=await fetch('http://api.weatherapi.com/v1/current.json?key=523aad0fd36442f98a4141313232903&q=paris',{mode:'cors'});
        const foreCastData=await fetchForeCastData.json();
        // console.log (currentData);
        console.log (foreCastData);
    }
    catch(error) {
        console.log (error);
    }
}

getData();