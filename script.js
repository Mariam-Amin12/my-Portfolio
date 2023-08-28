const el = document.querySelector(".nav-bar")
const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
);


observer.observe(el);
const all = document.querySelector("#project-button-1");
const oop = document.querySelector("#project-button-2");
const web = document.querySelector("#project-button-3");
const robotics = document.querySelector("#project-button-4");
const logic = document.querySelector("#project-button-5");
const dsa = document.querySelector("#project-button-6");
const mobile = document.querySelector("#project-button-7");
const projectsArr = document.querySelectorAll("#project-item");


const displayOop = () => {
    for (const project of projectsArr) {
        project.style.display = 'none';
    }
    projectsArr[0].style.display = 'block';
    console.log("test");

}
const display = (x) => {
    for (const project of projectsArr) {
        project.style.display = 'none';
    };
    all.classList.remove("yellow-line");
    web.classList.remove("yellow-line");
    oop.classList.remove("yellow-line");
    dsa.classList.remove("yellow-line");
    logic.classList.remove("yellow-line");
    robotics.classList.remove("yellow-line");
    mobile.classList.remove("yellow-line");
    if (x === -1) {
        for (const project of projectsArr) {
            project.style.display = 'block';
        };
        all.classList.add("yellow-line");
    }
    else if (x === 0) {
        projectsArr[0].style.display = 'block';
        oop.classList.add("yellow-line");
    }
    else if (x === 1) {
        projectsArr[2].style.display = 'block';
        web.classList.add("yellow-line");
    }
    else if (x === 2) {
        projectsArr[3].style.display = 'block';
        projectsArr[4].style.display = 'block';
        robotics.classList.add("yellow-line");
    }
    else if (x === 3) {
        projectsArr[7].style.display = 'block';
        projectsArr[8].style.display = 'block';
        logic.classList.add("yellow-line");
    }
    else if (x === 4) {
        projectsArr[1].style.display = 'block';
        dsa.classList.add("yellow-line");
    }

    else if (x === 5) {
        projectsArr[5].style.display = 'block';
        projectsArr[6].style.display = 'block';
        mobile.classList.add("yellow-line");
    }

}
all.addEventListener("click", () => display(-1));
oop.addEventListener("click", () => display(0));
web.addEventListener("click", () => display(1));
robotics.addEventListener("click", () => display(2));
logic.addEventListener("click", () => display(3));
dsa.addEventListener("click", () => display(4));
mobile.addEventListener("click", () => display(5));





const Home = document.querySelector(".Home");
const About = document.querySelector(".About");
const Certification = document.querySelector(".Certifi");
const Projects = document.querySelector(".Project");
const Contact = document.querySelector(".Contact");
const navbuttons = document.querySelectorAll(".button")

// console.log(navbuttons);
const addyellowline = (x) => {
    for (const button of navbuttons) {
        button.classList.remove("yellow-line2");
    }
    if (x == 1) {
        Home.classList.add("yellow-line2");

    }
    else if (x == 2) {
        About.classList.add("yellow-line2");
    }
    else if (x == 3) {
        Certification.classList.add("yellow-line2");
    }
    else if (x == 4) {
        Projects.classList.add("yellow-line2");
    }
    else {
        Contact.classList.add("yellow-line2");
    }
}
Home.addEventListener(("click"), () => addyellowline(1));
About.addEventListener(("click"), () => addyellowline(2));
Certification.addEventListener(("click"), () => addyellowline(3));
Projects.addEventListener(("click"), () => addyellowline(4));
Contact.addEventListener(("click"), () => addyellowline(5));


const isView = (section) => {
    const rect = section.getBoundingClientRect();
    return (
        rect.top >= window.innerHeight - 1700 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );

}

window.addEventListener(('scroll'), () => {
    const sectionarr = document.querySelectorAll('.page-Section')

    sectionarr.forEach((ele, ind) => {
        if (isView(ele))
            addyellowline(ind + 1);
        console.log(isView(ele));

    })


})
const switchbutton = document.querySelector('.slider');







/*switchbutton.addEventListener("click", () => {
    console.log('clicked');
    const style = document.documentElement.style;
    if (style.getPropertyValue('--background') === '#ffffff') {
        console.log('if');
        style.setProperty('--background', '#000000');
        style.setProperty('--font', '#ffffff');
        style.setProperty('--shadow', '#fff200');
        style.setProperty('--nav-background', "#FFB800");
        style.setProperty('--line', "#ffffff");
        style.setProperty('--switch', "#FFB800");


    } else {
        console.log('if2')
        style.setProperty('--background', '#ffffff');
        style.setProperty('--font', '#000000');
        style.setProperty('--shadow', '#FFB800');
        style.setProperty('--nav-background', "#cbcbcb80");
        style.setProperty('--line', "#FFB800");
        style.setProperty('--switch', "#000000");

    }

}
) */
switchbutton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})


const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    // event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('textarea').value;
    const body = `Name: ${name}
    \n Email: ${email}
    \n Message: ${message}`;
    window.location.href = `mailto:Mariam.Amin.Amin2003@gmail.com?subject=New message&body=${body}`;

});

