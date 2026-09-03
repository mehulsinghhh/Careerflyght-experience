// CAREERFLYGHT — CONCEPT 02 SCRIPT

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

    // TAXONOMY MATRIX HOVER DIAGNOSTICS
    const taxCells = document.querySelectorAll('.tax-cell');
    const taxPreviewText = document.getElementById('taxPreviewText');

    const sectorStats = {
        'SEC_01': 'Agriculture & Resources // Transferability Index: 84% // High demand for sustainability leadership.',
        'SEC_02': 'Architecture & Construction // Transferability Index: 91% // Structural project management integration.',
        'SEC_03': 'Arts & Media // Transferability Index: 78% // High value in brand communications & narrative design.',
        'SEC_04': 'Business Admin // Transferability Index: 96% // Core executive governance capability.',
        'SEC_05': 'Education & Training // Transferability Index: 88% // Institutional knowledge transfer & mentorship.',
        'SEC_06': 'Finance // Transferability Index: 94% // Capital allocation & quantitative strategy mastery.',
        'SEC_07': 'Government & Public Admin // Transferability Index: 82% // Regulatory navigation & public policy stewardship.',
        'SEC_08': 'Health Science // Transferability Index: 90% // Clinical governance & health informatics precision.',
        'SEC_09': 'Hospitality & Tourism // Transferability Index: 75% // Service design & customer experience management.',
        'SEC_10': 'Human Services // Transferability Index: 86% // Social impact & organizational psychology.',
        'SEC_11': 'Information Technology // Transferability Index: 98% // Systems architecture & digital transformation.',
        'SEC_12': 'Manufacturing // Transferability Index: 89% // Industrial automation & supply chain orchestration.',
        'SEC_13': 'Marketing & Sales // Transferability Index: 93% // Revenue engine acceleration & market strategy.',
        'SEC_14': 'STEM // Transferability Index: 97% // Analytical research & advanced mechanics engineering.'
    };

    taxCells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            const code = cell.getAttribute('data-code');
            if (sectorStats[code]) {
                taxPreviewText.innerHTML = `<strong>${code}:</strong> ${sectorStats[code]}`;
            }
        });
    });

    // NEEV / VEEN VECTOR MATRIX TENSOR TOGGLE
    const btnNeevVector = document.getElementById('btnNeevVector');
    const btnVeenVector = document.getElementById('btnVeenVector');
    const quadrantMatrix = document.getElementById('quadrantMatrix');
    const vectorStatus = document.getElementById('vectorStatus');

    btnNeevVector.addEventListener('click', () => {
        btnNeevVector.classList.add('active');
        btnVeenVector.classList.remove('active');
        vectorStatus.innerHTML = 'ACTIVE TENSOR FLOW: <strong>Knowledge → Experience → Exposure → Values</strong>. Conventional skill accumulation vector.';
    });

    btnVeenVector.addEventListener('click', () => {
        btnVeenVector.classList.add('active');
        btnNeevVector.classList.remove('active');
        vectorStatus.innerHTML = 'ACTIVE TENSOR FLOW: <strong>Values → Exposure → Experience → Knowledge</strong>. Inverse alignment vector starting from core personal purpose.';
    });
});
