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

if (document.monetization) {
    document.monetization.addEventListener('monetizationstart', () => {
        showExclusiveContent()
    })
}

window.addEventListener('load', () => {
    if (!document.monetization) {
        showCTA()
    } else {
        showLoading()
    }
})