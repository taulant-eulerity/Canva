import gsap from 'gsap'

export function animateOnSelect (className, from = {opacity: 0, y: '14px'}, to = {opacity: 1, y: 0, duration: 0.2, ease: 'ease-in'}) {
    if(!arguments.length) return;
    return gsap.timeline().fromTo('.'+className, from, to)
}