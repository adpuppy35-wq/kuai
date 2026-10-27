var app = new Vue({
    el: '#app',

    data: {
        // menuOpen: false,
        searchString: '',


        articles: [
            {
                id: 1,
                image: 'imgs/article_1.jpg',
                tag: 'лексика',
                title: 'Приветствие и прощание',
                excerpt: 'Нихао!: слова и фразы для начала и конца полёта',
                url: 'nihao.html'
            },
            {
                id: 2,
                image: 'imgs/article_2.jpg',
                tag: 'лексика',
                title: 'Салон и оборудование',
                excerpt: 'АСО, БКО, элементы салона для размещения пассажиров и взаимодействия со смежными службами',
                url: 'article_2.html'
            },
            {
                id: 3,
                image: 'imgs/article_3.jpeg',
                tag: 'лексика',
                title: 'Основное обслуживание',
                excerpt: 'Этапы обслуживания: мягкий инвентарь и питание для пассажиров',
                url: 'article_3.html'
            },
            {
                id: 4,
                image: 'imgs/article_4.jpg',
                tag: 'разговорник',
                title: 'В аэропорту',
                excerpt: 'Основные фразы в аэропорту, при взаимодействии со смежными службами',
                url: 'article_4.html'
            },
            {
                id: 5,
                image: 'imgs/article_5.jpg',
                tag: 'разговоринк',
                title: 'В отеле',
                excerpt: 'Размещение и взаимодействия с ресепшн, прачечной, другими службами отеля',
                url: 'article_5.html'
            },
            {
                id: 6,
                image: 'imgs/article_6.jpg',
                tag: 'путеводитель',
                title: 'Путеводитель: Пекин',
                excerpt: 'Площадь Тяньанмен, Запретный Город, храмы и хутуны, особенности проживания в Пекине',
                url: 'article_6.html'
            },
            {
                id: 7,
                image: 'imgs/article_7.jpg',
                tag: 'путеводитель',
                title: 'Путеводитель: Шанхай',
                excerpt: 'Банд, Восточная жемчужина, французская концессия: что делать в Шанхае',
                url: 'article_7.html'
            }
        ]
    },


    computed: {
        filteredArticles: function () {
            var search = this.searchString.trim().toLowerCase();
            if (!search) return this.articles;

            return this.articles.filter(function (article) {
                var title = article.title.toLowerCase();
                var excerpt = article.excerpt.toLowerCase();
                var tag = article.tag.toLowerCase();
                return title.indexOf(search) !== -1 ||
                    excerpt.indexOf(search) !== -1 ||
                    tag.indexOf(search) !== -1;
            });
        },
    },

});
