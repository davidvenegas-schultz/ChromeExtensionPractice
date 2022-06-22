window.onload = () => {
    let mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((m) => {
            console.log("MUTATION: " + JSON.stringify(m))
            if(m.target && m.target.innerText && m.target.innerText == "Skip Ads") {
                m.target.click()
                console.log('Ad skipped.')
            }
        })
    })

    mutationObserver.observe(document.body, {attributes: true, subtree: true, childList: true, characterData: true})
}

alert("Hello world")