// Copyright (C) 2004-2024 Murilo Gomes Julio
// SPDX-License-Identifier: MIT

// Site: https://linktr.ee/mugomes

const buttons = document.querySelectorAll('.mgrobot');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.getAttribute('id');
 
        const oculta = document.querySelectorAll('.cartao-mgrobot');
        oculta.forEach(div => {
            div.classList.remove('aberto');
        });

        const mostra = document.getElementById(`cartao-${nome}`);
        if (mostra) {
            mostra.classList.add('aberto');
        }
    });
});