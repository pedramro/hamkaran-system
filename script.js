const template = document.querySelector(".template")
const navUl = document.querySelector(".nav-ul")
const navTitle = document.querySelectorAll(".nav-title")
const mobileSizeList = document.querySelector(".mobile-size-list")
const mobNavBtn = document.querySelector("#mob-nav-btn")
const mobListItem = document.querySelectorAll('.list-item')
const productsScroll = document.querySelector("#products-scroll")
const companiesWrapper = document.querySelector('.companies-parent')
const body = document.body

window.onresize = resize
resize()

function navListToggle() {
    if (!mobileSizeList.classList.contains('collapse')) {
        mobileSizeList.classList.add('collapse')
        mobNavBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                                </svg>`
    } else {
        mobileSizeList.classList.remove('collapse')
        mobNavBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>`
    }
}

function resize() {
    if (window.innerWidth >= 760) {
        mobNavBtn.style.display = 'none'
        mobileSizeList.classList.remove('collapse')
        mobNavBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>`
    } else {
        mobNavBtn.style.display = 'block'
    }
}

const templateOn = () => template.classList.add('on')
const templateOff = () => template.classList.remove('on')

function navTitleMouseOver(event) {
    template.addEventListener('mouseover', templateOn)
    template.addEventListener('mouseleave', templateOff)
    template.classList.add('on')
    template.style.left = `${event.clientX - 165}px`
    template.style.top = `${event.clientY + 10}px`
}

const navTitleMouseLeave = () => template.classList.remove('on')

Array.from(navTitle).forEach(title => title.addEventListener("mouseover", navTitleMouseOver))
Array.from(navTitle).forEach(title => title.addEventListener("mouseleave", navTitleMouseLeave))

const mobListItemCollapse = (e) => {
    const ul = e.srcElement.childNodes[1]
    ul.classList.toggle('show')
}

Array.from(mobListItem).forEach(item => {
    item.addEventListener('click', mobListItemCollapse)
})

//products by operation scroll
let isDown = false;
let startX;
let scrollLeft;

productsScroll.addEventListener('mousedown', e => {
    console.log(e);
    isDown = true
    productsScroll.style.cursor = 'grabbing'
    startX = e.pageX - productsScroll.offsetLeft;
    scrollLeft = productsScroll.scrollLeft;
    console.log(e.pageX, scrollLeft, startX);
})

productsScroll.addEventListener('mouseleave', () => {
    isDown = false
    productsScroll.style.cursor = 'grab'
})

productsScroll.addEventListener('mouseup', () => {
    isDown = false;
    productsScroll.style.cursor = 'grab'
});

productsScroll.addEventListener('mousemove', (e) => {
if(!isDown) return;
e.preventDefault();
const x = e.pageX - productsScroll.offsetLeft;
const walk = (x - startX) * 1.5;
productsScroll.scrollLeft = scrollLeft - walk;
});

//companies scroll
companiesWrapper.addEventListener('mousedown', e => {
    isDown = true
    companiesWrapper.style.cursor = 'grabbing'
    startX = e.pageX - companiesWrapper.offsetLeft;
    scrollLeft = companiesWrapper.scrollLeft;
})

companiesWrapper.addEventListener('mouseleave', () => {
    isDown = false
    companiesWrapper.style.cursor = 'grab'
})

companiesWrapper.addEventListener('mouseup', () => {
    isDown = false;
    companiesWrapper.style.cursor = 'grab'
});

companiesWrapper.addEventListener('mousemove', (e) => {
if(!isDown) return;
e.preventDefault();
const x = e.pageX - companiesWrapper.offsetLeft;
const walk = (x - startX) * 1.5;
companiesWrapper.scrollLeft = scrollLeft - walk;
});