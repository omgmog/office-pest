$('.screen-terminal pre').terminal(function(cmd, term) {
    if (cmd.match(/help/)) {
        term.echo('There is no helping you.');
    }
    if(cmd.match(/^up\s/)) {
        term.echo('Pushed up');
    }

    if(cmd.match(/^matrix(\s\w)+/)) {
        var args = cmd.split(' ');
            args.shift();
        console.log(args);
        if(args[0] === 'red'){
            $('html').addClass('matrix');
        }else{
            $('html').removeClass('matrix');
        }

    }
},
{
    prompt: '→ ',
    name: 'pest',
    greetings:  false,
    onInit: function (term){
        $('.key').on('click', function() {
            switch(($(this).attr('class').split(' ')[1])) {
                case 'up':
                    term.exec('up 100');
                break;
                case 'down':
                    term.exec('down 100');
                break;
                case 'left':
                    term.exec('left 100');
                break;
                case 'right':
                    term.exec('right 100');
                break;
                case 'space':
                    term.exec('shoot 1');
                break;
                case 'enter':
                    term.exec('led 1');
                break;
                case 'esc':
                    term.exec('led 0');
                break;
                default:
                    term.echo('That\'s not a key I\'m familiar with!');
                break;
            }
            term.focus(true);
        });
    }
});
