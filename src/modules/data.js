async function getData (city) {
    try {
        const endKey=`http://api.weatherapi.com/v1/forecast.json?key=523aad0fd36442f98a4141313232903&q=${city}&days=7`;
        const response=await fetch(endKey,{mode:'cors'});
        if (!response.ok){
            throw new Error(`Sorry cant find ${city}.`);
        }
        const data=await response.json();
        console.log (data);
        return data;
    }
    catch(error) {
        alert(error);
    }
}

export default getData;