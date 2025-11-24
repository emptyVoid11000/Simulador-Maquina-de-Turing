# Simulador-Maquina-de-Turing

# Definición Formal de la Máquina de Turing

La Máquina de Turing ($M$) diseñada para reconocer la contraseña con el formato `^\w{8,}$` (8 o más caracteres de palabra) se define formalmente como una séptupla:

$$M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$$


## 1. Conjunto Finito de Estados ($Q$)

El conjunto de estados que se utiliza para contar los 8 caracteres mínimos y manejar la aceptación/rechazo.

$$Q = \{q_0, q_1, q_2, q_3, q_4, q_5, q_6, q_7, q_{\text{final}}, q_{\text{rechazo}}\}$$

* **$q_0$**: Estado inicial.
* **$q_{\text{final}}$**: Estado de Aceptación (Acepta).
* **$q_{\text{rechazo}}$**: Estado de Rechazo (Rechaza).

## 2. Alfabeto de Entrada ($\Sigma$)

El conjunto de símbolos que pueden aparecer en la cadena de entrada (`\w`).

$$\Sigma = \{a-z, A-Z, 0-9}$$

* En la tabla de transiciones, este conjunto se representa convenientemente como **W**.



## 3. Alfabeto de la Cinta ($\Gamma$)

El conjunto de todos los símbolos permitidos en la cinta, incluyendo el símbolo de entrada y el blanco.

$$\Gamma = \Sigma \cup \{B\}$$

* **$B$**: El símbolo en **Blanco** (Blank) que denota celdas vacías de la cinta.


## 4. Función de Transición ($\delta$)

La función que define el movimiento y la acción de la máquina en cada paso. (Detallada en la Tabla de Transiciones separada).

$$\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R, S\}$$

* $L$: Mover Izquierda (Left).
* $R$: Mover Derecha (Right).
* $S$: Detener (Stop/Stay).


## 5. Estado Inicial ($q_0$)

El estado por donde empieza el proceso de lectura.

$$q_{\text{inicial}} = q_0$$


## 6. Símbolo Blanco ($B$)

El símbolo que se asume en todas las celdas no utilizadas de la cinta.

$$B$$


## 7. Conjunto de Estados de Aceptación ($F$)

El conjunto de estados que indican que la entrada es válida.

$$F = \{q_{\text{final}}\}$$

## Tabla de Transiciones de la Máquina de Turing (Regex: `^\w{8,}$`)

Esta tabla define la función de transición $\delta(q_{\text{actual}}, S_{\text{leído}}) \to (q_{\text{nuevo}}, S_{\text{escrito}}, D_{\text{movimiento}})$ para reconocer una cadena de 8 o más "caracteres de palabra" (letras, dígitos o guion bajo).

| $q_{\text{actual}}$ | Símbolo Leído ($S_{\text{leído}}$) | $q_{\text{nuevo}}$ | Símbolo Escrito ($S_{\text{escrito}}$) | Movimiento ($D$) | Comentarios |
| :---: | :---: | :---: | :---: | :---: | :--- |
| **$q_0$** | **W** | $q_1$ | **W** | $R$ | Lee el 1er carácter y avanza. |
| **$q_1$** | **W** | $q_2$ | **W** | $R$ | Lee el 2do carácter. |
| **$q_2$** | **W** | $q_3$ | **W** | $R$ | Lee el 3er carácter. |
| **$q_3$** | **W** | $q_4$ | **W** | $R$ | Lee el 4to carácter. |
| **$q_4$** | **W** | $q_5$ | **W** | $R$ | Lee el 5to carácter. |
| **$q_5$** | **W** | $q_6$ | **W** | $R$ | Lee el 6to carácter. |
| **$q_6$** | **W** | $q_7$ | **W** | $R$ | Lee el 7mo carácter. |
| **$q_7$** | **W** | **$q_{\text{final}}$** | **W** | $R$ | **¡Lee el 8vo carácter!** Entra en estado de aceptación. |
| $q_{\text{final}}$ | **W** | $q_{\text{final}}$ | **W** | $R$ | Sigue aceptando caracteres válidos. |
| **$q_{\text{final}}$** | **B** | $q_{\text{final}}$ | **B** | $S$ | La cadena válida ha terminado. **ACEPTA.** |
| **$q_0 \dots q_7$** | **B** | $q_{\text{rechazo}}$ | **B** | $S$ | **RECHAZA** (Longitud menor a 8). |
| **$q_{0 \dots final}$** | $\notin \mathbf{W}$ | $q_{\text{rechazo}}$ | $S_{\text{leído}}$ | $S$ | **RECHAZA** (Símbolo no de palabra $\neq W$). |

***

### Leyenda de Símbolos

* **$\mathbf{W}$**: Representa cualquier **carácter de palabra** (letras $a-z, A-Z$, dígitos $0-9$ o guion bajo **`_`**).
* **$\mathbf{B}$**: El símbolo en **Blanco** de la cinta.

## Diagrama de Transiciones
  <img width="1038" height="394" alt="image" src="https://github.com/user-attachments/assets/b7bb6105-c4bb-4830-b7e2-2579f8b6c03e" />

