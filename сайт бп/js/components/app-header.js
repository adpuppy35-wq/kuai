Vue.component('app-header', {
    template: `
        <header class="header">
            <div class="header-container">
                <a href="index.html" class="logo">kuai</a>
                <button class="burger-btn" @click="toggleMenu" :class="{ active: menuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav class="dropdown-menu" :class="{ open: menuOpen }">
                <div class="menu-items">
                    <a href="index.html" class="menu-link" @click="closeMenu">главная</a>
                    <a href="favorite.html" class="menu-link" @click="closeMenu">любимое</a>
                    <a href="login.html" class="menu-link" @click="closeMenu">войти</a>
                </div>
            </nav>
        </header>
    `,

    data: function() {
        return {
            menuOpen: false
        };
    },

    methods: {
        toggleMenu: function() {
            this.menuOpen = !this.menuOpen;
        },
        closeMenu: function() {
            this.menuOpen = false;
        }
    }
});
