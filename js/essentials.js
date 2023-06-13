// alert("header & Footer")

class mainHeader extends HTMLElement {
    constructor(){
        super();
    }

connectedCallback(){
    this.innerHTML = `

<style>
        
@font-face {
    font-family: "crimsonReg";
    src: url(../fonts/CrimsonText-Regular-p.ttf);
  }
  
  @font-face {
    font-family: "crimsonBold";
    src: url(../fonts/CrimsonText-Bold-footer.ttf);
  }
  
  @font-face {
    font-family: "cormorantGaramondLight";
    src: url(../fonts/CormorantGaramond-Light-typewriter.ttf);
  }
  
  @font-face {
    font-family: "cormorantGaramondMedium";
    src: url(../fonts/CormorantGaramond-Medium-nav.ttf);
  }
  
  @font-face {
    font-family: "cormorantGaramondSemibold";
    src: url(../fonts/CormorantGaramond-SemiBold-h1h2.ttf);
  }


  header{
    background-color: burlywood;
}

/* Top banner */

#topDog{
    width: 100%;
    height: 15vw;
    background-color: black;
    border-bottom-right-radius: 20% 50%;
}

.foundation{
    position: relative;
    top: 50%;  
    width: 24vw;
    margin: 0 auto;
    border-right: 0.35vw solid rgba(255, 255, 255, 0.75);
    font-size: 6vw;
    color: rgb(255, 255, 255);
    font-family: "crimsonReg";
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

/* Animation */
.typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 700ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 53vw;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255, 255, 255, 0.75);}
  to{border-right-color: transparent;}
}

/* navigationbar */

#nav{
    width: 100%;
    height: auto;
    overflow: hidden;
}

#nav ul {
    margin: 0;
    padding: 0;
    display: flex;
    border-bottom: solid rgb(198, 147, 82) 5px;
}

#nav ul li {
    display: inline-block;
    width: 33.33%;
    height: auto;
}

#nav ul li a {
    display: block;
    text-decoration: none;
    margin: 0;
    padding: 0;
    padding-top: 1%;
    padding-bottom: 1%;
    color: black;
    text-align: center;
    position: relative;
    font-family: "cormorantGaramondMedium";
    font-size: 4vw;
    width: 100%;
    cursor: pointer;
    transition: 0.4s;
}

@media (max-width:600px){
  #nav ul li a{
    font-size: 2svh;
  }
}

#nav a:hover{
    transform: scale(1.07);
    background-color: rgb(225, 171, 101);
}

#headerbrown:hover{
    background-color: rgb(225, 171, 101);
}

</style>

<header>
<link rel="stylesheet" href="../css/style.css">

<div id="topDog">

    <p class="foundation typewriter"> Patrick's Exam Project</p>

</div>
<div id="nav">
    <ul>
        <li><a href="index.html">Frontpage</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="about.html">About</a></li>
    </ul>
    
</div>
</header>
        `;
    }

}

customElements.define(`main-header`, mainHeader);


class mainFooter extends HTMLElement {
    constructor(){
        super();
    }

connectedCallback(){
    this.innerHTML = `
        <style>
        @font-face {
            font-family: "crimsonReg";
            src: url(../fonts/CrimsonText-Regular-p.ttf);
          }
          
          @font-face {
            font-family: "crimsonBold";
            src: url(../fonts/CrimsonText-Bold-footer.ttf);
          }
          
          @font-face {
            font-family: "cormorantGaramondLight";
            src: url(../fonts/CormorantGaramond-Light-typewriter.ttf);
          }
          
          @font-face {
            font-family: "cormorantGaramondMedium";
            src: url(../fonts/CormorantGaramond-Medium-nav.ttf);
          }
          
          @font-face {
            font-family: "cormorantGaramondSemibold";
            src: url(../fonts/CormorantGaramond-SemiBold-h1h2.ttf);
          }
        
        
          footer{
            height: auto;
            width: 100%;
            background-color: black;
            overflow: hidden;
        }
        
        #footLine{
            width: 100%;
            height: auto;
            margin-top: auto;
            margin-bottom: auto;
        }
        
        #footP{
            max-width: 52ch;
            font-size: 0.95vw;
            padding:0;
            font-family: "crimsonReg";
            color: white;
            float: left;
            padding-top: 1.5vw;
            padding-left: 1vw;
            margin-top: auto;
            margin-bottom: auto;
        }
        
        #footImg{
            float: right;
            margin-top: auto;
            margin-bottom: auto;
            padding-top: 1vw;
            padding-bottom: 1vw;
            padding-right: 2vw;
        }
        
        #footImg a img{
            width: 4vw;
        }
        
        @media (max-width: 900px){
          #footP{
            font-size: 1.2svh;
          }
        
          #footImg a img{
            width: 6vw;
          }
        
        }
        
        </style>

        <footer>
        <div id="footLine">
            <p id="footP">This site is a non commercial website made for educational use, specifically targeted at teachers and peers alike.</p>
            <div id="footImg">
            <a target="_blank" href="https://www.facebook.com/"><img src="../img/icons8-facebook.svg" alt="Facebook"></a>
            <a target="_blank" href="https://www.instagram.com/"><img src="../img/icons8-instagram.svg" alt="Instagram"></a>
            <a target="_blank" href="https://www.linkedin.com/"><img src="../img/icons8-linkedin.svg" alt="Linkedin"></a>
            </div>
        </div>
    </footer>
        `;
    }

}

customElements.define(`main-footer`, mainFooter);