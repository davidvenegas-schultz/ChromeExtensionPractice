chrome.runtime.sendMessage({name: "message"}, (response) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc0cbaa5emshce45297268dc366p19df40jsnede6838cce6b',
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
        }
    }
    
    const apiResponse = fetch('https://random-words5.p.rapidapi.com/getRandom', options)
        .then(res => res.json())
        .then(res => console.log(res))

    document.querySelector('body').innerHTML = apiResponse

})