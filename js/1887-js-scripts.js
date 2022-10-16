$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("header").addClass("headerlight");
    } else {
      $("header").removeClass("headerlight");
    }
  });

  $(document).ready(function () {
    window.scrollTo(0, 0); // values are x,y-offset
    new WOW().init();
    $('a[rel="relativeanchor"]').click(function () {
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top },
        500
      );
      return false;
    });
    $(".navbar-toggler-icon").click(function () {
      $(".menu__item").addClass("wow fadeInDown animated");
      $(".menu__item").attr(
        "style",
        "visibility: visible; animation-name: fadeInDown;"
      );
      $(".click-menu-btn").toggleClass("change-btn");
      $(".navbar-collapse").fadeToggle();
    });
    $("header .navbar-nav .nav-link").click(function () {
      $(".menu__item").addClass("wow fadeInDown animated");
      $(".menu__item").attr(
        "style",
        "visibility: visible; animation-name: fadeInDown;"
      );
      $(".navbar-collapse").fadeToggle();
      $(".click-menu-btn").toggleClass("change-btn");
    });
    Resizehero();
    $(window).scrollTop(0, 0);
    AOS.init({
      once: true
    });




    // Hash Tag Override
    $('a').click(function (e) {
      var url = this.href;
      var hashind = url.indexOf("#");
      if (hashind >= 1) {
        e.preventDefault();
        if ($(".click-menu-btn").hasClass("change-btn")) {
          $(".click-menu-btn").removeClass("change-btn");
          $("header").removeClass("open__menu");
          $(".navbar-collapse").removeClass("show");
          $(".navbar-collapse").css("display", "none");
        }
        var aurl = url.substring(url.indexOf('#'));
        var hashonly = aurl.replace("#", "").toLowerCase();
        var p = $("#" + hashonly);
        var offset = p.offset();
        var ScrollSpeed = 1000;
        var ScrollTo = Math.round(offset.top - 0);
        var BodyScroll = Math.round($(window).scrollTop());
        var StPoint = BodyScroll;
        var EndPoint = ScrollTo;
        var ScrDir = '';

        if (StPoint < EndPoint) {
          ScrDir = "down";
        } else {
          ScrDir = "up";
        }

        if (ScrDir == "down") {
          if (hashonly == "timeline") {
            ScrollSpeed = ScrollSpeed * 1;
          } else if (hashonly == "stack") {
            ScrollSpeed = ScrollSpeed * 3;
          } else if (hashonly == "work") {
            ScrollSpeed = ScrollSpeed * 2;
          } else if (hashonly == "about") {
            ScrollSpeed = ScrollSpeed * 4;
          } else if (hashonly == "education") {
            ScrollSpeed = ScrollSpeed * 5;
          }
        } else if (ScrDir == "up") {
          if (hashonly == "timeline") {
            ScrollSpeed = ScrollSpeed * 5;
          } else if (hashonly == "stack") {
            ScrollSpeed = ScrollSpeed * 3;
          } else if (hashonly == "work") {
            ScrollSpeed = ScrollSpeed * 4;
          } else if (hashonly == "about") {
            ScrollSpeed = ScrollSpeed * 2;
          } else if (hashonly == "education") {
            ScrollSpeed = ScrollSpeed * 1;
          }
        }
        $([document.documentElement, document.body]).animate({ scrollTop: ScrollTo }, ScrollSpeed);
        //$([document.documentElement, document.body]).animate({ scrollTop: ScrollTo }, "slow");
      }
    });
  });

  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    console.clear();
    var hero_height = $(".hero").css("height");
    hero_height = hero_height.replace("px", "");
    var Sctop = parseInt($(window).scrollTop());
    var ScrDir = "";
    if (st > lastScrollTop) {
      // downscroll code
      ScrDir = "Down";
    } else {
      // upscroll code
      ScrDir = "Up";
    }
    if (ScrDir == "Down") {
      $(".headerlight").css({
        top: "-100px",
        background: "rgba(17, 21, 23, .9)"
      });
    } else {
      $(".headerlight").css({
        top: "0px",
        background: "rgba(17, 21, 23, .9)"
      });
    }
    if (ScrDir == "Up") {
      if (Sctop > hero_height) {
        $(".header").removeClass("header-on");
        $(".header").addClass("header-off");
      } else if (Sctop <= 110) {
        $(".header").removeClass("header-off");
        $(".header").addClass("header-on");
      }
    } else {
      $(".header").addClass("header-on");
      $(".header").removeClass("header-off");
    }
    lastScrollTop = st;
  });
  function Resizehero() {
    var WinHeight = screen.height;
    var WinWidth = $(window).width();
    var HeaderHeight = $(".header").css("height");
    HeaderHeight = HeaderHeight.replace("px", "");
    var NewHight = $(window).height();
    $(".hero").css("height", NewHight);
  }

  $(".navbar-toggler").click(function () {
    $("header").toggleClass("open__menu");
  });


  // code editor scripts

  //Default Scripts:
  const reactCode = [
    "import React from 'react';",
    "import PropTypes from 'prop-types';",
    "import Notes from 'CoursePlayer/common/Notes';",
    "import Upcoming from 'CoursePlayer/common/Upcoming';",
    "import Outline from 'CoursePlayer/common/Outline';",
    "import Reminders from 'CoursePlayer/common/Reminders';",
    "import Comments from 'CoursePlayer/common/Comments';",
    "import TabSection from 'CoursePlayer/common/TabSection';",
    "import withAppContext from 'CoursePlayer/withAppContext';",
    "",
    "class Dashboard extends React.Component {",
    "constructor(props) {",
    "  super(props);",
    "  const isUpcoming = props.appContext.course.isUpcoming();",
    "  this.state = { isUpcoming };",
    "  props.appContext.setNonReactUIForUpcomingState({ isUpcoming });",
    "}",
    "",
    "onCountdownEnd = () => {",
    "  const { appContext } = this.props;",
    "  this.setState({ isUpcoming: false });",
    "  appContext.setNonReactUIForUpcomingState({ isUpcoming: false });",
    "};",
    "",
    "render() {",
    "  const { appContext } = this.props;",
    "  const { courseData } = appContext.state;",
    "  const { isUpcoming } = this.state;",
    "  const shouldShowReminders = !!courseData.hubspot_form_id;",
    "  return (",
    '    <div className="ygi-course-outline">',
    '      <div className="container">',
    "        <TabSection",
    "          activeSection={appContext.state.activeTabSection}",
    "          onClickTab={appContext.onClickTab}",
    "          sections={[",
    "            {",
    "              name: window.yi.phrases.overview,",
    "              render: (",
    "                { getSectionProps }, // eslint-disable-line react/prop-types",
    "              ) => (",
    '                <div {...getSectionProps()} id="course-description">',
    '                  <article className="container">',
    '                    <div className="row px-3">',
    '                      <div className="col">',
    "                        <div",
    "                          dangerouslySetInnerHTML={{",
    "                            __html: courseData ? courseData.description : '',",
    "                          }}",
    "                        />",
    "                      </div>",
    "                    </div>",
    "                  </article>",
    "                </div>",
    "              ),",
    "            },",
    "            {",
    "              name: window.yi.phrases.notes,",
    "              render: (",
    "                { getSectionProps }, // eslint-disable-line react/prop-types",
    "              ) => (",
    "                <div",
    "                  {...getSectionProps()}",
    '                  id="course-notes"',
    '                  className="ygi-course-outline__panels"',
    "                >",
    "                  <Notes />",
    "                </div>",
    "              ),",
    "            },",
    "            {",
    "              name: window.yi.phrases.comments,",
    "              render: (",
    "                { getSectionProps }, // eslint-disable-line react/prop-types",
    "              ) => (",
    '                <div {...getSectionProps()} id="course-comment-section">',
    '',
    '                 <article className="container">',
    '                    <div className="row mb-3 mt-3 px-3">',
    '                      <div id="column-spacing" className="col-md-2" />',
    '                      <div className="col-xs-12 col-md-8">',
    '                        <Comments />',
    '                      </div>',
    '                    </div>',
    '                  </article>',
    '                </div>',
    '              ),',
    '            },',
    '            shouldShowReminders && {',
    '              name: window.yi.phrases.reminders,',
    '              render: (',
    '                { getSectionProps }, // eslint-disable-line react/prop-types',
    '              ) => (',
    '                <div {...getSectionProps()}>',
    '                  <Reminders hubspotFormId={courseData.hubspot_form_id} />',
    '                </div>',
    '              ),',
    '            },',
    '          ].filter(v => v)}',
    '        />',
    '      </div>',
    '    </div>',
    '  );',
    '}',
    '}',
    "",
    'const { shape } = PropTypes;',
    "",
    'Dashboard.propTypes = {',
      'appContext: shape({}).isRequired,',
    '};',
    "",
    'export default withAppContext(Dashboard);',
  ].join("\n");

  const angularCode = [
    "import { ActivatedRoute } from '@angular/router';",
    "@Component({",
    "  selector: 'online-order',",
    "  templateUrl: './online-order.component.html',",
    "  styleUrls: ['./online-order.component.css']",
    "})",
    "export class OnlineOrder {",
    "routeParams = this.activeRoute.snapshot.params;",
    "",
    " totalContainers: number;",
    " remainingContainers: number;",
    " scanedContainers = [];",
    " pickQuantity: number;",
    " readonlyContainer: boolean = false;",
    " readonlySourceShelf: boolean = false;",
    " readonlyTote: boolean = false;",
    " hideContainer: boolean = false;",
    " hideSourceShelf: boolean = true;",
    " hideTote: boolean = true;",
    " hideBarcode: boolean = true;",
    " hideForm: boolean = false;",
    " beep = new ScannerSound();",
    " logs = [];",
    "", 
    "// define regex",
    " locationRegex = /-STR|-WRH/;",
    " containerRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\-)\S+$/;",
    " productRegex = /^[0-9]*$/;",
    "", 
    " @ViewChild('containerReff')",
    " containerReff: ElementRef;",
    " @ViewChild('sourceshelfReff')",
    " sourceshelfReff: ElementRef;",
    " @ViewChild('toteReff')",
    " toteReff: ElementRef;",
    " @ViewChild('barcodeReff')",
    " barcodeReff: ElementRef;",
    "", 
    " constructor(",
    "   private service: DataService,",
    "   private activeRoute: ActivatedRoute",
    " ) {}",
    "", 
    "ngOnInit() {",
    "   this.taskGroupId = this.routeParams.id;",
    "   this.getOrderInfo(this.taskGroupId);",
    " }",
    "", 
    " ngAfterViewInit() {",
    "   setTimeout(() => {",
    "      this.containerReff.nativeElement.focus();",
    "    }, 10);",
    " }",
    " // when no more items is clicked complete the task",
    " noMoreItems() {",
    "   this.completeTask();",
    " }",
    "", 
    " // complete task",
    " completeTask() {",
    "   this.service",
    "      .completeTask({",
    "        task_id: this.task.ID,",
    "        quantity: 0,",
    "        source_container: this.source_shelf,",
    "        target_container: this.tote_container",
    "      })",
    "     .subscribe(",
    "       res => {",
    "         this.getNextTask(this.taskGroupId);",
    "         this.beep.success();",
    "         this.logs.unshift({",
    "           type: 'success',",
    "           message: res.message",
    "         });",
    "         this.productDetails = '';",
    "       },",
    "       err => {",
    "         this.beep.failure();",
    "         this.getNextTask(this.taskGroupId);",
    "         err.status >= 500",
    "           ? (this.errorMessage =",
    "               'System error. Please try again or contact your administrator.')",
    "           : (this.errorMessage = err.error.message);",
    "           this.logs.unshift({",
    "           type: 'error',",
    "           message: this.errorMessage",
    "         });",
    "       }",
    "     );",
    " }",
    "}",
    "",
    "",
  ].join("\n");

  const nodeCode = [
    'const expressPromiseRouter = require("express-promise-router");',
    'const Promise = require("bluebird");',
    'const moment = require("moment");',
    'const jwt = require("jwt-simple");',
    'const csv = require("fast-csv");',
    'const router = expressPromiseRouter();',
    'const logger = require("gigit-common/loggers").logger;',
    "",
    "function demonetize(req, res) {",
    "   return Promise.try(function() {",
    "        var userId = req.params.userId;",
    "",  
    "        // Get User",
    "       var userPromise = User.findById(userId)",
    "           .catch(function(err) {",
    '               logger.error("Error finding User: ", err);',
    '               throw createError("Error finding User: " + err.message);',
    "           })",
    "           .then(function(user) {",
    "               if (!user) {",
    '                    throw createError(404, "User not found: " + userId);',
    "                }",
    "               return user;",
    "           });",
    "", 
    "      // Get StripeAccount",
    "      var stripeAccountPromise = StripeAccount.findOne({ user_id: userId })",
    "          .catch(function(err) {",
    '              logger.error("Error finding StripeAccount: ", err);',
    '              throw createError("Error finding StripeAccount: " + err.message);',
    "           })",
    "          .then(function(stripeAccount) {",
    "               if (!stripeAccount) {",
    '                   throw createError(404, "StripeAccount not found: " + userId);',
    "                }",
    "               return stripeAccount;",
    "           });",
    "", 
    "       return Promise.join(userPromise, stripeAccountPromise,",
    "           function(user, stripeAccount) {",
    "                user.registeredForPaid = false;",
    "                return user.save()",
    "                   .catch(function(err) {",
    '                       logger.error("Error saving User: ", err);',
    '                       throw createError("Error saving User: " + err.message);',
    "                   })",
    "                   .then(function() {",
    "                       return stripeAccount.remove()",
    "                            .catch(function(err) {",
    '                               logger.error("Error removing StripeAccount: ", err);',
    '                               throw createError("Error removing StripeAccount: " + err.message);',
    "                           });",
    "                   })",
    "                   .then(function() {",
    "                       res.status(204).send();",
    "                   });",
    "           });",
    "      });",
    "}",
    "function removeBid(req, res) {",
    "   var saveEnabled = res.locals.saveEnabled;",
    "    var query = req.body.query;",
    "   var modifiedBid = req.body.modifiedBid;",
     
    "    Auction.findOne(query, function(error, auction) {",
    "       if (error) {",
    "            return res.status(500).send(error);",
    "        }",
    "       var auctionToChange = auction.bidHistory.find(function(currentBid) {",
    "           return currentBid._id.equals(modifiedBid);",
    "        });",
    "", 
    "        var removeIndex = auction.bidHistory.indexOf(auctionToChange);",
    "       if (removeIndex > -1) {",
    "           auction.bidHistory.splice(removeIndex, 1);",
    '           auction.markModified("bidHistory");',
    "       }",
    "",
    "       if (!saveEnabled) {",
    "           return res.status(500).send(auction);",
    "        }",
    "       auction.save(function(error, savedAuction) {",
    "           if (error) {",
    "               return res.status(500).send(savedAuction);",
    "            }",
    "           return res.status(200).send(savedAuction);",
    "       });",
    "   });",
    "}",
    "",
    "",
    "// routes in node",
    'router.post("/maintenance/removeBid", [reqGigitAdmin, optSaveToken], removeBid);',
    'router.post("/maintenance/demonetize/:userId", [reqGigitAdmin, reqSaveToken], demonetize);',
    "module.exports = router;"

  ].join("\n");

  const phpCode = [
    "<?php",
    "",
    "namespace App\Http\Controllers;",
    "",
    "use App\Appointment;",
    "use App\User;",
    "use Illuminate\Http\Request;",
    "use Illuminate\Support\Facades\Auth;",
    "",
    "class AppointmentController extends Controller",
    "{",
    "",
    "   public function index(Request $request) {",
    "        $date = $request->year . '-' . $request->month . '-' . $request->day;",
    "        $appointments = Appointment::with(['createdBy'])",
    "           ->whereHas('users', function($query) {",
    "               $query->where('user_id', Auth::user()->id);",
    "            })",
    "           ->whereDate('start_time', $date)",
    "           ->orderBy('start_time')",
    "           ->get();",
    "       return view('appointment.detail', [",
    "           'appointments' => $appointments",
    "        ])->render();",
    "   }",
    "",
    "   /**",
    "    * Show the form for creating a new resource.",
    "    *",
    "    * @return \Illuminate\Http\Response",
    "    */",
    "   public function create()",
    "   {",
    "       $users = User::where('id', '!=', Auth::user()->id)->get();",
    "        return view('appointment.create',[",
    "           'users' => $users",
    "        ]);",
    "   }",
    "",
    "   /**",
    "    * Store a newly created resource in storage.",
    "    *",
    "    * @param  \Illuminate\Http\Request  $request",
    "    * @return \Illuminate\Http\Response",
    "    */",
    "   public function store(Request $request)",
    "   {",
    "       $request->validate([",
    "           'title' => 'required',",
    "           'description' => 'required',",
    "           'date' => 'required|date',",
    "           'start_time' => 'required|before:end_time',",
    "           'end_time' => 'required|after:start_time',",
    "           'users' => 'required'",
    "       ]);",
    "",
    "       $start_date_time = date('Y-m-d H:i:s', strtotime($request->date.' '.$request->start_time));",
    "       $end_date_time = date('Y-m-d H:i:s', strtotime($request->date.' '.$request->end_time));",
    "",
    "      $appointment = Appointment::create([",
    "          'title' => $request->title,",
    "           'description' => $request->description,",
    "           'start_time' => $start_date_time,",
    "           'end_time' => $end_date_time,",
    "           'user_id' => Auth::user()->id",
    "       ]);",
    "       $users = $request->users;",
    "       array_push($users, Auth::user()->id);",
    "       $appointment->users()->attach($users);",
    "",
    "       return redirect('/home')->with(['success' => 'Appointment created successfully!']);",
    "   }",
    "",
    "   /**",
    "    * Show the form for editing the specified resource.",
    "    *",
    "    * @param  int  $id",
    "    * @return \Illuminate\Http\Response",
    "    */",
    "   public function edit($id)",
    "   {",
    "       $appointment = Appointment::with(['users'])",
    "           ->where([['id', $id],['user_id', Auth::user()->id]])",
    "           ->firstOrFail();",
    "       $users = User::where('id', '!=', Auth::user()->id)->get();",
    "",
    "       return view('appointment.edit', [",
    "           'appointment' => $appointment,",
    "            'users' => $users",
    "       ]);",
    "   }",
    "",
    "   /**",
    "    * Update the specified resource in storage.",
    "    *",
    "    * @param  \Illuminate\Http\Request  $request",
    "    * @param  int  $id",
    "    * @return \Illuminate\Http\Response",
    "    */",
    "   public function update(Request $request, $id)",
    "   {",
    "       $request->validate([",
    "           'title' => 'required',",
    "           'description' => 'required',",
    "           'date' => 'required|date',",
    "           'start_time' => 'required|before:end_time',",
    "           'end_time' => 'required|after:start_time',",
    "           'users' => 'required'",
    "       ]);",
    "",
    "       $start_date_time = date('Y-m-d H:i:s', strtotime($request->date.' '.$request->start_time));",
    "       $end_date_time = date('Y-m-d H:i:s', strtotime($request->date.' '.$request->end_time));",
    "",
    "       $appointment = Appointment::where('id', $id)",
    "           ->where('user_id', Auth::user()->id)",
    "           ->firstOrFail();",
    "       $appointment->update([",
    "           'title' => $request->title,",
    "           'description' => $request->description,",
    "           'start_time' => $start_date_time,",
    "           'end_time' => $end_date_time,",
    "           'user_id' => Auth::user()->id",
    "       ]);",
    "       $users = $request->users;",
    "       array_push($users, Auth::user()->id);",
    "       $appointment->users()->sync($users);",
    "",
    "       return redirect('/home')->with(['success' => 'Appointment updated successfully!']);",
    "   }",
    "",
    "   /**",
    "    * Remove the specified resource from storage.",
    "    *,",
    "    * @param  int  $id",
    "    * @return \Illuminate\Http\Response",
    "    */",
    "   public function destroy($id)",
    "   {",
    "       $appointment = Appointment::where([['id', $id],['user_id', Auth::user()->id]])",
    "            ->delete();",
    "       return redirect('/home')->with(['success' => 'Appointment deleted successfully!']);",
    "   }",

    "}",

  ].join("\n");

  const graphqlCode = [
  "import toSnippet from '../util/toSnippet'",
  "import assignImageParams from '../util/assignImageParams'",
  "import parseFilePaths from '../util/parseFilePaths'",
  "",
  "export default {",
  "     categories: (root, args, context) => {",
  "         return context.dataSources.database.categories[root.language].load({entry_id: root.entry_id, group_id: 22})",
  "     },",
  "", 
  "     image: (root, args, context) => {",
  "         return context.dataSources.database.assets.load({entry_id: root.entry_id, field_id: 153})",
  "             .then(firstOrNull)",
  "             .then(assignImageParams(args.params))",
  "     },",
  "",  
  "     no_text_image: (root, args, context) => {",
  "         return context.dataSources.database.assets.load({entry_id: root.entry_id, field_id: 404})",
  "             .then(firstOrNull)",
  "             .then(assignImageParams(args.params))",
  "     },",
  "", 
  "     square_image: (root, args, context) => {",
  "         return context.dataSources.database.assets.load({entry_id: root.entry_id, field_id: 358})",
  "             .then(firstOrNull)",
  "             .then(assignImageParams(args.params))",
  "     },",
  "", 
  "     teachers: (root, args, context) => {",
  "         if (!root.field_id_104) {",
  "             return Promise.resolve([])",
  "         }",
  "",  
  "         const memberIds = root.field_id_104.split('|')",
  "", 
  "         return Promise.all(",
  "             memberIds.map(memberId => context.dataSources.database.Course.teachers.load(memberId))",
  "         )",
  "     },",
  "",  
  "     duration: (root, args, context) => {",
  "         return {",
  "             text: root.field_id_237,",
  "             url_title: root.field_id_237.replace(/\s+/g, '-').toLowerCase(),",
  "        }",
  "     },",
  "",
  "     chapters: (root, args, context) => {",
  "         return context.dataSources.database.Course.chapters.load(root.entry_id)",
  "             .then(rows => rows.map(row => {",
  "                 return {",
  "                     row_id: row.row_id,",
  "                     entry_id: row.entry_id,",
  "                     id: row.row_id,",
  "                     name: row.col_id_10,",
  "                     language: root.language,",
  "                 }",
  "             }))",
  "     },",
  "",   
  "     addon: (root, args, context) => {",
  "         return context.dataSources.database.Course.addon[root.language].load(root.entry_id)",
  "     },",
  "",  
  "     sales_page_select: (root, args, context) => {",
  "         return context.dataSources.database.Course.sales_page_select[root.language].load(root.entry_id).then(firstOrNull)",
  "     },",
  "",  
  "       alternate_access: (root, args, context) => {",
  "         if (!root.field_id_361) {",
  "             return Promise.resolve([])",
  "         }",
  "",  
  "         const entry_ids = root.field_id_361.split('|')",
  "", 
  "         return Promise.all(",
  "             entry_ids.map(entry_id => context.dataSources.database.Course.alternate_access.load(entry_id))",
  "         )",
  "     },",
  "",  
  "     snippet: (root, args, context) => {",
  "         return toSnippet(root.short_description, args.limit)",
  "     },",
  "",    
  "     description: (root, args, context) => {",
  "         return parseFilePaths(root.field_id_105, context)",
  "     },",
  "  }",

  ].join("\n");

  
  /*
   Options passed into monaco.editor.create(root, obj)
  */

  const react = {
    value: `${reactCode}`,
    language: "javascript",
  }
  const angular = {
    value: `${angularCode}`,
    language: "typescript",
  }
  const graphql = {
    value: `${graphqlCode}`,
    language: "javascript",
  }
  const node = {
    value: `${nodeCode}`,
    language: "javascript",
  }
  const php = {
    value: `${phpCode}`,
    language: "php",
  }

  const options = {
    lineNumbers: "on",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    ariaLabel: "online code editor",
    accessibilityHelpUrl: "Nothing yet...",
    readOnly: false,
    theme: "vs-dark",
    scrollBeyondLastLine: false,
    automaticLayout: true,
    suppressExcessPropertyErrors: false,
    suppressImplicitAnyIndexErrors: false
  };
  
  function editorResize(editor){
    editor.layout();
  }
  
  let editor;
  const onCreated = (_editor) => {
    editor = _editor; //set global ref 
    editorResize(_editor); // use global ref, pass it around do some stuff w.e
  }
   
 


  

// tab section
$(document).ready(function(){
  $(".lang-link").click(function(e){
    e.preventDefault();
    $(".lang-link").removeClass('active');
    $(this).addClass('active');
    $(".code-wrapper").hide();
    $("#" + $(this).attr("href")).show();
  })
})

