
let userLang = (navigator.language || (navigator).userLanguage || 'en').split('-')[0];
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6a54cbd2e316a67e460124c7",
  "uuid": "47e5e01b-9395-49a2-a2fb-5ce44a269bfd",
  "domain": "https://w7epc7.sqdataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://testcookieconsent.netlify.app/",
  "cookieExpiresAfterDays": 365,
  "default": false,
  "mustConsent": false,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {
    "english": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "<p>Customize Consent Preferences</p>",
        "description": "<p>We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website. However, we acknowledge your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site.</p>",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">18 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;testcookieconsentqa_manish-781_workers_dev_</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "en": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">18 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;testcookieconsentqa_manish-781_workers_dev_</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "zz": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">18 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;testcookieconsentqa_manish-781_workers_dev_</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "hi": {
      "acceptAll": "सभी को स्वीकार करें",
      "accept": "स्वीकार करें",
      "decline": "सभी को अस्वीकार करें",
      "acceptSelected": "चयनित को स्वीकार करें",
      "ok": "सभी को स्वीकार करें",
      "consentNotice": {
        "description": "हम आपकी गोपनीयता का सम्मान करते हैं हम आवश्यक साइट कार्यक्षमता के साथ-साथ विपणन, वैयक्तिकरण और विश्लेषण को सक्षम करने के लिए कुकीज़ संग्रहीत करते हैं। \"सभी को स्वीकार करें\" पर क्लिक करके, आप कुकीज़ के हमारे उपयोग के लिए सहमत हैं। आप किसी भी समय अपनी सेटिंग बदल सकते हैं। कुकी नीति।",
        "learnMore": "अनुकूलित करें",
        "changeDescription": " "
      },
      "save": "स्वीकार करें",
      "consentModal": {
        "title": "सहमति वरीयताएँ अनुकूलित करें",
        "description": "हम कुकीज़ का उपयोग आपको पृष्ठों के बीच कुशलता से नेविगेट करने, आपकी प्राथमिकताओं को संग्रहीत करने और आम तौर पर किसी वेबसाइट के आपके अनुभव को बेहतर बनाने में मदद करने के लिए करते हैं। हालाँकि, हम आपकी गोपनीयता के अधिकार को स्वीकार करते हैं और इसलिए आप कुछ प्रकार की कुकीज़ की अनुमति नहीं दे सकते हैं। अधिक जानने के लिए विभिन्न श्रेणी शीर्षकों पर क्लिक करें और हमारी डिफ़ॉल्ट सेटिंग्स को बदलें। कृपया ध्यान दें कि कुछ प्रकार की कुकीज़ को अवरुद्ध करने से साइट का आपका अनुभव प्रभावित हो सकता है।",
        "buttons": {
          "save": "स्वीकार करें",
          "acceptAll": "सभी को स्वीकार करें",
          "decline": "सभी को अस्वीकार करें"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सभी को अस्वीकार करें",
          "title": "सभी को अस्वीकार करें"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "हम इन कुकीज़ का उपयोग वेबसाइट की कार्यक्षमता बढ़ाने और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए करते हैं। जानकारी में लॉगिन डेटा, क्षेत्र, भाषा और उन्नत सामग्री शामिल हो सकती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ये कुकीज़ हमें वेबसाइट ट्रैफिक, उपयोगकर्ता व्यवहार और जुड़ाव पैटर्न का विश्लेषण करने में मदद करती हैं। एकत्रित अंतर्दृष्टि हमें सामग्री को अनुकूलित करने, उपयोगिता बढ़ाने और समग्र साइट प्रदर्शन में सुधार करने की अनुमति देती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इन कुकीज़ का उपयोग हमारे विज्ञापन भागीदारों द्वारा व्यक्तिगत विज्ञापन देने और विपणन अभियानों की प्रभावशीलता को मापने के लिए किया जाता है। वे उपयोगकर्ता की रुचियों और ब्राउज़िंग व्यवहार के आधार पर प्रासंगिक प्रचार प्रदान करने में मदद करते हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस श्रेणी में ऐसी कुकीज़ शामिल हैं जो पूर्वनिर्धारित श्रेणियों में फिट नहीं होती हैं, लेकिन कुछ वेबसाइट कार्यक्षमताओं या सुधारों के लिए आवश्यक हो सकती हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">18 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;testcookieconsentqa_manish-781_workers_dev_</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज़ प्रमाणीकरण, धोखाधड़ी की रोकथाम और सुरक्षित ब्राउज़िंग को सक्षम करके उपयोगकर्ता डेटा की सुरक्षा में मदद करती हैं। वे यह सुनिश्चित करते हैं कि संवेदनशील जानकारी, जैसे कि लॉगिन क्रेडेंशियल्स, एन्क्रिप्टेड कनेक्शनों पर सुरक्षित रूप से प्रेषित की जाती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    }
  },
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": false,
  "groupByPurpose": false,
  "hideToggleAll": false,
  "appName": "test cookie track",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "test cookie track",
  "companyAddress": " ",
  "services": [
    {
      "name": "functional",
      "title": "Functional",
      "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>",
      "purposes": [],
      "required": true,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "PHPSESSID",
        "JSESSIONID",
        "test_cookie",
        "device_id"
      ]
    },
    {
      "name": "analytics",
      "title": "Analytics",
      "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga",
        "_gid",
        "_gat"
      ]
    },
    {
      "name": "marketing",
      "title": "Marketing",
      "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_fbp",
        "IDE",
        "fr",
        "visitor_id",
        "auth_token"
      ]
    },
    {
      "name": "others",
      "title": "Others",
      "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">18 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;testcookieconsentqa_manish-781_workers_dev_</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "cookie_consent",
        "session_id",
        "ads_campaign",
        "analytics_session",
        "language",
        "timezone",
        "currency",
        "theme",
        "chat_widget",
        "csrf_token",
        "secure_login",
        "secure_session",
        "recent_view",
        "recommended_items",
        "user_preferences",
        "preferred_category",
        "ui_layout",
        "testcookieconsentqa_manish-781_workers_dev_"
      ]
    },
    {
      "name": "security",
      "title": "Security",
      "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "XSRF-TOKEN"
      ]
    }
  ]
};
showCookie();