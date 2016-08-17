(function() {
    var App = new Framework7();

    new Vue({
        el: '#stories',
        data: {
            stories: [],
            loading: true,
            error: false
        },
        ready: function() {
            this.fetchStories();
        },
        methods: {
            fetchStories: function() {
                this.$http.get('http://hn.algolia.com/api/v1/search?tags=front_page')
                    .then(function successCallback(response) {
                        this.loading = false;
                        this.stories = response.data.hits;
                    }, function errorCallback(error) {
                        console.error(error);
                    });
            }
        }
    });
})();
