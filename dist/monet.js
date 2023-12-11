function showExclusiveContent () {
    document.getElementById('monetization-exclusive').classList.remove('monetization--hidden')
    document.getElementById('monetization-loading').classList.add('monetization--hidden')
    document.getElementById('monetization-cta').classList.add('monetization--hidden')
}

function showCTA () {
    document.getElementById('monetization-loading').classList.add('monetization--hidden')
    document.getElementById('monetization-cta').classList.remove('monetization--hidden')
}

function showLoading () {
    document.getElementById('monetization-loading').classList.remove('monetization--hidden')
}

function addMonetizationEventListener() {
    const link = document.querySelector('link[rel="monetization"]')
    link.addEventListener('monetization', () => {
        showExclusiveContent()
    })
}

window.addEventListener('load', () => {
    const isWebMonetizationSupported = document.createElement('link').relList.supports('monetization');
    if (!isWebMonetizationSupported) {
        showCTA()
    } else {
        showLoading()
        addMonetizationEventListener()
    }
})