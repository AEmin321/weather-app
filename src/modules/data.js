async function getData (city) {
    try {
        const endKey=`http://api.weatherapi.com/v1/current.json?key=523aad0fd36442f98a4141313232903&q=${city}`;
        const fetchForeCastData=await fetch(endKey,{mode:'cors'});
        if (!fetchForeCastData.ok){
            throw new Error(`Sorry cant find ${city}.`);
        }
        const foreCastData=await fetchForeCastData.json();
        console.log (foreCastData);
        return foreCastData;
    }
    catch(error) {
        alert(error);
    }
}

export default getData;