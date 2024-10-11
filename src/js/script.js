// Copyright (C) 2004-2024 Murilo Gomes Julio
// SPDX-License-Identifier: MIT

// Site: https://linktr.ee/mugomes

const buttons = document.querySelectorAll('.mgrobot');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.getAttribute('id');
 
        const oculta1 = document.querySelectorAll('.mgrobot');
        oculta1.forEach(div => {
            div.classList.remove('ativo');
        });

        const oculta2 = document.querySelectorAll('.cartao-mgrobot');
        oculta2.forEach(div => {
            div.classList.remove('aberto');
        });

        const mostra1 = document.getElementById(nome);
        if (mostra1) {
            mostra1.classList.add('ativo');
        }

        const mostra2 = document.getElementById(`cartao-${nome}`);
        if (mostra2) {
            mostra2.classList.add('aberto');
        }
    });
});