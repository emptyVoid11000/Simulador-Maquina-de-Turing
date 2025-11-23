# Simulador-Maquina-de-Turing
qactual​,Símbolo Leído (Sleıˊdo​),qnuevo​,Símbolo Escrito (Sescrito​),Movimiento (D),Comentarios
q0​,A,q1​,A,R,Lee el 1er carácter y avanza.
q1​,A,q2​,A,R,Lee el 2do carácter.
q2​,A,q3​,A,R,Lee el 3er carácter.
q3​,A,q4​,A,R,Lee el 4to carácter.
q4​,A,q5​,A,R,Lee el 5to carácter.
q5​,A,q6​,A,R,Lee el 6to carácter.
q6​,A,q7​,A,R,Lee el 7mo carácter.
q7​,A,qfinal​,A,R,¡Lee el 8vo carácter! Entra en estado de aceptación.
qfinal​,A,qfinal​,A,R,Sigue aceptando caracteres válidos.
qfinal​,B,qfinal​,B,S,La cadena válida ha terminado. Acepta.
q0​…q7​,B,qrechazo​,B,S,Rechaza (Longitud menor a 8).
q0…final​,∈/Σ,qrechazo​,Sleıˊdo​,S,Rechaza (Símbolo no alfanumérico =A).
