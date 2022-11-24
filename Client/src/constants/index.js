export const serveur = {
    url : "https://localhost:4430/api"
}
export const navlinks = [
    {
        id : "home",
        title : "Home"
    },
    {
        id : "e-tax",
        title :"What is E-Tax ?"
    },
    {
        id : "clients",
        title : "Clients"
    }
]

export const stats = [ 
    {
        id : "stats-1",
        title : "user active",
        value : "3800+"
    },
    {
        id : "stats-2",
        title : "bank partener",
        value : "15+"
    },
    {
        id : "stats-3",
        title : "transactions",
        value : "230M+"
    }
]

export const animation = {
    fadeInOut : {
        hidden : {opacity : 0},
        show : {
            opacity: 1,
            transition: {
                delayChildren : 1.5,
                staggerChildren : 0.2,
                duration : 1.5
            }
        }
    },
    itemFadeInOut : {
        hidden : {y : "100%"},
        show : { y : "0%" , transition : {duration : 0.5}}
    }
    ,
    sladeInOut : {
        offscreen : {y: "-100%"},
        onscreen : {
            y: "0%",
            transition: {
                duration : 1.75,
                ease : "easeOut"
            }
        },
        exitscreen : {opacity : 1}
    },
    slideTopBotom : {
        offscreen :{y:-150,opacity:0},
        onscreen:{
          y:0,
          opacity:1,
          transition: {
            delay : 0.45,
            type:"spring",
            bounce:0.5,
            duration:0.75,
            ease : "easeOut"
          }
        }
    },
    zoomEffect : {
        offscreen : {opacity:0,scale : 0.75},
        onscreen : {
          opacity:1,
          scale : 1,
          transition : {
            delay : 0.55,
            duration:0.25,
            ease : "easeOut"
          }
        }
      }
}