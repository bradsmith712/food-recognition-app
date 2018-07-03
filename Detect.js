const app = new Clarifai.App({
 apiKey: 'YOUR_API_KEY'
});

const detect = async () =>{

    const image = document.getElementsByClassName('image')[0].value;
    const response = await app.models.predict(Clarifai.FOOD_MODEL,image);
    const items = await createItems(response.outputs[0].data.concepts);
    console.log(response);
    const ul = document.getElementsByClassName("ingredients")[0];
    ul.innerHTML = items;
}

const createItems = (concepts)=> {
  const items = concepts.reduce((accumulator, item)=>{
    return accumulator+`<li>${item.name}, probability: ${item.value}</li>`;
  },"");
  return items;
}
