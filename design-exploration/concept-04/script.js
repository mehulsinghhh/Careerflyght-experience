// CAREERFLYGHT — CONCEPT 04 SCRIPT

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

    // TERRITORIAL MAP NODE SELECTION
    const mapNodes = document.querySelectorAll('.map-node');
    const nodeDetailTitle = document.getElementById('nodeDetailTitle');
    const nodeDetailDesc = document.getElementById('nodeDetailDesc');

    const nodeData = {
        'STEM': { title: 'STEM & Engineering', desc: 'Applied research, systems mechanics, and mathematical innovation. Strong pathway connections to IT and Manufacturing.' },
        'IT': { title: 'Information Technology', desc: 'Software architecture, cloud infrastructure, and AI integration. Key gateway node to Finance and STEM.' },
        'FINANCE': { title: 'Finance & Capital', desc: 'Capital allocation, quantitative strategy, and enterprise risk management. Connects to Business Governance.' },
        'BIOMED': { title: 'Health & Bio Sciences', desc: 'Clinical research, biotech development, and medical devices. High synergy with STEM territories.' },
        'GOV': { title: 'Public Administration', desc: 'Policy formulation, municipal stewardship, and regulatory governance. Connects to Human Services.' },
        'BUSINESS': { title: 'Business & Governance', desc: 'Executive leadership, organizational strategy, and venture growth. Intersects with all commercial sectors.' }
    };

    mapNodes.forEach(node => {
        node.addEventListener('click', () => {
            mapNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            const key = node.getAttribute('data-node');
            if (nodeData[key]) {
                nodeDetailTitle.textContent = nodeData[key].title;
                nodeDetailDesc.textContent = nodeData[key].desc;
            }
        });
    });

    // NEEV / VEEN COMPASS CALIBRATION
    const btnNeevCompass = document.getElementById('btnNeevCompass');
    const btnVeenCompass = document.getElementById('btnVeenCompass');
    const compassNeedle = document.getElementById('compassNeedle');
    const compassStatus = document.getElementById('compassStatus');

    btnNeevCompass.addEventListener('click', () => {
        btnNeevCompass.classList.add('active');
        btnVeenCompass.classList.remove('active');
        compassNeedle.style.transform = 'rotate(0deg)';
        compassStatus.innerHTML = 'Compass Alignment: <strong>NEEV (Dead Reckoning)</strong>. Position calculated from historical Knowledge & Experience coordinates.';
    });

    btnVeenCompass.addEventListener('click', () => {
        btnVeenCompass.classList.add('active');
        btnNeevCompass.classList.remove('active');
        compassNeedle.style.transform = 'rotate(180deg)';
        compassStatus.innerHTML = 'Compass Alignment: <strong>VEEN (True North)</strong>. Trajectory aligned directly with core Values magnetic pole.';
    });
});
