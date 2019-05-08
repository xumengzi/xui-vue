(function(){
    let loadingImg = 'http://img.zcool.cn/community/0108e755a8e87b6ac7258178f9df3f.jpg';
    let notFoundImg = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1820299962,837445788&fm=200&gp=0.jpg';

    const _directive = {};

    //图片加载
    const loadimg = {
        inserted(el, binding){
            //设置默认加载图
            loadingImg && (el.src = loadingImg);
            //监听图片的加载情况,然后进行修改url
            let img = new Image();
            img.src = binding.value;
            img.onload = () =>{
                el.src = binding.value;
            };
            img.onerror = () =>{
                if (notFoundImg) {
                    el.src = notFoundImg;
                } else{
                    let div = document.createElement('div');
                    div.innerHTML = '暂无图片';
                    div.classList.add('noimg');
                    el.parentNode.appendChild(div);
                    el.remove();
                }
            };
        },
    };
    //外层点击
    const clickoutside = {
        bind(el, binding){
            function handleClick(e){
                if (el.contains(e.target)) {
                    return false;
                }
                if (binding.expression) {
                    binding.value(e);
                }
            }
            el.__vueClickOutSide__ = handleClick;
            document.addEventListener('click', handleClick);
        },
        unbind(el){
            document.removeEventListener('click', el.__vueClickOutSide__);
            delete el.__vueClickOutSide__;
        }
    };
    //输入框限制
    const inputlimit = {
        update(el, binding){
            function checkLegal(type, str) {
                let reg;
                switch (type) {
                    case "name":
                        reg = /^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/;
                        break;
                    case "mobile":
                        reg = /^1[34578]\d{9}$/;
                        break;
                    case "email":
                        reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
                        break;
                }
                return reg.test(str);
            }
            let bool = checkLegal(binding.arg, el.value);
            function eventHandler(){
                if (!bool) {
                    el.value = '';
                }
            }
            //事件绑定在binding.arg上面
            el.onblur = eventHandler;
        },
    };
    //复制到剪贴板
    const copytoclipboard = {
        bind(el, binding){
            if (binding.arg == 'click') {
                el.onclick = copy;
            } else{
                el.onfocus = copy;
            }
            function copy(){
                if (document.execCommand('copy')) {
                    if (el.select) {
                        el.select();
                        el.focus();
                        el.setSelectionRange(0, el.value.length);
                    } else{
                        document.querySelector('.fake_input_value') && document.querySelector('.fake_input_value').remove();
                        let fakeInput = document.createElement('input');
                        fakeInput.style.position = 'absolute';
                        fakeInput.style.left = '-100%';
                        fakeInput.value = binding.value;
                        fakeInput.classList.add('fake_input_value');
                        fakeInput.setSelectionRange(0, el.value.length);
                        document.body.appendChild(fakeInput);
                        document.querySelector('.fake_input_value').select();
                        document.querySelector('.fake_input_value').focus();
                    }
                    document.execCommand('copy');
                    document.querySelector('.fake_input_value') && document.querySelector('.fake_input_value').remove();
                } else{
                    alert('请手动复制!');
                }
            }
        },
        unbind(){
            document.querySelector('.fake_input_value') && document.querySelector('.fake_input_value').remove();
        }
    };

    _directive.install = function(Vue){
        Vue.directive('loadimg', loadimg);
        Vue.directive('clickoutside', clickoutside);
        Vue.directive('inputlimit', inputlimit);
        Vue.directive('copytoclipboard', copytoclipboard);
    };

    module.exports = _directive;
})();