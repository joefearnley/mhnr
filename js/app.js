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
                var url = 'http://hn.algolia.com/api/v1/search?tags=front_page';
                this.$http.get(url)
                    .then(function successCallback(response) {
                        this.stories = response.data.hits;
                    }, function errorCallback(error) {
                        console.log(error);
                    });
            }
        }
    });
})();
