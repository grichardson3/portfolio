export const windowRescale = (() => {
    document.querySelector("#splash").style.height = (window.innerHeight) + "px";
    window.addEventListener('resize', () => {
        document.querySelector("#splash").style.height = (window.innerHeight) + "px";
    });
})();