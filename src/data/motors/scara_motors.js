//Información los motores del robot scara (# de motor, nombre, limites y posicion home)
export const scara_position_information = [
    {id: 2, text:"Revoluta 1", min: 0, max: 80, default: 0},   //Revoluta del extremo
    {id: 3, text:"Revoluta 2", min: 0, max: 30, default:0},
    {id: 4, text:"Revoluta 3", min: 0, max: 325, default:0},
    {id: 5, text:"Posición z", min: 0, max: 50, default:0},
    {id: 6, text:"Grippet ", min: 1, max: 70, default:80},
    {id: 7, text:"Velocidad ", min: 1, max: 9000, default:9000},
]