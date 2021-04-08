import "normalize.css"
import styles from "./style.css"
import $ from "jquery"
const h1 = document.querySelector("h1");
h1.textContent = "this is workiasdasdasng";
h1.classList.add(styles.helloworld)

console.log($(`.${styles.helloworld}`))
console.log("hello worlsssd")


console.log($(`.${styles.helloworld}`).length)

console.log(IS_PRODUCTION)