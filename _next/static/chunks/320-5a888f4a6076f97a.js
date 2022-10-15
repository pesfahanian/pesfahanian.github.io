(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{9361:function(e,t){"use strict";t.Z=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},2962:function(e,t,o){"use strict";o.d(t,{PB:function(){return u}});var n=o(9008),r=o.n(n),a=o(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},p=function(e,t,o){void 0===t&&(t=[]);var n=void 0===o?{}:o,r=n.defaultWidth,i=n.defaultHeight;return t.reduce(function(t,o,n){return t.push(a.createElement("meta",{key:"og:"+e+":0"+n,property:"og:"+e,content:o.url})),o.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+n,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+n,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+n,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:o.width.toString()})):r&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:r.toString()})),o.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:o.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:i.toString()})),t},[])},s=function(e){var t,o,n,r,l,s=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var d="";e.title?(d=e.title,c.templateTitle&&(d=c.templateTitle.replace(/%s/g,function(){return d}))):e.defaultTitle&&(d=e.defaultTitle),d&&s.push(a.createElement("title",{key:"title"},d));var u=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,h=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var m=e.robotsProps,g=m.nosnippet,y=m.maxSnippet,v=m.maxImagePreview,b=m.maxVideoPreview,w=m.noarchive,k=m.noimageindex,E=m.notranslate,G=m.unavailableAfter;f=(g?",nosnippet":"")+(y?",max-snippet:"+y:"")+(v?",max-image-preview:"+v:"")+(w?",noarchive":"")+(G?",unavailable_after:"+G:"")+(k?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(E?",notranslate":"")}if(u||h?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),s.push(a.createElement("meta",{key:"robots",name:"robots",content:(u?"noindex":"index")+","+(h?"nofollow":"follow")+f}))):s.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&s.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&s.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){s.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&s.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&s.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&s.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&s.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||d)&&s.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(r=e.openGraph)?void 0:r.title)||d})),(null!=(o=e.openGraph)&&o.description||e.description)&&s.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(l=e.openGraph)?void 0:l.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&s.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var x=e.openGraph.type.toLowerCase();s.push(a.createElement("meta",{key:"og:type",property:"og:type",content:x})),"profile"===x&&e.openGraph.profile?(e.openGraph.profile.firstName&&s.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&s.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&s.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&s.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===x&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){s.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&s.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&s.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){s.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===x&&e.openGraph.article?(e.openGraph.article.publishedTime&&s.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&s.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&s.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){s.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&s.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){s.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===x||"video.episode"===x||"video.tv_show"===x||"video.other"===x)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&s.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&s.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){s.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){s.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&s.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&s.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){s.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&s.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&s.push.apply(s,p("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&s.push.apply(s,p("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.locale&&s.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&s.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&s.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,o,n;s.push(a.createElement("meta",i({key:"meta:"+(null!=(t=null!=(o=null!=(n=e.keyOverride)?n:e.name)?o:e.property)?t:e.httpEquiv)},e)))}),null!=(n=e.additionalLinkTags)&&n.length&&e.additionalLinkTags.forEach(function(e){var t;s.push(a.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),s};!function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.titleTemplate,n=e.defaultTitle,i=e.dangerouslySetAllPagesToNoIndex,l=e.dangerouslySetAllPagesToNoFollow,c=e.description,p=e.canonical,d=e.facebook,u=e.openGraph,h=e.additionalMetaTags,f=e.twitter,m=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,w=e.languageAlternates,k=e.additionalLinkTags,E=e.robotsProps;return a.createElement(r(),null,s({title:t,titleTemplate:o,defaultTitle:n,dangerouslySetAllPagesToNoIndex:void 0!==i&&i,dangerouslySetAllPagesToNoFollow:void 0!==l&&l,description:c,canonical:p,facebook:d,openGraph:u,additionalMetaTags:h,twitter:f,defaultOpenGraphImageWidth:m,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:v,mobileAlternate:b,languageAlternates:w,additionalLinkTags:k,robotsProps:E}))},t}(a.Component);var d,u=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.noindex,n=e.nofollow,i=e.robotsProps,l=e.description,c=e.canonical,p=e.openGraph,d=e.facebook,u=e.twitter,h=e.additionalMetaTags,f=e.titleTemplate,m=e.defaultTitle,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return a.createElement(r(),null,s({title:t,noindex:void 0!==o&&o,nofollow:n,robotsProps:i,description:l,canonical:c,facebook:d,openGraph:p,additionalMetaTags:h,twitter:u,titleTemplate:f,defaultTitle:m,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))},t}(a.Component);RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},8045:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(9361).Z,r=o(4941).Z,a=o(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,o,l=e.src,c=e.sizes,m=e.unoptimized,g=void 0!==m&&m,w=e.priority,O=void 0!==w&&w,A=e.loading,_=e.lazyRoot,z=e.lazyBoundary,I=e.className,T=e.quality,j=e.width,P=e.height,N=e.style,C=e.objectFit,L=e.objectPosition,W=e.onLoadingComplete,M=e.placeholder,R=void 0===M?"empty":M,V=e.blurDataURL,H=p(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=s.useContext(f.ImageConfigContext),B=s.useMemo(function(){var e=y||q||u.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort(function(e,t){return e-t}),o=e.deviceSizes.sort(function(e,t){return e-t});return i({},e,{allSizes:t,deviceSizes:o})},[q]),D=c?"responsive":"intrinsic";"layout"in H&&(H.layout&&(D=H.layout),delete H.layout);var F=x;if("loader"in H){if(H.loader){var Z=H.loader;F=function(e){e.config;var t=p(e,["config"]);return Z(t)}}delete H.loader}var U="";if(function(e){var t;return"object"==typeof e&&(k(e)||void 0!==e.src)}(l)){var J=k(l)?l.default:l;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(V=V||J.blurDataURL,U=J.src,(!D||"fill"!==D)&&(P=P||J.height,j=j||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}l="string"==typeof l?l:U;var Q=!O&&("lazy"===A||void 0===A);(l.startsWith("data:")||l.startsWith("blob:"))&&(g=!0,Q=!1),v.has(l)&&(Q=!1),B.unoptimized&&(g=!0);var K=r(s.useState(!1),2),X=K[0],Y=K[1],$=r(h.useIntersection({rootRef:void 0===_?null:_,rootMargin:z||"200px",disabled:!Q}),3),ee=$[0],et=$[1],eo=$[2],en=!Q||et,er={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ei=!1,el=G(j),ec=G(P),ep=G(T),es=Object.assign({},N,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:L}),ed="blur"!==R||X?{}:{backgroundSize:C||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(V,'")')};if("fill"===D)er.display="block",er.position="absolute",er.top=0,er.left=0,er.bottom=0,er.right=0;else if(void 0!==el&&void 0!==ec){var eu=ec/el,eh=isNaN(eu)?"100%":"".concat(100*eu,"%");"responsive"===D?(er.display="block",er.position="relative",ei=!0,ea.paddingTop=eh):"intrinsic"===D?(er.display="inline-block",er.position="relative",er.maxWidth="100%",ei=!0,ea.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===D&&(er.display="inline-block",er.position="relative",er.width=el,er.height=ec)}var ef={src:b,srcSet:void 0,sizes:void 0};en&&(ef=E({config:B,src:l,unoptimized:g,layout:D,width:el,quality:ep,sizes:c,loader:F}));var em=l,eg="imagesizes";eg="imageSizes";var ey=(n(o={},"imageSrcSet",ef.srcSet),n(o,eg,ef.sizes),n(o,"crossOrigin",H.crossOrigin),o),ev=s.default.useLayoutEffect,eb=s.useRef(W),ew=s.useRef(l);s.useEffect(function(){eb.current=W},[W]),ev(function(){ew.current!==l&&(eo(),ew.current=l)},[eo,l]);var ek=i({isLazy:Q,imgAttributes:ef,heightInt:ec,widthInt:el,qualityInt:ep,layout:D,className:I,imgStyle:es,blurStyle:ed,loading:A,config:B,unoptimized:g,placeholder:R,loader:F,srcString:em,onLoadingCompleteRef:eb,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:c},H);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:er},ei?s.default.createElement("span",{style:ea},t?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,s.default.createElement(S,Object.assign({},ek))),O?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ef.src+ef.srcSet+ef.sizes,rel:"preload",as:"image",href:ef.srcSet?void 0:ef.src},ey))):null)};var i=o(6495).Z,l=o(2648).Z,c=o(1598).Z,p=o(7273).Z,s=c(o(7294)),d=l(o(5443)),u=o(9309),h=o(7190),f=o(9977);o(3794);var m=o(2392);function g(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},v=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(e){var t=e.config,o=e.src,n=e.width,r=e.quality;return o.endsWith(".svg")&&!t.dangerouslyAllowSVG?o:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(o),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,o=e.src,n=e.width,r=e.quality,a=new URL("".concat(t.path).concat(g(o))),i=a.searchParams;return i.set("auto",i.getAll("auto").join(",")||"format"),i.set("fit",i.get("fit")||"max"),i.set("w",i.get("w")||n.toString()),r&&i.set("q",r.toString()),a.href}],["cloudinary",function(e){var t,o=e.config,n=e.src,r=e.width,a=["f_auto","c_limit","w_"+r,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(o.path).concat(a).concat(g(n))}],["akamai",function(e){var t=e.config,o=e.src,n=e.width;return"".concat(t.path).concat(g(o),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function k(e){return void 0!==e.default}function E(e){var t=e.config,o=e.src,n=e.unoptimized,r=e.layout,i=e.width,l=e.quality,c=e.sizes,p=e.loader;if(n)return{src:o,srcSet:void 0,sizes:void 0};var s=function(e,t,o,n){var r=e.deviceSizes,i=e.allSizes;if(n&&("fill"===o||"responsive"===o)){for(var l=/(^|\s)(1?\d?\d)vw/g,c=[];p=l.exec(n);p)c.push(parseInt(p[2]));if(c.length){var p,s,d=.01*(s=Math).min.apply(s,a(c));return{widths:i.filter(function(e){return e>=r[0]*d}),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t||"fill"===o||"responsive"===o?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map(function(e){return i.find(function(t){return t>=e})||i[i.length-1]}))),kind:"x"}}(t,i,r,c),d=s.widths,u=s.kind,h=d.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:d.map(function(e,n){return"".concat(p({config:t,src:o,quality:l,width:e})," ").concat("w"===u?e:n+1).concat(u)}).join(", "),src:p({config:t,src:o,quality:l,width:d[h]})}}function G(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function x(e){var t,o=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(o);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(o))}function O(e,t,o,n,r,a){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(v.add(t),"blur"===n&&a(!0),null==r?void 0:r.current)){var o=e.naturalWidth,i=e.naturalHeight;r.current({naturalWidth:o,naturalHeight:i})}}))}var S=function(e){var t=e.imgAttributes,o=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,u=e.placeholder,h=e.loading,f=e.srcString,m=e.config,g=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,k=e.onLoad,G=e.onError,x=(e.isVisible,e.noscriptSizes),S=p(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=d?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":r,className:a,style:i({},l,c),ref:s.useCallback(function(e){w(e),(null==e?void 0:e.complete)&&O(e,f,r,u,v,b)},[w,f,r,u,v,b,]),onLoad:function(e){O(e.currentTarget,f,r,u,v,b),k&&k(e)},onError:function(e){"blur"===u&&b(!0),G&&G(e)}})),(d||"blur"===u)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,E({config:m,src:f,unoptimized:g,layout:r,width:o,quality:n,sizes:x,loader:y}),{decoding:"async","data-nimg":r,style:l,className:a,loading:h}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,o=e.rootRef,p=e.rootMargin,s=e.disabled||!i,d=n(r.useState(!1),2),u=d[0],h=d[1],f=n(r.useState(null),2),m=f[0],g=f[1];return r.useEffect(function(){if(i){if(!s&&!u&&m&&m.tagName){var e,t,n,r,d,f,g;return t=function(e){return e&&h(e)},d=(r=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=l.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},c.push(o),l.set(o,t),t}(n={root:null==o?void 0:o.current,rootMargin:p})).id,f=r.observer,(g=r.elements).set(m,t),f.observe(m),function(){if(g.delete(m),f.unobserve(m),0===g.size){f.disconnect(),l.delete(d);var e=c.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&c.splice(e,1)}}}}else if(!u){var y=a.requestIdleCallback(function(){return h(!0)});return function(){return a.cancelIdleCallback(y)}}},[m,s,p,o,u]),[g,u,r.useCallback(function(){h(!1)},[])]};var r=o(7294),a=o(9311),i="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,o){e.exports=o(5443)},5675:function(e,t,o){o(8045)},8357:function(e,t,o){"use strict";o.d(t,{w_:function(){return c}});var n=o(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(r),i=function(){return(i=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function c(e){return function(t){return n.createElement(p,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,o){return n.createElement(t.tag,i({key:o},t.attr),e(t.child))})}(e.child))}}function p(e){var t=function(t){var o,r=e.attr,a=e.size,c=e.title,p=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,p,{className:o,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,function(e){return t(e)}):t(r)}},5301:function(e,t,o){"use strict";var n,r=o(7294),a=r&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");var l=function(e){var t=e.top,o=void 0===t?20:t,n=e.className,l=e.color,c=e.smooth,p=void 0!==c&&c,s=e.component,d=e.viewBox,u=e.svgPath,h=e.width,f=e.height,m=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o}(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),g=r.useState(!1),y=g[0],v=g[1];return r.useEffect(function(){var e=function(){v(document.documentElement.scrollTop>=o)};return e(),document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}},[o]),a.createElement(a.Fragment,null,y&&a.createElement("button",i({className:"scroll-to-top "+(void 0===n?"":n),onClick:function(){var e;void 0===(e=p)&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0},"aria-label":"Scroll to top"},m),(void 0===s?"":s)||a.createElement("svg",{width:void 0===h?"28":h,height:void 0===f?"28":f,fill:void 0===l?"black":l,viewBox:void 0===d?"0 0 256 256":d},a.createElement("path",{d:void 0===u?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":u}))))};e.exports=l}}]);