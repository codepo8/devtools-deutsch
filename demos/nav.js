let urls = [
    {u:"index.html",t: "Einleitung"},
    {u:"gallery.html",t: "Bilder im Dokument"},
    {u:"image-overlay.html",t: "Originalbilder finden"},
    {u:"background-gallery.html",t: "Bilder als Hintergrund"},
    {u:"video.html",t: "Einfachere Videos"},
    {u:"review.html",t: "Fazit"}
];

let current = document.location.href.split('/').pop();
let nav = document.querySelector("nav ul");
urls.forEach(u => {
    let li = document.createElement("li");
    if (u.u !== current) {
        let a = document.createElement("a");
        a.href = u.u;
        a.textContent = u.t;
        li.appendChild(a);
    } else {
        li.classList.add('current');
        li.textContent = u.t;
    }
    nav.appendChild(li);
});
