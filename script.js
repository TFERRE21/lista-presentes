/* =========================================================
   CHÁ DE FRALDAS + CULTO DE AÇÃO DE GRAÇAS DA ELÓA
   STYLE PREMIUM COMPLETO
========================================================= */


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    color: #4d4650;
    background: #fff8fb;
    overflow-x: hidden;
    min-height: 100vh;
}

::selection {
    background: #e98caf;
    color: #ffffff;
}


/* =========================================================
   FUNDO
========================================================= */

body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -20;
    pointer-events: none;

    background:
        radial-gradient(
            circle at 8% 8%,
            rgba(255,191,215,.42),
            transparent 28%
        ),
        radial-gradient(
            circle at 92% 12%,
            rgba(186,226,255,.35),
            transparent 28%
        ),
        radial-gradient(
            circle at 50% 85%,
            rgba(255,225,190,.18),
            transparent 30%
        ),
        linear-gradient(
            180deg,
            #fff0f7 0%,
            #fffafd 32%,
            #ffffff 60%,
            #f7fbff 100%
        );
}

.background {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: -10;
}


/* =========================================================
   LUZES
========================================================= */

.luz {
    position: absolute;
    border-radius: 50%;
    filter: blur(45px);
    opacity: .35;

    animation:
        luzFlutuar
        12s
        ease-in-out
        infinite;
}

.luz-1 {
    width: 260px;
    height: 260px;
    top: 8%;
    left: -100px;
    background: #ffc3dc;
}

.luz-2 {
    width: 320px;
    height: 320px;
    right: -130px;
    top: 30%;
    background: #c5e9ff;
    animation-delay: -4s;
}

.luz-3 {
    width: 280px;
    height: 280px;
    left: 35%;
    bottom: -150px;
    background: #ffe5b5;
    animation-delay: -7s;
}

@keyframes luzFlutuar {
    0%, 100% {
        transform: translate(0,0) scale(1);
    }

    50% {
        transform: translate(25px,-30px) scale(1.12);
    }
}


/* =========================================================
   NUVENS
========================================================= */

.cloud {
    position: absolute;
    width: 210px;
    height: 60px;
    border-radius: 100px;
    background: rgba(255,255,255,.75);
    opacity: .7;
}

.cloud::before,
.cloud::after {
    content: "";
    position: absolute;
    background: inherit;
    border-radius: 50%;
}

.cloud::before {
    width: 80px;
    height: 80px;
    left: 25px;
    top: -35px;
}

.cloud::after {
    width: 100px;
    height: 100px;
    right: 20px;
    top: -50px;
}

.cloud1 {
    top: 10%;
    left: -260px;

    animation:
        moverNuvem
        70s
        linear
        infinite;
}

.cloud2 {
    top: 48%;
    left: -350px;
    width: 260px;

    animation:
        moverNuvem
        95s
        linear
        infinite;

    animation-delay: -30s;
}

@keyframes moverNuvem {
    from {
        transform: translateX(-300px);
    }

    to {
        transform: translateX(180vw);
    }
}


/* =========================================================
   PARTÍCULAS
========================================================= */

.particulas {
    position: absolute;
    inset: 0;
    opacity: .45;

    background-image:
        radial-gradient(
            rgba(255,255,255,.95)
            1px,
            transparent 1px
        );

    background-size: 145px 145px;
}


/* =========================================================
   TELA DE ENTRADA
========================================================= */

.entrada {
    position: fixed;
    inset: 0;
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
    overflow: hidden;

    background:
        radial-gradient(
            circle at 50% 20%,
            rgba(255,255,255,.98),
            transparent 35%
        ),
        linear-gradient(
            145deg,
            #ffe5f0,
            #ffffff 50%,
            #eaf7ff
        );

    transition:
        opacity .85s ease,
        visibility .85s ease;
}

.entrada-brilhos {
    position: absolute;
    inset: 0;
    pointer-events: none;

    background:
        radial-gradient(
            circle at 20% 25%,
            rgba(255,255,255,.9) 0 2px,
            transparent 3px
        ),
        radial-gradient(
            circle at 80% 30%,
            rgba(255,255,255,.9) 0 2px,
            transparent 3px
        );

    background-size:
        160px 160px,
        190px 190px;

    animation:
        brilhoEntrada
        5s
        ease-in-out
        infinite;
}

@keyframes brilhoEntrada {
    0%,100% {
        opacity: .45;
    }

    50% {
        opacity: 1;
    }
}


/* =========================================================
   CARD ENTRADA
========================================================= */

.entrada-card {
    position: relative;
    z-index: 2;

    width: min(94%,560px);

    padding: 48px 40px 45px;

    text-align: center;

    border:
        1px solid
        rgba(255,255,255,.95);

    border-radius: 38px;

    background:
        rgba(255,255,255,.82);

    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);

    box-shadow:
        0 35px 100px
        rgba(187,106,145,.18),

        0 12px 35px
        rgba(0,0,0,.07);

    animation:
        entradaCard
        1s
        cubic-bezier(.2,.8,.2,1)
        both;
}

@keyframes entradaCard {
    from {
        opacity: 0;
        transform:
            translateY(35px)
            scale(.94);
    }

    to {
        opacity: 1;
        transform:
            translateY(0)
            scale(1);
    }
}

.entrada-icon {
    width: 105px;
    height: 105px;

    margin: 0 auto 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #ffe8f2
        );

    border:
        1px solid
        rgba(255,175,205,.35);

    box-shadow:
        0 18px 45px
        rgba(239,91,150,.16);

    font-size: 60px;

    animation:
        bebeFlutuar
        3.5s
        ease-in-out
        infinite;
}

@keyframes bebeFlutuar {
    0%,100% {
        transform:
            translateY(0)
            rotate(0);
    }

    50% {
        transform:
            translateY(-8px)
            rotate(2deg);
    }
}

.entrada-card h1 {
    color: #e85c94;

    font-size:
        clamp(30px,6vw,46px);

    line-height: 1.1;

    font-weight: 600;
}

.entrada-card h2 {
    margin-top: -3px;

    color: #ef80a8;

    font-family:
        'Great Vibes',
        cursive;

    font-size:
        clamp(70px,14vw,100px);

    font-weight: 400;

    line-height: 1;
}

.entrada-card p {
    max-width: 430px;

    margin: 20px auto 0;

    color: #6f6870;

    font-size: 15px;

    line-height: 1.8;
}


/* =========================================================
   BOTÃO ENTRADA
========================================================= */

.btn-entrar {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 15px;

    min-width: 245px;

    margin-top: 28px;

    padding: 17px 30px;

    border: none;
    border-radius: 50px;

    background:
        linear-gradient(
            135deg,
            #e95791,
            #ff91b9
        );

    color: #ffffff;

    font-family:
        'Poppins',
        sans-serif;

    font-size: 16px;

    font-weight: 600;

    cursor: pointer;

    box-shadow:
        0 15px 35px
        rgba(233,87,145,.27);

    transition:
        transform .3s ease,
        box-shadow .3s ease;
}

.btn-entrar:hover {
    transform:
        translateY(-4px)
        scale(1.02);

    box-shadow:
        0 20px 45px
        rgba(233,87,145,.35);
}


/* =========================================================
   PLAYER DE MÚSICA NO TOPO
========================================================= */

.music-player {
    position: fixed;

    top: 18px;
    left: 50%;

    transform:
        translateX(-50%);

    z-index: 9000;

    width:
        min(calc(100% - 30px),440px);
}

.music-button {
    width: 100%;
    min-height: 64px;

    display: flex;
    align-items: center;

    gap: 13px;

    padding: 10px 16px;

    border:
        1px solid
        rgba(255,255,255,.75);

    border-radius: 22px;

    background:
        rgba(255,255,255,.82);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    box-shadow:
        0 12px 35px
        rgba(160,90,125,.14);

    color: #555;

    font-family:
        'Poppins',
        sans-serif;

    cursor: pointer;

    transition:
        transform .3s ease,
        box-shadow .3s ease;
}

.music-button:hover {
    transform:
        translateY(-3px);

    box-shadow:
        0 18px 40px
        rgba(160,90,125,.20);
}

.music-play-icon {
    width: 42px;
    height: 42px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            #ed5b96,
            #ff9ac0
        );

    color: white;

    font-size: 14px;

    box-shadow:
        0 8px 20px
        rgba(237,91,150,.22);
}

.music-text {
    display: flex;
    flex-direction: column;
    flex: 1;

    text-align: left;
}

.music-text strong {
    color: #e35b92;

    font-size: 13px;

    font-weight: 600;
}

.music-text small {
    margin-top: 2px;

    color: #888;

    font-size: 10px;
}

.music-waves {
    color: #efa1bd;

    font-size: 18px;

    letter-spacing: 1px;

    opacity: .65;
}


/* =========================================================
   HERO
========================================================= */

.hero-premium {
    position: relative;

    min-height: 100vh;

    padding:
        130px 20px 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    overflow: hidden;
}

.hero-glow {
    position: absolute;

    width: 650px;
    height: 650px;

    left: 50%;
    top: 45%;

    transform:
        translate(-50%,-50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(255,255,255,.95) 0%,
            rgba(255,225,239,.45) 38%,
            transparent 70%
        );

    pointer-events: none;
}

.hero-content {
    position: relative;

    z-index: 3;

    width:
        min(100%,950px);

    margin: auto;
}

.hero-decoration {
    position: absolute;

    color:
        rgba(234,126,166,.35);

    font-size: 80px;

    font-family:
        'Great Vibes',
        cursive;

    animation:
        decoracaoFlutuar
        5s
        ease-in-out
        infinite;
}

.hero-decoration-left {
    left: 7%;
    top: 38%;
}

.hero-decoration-right {
    right: 7%;
    top: 25%;

    animation-delay:
        -2s;
}

@keyframes decoracaoFlutuar {
    0%,100% {
        transform:
            translateY(0)
            rotate(-5deg);
    }

    50% {
        transform:
            translateY(-18px)
            rotate(5deg);
    }
}


/* =========================================================
   FOTO
========================================================= */

.photo-frame-premium {
    position: relative;

    width:
        min(390px,78vw);

    height:
        min(390px,78vw);

    margin:
        0 auto 35px;

    padding: 10px;

    border-radius: 45px;

    background:
        rgba(255,255,255,.95);

    box-shadow:
        0 30px 80px
        rgba(180,95,135,.20);

    transform:
        rotate(-1deg);
}

.photo-frame-premium::before {
    content: "";

    position: absolute;

    inset: -9px;

    border-radius: 52px;

    border:
        2px solid
        rgba(242,145,180,.22);

    z-index: -1;
}

.photo-frame-premium::after {
    content: "✦";

    position: absolute;

    right: -35px;
    top: -35px;

    width: 65px;
    height: 65px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: #dca4ba;

    background:
        rgba(255,255,255,.85);

    box-shadow:
        0 10px 25px
        rgba(180,100,135,.12);

    font-size: 28px;
}

.photo {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    border-radius: 36px;
}


/* =========================================================
   HERO TEXTOS
========================================================= */

.hero-label {
    margin-bottom: 10px;

    color: #b17b95;

    font-size: 12px;

    font-weight: 600;

    letter-spacing: 2.5px;
}

.hero-title {
    color: #e75c94;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size:
        clamp(42px,7vw,70px);

    font-weight: 600;

    line-height: 1;
}

.hero-name {
    margin-top: -8px;

    color: #ed82aa;

    font-family:
        'Great Vibes',
        cursive;

    font-size:
        clamp(95px,15vw,145px);

    font-weight: 400;

    line-height: .95;
}

.hero-subtitle {
    color: #716970;

    font-size: 17px;

    line-height: 1.8;
}

.hero-subtitle strong {
    color: #df719b;
}


/* =========================================================
   CHÁ DE FRALDAS
========================================================= */

.cha-section {
    position: relative;

    padding: 110px 20px;

    overflow: hidden;

    background:
        linear-gradient(
            180deg,
            rgba(255,255,255,.85),
            rgba(255,244,249,.92)
        );
}

.cha-container {
    position: relative;

    z-index: 2;

    width:
        min(100%,1050px);

    margin: auto;
}

.cha-grid {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 70px;

    align-items: center;
}

.cha-intro {
    text-align: center;

    padding: 25px;
}

.baby-decoration {
    font-size: 62px;

    margin-bottom: 12px;

    animation:
        bebeFlutuar
        3s
        ease-in-out
        infinite;
}

.small-title {
    display: block;

    color: #b47d98;

    font-size: 12px;

    font-weight: 600;

    letter-spacing: 2px;

    text-transform: uppercase;
}

.cha-intro h2 {
    margin-top: 12px;

    color: #5d555d;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size:
        clamp(34px,5vw,48px);

    font-weight: 500;
}

.cha-intro h3 {
    margin-top: -8px;

    color: #eb79a5;

    font-family:
        'Great Vibes',
        cursive;

    font-size:
        clamp(80px,11vw,110px);

    font-weight: 400;

    line-height: 1;
}

.mini-heart {
    margin: 15px 0;

    color: #eca2bc;

    font-size: 28px;
}

.verse {
    max-width: 500px;

    margin: auto;

    color: #777078;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size: 21px;

    font-style: italic;

    line-height: 1.7;
}

.verse-reference {
    display: block;

    margin-top: 10px;

    color: #dc729b;

    font-size: 13px;
}


/* =========================================================
   DETALHES
========================================================= */

.event-details {
    display: flex;

    flex-direction: column;

    gap: 15px;
}

.detail-card {
    display: flex;

    align-items: center;

    gap: 18px;

    padding: 22px;

    border:
        1px solid
        rgba(238,176,200,.25);

    border-radius: 24px;

    background:
        rgba(255,255,255,.78);

    box-shadow:
        0 12px 35px
        rgba(160,100,130,.07);

    transition:
        transform .3s ease;
}

.detail-card:hover {
    transform:
        translateX(5px);
}

.detail-icon {
    width: 55px;
    height: 55px;

    flex-shrink: 0;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 18px;

    background:
        linear-gradient(
            145deg,
            #fff,
            #ffe9f2
        );

    color: #e679a3;

    font-size: 21px;
}

.detail-card small {
    display: block;

    margin-bottom: 2px;

    color: #b68ca0;

    font-size: 10px;

    font-weight: 600;

    letter-spacing: 1.5px;
}

.detail-card strong {
    display: block;

    color: #5e575e;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size: 24px;

    font-weight: 600;
}

.detail-card span {
    display: block;

    margin-top: 3px;

    color: #898087;

    font-size: 11px;
}


/* =========================================================
   PRESENTE
========================================================= */

.presente-section {
    position: relative;

    padding: 105px 20px;

    overflow: hidden;

    background:
        linear-gradient(
            180deg,
            #fffafd,
            #ffffff
        );
}

.presente-container {
    position: relative;

    z-index: 2;

    width:
        min(100%,1050px);

    margin: auto;
}

.presente-header {
    max-width: 700px;

    margin:
        0 auto 45px;

    text-align: center;
}

.section-icon {
    display: block;

    margin-bottom: 12px;

    font-size: 55px;
}

.presente-header h2 {
    color: #e45f95;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size:
        clamp(38px,6vw,58px);

    font-weight: 600;
}

.presente-header p {
    margin-top: 15px;

    color: #777078;

    font-size: 15px;

    line-height: 1.8;
}

.presente-layout {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 30px;
}

.presente-search {
    padding: 32px;

    border-radius: 30px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #fff7fb
        );

    border:
        1px solid
        rgba(235,157,185,.25);

    box-shadow:
        0 20px 55px
        rgba(160,95,130,.09);
}

.presente-search label {
    display: block;

    margin-bottom: 9px;

    color: #655d64;

    font-size: 13px;

    font-weight: 600;
}

.input-wrapper {
    position: relative;
}

.input-wrapper i {
    position: absolute;

    left: 18px;
    top: 50%;

    transform:
        translateY(-50%);

    color: #df82a5;
}

.input-wrapper input {
    width: 100%;
    height: 58px;

    padding:
        0 18px 0 48px;

    border:
        1.5px solid
        #f2c8d9;

    border-radius: 17px;

    outline: none;

    background: #ffffff;

    color: #555;

    font-family:
        'Poppins',
        sans-serif;

    font-size: 14px;
}

.input-wrapper input:focus {
    border-color:
        #e982aa;

    box-shadow:
        0 0 0 4px
        rgba(233,130,170,.10);
}

.presente-search .btn-search {
    width: 100%;
    height: 56px;

    margin-top: 15px;

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 10px;

    border: none;

    border-radius: 17px;

    background:
        linear-gradient(
            135deg,
            #e65a93,
            #fa8db5
        );

    color: #ffffff;

    font-family:
        'Poppins',
        sans-serif;

    font-size: 14px;

    font-weight: 600;

    cursor: pointer;

    box-shadow:
        0 12px 28px
        rgba(230,90,147,.20);
}

#resultado {
    margin-top: 20px;
}

.cardResultado {
    padding: 25px 20px;

    text-align: center;

    border-radius: 23px;

    background:
        linear-gradient(
            145deg,
            #fff,
            #fff1f7
        );

    border:
        1px solid
        rgba(237,131,171,.25);

    box-shadow:
        0 15px 35px
        rgba(190,100,140,.10);

    animation:
        resultadoEntrada
        .5s ease both;
}

.cardResultado h2 {
    color: #e55c93;

    font-size: 20px;
}

.cardResultado h1 {
    margin: 13px 0;

    color: #e55c93;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size: 37px;
}

.cardResultado p {
    color: #777078;

    font-size: 13px;

    line-height: 1.75;
}

.erro {
    padding: 17px;

    text-align: center;

    border-radius: 15px;

    background: #fff0f4;

    border:
        1px solid
        #ffd3e2;

    color: #b24e71;

    font-size: 13px;
}

@keyframes resultadoEntrada {
    from {
        opacity: 0;

        transform:
            translateY(15px)
            scale(.98);
    }

    to {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


/* =========================================================
   CONVIDADOS
========================================================= */

.convidados-card {
    min-height: 420px;

    padding: 28px;

    border-radius: 30px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f9fcff
        );

    border:
        1px solid
        rgba(185,216,237,.35);

    box-shadow:
        0 20px 55px
        rgba(80,130,165,.08);
}

.convidados-card-header {
    display: flex;

    align-items: center;

    gap: 14px;

    padding-bottom: 20px;

    margin-bottom: 18px;

    border-bottom:
        1px solid
        rgba(190,215,230,.35);
}

.convidados-card-header > div:first-child {
    width: 48px;
    height: 48px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 15px;

    background: #edf7ff;

    color: #73a9cc;
}

.lista-scroll {
    max-height: 340px;

    overflow-y: auto;
}

.lista-scroll ul {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 9px;

    list-style: none;
}

.lista-scroll li {
    padding: 12px 13px;

    border:
        1px solid
        #edf0f3;

    border-radius: 13px;

    background: #ffffff;

    color: #62676b;

    font-size: 12px;

    cursor: pointer;

    transition:
        transform .25s ease;
}

.lista-scroll li:hover {
    transform:
        translateY(-2px);

    background: #fff5f9;

    border-color:
        #f2c6d8;
}


/* =========================================================
   DIVISOR
========================================================= */

.gratidao-divider {
    position: relative;

    padding: 115px 20px;

    text-align: center;

    overflow: hidden;

    background:
        linear-gradient(
            180deg,
            #fff8fb,
            #fffaf3,
            #fff
        );
}

.gratidao-divider::before {
    content: "";

    position: absolute;

    width: 600px;
    height: 600px;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%,-50%);

    border-radius: 50%;

    background:
        rgba(255,221,177,.18);

    filter: blur(80px);
}

.divider-decoration {
    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 14px;
}

.divider-decoration i {
    width: 90px;
    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            #d8b476
        );
}

.divider-decoration span {
    color: #d5ae6d;

    font-size: 20px;
}

.divider-small {
    position: relative;

    z-index: 2;

    margin-top: 28px;

    color: #b08d5d;

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 3px;
}

.gratidao-divider h2 {
    position: relative;

    z-index: 2;

    margin-top: 10px;

    color: #9f7a4b;

    font-family:
        'Great Vibes',
        cursive;

    font-size:
        clamp(50px,8vw,75px);

    font-weight: 400;
}

.divider-text {
    position: relative;

    z-index: 2;

    max-width: 650px;

    margin: 15px auto 0;

    color: #777;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size: 21px;

    line-height: 1.7;
}


/* =========================================================
   CULTO
========================================================= */

.culto-section {
    position: relative;

    padding:
        115px 20px 120px;

    overflow: hidden;

    text-align: center;

    background:
        linear-gradient(
            145deg,
            #fffdf8,
            #fffaf0 45%,
            #ffffff
        );
}

.culto-container {
    position: relative;

    z-index: 2;

    width:
        min(100%,950px);

    margin: auto;
}

.culto-tag {
    width: fit-content;

    margin:
        0 auto 25px;

    padding: 8px 20px;

    border-radius: 50px;

    border:
        1px solid
        rgba(193,153,86,.30);

    background:
        rgba(255,255,255,.75);

    color: #ad8550;

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 2px;
}

.culto-icon {
    width: 92px;
    height: 92px;

    margin:
        0 auto 22px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    border:
        1px solid
        rgba(205,166,93,.35);

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f8edda
        );

    color: #b78b4d;

    font-size: 45px;

    box-shadow:
        0 18px 45px
        rgba(180,140,70,.14);
}

.culto-label {
    color: #b28a57;

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 2.5px;
}

.culto-title {
    margin-top: 10px;

    color: #927044;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size:
        clamp(46px,7vw,72px);

    font-weight: 600;

    line-height: .95;
}

.culto-subtitle {
    margin-top: 10px;

    color: #c1985a;

    font-family:
        'Great Vibes',
        cursive;

    font-size:
        clamp(38px,6vw,58px);

    font-weight: 400;
}


/* =========================================================
   VERSÍCULO
========================================================= */

.culto-versiculo {
    position: relative;

    max-width: 700px;

    margin:
        40px auto 0;

    padding:
        35px 30px;

    border-top:
        1px solid
        rgba(205,166,93,.30);

    border-bottom:
        1px solid
        rgba(205,166,93,.30);
}

.aspas {
    position: absolute;

    left: 8px;
    top: 0;

    color: #d6b16f;

    font-family:
        Georgia,
        serif;

    font-size: 75px;

    opacity: .35;
}

.culto-versiculo p {
    color: #6f665c;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size: 29px;

    font-style: italic;

    line-height: 1.4;
}

.culto-versiculo strong {
    display: block;

    margin-top: 12px;

    color: #ae8550;

    font-size: 13px;
}


/* =========================================================
   INFORMAÇÕES DO CULTO
========================================================= */

.culto-info {
    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 16px;

    margin-top: 45px;
}

.culto-info-card {
    display: flex;

    align-items: center;

    gap: 14px;

    padding: 22px;

    text-align: left;

    border:
        1px solid
        rgba(205,166,93,.25);

    border-radius: 22px;

    background:
        rgba(255,255,255,.80);

    box-shadow:
        0 12px 35px
        rgba(150,115,65,.07);
}

.culto-info-icon {
    width: 48px;
    height: 48px;

    flex-shrink: 0;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 15px;

    background: #faf1df;

    color: #b68a4c;
}

.culto-info-card small {
    display: block;

    margin-bottom: 3px;

    color: #b49772;

    font-size: 9px;

    font-weight: 600;

    letter-spacing: 1.5px;
}

.culto-info-card strong {
    display: block;

    color: #665e56;

    font-size: 13px;
}

.culto-info-card span {
    display: block;

    margin-top: 2px;

    color: #9a9289;

    font-size: 11px;
}


/* =========================================================
   MENSAGEM DO CULTO
========================================================= */

.culto-mensagem {
    max-width: 760px;

    margin:
        35px auto 0;

    color: #746d65;

    font-size: 15px;

    line-height: 1.9;
}

.culto-destaque {
    margin-top: 25px;

    color: #a77d48;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size: 23px;

    font-weight: 600;
}


/* =========================================================
   BOTÕES
========================================================= */

.culto-buttons {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 15px;

    margin-top: 35px;
}

.culto-buttons a {
    text-decoration: none;
}

.culto-buttons button {
    min-width: 190px;

    height: 52px;

    padding: 0 22px;

    border-radius: 50px;

    font-family:
        'Poppins',
        sans-serif;

    font-size: 13px;

    font-weight: 600;

    cursor: pointer;
}

.btn-culto-map {
    border:
        1px solid
        #d7b77e;

    background:
        rgba(255,255,255,.8);

    color: #a67e48;
}

.btn-culto-whatsapp {
    border: none;

    background:
        linear-gradient(
            135deg,
            #c69c5a,
            #e0bd7d
        );

    color: #ffffff;
}


/* =========================================================
   FINAL
========================================================= */

.final-section {
    position: relative;

    padding:
        120px 20px;

    text-align: center;

    overflow: hidden;

    background:
        linear-gradient(
            145deg,
            #fff1f7,
            #ffffff 50%,
            #edf8ff
        );
}

.final-container {
    position: relative;

    z-index: 2;

    width:
        min(100%,760px);

    margin: auto;
}

.final-ornament {
    color: #e7a0ba;

    font-size: 20px;

    letter-spacing: 10px;
}

.final-label {
    margin-top: 20px;

    color: #b17e97;

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 3px;
}

.final-section h2 {
    margin-top: 10px;

    color: #df6798;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size:
        clamp(42px,7vw,65px);

    font-weight: 600;
}

.final-text {
    max-width: 650px;

    margin:
        25px auto;

    color: #777078;

    font-size: 15px;

    line-height: 1.9;
}

.final-heart {
    margin:
        25px auto 15px;

    font-size: 42px;

    animation:
        pulsar
        2.5s
        ease-in-out
        infinite;
}

.final-signature {
    color: #999096;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size: 20px;

    font-style: italic;
}


/* =========================================================
   RODAPÉ
========================================================= */

.footer-premium {
    position: relative;

    padding:
        75px 20px 40px;

    text-align: center;

    background:
        linear-gradient(
            145deg,
            #fff0f6,
            #fff8fb,
            #f2faff
        );
}

.footer-decoration {
    margin-bottom: 15px;

    color: #e6a0bb;

    font-size: 18px;

    letter-spacing: 12px;
}

.footer-baby {
    font-size: 42px;

    margin-bottom: 5px;
}

.footer-content h2 {
    color: #e777a2;

    font-family:
        'Great Vibes',
        cursive;

    font-size: 70px;

    font-weight: 400;
}

.footer-main {
    color: #777078;

    font-size: 13px;
}

.footer-divider {
    width: 250px;

    margin:
        25px auto;

    display: flex;

    align-items: center;

    gap: 12px;
}

.footer-divider i {
    flex: 1;

    height: 1px;

    background:
        #efbfd2;
}

.footer-divider span {
    color: #e59ab7;
}

.footer-verse {
    color: #817880;

    font-family:
        'Cormorant Garamond',
        serif;

    font-size: 19px;

    font-style: italic;
}


/* =========================================================
   CONFETES
========================================================= */

.confete {
    position: fixed;

    top: -20px;

    z-index: 99999;

    width: 8px;
    height: 14px;

    border-radius: 2px;

    pointer-events: none;

    animation:
        cairConfete
        4s
        linear
        forwards;
}

@keyframes cairConfete {
    0% {
        transform:
            translateY(-20px)
            rotate(0);

        opacity: 1;
    }

    100% {
        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;
    }
}


/* =========================================================
   CORAÇÕES
========================================================= */

.heart {
    position: fixed;

    bottom: -50px;

    z-index: 100;

    pointer-events: none;

    animation:
        subirCoracao
        8s
        linear
        forwards;
}

@keyframes subirCoracao {
    0% {
        transform:
            translateY(0)
            rotate(0);

        opacity: 0;
    }

    15% {
        opacity: .8;
    }

    80% {
        opacity: .65;
    }

    100% {
        transform:
            translateY(-115vh)
            rotate(25deg);

        opacity: 0;
    }
}


/* =========================================================
   RESPONSIVIDADE
========================================================= */

@media (max-width: 900px) {

    .hero-premium {
        padding-top: 125px;
    }

    .hero-decoration {
        display: none;
    }

    .cha-grid {
        grid-template-columns: 1fr;

        gap: 35px;
    }

    .presente-layout {
        grid-template-columns: 1fr;
    }

    .culto-info {
        grid-template-columns: 1fr;

        max-width: 650px;

        margin-left: auto;
        margin-right: auto;
    }
}


@media (max-width: 600px) {

    .music-player {
        top: 10px;

        width:
            calc(100% - 20px);
    }

    .music-button {
        min-height: 57px;

        padding: 8px 12px;

        border-radius: 18px;
    }

    .music-play-icon {
        width: 38px;
        height: 38px;
    }

    .music-waves {
        display: none;
    }

    .entrada-card {
        padding:
            38px 23px 35px;

        border-radius: 30px;
    }

    .entrada-icon {
        width: 85px;
        height: 85px;

        font-size: 48px;
    }

    .entrada-card p {
        font-size: 13px;
    }

    .btn-entrar {
        width: 100%;
        min-width: 0;
    }

    .hero-premium {
        min-height: auto;

        padding:
            125px 16px 75px;
    }

    .photo-frame-premium {
        width: 76vw;
        height: 76vw;

        max-width: 330px;
        max-height: 330px;

        border-radius: 34px;
    }

    .photo {
        border-radius: 27px;
    }

    .hero-title {
        font-size: 38px;
    }

    .hero-name {
        font-size: 90px;
    }

    .hero-subtitle {
        font-size: 14px;
    }

    .cha-section {
        padding:
            75px 16px;
    }

    .cha-intro {
        padding: 10px;
    }

    .cha-intro h2 {
        font-size: 32px;
    }

    .cha-intro h3 {
        font-size: 82px;
    }

    .verse {
        font-size: 19px;
    }

    .detail-card {
        padding: 18px;

        border-radius: 20px;
    }

    .presente-section {
        padding:
            75px 16px;
    }

    .presente-search {
        padding:
            23px 18px;

        border-radius: 24px;
    }

    .convidados-card {
        padding:
            22px 18px;

        border-radius: 24px;
    }

    .lista-scroll ul {
        grid-template-columns: 1fr;
    }

    .gratidao-divider {
        padding:
            80px 18px;
    }

    .divider-decoration i {
        width: 45px;
    }

    .gratidao-divider h2 {
        font-size: 50px;
    }

    .divider-text {
        font-size: 18px;
    }

    .culto-section {
        padding:
            90px 16px;
    }

    .culto-icon {
        width: 78px;
        height: 78px;

        font-size: 37px;
    }

    .culto-title {
        font-size: 48px;
    }

    .culto-subtitle {
        font-size: 40px;
    }

    .culto-versiculo {
        padding:
            28px 18px;
    }

    .culto-versiculo p {
        font-size: 24px;
    }

    .culto-buttons {
        flex-direction: column;

        width: 100%;
    }

    .culto-buttons a,
    .culto-buttons button {
        width: 100%;
    }

    .final-section {
        padding:
            85px 18px;
    }

    .final-section h2 {
        font-size: 42px;
    }

    .final-text {
        font-size: 13px;
    }

    .footer-premium {
        padding:
            60px 18px 35px;
    }

    .footer-content h2 {
        font-size: 62px;
    }
}


@media (max-width: 380px) {

    .hero-name {
        font-size: 76px;
    }

    .hero-title {
        font-size: 34px;
    }

    .entrada-card h1 {
        font-size: 29px;
    }

    .entrada-card h2 {
        font-size: 75px;
    }

    .culto-title {
        font-size: 42px;
    }

    .culto-subtitle {
        font-size: 35px;
    }
}


@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration:
            .01ms !important;

        animation-iteration-count:
            1 !important;

        scroll-behavior:
            auto !important;

        transition-duration:
            .01ms !important;
    }
}


/* =========================================================
   FIM
========================================================= */
