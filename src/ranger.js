
window.shujaa = window.shujaa || {};

(function (){
    function Ranger (game, name, x, y) {
        this._game = game;
        this._name = name;

        this.initMoverMixin(game, 10);

        this.setPosition(x, y);
        this.setDestination(x, y);
    }

    jQuery.extend(Ranger.prototype, jQuery.eventEmitter);
    jQuery.extend(Ranger.prototype, window.shujaa.MoverMixin);

    window.shujaa.Ranger = Ranger;
})();
