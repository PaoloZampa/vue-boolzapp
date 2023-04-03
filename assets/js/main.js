/* Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato */

const { createApp } = Vue

createApp({
    data() {
        return {
            userMessage: '',
            activeContact: 0,
            searchUser: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Anahi',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Anahi, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Ma come non ancora!?',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            answers: [
                "Ti amo con tutto il mio cuore!",
                "Sei la mia anima gemella e non potrei chiedere di meglio!",
                "Non posso immaginare la mia vita senza di te!",
                "Sei l'amore della mia vita e ti amerò per sempre!",
                "Sei la persona più importante nella mia vita!",
                "Sei il mio sogno diventato realtà!",
                "Sei il mio angelo custode, la mia luce nella vita!",
                "Il mio cuore appartiene solo a te!",
                "Non c'è nessun altro al mondo come te, sei unico!",
                "Sei la mia stella, la mia fortuna!",
                "Amarti è la cosa più bella che mi sia mai successa!",
                "Non smetterò mai di amarti, anche quando i capelli diventeranno bianchi!",
                "Mi fai sentire vivo, felice e amato!",
                "Ogni momento con te è un momento prezioso!",
                "Non vedo l'ora di trascorrere il resto della mia vita con te!",
                "Mi fai sentire completo e felice!",
                "Amo ogni cosa di te, anche i tuoi difetti!",
                "Sono innamorato di te sempre di più ogni giorno!",
                "Sei la persona che mi fa sentire viva!",
                "Il mio cuore batte solo per te!",
                "Non vedo l'ora di svegliarmi ogni mattina accanto a te!",
                "Il tuo sorriso illumina la mia giornata!",
                "Amare te è la cosa più naturale al mondo!",
                "Sei la mia felicità, il mio tesoro!",
                "Non riesco a immaginare la mia vita senza di te!",
                "Sei l'unico che capisce il mio cuore!",
                "Sei il mio porto sicuro, la mia casa!",
                "Il mio amore per te non ha limiti!",
                "Il mio cuore ti appartiene completamente!",
                "Sei la persona più dolce e gentile che abbia mai incontrato!",
                "Ti amerò per sempre e per sempre!",
                "Non vedo l'ora di invecchiare accanto a te!",
                "Il mio amore per te è più forte di qualsiasi cosa!",
                "Amare te è la cosa più facile al mondo!",
                "Sei la persona che mi fa sentire completa!",
                "Ti amo più di ogni altra cosa al mondo!",
                "Non c'è nessuno al mondo come te, sei unico e speciale!",
                "Sei la mia metà, il mio compagno di vita!",
                "Non posso immaginare di essere felice senza di te!",
                "Sei l'unico che fa battere il mio cuore!",
                "Il mio amore per te è eterno!",
                "Sei la mia anima gemella, la mia vita!",
                "Amo ogni cosa di te, anche le cose che non ti piacciono di te stesso!",
                "Il mio cuore ti appartiene per sempre!",
                "Non c'è nessuno al mondo che possa prendere il tuo posto!",
                "Il mio amore per te è come un fiume in piena, inarrestabile!",
                "Sei la persona che mi fa sentire viva e felice!",
                "Ti amerò per sempre"
            ]
        }
    },
    methods: {
        selectContact(index) {
            this.activeContact = index
            //console.log(this.activeContact);
        },
        writeMessage() {
            //console.log(this.writeMessage);

            console.log(this.newMessage);
            if (this.userMessage <= 0) {
            } else {
                this.contacts[this.activeContact].messages.push({
                    date: '10/01/2020 15:30:55',
                    message: this.userMessage,
                    status: 'sent'
                },);
            }
            this.userMessage = '';
            this.autoReplay();
        },
        autoReplay() {
            setTimeout(() => {
                const indexRandom = this.getRndInteger(0, this.answers.length)
                this.contacts[this.activeContact].messages.push({
                    date: '10/01/2020 15:30:55',
                    message: this.answers[indexRandom],
                    status: 'Received'
                },);
            }, 1000);
        },
        deleteMessage(message) {
            index = this.contacts[this.activeContact].messages.indexOf(message);
            if (index > -1) {
                this.contacts[this.activeContact].messages.splice(index, 1);
            }
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
    },

}).mount('#app')