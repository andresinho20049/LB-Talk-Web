document.addEventListener("DOMContentLoaded", function (e) {

    if(document.location.pathname !== '/talks'){
        document.location.assign('/talks');
        return;
    }

    const clickAccessInterval = setInterval(() => {

        const vwAccessBtn = document.querySelector('[vw-access-button]');
        console.log('vwAccess', vwAccessBtn);
        if (!!vwAccessBtn) {
            vwAccessBtn?.click();
            console.log("VwAccess entrou if");
            clearInterval(clickAccessInterval);
        }
    }, 1000)

    const intervalCustom = setInterval(() => {
        customPlayer();

        const vpwControls = document.getElementsByClassName('vpw-controls')[0]
        console.log('DivGame', vpwControls);
        if (!!vpwControls) {
            console.log("Chamou stop interval");
            clearInterval(intervalCustom);

            const isPortrait = window.matchMedia('(orientation: portrait)').matches;
            
            var divLb = document.getElementById('div-vlibras');
            divLb.style.right = isPortrait ? '20%' : '40%';
            divLb.style.top = '44%';
        }

    }, 2500);

});

function customPlayer() {
    var divVlibras = document.getElementById('div-vlibras');

    var divWrapper = divVlibras.querySelector('[vw-access-button]');
    divWrapper.style.display = 'none';

    var divWrapper = divVlibras.querySelector('[vw-plugin-wrapper]');
    divWrapper.style.background = 'rgba(235, 235, 235, 0)';

    var divVp = divWrapper.querySelector('[vp]');

    var divVpBox = divVp.querySelector('[vp-box]');
    divVpBox.style.display = 'none';

    var divSuggestion = divVp.querySelector('[vp-suggestion-button]');
    divSuggestion.style.display = 'none';

    var divControlls = divVp.querySelector('[vp-controls]');
    divControlls.style.display = 'none';
}