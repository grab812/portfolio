export { default as rendering } from '../../utils/render.js';
export default class Button {
    constructor (type, props, contextText){
        this.elementType = type;
        this.props = {...Button.defaultProps, ...props};
        this.contextText = contextText;
        this.#init();
        // console.log(this.#filterItemOfPropsArray());
    }
    
    static elementType = 'button'
    static defaultProps = {
        type : 'button',
        className: 'Button'
    }

    #node = null;
    #children = null;
    #propsArray = [];
    #init(){
        // button 엘리먼트를 생성
        this.#createNode();
        // 사용자정의 + 기본정의 props를 배열로 전달
        this.#transmissonPropsArray();
        this.#setChildren();
        this.#setProps();
        this.#bindEvents();
    }

    #createNode(){
        this.#node = document.createElement(this.elementType);
    }

    #transmissonPropsArray(){
        this.#propsArray = Object.entries(this.props);
        // this.#propsArray = Object.values(this.props);
        // this.#propsArray = Object.keys(this.props);
    }

    // itemKey를 제외한 propsArray를 담는다
    #filterItemOfPropsArray(itemKey){
        this.#propsArray = this.#propsArray.filter(([key]) => key !== itemKey);
    }

    // 속성의 children속성 img 태그를 자식엘리먼트로 생성하고
    // #propsArray에 className 속성을 제외한 나머지 속성을 #propsArray에 할당한다
    // 전달 받은 속성을 토대로 button 요소 노드에 속성을 설정
    #setChildren(){
        this.#children = this.#propsArray.filter(([key])=>key === 'children')[1];
        this.#node.insertAdjacentHTML('afterbegin', this.#children);
        this.#node.innerHTML = this.contextText;
        this.#filterItemOfPropsArray('children');
    }

    // 정규표현식으로 props의 onclick메서드를 제외한 #propsArray를 재할당하고
    // 나머지 속성을 setAttribute(요소의 속성값을 넣음) 시킨다
    #setProps(){
        this.#propsArray
            .filter(([key]) => !key.match(/^on.+/))
            .forEach(([key,value])=>{
                if(/className/.test(key)){
                    this.#node.className = value;
                }else{
                    this.#node.setAttribute(key,value);
                }
            });
    }

    #bindEvents() {
        // 이벤트 속성만을 찾아서 요소 노드에 설정
        this.#propsArray
          .filter(([key]) => key.match(/^on.+/))
          .forEach(([key, value]) => {
            this.#node.addEventListener(key.replace(/^on/, '').toLowerCase(), value.bind(this));
        });
    }

    /* -------------------------------------------------------------------------- */
    // 공개 멤버

    // 컴포넌트 상태
    state = {
        isDisabled: false,
        isActive: false
    };

    disabled() {
        this.#node.disabled = true;
    }

    enabled() {
        this.#node.disabled = false;
    }

    active(newImgResource) {
        const node = this.#node;
        node.classList.remove('Button--normal');
        node.classList.add('Button--active');
        // node.querySelector('img').setAttribute('src', newImgResource);
    }

    render() {
        return this.#node;
    }
}