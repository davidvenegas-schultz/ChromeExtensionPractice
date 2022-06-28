console.log("STARTING")

function mainFunction() {
    // console.log("CONTINUING")
    // document.getElementById('newtab7') && document.getElementById('newtab7').click()
    // console.log('Got \'em.')
    var scriptNode = document.createElement('script')
    scriptNode.textContent = 'changeIframe();'
    document.body.appendChild(scriptNode)
}

mainFunction()

console.log("END")