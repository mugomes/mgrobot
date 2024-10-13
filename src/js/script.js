// Copyright (C) 2004-2024 Murilo Gomes Julio
// SPDX-License-Identifier: MIT

// Site: https://linktr.ee/mugomes

const listaNav = document.querySelectorAll('.mgrobot');

listaNav.forEach(button => {
    button.addEventListener('click', () => {
        const cartaoNome = button.getAttribute('id');
 
        const botaoRemoverAtivo = document.querySelectorAll('.mgrobot');
        botaoRemoverAtivo.forEach(div => {
            div.classList.remove('ativo');
        });

        const cartaoRemoverAberto = document.querySelectorAll('.cartao-mgrobot');
        cartaoRemoverAberto.forEach(div => {
            div.classList.remove('aberto');
        });

        const botaoAtivo = document.getElementById(cartaoNome);
        if (botaoAtivo) {
            botaoAtivo.classList.add('ativo');
        }

        const cartaoAberto = document.getElementById(`cartao-${cartaoNome}`);
        if (cartaoAberto) {
            cartaoAberto.classList.add('aberto');
        }
    });
});
