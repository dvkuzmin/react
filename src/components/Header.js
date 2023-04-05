import React, { Component } from "react";


export default function Header(props) {
    return (
        <div>
            <header class="header">
                <button class="header__button header__button--home">Главная</button>
                <div class="header__auth">
                    <button class="header__button header__button--login">Войти</button>
                    <button class="header__button header__button--register">Регистрация</button>
                </div>
            </header>
        </div>
    )
}