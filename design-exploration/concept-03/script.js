// CAREERFLYGHT — CONCEPT 03 SCRIPT

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

    // AUDIO PLAYER SIMULATION
    const audioPlayBtn = document.getElementById('audioPlayBtn');
    let isPlaying = false;

    audioPlayBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            audioPlayBtn.innerHTML = '❚❚ Pause Oral History (Playing...)';
            audioPlayBtn.style.background = '#fff';
        } else {
            audioPlayBtn.innerHTML = '▶ Listen to Oral History (3:42)';
            audioPlayBtn.style.background = 'var(--color-accent)';
        }
    });

    // NEEV / VEEN LIFELINE CURRENTS TOGGLE
    const btnBuilderArc = document.getElementById('btnBuilderArc');
    const btnVisionaryArc = document.getElementById('btnVisionaryArc');
    const currentsStack = document.getElementById('currentsStack');
    const narrativeStatus = document.getElementById('narrativeStatus');

    btnBuilderArc.addEventListener('click', () => {
        btnBuilderArc.classList.add('active');
        btnVisionaryArc.classList.remove('active');
        narrativeStatus.innerHTML = 'Current Arc: <strong>The Builder\'s Arc (NEEV)</strong> — Accumulating capability from foundational Knowledge upward to personal Values.';

        // Reset stack order
        currentsStack.children[0].style.order = "1";
        currentsStack.children[1].style.order = "2";
        currentsStack.children[2].style.order = "3";
        currentsStack.children[3].style.order = "4";
    });

    btnVisionaryArc.addEventListener('click', () => {
        btnVisionaryArc.classList.add('active');
        btnBuilderArc.classList.remove('active');
        narrativeStatus.innerHTML = 'Current Arc: <strong>The Visionary\'s Arc (VEEN)</strong> — Reorienting direction starting from deep Values alignment down through Exposure and Experience.';

        // Reverse stack order
        currentsStack.children[0].style.order = "4";
        currentsStack.children[1].style.order = "3";
        currentsStack.children[2].style.order = "2";
        currentsStack.children[3].style.order = "1";
    });
});
