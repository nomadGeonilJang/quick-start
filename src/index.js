import "normalize.css"
import styles from "./style.css"
const h1 = document.querySelector("h1");
h1.textContent = "this is working"
h1.classList.add(styles.helloworld)