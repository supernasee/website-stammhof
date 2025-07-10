window.addEventListener('DOMContentLoaded', () => {
    if (window.scrollY > 10) {
        document.getElementById("navbar").classList.remove("scroll")
    }

    const titles = document.querySelectorAll(".fade-in");
    titles.forEach(title => {
        setTimeout(() => {
            title.classList.add("opacity-100");
        }, 500);
    })

    const observer = new IntersectionObserver(async (entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                await new Promise(r => setTimeout(r, 300));
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