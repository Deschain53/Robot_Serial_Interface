export const useBasicActionsNaab = (serial) => {
//Posteriormente se puede agregar una props para escribir en consola el comando ejecutado

    const escribeEnConsolaEnvia = (comando="") => {
        //recibir consola
        serial.escribe(comando)
    }

    const undoAction   = () => {
        escribeEnConsolaEnvia('Rota-');
    }    

    const redoAction   = () => {
        escribeEnConsolaEnvia('Rota+');
    }    

    const leftAction   = () => {
        escribeEnConsolaEnvia('P-izquierda');
    }    

    const home   = () => {
        escribeEnConsolaEnvia('posiciones,0,0,-90,0,0,0,0,90,0,0,0,0,0,0,70,90,0,-80,-90,0');
    }    

    const rightAction   = () => {
        escribeEnConsolaEnvia('P-derecha');
    }    

    const upAction   = () => {
        escribeEnConsolaEnvia('P-adelante')
    }    

    const downAction   = () => {
        escribeEnConsolaEnvia('P-atras');
    }

    return {undoAction,redoAction,leftAction,home,rightAction,upAction,downAction}
}