window.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById("title");
    setTimeout(() => {
        title.classList.add("opacity-100");
        title.classList.remove("opacity-0");
    }, 400);

    const observer = new IntersectionObserver(async (entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                await new Promise(r => setTimeout(r, 200));
                entry.target.classList.add('show');
            }
        }
    });

    const hiddenElements = document.querySelectorAll('.scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    window.addEventListener(
        "scroll",
        () => {
            document.body.style.setProperty(
                "--scroll",
                window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
            );
        },
        false
    );
});