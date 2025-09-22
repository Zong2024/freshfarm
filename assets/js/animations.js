// 選單固定在上的效果
export function initStickyHeader(selector) {    
    const header = document.querySelector(selector);
    if (!header) {
        console.error(`找不到元素：${selector}`);
        return;
    }
    const stickyPoint = header.offsetTop;

    function handleScroll() {
        if (window.pageYOffset > stickyPoint) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
}