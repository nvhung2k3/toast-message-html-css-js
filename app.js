function toast({title = '', message = '', type = '', duration = 3000}) 
{
  const main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement('div');

    const autoRemoveId = setTimeout(function(){
        main.removeChild(toast);
    }, duration + 1000);

    toast.onclick = function(e){
        if(e.target.closest('.toast__close')){
            main.removeChild(toast);
            clearTimeout(autoRemoveId);
        }
    }
    const icons = {
        success: 'fas fa-check',
        error : 'fa-solid fa-bug',
        warning :'fas fa-exclamation-triangle',
        infor :'fas fa-info-circle'
    }

    const icon = icons[type];
    toast.classList.add('toast',`toast--${type}`);
    const delay = (duration / 1000).toFixed(2);
    toast.style.animation = `slideInleft ease .3s, fadeOut linear 1s ${delay}s forwards`
    toast.innerHTML = `
        <div class="toast__icon">
        <i class="${icon}"></i>
    </div>
    <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__message">${message}</p>
    </div>
    <div class="toast__close">
        <i class="fas fa-times"></i>
    </div>`;
    main.appendChild(toast);

    
  }
}
const showSuccessToast = document.querySelector('.btn.btn--success');
showSuccessToast.onclick = function(){
    toast({
  title: 'Success',
  message: 'ban da dang ki thanh cong',
  type: 'success',
  duration: 5000,
});
}

const showErrorToast = document.querySelector('.btn.btn--danger');
showErrorToast.onclick = function(){
    toast({
        title: 'Error',
        message: 'ban da dang ki that bai',
        type: 'error',
        duration: 5000,
      });
}

const showWarningToast = document.querySelector('.btn.btn--waring')
showWarningToast.onclick = function(){
    toast({
        title: 'Warning',
        message: 'Canh bao bao mat',
        type: 'warning',
        duration: 5000,
      });
}

const showInforToast = document.querySelector('.btn.btn--infor');
showInforToast.onclick = function(){
    toast({
        title:'Infor',
        message:'Thong tin cua ban',
        type:'infor',
        duration:5000,
    })
}

