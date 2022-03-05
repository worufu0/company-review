var pageName = 'homepage',
  headerClass = ($isMobile = !!$('.mobile_search')[0]) ? '.main-header-menu' : '.main-menu',
  positionOfCover =
    ($(document).ready(function () {
      function initSlider(sliderId) {
        var sliderWrap = $('#' + sliderId),
          sliderObj = sliderWrap.lightSlider({
            item: 3,
            autoWidth: !1,
            slideMove: 2,
            slideMargin: window.innerWidth < 767 ? 10 : 14,
            addClass: '',
            mode: 'slide',
            useCSS: !0,
            cssEasing: 'ease',
            easing: 'linear',
            speed: 300,
            auto: !1,
            loop: !1,
            slideEndAnimation: !0,
            pause: 2e3,
            keyPress: !0,
            controls: !1,
            prevHtml: '',
            nextHtml: '',
            rtl: !1,
            adaptiveHeight: !1,
            vertical: !1,
            pager: !1,
            currentPagerPosition: 'middle',
            enableTouch: !0,
            enableDrag: !0,
            freeMove: !0,
            swipeThreshold: 40,
            responsive: [
              { breakpoint: 900, settings: { item: 2, slideMove: 2, speed: 200 } },
              { breakpoint: 600, settings: { item: 1.2, slideMove: 1, speed: 100 } },
            ],
            onBeforeStart: function (el) {},
            onSliderLoad: function (el) {
              sliderWrap.removeClass('slider_default'),
                el.getTotalSlideCount() < 3 && sliderWrap.parent().parent().siblings('.slider_next').addClass('hidden_control');
            },
            onBeforeSlide: function (el) {},
            onAfterSlide: function (el) {
              1 < el.getCurrentSlideCount() && sliderWrap.parent().parent().siblings('.slider_prev').removeClass('hidden_control'),
                1 == el.getCurrentSlideCount() && sliderWrap.parent().parent().siblings('.slider_prev').addClass('hidden_control'),
                2 * el.getCurrentSlideCount() + 1 >= el.getTotalSlideCount()
                  ? sliderWrap.parent().parent().siblings('.slider_next').addClass('hidden_control')
                  : el.getCurrentSlideCount() < el.getTotalSlideCount() - 2 &&
                    sliderWrap.parent().parent().siblings('.slider_next').removeClass('hidden_control');
            },
            onBeforeNextSlide: function (el) {},
            onBeforePrevSlide: function (el) {},
          });
        sliderWrap
          .parent()
          .parent()
          .siblings('.slider_next')
          .click(function () {
            sliderObj.goToNextSlide();
          }),
          sliderWrap
            .parent()
            .parent()
            .siblings('.slider_prev')
            .click(function () {
              sliderObj.goToPrevSlide();
            });
      }
      $('.search').hide(),
        $(headerClass).addClass('blue-menu'),
        initSlider('reviewsSlider'),
        initSlider('salariesSlider'),
        initSlider('interviewsSlider'),
        initSlider('desigSalariesSlider'),
        initSlider('jobsSlider');
    }),
    $('.cover_image_wrap').position().top + $('.cover_image_wrap').outerHeight(!0) - $(headerClass).outerHeight(!0));
function checkRedirectToFeed() {
  $.ajax({
    url: '/api/v2/user/preferences?entity=jobprofile',
    type: 'GET',
    success: function (response) {
      var response = response.data;
      response && Object.keys(response).length && (response = response.jobprofile) && response.length && window.location.replace('/feed');
    },
  });
}
$isMobile && (positionOfCover -= 24),
  $(document).scroll(function (e) {
    var scrollPos = $(window).scrollTop();
    positionOfCover <= scrollPos
      ? ($(headerClass).removeClass('blue-menu'), $isMobile && $('.search').show())
      : ($(headerClass).addClass('blue-menu'), $isMobile && $('.search').hide());
  }),
  $('.searchForm').click(function () {
    $('.js-show-search').click();
  });
