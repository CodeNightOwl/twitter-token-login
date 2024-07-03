if (document.querySelector('.discord-token-login-popup')) {
    document.querySelector('#submit').addEventListener('click', () => {
        token = document.querySelector('#token').value;

        if (token != '') {
            document.querySelector('#token').style.border = '1px solid #222428';

            chrome.tabs.executeScript(null, {
                code: `token = '${token}';`
            }, () => chrome.tabs.executeScript(null, {file: 'js/login.js'}));
        } else {
            document.querySelector('#token').style.border = '1px solid #ee4445';
        }
    })

    document.querySelector('#submit2').addEventListener('click', () => {
        token2 = document.querySelector('#token2').value;

        if (token2 != '') {
            document.querySelector('#token2').style.border = '1px solid #222428';

            chrome.tabs.executeScript(null, {
                code: `token2 = '${token2}';`
            }, () => chrome.tabs.executeScript(null, {file: 'js/getToken.js'}));
        } else {
            document.querySelector('#token2').style.border = '1px solid #ee4445';
        }
    })

}
