
document.querySelectorAll('.gauge').forEach(gauge => {

    const circle = gauge.querySelector('.gauge-progress');

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    gauge.dataset.circumference = circumference;
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const gauge = entry.target;
            const percent = gauge.dataset.percent;

            const circle = gauge.querySelector('.gauge-progress');
            const circumference = gauge.dataset.circumference;

            const offset =
                circumference -
                (percent / 100) * circumference;

            circle.style.strokeDashoffset = offset;

            observer.unobserve(gauge);
        }
    });

},{threshold:0.3});

document.querySelectorAll('.gauge')
        .forEach(g => observer.observe(g));


        const linearObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const el = entry.target;
            const value = el.getAttribute('data-value');

            el.style.width = value + "%";

            linearObserver.unobserve(el);
        }
    });

}, { threshold: 0.3 });

document.querySelectorAll('.slider-gauge-fill')
    .forEach(el => linearObserver.observe(el));