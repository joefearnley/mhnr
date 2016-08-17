(function() {
    var App = new Framework7();

    new Vue({
        el: '#stories',
        data: {
            stories: []
        },
        ready: function() {
            this.fetchStories();
        },
        methods: {
            fetchStories: function() {
                this.$http.get('http://hn.algolia.com/api/v1/search?tags=front_page')
                    .then(function successCallback(response) {
                        this.stories = response.data.hits;
                    }, function errorCallback(error) {
                        console.error(error);
                    });
            },
            fetchComments: function(id) {
                var url = 'http://hn.algolia.com/api/v1/items/' + id;
                this.$http.get(url)
                    .then(function successCallback(response) {
                        console.log(response.data.children);
                    });
            }
        }
    });
})();
