(() => {
    const KEY = 'HQSV0hPnEratr_s7jnNoZ16wx1fNK5wFsNLk8fOA0G4';
    let page = 1;
    const loaderElem = document.querySelector('.loader');
    function showLoader(){
        loaderElem.classList.add('visible');
    }
    function hideLoader(){
        loaderElem.classList.remove('visible');
    }
    async function displayImages(){
        showLoader();
        const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`);
        const images = await result.json();
        const galleryElem = document.querySelector('.gallery');

        console.log(images);
        images.forEach(image => {
            const imgElem = document.createElement('img');
            imgElem.src = image.urls.small;
            galleryElem.appendChild(imgElem);
        });
        hideLoader();
        page += 1;
    }
    function onScroll(){
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
        if(scrollTop + clientHeight >= scrollHeight - 10){
            displayImages();
        }
    }
    function run(){
        document.addEventListener('scroll', onScroll)
        displayImages();
    }
    run();
})();