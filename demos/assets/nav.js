let allurls = {
    "console": [
            {u:"scripts.html",t: "Eigene Skripte erstellen"},
    ],
    "network": [
            {u:"gallery.html",t: "Bilder im Dokument"},
            {u:"background-gallery.html",t: "Bilder als Hintergrund"},
            {u:"video.html",t: "Einfachere Videos"}
    ],
    "cookies": [
        {u:"cookie-demo.html",t: "Cookie Demo"}
    ],
    "issues": [
        {u:"page-with-errors.html",t: "Fehlerhafte Seite"},
    ],
    "elements": [
        {u:"elements.html",t: "Elemente verändern"},
        {u:"deleting-elements.html",t: "Elemente löschen"},
        {u:"overlay.html",t: "Blockierte Seite"},
        {u:"timed-button.html",t: "Blockierter Knopf"},
        {u:"style-changes.html",t: "Anzeige ändern"}
    ],
    "inspector": [
        {u:"inspector-demo.html",t: "Kurzinformationen"},
        {u:"context-menu-blocker.html",t: "Blockierter Rechts-Klick"},
        {u:"redirect.html",t: "Weiterleitung"},
        {u:"elements-without-space.html",t: "Seitenelemente ohne viel Piatz"}
    ],
    "screenshots": [
        {u:"long-page.html",t: "Lange Seite"}
    ],
    "simulation": [
        {u:"mobile-version.html",t: "Bildergallerie"},
        {u:"simpler-mobile-video.html",t: "Videos auf Mobilgeräten"}
    ]
};


let current = document.location.href.split('/').pop();
let chunks = document.location.href.split('/');
let urls = [];
urls.push({u:"index.html",t: "Einleitung"});
urls = urls.concat(allurls[chunks[chunks.length-2]]);
urls.push({u:"review.html",t: "Fazit"});
urls.push({u:"../index.html",t: `<svg width="1.3em" height="1.3em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"/>
</svg>`});
let secondaryurls = allurls[chunks[chunks.length-2]];

let nav = document.querySelector("nav ul");
urls.forEach(u => {
    let li = document.createElement("li");
    if (u.u !== current) {
        let a = document.createElement("a");
        a.href = u.u;
        a.innerHTML = u.t;
        li.appendChild(a);
    } else {
        li.classList.add('current');
        li.textContent = u.t;
    }
    nav.appendChild(li);
});
// let secondary = document.querySelector("#secondary");
// let out = '<ul>';
// secondaryurls.forEach(u => {
//     out += `<li><a href="${u.u}">${u.t}</a></li>`;
// });
// out += '</ul>';
// secondary.innerHTML = out;

let demourl = document.querySelector(".demourl a");
if (demourl) {
    let url = 'codepo8.github.io/devtools-deutsch/demos';
    let addon = demourl.innerText.split('/');
    addon = addon[addon.length-2];
    demourl.innerText = url + '/' + addon + '/';
    demourl.href = 'https://'+url+'/' + addon;
}