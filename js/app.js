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
            }
        }
    });
})();
