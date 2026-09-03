// CAREERFLYGHT — CONCEPT 01 SCRIPT

document.addEventListener('DOMContentLoaded', () => {
    // VIEWPORT TOGGLE (Prototype inspection feature)
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

    // EXPANDABLE MONOLITHIC ROWS (CAREER CLUSTERS)
    const monolithRows = document.querySelectorAll('.monolith-row');
    monolithRows.forEach(row => {
        row.addEventListener('click', () => {
            const isOpen = row.classList.contains('open');
            // Close other open rows for clean gallery feel
            monolithRows.forEach(r => r.classList.remove('open'));
            if (!isOpen) {
                row.classList.add('open');
            }
        });
    });

    // NEEV / VEEN PERSPECTIVE TOGGLE
    const btnNeev = document.getElementById('btnNeev');
    const btnVeen = document.getElementById('btnVeen');
    const pillarsContainer = document.getElementById('pillarsContainer');
    const neevStatusText = document.getElementById('neevStatusText');

    btnNeev.addEventListener('click', () => {
        btnNeev.classList.add('active');
        btnVeen.classList.remove('active');
        pillarsContainer.classList.remove('veen-mode');
        neevStatusText.innerHTML = 'Active Paradigm: <strong>NEEV</strong> — Building upward from technical Knowledge to personal Values alignment.';
    });

    btnVeen.addEventListener('click', () => {
        btnVeen.classList.add('active');
        btnNeev.classList.remove('active');
        pillarsContainer.classList.add('veen-mode');
        neevStatusText.innerHTML = 'Active Paradigm: <strong>VEEN</strong> — Orienting downward from guiding Values through Exposure and Experience to targeted Knowledge acquisition.';
    });
});
