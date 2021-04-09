import "normalize.css"
import styles from "./style.css"
import $ from "jquery"
import image from "./assets/logo192.png"
import svg from "./assets/test.svg"

const h1 = document.querySelector("h1");
h1.textContent = "this is workiasdasdasng";
h1.classList.add(styles.helloworld)

console.log($(`.${styles.helloworld}`))
console.log("hello worlsssd")


console.log($(`.${styles.helloworld}`).length)

console.log(IS_PRODUCTION)

const img = document.createElement('img');
img.src = svg

h1.insertAdjacentElement("beforebegin", img)
