
//顯示lightbox
function showVideo(ytId){
    //videoSrc=$('.'+classId+'>.videoView>img').attr('src')
    videoSrc="https://www.youtube.com/embed/"+ytId

    lightBox="<div id='videLightBox' class='maskbg' onclick='closeLightBox()'>"+
    "<div class='topControl'><a class='fa-solid fa-xmark' onclick='closeLightBox()'></a></div>"+
    "<div class='video'></div></div>"
    $('body').append(lightBox)
    iframeWidth=$('.video').width()
    iframeHeight=$('.video').height()
    console.log('iframeWidth:'+iframeWidth+'|iframeHeight:'+iframeHeight)
    iframe="<iframe width="+iframeWidth+" height="+iframeHeight+" src='"+videoSrc+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
    $('.video').append(iframe)
}
//關閉LightBox
function closeLightBox(){
    $('#videLightBox').remove()
}