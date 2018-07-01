const pulse = () => {
    const span = document.querySelector(".pulse-anim");
    if (span.className === "pulse-anim pulse-anim-1") {
        span.className = "pulse-anim pulse-anim-2";
    } else {
        span.className = "pulse-anim pulse-anim-1";
    }
}

export default pulse;
        