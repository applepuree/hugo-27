//
//
// // 等文件全部載入後，我再進來
// $(document).ready(function(){
//     // 填入任何你希望執行的動作
//     //     1. dog 要被點
//     //     2. 禮物要被點
//     //     3. 禮物打開的信要被點
// });
//
// $('你要抓的任何東西的名字').on('click', function () {
//     // 要執行的動作
// });
//
// var dog = $('. ');
//
//
// // 單次點擊
// dog.on('click', function () {
//     // 新增一個 class
//     dog.addClass('dog_effect');
//
//     // 移除一個 class
//     dog.removeClass('dog_effect');
// });
//
//
//

var gift = $('.gift');
var lid = $('.lid');
var ribbonUp = $('.ribbon-top');
var ribbonLeft = $('.ribbon-left');
var ribbonRight = $('.ribbon-right');
var angle = $('.angle');
var card = $('.card')
var letter = $('.letter')

gift.on('click', function () {
    lid.addClass('lid-up');
    ribbonUp.addClass('ribbon-up');
    ribbonLeft.addClass('ribbon-left-up');
    ribbonRight.addClass('ribbon-right-down');
    angle.addClass('angle-up');
    card.addClass('card-up');
});

card.on('click', function () {
    letter.addClass('show-letter');
});