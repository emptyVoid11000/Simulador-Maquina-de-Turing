# Simulador-Maquina-de-Turing
## ⚙️ Tabla de Transiciones de la Máquina de Turing (Regex: `^[a-zA-Z0-9]{8,}$`)

Esta tabla define la función de transición $\delta(q_{\text{actual}}, S_{\text{leído}}) \to (q_{\text{nuevo}}, S_{\text{escrito}}, D_{\text{movimiento}})$ para reconocer una cadena de 8 o más caracteres alfanuméricos.

| $q_{\text{actual}}$ | Símbolo Leído ($S_{\text{leído}}$) | $q_{\text{nuevo}}$ | Símbolo Escrito ($S_{\text{escrito}}$) | Movimiento ($D$) | Comentarios |
| :---: | :---: | :---: | :---: | :---: | :--- |
| **$q_0$** | **A** | $q_1$ | **A** | $R$ | Lee el 1er carácter y avanza. |
| **$q_1$** | **A** | $q_2$ | **A** | $R$ | Lee el 2do carácter. |
| **$q_2$** | **A** | $q_3$ | **A** | $R$ | Lee el 3er carácter. |
| **$q_3$** | **A** | $q_4$ | **A** | $R$ | Lee el 4to carácter. |
| **$q_4$** | **A** | $q_5$ | **A** | $R$ | Lee el 5to carácter. |
| **$q_5$** | **A** | $q_6$ | **A** | $R$ | Lee el 6to carácter. |
| **$q_6$** | **A** | $q_7$ | **A** | $R$ | Lee el 7mo carácter. |
| **$q_7$** | **A** | **$q_{\text{final}}$** | **A** | $R$ | **¡Lee el 8vo carácter!** Entra en estado de aceptación. |
| $q_{\text{final}}$ | **A** | $q_{\text{final}}$ | **A** | $R$ | Sigue aceptando caracteres válidos. |
| **$q_{\text{final}}$** | **B** | $q_{\text{final}}$ | **B** | $S$ | La cadena válida ha terminado. **ACEPTA.** |
| **$q_0 \dots q_7$** | **B** | $q_{\text{rechazo}}$ | **B** | $S$ | **RECHAZA** (Longitud menor a 8). |
| **$q_{0 \dots final}$** | $\notin \Sigma$ | $q_{\text{rechazo}}$ | $S_{\text{leído}}$ | $S$ | **RECHAZA** (Símbolo no alfanumérico $\neq A$). |

***

### 🔑 Leyenda de Símbolos

* **$\mathbf{A}$**: Representa cualquier carácter **alfanumérico** (letras o dígitos) $\in \Sigma$.
* **$\mathbf{B}$**: El símbolo en **Blanco** de la cinta.
* **$R$**: Movimiento a la **Derecha** (Right).
* **$S$**: **Detener** (Stop/Stay) la máquina.
* **$q_{\text{final}}$**: Estado de **Aceptación**.
* **$q_{\text{rechazo}}$**: Estado de **Rechazo**.
