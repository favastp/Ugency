document.addEventListener("DOMContentLoaded", (event) => {
    
    // 1. Preloader logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 800);
        }, 1500); // Wait 1.5 seconds before hiding
    }

    // 2. Initialize Ultra-Premium Lenis Smooth Scrolling
    const lenis = new Lenis({
        lerp: 0.05, // Ultra smooth, heavy inertia
        wheelMultiplier: 0.8, // Slightly slower for a more cinematic feel
        smoothWheel: true,
        smoothTouch: true, // Bring premium scrolling to mobile/touch
        touchMultiplier: 1.5,
        gestureDirection: 'vertical',
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // 5. Mobile Menu Toggle (Zynexs Style Drawer)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            // Toggle toggle button state
            mobileBtn.classList.toggle('open');
            // Toggle drawer state
            mobileMenu.classList.toggle('closed');
        });

        // Close on link click
        const mobileLinks = document.querySelectorAll('.mobile-drawer-link, .mobile-drawer-cta');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('open');
                mobileMenu.classList.add('closed');
            });
        });
    }

    // 4. Desgro Media Style Hero Animation
    const heroTextContainer = document.getElementById('hero-text-container');
    const floatingLogos = document.querySelectorAll('.floating-logo');
    const heroSection = document.getElementById('hero-section');

    if (heroTextContainer && floatingLogos.length > 0) {
        // Initial Fade-in Sequence
        const heroTl = gsap.timeline();
        
        // Set initial state for ultra-premium blur reveal
        gsap.set(heroSection, { filter: "blur(30px)", scale: 1.05 });

        // Ensure nav appears properly (wait for preloader)
        setTimeout(() => {
            // Full section focuses into view
            heroTl.to(heroSection, { filter: "blur(0px)", scale: 1, duration: 2.5, ease: "power3.inOut" }, 0)
                  .to(".gs-nav", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.5)
                  .to(heroTextContainer, { opacity: 1, duration: 0.1 }, 0) // Ensure visible
                  .fromTo(".hero-char", 
                      { y: "150%", rotationX: -90, opacity: 0, filter: "blur(20px)" }, 
                      { y: "0%", rotationX: 0, opacity: 1, filter: "blur(0px)", duration: 2.5, ease: "expo.out", stagger: 0.15 }, 
                      0.2
                  );
            
            // Continuous Breathing 3D Effect (Container)
            const breathingContainer = document.getElementById('hero-breathing-container');
            if (breathingContainer) {
                gsap.to(breathingContainer, {
                    rotationX: 4,
                    rotationY: -4,
                    z: 50,
                    duration: 5,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1
                });
            }
            
            // Liquid Floating Effect (Individual Characters)
            gsap.utils.toArray('.hero-char').forEach((char, i) => {
                gsap.to(char, {
                    y: "-=12",
                    rotationZ: i % 2 === 0 ? 2 : -2,
                    duration: 3 + (i * 0.2),
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    delay: 2 // Start after entrance sequence
                });
            });
            
            floatingLogos.forEach((logo, index) => {
                const rotateVal = logo.getAttribute('data-rotate') || 0;
                heroTl.fromTo(logo,
                    { opacity: 0, scale: 0, rotation: 0 },
                    { opacity: parseFloat(getComputedStyle(logo).opacity), scale: 1, rotation: rotateVal, duration: 1.5, ease: "back.out(1.5)" },
                    0.8 + (index * 0.2)
                );
            });
            
            heroTl.to(".gs-bottom-text", { opacity: 1, duration: 1 }, 1.8)
                  .fromTo(".hero-subtext", 
                      { y: 30, opacity: 0, filter: "blur(5px)" },
                      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }, 1.2
                  )
                  .fromTo(".hero-cta", 
                      { scale: 0.8, opacity: 0 },
                      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }, 1.6
                  );
        }, 1500);

        // Subtle continuous floating & rotation
        floatingLogos.forEach((logo, index) => {
            gsap.to(logo, {
                y: "+=20",
                rotation: "+=5",
                duration: 2 + index,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        });

        // Mouse Parallax Effect on Hero (Advanced 3D)
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                // Calculate normalized mouse coordinates (-1 to 1)
                const x = (e.clientX / window.innerWidth) * 2 - 1;
                const y = (e.clientY / window.innerHeight) * 2 - 1;

                // Tilt the main container for 3D depth
                gsap.to(heroTextContainer, {
                    rotationY: x * 15, // max 15 degrees tilt
                    rotationX: -y * 15,
                    x: -x * 20,
                    y: -y * 20,
                    duration: 1,
                    ease: "power2.out"
                });

                // Move logos deeply in 3D space
                floatingLogos.forEach(logo => {
                    const speed = logo.getAttribute('data-speed') || 0.05;
                    const zDepth = logo.getAttribute('data-z') || 0;
                    
                    gsap.to(logo, {
                        x: -x * (speed * 1500),
                        y: -y * (speed * 1500),
                        z: zDepth, // maintain extreme depth
                        rotationY: x * 20,
                        rotationX: -y * 20,
                        duration: 1.5,
                        ease: "power2.out"
                    });
                });
            });
            
            // Reset on mouse leave
            heroSection.addEventListener('mouseleave', () => {
                gsap.to(heroTextContainer, { rotationY: 0, rotationX: 0, x: 0, y: 0, duration: 1.5, ease: "power2.out" });
                floatingLogos.forEach(logo => {
                    gsap.to(logo, { x: 0, y: 0, rotationY: 0, rotationX: 0, duration: 1.5, ease: "power2.out" });
                });
            });
        }
    } else {
        // Subpage Nav Entrance Animation
        // If not homepage, animate nav immediately without preloader wait
        gsap.to(".gs-nav", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 });
    }

    // 5. Magnetic Hover Effect
    const magnetContainers = document.querySelectorAll('.magnet-container');
    magnetContainers.forEach(container => {
        const strength = container.getAttribute('data-magnet-strength') || 3;
        const padding = container.getAttribute('data-magnet-padding') || 150;
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            
            if (Math.abs(distanceX) < rect.width/2 + parseInt(padding) && Math.abs(distanceY) < rect.height/2 + parseInt(padding)) {
                container.style.transition = 'transform 0.3s ease-out';
                container.style.transform = `translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0)`;
            }
        });

        container.addEventListener('mouseleave', () => {
            container.style.transition = 'transform 0.6s ease-in-out';
            container.style.transform = 'translate3d(0px, 0px, 0)';
        });
    });

    // 6. Marquee Section Setup (For Clients)
    const clientTexts = ["JANSHA", "BERGAN", "VPK", "PAPPERKRAFT", "ELVO", "HILSAL", "HANGER", "DNOX", "QALAMILE MASHI"];
    const row1El = document.querySelector('.marquee-row-1');
    const row2El = document.querySelector('.marquee-row-2');
    
    if (row1El && row2El) {
        let html = '';
        for (let i = 0; i < 4; i++) {
            clientTexts.forEach(client => {
                html += `<div class="px-6 md:px-8 py-3 md:py-4 rounded-full border border-gray-800 text-lg md:text-2xl font-black text-gray-500 uppercase shrink-0">${client}</div>`;
            });
        }
        row1El.innerHTML = html;
        row2El.innerHTML = html;

        const marqueeSection = row1El.parentElement;
        window.addEventListener('scroll', () => {
            const sectionTop = marqueeSection.offsetTop;
            const scrollY = window.scrollY;
            const offset = (scrollY - sectionTop + window.innerHeight) * 0.3;
            
            row1El.style.transform = `translate3d(${offset - 200}px, 0, 0)`;
            row2El.style.transform = `translate3d(${-(offset - 200)}px, 0, 0)`;
        }, { passive: true });
        
        window.dispatchEvent(new Event('scroll'));
    }

    // 7. Scroll Reveal Elements (Fade-in objects)
    const fadeEls = document.querySelectorAll('.fade-in-obj');
    fadeEls.forEach(el => {
        const delay = el.getAttribute('data-delay') || 0;
        const x = el.getAttribute('data-x') || 0;
        const y = el.getAttribute('data-y') || 0;
        
        gsap.set(el, { x: parseInt(x), y: parseInt(y), opacity: 0 });
        
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
            },
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: parseFloat(delay),
            ease: "power2.out"
        });
    });

    // 8. Character-by-Character Scroll Reveal for Intro Text
    const animatedText = document.getElementById('animated-text');
    if (animatedText) {
        const text = animatedText.innerText;
        animatedText.innerHTML = '';
        
        text.split('').forEach(char => {
            if (char === ' ') {
                animatedText.innerHTML += `<span>&nbsp;</span>`;
            } else {
                animatedText.innerHTML += `<span class="char-reveal">${char}</span>`;
            }
        });

        const chars = animatedText.querySelectorAll('.char-reveal');
        
        gsap.to(chars, {
            scrollTrigger: {
                trigger: animatedText,
                start: "top 80%",
                end: "bottom 30%",
                scrub: 0.5,
            },
            opacity: 1,
            stagger: 0.1,
            ease: "none"
        });
    }

    // 9. Services Staggered Reveal
    const serviceItems = document.querySelectorAll('.service-item');
    if (serviceItems.length > 0) {
        serviceItems.forEach((item, index) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item.parentElement,
                    start: "top 80%",
                },
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: index * 0.1,
                ease: "power2.out"
            });
        });
    }

    // 10. Sticky Stacking Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
        const totalCards = projectCards.length;
        projectCards.forEach((card, index) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: `top ${96 + (index * 28)}px`,
                    endTrigger: ".project-card:last-child",
                    end: "bottom center",
                    scrub: true,
                },
                scale: 1 - ((totalCards - 1 - index) * 0.03),
                transformOrigin: "top center",
                ease: "none"
            });
        });
    }



    // 12. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-button');
        if (button) {
            button.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't already open
                if (!isActive) {
                    item.classList.add('active');
                }
                
                // Refresh ScrollTrigger since layout shifted
                setTimeout(() => {
                    if (typeof ScrollTrigger !== 'undefined') {
                        ScrollTrigger.refresh();
                    }
                }, 500); // Wait for CSS transition (500ms) to complete
            });
        }
    });

    // 13. Tubelight Nav Lamp Logic (Zynexs replica)
    const tubelightNav = document.querySelector('.tubelight-nav-inner');
    const tubelightLamp = document.querySelector('.tubelight-lamp');
    const tubelightItems = document.querySelectorAll('.tubelight-item');

    if (tubelightNav && tubelightLamp && tubelightItems.length > 0) {
        let activeItem = document.querySelector('.tubelight-item.active');
        
        const updateLamp = (item) => {
            if (!item) {
                tubelightLamp.style.setProperty('--lamp-opacity', '0');
                return;
            }
            const navRect = tubelightNav.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();
            
            // Calculate relative offset considering border/padding
            const offsetLeft = itemRect.left - navRect.left;
            
            tubelightLamp.style.setProperty('--lamp-width', `${itemRect.width}px`);
            tubelightLamp.style.setProperty('--lamp-x', `${offsetLeft}px`);
            tubelightLamp.style.setProperty('--lamp-opacity', '1');
        };

        // Initialize with active item
        if (activeItem) {
            // Delay to ensure layout is fully calculated
            setTimeout(() => updateLamp(activeItem), 150);
            window.addEventListener('resize', () => updateLamp(activeItem));
        }

        tubelightItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                updateLamp(item);
            });
        });

        tubelightNav.addEventListener('mouseleave', () => {
            updateLamp(activeItem);
        });
    }

    // 14. Global Text Blur Reveal Effect (Entire Site)
    const allTextElements = gsap.utils.toArray('h1, h2, h3, h4, h5, p, li, span.blur-reveal-target');
    
    allTextElements.forEach(el => {
        // Skip elements that already have complex entrance animations to avoid conflicts
        if (
            el.closest('#hero-section') || 
            el.closest('#preloader') || 
            el.closest('.gs-nav') || 
            el.closest('footer') ||
            el.classList.contains('fade-in-obj') || 
            el.classList.contains('char-reveal') ||
            el.classList.contains('hero-char')
        ) {
            return;
        }

        gsap.fromTo(el, 
            { opacity: 0, filter: "blur(12px)", y: 25 },
            {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                opacity: 1, 
                filter: "blur(0px)",
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            }
        );
    });
});
