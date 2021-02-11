/*Scrool Effect*/

AOS.init();

$(window).scroll(function () {
  var sticky = $("header");
  if ($(window).scrollTop() >= 100) {
    sticky.addClass("fixed");
  } else {
    sticky.removeClass("fixed");
  }
});

//*Particle

setTimeout(() => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: "#bcbcdd",
      },
      shape: {
        type: "triangle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 80,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: "#676788",
        opacity: 0.1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 800,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 800,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
}, 4000);

//*Alertify

if(!alertify.myAlert){
  //define a new dialog
  alertify.dialog('myAlert',function factory(){
    return{
      main:function(message){
        this.message = message;
      },
      setup:function(){
          return { 
            buttons:[{text: "cool!", key:27/*Esc*/}],
            focus: { element:0 }
          };
      },
      prepare:function(){
        this.setContent(this.message);
      }
  }});
}
//launch it.


//*Portfolio Filter

$(document).ready(function () {
  $(".filter").click(function () {
    const val = $(this).attr("data-filter");
    if (val == "all") {
      $(".item-box").show("1000");
    } else {
      $(".item-box")
        .not("." + val)
        .hide("1000");
      $(".item-box")
        .filter("." + val)
        .show("1000");
    }
  });
  $(".filter").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

//*Message

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector("#submitbtn");


emailInput.addEventListener('change',(e)=>{
  e.target.classList.remove('error')
})
nameInput.addEventListener('change',(e)=>{
  e.target.classList.remove('error')
})
messageInput.addEventListener('change',(e)=>{
  e.target.classList.remove('error')
})



submitBtn.addEventListener("click", (e) => {
  let nameVal = nameInput.value;
  let emailVal = emailInput.value;
  let messageVal = messageInput.value;

  let data = {
      name: nameVal,
      email: emailVal,
      message: messageVal,
  };

  if (nameVal == "") {
    nameInput.classList.add("error");
    nameInput.setAttribute("placeholder", "Lütfen Bir İsim Giriniz!");
  } else if (emailVal == "") {
    emailInput.classList.add("error");
    emailInput.setAttribute("placeholder", "Lütfen Bir Email Giriniz!");
  } else if (emailVal.indexOf("@") == "-1") {
    emailInput.classList.add("error");
    emailInput.setAttribute("placeholder", "Lütfen Geçerli Bir Email Giriniz!");
    emailInput.value=""
  } else if (messageVal == "") {
    messageInput.classList.add("error");
    messageInput.setAttribute("placeholder", "Lütfen Bir Email Giriniz!");
  } else {
    post('https://myproject-84e1d.firebaseio.com/message.json',data)
    alertify.success('Not Başarıyla Gönderildi!');
    nameInput.value="";
    emailInput.value="";
    messageInput.value="";
  }

  e.preventDefault();
});

const post= async(url,data)=>{

  const responsePost = await fetch(url,{
      method:'POST',
      body:JSON.stringify(data),
      headers: {
          "Content-type":"application/json;charset=UTF-8"
      }
  })

  const dataPost = await responsePost.json();

  return dataPost;
}