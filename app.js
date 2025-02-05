const form=document.querySelector("#searchform");
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm=form.elements.query.value;
    const config={params:{q:searchTerm}};
    const res=await axios.get(`https://api.tvmaze.com/search/people`,config);
    makeImages(res.data);
    form.elements.query.value='';
});


const makeImages=(person)=>{//person is one of variable
    for(let result of person){
        if(result.person.image){
        const img=document.createElement('IMG');
        img.src=result.person.image.medium;
        document.body.append(img);
    }

    }

}

