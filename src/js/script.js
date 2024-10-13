// Copyright (C) 2004-2024 Murilo Gomes Julio
// SPDX-License-Identifier: MIT

// Site: https://linktr.ee/mugomes

const listaNav = document.querySelectorAll('.mgrobot');

listaNav.forEach(button => {
    button.addEventListener('click', () => {
        const cartaoNome = button.getAttribute('id');

        const botaoRemoverAtivo = document.querySelector('.ativo');
        botaoRemoverAtivo.classList.remove('ativo');

        const cartaoRemoverAberto = document.querySelector('.aberto');
        cartaoRemoverAberto.classList.remove('aberto');

        const botaoAtivo = document.getElementById(cartaoNome);
        botaoAtivo.classList.add('ativo');

        const cartaoAberto = document.getElementById(`cartao-${cartaoNome}`);
        cartaoAberto.classList.add('aberto');
    });
});
