window.onload = function() {


    let memeSection = document.querySelector('.meme-section')
    let form_url = document.querySelector('#image_url')
    let form_topText = document.querySelector('#text_top')
    let form_bottomText = document.querySelector('#text_bottom')
    let submit = document.querySelector('button')

    submit.addEventListener('click', function() {
        createMeme();
    })

    function createMeme() {
        
        let meme = document.createElement('div');
        meme.setAttribute('class', 'meme');

        let memeTopTextDiv = document.createElement('div');
        memeTopTextDiv.setAttribute('class', 'meme-top-text')
        let memeTopText = document.createElement('h1');
        memeTopText.textContent = form_topText.value
        memeTopTextDiv.appendChild(memeTopText)

        let memeBottomTextDiv = document.createElement('div');
        memeBottomTextDiv.setAttribute('class', 'meme-bottom-text')
        let memeBottomText = document.createElement('h1');
        memeBottomText.textContent = form_bottomText.value
        memeBottomTextDiv.appendChild(memeBottomText)

        let img = document.createElement('img');
        img.setAttribute('class', 'meme-img');
        img.src = form_url.value;

        let overlay = document.createElement('div');
        overlay.setAttribute('class', 'overlay');
        let del = document.createElement('h1')
        del.textContent = 'X';
        overlay.appendChild(del);

        meme.appendChild(img);
        meme.appendChild(memeTopTextDiv);
        meme.appendChild(memeBottomTextDiv);
        meme.appendChild(overlay);

        meme.addEventListener('click', function() {
            meme.parentNode.removeChild(meme)
        });
        document.querySelector('.meme-section').appendChild(meme);

    }

    function deleteMeme() {
        meme
    }

}