export const titleAnim = (() => {
    const title = document.querySelector(".title");
    if (window.innerWidth <= 959 && window.innerWidth >= 640) {
        // Animation for Tablets
        gsap.to(title, {duration: .01, ease:'none', opacity: 0});
        gsap.to(title, {duration: .01, ease:'none', fontSize: '7em'});
        gsap.to(title, {duration: 1, ease:'none', opacity: 1, delay: .5});
        gsap.to(title, {duration: 1, ease:'ease.easeOut', fontSize: '9em', delay: .5});
        console.log('tablet');
    } else if (window.innerWidth <= 640) {
        // Animation for Phones
        gsap.to(title, {duration: .01, ease:'none', opacity: 0});
        gsap.to(title, {duration: .01, ease:'none', fontSize: '4.5em'});
        gsap.to(title, {duration: 1, ease:'none', opacity: 1, delay: .5});
        gsap.to(title, {duration: 1, ease:'ease.easeOut', fontSize: '6em', delay: .5});
        console.log('phone');
    } else if (window.innerWidth > 960) {
        // Animation for Desktop
        gsap.to(title, {duration: .01, ease:'none', opacity: 0});
        gsap.to(title, {duration: .01, ease:'none', fontSize: '10em'});
        gsap.to(title, {duration: 1, ease:'none', opacity: 1, delay: .5});
        gsap.to(title, {duration: 1, ease:'ease.easeOut', fontSize: '13em', delay: .5});
        console.log('desktop');
    }
    setTimeout(() => {
        document.querySelector(".title").removeAttribute("style");
        const itemContainer = document.querySelector("#itemContainer");
        const buttonContainer = document.createElement("a");
        buttonContainer.setAttribute("id", "buttonContainer");
        itemContainer.appendChild(buttonContainer);
        const buttonConSelector = document.querySelector("#buttonContainer");
        gsap.to(buttonConSelector, {duration: .5, ease:'ease.easeOut', marginTop: "30px"});
        gsap.to(buttonConSelector, {duration: .5, ease:'ease.easeOut', padding: "20px"});
        console.log('button container');
        setTimeout(() => {
            buttonContainer.textContent = "View Portfolio";
            buttonContainer.setAttribute("href", "#");
            buttonContainer.setAttribute("id", "proceedButton");
            gsap.to(buttonConSelector, {duration: 1, ease:'ease.easeOut', fontSize: '20px'});
            gsap.from(buttonConSelector, {duration: 1, ease:'ease.easeOut', color: '#ffffff'});
            console.log('button contents');
        }, 500);
    }, 2000);
})();