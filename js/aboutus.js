
//進入ESG頁面
function goesg(){
    window.location.href='https://www.cthouse.com.tw/about/csrindex/';
}
//進入訂閱電子報頁面
function goepaper(){
    window.location.href='https://www.cthouse.com.tw/about/epaper.html';
}

//顯示經營理念並標示Tab樣式
function showIdea(){
    $('.tabhistory').removeClass('tabcurrent');
    $('.tabidea').addClass('tabcurrent');
    $('.ItroTextArea').show();
    $('.HistoryTextArea').hide();
}
//顯示中信房屋事記並標示Tab樣式
function showHistory(){
    $('.tabidea').removeClass('tabcurrent');
    $('.tabhistory').addClass('tabcurrent');
    //$('.ItroTextArea').load('histroyText.html')
    $('.ItroTextArea').hide();
    $('.HistoryTextArea').show();
}
//顯示形象廣告
function showImage(){
    $('.tabAdv').removeClass('tabcurrent')
    $('.tabImage').addClass('tabcurrent')
    $('#imgVideo').show()
    $('#advVideo').hide()
}
//顯示形象廣告完整清單
function showImageList(){
    $('.tabAdv').removeClass('tabcurrent')
    $('.tabImage').addClass('tabcurrent')
    $('#imgVideoList').show();
    $('#advlist').hide();
}
//顯示宣傳影片
function showAdv(){
    $('.tabImage').removeClass('tabcurrent')
    $('.tabAdv').addClass('tabcurrent')
    $('#imgVideo').hide()
    $('#advVideo').show()
}
//顯示宣傳影片完整清單
function showAdvList(){
    $('.tabImage').removeClass('tabcurrent')
    $('.tabAdv').addClass('tabcurrent')
    $('#advlist').show();
    $('#imgVideoList').hide();
}

//開啟FB-你的達令
function goFB1(){
    window.open('https://www.facebook.com/DarlinginCThouse/?fref=ts');
}
//開啟FB-中信加在一起
function goFB2(){
    window.open('https://www.facebook.com/profile.php?id=100057308445768');
}
//開啟YT
function goYT(){
    window.open('https://www.youtube.com/user/01187263');
}
