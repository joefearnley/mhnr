(function() {
    var App = new Framework7();

    new Vue({
        el: '#stories',
        data: {
            stories: [],
            url: 'http://hn.algolia.com/api/v1/search?tags=front_page',
            loading: true,
            error: false
        },
        ready: function() {
            this.fetchStories();
        },
        methods: {
            fetchStories: function() {
                this.$http.get(this.url)
                    .then(function successCallback(response) {
                        this.loading = false;
                        this.stories = response.data.hits;
                    }, function errorCallback(error) {
                        console.log(error);
                    });
            }
        }
    });
})();
