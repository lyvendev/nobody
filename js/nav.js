// Inject navbar and highlight active link
function renderNav(activePage) {
    const links = [
        { label: 'Accueil',     href: 'index.html' },
        { label: 'Commandes',   href: 'commandes.html' },
        { label: 'Équipe',      href: 'equipe.html' },
        { label: 'Partenaires', href: 'partenaires.html' },
        { label: 'Légal',       href: 'legal.html' },
    ];

    const linksHtml = links.map(l => `
        <a href="${l.href}" class="hover:text-nobody transition font-bold text-[10px] uppercase tracking-widest ${activePage === l.href ? 'text-nobody' : 'text-slate-400'}">${l.label}</a>
    `).join('');

    document.getElementById('navbar-placeholder').innerHTML = `
    <nav class="fixed w-full z-50 glass border-b border-slate-100" style="background:rgba(255,255,255,0.85);backdrop-filter:blur(12px);">
        <div class="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2">
                <img src="https://i.postimg.cc/cJcdbn7C/Nobody-V2.png" alt="Logo" class="w-8 h-8 rounded-md">
                <span class="text-lg font-bold tracking-tighter uppercase text-nobody">Nobody</span>
            </a>
            <div class="hidden md:flex gap-8 items-center">
                ${linksHtml}
                <a href="https://nobody.manage-bot.fr" target="_blank"
                   class="bg-nobody text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition font-bold text-[10px] uppercase tracking-widest">
                    Dashboard
                </a>
            </div>
        </div>
    </nav>`;
}

function renderFooter() {
    document.getElementById('footer-placeholder').innerHTML = `
    <footer class="py-12 border-t border-slate-50 text-center">
        <div class="flex justify-center gap-8 mb-4 text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">
            <a href="legal.html" class="hover:text-nobody transition">CGU</a>
            <a href="legal.html#privacy" class="hover:text-nobody transition">Confidentialité</a>
            <a href="legal.html#terms" class="hover:text-nobody transition">Conditions</a>
        </div>
        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">© 2026 Nobody Bot • Développé par Lyven</p>
    </footer>`;
}
