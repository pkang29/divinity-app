
function submitForm(){
    event.preventDefault();
    const url = "http://localhost:5000/search";
    document.getElementById('matched-results').innerHTML = '';
    document.getElementById('ingredients-results').innerHTML = '';
    var searchText = document.getElementById('item-text').value.trim();
    axios.get(url, {
        params: {
            searchText: searchText
        }
    })
    .then(function(res){
        var resultList = res.data;
        var classDesignation;
        var targetSection;
        for(var i =0; i<resultList.length; i++){
            if(searchText.toLowerCase() === resultList[i].result.toLowerCase()){
                targetSection = document.getElementById('matched-results');
                classDesignation = 'matched-result';
            } else {
                targetSection = document.getElementById('ingredients-results');
                classDesignation = 'ing-result';
            }
            const resultFragment = `
                <div class="result">${resultList[i].result}</div>
                <div class="ingredients">
                    <div>${resultList[i].ing1}</div>
                    <div>${resultList[i].ing2}</div>
                    <div>${resultList[i].ing3}</div>
                    <div>${resultList[i].ing4}</div>
                    <div>${resultList[i].ing5}</div>
                </div>
            `
            var wrapper = document.createElement('div');
            wrapper.classList.add(classDesignation);
            wrapper.innerHTML = resultFragment;
            targetSection.appendChild(wrapper);
        }
    })
    .catch(function(err){
        console.error(err);
    })
}