Vue.config.devtools = true;

new Vue({
    el: `#app`,
    data: {
        // ARRAY CON ALL'INTERNO LE CLASSI PER LE DIVERSE IMMAGINI IN BACKGROUND
        img: [
            `bk-0`,
            `bk-1`,
            `bk-2`,
            `bk-3`,
            `bk-4`,
        ],
        // SERVE PER DARE LA POSIZIONE DENTRO ALL'ARRAY IMG"
        play: 0,
        //SERVE PER POI RICHIAMARE LA FUNZIONE ALL'INERNO CHE è IL SETINTERVAL
        intervalSlot:null,
    },
    // APPENA LA PAGINA VERRà CARICATA COMPLETAMENTE SI ESEGUIRA LA SEGUENTE FUNZIONE
    created() {
        this.interval(4000);
    },
    methods: {
        //QUESTA FUNZIONE MI PERMETTERA DI FERMARE LA CICLICITà DEL SETINTERVAL DICHIARATO ALL'INIZIO E DI FARLA RIPARTIRE
        interval:function(time){
            clearInterval(this.intervalSlot);
            this.intervalSlot = setInterval(() => {
                this.right()
            }, time)
    
        },
        // AUMENTO DEL VALORE DI PLAY, E CONSEGUENTE CAMBIO VALORE A ZERO NEL CASO IN CUI IL SUO VALORE DIVENTI UGUALE ALLA LUNGHEZZA DI "IMG",RESTART DELLA TRANSIZIONE DELLE IMMAGINI
        right: function () {
            if (this.play === (this.img.length - 1)) {
                this.play = 0;
            } else {
                this.play++;
            }
            this.interval(4000);

        },
        // DIMINUZIONE DEL VALORE DI PLAY, E CONSEGUENTE CAMBIO VALORE DI PLAY NELLA LUNGHEZZA DI "IMG" NEL CASO IN CUI PLAY SCENDA SOTTO LO ZERO,RESTART DELLA TRANSIZIONE DELLE IMMAGINI
        left: function () {
            if (this.play === 0) {
                this.play = this.img.length - 1;
            } else {
                this.play--;

            }
            this.interval(4000);

        },
        //IL PALLINO CON INDEX UGUALE A PLAY AVRA UNA CLASSE COLOR-BLUE
        colorIndex: function (index) {
            if (index === this.play) {
                return 'color-blue'
            } else {
                return ""
            }

        },
        //PLAY PRENDERà IL VALORE CHE VERRA MESSO TRA LE PARENTESI
        positionIndex: function (value) {
            this.play = value;
            this.interval(10000);

        }

    }
})