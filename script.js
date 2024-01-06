const wrapper = document.querySelector(".wrapper");
qrinp = wrapper.querySelector(".form input");
genbtn = wrapper.querySelector(".form button");
qrimg = wrapper.querySelector(".qr-code img");
const shrbtn = document.querySelector("#share-btn");
let preval;
const contentToShare = 'YOUR_CONTENT_TO_SHARE';

genbtn.addEventListener("click",()=>{
    let qrval = qrinp.value;
    if(!qrval || preval === qrval) return;
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrval}`
    wrapper.classList.add("active");
    qrimg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        genbtn.innerText = "Generate QR Code";
    });
});

qrinp.addEventListener("keyup",()=>{
    if(!qrinp.value.trim()){
        wrapper.classList.remove("active");
        preval = "";
    }
});

shrbtn.addEventListener("click",()=>{
    if(navigator.share){
        navigator.share({
            title: 'share QR Code',
            text: 'check out this QR Code!',
            url: contentToShare,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
        }else{
            alert('Web Share API is not supported in this browser.');
        }
});
