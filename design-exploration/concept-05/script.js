// CAREERFLYGHT — CONCEPT 05 SCRIPT

document.addEventListener('DOMContentLoaded', () => {
    // VIEWPORT TOGGLE
    const viewDesktopBtn = document.getElementById('viewDesktop');
    const viewMobileBtn = document.getElementById('viewMobile');
    const siteWrapper = document.getElementById('siteWrapper');

    viewDesktopBtn.addEventListener('click', () => {
        viewDesktopBtn.classList.add('active');
        viewMobileBtn.classList.remove('active');
        siteWrapper.classList.remove('mobile-simulated');
    });

    viewMobileBtn.addEventListener('click', () => {
        viewMobileBtn.classList.add('active');
        viewDesktopBtn.classList.remove('active');
        siteWrapper.classList.add('mobile-simulated');
    });

    // NEEV / VEEN 3D PHYSICAL DECK RE-SHUFFLE
    const btnShuffleDeck = document.getElementById('btnShuffleDeck');
    const physicalDeck = document.getElementById('physicalDeck');
    const deckStatus = document.getElementById('deckStatus');

    let isVeen = false;

    btnShuffleDeck.addEventListener('click', () => {
        isVeen = !isVeen;
        const cards = physicalDeck.querySelectorAll('.deck-card');

        if (isVeen) {
            // VEEN Mode: Values on top
            cards[0].style.zIndex = "1"; cards[0].style.transform = "translateY(60px) scale(0.94)";
            cards[1].style.zIndex = "2"; cards[1].style.transform = "translateY(40px) scale(0.96)";
            cards[2].style.zIndex = "3"; cards[2].style.transform = "translateY(20px) scale(0.98)";
            cards[3].style.zIndex = "4"; cards[3].style.transform = "translateY(0px) scale(1.0)";

            deckStatus.innerHTML = 'Card Order: <strong>VEEN Mode</strong> — Values forms the visible top card plane, guiding Experience & Exposure.';
        } else {
            // NEEV Mode: Knowledge on top
            cards[0].style.zIndex = "4"; cards[0].style.transform = "translateY(0px) scale(1.0)";
            cards[1].style.zIndex = "3"; cards[1].style.transform = "translateY(20px) scale(0.98)";
            cards[2].style.zIndex = "2"; cards[2].style.transform = "translateY(40px) scale(0.96)";
            cards[3].style.zIndex = "1"; cards[3].style.transform = "translateY(60px) scale(0.94)";

            deckStatus.innerHTML = 'Card Order: <strong>NEEV Mode</strong> — Knowledge forms the visible top card plane.';
        }
    });
});
