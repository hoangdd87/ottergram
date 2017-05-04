/**
 * Created by Hoang on 02-May-17.
 */
(function (window) {
    var $ = window.jQuery;

    function ControlRemoteData() {
    }
    ControlRemoteData.prototype.getAllOtergram = function () {
        if (typeof Model === 'undefined') {
            $.ajaxSetup({async:false});
            $.getScript('js/model.js', function () {
            })
            $.ajaxSetup({async:true});
        }
        otters = [];
        otters.push(new Model.Ottergram("Otter1","Water","img/otter1.jpg"));
        otters.push(new Model.Ottergram("Otter2","Sea","img/otter2.jpg"));
        otters.push(new Model.Ottergram("Otter3","Ocean","img/otter3.jpg"));
        otters.push(new Model.Ottergram("Otter2","Water","img/otter4.jpg"));
        return otters;
    }

    Helper = window.Helper || {};
    Helper.DataStore = ControlRemoteData;
    window.Helper = Helper;
})(window);

(function () {
    d = new Helper.ControlRemoteData();
    console.log(d.getAllOtergram());
})();
