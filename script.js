/*
   CareerFlyght Homepage Master Script
   Enables Premium Cinematic Interaction Models
*/

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Dynamic Scroll Reveal (Intersection Observer) --- */
    const moments = document.querySelectorAll('.moment');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25 /* Trigger reveal when 25% of the section is visible */
    };

    const momentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If Section 2 is visible, transition body to dark mode colors smoothly
                if (entry.target.id === 'question') {
                    document.body.style.backgroundColor = '#151617';
                } else if (entry.target.id === 'hero') {
                    document.body.style.backgroundColor = '#FBFBFA';
                } else if (entry.target.id === 'journey') {
                    document.body.style.backgroundColor = '#F0EFEF';
                } else if (entry.target.id === 'paths') {
                    document.body.style.backgroundColor = '#FBFBFA';
                }
            }
        });
    }, observerOptions);

    moments.forEach(moment => {
        momentObserver.observe(moment);
    });

    /* --- 2. Spotlight Interaction (Candlelight Words with Multi-level Falloff) --- */
    const candleTextWords = document.querySelectorAll('.candle-text span');

    candleTextWords.forEach((word, index) => {
        word.addEventListener('mouseenter', () => {
            word.style.color = 'var(--color-chalk)';

            // Level 1 Falloff (immediate neighbors)
            const prev1 = candleTextWords[index - 1];
            const next1 = candleTextWords[index + 1];
            if (prev1) prev1.classList.add('near-spotlight');
            if (next1) next1.classList.add('near-spotlight');

            // Level 2 Falloff (outer neighbors)
            const prev2 = candleTextWords[index - 2];
            const next2 = candleTextWords[index + 2];
            if (prev2) prev2.classList.add('near-spotlight-outer');
            if (next2) next2.classList.add('near-spotlight-outer');
        });

        word.addEventListener('mouseleave', () => {
            word.style.color = '';

            candleTextWords.forEach(w => {
                w.classList.remove('near-spotlight');
                w.classList.remove('near-spotlight-outer');
            });
        });
    });

    /* --- 3. Section 3: The Journey (Bespoke Fine-Instrument Slider) --- */
    const timelineData = [
        {
            age: "AGE 18",
            state: "THE HORIZON",
            text: "Leo. Deciding direction before committing to a path. Discovering self-alignment before professional momentum.",
            imgId: "portrait-leo"
        },
        {
            age: "AGE 32",
            state: "THE TRANSITION",
            text: "Elena. Architect, navigating the transition from structured service to independent creation.",
            imgId: "portrait-elena"
        },
        {
            age: "AGE 48",
            state: "THE RE-ALIGNMENT",
            text: "Marcus. Aligning deep organizational influence with a genuine sense of personal truth and legacy.",
            imgId: "portrait-marcus"
        },
        {
            age: "AGE 60+",
            state: "THE LEGACY",
            text: "Sarah. Moving from operational leadership to mentorship, harvesting a lifetime of choices.",
            imgId: "portrait-sarah"
        }
    ];

    const slider = document.getElementById('timelineSlider');
    const portraitImages = document.querySelectorAll('.portrait');
    const metaAge = document.getElementById('meta-age');
    const metaState = document.getElementById('meta-state');
    const narrativeText = document.getElementById('narrative-text');
    const ticks = document.querySelectorAll('.tick');

    function updateTimeline(index) {
        // Validate index boundaries
        if (index < 0 || index >= timelineData.length) return;

        const data = timelineData[index];

        // Slide/fade portraits
        portraitImages.forEach(img => {
            img.classList.remove('active');
        });
        const currentImg = document.getElementById(data.imgId);
        if (currentImg) {
            currentImg.classList.add('active');
        }

        // Dissolve text cleanly using elegant transform offset
        narrativeText.style.opacity = '0';
        narrativeText.style.transform = 'translateY(10px)';

        setTimeout(() => {
            metaAge.textContent = data.age;
            metaState.textContent = data.state;
            narrativeText.textContent = data.text;
            narrativeText.style.opacity = '1';
            narrativeText.style.transform = 'translateY(0)';
        }, 300);

        // Update tick active status
        ticks.forEach((tick, tickIdx) => {
            if (tickIdx === index) {
                tick.classList.add('active');
            } else {
                tick.classList.remove('active');
            }
        });
    }

    // Connect slider inputs
    if (slider) {
        slider.addEventListener('input', (e) => {
            const index = parseInt(e.target.value);
            updateTimeline(index);
        });
    }

    // Connect tick clicks directly
    ticks.forEach(tick => {
        tick.addEventListener('click', () => {
            const index = parseInt(tick.getAttribute('data-index'));
            if (slider) {
                slider.value = index;
            }
            updateTimeline(index);
        });
    });

    /* --- 4. Section 4 Column Hover Redirection --- */
    const pathColumns = document.querySelectorAll('.path-column');
    pathColumns.forEach(col => {
        col.addEventListener('click', (e) => {
            const link = col.querySelector('.column-link');
            if (link && e.target !== link) {
                link.click();
            }
        });
    });
});
