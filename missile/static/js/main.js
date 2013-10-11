$('.screen-terminal pre').terminal(
    {
        echo: function(arg1) {
            this.echo(arg1);
        },
        help: function() {
            this.echo('Commands:');
            this.echo('- echo \'text to echo\'');
        },
        up: function(amount) {
            this.exec('move up '+amount);
        },
            u: function(amount) {
                this.exec('move up '+amount);
            },
            higher: function(amount) {
                this.exec('move up '+amount);
            },
        down: function(amount) {
            this.exec('move down '+amount);
        },
            d: function(amount) {
                this.exec('move down '+amount);
            },
            lower: function(amount) {
                this.exec('move down '+amount);
            },
        left: function(amount) {
            this.exec('move left '+amount);
        },
            l: function(amount) {
                this.exec('move left '+amount);
            },
            west: function(amount) {
                this.exec('move left '+amount);
            },
        right: function(amount) {
            this.exec('move right '+amount);
        },
            r: function(amount) {
                this.exec('move right '+amount);
            },
            east: function(amount) {
                this.exec('move right '+amount);
            },
        move: function(move, amount) {
            this.echo('Moving missile launcher [[;#000;#0f0]'+move+'] by [[;#000;#00ee11]'+amount+']');
        },
        matrix: function(color) {
            if(color==="red"){
                $('html').addClass('matrix');
                this.echo('Wake up, Neo...')
            }else{
                $('html').removeClass('matrix');
            }
        }
    },
    {
        greetings: '',
        prompt: '$ '
    }
);
