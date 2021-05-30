let inputText = document.querySelector('#search');
let contentDiv = document.querySelector('#content');
let arrayList =[
    {title:'saurav'},
    {title:'gaurav'},
    {title:'garima'},
    {title:'janak'},
    {title:'laxmi'},
    {title:'saumay'},
    {title:'garv'},
];
let timer = null;

function populateResult(array){
    let markup = '';
    array.forEach(element => {
        markup = markup + `<p>${element.title}</p>`
    });
    contentDiv.innerHTML = markup;
}

populateResult(arrayList);

function search(q=''){
    let filteredList = arrayList.filter((item)=>{
        return item.title.includes(q);
    })
    populateResult(filteredList)
}

inputText.addEventListener('keyup',()=>{
    debounce(()=>{
        search(inputText.value);
    },300)
});

function debounce(func,timer1){
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(()=>{
        func()
    },timer1)
}

