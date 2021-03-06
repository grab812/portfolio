export function el(selector, context) {
    return (context || document).querySelector(selector)
}

export function els(selector, context) {
    return (context || document).querySelectorAll(selector)
}

function each(list, callback, scope) {
    list.forEach((item, i) => callback.call(scope, item, i))
}

function on(el, type, handler) {
    el.addEventListener(type, handler)
}

function off(el, type, handler) {
    el.removeEventListener(type, handler)
}

function hasClass(el, name) {
    return el.classList.contains(name)
}

function addClass(el, name) {
    var names = name.split(' ')
        each(names, (name) => {
            el.classList.add(name)
        })
    return el
}

function removeClass(el, name) {
    name ? el.classList.remove(name) : (el.className = '')
    return el
}

function toggleClass(el, name) {
    return hasClass(el, name) ? removeClass(el, name) : addClass(el, name)
}

function prependChild(el, html_code) {
    el.insertAdjacentHTML('afterbegin', html_code)
    return el
}

function appendChild(el, html_code) {
    el.insertAdjacentHTML('beforeend', html_code)
    return el
}

function insertBefore(el, html_code) {
    el.insertAdjacentHTML('beforebegin', html_code)
    return el
}

export function insertAfter(el, html_code) {
    el.insertAdjacentHTML('afterend', html_code)
    return el
}

function beforeEl(el, prev) {
    return el.insertAdjacentElement('beforebegin', prev)
}

function afterEl(el, next) {
    return el.insertAdjacentElement('afterend', next)
}

function firstChildEl(el, first) {
    return el.insertAdjacentElement('afterbegin', first)
}

function lastChildEl(el, last) {
    return el.insertAdjacentElement('beforeend', last)
}

export function template(data, fn, lastIdx, startIdx = 0) {
    try {
        return data.slice(startIdx,lastIdx).map(fn).join('')
    } catch (e) {
        console.error(e.message)
    }
}

function getStyle(el, prop, pseudo) {
    return window.getComputedStyle(el, pseudo)[prop]
}

function setStyle(el, prop, value) {
    return (el.style[prop] = value)
}

function css(el, prop, value) {
    var els = []
    if (el && el.nodeType !== 1 && typeof el === 'string') {
        var els = el.split('::')
        el = document.querySelector(els[0])
    }
    var getValue = getStyle(el, prop, els.length ? els[1] : null)
    if (!value) {
        return getValue
    } else {
        if (/^(\+=|-=)/.test(value)) {
        var currentValue = window.parseFloat(getValue, 10)
        var operator = value.substr(0, 2) // += , -=
        var unit = /px/.test(getValue)
            ? 'px'
            : /rem/.test(getValue)
            ? 'rem'
            : /em/.test(getValue)
            ? 'em'
            : ''
        value = window.parseFloat(value.substr(2), 10)
        value = currentValue + (operator === '+=' ? value : -value) + unit
        }
        setStyle(el, prop, value)
    }
}

function width(el) {
    return window.parseFloat(css(el, 'width'), 10)
}

function height(el) {
    return window.parseFloat(css(el, 'height'), 10)
}
function innerWidth(el) {
    return el.clientWidth
}

function innerHeight(el) {
    return el.clientHeight
}

function outerWidth(el, include_margin) {
    return el.offsetWidth + !include_margin
        ? 0
        : window.parseFloat(css(el, 'margin-left'), 10) +
            window.parseFloat(css(el, 'margin-right'), 10)
}

function outerHeight(el, include_margin) {
    return el.offsetWidth + !include_margin
        ? 0
        : window.parseFloat(css(el, 'margin-top'), 10) +
            window.parseFloat(css(el, 'margin-bottom'), 10)
}

function scrollWidth(el) {
    return el.scrollWidth
}

function scrollHeight(el) {
    return el.scrollHeight
}

// 1. ????????? ????????? ????????? ??????????????? ???????????? 
// export const r3 = {el, els, template};

// 2. export 
// ???????????? ?????? ?????? export ???????????? ???????????? ????????????