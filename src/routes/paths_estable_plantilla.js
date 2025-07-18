export const rootPaths = {
    root: '/',
    dashboardRoot: 'dashboard',
    appsRoot: 'app',
    emailRoot: 'email',
    eventsRoot: 'events',
    socialRoot: 'social',
    eCommerceRoot: 'e-commerce',
    productRoot: 'product',
    eLearningRoot: 'e-learning',
    supportDeskRoot: 'support-desk',
    componentsRoot: 'components',
    pagesRoot: 'pages',
    authRoot: 'authentication',
    authSimpleRoot: 'simple',
    authCardRoot: 'card',
    authSplitRoot: 'split',
    userRoot: 'user',
    pricingRoot: 'pricing',
    faqRoot: 'faq',
    errorsRoot: 'errors',
    miscRoot: 'miscellaneous',
    formsRoot: 'forms',
    basicFormsRoot: 'basic',
    advanceFormsRoot: 'advance',
    tableRoot: 'tables',
    chartsRoot: 'charts',
    echartsRoot: 'echarts',
    iconsRoot: 'icons',
    mapsRoot: 'maps',
    carouselRoot: 'carousel',
    navsAndTabsRoot: 'navs-and-tabs',
    picturesRoot: 'pictures',
    videosRoot: 'videos',
    utilitiesRoot: 'utilities',
    docRoot: 'documentation'
};

export default {
    changelog: '/changelog',
    widgets: '/widgets',
    landing: '/landing',
    starter: `/${rootPaths.pagesRoot}/starter`,
    error404: `/${rootPaths.errorsRoot}/404`,
    error500: `/${rootPaths.errorsRoot}/500`,
    simpleLogin: `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/login`,
    simpleRegister: `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/register`,
    simpleLogout: `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/logout`,
    simpleForgotPassword: `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/forgot-password`,
    simpleResetPassword: `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/reset-password`,
    simpleConfirmMail: `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/confirm-mail`,
    simpleLockScreen: `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/lock-screen`,
    cardLogin: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/login`,
    cardRegister: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/register`,
    cardLogout: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/logout`,
    cardForgotPassword: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/forgot-password`,
    cardResetPassword: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/reset-password`,
    cardConfirmMail: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/confirm-mail`,
    cardLockScreen: `/${rootPaths.authRoot}/${rootPaths.authCardRoot}/lock-screen`,
    splitLogin: `/${rootPaths.authRoot}/${rootPaths.authSplitRoot}/login`,
    splitRegister: `/${rootPaths.authRoot}/${rootPaths.authSplitRoot}/register`,
    splitLogout: `/${rootPaths.authRoot}/${rootPaths.authSplitRoot}/logout`,
    splitForgotPassword: `/${rootPaths.authRoot}/${rootPaths.authSplitRoot}/forgot-password`,
    splitResetPassword: `/${rootPaths.authRoot}/${rootPaths.authSplitRoot}/reset-password`,
    splitConfirmMail: `/${rootPaths.authRoot}/${rootPaths.authSplitRoot}/confirm-mail`,
    splitLockScreen: `/${rootPaths.authRoot}/${rootPaths.authSplitRoot}/lock-screen`,
    authWizard: `/${rootPaths.authRoot}/wizard`,
    analytics: `/${rootPaths.dashboardRoot}/analytics`,
    crm: `/${rootPaths.dashboardRoot}/crm`,
    saas: `/${rootPaths.dashboardRoot}/saas`,
    ecommerce: `/${rootPaths.dashboardRoot}/e-commerce`,
    lms: `/${rootPaths.dashboardRoot}/lms`,
    projectManagement: `/${rootPaths.dashboardRoot}/project-management`,
    supportDesk: `/${rootPaths.dashboardRoot}/support-desk`,
    calendar: `/${rootPaths.appsRoot}/calendar`,
    chat: `/${rootPaths.appsRoot}/chat`,
    kanban: `/${rootPaths.appsRoot}/kanban`,
    emailDetail: `/${rootPaths.emailRoot}/email-detail`,
    emailInbox: `/${rootPaths.emailRoot}/inbox`,
    emailCompose: `/${rootPaths.emailRoot}/compose`,
    eventDetail: `/${rootPaths.eventsRoot}/event-detail`,
    createEvent: `/${rootPaths.eventsRoot}/create-an-event`,
    eventList: `/${rootPaths.eventsRoot}/event-list`,
    feed: `/${rootPaths.socialRoot}/feed`,
    activityLog: `/${rootPaths.socialRoot}/activity-log`,
    notifications: `/${rootPaths.socialRoot}/notifications`,
    followers: `/${rootPaths.socialRoot}/followers`,
    addProduct: `/${rootPaths.eCommerceRoot}/${rootPaths.productRoot}/add-product`,
    products: productLayout =>
        `/${rootPaths.eCommerceRoot}/${rootPaths.productRoot}${productLayout ? `/${productLayout}` : ''
        }`,
    productDetails: productId =>
        `/${rootPaths.eCommerceRoot}/${rootPaths.productRoot}/product-details${productId ? `/${productId}` : ''
        }`,
    orderList: `/${rootPaths.eCommerceRoot}/orders/order-list`,
    orderDetails: `/${rootPaths.eCommerceRoot}/orders/order-details`,
    customers: `/${rootPaths.eCommerceRoot}/customers`,
    customerDetails: `/${rootPaths.eCommerceRoot}/customer-details`,
    shoppingCart: `/${rootPaths.eCommerceRoot}/shopping-cart`,
    checkout: `/${rootPaths.eCommerceRoot}/checkout`,
    billing: `/${rootPaths.eCommerceRoot}/billing`,
    invoice: `/${rootPaths.eCommerceRoot}/invoice`,
    createCourse: `/${rootPaths.eLearningRoot}/course/create-a-course`,
    courseDetails: courseId =>
        `/${rootPaths.eLearningRoot}/course/course-details${courseId ? `/${courseId}` : ''
        }`,
    courses: courseLayout =>
        `/${rootPaths.eLearningRoot}/course${courseLayout ? `/${courseLayout}` : ''
        }`,
    studentOverview: `/${rootPaths.eLearningRoot}/student-overview`,
    trainerProfile: `/${rootPaths.eLearningRoot}/trainer-profile`,
    ticketsCard: `/${rootPaths.supportDeskRoot}/card-view`,
    ticketsTable: `/${rootPaths.supportDeskRoot}/table-view`,
    contacts: `/${rootPaths.supportDeskRoot}/contacts`,
    contactDetails: `/${rootPaths.supportDeskRoot}/contact-details`,
    ticketsPreview: `/${rootPaths.supportDeskRoot}/tickets-preview`,
    quickLinks: `/${rootPaths.supportDeskRoot}/quick-links`,
    reports: `/${rootPaths.supportDeskRoot}/reports`,
    userProfile: `/${rootPaths.userRoot}/profile`,
    userSettings: `/${rootPaths.userRoot}/settings`,
    pricingDefault: `/${rootPaths.pricingRoot}/pricing-default`,
    pricingAlt: `/${rootPaths.pricingRoot}/pricing-alt`,
    faqAlt: `/${rootPaths.faqRoot}/faq-alt`,
    faqBasic: `/${rootPaths.faqRoot}/faq-basic`,
    faqAccordion: `/${rootPaths.faqRoot}/faq-accordion`,
    associations: `/${rootPaths.miscRoot}/associations`,
    invitePeople: `/${rootPaths.miscRoot}/invite-people`,
    privacyPolicy: `/${rootPaths.miscRoot}/privacy-policy`,
    formControl: `/${rootPaths.formsRoot}/${rootPaths.basicFormsRoot}/form-control`,
    inputGroup: `/${rootPaths.formsRoot}/${rootPaths.basicFormsRoot}/input-group`,
    select: `/${rootPaths.formsRoot}/${rootPaths.basicFormsRoot}/select`,
    checks: `/${rootPaths.formsRoot}/${rootPaths.basicFormsRoot}/checks`,
    range: `/${rootPaths.formsRoot}/${rootPaths.basicFormsRoot}/range`,
    formLayout: `/${rootPaths.formsRoot}/${rootPaths.basicFormsRoot}/layout`,
    advanceSelect: `/${rootPaths.formsRoot}/${rootPaths.advanceFormsRoot}/advance-select`,
    datePicker: `/${rootPaths.formsRoot}/${rootPaths.advanceFormsRoot}/date-picker`,
    editor: `/${rootPaths.formsRoot}/${rootPaths.advanceFormsRoot}/editor`,
    emojiButton: `/${rootPaths.formsRoot}/${rootPaths.advanceFormsRoot}/emoji-button`,
    fileUploader: `/${rootPaths.formsRoot}/${rootPaths.advanceFormsRoot}/file-uploader`,
    inputMask: `/${rootPaths.formsRoot}/${rootPaths.advanceFormsRoot}/input-mask`,
    rangeSlider: `/${rootPaths.formsRoot}/${rootPaths.advanceFormsRoot}/range-slider`,
    rating: `/${rootPaths.formsRoot}/${rootPaths.advanceFormsRoot}/rating`,
    floatingLabels: `/${rootPaths.formsRoot}/floating-labels`,
    wizard: `/${rootPaths.formsRoot}/wizard`,
    validation: `/${rootPaths.formsRoot}/validation`,
    basicTables: `/${rootPaths.tableRoot}/basic-tables`,
    advanceTables: `/${rootPaths.tableRoot}/advance-tables`,
    chartjs: `/${rootPaths.chartsRoot}/chartjs`,
    d3js: `/${rootPaths.chartsRoot}/d3js`,
    echartsHowToUse: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/how-to-use`,
    lineCharts: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/line-charts`,
    barCharts: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/bar-charts`,
    candlestickCharts: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/candlestick-charts`,
    geoMap: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/geo-map`,
    scatterCharts: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/scatter-charts`,
    pieCharts: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/pie-charts`,
    radarCharts: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/radar-charts`,
    heatmapCharts: `/${rootPaths.chartsRoot}/${rootPaths.echartsRoot}/heatmap-charts`,
    fontAwesome: `/${rootPaths.iconsRoot}/font-awesome`,
    reactIcons: `/${rootPaths.iconsRoot}/react-icons`,
    googleMap: `/${rootPaths.mapsRoot}/google-map`,
    leafletMap: `/${rootPaths.mapsRoot}/leaflet-map`,
    alerts: `/${rootPaths.componentsRoot}/alerts`,
    accordion: `/${rootPaths.componentsRoot}/accordion`,
    animatedIcons: `/${rootPaths.componentsRoot}/animated-icons`,
    background: `/${rootPaths.componentsRoot}/background`,
    badges: `/${rootPaths.componentsRoot}/badges`,
    breadcrumbs: `/${rootPaths.componentsRoot}/breadcrumb`,
    buttons: `/${rootPaths.componentsRoot}/buttons`,
    calendarExample: `/${rootPaths.componentsRoot}/calendar`,
    cards: `/${rootPaths.componentsRoot}/cards`,
    bootstrapCarousel: `/${rootPaths.componentsRoot}/${rootPaths.carouselRoot}/bootstrap`,
    slickCarousel: `/${rootPaths.componentsRoot}/${rootPaths.carouselRoot}/slick`,
    collapse: `/${rootPaths.componentsRoot}/collapse`,
    cookieNotice: `/${rootPaths.componentsRoot}/cookie-notice`,
    countup: `/${rootPaths.componentsRoot}/countup`,
    dropdowns: `/${rootPaths.componentsRoot}/dropdowns`,
    draggable: `/${rootPaths.componentsRoot}/draggable`,
    listGroup: `/${rootPaths.componentsRoot}/list-group`,
    modals: `/${rootPaths.componentsRoot}/modals`,
    offcanvas: `/${rootPaths.componentsRoot}/offcanvas`,
    navs: `/${rootPaths.componentsRoot}/${rootPaths.navsAndTabsRoot}/navs`,
    tabs: `/${rootPaths.componentsRoot}/${rootPaths.navsAndTabsRoot}/tabs`,
    navbar: `/${rootPaths.componentsRoot}/${rootPaths.navsAndTabsRoot}/navbar`,
    verticalNavbar: `/${rootPaths.componentsRoot}/${rootPaths.navsAndTabsRoot}/vertical-navbar`,
    topNavbar: `/${rootPaths.componentsRoot}/${rootPaths.navsAndTabsRoot}/top-navbar`,
    comboNavbar: `/${rootPaths.componentsRoot}/${rootPaths.navsAndTabsRoot}/combo-navbar`,
    doubleTopNavbar: `/${rootPaths.componentsRoot}/${rootPaths.navsAndTabsRoot}/double-top-navbar`,
    avatar: `/${rootPaths.componentsRoot}/${rootPaths.picturesRoot}/avatar`,
    images: `/${rootPaths.componentsRoot}/${rootPaths.picturesRoot}/images`,
    figures: `/${rootPaths.componentsRoot}/${rootPaths.picturesRoot}/figures`,
    hoverbox: `/${rootPaths.componentsRoot}/${rootPaths.picturesRoot}/hoverbox`,
    lightbox: `/${rootPaths.componentsRoot}/${rootPaths.picturesRoot}/lightbox`,
    progressBar: `/${rootPaths.componentsRoot}/progress-bar`,
    pagination: `/${rootPaths.componentsRoot}/pagination`,
    placeholder: `/${rootPaths.componentsRoot}/placeholder`,
    popovers: `/${rootPaths.componentsRoot}/popovers`,
    scrollspy: `/${rootPaths.componentsRoot}/scrollspy`,
    search: `/${rootPaths.componentsRoot}/search`,
    spinners: `/${rootPaths.componentsRoot}/spinners`,
    timeline: `/${rootPaths.componentsRoot}/timeline`,
    toasts: `/${rootPaths.componentsRoot}/toasts`,
    tooltips: `/${rootPaths.componentsRoot}/tooltips`,
    treeview: `/${rootPaths.componentsRoot}/treeview`,
    typedText: `/${rootPaths.componentsRoot}/typed-text`,
    embedVideo: `/${rootPaths.componentsRoot}/${rootPaths.videosRoot}/embed`,
    reactPlayer: `/${rootPaths.componentsRoot}/${rootPaths.videosRoot}/react-player`,
    borders: `/${rootPaths.utilitiesRoot}/borders`,
    colors: `/${rootPaths.utilitiesRoot}/colors`,
    backgroundColor: `/${rootPaths.utilitiesRoot}/background`,
    coloredLinks: `/${rootPaths.utilitiesRoot}/colored-links`,
    display: `/${rootPaths.utilitiesRoot}/display`,
    visibility: `/${rootPaths.utilitiesRoot}/visibility`,
    stretchedLink: `/${rootPaths.utilitiesRoot}/stretched-link`,
    float: `/${rootPaths.utilitiesRoot}/float`,
    position: `/${rootPaths.utilitiesRoot}/position`,
    spacing: `/${rootPaths.utilitiesRoot}/spacing`,
    sizing: `/${rootPaths.utilitiesRoot}/sizing`,
    textTruncation: `/${rootPaths.utilitiesRoot}/text-truncation`,
    typography: `/${rootPaths.utilitiesRoot}/typography`,
    verticalAlign: `/${rootPaths.utilitiesRoot}/vertical-align`,
    flex: `/${rootPaths.utilitiesRoot}/flex`,
    grid: `/${rootPaths.utilitiesRoot}/grid`,
    scrollBar: `/${rootPaths.utilitiesRoot}/scroll-bar`,
    gettingStarted: `/${rootPaths.docRoot}/getting-started`,
    configuration: `/${rootPaths.docRoot}/configuration`,
    styling: `/${rootPaths.docRoot}/styling`,
    darkMode: `/${rootPaths.docRoot}/dark-mode`,
    plugin: `/${rootPaths.docRoot}/plugin`,
    faq: `/${rootPaths.docRoot}/faq`,
    designFile: `/${rootPaths.docRoot}/design-file`
};
