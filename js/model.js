/**
 * Created by Hoang on 02-May-17.
 */
(function (window) {
    function Ottergram(name, livePlace, picture_url) {
        this.name=name;
        this.livePlace=livePlace;
        this.picture_url=picture_url;
    }
    Model=window.Model||{};
    Model.Ottergram=Ottergram;
    window.Model=Model;
})(window);