
const navMenuItems = document.querySelectorAll('#nav-menu a');
const indicator = document.querySelector('.indicator');
 
// 设置指示器的点击切换
function handleMenuItemClick(target){
    navMenuItems.forEach(item=>{
        item.classList.remove('active');
        item.style='';
    });
    target.classList.add('active');
    indicator.style.width =`${target.offsetWidth}px`;
    indicator.style.left = `${target.offsetLeft}px`;
 
    //设置要展示的内容
    const cueerntSection = document.querySelector('.active-section');
    cueerntSection.classList.remove('active-section');
    const newCurrentSection = document.querySelector(`.${target.getAttribute('data-rel')}`);
    newCurrentSection.classList.add('active-section');
}
 
navMenuItems.forEach(item=>{
    item.addEventListener('click',e=>handleMenuItemClick(e.target));
    item.classList.contains('active') && handleMenuItemClick(item);
});