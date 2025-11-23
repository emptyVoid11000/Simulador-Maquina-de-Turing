# Simulador-Maquina-de-Turing
## ⚙️ Tabla de Transiciones de la Máquina de Turing (Regex: `^\w{8,}$`)

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

### 🔑 Leyenda de Símbolos Actualizada

* **$\mathbf{W}$**: Representa cualquier **carácter de palabra** (letras $a-z, A-Z$, dígitos $0-9$ o guion bajo **`_`**).
* **$\mathbf{B}$**: El símbolo en **Blanco** de la cinta.
* **$R$**: Movimiento a la **Derecha** (Right).
* **$S$**: **Detener** (Stop/Stay) la máquina.
