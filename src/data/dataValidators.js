// Sirve para validar los datos enviados al historial
// src>data>dataValidators
export const createData = (texto= "", identacion = ">>",estatus="", id) => {
    return { identacion,texto,estatus,id } ;
  }