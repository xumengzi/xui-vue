(function(w){
    function A(){
        this.a = 1;
    }
    A.prototype.show = function(){
        return 1 + 1;
    };
    function B(){
        this.a = 1;
    }
    B.prototype.show = function(){
        return 1 + 1;
    };
    // module.exports = new AA;
    w.A = new A;
    w.B = new B;
})(window);

export default (window.A);