container=document.getElementById("container");
startingdiv=document.getElementById("startingdiv");

function display(clicked_id)
{

    console.log(clicked_id);
    const url="https://api.openweathermap.org/data/2.5/weather?q="+clicked_id+"&appid=e51df1254b226015b38e5745fbc38553"
    fetch(url)
    .then( function (data)
    {
        return data.json();
    }
    )
    .then(function(list)
    {
        var weather_description= list.weather[0].description;
        var temp=(list.main.temp-273.15).toFixed(2);
        var humidity=list.main.humidity;
        var wind=((list.wind.speed)*10).toFixed(2);

        alert("Feels like: "+weather_description+"\nTemperature: "+temp+"°C"+"\nHumidity: "+humidity+"%"+"\nWind Speed: "+wind+"km/hr");
    })
    .catch(function(error)
    {
        console.log(error);
    }
    )
}

function createcard(i)
{
let bodyElement = document.body;
let outerDiv = document.createElement("div");
outerDiv.className="col-sm-12 col-lg-4 card card-header card-body border-5 border-white";
startingdiv.appendChild(outerDiv);


let cardHeading = document.createElement("div");    /*first heading*/
let imageElement = document.createElement('img');
let divcontainer1 = document.createElement('div');
let divcontainer2 = document.createElement('div');
let divcontainer3 = document.createElement('div');
let button=document.createElement('button');



bodyElement.className="document";

imageElement.className = "image";
imageElement.id="image"+i;

cardHeading.className = "cardHeading";
cardHeading.id="cardHeading"+i;

divcontainer1.className = "divcontainer";
divcontainer1.id="div1"+i;

divcontainer2.className = "divcontainer";
divcontainer2.id="div2"+i;

divcontainer3.className = "divcontainer";
divcontainer3.id="div3"+i;

button.className="button button-primary";
button.id="button"+i;

outerDiv.append(cardHeading,imageElement,divcontainer1,divcontainer2,divcontainer3,button);

}

var fetch_data= fetch("https://restcountries.com/v3/all")
.then( function (data)
{
    return data.json();
}
)
.then(function(list)
{
    for(var i=0;i<list.length;i++)
    {

        if(list[i].hasOwnProperty("name") && list[i].hasOwnProperty("flags") && list[i].hasOwnProperty("capital") && 
        list[i].hasOwnProperty("region") && list[i].hasOwnProperty("cca3"))
        createcard(i);
        else
        continue

        if(list[i].hasOwnProperty("name"))
        {
            var country_name=list[i].name.common;
            var heading=document.getElementById("cardHeading"+i);
            heading.innerText=country_name;
        }
 

        if(list[i].hasOwnProperty("flags"))
        {
            var flag=list[i].flags[0];
            var image=document.getElementById("image"+i);
            image.src=flag;
        }

        
        if(list[i].hasOwnProperty("capital"))
        {
            var capital=list[i].capital[0];
            var div1=document.getElementById("div1"+i);
            div1.innerText="Capital: "+capital;
        }



        if(list[i].hasOwnProperty("region"))
        {
            var region=list[i].region;
            var div2=document.getElementById("div2"+i);
            div2.innerText="Region: "+region;
        }



        if(list[i].hasOwnProperty("cca3"))
        {
            var country_code2=list[i].cca3;
            var div3=document.getElementById("div3"+i);
            div3.innerText="Country Code: "+ country_code2;
        }


        
        
        var button=document.getElementById("button"+i);
        button.setAttribute("id",capital);
        button.innerText="Click for Weather";
        button.setAttribute("onclick","display(this.id)");
    }


    
    
})
.catch(function(error)
{
    console.log(error);
}
)


