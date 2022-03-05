var _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var key,
          source = arguments[i];
        for (key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
      }
      return target;
    },
  _typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (obj) {
          return typeof obj;
        }
      : function (obj) {
          return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
        },
  _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        (descriptor.enumerable = descriptor.enumerable || !1),
          (descriptor.configurable = !0),
          'value' in descriptor && (descriptor.writable = !0),
          Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      return (
        protoProps && defineProperties(Constructor.prototype, protoProps),
        staticProps && defineProperties(Constructor, staticProps),
        Constructor
      );
    };
  })();
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
    return arr2;
  }
  return Array.from(arr);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}
var defaultNotifications = [
    {
      Id: 1,
      Status: 0,
      Data: {
        Title: 'Personalize your experience by signing up',
        CTAText: 'Sign up now',
        Icon: 'https://static.ambitionbox.com/alpha/company/photos/logos/ambition-box.jpg',
      },
      ShowPopup: !0,
      Default: 1,
      Created: '',
    },
  ],
  LocalStorage = (function () {
    function LocalStorage() {
      _classCallCheck(this, LocalStorage);
    }
    return (
      _createClass(LocalStorage, null, [
        {
          key: 'get',
          value: function () {
            var key = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            try {
              if (key) return JSON.parse(localStorage.getItem(key));
              throw new Error('Invalid key');
            } catch (error) {
              return !1;
            }
          },
        },
        {
          key: 'set',
          value: function () {
            var key = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
              value = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            try {
              if (value && key) return localStorage.setItem(key, JSON.stringify(value)), !0;
              throw new Error('Invalid value');
            } catch (error) {
              return !1;
            }
          },
        },
      ]),
      LocalStorage
    );
  })(),
  SessionStorage = (function () {
    function SessionStorage() {
      _classCallCheck(this, SessionStorage);
    }
    return (
      _createClass(SessionStorage, null, [
        {
          key: 'get',
          value: function () {
            var key = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            return !(!key || !sessionStorage) && JSON.parse(sessionStorage.getItem(key));
          },
        },
        {
          key: 'set',
          value: function () {
            var key = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
              value = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            return !!(key && value && sessionStorage) && (sessionStorage.setItem(key, JSON.stringify(value)), !0);
          },
        },
      ]),
      SessionStorage
    );
  })();
function checkIsMobile() {
  var isMobile = $(window).width <= 768;
  return (isMobile =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
      ? !0
      : isMobile);
}
var Sanitize = (function () {
    function Sanitize() {
      _classCallCheck(this, Sanitize);
    }
    return (
      _createClass(Sanitize, null, [
        {
          key: 'sanitiseHtml',
          value: function (str) {
            if (!str || 'string' != typeof str) return '';
            var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '/': '&#x2F;' };
            return str.replace(/[&<>"'/]/gi, function (match) {
              return map[match];
            });
          },
        },
        {
          key: 'stripSpecialCharFromInput',
          value: function (event, input) {
            ['<', '>'].some(function (char) {
              return event.target.value.includes(char);
            }) && input.typeahead('val', event.target.value.replace(/[<>]/gi, ''));
          },
        },
      ]),
      Sanitize
    );
  })(),
  Format = (function () {
    function Format() {
      _classCallCheck(this, Format);
    }
    return (
      _createClass(Format, null, [
        {
          key: 'moneyFormat',
          value: function (value) {
            return (value = value
              .toString()
              .replace(/\D/g, '')
              .replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
          },
        },
      ]),
      Format
    );
  })();
function checkIfFollowed(cid) {
  return new Promise(function (resolve, reject) {
    $.get('/api/v2/user/track/follow?cid=' + cid)
      .done(function (data) {
        data.status ? resolve(data) : reject(data.errors.join());
      })
      .fail(function () {
        reject('Failed. Please try again!');
      });
  });
}
function deleteInvalidGaCookie() {
  for (var pairs = document.cookie.split(';'), _i = pairs.length - 1; 0 <= _i; _i--) {
    var _pair = pairs[_i].split('=');
    '_ga' == _pair[0].trim() &&
      33 < _pair[1].length &&
      (document.cookie = '_ga=;  Domain=.ambitionbox.com;  Path=/;  Expires=Thu, 01 Jan 1970 00:00:01 GMT;');
  }
}
(window.notify = function (message, type, keepItOn) {
  var notification;
  return (
    $('#notification-block').slideDown(100),
    (keepItOn = void 0 !== keepItOn ? keepItOn : 'boolean' == typeof type && type),
    null != (type = void 0 === type || 'boolean' == typeof type ? 'info' : type)
      ? ((notification = $('#notification-block > .main-notification')),
        type.toLowerCase(),
        (notification[0].classList = ['main-notification']),
        'attention' === type
          ? $(notification).addClass('warn')
          : 'error' === type
          ? $(notification).addClass('error')
          : 'success' === type && $(notification).addClass('success'),
        $('#notification-block #message').html(message),
        notification.css({ height: 'max-content', position: 'relative' }),
        $(notification).css('transform', 'translate(0,2.5rem)'),
        keepItOn ||
          setTimeout(function () {
            $(notification).css('transform', 'translate(0,-7rem)'),
              $('#notification-block #message').html('Please wait we are resolving the issue'),
              setTimeout(function () {
                $('#notification-block').slideUp();
              }, 200);
          }, 3e3))
      : ($(notification).css('transform', 'translate(0,2.5rem)'),
        setTimeout(function () {
          $(notification).css('transform', 'translate(0,-7rem)'),
            $('#notification-block #message').html('Please wait we are resolving the issue'),
            $('#notification-block').slideUp(200);
        }, 3e3)),
    !1
  );
}),
  deleteInvalidGaCookie();
for (var logEventDom = document.querySelectorAll('[status]'), i = logEventDom.length - 1; 0 <= i; i--)
  if (logEventDom[i].hasAttribute('logAction')) {
    var params = logEventDom[i].attributes.logAction.value.split(',');
    if ('Company' == params[0] && 'Follow' == params[1]) {
      for (var pairs = document.cookie.split(';'), allCookies = {}, i = pairs.length - 1; 0 <= i; i--) {
        var pair = pairs[i].split('=');
        'usr_data' == (pair[0] + '').trim() && (allCookies[(pair[0] + '').trim()] = decodeURIComponent(pair[1]));
      }
      if (allCookies.usr_data)
        try {
          checkIfFollowed(params[2]).then(
            function (data) {
              data.data instanceof Object && $('.follow-btn')[0] && $('.follow-btn')[0].setAttribute('status', data.data.Followed);
            },
            function (reason) {}
          );
        } catch (e) {}
    } else {
      var statusCacheKey = 'status-' + params[0] + '-' + params[1] + '-' + params[2];
      null !== localStorage.getItem(statusCacheKey) &&
        '1' != logEventDom[i].getAttribute('status') &&
        logEventDom[i].setAttribute('status', localStorage.getItem(statusCacheKey));
    }
  }
function toK(num) {
  return num < 1e3 ? num : Math.round((num / 1e3) * 10) / 10 + 'k';
}
function eventTracker(e) {
  var clickedElement = window.event ? window.event.srcElement : e.target;
  document.getElementsByTagName(clickedElement.tagName);
  if (clickedElement.hasAttribute('ga'))
    switch ((gaParams = clickedElement.attributes.ga.value.split(',').slice(0, 4)).length) {
      case 4:
        ga('send', 'event', gaParams[0], gaParams[1], gaParams[2], gaParams[3]);
        break;
      case 3:
        ga('send', 'event', gaParams[0], gaParams[1], gaParams[2]);
        break;
      default:
        ga('send', 'event', gaParams[0], gaParams[1]);
    }
  if (clickedElement.hasAttribute('logAction') && 'function' == typeof logAction) {
    for (
      var paramIndexNames = ['Category', 'Action', 'Identifier', 'Data'],
        gaParams = clickedElement.attributes.logAction.value.split(','),
        logData = {},
        e = void 0,
        i = gaParams.length - 1;
      0 <= i;
      i--
    )
      logData[paramIndexNames[i]] = gaParams[i];
    if ('Company' == logData.Category && 'Follow' == logData.Action) {
      if (!isLogedIn())
        return (
          notify('Login to follow this company', 'attention'),
          void setTimeout(function () {
            loginPopUp();
          }, 1e3)
        );
      (e = '/api/v2/user/' + (0 < clickedElement.attributes.status.value ? 'unsubscribe' : 'subscribe')),
        (logData = { Entity: 'company', Id: logData.Identifier });
    } else isLogedIn() || loginPopUp();
    logAction(logData, e).then(
      function (data) {
        var count, status;
        clickedElement.hasAttribute('opcount') &&
          ((status = parseInt(clickedElement.attributes.status.value)),
          (count = parseInt(clickedElement.attributes.opcount.value)),
          (status = data.data.deltaCount
            ? ((data.data.deltaCount = parseInt(data.data.deltaCount)), (count += data.data.deltaCount), 1 == data.data.deltaCount ? 1 : 0)
            : ((count = 0 < status ? count - 1 : count + 1), 0 < status ? 0 : 1)),
          clickedElement.setAttribute('opcount', count),
          clickedElement.setAttribute('count', toK(count)),
          clickedElement.setAttribute('status', status),
          clickedElement.classList.contains('follow-btn') &&
            (0 < count ? $(clickedElement).addClass('button-with-count') : $(clickedElement).removeClass('button-with-count'))),
          clickedElement.hasAttribute('status') &&
            ((data = 'status-' + logData.Category + '-' + logData.Action + '-' + logData.Identifier), localStorage.setItem(data, status));
      },
      function (reason) {
        ('function' == typeof notify ? notify : alert)(reason);
      }
    );
  }
}
$(document).ready(function () {
  var comp = new RegExp('^((http(s)?://)(?!(ambitionbox.com|' + location.host + '))).*');
  $('a').each(function () {
    void 0 !== $(this).attr('href') &&
      comp.test($(this).attr('href')) &&
      void 0 === $(this).attr('target') &&
      $(this).attr('target', '_blank');
  });
}),
  (document.onclick = eventTracker);
var customLoginProps = null,
  inputTerm = null,
  CLIENT_ID =
    0 <= window.location.hostname.indexOf('ambitionbox')
      ? '462822053404-hphug4pkahqljh2tc96g35at47o4isv2.apps.googleusercontent.com'
      : '320727912760-nlq1avc137k0m0osate38d057aag3nhe.apps.googleusercontent.com',
  googleUser =
    (($isMobile = !!$('.mobile_search')[0]),
    $('.js-user-menu').on('click', function () {
      return $('.user-menu').fadeToggle(300), !1;
    }),
    {}),
  startApp = function () {
    'undefined' != typeof gapi &&
      gapi &&
      gapi.load('auth2', function () {
        (auth2 = gapi.auth2.init({
          client_id: CLIENT_ID,
          cookiepolicy: 'single_host_origin',
          scope: 'https://www.googleapis.com/auth/user.gender.read',
        })),
          $('#googleLoginBtn').on('click', function () {
            return googleLogin();
          }),
          $('#customBtn').on('click', function () {
            return googleLogin();
          });
      });
  };
function googleLogin() {
  ga('send', 'event', 'loginClickGa', 'google');
  try {
    postUbaData('userAction', { actionType: 'click', clickLabel: 'login', authType: 'google', pageName: pageName });
  } catch (e) {}
  $('input[name=ReadDisclaimer1]').is(':checked')
    ? auth2
        .signIn()
        .then(function (googleUser) {
          onSignIn(googleUser);
        })
        .catch(function (err) {
          notify('Error occured: ' + err.error, 'error'),
            setErrorPayload({
              errorMessage: err.message || err.error,
              errorType: 'google auth',
              errorLevel: 'fatal',
              pageName: 'loginPopup',
            });
        })
    : $('.js-disclaimer-error').css({ display: 'block' });
}
function naukriLogin() {
  if ($('input[name=ReadDisclaimer1]').is(':checked')) {
    try {
      postUbaData('userAction', { actionType: 'click', clickLabel: 'login', authType: 'naukri', pageName: pageName });
    } catch (e) {}
    var url;
    ga('send', 'event', 'loginClickGa', 'naukri'),
      window.naukri_oauth
        ? ((url = window.origin + '/login/naukri'),
          getClientId()
            .then(
              function (value) {
                return (url += '?clientid=' + value);
              },
              function () {
                return url;
              }
            )
            .then(function (url) {
              return (
                customLoginProps && customLoginProps.QueryStr && (url += (url.includes('?') ? '&' : '?') + customLoginProps.QueryStr),
                url + ((url.includes('?') ? '&' : '?') + 'referrer=' + encodeURIComponent(window.location.href))
              );
            })
            .then(function (url) {
              localStorage.setItem('loginInitiated', 'naukri'),
                window.naukri_oauth({ vendorCode: 'rGDeLGjrkoXE6f0r', redirectUrl: url }).linkNaukriAccount({
                  errorCallback: function (err) {
                    ga('send', 'event', 'authJsError', 'Naurki Error Callback - ' + err.message),
                      setErrorPayload({
                        errorMessage: err.message || err.error,
                        errorType: 'naukri auth errorCallback',
                        errorLevel: 'fatal',
                        pageName: 'loginPopup',
                      });
                  },
                });
            })
            .catch(function (err) {
              setErrorPayload({
                errorMessage: err.message || err.error,
                errorType: 'naukri auth',
                errorLevel: 'fatal',
                pageName: 'loginPopup',
              });
            }))
        : (ga('send', 'event', 'authJsError', 'Naukri auth not loaded'),
          notify('Something Went Wrong! Please try again after some time.', 'error'));
  }
}
function attachSignin(element) {
  auth2.attachClickHandler(
    element,
    {},
    function (googleUser) {
      onSignIn(googleUser);
    },
    function (error) {
      notify('Error occured: ' + error.error, 'error');
    }
  );
}
function redirectGoogleAuth(id_token, googleLoginType) {
  var url,
    access_token = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : '';
  id_token &&
    ((url = '/login/google?id_token=' + id_token + '&type=' + googleLoginType),
    access_token && (url += '&access_token=' + access_token),
    customLoginProps && customLoginProps.QueryStr && (url += '&' + customLoginProps.QueryStr),
    getClientId()
      .then(
        function (value) {
          url += '&clientid=' + value + '&referer=' + window.location.href;
          try {
            postUbaData('userAction', { actionType: 'successfulLogin', authType: 'google', pageName: pageName });
          } catch (e) {}
          localStorage.removeItem('loginInitiated'), (window.location.href = url);
        },
        function (reason) {
          window.location.href = url + ('&referer=' + window.location.href);
        }
      )
      .catch(function (err) {
        setErrorPayload({
          errorMessage: err.message || err.error,
          errorType: 'google auth getClientId',
          errorLevel: 'fatal',
          pageName: 'loginPopup',
        });
      }));
}
function onSignIn(googleUser) {
  loginPopOut();
  googleUser = googleUser.getAuthResponse();
  redirectGoogleAuth(googleUser.id_token, 'normal', googleUser.access_token);
}
function gooleYoloLogin(creds) {
  creds &&
    creds.credential &&
    (ga && ga('send', 'event', 'googleYoloLogin', creds.select_by), redirectGoogleAuth(creds.credential, 'yolo'));
}
function initializeMenuDrawer() {
  $('#rx_icon').click(function () {
    $('#drawer_bg').css({ visibility: 'visible', 'z-index': '100001', opacity: '1', transition: 'opacity 0.5s ease-out' }),
      $('#drawer').css({ transform: 'translateX(0px) translateZ(0px)', opacity: '1', transition: 'transform 0.225s ease-out' });
  }),
    $('.close-drawer').click(function () {
      $('#drawer_bg').css({ visibility: 'visible', opacity: '0.001', transition: 'opacity 0.5s ease-out' }),
        $('#drawer').css({ transform: 'translateX(100%) translateZ(0px)', opacity: '1', transition: 'transform 0.225s ease-out' }),
        setTimeout(function () {
          $('#drawer_bg').css({ visibility: 'hidden', 'z-index': '99' });
        }, 0);
    });
}
$(window).on('load', function () {
  $('#naukriLoginBtn').on('click', function () {
    return naukriLogin();
  });
  var authType = localStorage.getItem('loginInitiated');
  authType && (isLogedIn() ? logLoginAttemptOnUba(authType, 'successfulLogin') : logLoginAttemptOnUba(authType, 'failedLogin')), startApp();
});
var domWindow = {
  headerHeight: Math.floor($('.js-menu-shift').height()),
  screenHeight: Math.floor($(window).height()),
  contentHeight: Math.floor($('.content__center').height()),
  lastScrollTop: 0,
  scrollTop: function () {
    return Math.floor($(window).scrollTop());
  },
  scrollbottom: function () {
    return Math.floor($(window).scrollTop()) + this.screenHeight;
  },
  scrollDelta: function () {
    return this.scrollTop() - this.lastScrollTop;
  },
};
function getDomPosition($dom) {
  return { height: Math.floor($dom.height()), top: Math.floor($dom.offset().top) };
}
function getRatingClass(val) {
  var ratingClass = 'rating-15';
  return (
    4.5 <= (val = val && val.toFixed(1))
      ? (ratingClass = 'rating-5')
      : 4 <= val
      ? (ratingClass = 'rating-45')
      : 3.5 <= val
      ? (ratingClass = 'rating-4')
      : 3 <= val
      ? (ratingClass = 'rating-35')
      : 2.5 <= val
      ? (ratingClass = 'rating-3')
      : 2 <= val
      ? (ratingClass = 'rating-25')
      : 1.5 <= val && (ratingClass = 'rating-2'),
    ratingClass
  );
}
$('.js-mobile-menu').on('click', function () {
  $('.main-menu-mobile').fadeToggle(300);
}),
  $('.main-menu-mobile')
    .not('.main-menu-mobile div')
    .on('click', function () {
      $('.main-menu-mobile').toggle();
    }),
  $('.js-display-menu').on('click', function () {
    var menuClass = $(this).attr('menu-class');
    $('.' + menuClass)
      .siblings()
      .not('.content__center')
      .hide(),
      $('.' + menuClass).toggle(),
      $('.' + menuClass)
        .not('.content')
        .on('click', function () {
          $('.' + menuClass).hide();
        });
  });
var that = void 0,
  companyList = [],
  desigList = [],
  isRecentSearch = !1,
  typeaheadRef = '',
  tabStats = null,
  selectedComp = null,
  selectedDesig = null;
function headerFunc() {
  var isDesig = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
    section = isDesig ? 'Designations' : 'Companies',
    listLen = (isDesig ? desigList : companyList).length,
    bothListExists = desigList.length && companyList.length,
    str = '';
  if (isRecentSearch)
    if (desigList.length || companyList.length) {
      if (!bothListExists && !listLen) return;
      str = 'Recent ' + section;
    } else {
      if (!$isMobile || isDesig) return;
      str = 'No Recent Searches Found!';
    }
  else str = section;
  return (
    '<div class="typeahed-header">\n            <p>' +
    str +
    '</p>\n            ' +
    (isRecentSearch && (bothListExists ? !isDesig : listLen) ? '<p class="js-typeahead-clear">Clear All</p>' : '') +
    '\n        </div>'
  );
}
function getBloodhoundConfig() {
  var url =
      '/api/v2/search?query=%QUERY&' +
      (0 < arguments.length && void 0 !== arguments[0] && arguments[0]
        ? 'category=jobProfile&device=' + ($isMobile ? 1 : 0)
        : 'type=companies&category=all'),
    url = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: url,
        wildcard: '%QUERY',
        transform: function (response) {
          return response.data;
        },
      },
    });
  return url.clearPrefetchCache(), url.initialize(), url;
}
function addToRecentList(list, key, lcKey, suggestion) {
  var itemIndex = list.findIndex(function (e) {
    return e[key] === suggestion[key];
  });
  -1 === itemIndex
    ? (list.unshift(suggestion), 15 <= list.length && (list = list.slice(0, 15)))
    : (list.splice(itemIndex, 1), list.unshift(suggestion));
  try {
    localStorage.setItem(lcKey, JSON.stringify(list));
  } catch (e) {}
}
try {
  (companyList = JSON.parse(localStorage.getItem('CompanySuggestion') || '[]')),
    (desigList = JSON.parse(localStorage.getItem('DesigSuggestion') || '[]'));
} catch (e) {}
var companyPageTabsOptions = [
    {
      icon: 'overview',
      desc: 'Know more about the company.',
      title: 'Company Snapshot',
      key: 'CompanyOverview',
      value: 'CompanyInfo',
      noCount: !0,
    },
    {
      icon: 'review',
      desc: 'Read company reviews by real employees.',
      noDataDesc: "Employees haven't posted any reviews yet.",
      title: 'Reviews',
      singleTitle: 'Review',
      key: 'CompanyReviewsLive',
      value: 'CompanyReview',
    },
    {
      icon: 'salary',
      desc: 'Compare salaries for different designations.',
      noDataDesc: 'We do not have sufficient salary data.',
      title: 'Salaries',
      singleTitle: 'Salary',
      key: 'CompanySalaries',
      value: 'CompanySalaries',
      desigDesc: 'Find salaries by experience, companies, location and industries.',
    },
    {
      icon: 'job',
      desc: 'Apply to active jobs by the company.',
      noDataDesc: 'No current job openings found.',
      title: 'Jobs',
      singleTitle: 'Job',
      key: 'CompanyJobs',
      value: 'CompanyJobs',
    },
    {
      icon: 'interview',
      desc: 'Read Interview questions by real candidates.',
      noDataDesc: "Candidates haven't shared any interview advice yet.",
      title: 'Interviews',
      singleTitle: 'Interview',
      key: 'InterviewExperiencesLive',
      value: 'InterviewPrep',
      desigDesc: 'Read Interview questions by real candidates.',
    },
    {
      icon: 'benefit',
      desc: 'Explore employee benefits.',
      noDataDesc: "Employees haven't shared any benefits yet.",
      title: 'Perks & Benefits',
      singleTitle: 'Perk & Benefit',
      key: 'TotalReviewsWithBenefits',
      value: 'CompanyBenefits',
    },
    {
      icon: 'photo',
      desc: 'Discover office photos.',
      noDataDesc: 'No Photos Found yet.',
      title: 'Company Photos',
      singleTitle: 'Company Photo',
      key: 'PhotosCount',
      value: 'CompanyPhotos',
    },
    {
      icon: 'qna',
      desc: 'Stay updated with questions and answers.',
      noDataDesc: 'No Question Found yet.',
      title: 'Company Q&A',
      singleTitle: 'Company Q&A',
      key: 'QnaQuestionsLive',
      value: 'CompanyQnA',
    },
  ],
  designationPageTabsOptions = [
    {
      icon: 'salary',
      desc: 'Compare salaries for different designations.',
      noDataDesc: 'We do not have sufficient salary data.',
      title: 'Salaries',
      singleTitle: 'Salary',
      key: 'CompanySalaries',
      value: 'DesignationSalaries',
      desigDesc: 'Find salaries by experience, companies, location and industries.',
    },
    {
      icon: 'job',
      desc: 'Apply to active jobs by designation.',
      noDataDesc: 'No current job openings found.',
      title: 'Jobs',
      singleTitle: 'Job',
      key: 'JobsLive',
      value: 'DesignationJobs',
    },
    {
      icon: 'interview',
      desc: 'Read Interview questions by real candidates.',
      noDataDesc: "Candidates haven't shared any interview advice yet.",
      title: 'Interviews',
      singleTitle: 'Interview',
      key: 'InterviewExperiencesLive',
      value: 'DesignationInterview',
    },
  ],
  tabsData = companyPageTabsOptions,
  desigdropDownOptions = companyPageTabsOptions.filter(function (obj) {
    return ['Salaries', 'Interviews', 'Jobs'].includes(obj.title);
  }),
  companies = getBloodhoundConfig(),
  designations = getBloodhoundConfig(!0),
  defaultSelectedDropDown = $('.search_new option[selected]').val() || $('.search_new option')[0].value,
  timer = null,
  selId = $isMobile ? 'mobHeaderSearch' : 'headerSearch',
  isNewTheme = !!$('.search_new.new-theme')[0];
function updateDropDownOptions() {
  var rel = defaultSelectedDropDown,
    $customSelect =
      (($itemSelectedRelAttribute = $('.search_new .select-options li.active').attr('rel') || ''),
      (rel = selectedDesig
        ? ($('.search_new .select-options li').hide(),
          $(
            ".search_new .select-options li[rel='InterviewPrep'], .search_new .select-options li[rel='CompanySalaries'], .search_new .select-options li[rel='CompanyJobs']"
          ).show(),
          ['CompanySalaries', 'InterviewPrep', 'CompanyJobs'].includes($itemSelectedRelAttribute)
            ? $itemSelectedRelAttribute
            : 'CompanySalaries')
        : ($('.search_new .select-options li').show(), $itemSelectedRelAttribute)),
      $('.search_new option:selected').removeAttr('selected'),
      $('.search_new .select-options li.active').removeClass('active'),
      $('.search_new select').val(rel),
      $(".search_new .select-options li[rel='" + rel + "']").addClass('active'),
      $('.select-custom')),
    $selctedValue = $('.search_new option:selected')[0].text;
  $customSelect.text($selctedValue),
    $customSelect.append('<i class="icon-chevron-right"></i>'),
    $('.search_new form').find('.js-inputField').val(rel).trigger('change');
}
function clearCompStats() {
  var tileCont = $('#company-tabs');
  tileCont.find('#tile-cont').empty(), tileCont.hide(), (selectedComp = null);
}
function getStats(compId, desigUrlName) {
  var endpoint;
  (compId || desigUrlName) &&
    ((endpoint = 'https://www.ambitionbox.com/api/v2'),
    compId ? (endpoint += '/overview/stats/' + compId) : (endpoint = endpoint + '/profiles/salaries/basicinfo/' + desigUrlName),
    $.get(endpoint)
      .done(function (response) {
        var obj,
          response = response.data;
        response &&
          'object' == (void 0 === response ? 'undefined' : _typeof(response)) &&
          Object.keys(response).length &&
          ((obj = response),
          Object.keys(obj).forEach(function (key) {
            obj[key] || (obj[key] = 0);
          }),
          (tabStats = response)),
          updateSearchTabsUi();
      })
      .fail(function () {
        (tabStats = {}), updateSearchTabsUi();
      }));
}
function updateSearchTabsUi() {
  var str = '',
    tabCont =
      (tabsData.forEach(function (obj, index) {
        ('PhotosCount' == obj.key && tabStats && 0 == tabStats[obj.key]) ||
          (str +=
            '<div class="tile">\n        <input type="radio" name="Type" style="display:none;" value="' +
            obj.value +
            '"/>\n        <img src="/static/icons/typeahead/' +
            obj.icon +
            '.svg" />\n        <div class="info">\n           <p class="heading">\n           ' +
            (tabStats || obj.noCount
              ? ''
              : '<span\n               class="loading line" style="width: 50px;display:inline-block !important;"></span>') +
            '\n                ' +
            (tabStats && 0 < tabStats[obj.key] ? toK(tabStats[obj.key]) : '') +
            '\n                ' +
            (tabStats && 1 == tabStats[obj.key] ? obj.singleTitle : obj.title) +
            '\n            </p>\n            <p class="subhead">' +
            (!tabStats || obj.noCount || 0 < tabStats[obj.key] ? obj.desigDesc || obj.desc : obj.noDataDesc) +
            '</p>\n        </div>\n        <i class="icon icon-chevron-right"></i>\n    </div>');
      }),
      $('#company-tabs'));
  tabCont && (tabCont.find('#tile-cont').html(str), tabCont.show(), setUpTabsListeners());
}
function setUpTabsListeners() {
  $('#company-tabs .tile')
    .off('click')
    .on('click', function () {
      try {
        postUbaData('userAction', {
          actionType: 'click',
          clickLabel: 'globalSearch',
          pageName: pageName,
          term: selectedComp ? selectedComp.name : selectedDesig ? selectedDesig.Name : '',
        });
      } catch (e) {}
      selectedDesig && !selectedComp
        ? desigUrlRedirection($(this).find('input').val())
        : ($(this).find('input').attr('checked', !0), $('.searchForm-mobile').first().submit()),
        $('.mobile_search').toggleClass('toggle-slide');
    });
}
function desigUrlRedirection(type) {
  var UrlName = selectedDesig.UrlName,
    url = window.origin;
  ['DesignationSalaries', 'CompanySalaries'].includes(type)
    ? (url += '/profile/' + UrlName + '-salary')
    : ['DesignationInterview', 'InterviewPrep'].includes(type)
    ? (url += '/profiles/' + UrlName + '/interview-questions')
    : ['DesignationJobs', 'CompanyJobs'].includes(type) && (url += '/profile/' + UrlName + '-jobs'),
    window.open(url, '_self');
}
function toggleDrawer() {
  var drawer = $('#drawer_bg');
  drawer &&
    0 < drawer.length &&
    ('hidden' == drawer.css('visibility')
      ? (drawer.css({ transition: 'none 0s ease 0s', opacity: '1', visibility: 'visible' }),
        $('body').css('overflow', 'hidden'),
        $('.sliding-main-header-menu-mobile .inside-header').css('display', 'none'),
        0 == $(window).scrollTop() &&
          $('.light-header .main-header-menu').css({ background: 'white', 'box-shadow': '0 2px 6px -2px rgba(0,106,194,.2)' }))
      : closeDrawer());
}
function closeDrawer() {
  var drawer = $('#drawer_bg');
  drawer && 0 < drawer.length && drawer.css({ transition: 'none 0s ease 0s', opacity: '0.001', visibility: 'hidden' }),
    $('body').css('overflow', 'auto'),
    0 == $(window).scrollTop() && $('.light-header .main-header-menu').css({ background: '#f6f7ff', 'box-shadow': 'none' }),
    setTimeout(function () {
      var scrollTop = $(window).scrollTop(),
        insideHeader =
          $('.outside-header').length && $('.inside-header').length && $('.outside-header').offset().top - $('.inside-header').height();
      insideHeader && insideHeader < scrollTop && $('.sliding-main-header-menu-mobile .inside-header').css('display', 'block');
    }, 200);
}
function getClientId() {
  return new Promise(function (resolve, reject) {
    try {
      if ('function' != typeof ga || !ga.getAll) throw new Error('Ga not found! Google analytics loading failed!');
      ga(function (tracker) {
        return resolve(tracker ? tracker.get('clientId') : '');
      });
    } catch (e) {
      resolve('');
    }
  });
}
function logAction(logData) {
  var apiPath = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : '/api/user/activity';
  return new Promise(function (resolve, reject) {
    getClientId().then(
      function (value) {
        (logData.ClientId = value),
          $.post(apiPath, logData)
            .done(function (data) {
              data.status
                ? (resolve(data), 'WantAnswer' == logData.Action && notify('Answer request submitted successfully'))
                : reject(data.errors.join());
            })
            .fail(function () {
              reject('Failed. Please try again!');
            });
      },
      function (reason) {
        reject('Please reload the page and try again!.');
      }
    );
  });
}
function formValidation(elem, e) {
  0 == (value = $(elem).parent().find('input[name=CompanyName]').val()).length &&
    ($('.search-input-wrapper .search_company_input.tt-input') && $('.search-input-wrapper .search_company_input.tt-input').focus(),
    e.preventDefault());
}
function scrollIfUtm(utm_campaign) {
  var query = window.location.search.split('?')[1],
    query = new URLSearchParams(query);
  utm_campaign &&
    query.get('utm_campaign') === utm_campaign &&
    'naukri' == query.get('utm_source') &&
    ((utm_campaign = $('#company-pages-tabs')[0]),
    (query = $('#headerWrapper')[0]) &&
      utm_campaign &&
      $('html').animate({ scrollTop: utm_campaign.offsetTop - query.clientHeight - (768 < $(window).width() ? 10 : 0) }));
}
function removeUtmsFromSearchString(queryStr) {
  return 'string' == typeof queryStr
    ? ((queryStr = new URLSearchParams(queryStr.split('?')[1])).delete('utm_campaign'),
      queryStr.delete('utm_source'),
      queryStr.delete('utm_medium'),
      queryStr.delete('gct'),
      queryStr.delete('ict'),
      queryStr.toString() ? '?' + queryStr.toString() : '')
    : '';
}
function suggestNewCompany() {
  var suggestedCompany = $('.suggest-company').first().text();
  $.post('/api/v2/user/suggestion/company', { Name: suggestedCompany }, function (response) {
    response.status && notify('Thanks for the suggestion');
  }).fail(function (err) {
    notify(err.responseJSON.message, 'error');
  });
}
(typeaheadRef = $('.js-menu-search')
  .typeahead(
    { hint: !1, minLength: 0 },
    {
      name: 'comp-search',
      limit: 7,
      displayKey: 'name',
      source: function (q, sync, async) {
        '' === q || q.length < 3
          ? ((isRecentSearch = !0), sync(companyList))
          : ((isRecentSearch = !1), Sanitize && Sanitize.sanitiseHtml && (q = Sanitize.sanitiseHtml(q)), companies.search(q, sync, async)),
          $isMobile && (q ? $('.mobile_search .clear').show() : $('.mobile_search .clear').hide());
      },
      display: function (obj) {
        return obj.name && obj.name.trim();
      },
      templates: {
        suggestion: function (data) {
          var rating = getRatingClass(data.rating);
          return (
            '<div class="suggestion_wrap"><div class="logo_wrap ' +
            ('jobprofile' == data.type ? 'profile_letter' : '') +
            '">' +
            ('jobprofile' == data.type
              ? '<span>' + data.name + '</span>'
              : '<img src="' +
                (data.logo
                  ? 'https://static.ambitionbox.com/alpha/company/photos/logos/' + data.logo + '.jpg'
                  : 'https://static.ambitionbox.com/static/icons/company-placeholder.svg') +
                '" onerror="this.onerror=null;this.src=\'/static/icons/company-placeholder.svg\';">') +
            '</div><div class="suggestion">' +
            ($isMobile ? '' : '<div class="top-row">') +
            '<span class="tt_text">' +
            data.name +
            ' <span class="rating-wrapper">' +
            (data.rating
              ? '<span class=" rating badge-large ' +
                rating +
                '">\n                            <i class="icon icon-star"></i>\n                            <span>' +
                (data.rating && data.rating.toFixed(1)) +
                '</span>\n                        </span>\n                        <span class="review-count sbold-Labels">' +
                data.reviewCount +
                ' ' +
                (1 < data.reviewCount ? 'reviews' : 'review') +
                '</span>'
              : '') +
            '</span>' +
            ($isMobile ? '' : '</div>') +
            '</div></div></div>'
          );
        },
        header: function () {
          return headerFunc();
        },
      },
    },
    {
      name: 'desig-search',
      limit: 7,
      displayKey: 'name',
      source: function (q, sync, async) {
        '' === q
          ? ((isRecentSearch = !0), sync(desigList))
          : 2 < q.length &&
            ((isRecentSearch = !1),
            Sanitize && Sanitize.sanitiseHtml && (q = Sanitize.sanitiseHtml(q)),
            designations.search(q, sync, async));
      },
      display: function (obj) {
        return obj.Name && obj.Name.trim();
      },
      templates: {
        suggestion: function (data) {
          return (
            '<div class="suggestion_wrap desig_wrap">\n                        <div class="logo_wrap"><i class="icon-work"></i></div>\n                        <div class="suggestion">\n                            <div class="top-row">\n                                <p class="tt_text">' +
            data.Name +
            '</p>\n                            </div>\n                        </div>\n                    </div>'
          );
        },
        header: function () {
          return headerFunc(!0);
        },
      },
    }
  )
  .on('typeahead:select', function (aEvent, suggestion) {
    var isDesigSelected = !1;
    !suggestion.companyId && suggestion.Id && (isDesigSelected = !0),
      (selectedDesig = selectedComp = null),
      (tabsData = isDesigSelected
        ? (addToRecentList(desigList, 'UrlName', 'DesigSuggestion', suggestion), (selectedDesig = suggestion), designationPageTabsOptions)
        : (addToRecentList(companyList, 'url', 'CompanySuggestion', suggestion), (selectedComp = suggestion), companyPageTabsOptions)),
      $isMobile
        ? ($('.search_company_input_mobile').blur(),
          $('.mobile_search .clear').show(),
          (tabStats = null),
          typeaheadRef.typeahead('close'),
          $('.sel-comp').text('Search ' + (suggestion.name || suggestion.Name) + ' by'),
          getStats(suggestion.companyId, suggestion.UrlName),
          updateSearchTabsUi())
        : updateDropDownOptions();
  })
  .bind('typeahead:asyncreceive', function (ev, query, dsName) {
    timer && (clearTimeout(timer), (timer = null)),
      (timer = setTimeout(function () {
        (inputTerm = dsName),
          $('#' + selId + ' .tt-dataset-comp-search').children().length ||
            $('#' + selId + ' .tt-dataset-desig-search').children().length ||
            ($('#' + selId + ' .tt-noresult')[0]
              ? $('#' + selId + ' .tt-noresult').remove()
              : ($('#' + selId + ' .tt-dataset-comp-search').append(
                  '<div class="tt-suggestion tt-noresult">\n                        <p onclick="suggestNewCompany()" class="new-suggestion">Suggest a new company <strong class="suggest-company">' +
                    dsName +
                    '</strong></p>\n                        <p class="noresult">' +
                    ($isMobile
                      ? 'Couldn\'t find what you are searching for? <a class="ctas-a-small" href="/search?q=' + dsName + '">Click here</a>'
                      : 'Sorry! No results found') +
                    '</p>\n                    </div>'
                ),
                $('#' + selId + ' .tt-menu')
                  .css('display', 'block')
                  .addClass('tt-open')));
      }, 50));
  })
  .on('typeahead:open', function (aEvent, suggestion) {
    !isNewTheme && $('.search-input-wrapper') && $('.js-menu-search:focus').closest('.search-input-wrapper').addClass('active');
    var pageSearch = $('.js-menu-search:focus').closest('form').get(0);
    pageSearch && pageSearch.id && (selId = pageSearch.id);
  })
  .on('typeahead:close', function (aEvent, suggestion) {
    !isNewTheme && $('.search-input-wrapper') && $('.search-input-wrapper').removeClass('active');
  })
  .on('typeahead:render', function () {
    var recentBtn = document.querySelector('.js-typeahead-clear');
    isRecentSearch &&
      recentBtn &&
      recentBtn.addEventListener('click', function () {
        localStorage.removeItem('CompanySuggestion'),
          localStorage.removeItem('DesigSuggestion'),
          typeaheadRef.typeahead($isMobile ? 'open' : 'close'),
          (companyList = []),
          (desigList = []);
        var cont = $(($isMobile ? '.mobile_search' : '.search_new') + ' .tt-dataset');
        cont.empty(), $isMobile && cont.eq(0).html(headerFunc());
      });
  })
  .on('input', function (e) {
    e.preventDefault(), Sanitize && Sanitize.stripSpecialCharFromInput && Sanitize.stripSpecialCharFromInput(e, typeaheadRef);
  })),
  $('.search-company').bind('typeahead:select', function (ev, suggestion) {
    $('.searchForm').submit();
  }),
  $('.search-company_input').bind('typeahead:select', function (ev, suggestion) {
    $('.searchForm').submit();
  }),
  $('.search-company-mobile').bind('typeahead:select', function (ev, suggestion) {
    $('.searchForm-mobile').submit();
  }),
  $('.js-menu-search').on('input', function (event) {
    event.target &&
      0 === event.target.value.length &&
      ((tabsData = companyPageTabsOptions), (selectedDesig = selectedComp = null), updateDropDownOptions());
  }),
  $('.searchForm').on('submit', function () {
    $compNameEle = $(this).find('input[name=CompanyName]');
    try {
      postUbaData('userAction', {
        actionType: 'click',
        clickLabel: 'globalSearch',
        pageName: pageName,
        term: selectedComp ? selectedComp.name : selectedDesig ? selectedDesig.Name : inputTerm,
      });
    } catch (e) {}
    return 0 == $compNameEle.val().length
      ? ($compNameEle.focus(), !1)
      : selectedDesig && !selectedComp
      ? (desigUrlRedirection(
          $('#' + selId)
            .find('.js-inputField')
            .val()
        ),
        !1)
      : void 0;
  }),
  $('.searchForm-mobile').on('submit', function () {
    return 0 == ($compNameEle = $(this).find('input[name=CompanyName]')).val().length
      ? ($compNameEle.focus(), !1)
      : !($isMobile && 3 <= $compNameEle.val().length && !selectedComp && !selectedDesig) && void 0;
  }),
  $('.js-show-search').on('click', function (event) {
    event.stopPropagation(),
      $('.mobile_search').toggleClass('toggle-slide'),
      $('.search_company_input_mobile.tt-input')[0].focus(),
      $isMobile && $('body').css('overflow', 'hidden');
  }),
  $('.mobile_search .search_close').click(function () {
    $('.mobile_search').toggleClass('toggle-slide'),
      typeaheadRef.typeahead('close'),
      typeaheadRef.typeahead('val', ''),
      $('.mobile_search .clear').hide(),
      $('body').css('overflow', 'scroll'),
      clearCompStats();
  }),
  $('.mobile_search .clear').click(function () {
    $(this).hide(),
      $('.search_company_input_mobile').focus(),
      typeaheadRef.typeahead('val', ''),
      typeaheadRef.typeahead('open'),
      clearCompStats();
  }),
  $isMobile &&
    (window.onresize = function () {
      $('.mobile_search .tt-menu, .mobile_search .company-tabs').css('height', window.innerHeight - 56 + 'px');
    }),
  $('.search_company_input_mobile').on('blur', function () {
    selectedComp ||
      ($('.mobile_search .tt-menu').css('display', 'block').addClass('tt-open'),
      $('.search-input-wrapper') && $('.search-input-wrapper').addClass('active'));
  }),
  $('.footer-report-issues').on('click', function () {
    $('.contact-form').slideDown(600),
      $('html, body').animate({ scrollTop: $('.email').offset().top }, 2e3, function () {
        $("#contact-us-form [name='email']").focus();
      });
  }),
  $('#contact-us-form').on('submit', function (e) {
    return (
      e.preventDefault(),
      $('.contact-form').slideUp(300),
      $.ajax({
        url: '/api/events/bugreport',
        type: 'POST',
        data: new FormData(this),
        contentType: !1,
        cache: !1,
        processData: !1,
        success: function (response) {
          '300' !== response
            ? notify('Successfully sent your message.', 'success')
            : ($('.contact-form').slideDown(600), notify('Error occured: Please try again!', 'error'));
        },
      }),
      !1
    );
  }),
  $(document).ready(function () {
    var rid;
    $('#notification-block > .main-notification').click(function () {
      $(this).parent().css('transform', 'translate(0,-7rem)'), $('#notification-block').slideUp(1e3);
    }),
      window.lazyload && lazyload(),
      document.title.includes('Page Not Found') &&
        (rid = new URLSearchParams(window.location.search.split('?')[1]).get('rid')) &&
        formutils.purgeWorkExReview(rid);
  }),
  $('.company-info-item .show-more-button').click(function () {
    $('.more-industory-list').show(), $('.more-text-dots').hide(), $(this).hide();
  });
var formutils = {
  purgeWorkExReview: function (rid) {
    try {
      var userInfo = LocalStorage.get('userInfo');
      if (!userInfo) return;
      var workEx = userInfo.workEx;
      if (!Array.isArray(workEx)) return void LocalStorage.set('userInfo', { workEx: [] });
      var toBeDeletedIndex = workEx.findIndex(function () {
        var item = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return item.Review && item.Review.Id && item.Review.Id === rid;
      });
      -1 < toBeDeletedIndex &&
        (delete userInfo.workEx[toBeDeletedIndex].Review,
        userInfo.workEx[toBeDeletedIndex].Interview || userInfo.workEx.splice(toBeDeletedIndex, 1),
        LocalStorage.set('userInfo', userInfo));
    } catch (error) {}
  },
};
function loadMenuActions() {
  var scrollToActiveSubmenu,
    slidingSearch,
    prevScroll,
    mobileHeader,
    insideHeaderOffsetTop,
    isPageWithFilter,
    lastScroll = 0,
    $isDesktop = 768 < $(window).width(),
    companyOverviewStickyTabs =
      ($(document).scroll(function (e) {
        var current = $(this).scrollTop();
        $isDesktop && closeSearchDropdown('.searchForm'),
          $isDesktop && closeFilterDropDowns(),
          ($searchEle =
            ($('.topics-page') && 0 < $('.topics-page').length) || ($('.header-without-search') && 0 < $('.header-without-search').length)
              ? $('.main-menu')
              : (!($('.sliding-search-bar') && 0 < $('.sliding-search-bar').length) ||
                  !!(($('.srp') && 0 < $('.srp').length) || ($('.layer') && 0 < $('.layer').length))) &&
                $('.search_new')),
          ($searchHeight = $searchEle && $searchEle.height() / 2),
          $searchEle &&
            $isDesktop &&
            (lastScroll < current
              ? $searchEle.css({ 'z-index': '9999999', 'box-shadow': '0 2px 6px -2px rgba(0,106,194,.2)' })
              : current < $searchHeight && $searchEle.css({ 'z-index': '99', 'box-shadow': 'none' })),
          ($isCompanyPage = $('.about-company') && 0 < $('.about-company').length) &&
            (lastScroll < current
              ? $('.sliding-search-bar').css({ 'box-shadow': '0 2px 6px -2px rgba(0,106,194,.2)' })
              : $('.sliding-search-bar').css({ 'box-shadow': 'none' })),
          lastScroll < current &&
            $('.light-header .main-header-menu').css({ background: 'white', 'box-shadow': '0 2px 6px -2px rgba(0,106,194,.2)' }),
          (lastScroll = current);
      }),
      $('.highlight,.write-block-dropdown,.connector').hover(
        function () {
          $('.connector').css({ display: 'block' }), $('.write-block-dropdown').css('display', 'block');
        },
        function () {
          $('.write-block-dropdown').css('display', 'none'), $('.connector').css({ display: 'none' });
        }
      ),
      $('.user-detail-wrapper').hover(
        function () {
          $('.user-menu').css('display', 'block'), $('.user-connector').css({ display: 'block' });
        },
        function () {
          $('.user-menu').css('display', 'none'), $('.user-connector').css({ display: 'none' });
        }
      ),
      $('.outside-header .menu_tabs_wrap')),
    coverTop = 0,
    coverHeight = 0,
    isMobile = $(window).width <= 768,
    companyOverviewStickyTabs =
      ((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4)
        )) &&
        (isMobile = !0),
      0 < $('.cover-image').length &&
        (companyOverviewStickyTabs[0]
          ? ((scrollToActiveSubmenu = function (selector) {
              var width = $(window).width();
              width < ($ele = $(selector))[0].scrollWidth &&
                width < (selector = $ele.find('a.active')[0]).offsetLeft + selector.clientWidth &&
                $ele.scrollLeft(selector.offsetLeft - 10);
            }),
            (coverTop = $('.outside-header .menu_tabs_wrap').offset().top),
            (coverHeight = $('.outside-header .menu_tabs_wrap').height()),
            (slidingSearch = $('.sliding-sticky-menu')),
            (prevScroll = 0),
            (mobileHeader = $('.main-header-menu-wrap')),
            (insideHeaderOffsetTop = slidingSearch.height()),
            (isPageWithFilter = $('.with-header') && $('.with-header').length),
            isMobile &&
              ($('.inside-header').appendTo('.sliding-main-header-menu-mobile'),
              (slidingSearch = $('.sliding-main-header-menu-mobile')),
              (insideHeaderOffsetTop = mobileHeader.height()),
              (coverHeight = 0)),
            $(window).scroll(function () {
              var equaldistant,
                distanceFromCompanyType,
                ontime = $(this).scrollTop();
              ontime < prevScroll
                ? (isMobile &&
                    $('.light-header .main-header-menu').css({ background: '#fff', 'box-shadow': '0 2px 6px -2px rgba(0,106,194,.2)' }),
                  (equaldistant =
                    $('.outside-header').length &&
                    $('.inside-header').length &&
                    $('.outside-header').offset().top - $('.inside-header').offset().top),
                  isPageWithFilter
                    ? ontime < ($('.with-header').length && $('.with-header').offset().top) &&
                      ($('.outside-header').removeClass('sticky-filter'),
                      ($headerFilter = $('.outside-header .page-container').find('.header-filter')),
                      ($parentCompoToAppend = $('.header-section')),
                      $headerFilter &&
                        $headerFilter.length &&
                        $parentCompoToAppend &&
                        $parentCompoToAppend.length &&
                        $headerFilter.appendTo($parentCompoToAppend),
                      (distanceFromCompanyType = $('.about-company').offset().top),
                      isMobile && $('.outside-header').css({ top: 0 }),
                      ontime < distanceFromCompanyType
                        ? slidingSearch.css({ 'box-shadow': 'none' })
                        : (slidingSearch.css({ transform: 'translateY(0)', transition: 'transform 0.3s ease-out' }),
                          $('.mobile_search .search_close').click(function () {
                            slidingSearch.css({ transform: 'translateY(0)', transition: 'transform 0.3s ease-out' });
                          })))
                    : slidingSearch.css({ transform: 'translateY(0)', transition: 'transform 0.3s ease-out' }),
                  equaldistant && 0 < equaldistant && $('.inside-header').hide(),
                  ontime < mobileHeader.height() / 2 &&
                    isMobile &&
                    $('.light-header .main-header-menu').css({ background: '#f6f7ff', 'box-shadow': 'none' }))
                : prevScroll < ontime &&
                  coverTop - coverHeight / 2 < ontime &&
                  (($headerFilter = $('.header-section').length && $('.header-section').find('.header-filter')),
                  isPageWithFilter && $headerFilter
                    ? ($('.outside-header').addClass('sticky-filter'),
                      ($parentCompoToAppend = $('.outside-header .page-container')),
                      $headerFilter &&
                        $headerFilter.length &&
                        $parentCompoToAppend &&
                        $parentCompoToAppend.length &&
                        $headerFilter.appendTo($parentCompoToAppend),
                      isMobile && $('.outside-header').css({ top: 0 }))
                    : $('.inside-header').show(),
                  scrollToActiveSubmenu('.inside-header .menu_tabs'),
                  slidingSearch.css({ transform: 'translateY(-' + insideHeaderOffsetTop + 'px)', transition: 'transform 0.3s ease-out' }),
                  $('#mobFooterSearch').click(function () {
                    slidingSearch.css({ transform: 'translateY(0)', transition: 'none' });
                  }),
                  $('.mobile_search .search_close').click(function () {
                    slidingSearch.css({ transform: 'translateY(-' + insideHeaderOffsetTop + 'px)', transition: 'transform 0.3s ease-out' });
                  })),
                768 < $(window).width() && affixRightColumnPosition && affixRightColumnPosition(),
                (prevScroll = ontime);
            }),
            scrollToActiveSubmenu('.outside-header .menu_tabs_wrap'))
          : ((coverTop = $('.cover-image').offset().top),
            (coverHeight = $('.cover-image').height()),
            $(window).scroll(function () {
              var ontime = $(this).scrollTop();
              coverTop + coverHeight < ontime ? $('.desktop').addClass('default-header') : $('.desktop').removeClass('default-header');
            }))),
      navigator.userAgent.toLowerCase());
  isMobile &&
    /ipad|iphone|ipod/.test(companyOverviewStickyTabs) &&
    -1 < companyOverviewStickyTabs.indexOf('safari') &&
    ((companyOverviewStickyTabs = 600 < window.innerHeight ? '8rem' : '6rem'),
    document.documentElement.style.setProperty('--search-padd-btm', companyOverviewStickyTabs));
}
function setActiveMenu() {
  ($menuList = $('.link')),
    ($route = window.location.pathname),
    $menuList &&
      0 < $menuList.length &&
      $menuList.each(function (idx, menu) {
        ($route =
          'topics' == $(menu).attr('menu-link')
            ? $route && 2 < $route.split('/').length
              ? '/' + $route.split('/')[1]
              : $route
            : $route) ==
        '/' + $(menu).attr('menu-link')
          ? $(menu).addClass('active')
          : $(menu).removeClass('active');
      });
}
function debounceTime(func, delay) {
  var debounceTimer = void 0;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(debounceTimer),
      (debounceTimer = setTimeout(function () {
        return func.apply(context, args);
      }, delay));
  };
}
var closeFilterDropDowns = debounceTime(function () {
  $('.filter-options-wrapper').each(function () {
    $(this).find('.filter-options').removeClass('active');
  });
}, 40);
function closeSearchDropdown(selector) {
  $(selector).each(function () {
    $(this).find('.search_company_input').blur(),
      ($selectDropdown = $(this).find('.select-custom')).hasClass('active') &&
        $selectDropdown.removeClass('active').next('.select-options').slideUp(0);
  });
}
function ambox__getAllCookie() {
  var allCookies = {};
  try {
    for (var _pairs = document.cookie.split(';'), _i2 = _pairs.length - 1; 0 <= _i2; _i2--) {
      var _pair2 = _pairs[_i2].split('=');
      'usr_data' == (_pair2[0] + '').trim() && (allCookies[(_pair2[0] + '').trim()] = decodeURIComponent(_pair2[1])),
        'personalise' == (_pair2[0] + '').trim() && (allCookies[(_pair2[0] + '').trim()] = decodeURIComponent(_pair2[1]));
    }
    return allCookies;
  } catch (e) {
    return allCookies;
  }
}
function checkUserLoginStatus() {
  var allCookies = ambox__getAllCookie(),
    isLoggedIn = !1;
  if (null != allCookies.usr_data) {
    var userData = JSON.parse(allCookies.usr_data);
    (document.getElementById('userPicture').src = userData.Picture),
      (document.getElementById('userName').innerHTML = 'Hi, ' + userData.Name),
      null != document.getElementById('userNameMobile') &&
        ((document.getElementById('userPictureMobile').src = userData.Picture),
        (document.getElementById('userNameMobile').innerHTML = '' + userData.Name));
    for (var loop = (loggedInClassElements = document.getElementsByClassName('logged-in')).length - 1; 0 <= loop; loop--)
      loggedInClassElements[loop].style.display = 'inline-block';
    var notLoggedInClassElements = document.getElementsByClassName('not-logged-in');
    for (loop = notLoggedInClassElements.length - 1; 0 <= loop; loop--) notLoggedInClassElements[loop].style.display = 'none';
    for (loop = (loggedInClassElementsNew = document.getElementsByClassName('logged_in_new')).length - 1; 0 <= loop; loop--)
      loggedInClassElementsNew[loop].style.display = 'block';
    var notLoggedInClassElementsNew = document.getElementsByClassName('not_logged_in_new');
    for (loop = notLoggedInClassElementsNew.length - 1; 0 <= loop; loop--) notLoggedInClassElementsNew[loop].style.display = 'none';
    (isLoggedIn = !0), (userData = -1 == window.location.pathname.indexOf('contribute'));
    allCookies.personalise &&
      userData &&
      (personalisePopUp(), (document.cookie = 'personalise=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'));
  } else if (isLoggedIn) {
    for (loop = (loggedInClassElements = document.getElementsByClassName('logged-in')).length - 1; 0 <= loop; loop--)
      $(loggedInClassElements[loop]).remove();
    for (loop = (loggedInClassElementsNew = document.getElementsByClassName('logged_in_new')).length - 1; 0 <= loop; loop--)
      $(loggedInClassElementsNew[loop]).remove();
  } else {
    for (
      var loggedInClassElements, loop = (loggedInClassElements = document.getElementsByClassName('logged-in')).length - 1;
      0 <= loop;
      loop--
    )
      $(loggedInClassElements[loop]).remove();
    for (
      var loggedInClassElementsNew, loop = (loggedInClassElementsNew = document.getElementsByClassName('logged_in_new')).length - 1;
      0 <= loop;
      loop--
    )
      $(loggedInClassElementsNew[loop]).remove();
  }
}
function isLogedIn() {
  for (var pairs = document.cookie.split(';'), i = pairs.length - 1; 0 <= i; i--)
    if ('usr_data' == (pairs[i].split('=')[0] + '').trim()) return !0;
  return !1;
}
function loginPopUp(loginProps) {
  customLoginProps = loginProps;
  try {
    personaliseGoogle(), postUbaData('modalView', { actionType: 'view', actionSrc: 'login', pageName: pageName });
  } catch (e) {}
  $('.js-login').on('click', function () {
    var url, label;
    $('input[name=ReadDisclaimer1]').is(':checked') &&
      ((url = $(this).attr('link')),
      (label = $(this).attr('label')),
      getClientId()
        .then(
          function (value) {
            return (url += '?clientid=' + value);
          },
          function () {
            return url;
          }
        )
        .then(function () {
          localStorage.setItem('loginInitiated', label), ga('send', 'event', 'loginClickGa', label);
          try {
            postUbaData('userAction', { actionType: 'click', clickLabel: 'login', authType: label, pageName: pageName });
          } catch (e) {}
          customLoginProps && customLoginProps.QueryStr && (url += (url.includes('?') ? '&' : '?') + customLoginProps.QueryStr),
            (window.location.href = url);
        })
        .catch(function (err) {
          setErrorPayload({
            errorMessage: err.message || err.error,
            errorType: label + ' auth getClientId',
            errorLevel: 'fatal',
            pageName: 'loginPopup',
          });
        }));
  }),
    $('input[name=ReadDisclaimer1]').on('change', function () {
      $(this).is(':checked') ? $('.js-disclaimer-error').css({ display: 'none' }) : $('.js-disclaimer-error').css({ display: 'block' });
    });
  var formType = null,
    FORM_DEFAULT_COPY =
      ('/contribute/company-review' === window.location.pathname
        ? (formType = 'CompanyReview')
        : '/contribute/interview-story' === window.location.pathname && (formType = 'InterviewAdvice'),
      {
        CompanyReview: { Subtitle: 'Login or signup to submit your company review.' },
        InterviewAdvice: { Subtitle: 'Login or signup to submit your interview advice.' },
      });
  return (
    formType
      ? ((FORM_DEFAULT_COPY = FORM_DEFAULT_COPY[formType] || { Subtitle: 'Login or signup to submit' }),
        $('input[name=Anonymous]').is(':checked')
          ? -1 === $('#loginPopup .sub-text').text().indexOf(" Don't worry, it's still anonymous!") &&
            $('#loginPopup .sub-text').text(FORM_DEFAULT_COPY.Subtitle + " Don't worry, it's still anonymous!")
          : $('#loginPopup .sub-text').text(FORM_DEFAULT_COPY.Subtitle))
      : loginProps &&
        (loginProps.Title && $('#loginPopup .headline').text(loginProps.Title),
        loginProps.SubTitle &&
          ($('#loginPopup .sub-text').text(loginProps.SubTitle),
          loginProps.SubTitle.trim() || $('#loginPopup .headline').addClass('no-subtext'))),
    $('#loginPopup').css({ display: 'flex', 'align-items': 'center' }),
    $('#loginPopup .login-box').show(),
    $('#loginPopup .login-box').addClass('slideInUp'),
    !1
  );
}
function loginPopOut() {
  return (
    $('.login-box').removeClass('slideInUp').addClass('slideOutDown'),
    $('.js-disclaimer-error').css({ display: 'none' }),
    setTimeout(function () {
      $('.login-box').removeClass('slideOutDown'), $('.login-box').hide(), $('.login-popup').hide();
    }, 300),
    !1
  );
}
window.addEventListener('load', function () {
  loadMenuActions(), setActiveMenu();
}),
  checkUserLoginStatus();
var yoloShowed = !1;
function personaliseGoogle() {
  (document.getElementById('g_id_onload') && !yoloShowed) ||
    (google &&
      google.accounts &&
      google.accounts.id &&
      !isLogedIn() &&
      (google.accounts.id.renderButton(document.getElementById('g_id_signin'), { shape: 'circle', text: 'continue_with', width: '316' }),
      togglePersGoogleBtn()));
}
function togglePersGoogleBtn() {
  var btn = document.getElementById('g_id_signin');
  btn &&
    btn.children &&
    btn.children.length &&
    ((document.getElementById('googleLoginBtn').style.display = 'none'), (document.getElementById('g_id_signin').style.display = 'block'));
}
(window.onload = function () {
  $('.login-popup')
    .click(function () {
      loginPopOut();
    })
    .children()
    .click(function (e) {
      e.stopPropagation();
    });
}),
  (window.onGoogleLibraryLoad = function () {
    google &&
      google.accounts &&
      google.accounts.id &&
      !isLogedIn() &&
      (google.accounts.id.initialize({ client_id: CLIENT_ID, callback: gooleYoloLogin }),
      document.getElementById('g_id_onload') &&
        google.accounts.id.prompt(function (notification) {
          notification.isDisplayed() && ((yoloShowed = !0), personaliseGoogle(), togglePersGoogleBtn());
        }));
  });
var page = 1,
  next = !1,
  recCount = 2,
  topPayingCount = 2,
  mncCount = 2,
  startupCount = 2,
  isP = !1,
  isFresherLockedClick = !1;
function personalisePopUp() {
  return (
    (isFresherLockedClick = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]),
    $('#personalisePopup').show(),
    $('#personalisePopup .personalise-box').show(),
    $('#personalisePopup .personalise-box').addClass('slideInUp'),
    fetchUserPreferences(),
    isFresherLockedClick &&
      ((isWorking = !(isFresher = !0)),
      $('#user-input-form,.per-later').hide(),
      $('#personalise-box').remove('heightFix').addClass('lockedFresher'),
      $('.working').removeClass('selected-card').removeAttr('onclick').addClass('disable'),
      $('.fresher').addClass('selected-card'),
      $('.skip-continue').show(),
      $('#FresherDisclaimer').on('change', function () {
        $('.skip-continue .modal-next-btn').toggleClass('disabled-btn');
      })),
    !1
  );
}
function personalisePopOut() {
  return (
    $('.personalise-box').removeClass('slideInUp').addClass('slideOutDown'),
    $('.js-disclaimer-error').css({ display: 'none' }),
    setTimeout(function () {
      $('.personalise-box').removeClass('slideOutDown'), $('.personalise-box').hide(), $('.personalise-popup').hide();
    }, 300),
    !1
  );
}
var nextBtn = $('.modal-next-btn');
function goToDir(dir) {
  nextBtn = $('.modal-next-btn');
  var count = parseInt(nextBtn.attr('data-count')),
    currentPage = '#page' + count;
  $(currentPage).addClass('hide'),
    'next' === dir ? (count += 1) : (count -= 1),
    $('#page' + count).removeClass('hide'),
    $(currentPage + ' .modal-next-btn').removeClass('disabled-btn'),
    (document.getElementById('progress_bar').style.width = 25 * count + '%'),
    nextBtn.attr('data-count', count);
}
var prefilledPreferences = { jobprofile: [], skill: [], location: [], industry: [], salary: [] };
function fetchUserPreferences() {
  $.get('/api/v2/user/preferences', function (response) {
    response.data && (prefilledPreferences = response.data), getLocations();
  }).fail(function () {
    getLocations();
  });
}
var isFresher = void 0,
  isWorking = void 0;
function fetchUserDetails() {
  $.get('/api/v2/user/details', function (response) {
    if (response.data) {
      if (isFresherLockedClick) return (isFresher = !0), getProfiles(), void setIsMandatory(!0);
      var prefilledData = response.data;
      '1' === prefilledData.Fresher
        ? ((isFresher = !0), getProfiles(), setIsMandatory(!0), goToDir('next'))
        : (onClickProf(),
          $(document).ready(function () {
            setTimeout(function () {
              $("label[for='JobProfileName']").addClass('raise-placeholder focus-placeholder'),
                $('#user-input-form #JobProfileName').typeahead('val', prefilledData.JobProfileName),
                $("label[for='UserCompanyName']").addClass('raise-placeholder focus-placeholder'),
                $('#UserCompanyName').typeahead('val', prefilledData.CompanyName);
            }, 0);
          }),
          onClickExp(prefilledData.Experience));
    }
  }).fail(function () {});
}
function onClickFresher() {
  (isFresherLockedClick && !$('input[name=FresherDisclaimer]').is(':checked')) ||
    (!isFresher || isFresherLockedClick
      ? ((isWorking = !1),
        $('#user-input-form').hide(),
        $('.working').removeClass('selected-card'),
        $('.fresher').addClass('selected-card'),
        $.post('/api/v2/user/work-experience', { Fresher: 1 }, function (response) {
          response.data &&
            (setIsMandatory((isFresher = !0)),
            getProfiles(),
            goToDir('next'),
            $('#personalise-box').removeClass('lockedFresher').addClass('heightFix'),
            isFresherLockedClick && (unlockInterviewsPage && unlockInterviewsPage(), checkForUserSubscription()));
        }).fail(function () {
          notify('Please try again!');
        }))
      : goToDir('next'));
}
var disableText = void 0,
  enableText = void 0,
  toggleBtn = void 0;
function toggleMandatory(state, pageEle) {
  (enableText = 'Next'),
    (toggleBtn = '.modal-next-btn'),
    '#page2' === pageEle && (disableText = $isMobile ? 'Add 1 or more location' : 'Add 1 or more location to continue'),
    '#page3' === pageEle && (disableText = $isMobile ? 'Add 1 or more job profile' : 'Add 1 or more job profile to continue'),
    '#page4' === pageEle &&
      ((disableText = 'Follow 1 or more companies to setup'), (enableText = 'Personalise my experience'), (toggleBtn = '#personalise-btn')),
    state
      ? ($(pageEle + ' ' + toggleBtn).attr('value', disableText), $(pageEle + ' ' + toggleBtn).addClass('disabled-btn'))
      : ($(pageEle + ' ' + toggleBtn).attr('value', enableText), $(pageEle + ' ' + toggleBtn).removeClass('disabled-btn'));
}
var isMandatory = void 0;
function onClickProf() {
  (isWorking = !(isFresher = !1)),
    $('#personalise-box').removeClass('lockedFresher').addClass('heightFix'),
    $isMobile && $('#page1 .modal_heading').hide(),
    $('.footer').hide(),
    $('#user-input-form').show(),
    $('.fresher').removeClass('selected-card'),
    $('.working').addClass('selected-card');
}
var showExpError = void 0,
  userExp = '';
function onClickExp(exp) {
  $('.chip.exp').removeClass('active'),
    (userExp = exp),
    $('.chip.exp_' + exp).addClass('active'),
    showExpError && ($('#error_exp').remove(), (showExpError = !1));
}
function validateExp() {
  '' === userExp
    ? showExpError ||
      ($('<span id="error_exp" class=\'input-error-color\'>Please select Work Experience</span>').insertAfter($('.exp-title')),
      (showExpError = !0))
    : ($('#error_exp').remove(), (showExpError = !1)),
    toggleBtnState('enable', '#page1', []);
}
var JobProfileId = void 0,
  CompanyId = void 0,
  isWorkingTagged = void 0;
function onSubmitProfessional() {
  toggleBtnState('disable', '#page1', []);
  var jobProfile = $('#JobProfileName').val(),
    company = $('#UserCompanyName').val();
  jobProfile
    ? company
      ? '' === userExp
        ? validateExp()
        : $.post(
            '/api/v2/user/work-experience',
            { CompanyName: company, JobProfileName: jobProfile, Experience: userExp, Fresher: 0 },
            function (response) {
              (JobProfileId = response.data.JobProfileId),
                setIsMandatory(!(CompanyId = response.data.CompanyId) || !JobProfileId || !(isWorkingTagged = !0)),
                getProfiles(jobProfile),
                goToDir('next');
            }
          ).fail(function () {
            goToDir('next'), toggleBtnState('enable', '#page1', []), notify('Please try again!');
          })
      : validateField('UserCompanyName', 'Current/Recent company')
    : validateField('JobProfileName', 'Current Designation');
}
var showError = !1;
function validateField(key, label) {
  $('#' + key).prop('required') &&
    ('' === $('#' + key).val()
      ? showError ||
        $('#error_' + key).length ||
        ($('<p id="error_' + key + "\" class='input-error-color'>Please input a valid " + label + '</p>').insertAfter(
          $("label[for='" + key + "']").css('color', 'red')
        ),
        (showError = !0))
      : ((showError = !1), $("label[for='" + key + "']").css('color', '#5670fb'), $('#error_' + key).remove()),
    toggleBtnState('enable', '#page1', []));
}
$(document).ready(function () {
  $('.chips-wrap .chip').on('click', function () {
    $(this).addClass('active');
  }),
    autoSuggestionInputs.forEach(function (autoSuggestionInput) {
      var bloodhoundInput = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: { url: autoSuggestionInput.api, transform: autoSuggestionInput.transform, wildcard: '%QUERY' },
      });
      bloodhoundInput.initialize(),
        $(autoSuggestionInput.selector)
          .typeahead(
            { hint: !0, highlight: !0, minLength: 2 },
            {
              name: autoSuggestionInput.name,
              limit: 20,
              displayKey: autoSuggestionInput.displayKey,
              source: bloodhoundInput.ttAdapter(),
              templates: { suggestion: autoSuggestionInput.onSuggestion, empty: autoSuggestionInput.emptyMessage },
            }
          )
          .bind('typeahead:cursorchange', function (event, data) {
            autoSuggestionInput.onCursorChange(event, data);
          })
          .bind('typeahead:select', function (event) {
            autoSuggestionInput.onSelected(event);
          });
    });
});
var autoSuggestionInputs = [
    {
      name: 'company-search',
      selector: '#UserCompanyName',
      api: '/api/v2/search?query=%QUERY&category=all&type=companies',
      transform: function (response) {
        return response.data;
      },
      displayKey: 'name',
      onSuggestion: function (data) {
        return (
          '<div class="suggestion_wrap"><div class="logo_wrap"><img src="https://static.ambitionbox.com/alpha/company/photos/logos/' +
          data.logo +
          '.jpg" onerror="this.onerror=null;this.src=\'https://static.ambitionbox.com/img/company-pages-icon.jpg\';"></div><div class="suggestion"><p class="tt_text">' +
          data.name +
          '</p></div></div>'
        );
      },
      emptyMessage:
        '\n                <div class="tt-suggestion tt-selectable">\n                  Sorry! No results found\n                </div>\n      ',
      onSelected: function (event) {
        event = event.target.value;
        $('#UserCompanyName').val(event);
      },
      onCursorChange: function (event) {
        event = event.target.value;
        $('#UserCompanyName').val(event);
      },
    },
    {
      name: 'job-profile-search',
      selector: '#user-input-form #JobProfileName',
      api: '/api/v2/search?query=%QUERY&category=jobProfile&type=Name',
      transform: function (response) {
        return response.data;
      },
      displayKey: function (data) {
        return data.Name;
      },
      onSuggestion: function (data) {
        return '<div class="suggestion_wrap"><div class="suggestion"><p class="tt_text">' + data.Name + '</p></div></div>';
      },
      emptyMessage:
        '\n                <div class="tt-suggestion tt-selectable">\n                  Sorry! No results found\n                </div>\n      ',
      onSelected: function (event) {
        event = event.target.value;
        $('#user-input-form #JobProfileName').val(event);
      },
      onCursorChange: function (event) {
        event = event.target.value;
        $('#user-input-form #JobProfileName').val(event);
      },
    },
    {
      name: 'job-location-search',
      selector: '#UserJobLocation',
      api: '/api/v2/search?query=%QUERY&category=location',
      transform: function (response) {
        return response.data;
      },
      displayKey: JSON.stringify(function (data) {
        return data.Name;
      }),
      onSuggestion: function (data) {
        return '<div class="suggestion_wrap"><div class="suggestion"><p class="tt_text">' + data.Name + '</p></div></div>';
      },
      emptyMessage:
        '\n                <div class="tt-suggestion tt-selectable">\n                  Sorry! No results found\n                </div>\n      ',
      onSelected: function (event, data) {
        onSelectLocation(JSON.parse(event.target.value)),
          setTimeout(function () {
            $('#UserJobLocation').typeahead('val', '');
          }, 0);
      },
      onCursorChange: function (event, data) {
        $('#UserJobLocation').val(data.Name);
      },
    },
    {
      name: 'job-profile-search',
      selector: '#SuggestedProfiles',
      api: '/api/v2/search?query=%QUERY&category=jobProfile',
      transform: function (response) {
        return response.data;
      },
      displayKey: JSON.stringify(function (data) {
        return data;
      }),
      onSuggestion: function (data) {
        return '<div class="suggestion_wrap"><div class="suggestion"><p class="tt_text">' + data.Name + '</p></div></div>';
      },
      emptyMessage:
        '\n                <div class="tt-suggestion tt-selectable">\n                  Sorry! No results found\n                </div>\n      ',
      onSelected: function (event) {
        onSelectProfile(JSON.parse(event.target.value)),
          setTimeout(function () {
            $('#SuggestedProfiles').typeahead('val', '');
          }, 0);
      },
      onCursorChange: function (event, data) {
        $('#SuggestedProfiles').val(data.Name);
      },
    },
  ],
  allLocations = [],
  popularLoc = [],
  otherLoc = [];
function getLocations() {
  $.get('/api/v2/locations?limit=24&page=1', function (result) {
    if (result && result.data) {
      (allLocations = result.data), (selectedLocations = [].concat(_toConsumableArray(prefilledPreferences.location))), fetchUserDetails();
      var preFilledLoc = prefilledPreferences.location;
      if (
        (preFilledLoc.length &&
          (allLocations = allLocations.filter(function (loc) {
            return !preFilledLoc.find(function (selectedLoc) {
              return parseInt(selectedLoc.Id) === loc.Id;
            });
          })),
        (popularLoc = []),
        (otherLoc = []),
        (popularLoc = allLocations.slice(0, 12)),
        (otherLoc = allLocations.slice(12, 24)),
        selectedLocations.length)
      ) {
        var _iteratorNormalCompletion = !0,
          result = !1,
          _iteratorError = void 0;
        try {
          for (
            var _step, _iterator = selectedLocations[Symbol.iterator]();
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = !0
          )
            setLocationChips(_step.value, unselectLoc, '#selectedCities');
        } catch (err) {
          (result = !0), (_iteratorError = err);
        } finally {
          try {
            !_iteratorNormalCompletion && _iterator.return && _iterator.return();
          } finally {
            if (result) throw _iteratorError;
          }
        }
        isLocUpdated = !0;
      }
      var _iteratorNormalCompletion2 = !0,
        result = !1,
        _iteratorError = void 0;
      try {
        for (
          var _step2, _iterator2 = popularLoc[Symbol.iterator]();
          !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
          _iteratorNormalCompletion2 = !0
        )
          setLocationChips(_step2.value, onSelectLocation, '#popularCities');
      } catch (err) {
        (result = !0), (_iteratorError = err);
      } finally {
        try {
          !_iteratorNormalCompletion2 && _iterator2.return && _iterator2.return();
        } finally {
          if (result) throw _iteratorError;
        }
      }
      var _iteratorNormalCompletion3 = !0,
        result = !1,
        _iteratorError = void 0;
      try {
        for (
          var _step3, _iterator3 = otherLoc[Symbol.iterator]();
          !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
          _iteratorNormalCompletion3 = !0
        )
          setLocationChips(_step3.value, onSelectLocation, '#otherCities');
      } catch (err) {
        (result = !0), (_iteratorError = err);
      } finally {
        try {
          !_iteratorNormalCompletion3 && _iterator3.return && _iterator3.return();
        } finally {
          if (result) throw _iteratorError;
        }
      }
    }
  }).fail(function () {
    notify('Please try again!');
  });
}
function onSelectLocation(city) {
  selectedLocations.some(function (location) {
    return location.Id === city.Id;
  }) ||
    (selectedLocations.push(city),
    setLocationChips(city, unselectLoc, '#selectedCities'),
    hideLocOnSelect(popularLoc, '#popularCities', city),
    hideLocOnSelect(otherLoc, '#otherCities', city)),
    toggleMandatory(!(isLocUpdated = !0), '#page2');
}
function hideLocOnSelect(arr, ele, city) {
  var eleIndex;
  arr.includes(city) &&
    ((eleIndex = arr.indexOf(city)),
    $(ele + ' .chip')[eleIndex].remove(),
    arr.splice(arr.indexOf(city), 1),
    0 === arr.length && (arr === otherLoc ? $('#other-heading') : $('#popular-heading')).remove());
}
function setLocationChips(city, fnName, setElem) {
  var a = document.createElement('a'),
    link = (a.setAttribute('class', 'chip'), document.createTextNode(city.Name));
  a.appendChild(link),
    '#selectedCities' === setElem &&
      fnName === unselectLoc &&
      (a.setAttribute('class', 'chip active'),
      (link = document.createElement('i')).setAttribute('class', 'icon icon-close'),
      a.append(link),
      (link.onclick = (function (city) {
        return function () {
          fnName(city);
        };
      })(city))),
    fnName === onSelectLocation &&
      (a.onclick = (function (city) {
        return function () {
          fnName(city);
        };
      })(city)),
    $(setElem).append(a);
}
function unselectLoc(city) {
  (removeIndex = selectedLocations.indexOf(city)),
    selectedLocations.splice(removeIndex, 1),
    $('#selectedCities .chip')[removeIndex].remove(),
    isMandatory && !selectedLocations.length && toggleMandatory(!0, '#page2'),
    allLocations.slice(0, 10).includes(city) &&
      (popularLoc.push(city),
      1 === popularLoc.length &&
        $("<p id='popular-heading' class='sbold-list-header heading'>Popular Cities</p>").insertBefore($('#popularCities')),
      setLocationChips(city, onSelectLocation, '#popularCities')),
    allLocations.slice(10, 20).includes(city) &&
      (otherLoc.push(city),
      1 === otherLoc.length &&
        $("<p id='other-heading' class='sbold-list-header heading'>Other Cities</p>").insertBefore($('#otherCities')),
      setLocationChips(city, onSelectLocation, '#otherCities')),
    (isLocUpdated = !0);
}
selectedLocations = [];
var isLocUpdated = void 0,
  hasLocUpdated = void 0;
function onSubmitLocations() {
  toggleBtnState('disable', '#page2', selectedLocations);
  var selectedLocIds = selectedLocations.map(function (_ref) {
    return _ref.Id;
  });
  isLocUpdated
    ? $.post('/api/v2/user/preferences', { Entity: 'location', Id: selectedLocIds }, function () {
        (hasLocUpdated = !(isLocUpdated = !1)), goToDir('next');
      }).fail(function () {
        toggleBtnState('enable', '#page2', selectedLocations), notify('Please try again!');
      })
    : goToDir('next');
}
var selectedProfiles = [];
function onSelectProfile(profile) {
  var eleIndex;
  selectedProfiles.some(function (desig) {
    return desig.Id === profile.Id;
  }) ||
    (selectedProfiles.push(profile),
    setProfileChips(profile, unselectProfile, '#selectedProfiles'),
    profileSuggestions.includes(profile) &&
      ((eleIndex = profileSuggestions.indexOf(profile)),
      $('#suggestedProfiles .chip')[eleIndex].remove(),
      profileSuggestions.splice(profileSuggestions.indexOf(profile), 1),
      0 === profileSuggestions.length && $('#profile-heading').remove())),
    toggleMandatory(!(isProfUpdated = !0), '#page3');
}
function setProfileChips(profile, fnName, setElem) {
  var a = document.createElement('a'),
    link = (a.setAttribute('class', 'chip'), document.createTextNode(profile.Name));
  a.appendChild(link),
    '#selectedProfiles' === setElem &&
      fnName === unselectProfile &&
      (a.setAttribute('class', 'chip active'),
      (link = document.createElement('i')).setAttribute('class', 'icon icon-close'),
      a.append(link),
      (link.onclick = (function (profile) {
        return function () {
          fnName(profile);
        };
      })(profile))),
    fnName === onSelectProfile &&
      (a.onclick = (function (profile) {
        return function () {
          fnName(profile);
        };
      })(profile)),
    $(setElem).append(a);
}
function unselectProfile(profile) {
  (removeIndex = selectedProfiles.indexOf(profile)),
    selectedProfiles.splice(removeIndex, 1),
    $('#selectedProfiles .chip')[removeIndex].remove(),
    isMandatory && !selectedProfiles.length && toggleMandatory(!0, '#page3'),
    allProfiles.includes(profile) &&
      (profileSuggestions.push(profile),
      1 === profileSuggestions.length &&
        $("<p id='profile-heading' class='sbold-list-header heading'>Suggestions based on your job profile</p>").insertBefore(
          $('#suggestedProfiles')
        ),
      setProfileChips(profile, onSelectProfile, '#suggestedProfiles')),
    (isProfUpdated = !0);
}
var allProfiles = [],
  profileSuggestions = [],
  preFilledProf = [];
function getProfiles(userProfile) {
  if (!selectedProfiles.length && (selectedProfiles = preFilledProf = prefilledPreferences.jobprofile).length) {
    var _iteratorNormalCompletion4 = !0,
      _didIteratorError4 = !1,
      _iteratorError4 = void 0;
    try {
      for (
        var _step4, _iterator4 = selectedProfiles[Symbol.iterator]();
        !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
        _iteratorNormalCompletion4 = !0
      )
        setProfileChips(_step4.value, unselectProfile, '#selectedProfiles');
    } catch (err) {
      (_didIteratorError4 = !0), (_iteratorError4 = err);
    } finally {
      try {
        !_iteratorNormalCompletion4 && _iterator4.return && _iterator4.return();
      } finally {
        if (_didIteratorError4) throw _iteratorError4;
      }
    }
    isProfUpdated = !0;
  }
  (userProfile
    ? $.get('/api/v2/job-profiles/similar?q=' + userProfile + '&limit=15', function (result) {
        if (result && result.data) {
          (allProfiles = result.data),
            preFilledProf.length &&
              (allProfiles = allProfiles.filter(function (profile) {
                return !preFilledProf.find(function (selectedProf) {
                  return parseInt(selectedProf.Id) === profile.Id;
                });
              })),
            (profileSuggestions = allProfiles),
            $('#suggestedProfiles .chip').remove();
          var _iteratorNormalCompletion5 = !0,
            result = !1,
            _iteratorError5 = void 0;
          try {
            for (
              var _step5, _iterator5 = profileSuggestions[Symbol.iterator]();
              !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);
              _iteratorNormalCompletion5 = !0
            )
              setProfileChips(_step5.value, onSelectProfile, '#suggestedProfiles');
          } catch (err) {
            (result = !0), (_iteratorError5 = err);
          } finally {
            try {
              !_iteratorNormalCompletion5 && _iterator5.return && _iterator5.return();
            } finally {
              if (result) throw _iteratorError5;
            }
          }
        }
      })
    : $.get('/api/v2/job-profiles/popular?limit=15', function (result) {
        if (result && result.data) {
          (allProfiles = result.data),
            preFilledProf.length &&
              (allProfiles = allProfiles.filter(function (profile) {
                return !preFilledProf.find(function (selectedProf) {
                  return parseInt(selectedProf.Id) === profile.Id;
                });
              })),
            (profileSuggestions = allProfiles),
            $('#suggestedProfiles .chip').remove();
          var _iteratorNormalCompletion6 = !0,
            result = !1,
            _iteratorError6 = void 0;
          try {
            for (
              var _step6, _iterator6 = profileSuggestions[Symbol.iterator]();
              !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done);
              _iteratorNormalCompletion6 = !0
            )
              setProfileChips(_step6.value, onSelectProfile, '#suggestedProfiles');
          } catch (err) {
            (result = !0), (_iteratorError6 = err);
          } finally {
            try {
              !_iteratorNormalCompletion6 && _iterator6.return && _iterator6.return();
            } finally {
              if (result) throw _iteratorError6;
            }
          }
        }
      })
  ).fail(function () {
    notify('Please try again!');
  });
}
var isProfUpdated = void 0;
function onSubmitProfiles() {
  toggleBtnState('disable', '#page3', selectedProfiles);
  var selectedProfileIds = selectedProfiles.map(function (_ref2) {
    return _ref2.Id;
  });
  isProfUpdated &&
    $.post('/api/v2/user/preferences', { Entity: 'jobprofile', Id: selectedProfileIds }, function () {}).fail(function () {
      toggleBtnState('enable', '#page3', selectedProfiles), notify('Please try again!');
    }),
    isWorkingTagged
      ? getPersonalisedCompanies(CompanyId, JobProfileId)
      : hasLocUpdated || isProfUpdated
      ? (CompanyId && JobProfileId ? getPersonalisedCompanies(CompanyId, JobProfileId) : getPopularCompanies(),
        (isProfUpdated = hasLocUpdated = !1))
      : goToDir('next');
}
var allCompanies = [];
function getPersonalisedCompanies(CompanyId, JobProfileId) {
  $.get('/api/v2/user/personalised-companies?limit=15', { companyId: CompanyId, jobprofileId: JobProfileId }, function (result) {
    (allCompanies = result.data), goToDir('next'), setFollowCompanies();
  }).fail(function () {
    notify('Please try again!');
  });
}
function getPopularCompanies() {
  $.get('/api/v2/user/personalised-companies?limit=15', function (result) {
    result && result.data && ((allCompanies = result.data), goToDir('next'), setFollowCompanies());
  }).fail(function () {
    notify('Please try again!');
  });
}
function setFollowCompanies() {
  $('.sub-heading').html(''),
    allCompanies.Recommended &&
      ($('.recommended').html(''),
      $("<p class='sub-heading'>Companies you might want to follow</p>").insertBefore('.recommended'),
      allCompanies.Recommended.forEach(function (recomm, i) {
        $('.recommended').append(setCompanyCard(recomm, i, 'recommended')), recCount < i && $('[data-id=recommended_' + i + ']').hide();
      }),
      3 < allCompanies.Recommended.length &&
        $('.recommended').append(
          '<span class="view-more recommended caption-subdued-large" onclick="showMore(' +
            allCompanies.Recommended.length +
            ", 'recommended')\">View more recommended companies</span>"
        )),
    allCompanies.TopPaying &&
      ($('.topPaying').html(''),
      $("<p class='sub-heading'>Top Paying Companies</p>").insertBefore('.topPaying'),
      allCompanies.TopPaying.forEach(function (topPaying, i) {
        $('.topPaying').append(setCompanyCard(topPaying, i, 'topPaying')), topPayingCount < i && $('[data-id=topPaying_' + i + ']').hide();
      }),
      3 < allCompanies.TopPaying.length &&
        $('.topPaying').append(
          '<span class="view-more topPaying caption-subdued-large" onclick="showMore(' +
            allCompanies.TopPaying.length +
            ", 'topPaying')\">View more top paying companies</span>"
        )),
    allCompanies.MNC &&
      ($('.mnc').html(''),
      $("<p class='sub-heading'>Top Rated MNCs</p>").insertBefore('.mnc'),
      allCompanies.MNC.forEach(function (MNC, i) {
        $('.mnc').append(setCompanyCard(MNC, i, 'topRated')), mncCount < i && $('[data-id=topRated_' + i + ']').hide();
      }),
      3 < allCompanies.MNC.length &&
        $('.mnc').append(
          '<span class="view-more topRated caption-subdued-large" onclick="showMore(' +
            allCompanies.MNC.length +
            ", 'topRated')\">View more MNCs</span>"
        )),
    allCompanies.Startup &&
      ($('.startup').html(''),
      $("<p class='sub-heading'>Popular Startups</p>").insertBefore('.startup'),
      allCompanies.Startup.forEach(function (startup, i) {
        $('.startup').append(setCompanyCard(startup, i, 'startup')), startupCount < i && $('[data-id=startup_' + i + ']').hide();
      }),
      3 < allCompanies.Startup.length &&
        $('.startup').append(
          '<span class="view-more startup caption-subdued-large" onclick="showMore(' +
            allCompanies.Startup.length +
            ", 'startup')\">View more startups</span>"
        ));
}
var drawer,
  drawerElem,
  iconElem,
  following = void 0,
  followedCompanies = [];
function toggleFollow(id) {
  (following = !1), followedCompanies.includes(id) && (following = !0);
  try {
    var clientId = '';
    ga(function (tracker) {
      clientId = tracker.get('clientId');
    }),
      $.post('/api/v2/user/' + (following ? 'unsubscribe' : 'subscribe'), { ClientId: clientId, Entity: 'company', Id: id, Email: 0 }).then(
        function (response) {
          if (!response.status) throw new Error(response.error);
          toggleFollowState(id, following);
        }
      );
  } catch (e) {
    notify('Please try again!');
  }
}
function toggleFollowState(comp, state) {
  (following = !following),
    state
      ? (followedCompanies.splice(followedCompanies.indexOf(comp), 1),
        document.getElementById(comp).setAttribute('status', '0'),
        isMandatory && !followedCompanies.length && toggleMandatory(!0, '#page4'))
      : followedCompanies.includes(comp) ||
        (followedCompanies.push(comp),
        document.getElementById(comp).setAttribute('status', '1'),
        followedCompanies.length && toggleMandatory(!1, '#page4'));
}
function setCompanyCard(company, i, type) {
  return (
    '<div data-id="' +
    type +
    '_' +
    i +
    '" class="modal-company-card">\n    <img class="logo" src="https://www.ambitionbox.com/alpha/company/photos/logos/' +
    company.Logo +
    '.jpg" alt="' +
    company.Logo +
    ' logo" onerror="this.onerror=null;this.src=\'https://www.ambitionbox.com/static/icons/company-placeholder.svg\';"/>\n    <div class="info">\n        <span class="title">\n            ' +
    company.ShortName +
    '\n        </span>\n        <span class="rating-wrap">\n            <span class="rating">\n                <i class="icon-star ' +
    getRatingColorStar(company.Rating) +
    '"></i>\n                ' +
    company.Rating.toFixed(1) +
    '\n            </span>\n            <span class="desc">\n                ' +
    tok(company.CompanyReviewsLive) +
    '\n                ' +
    (1 < company.CompanyReviewsLive ? 'Reviews' : 'Review') +
    '\n            </span>\n        </span>\n    </div>\n    <button class="follow-btn" id="' +
    company.CompanyId +
    '" status="0" onclick="toggleFollow(' +
    company.CompanyId +
    ')"></button>\n</div>'
  );
}
function getRatingColorStar(val) {
  return 'color-rating-' + Math.round(val + 0.5);
}
function trunDecimal(number, digits) {
  return (number = Number(number)).toFixed(digits).replace(/\.0$/, '');
}
function tok(count) {
  return 1e3 <= count ? trunDecimal(count / 1e3, 1) + 'k' : 1e7 <= count ? trunDecimal(count / 1e5, 1) + 'Cr' : count;
}
function showMore(arrLen, type) {
  'recommended' === type &&
    ($('[data-id=' + type + '_' + recCount + ']')
      .nextAll(['' + recCount])
      .slice(0, 3)
      .show(),
    (recCount = arrLen <= recCount + 3 ? arrLen : recCount + 3) === arrLen - 1 && $('.view-more.' + type).hide()),
    'topPaying' === type &&
      ($('[data-id=' + type + '_' + topPayingCount + ']')
        .nextAll(['' + topPayingCount])
        .slice(0, 3)
        .show(),
      (topPayingCount = arrLen <= topPayingCount + 3 ? arrLen : topPayingCount + 3) === arrLen - 1 && $('.view-more.' + type).hide()),
    'topRated' === type &&
      ($('[data-id=' + type + '_' + mncCount + ']')
        .nextAll(['' + mncCount])
        .slice(0, 3)
        .show(),
      (mncCount = arrLen <= mncCount + 3 ? arrLen : mncCount + 3) === arrLen - 1 && $('.view-more.' + type).hide()),
    'startup' === type &&
      ($('[data-id=' + type + '_' + startupCount + ']')
        .nextAll(['' + startupCount])
        .slice(0, 3)
        .show(),
      (startupCount = arrLen <= startupCount + 3 ? arrLen : startupCount + 3) === arrLen - 1 && $('.view-more.' + type).hide());
}
function setIsMandatory(bool) {
  toggleState((isMandatory = bool), selectedLocations, '#page2'),
    toggleState(bool, selectedProfiles, '#page3'),
    toggleState(bool, followedCompanies, '#page4');
}
function toggleState(bool, arr, pageEle) {
  bool && 0 === arr.length ? toggleMandatory(!0, pageEle) : toggleMandatory(!1, pageEle);
}
function toggleBtnState(state, pageEle, arr) {
  'disable' === state
    ? $(pageEle + ' .modal-next-btn').addClass('disabled-btn')
    : $(pageEle + ' .modal-next-btn').removeClass('disabled-btn');
}
function forceCustomSelect(selector, setActive) {
  $('select' + selector).each(function () {
    var customSelect = $(this).attr('customSelect'),
      preventDuplicateOption = null != $(this).attr('preventDuplicateOption');
    if ('false' != customSelect) {
      for (
        var $this = $(this),
          numberOfOptions = $(this).children('option').length,
          $customSelect =
            ($this.addClass('select-hidden'),
            'select' != $this.parent().attr('class') && $this.wrap('<div class="select"></div>'),
            $this.after('<div class="select-custom"></div>'),
            $this.next('div.select-custom')),
          $selctedValue = $this.children('option:selected').text(),
          customSelect =
            ($customSelect.text($selctedValue),
            $customSelect.append('<i class="icon-chevron-right"></i>'),
            $this.children('option:selected').attr('value')),
          $list =
            (0 == $this.closest('form').find('.js-inputField').length &&
              (($inputField = "<input class='js-inputField' name='Type' type='hidden' value=" + customSelect + ' />'),
              $this.after($inputField)),
            $('<ul />', { class: 'select-options' }).insertAfter($customSelect)),
          i = 0;
        i < numberOfOptions;
        i++
      )
        $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val(),
          class: $this.children('option').eq(i).text() == $selctedValue ? 'active' : '',
          hidden: preventDuplicateOption && $this.children('option').eq(i).text() == $selctedValue,
        }).appendTo($list);
      customSelect = $list.children('li');
      setActive && $customSelect.addClass('active'),
        $customSelect.click(function (e) {
          e.stopPropagation(),
            $('div.select-custom.active')
              .not(this)
              .each(function () {
                $(this).removeClass('active').next('ul.select-options').show();
              }),
            $(this).toggleClass('active').next('ul.select-options').toggle();
        }),
        customSelect.click(function (e) {
          $customSelect.text($(this).text()).removeClass('active'),
            $customSelect.append('<i class="icon-chevron-right"></i>'),
            preventDuplicateOption && ($('ul.select-options li[hidden]').removeAttr('hidden'), $(this).attr('hidden', 'hidden')),
            $('ul.select-options li.active').removeClass('active'),
            $(this).addClass('active');
          var rel = $(this).attr('rel'),
            rel =
              ($(this).closest('form').find('.js-inputField').val(rel).trigger('change'),
              $(this).parent().parent().siblings('.search-input-wrapper').children('.twitter-typeahead').find('input').attr('name')),
            rel = rel || $(this).parent().parent().siblings('.twitter-typeahead').find('input').attr('name'),
            searchInputFieldValue = $('input[name=' + rel + ']').val(),
            menuSearchPresent = $('.search_new').css('display');
          'block' == menuSearchPresent && (searchInputFieldValue = $('input[name=' + rel + ']').val()),
            (searchInputFieldValue =
              'none' == menuSearchPresent
                ? $('input[name=' + rel + ']')
                    .eq(1)
                    .val()
                : searchInputFieldValue) && $('.searchForm').submit(),
            $list.slideUp('fast');
        }),
        $(document).click(function (event) {
          $(event.target) != $('.tt-menu') && ($customSelect.removeClass('active'), $list.hide());
        }),
        $('.tt-menu').on('click', function (e) {
          e.stopPropagation();
        });
    }
  });
}
function Drawer(drawerElem) {
  if (!drawerElem) return null;
  try {
    function openDrawer(s) {
      (opened = !0),
        setTransition((s = s || 0.225)),
        (drawerElem.style.opacity = 1),
        (drawerBg.style.opacity = 1),
        (drawerBg.style.visibility = 'visible'),
        (body.style.overflow = 'hidden'),
        transfrom('translateX(0)'),
        drawerIcon.setState(1, s),
        onMove(width, 1, !0, s),
        setTimeout(function () {
          clearTransition(), drawerStarted || onOpened();
        }, 1e3 * s);
    }
    function _closeDrawer(s) {
      (opened = !1),
        setTransition((s = s || 0.225)),
        (body.style.overflow = 'auto'),
        transfrom('translateX(' + width + 'px)'),
        drawerIcon.setState(0, s),
        onMove(0, 0, !0, s),
        setTimeout(function () {
          var mobileSearchWrapper;
          clearTransition(),
            drawerStarted ||
              ((mobileSearchWrapper = $('.mobile_search.mobile-container-white')) &&
              0 < mobileSearchWrapper.length &&
              mobileSearchWrapper.hasClass('toggle-slide')
                ? (body.style.overflow = 'hidden')
                : ((drawerElem.style.opacity = 0.001), (drawerBg.style.visibility = 'hidden')),
              onClosed());
        }, 1e3 * s);
    }
    function _toggleDrawer() {
      (opened ? _closeDrawer : openDrawer)(0.225);
    }
    var drawerBg,
      antiSelect,
      setProperty = function (elem, property, value) {
        elem.style[property] = value;
      },
      transfrom = function (x) {
        setProperty(drawerElem, transformProp, x + ' ' + trZ);
      },
      setTransition = function (s) {
        setProperty(drawerElem, transitionProp, propPrefixCss + 'transform ' + s + 's cubic-bezier(0.0, 0.0, 0.2, 1)'),
          setProperty(drawerBg, transitionProp, 'opacity ' + s + 's cubic-bezier(0.0, 0.0, 0.2, 1)');
      },
      clearTransition = function () {
        setProperty(drawerElem, transitionProp, 'none'), setProperty(drawerBg, transitionProp, 'none');
      },
      drawerIcon = { set: function (a) {}, setState: function (a, b) {}, setOnClick: function (a) {} },
      drawerStarted = !1,
      width = drawerElem.offsetWidth,
      opened = !1,
      trZ =
        ((a = navigator.userAgent || navigator.vendor || window.opera),
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          ),
        window.navigator.msPointerEnabled,
        window.navigator.pointerEnabled,
        'translateZ(0)'),
      transformProp = 'transform',
      transitionProp = 'transition',
      propPrefixCss = '',
      onOpened = function () {},
      onClosed = function () {},
      onMove = function (x, percent, animation, duration) {};
    (this.setDrawerIcon = function (icon) {
      (drawerIcon = icon).setOnClick(function (e) {
        _toggleDrawer();
      });
    }),
      (this.getDrawerIcon = function () {
        return drawerIcon;
      }),
      (this.resetIconOnClick = function () {
        drawerIcon.setOnClick(function (e) {
          _toggleDrawer();
        });
      }),
      (this.onOpenListener = function (listener) {
        onOpened = listener;
      }),
      (this.onCloseListener = function (listener) {
        onClosed = listener;
      }),
      (this.onMoveListener = function (listener) {
        onMove = listener;
      }),
      (this.openDrawer = function () {
        openDrawer();
      }),
      (this.closeDrawer = function () {
        _closeDrawer();
      }),
      (this.toggleDrawer = function () {
        _toggleDrawer();
      }),
      (this.isOpen = function () {
        return opened;
      }),
      ((drawerBg = document.createElement('DIV')).className = 'drawer_bg'),
      (drawerBg.id = 'drawer_bg'),
      drawerElem.parentElement.insertBefore(drawerBg, drawerElem),
      (drawerBg.onclick = function () {
        opened && _closeDrawer(0.225);
      }),
      ((antiSelect = document.createElement('DIV')).className = 'antiSelect'),
      drawerElem.appendChild(antiSelect);
    var vendors,
      label = document.createElement('DIV');
    if (((label.className = 'label'), drawerElem.appendChild(label), void 0 === antiSelect.style.transform))
      for (var vendor in (vendors = ['Webkit', 'Moz', 'ms', 'O']))
        void 0 !== antiSelect.style[vendors[vendor] + 'Transform'] &&
          ((transformProp = vendors[vendor] + 'Transform'), (propPrefixCss = '-' + vendors[vendor].toLowerCase() + '-')),
          void 0 !== antiSelect.style[vendors[vendor] + 'Transition'] && (transitionProp = vendors[vendor] + 'Transition');
    /.*opera.*presto/i.test(navigator.userAgent) && (trZ = '');
  } catch (error) {}
  var a;
}
function DrawerIcon(icon) {
  try {
    function setProperty(elem, property, value) {
      elem.style[property] = value;
    }
    var ic,
      line1,
      line2,
      line3,
      rotateLine,
      scaleX,
      transY,
      transX,
      scaleX2,
      transX2,
      rotateIc,
      direction = !0,
      locked = !1,
      transformProp = 'transform',
      transitionProp = 'transition',
      trZ = 'translateZ(0)',
      propPrefixCss = '';
    (this.state = function () {
      return direction;
    }),
      (this.setOnClick = function (listener) {
        icon.onclick = listener;
      }),
      (this.set = function (percent) {
        locked ||
          (100 <= (percent = (percent = 100 < percent ? 100 : percent) < 0 ? 0 : percent) && (direction = !1),
          (scaleX2 = 1 - 0.002 * percent),
          (transX2 = -0.01 * percent),
          (rotateIc = (direction = percent <= 0 ? !0 : direction) ? 1.8 * percent : 360 - 1.8 * percent),
          setProperty(
            line1,
            transformProp,
            'rotate(' +
              (rotateLine = 0.45 * percent) +
              'deg) scaleX(' +
              (scaleX = 1 - (1 / 300) * percent) +
              ') translateY(' +
              (transY = 0.054 * percent) +
              'px) translateX(' +
              (transX = 0.033 * percent) +
              'px) ' +
              trZ
          ),
          setProperty(line2, transformProp, 'scaleX(' + scaleX2 + ') translateX(' + transX2 + 'px) ' + trZ),
          setProperty(
            line3,
            transformProp,
            'rotate(' + -rotateLine + 'deg) scaleX(' + scaleX + ') translateY(' + -transY + 'px) translateX(' + transX + 'px) ' + trZ
          ),
          setProperty(ic, transformProp, 'rotate(' + rotateIc + 'deg) ' + trZ));
      }),
      (this.setState = function (state, duration) {
        !(function (duration) {
          duration = propPrefixCss + 'transform ' + duration + 's ease';
          setProperty(line1, transitionProp, duration),
            setProperty(line2, transitionProp, duration),
            setProperty(line3, transitionProp, duration),
            setProperty(ic, transitionProp, duration);
        })((duration = duration || 0.225));
        var temp = this;
        switch (state) {
          case 0:
            this.set(1);
            break;
          case 1:
            this.set(100);
        }
        setTimeout(function () {
          setProperty(line1, transitionProp, 'none'),
            setProperty(line2, transitionProp, 'none'),
            setProperty(line3, transitionProp, 'none'),
            setProperty(ic, transitionProp, 'none'),
            0 === state && temp.set(0);
        }, 1e3 * Number(duration));
      }),
      (this.lock = function () {
        locked = !0;
      }),
      (this.unLock = function () {
        locked = !1;
      }),
      (icon.innerHTML += '<span class="ic"><i class="line one"></i><i class="line two"></i><i class="line thr"></i></span>'),
      (ic = icon.querySelector('.ic')),
      (line1 = ic.querySelector('.one')),
      (line2 = ic.querySelector('.two')),
      (line3 = ic.querySelector('.thr'));
    var vendors,
      testEl = document.createElement('div');
    if (void 0 === testEl.style.transform)
      for (var vendor in (vendors = ['Webkit', 'Moz', 'ms', 'O']))
        void 0 !== testEl.style[vendors[vendor] + 'Transform'] &&
          ((transformProp = vendors[vendor] + 'Transform'), (propPrefixCss = '-' + vendors[vendor].toLowerCase() + '-')),
          void 0 !== testEl.style[vendors[vendor] + 'Transition'] && (transitionProp = vendors[vendor] + 'Transition');
    /.*opera.*presto/i.test(navigator.userAgent) && (trZ = '');
  } catch (error) {}
}
window.addEventListener('load', function () {
  $('.input-group input')
    .on('focus', function () {
      var id = $(this).attr('id');
      $("label[for='" + id + "']").addClass('raise-placeholder focus-placeholder');
    })
    .blur(function () {
      var id = $(this).attr('id');
      '' === $(this).val()
        ? $("label[for='" + id + "']").removeClass('raise-placeholder focus-placeholder')
        : $("label[for='" + id + "']").removeClass('focus-placeholder');
    });
}),
  forceCustomSelect(''),
  window.addEventListener('load', function (e) {
    try {
      (drawerElem = document.getElementById('drawer')),
        (iconElem = document.getElementById('rx_icon')),
        drawerElem &&
          ((drawer = new Drawer(drawerElem)).setDrawerIcon(new DrawerIcon(iconElem)),
          $('.close-drawer').on('click', function (e) {
            drawer.isOpen() && drawer.closeDrawer(0.5), e.stopPropagation();
          })),
        (body = document.getElementsByTagName('BODY')[0]);
    } catch (error) {}
  }),
  (function (root, factory) {
    'object' === ('undefined' == typeof exports ? 'undefined' : _typeof(exports))
      ? (module.exports = factory(root))
      : 'function' == typeof define && define.amd
      ? define([], factory)
      : (root.LazyLoad = factory(root));
  })(('undefined' == typeof global && window) || global, function (root) {
    'use strict';
    'function' == typeof define && define.amd && (root = window);
    function extend() {
      var extended = {},
        deep = !1,
        i = 0,
        length = arguments.length;
      for ('[object Boolean]' === Object.prototype.toString.call(arguments[0]) && ((deep = arguments[0]), i++); i < length; i++)
        !(function (obj) {
          for (var prop in obj)
            Object.prototype.hasOwnProperty.call(obj, prop) &&
              (deep && '[object Object]' === Object.prototype.toString.call(obj[prop])
                ? (extended[prop] = extend(!0, extended[prop], obj[prop]))
                : (extended[prop] = obj[prop]));
        })(arguments[i]);
      return extended;
    }
    var _$,
      defaults = { src: 'data-src', srcset: 'data-srcset', selector: '.lazyload', root: null, rootMargin: '0px', threshold: 0 };
    function LazyLoad(images, options) {
      (this.settings = extend(defaults, options || {})),
        (this.images = images || document.querySelectorAll(this.settings.selector)),
        (this.observer = null),
        this.init();
    }
    return (
      (LazyLoad.prototype = {
        init: function () {
          var self, observerConfig;
          root.IntersectionObserver
            ? ((observerConfig = {
                root: (self = this).settings.root,
                rootMargin: this.settings.rootMargin,
                threshold: [this.settings.threshold],
              }),
              (this.observer = new IntersectionObserver(function (entries) {
                Array.prototype.forEach.call(entries, function (entry) {
                  var src, srcset;
                  entry.isIntersecting &&
                    (self.observer.unobserve(entry.target),
                    (src = entry.target.getAttribute(self.settings.src)),
                    (srcset = entry.target.getAttribute(self.settings.srcset)),
                    'img' === entry.target.tagName.toLowerCase()
                      ? (src && (entry.target.src = src), srcset && (entry.target.srcset = srcset))
                      : (entry.target.style.backgroundImage = 'url(' + src + ')'));
                });
              }, observerConfig)),
              Array.prototype.forEach.call(this.images, function (image) {
                self.observer.observe(image);
              }))
            : this.loadImages();
        },
        loadAndDestroy: function () {
          this.settings && (this.loadImages(), this.destroy());
        },
        loadImages: function () {
          var self;
          this.settings &&
            ((self = this),
            Array.prototype.forEach.call(this.images, function (image) {
              var src = image.getAttribute(self.settings.src),
                srcset = image.getAttribute(self.settings.srcset);
              'img' === image.tagName.toLowerCase()
                ? (src && (image.src = src), srcset && (image.srcset = srcset))
                : (image.style.backgroundImage = "url('" + src + "')");
            }));
        },
        destroy: function () {
          this.settings && (this.observer.disconnect(), (this.settings = null));
        },
      }),
      (root.lazyload = function (images, options) {
        return new LazyLoad(images, options);
      }),
      root.jQuery &&
        ((_$ = root.jQuery).fn.lazyload = function (options) {
          return ((options = options || {}).attribute = options.attribute || 'data-src'), new LazyLoad(_$.makeArray(this), options), this;
        }),
      LazyLoad
    );
  }),
  $(function () {
    var pgurl = window.location.origin + window.location.pathname;
    $('#bottom-nav-wrapper a').each(function (index) {
      0 !== index ||
        ($(this).attr('href') != pgurl && '' != $(this).attr('href')) ||
        ($(this).addClass('router-link-exact-active'),
        (index = $(this).find('img').attr('src')),
        $(this).find('img').attr('src', index.replace('home', 'home-selected')));
    }),
      document.querySelector('#bottom-nav-wrapper') && !SessionStorage.get('ab_android') && $('footer').css('padding-bottom', '3.5rem');
  });
var sequence = [
    { id: 'Reviews', title: 'Reviews' },
    { id: 'Salaries', title: 'Salaries' },
    { id: 'InterviewQuestions', title: 'Interviews' },
    { id: 'UsersPerMonth', title: 'Users/Month' },
  ],
  unitMapping = { 'Lakh+': 'L+', 'Crore+': 'Cr+' },
  createStatsElement =
    (($isDesktop = 768 < $(window).width()),
    function (data) {
      var footerStats;
      ($parentEle = $('#amboxStats')) &&
        $parentEle.length &&
        ((footerStats = ''),
        $.each(sequence, function (i, item) {
          var id = item.id,
            item = item.title,
            id = getCount(data[id]);
          id && (footerStats += '<div class="item"><span>' + id + '</span><p>' + item + '</p></div>');
        }),
        $parentEle.append(footerStats));
    }),
  getCount = function (count) {
    if (!count) return '';
    if ($isDesktop) return count;
    count = count.split(' ');
    return '' + count[0] + unitMapping[count[1]];
  },
  righColSequence = [
    { id: 'Reviews', title: 'Company Reviews' },
    { id: 'Salaries', title: 'Company Salaries' },
    { id: 'InterviewQuestions', title: 'Interview Experiences' },
  ],
  createRightColStats = function (data) {
    var rightColStats;
    ($rightColEle = $('#rightColStats')) &&
      $rightColEle.length &&
      ((rightColStats = ''),
      $.each(righColSequence, function (i, item) {
        var id = item.id,
          item = item.title,
          id = getCount(data[id]);
        id &&
          (rightColStats +=
            '<div class="right-tile__stats_item">\n                <div class=\'stats-count\'>' +
            id +
            '</div>\n                <p>' +
            item +
            '</p>\n            </div>');
      }),
      $rightColEle.append(rightColStats));
  },
  updateUserCount = function (data, classSelector, plusClass) {
    try {
      if (!classSelector || !plusClass) throw 'classSelector or plusClass is Empty';
      if (!data || !data.UsersPerMonth) throw 'Data or UserPermonth key in data not found';
      var elementList = document.getElementsByClassName(classSelector),
        count = data.UsersPerMonth;
      if (elementList && elementList.length && count)
        for (var _i3 in elementList)
          elementList[_i3] && !elementList[_i3].classList.contains(plusClass) && (count = count.split('+').join('')),
            (elementList[_i3].innerHTML = count);
    } catch (e) {
      return '';
    }
  },
  messaging =
    ($(document).ready(function () {
      $.get('/api/v2/footer/stats')
        .done(function (response) {
          var data = response.data;
          response.code;
          createStatsElement(data), createRightColStats(data), updateUserCount(data, 'js-user-count', 'plus');
        })
        .fail(function (e) {});
    }),
    null);
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    (script.type = 'text/javascript'),
      (script.src = src),
      (script.onload = resolve),
      (script.onerror = reject),
      document.body.appendChild(script);
  });
}
function initFirebase(swReg) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDiL7-8PmAs2VBpR3_zZnRxOru1FNlftOg',
    projectId: 'ambitionbox-com',
    messagingSenderId: '459364423555',
    appId: '1:459364423555:web:fb6f222eeb250c732488b6',
    measurementId: 'G-7YDDNPKLVM',
  }),
    (messaging = firebase.messaging()),
    initNotifIntent(swReg);
}
function initNotifIntent(swReg) {
  messaging
    .getToken({
      serviceWorkerRegistration: swReg,
      vapidKey: 'BEwXx2yN1Z1YJzcXXAl8ic9-G5HoS8wOOURjUUYCe7T_HEMUYZlSMnA6tza79187ldieqBmmzTHKCa6074CHQH0',
    })
    .then(function (currentToken) {
      currentToken && sendTokenToServer(currentToken);
    })
    .catch(function (err) {});
}
function sendTokenToServer(currentToken) {
  $.post('/api/v2/user/device/register', { token: currentToken })
    .done(function (result) {
      if (200 != result.code) throw new Error(result.message);
    })
    .fail(function (err) {});
}
window.addEventListener('load', function () {
  var firebaseLibs = [
    'https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js',
    'https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js',
  ];
  'serviceWorker' in navigator &&
    navigator.serviceWorker
      .register('/sw.js')
      .then(function (swReg) {
        isLogedIn() &&
          loadScript(firebaseLibs[0]).then(function () {
            loadScript(firebaseLibs[1]).then(function () {
              initFirebase(swReg);
            });
          });
      })
      .catch(function (error) {});
});
var pagename = '',
  followEle = document.getElementsByClassName('follow-btn')[0],
  contriEle = document.getElementsByClassName('contribute-btn')[0],
  btnWrapEle = document.getElementsByClassName('button-wrap')[0],
  colRightEle = document.getElementsByClassName('header-col-right')[0],
  infoEle = document.getElementById('claimAcc') || document.getElementById('engagedEmp'),
  urlPathName = window.location.pathname;
function goToContribute(compName) {
  var url = '';
  switch (pagename) {
    case 'CompSalaries':
      url = '/contribute/salary';
      break;
    case 'CompBenefits':
      url = '/contribute/company-review';
      break;
    case 'CompInterviews':
      url = '/contribute/interview-story';
  }
  url && (window.location.href = url + '?company_name=' + encodeURIComponent(compName) + '&campaign=company_info_header');
}
urlPathName.startsWith('/interviews')
  ? (pagename = 'CompInterviews')
  : urlPathName.startsWith('/salaries')
  ? (pagename = 'CompSalaries')
  : urlPathName.startsWith('/benefits') && (pagename = 'CompBenefits'),
  pagename &&
    followEle &&
    contriEle &&
    (followEle.classList.add('customFollowStyle'),
    (contriEle.style.display = 'initial'),
    ($isTablet = $(window).width() <= 1024) &&
      colRightEle &&
      btnWrapEle &&
      infoEle &&
      (colRightEle.classList.add('flex-column-rev'),
      btnWrapEle.classList.add('customBtnWrapStyle'),
      infoEle.classList.add('customInfoStyle')));
var ANDROID_KEY = 'ab_android',
  isAppCheck = function () {
    var appParam = new URLSearchParams(document.location.search).get(ANDROID_KEY);
    return !!SessionStorage.get(ANDROID_KEY) || (!!appParam && (SessionStorage.set(ANDROID_KEY, !0), trackAppOpen(), !0));
  },
  trackAppOpen = function () {
    'undefined' != typeof ga &&
      ga &&
      (ga('set', 'dimension6', '1'), ga('send', { hitType: 'event', eventCategory: 'app', eventAction: 'open' }));
  },
  hideFooter = function () {
    var bottomNavElement,
      footerEle = document.getElementsByTagName('footer');
    footerEle &&
      0 != footerEle.length &&
      ((bottomNavElement = document.querySelector('#bottom-nav-wrapper')),
      (footerEle = footerEle[0]),
      bottomNavElement
        ? ((footerEle.innerHTML = ''),
          (footerEle.style.cssText = 'padding-bottom: 0 !important; padding-top: 0 !important; margin-bottom: 0; margin-top: 3.75rem;'))
        : footerEle.remove());
  };
function _getCookie(name) {
  name = ('; ' + document.cookie).split('; ' + name + '=');
  if (2 === name.length) return name.pop().split(';').shift();
}
!(function () {
  try {
    if (!isAppCheck()) return;
    hideFooter();
  } catch (error) {}
})();
var postUbaData = function (eventName, payload) {
    try {
      window.ub &&
        window.ub.track &&
        window.ub.track(
          eventName,
          _extends({}, payload, { loginStatus: !!_getCookie('UAC_K'), cnid: _getCookie('UAC_I') || '', dId: _getCookie('dId') || '' })
        );
    } catch (err) {}
  },
  postUbaBulkData = function (bulkPayload) {
    try {
      var finalBulkPayload = [],
        eventslen = [].concat(_toConsumableArray(bulkPayload)).length;
      [].concat(_toConsumableArray(bulkPayload)).forEach(function (obj) {
        obj = _extends({}, obj, { eventType: 'bulk', eventslen: eventslen });
        finalBulkPayload.push(obj);
      }),
        window.ub.track(void 0, finalBulkPayload);
    } catch (err) {}
  };
function resolvePageViewUba() {
  try {
    var _ref3 = window.$appliedFilters || window.selectedParams || '',
      designation = _ref3.designation,
      profile = _ref3.profile,
      experience = _ref3.experience,
      _location = _ref3.location,
      division = _ref3.division,
      designationData = designation || profile,
      _page = getCurrentPageNumber(),
      payload = _extends(
        { actionType: 'view', pageName: pageName },
        window.companyId ? { companyId: companyId } : {},
        designationData ? { designationCluster: designationData.split(',') } : {},
        _location ? { locationCluster: _location.split(',') } : {},
        experience ? { expCluster: experience.split(',') } : {},
        division ? { departmentCluster: division.split(',') } : {},
        _page ? { page: _page } : {}
      );
    postUbaData('pageView', payload);
  } catch (err) {}
}
function logLoginAttemptOnUba(authType, status) {
  try {
    postUbaData('userAction', { actionType: status, authType: authType, pageName: pageName });
  } catch (e) {}
  localStorage.removeItem('loginInitiated');
}
function triggerUbaOnFormSubmit(formData, payload) {
  try {
    postUbaData('userAction', _extends({}, payload, { actionType: 'click', clickLabel: 'submit', pageName: pageName, formData: formData }));
  } catch (e) {}
}
function logContentCreatedOnUba(payload) {
  var userData,
    allCookies = ambox__getAllCookie();
  null != allCookies.usr_data && (userData = JSON.parse(allCookies.usr_data));
  try {
    postUbaData('contentCreated', _extends({}, payload, userData ? { userId: userData.UserId } : {}));
  } catch (e) {}
}
function logErrorInUBA(errorPayload) {
  try {
    postUbaData('ErrorTracking', _extends({}, errorPayload, { errorLevel: errorPayload.errorLevel || 'trace' }));
  } catch (e) {}
}
function setErrorPayload(payload) {
  try {
    var error;
    payload.errorStackTrace || ((error = new Error()), (payload.errorStackTrace = error.stack)),
      logErrorInUBA(
        _extends(
          {},
          payload,
          { pageUrl: window.location.pathname },
          window.targetElement ? { lastClickedElement: window.targetElement.outerHTML } : {},
          window.targetElementText ? { lastClickedElementText: window.targetElementText } : {}
        )
      );
  } catch (e) {}
}
function getCurrentPageNumber() {
  var pageNumber = new RegExp('[?&]page=([^&#]*)').exec(window.location.href);
  if (null != pageNumber) return decodeURI(Number(pageNumber[1]));
}
function getCurrentDateString() {
  return new Date().toLocaleTimeString('en-IN', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: !1,
  });
}
$(document).ready(function () {
  resolvePageViewUba();
});
var bellIcon = '/img/icons/bell-icon.svg',
  filledBellIcon = '/img/icons/filled-bell-icon.svg',
  toggleId = document.getElementById('notification'),
  notificationListId = document.querySelector('#select-notification'),
  unreadCountId = document.getElementById('unread-count'),
  notificationCountId = document.getElementById('notification-count'),
  iconId = document.getElementById('bell-icon'),
  defaultCount = defaultNotifications.length,
  loginList = [],
  loginCount = 0,
  loginUnreadCount = 0,
  Notification = function Notification(defaultNotifications, defaultCount) {
    _classCallCheck(this, Notification), (this.notificationCount = defaultCount), (this.list = defaultNotifications);
  },
  Store = (function () {
    function Store() {
      _classCallCheck(this, Store);
    }
    return (
      _createClass(Store, null, [
        {
          key: 'getStateObject',
          value: function () {
            var initialState = new Notification(defaultNotifications, defaultCount),
              tempObj = {};
            return (
              localStorage.getItem('notifications')
                ? (tempObj = JSON.parse(localStorage.getItem('notifications')))
                : ((tempObj = JSON.parse(JSON.stringify(initialState))), localStorage.setItem('notifications', JSON.stringify(tempObj))),
              tempObj
            );
          },
        },
        {
          key: 'getNotificationCount',
          value: function () {
            var notificationCount = this.getStateObject().notificationCount;
            return notificationCount || 0;
          },
        },
        {
          key: 'setNotificationCount',
          value: function (data) {
            var localState = JSON.parse(localStorage.getItem('notifications')) ? JSON.parse(localStorage.getItem('notifications')) : {};
            (localState.notificationCount = data), localStorage.setItem('notifications', JSON.stringify(localState));
          },
        },
        {
          key: 'getNotifications',
          value: function () {
            var list = this.getStateObject().list;
            return list && list.length ? JSON.parse(JSON.stringify(list)) : [];
          },
        },
        {
          key: 'setNotifications',
          value: function (data) {
            var dataObj = localStorage.getItem('notifications') ? JSON.parse(localStorage.getItem('notifications')) : {};
            (dataObj.list = data), localStorage.setItem('notifications', JSON.stringify(dataObj));
          },
        },
        {
          key: 'unreadCount',
          value: function () {
            var list = this.getNotifications(),
              count = 0;
            return (
              list &&
                list.length &&
                list.forEach(function (value) {
                  value && value.Status < 2 && count++;
                }),
              count
            );
          },
        },
      ]),
      Store
    );
  })(),
  UserAction = (function () {
    function UserAction() {
      _classCallCheck(this, UserAction);
    }
    return (
      _createClass(UserAction, null, [
        {
          key: 'closeNotification',
          value: function () {
            UserAction.closeAllOptions(), disableBodyScrollLock(), (iconId.src = bellIcon), $('#notification').fadeOut(100);
          },
        },
        {
          key: 'openNotification',
          value: function () {
            var notificationIds, newList;
            (iconId.src = filledBellIcon),
              $('#notification').fadeIn(100),
              isLogedIn()
                ? ((notificationIds = []),
                  (newList =
                    loginList && loginList.length
                      ? loginList.map(function (value, i) {
                          return 0 == value.Status
                            ? (notificationIds.push(value.Id), _extends({}, value, { Status: 1 }))
                            : _extends({}, value);
                        })
                      : []),
                  notificationIds.length && loginAction('Seen', notificationIds, newList))
                : (trackNotificationBellClick(), Store.setNotificationCount(0), UserAction.displayNotificationCount()),
              enableBodyScrollLock();
          },
        },
        {
          key: 'updateUnreadCount',
          value: function () {
            var count = Store.unreadCount();
            unreadCountId.innerHTML = 0 == count ? '' : '(' + count + ')';
          },
        },
        {
          key: 'updateMarkAllAsRead',
          value: function () {
            var list = isLogedIn() ? loginList : Store.getNotifications(),
              selectText = document.getElementById('markallasread'),
              list =
                ((disableUnread = !0),
                list.forEach(function (element) {
                  element.Status < 2 && (disableUnread = !1);
                }),
                disableUnread ? '#97a0be' : '#5670fb');
            selectText.style.color = list;
          },
        },
        {
          key: 'displayList',
          value: function () {
            (notificationListId.innerHTML = ''),
              (isLogedIn() ? loginList : Store.getNotifications()).forEach(function (element, index) {
                element && UserAction.addToList(element, index);
              }),
              UserAction.updateMarkAllAsRead(),
              (unreadCountId.innerHTML = isLogedIn()
                ? 0 == loginUnreadCount
                  ? ''
                  : '(' + loginUnreadCount + ')'
                : 0 == Store.unreadCount()
                ? ''
                : '(' + Store.unreadCount() + ')');
          },
        },
        {
          key: 'displayNotificationCount',
          value: function () {
            var count = isLogedIn() ? loginCount : Store.getNotificationCount();
            0 < count
              ? ((notificationCountId.style.display = 'flex'), (notificationCountId.textContent = count <= 9 ? count : '9+'))
              : (notificationCountId.style.display = 'none');
          },
        },
        {
          key: 'addToList',
          value: function (element, index) {
            var li = document.createElement('li'),
              Id = element.Id,
              _element$Status = element.Status,
              _element$Status = void 0 === _element$Status ? 0 : _element$Status,
              _element$Default = element.Default,
              _element$Created = element.Created,
              element = element.Data,
              _element$Data$Title = element.Title,
              CTAText = element.CTAText,
              element = element.Icon;
            (li.innerHTML =
              '<div class="notificationType1">\n      <div class="col-01">\n          <img src=' +
              (void 0 === element ? '' : element) +
              ' height="46" width="46" class="circle lazyload" alt="company image" />\n      </div>\n      <div class="col-02">\n          ' +
              (void 0 === _element$Data$Title ? '' : _element$Data$Title) +
              '\n          ' +
              (CTAText ? '<div class="notification-cta">' + CTAText + '</div>' : '') +
              '\n      </div>\n      <div class="col-03">\n          <div class="show-notification-options">\n            ' +
              (0 === (void 0 === _element$Default ? 0 : _element$Default)
                ? '<div class="options-icon">\n                <img alt="dots icon" class="lazyload" src="https://www.ambitionbox.com/static/icons/dots.svg" width="3" height="14" />\n            </div>'
                : '<div></div>') +
              '\n            <div style="display:none;" class="dropdown-options" id="dropdown-list-option">\n              <span id="delete-option">Delete</span>\n            </div>\n            <div class="timestamp">\n              ' +
              formatTimeAgo(void 0 === _element$Created ? '' : _element$Created, !0) +
              '\n            </div>\n          </div>\n      </div>\n  </div>'),
              index < (isLogedIn() ? loginList : Store.getNotifications()).length - 1 && (li.innerHTML += '<hr class="list-divider"/>'),
              (li.id = Id),
              (li.className += _element$Status < 2 ? ' read' : ''),
              notificationListId.append(li);
          },
        },
        {
          key: 'closeAllOptions',
          value: function () {
            for (var lists = document.querySelectorAll('#select-notification>li'), _i4 = 0; _i4 < lists.length; _i4++) {
              var option = lists[_i4].querySelector('.dropdown-options');
              option && 'block' === option.style.display && (option.style.display = 'none');
            }
          },
        },
      ]),
      UserAction
    );
  })();
function toggleNotification() {
  $('#notification').is(':hidden') ? UserAction.openNotification() : UserAction.closeNotification();
}
function markAsRead(index) {
  var notificationIds, label, newList;
  isLogedIn()
    ? ((notificationIds = []),
      (newList =
        loginList && loginList.length
          ? loginList.map(function (value, i) {
              return value.Id === index && value.Status < 2
                ? (notificationIds.push(value.Id), _extends({}, value, { Status: 2 }))
                : _extends({}, value);
            })
          : []),
      notificationIds.length && loginAction('Read', notificationIds, newList))
    : ((newList = JSON.parse(JSON.stringify(Store.getNotifications()))),
      (label = ''),
      (newList =
        newList && newList.length
          ? newList.map(function (value, i) {
              return value.Id === index
                ? ((label = value.Status < 2 ? 'unreadNotification' : 'readNotification'), _extends({}, value, { Status: 2 }))
                : _extends({}, value);
            })
          : []),
      trackNotificationClick(index, label),
      Store.setNotifications(newList),
      UserAction.displayList());
}
function formatTimeAgo(text) {
  var short = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
  if (!text) return '';
  var seconds = Math.floor((new Date() - new Date(text.replace(/\s/, 'T'))) / 1e3),
    interval = seconds / 31536e3;
  return 1 < interval
    ? Math.floor(interval) + (short ? 'y' : 'y ago')
    : 1 < (interval = seconds / 2592e3)
    ? Math.floor(interval) + (short ? 'mo' : 'mon ago')
    : 1 < (interval = seconds / 86400)
    ? Math.floor(interval) + (short ? 'd' : 'd ago')
    : 1 < (interval = seconds / 3600)
    ? Math.floor(interval) + (short ? 'h' : 'h ago')
    : 1 < (interval = seconds / 60)
    ? Math.floor(interval) + (short ? 'm' : 'm ago')
    : short
    ? Math.floor(interval) + 's'
    : 'now';
}
function loginAction(Action, NotificationIds, newList) {
  var Action = { Action: Action, NotificationIds: NotificationIds },
    list = JSON.parse(JSON.stringify(newList));
  fetch('/api/v4/notification/update', {
    method: 'POST',
    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
    body: JSON.stringify(Action),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data &&
        ((loginCount = getNotificationLoginCount((loginList = list))),
        (loginUnreadCount = getNotificationLoginUnreadCount(list)),
        UserAction.displayList(),
        UserAction.displayNotificationCount(),
        removeKeyFromStore());
    })
    .catch(function (error) {});
}
function markAllAsRead() {
  var notificationIds, newList;
  isLogedIn()
    ? ((notificationIds = []),
      (newList =
        loginList && loginList.length
          ? loginList.map(function (val) {
              return val.Status < 2 ? (notificationIds.push(val.Id), _extends({}, val, { Status: 3 })) : _extends({}, val);
            })
          : []),
      notificationIds.length && loginAction('MarkAllAsRead', notificationIds, newList))
    : ((newList = JSON.parse(JSON.stringify(Store.getNotifications())).map(function (value) {
        return _extends({}, value, { Status: 3 });
      })),
      trackNotificationClick(1, 'markAllAsRead'),
      Store.setNotifications(newList),
      UserAction.displayList());
}
function getUrlByIndex(index) {
  var obj = (isLogedIn() ? loginList : Store.getNotifications()).find(function (value) {
    return value.Id === index;
  });
  return obj && obj.Data && obj.Data.CTA ? obj.Data.CTA : '/';
}
function getItemByIndex(index) {
  var obj = (isLogedIn() ? loginList : Store.getNotifications()).find(function (value) {
    return value.Id === index;
  });
  return obj || null;
}
function outsideClickListener(event) {
  toggleId.contains(event.target) ||
    iconId.contains(event.target) ||
    event.target.closest('#delete-option') ||
    UserAction.closeNotification();
}
function deleteListElement(id) {
  var notificationIds, newList;
  isLogedIn()
    ? ((notificationIds = []),
      (newList =
        loginList && loginList.length
          ? loginList.filter(function (val) {
              return val.Id !== id || (notificationIds.push(val.Id), !1);
            })
          : []),
      notificationIds.length && loginAction('Delete', notificationIds, newList))
    : ((newList = Store.getNotifications().filter(function (val) {
        return val.Id !== id;
      })),
      Store.setNotifications(newList),
      (unreadCountId.innerHTML = 0 == Store.unreadCount() ? '' : '(' + Store.unreadCount() + ')'));
}
function selectList(event) {
  event.preventDefault();
  var li = event.target.closest('li'),
    index = li.id,
    opt = event.target.closest('.options-icon');
  if (event.target.closest('#delete-option')) notificationListId.removeChild(li), deleteListElement(parseInt(index));
  else if (li && opt)
    for (
      var option,
        event = li.querySelector('.dropdown-options'),
        lists =
          (event && ('block' == event.style.display ? (event.style.display = 'none') : (event.style.display = 'block')),
          document.querySelectorAll('#select-notification>li')),
        _i5 = 0;
      _i5 < lists.length;
      _i5++
    )
      index === lists[_i5].id ||
        ((option = lists[_i5].querySelector('.dropdown-options')) && 'block' === option.style.display && (option.style.display = 'none'));
  else
    li &&
      (markAsRead(parseInt(index)),
      (opt = getItemByIndex(parseInt(index))) && opt.ShowPopup ? loginPopUp() : (window.location.href = getUrlByIndex(parseInt(index))));
}
function trackNotificationClick(Id, label) {
  try {
    postUbaData('userAction', { actionType: 'click', clickLabel: label, status: Id, pageName: pageName || '' });
  } catch (e) {}
}
function trackNotificationBellClick() {
  var Id = 0 < Store.getNotificationCount() ? 1 : 0;
  try {
    postUbaData('userAction', { actionType: 'click', clickLabel: 'notificationBell', status: Id, pageName: pageName || '' });
  } catch (e) {}
}
function getCookie(name) {
  try {
    var parts = ('; ' + document.cookie).split('; ' + name + '=');
    if (2 === parts.length) return parts.pop().split(';').shift();
  } catch (e) {
    return null;
  }
}
function fetchData(userData) {
  var list = userData.list;
  if (list && Array.isArray(list) && 0 < list.length) {
    list = userData.TimeCreated ? new Date(userData.TimeCreated) : null;
    if (!list) return !0;
    userData = new Date();
    return 216e5 < Math.abs(userData - list) ? (removeKeyFromStore(), !0) : !1;
  }
  return !0;
}
function removeKeyFromStore() {
  for (var arr = [], _i6 = 0; _i6 < localStorage.length; _i6++)
    localStorage.key(_i6).includes('userNotification') && arr.push(localStorage.key(_i6));
  for (var _i7 = 0; _i7 < arr.length; _i7++) localStorage.removeItem(arr[_i7]);
}
function updateAndDisplayList(list) {
  (loginCount = getNotificationLoginCount((loginList = list))),
    (loginUnreadCount = getNotificationLoginUnreadCount(list)),
    UserAction.displayList(),
    UserAction.displayNotificationCount();
}
function renderNotificationList() {
  var getCookieData = getCookie('UAC_I'),
    id = getCookieData && getCookieData.toString().trim().length ? getCookieData : null,
    name = id ? 'userNotification-' + id : null,
    getCookieData = name ? JSON.parse(localStorage.getItem(name)) : null;
  !getCookieData || fetchData(getCookieData)
    ? fetch('/api/v4/notification')
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          var data =
            data && data.data && data.data.length
              ? data.data.map(function (item) {
                  var _item$Id = item.Id,
                    _item$Id = void 0 === _item$Id ? null : _item$Id,
                    _item$Status = item.Status,
                    _item$Status = void 0 === _item$Status ? 0 : _item$Status,
                    _item$Default = item.Default,
                    _item$Default = void 0 === _item$Default ? 1 : _item$Default,
                    _item$Created = item.Created,
                    _item$Created = void 0 === _item$Created ? '' : _item$Created,
                    item = JSON.parse(item.Data),
                    _JSON$parse$Title = item.Title,
                    _JSON$parse$CTA = item.CTA,
                    _JSON$parse$CTAText = item.CTAText,
                    item = item.Icon;
                  return {
                    Id: _item$Id,
                    Status: _item$Status,
                    Default: _item$Default,
                    Created: _item$Created,
                    Data: {
                      Title: void 0 === _JSON$parse$Title ? '' : _JSON$parse$Title,
                      CTA: void 0 === _JSON$parse$CTA ? '' : _JSON$parse$CTA,
                      CTAText: void 0 === _JSON$parse$CTAText ? '' : _JSON$parse$CTAText,
                      Icon: void 0 === item ? '' : item,
                    },
                  };
                })
              : [];
          updateAndDisplayList(data),
            id &&
              ((data = { list: JSON.parse(JSON.stringify(data)), TimeCreated: new Date() }),
              localStorage.setItem(name, JSON.stringify(data)));
        })
        .catch(function (error) {})
    : ((getCookieData = JSON.parse(localStorage.getItem(name)).list),
      updateAndDisplayList(Array.isArray(getCookieData) && 0 < getCookieData.length ? getCookieData : []));
}
function getNotificationLoginCount(list) {
  var count = 0;
  return (
    list &&
      list.length &&
      list.forEach(function (item) {
        0 == item.Status && count++;
      }),
    count
  );
}
function getNotificationLoginUnreadCount(list) {
  var count = 0;
  return (
    list &&
      list.length &&
      list.forEach(function (item) {
        item.Status < 2 && count++;
      }),
    count
  );
}
function closeMenu() {
  UserAction.closeNotification();
}
function enableBodyScrollLock() {
  try {
    document.querySelector('body').setAttribute('style', 'overflow-y:scroll;position:fixed;width:100%');
  } catch (error) {}
}
function disableBodyScrollLock() {
  try {
    document.querySelector('body').removeAttribute('style');
  } catch (error) {}
}
function setInnerHeight() {
  var vh = 0.01 * window.innerHeight;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', setInnerHeight),
  document.addEventListener('click', outsideClickListener),
  $(document).ready(function () {
    try {
      setInnerHeight(), isLogedIn() ? renderNotificationList() : (UserAction.displayList(), UserAction.displayNotificationCount());
    } catch (error) {}
  }),
  $(document).ready(function () {
    var queryString = window.location.search,
      queryString = new URLSearchParams(queryString),
      statusCode = '',
      notification_id = queryString ? queryString.get('notification_id') : null;
    queryString &&
      notification_id &&
      fetch('/api/v4/notification/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Action: 'Read', k: notification_id }),
      })
        .then(function (response) {
          return (statusCode = response.status), response.json();
        })
        .then(function (data) {
          200 == statusCode
            ? removeKeyFromStore()
            : setErrorPayload({
                pageName: pageName || 'notifications',
                errorMessage: data && data.message ? data.message : 'notification error',
                errorType: 'api',
                errorLevel: 'fatal',
                errorCode: statusCode,
                errorStackTrace: '/api/v4/notification/update',
              });
        })
        .catch(function (e) {
          setErrorPayload({
            pageName: pageName || 'notifications',
            errorMessage: e && e.message ? e.message : 'notification error',
            errorType: 'api',
            errorCode: statusCode,
            errorLevel: 'fatal',
            errorStackTrace: '/api/v4/notification/update',
          });
        });
  });
