import { windowRescale } from "./_utils/windowRescale.js";
import { titleAnim } from "./anim/title.js";

console.log("Welcome to my portfolio!");

const button = document.querySelector("#proceedButton");

button.addEventListener("mouseover", () => {
    gsap.to(button, {duration: .3, ease:"ease.easeOut", opacity: .7});
});

button.addEventListener("mouseout", () => {
    gsap.to(button, {duration: .3, ease:"ease.easeOut", opacity: 1});
});