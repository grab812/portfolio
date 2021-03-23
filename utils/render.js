export default function render(vNode, domNode = document.body) {
    domNode.appendChild(vNode);
}