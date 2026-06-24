// =========================
// STARS
// =========================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for(let i=0;i<400;i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*2,
        speed:Math.random()*0.4

    });
}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "white";

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI*2
        );

        ctx.fill();

        star.y += star.speed;

        if(star.y > canvas.height){

            star.y = 0;
        }
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// =========================
// SHOOTING STARS
// =========================

function createShootingStar(){

    const star =
    document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top =
    Math.random()*250 + "px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);
}

setInterval(
    createShootingStar,
    3500
);

// =========================
// BUTTON
// =========================

const flash =
document.getElementById("flash");
function showSection(sectionClass){

    flash.style.transition = "0.8s";

    flash.style.opacity = "1";

    setTimeout(()=>{

        flash.style.opacity = "0";

    },800);

    setTimeout(()=>{

        const section =
        document.querySelector(sectionClass);

        section.style.display = "flex";

        section.scrollIntoView({
            behavior:"smooth"
        });

    },1200);

}

document
.querySelector(".moon")
.addEventListener("click",()=>{

    flash.style.transition="0.8s";

    flash.style.opacity="1";

    setTimeout(()=>{

        flash.style.opacity="0";

    },800);

    setTimeout(()=>{

        document
        .querySelector(".next-section")
        .style.display = "flex";

        document
        .querySelector(".next-section")
        .scrollIntoView({
            behavior:"smooth"
        });

    },1200);

});


// =========================
// MEMORY GALAXY
// =========================

const memories = {

    1:{
        title:"🌱 The Beginning",
        text:"I will always remember the first time we talked. Neither of us knew how important that conversation would become."
    },

    2:{
        title:"✨ Endless Conversations",
        text:"The day we talked endlessly about each other. Hours passed, but somehow it still didn't feel enough."
    },

    3:{
        title:"🤝 Our First Promise",
        text:"The day we agreed to hold each other's hands. It felt simple, but it meant everything."
    },

    4:{
        title:"🎂 Your Birthday Hug",
        text:"The day I hugged you for the first time on your birthday. One moment. A memory forever."
    },

    5:{
        title:"😂 Midnight Laughs",
        text:"Those nights when we laughed and laughed in our conversations. The kind of moments that make ordinary days unforgettable."
    }

};

const planets =
document.querySelectorAll(".planet");

planets.forEach(planet=>{

    planet.addEventListener("click",()=>{

        const id =
        planet.dataset.memory;

        document
        .getElementById("memoryTitle")
        .textContent =
        memories[id].title;

        document
        .getElementById("memoryText")
        .textContent =
        memories[id].text;

    });

});
const reasons = {

    1:{
        title:"❤️ The Way You Look At Me ",
        text:"The way you look at me with pride makes me feel like I can achieve anything. It reminds me every day how lucky I am to have you."
    },

    2:{
        title:"🏡 My Safe Place ",
        text:"Being with you feels like home. No matter how stressful life gets, I find peace whenever I'm with you."
    },

    3:{
        title:"🌸 Your Smile, My Happiness ",
        text:"You make me smile even on the hardest days. Somehow, your presence alone can make everything feel lighter."
    },

    4:{
        title:"✨ The Little Things ",
        text:"You care for me in countless little ways. The more I think about them, the more I realize how deeply you love me."
    },

    5:{
        title:"💖 The Gift Of Being Loved ",
        text:"You make me feel loved, valued, and understood. And honestly, that's one of the greatest gifts anyone has ever given me."
    }

};

const lanterns =
document.querySelectorAll(".lantern");

lanterns.forEach(lantern=>{

    lantern.addEventListener("click",()=>{

        const id = lantern.dataset.reason;

        document.getElementById("reasonTitle").textContent =
        reasons[id].title;

        document.getElementById("reasonText").textContent =
        reasons[id].text;

    });

});

// =========================
// SCENE 2 -> SCENE 3
// =========================

document
.getElementById("toLoveSection")
.addEventListener("click",()=>{

    showSection(".love-section",1200);
});

// =========================
// SCENE 3 -> LETTER
// =========================

document
.getElementById("toLetterSection")
.addEventListener("click",()=>{

    showSection(".letter-section",1500);

});
const envelope =
document.getElementById("openEnvelope");

const letterPaper =
document.getElementById("letterPaper");

if(envelope){

    envelope.addEventListener("click",()=>{

        envelope.classList.add("open");

        setTimeout(()=>{

            letterPaper.style.display =
            "block";

            setTimeout(()=>{

                letterPaper.classList.add("show");

            },100);

        },800);

    });

}
document
.getElementById("toPhotosSection")
.addEventListener("click",()=>{

    showSection(".photo-section",1200);
});
// =========================
// PHOTOS -> FINAL
// =========================

document
.getElementById("toFinalSection")
.addEventListener("click",()=>{

    showSection(".final-section",2000);

});
function showSection(sectionClass){

    setTimeout(()=>{

        const section =
        document.querySelector(sectionClass);

        section.style.display = "flex";

        section.scrollIntoView({
            behavior:"smooth"
        });

    },400);

}