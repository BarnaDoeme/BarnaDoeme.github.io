particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 473.4885849793636
      }
    },
    "color": {
      "value": "#c88f07"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#0E142C"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "images/snowflake.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 6234,
        "rotateY": 6155
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 3.5,
        "duration": 2,
        "opacity": 100,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true}

);