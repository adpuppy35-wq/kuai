Vue.component('app-footer', {
    template: `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-col footer-links">
                    <a href="index.html" class="footer-link">главная</a>
                    <a href="favorite.html" class="footer-link">любимое</a>
                    <a href="login.html" class="footer-link">войти</a>
                </div>

                <div class="footer-col footer-top">
                    <button class="top-btn" @click="scrollToTop">↑ наверх</button>
                </div>
            </div>
        </footer>
    `,

    methods: {
        scrollToTop: function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
});
