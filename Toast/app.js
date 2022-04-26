import Toast from "./Toast.js"

document.querySelector("button").addEventListener("click", () => {
    const toast = new Toast({
        text: "Hello",
        position: "top-right",
        autoClose: 4000,
        onClose: () => console.log("closed"),
    })
})
