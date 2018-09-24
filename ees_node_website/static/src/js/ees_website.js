// -*- coding: utf-8 -*-
// © 2017 Hideki Yamamoto
// License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).


try{EES.test=false;delete HAY.test}catch{window.EES={};}
EES.website={
	
};

window.SEDE_INIZIALE='milano';
window.ZOOM_INIZIALE=15;
window.COORD_INIZIALI={lat:45.4687141,lng:9.1964376};

$(document).ready(function(e){
    $("#share").jsSocials({
		shares: ["twitter", "facebook", "googleplus", "linkedin", "whatsapp"]
	});
	$(window).resize(veronicaresize);
});


window.veronicaresize=function(){
	var w=document.body.offsetWidth;
	var h=document.body.offsetHeight;
	if(h<=w){
		document.body.classList.add('horizontal');
		document.body.classList.remove('vertical');
	}
	else{
		document.body.classList.add('vertical');
		document.body.classList.remove('horizontal');
	}
	
}














function initMap(){
	
	window.map = new google.maps.Map(document.getElementById('map'), {
    zoom:ZOOM_INIZIALE,center:COORD_INIZIALI,
    styles:[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]
  });
  mrk=new google.maps.Marker({position:COORD_INIZIALI,map:map,title:'Salotto Milanese'});
};



/*! jssocials - v1.4.0 - 2016-10-10
* http://js-socials.com
* Copyright (c) 2016 Artem Tabalin; Licensed MIT */
!function(a,b,c){function d(a,c){var d=b(a);d.data(f,this),this._$element=d,this.shares=[],this._init(c),this._render()}var e="JSSocials",f=e,g=function(a,c){return b.isFunction(a)?a.apply(c,b.makeArray(arguments).slice(2)):a},h=/(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,i=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,j={G:1e9,M:1e6,K:1e3},k={};d.prototype={url:"",text:"",shareIn:"blank",showLabel:function(a){return this.showCount===!1?a>this.smallScreenWidth:a>=this.largeScreenWidth},showCount:function(a){return a<=this.smallScreenWidth?"inside":!0},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(a){this._initDefaults(),b.extend(this,a),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=a.location.href,this.text=b.trim(b("meta[name=description]").attr("content")||b("title").text())},_initShares:function(){this.shares=b.map(this.shares,b.proxy(function(a){"string"==typeof a&&(a={share:a});var c=a.share&&k[a.share];if(!c&&!a.renderer)throw Error("Share '"+a.share+"' is not found");return b.extend({url:this.url,text:this.text},c,a)},this))},_attachWindowResizeCallback:function(){b(a).on("resize",b.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){b(a).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(b.isFunction(this.showLabel)||b.isFunction(this.showCount))&&(a.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(b.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=b("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=b(a).width(),this._showLabel=g(this.showLabel,this,this._screenWidth),this._showCount=g(this.showCount,this,this._screenWidth)},_renderShares:function(){b.each(this.shares,b.proxy(function(a,b){this._renderShare(b)},this))},_renderShare:function(a){var c;c=b.isFunction(a.renderer)?b(a.renderer()):this._createShare(a),c.addClass(this.shareClass).addClass(a.share?"jssocials-share-"+a.share:"").addClass(a.css).appendTo(this._$shares)},_createShare:function(a){var c=b("<div>"),d=this._createShareLink(a).appendTo(c);if(this._showCount){var e="inside"===this._showCount,f=e?d:b("<div>").addClass(this.shareCountBoxClass).appendTo(c);f.addClass(e?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(a,f)}return c},_createShareLink:function(a){var c=this._getShareStrategy(a),d=c.call(a,{shareUrl:this._getShareUrl(a)});return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)),this._showLabel&&d.append(this._createShareLabel(a)),b.each(this.on||{},function(c,e){b.isFunction(e)&&d.on(c,b.proxy(e,a))}),d},_getShareStrategy:function(a){var b=m[a.shareIn||this.shareIn];if(!b)throw Error("Share strategy '"+this.shareIn+"' not found");return b},_getShareUrl:function(a){var b=g(a.shareUrl,a);return this._formatShareUrl(b,a)},_createShareLogo:function(a){var c=a.logo,d=h.test(c)?b("<img>").attr("src",a.logo):b("<i>").addClass(c);return d.addClass(this.shareLogoClass),d},_createShareLabel:function(a){return b("<span>").addClass(this.shareLabelClass).text(a.label)},_renderShareCount:function(a,c){var d=b("<span>").addClass(this.shareCountClass);c.addClass(this.shareZeroCountClass).append(d),this._loadCount(a).done(b.proxy(function(a){a&&(c.removeClass(this.shareZeroCountClass),d.text(a))},this))},_loadCount:function(a){var c=b.Deferred(),d=this._getCountUrl(a);if(!d)return c.resolve(0).promise();var e=b.proxy(function(b){c.resolve(this._getCountValue(b,a))},this);return b.getJSON(d).done(e).fail(function(){b.get(d).done(e).fail(function(){c.resolve(0)})}),c.promise()},_getCountUrl:function(a){var b=g(a.countUrl,a);return this._formatShareUrl(b,a)},_getCountValue:function(a,c){var d=(b.isFunction(c.getCount)?c.getCount(a):a)||0;return"string"==typeof d?d:this._formatNumber(d)},_formatNumber:function(a){return b.each(j,function(b,c){return a>=c?(a=parseFloat((a/c).toFixed(2))+b,!1):void 0}),a},_formatShareUrl:function(b,c){return b.replace(i,function(b,d,e){var f=c[e]||"";return f?(d||"")+a.encodeURIComponent(f):""})},_clear:function(){a.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(a,c){var d=this.shares;b.each(["url","text"],function(e,f){f===a&&b.each(d,function(b,d){d[a]=c})})},_normalizeShare:function(a){return b.isNumeric(a)?this.shares[a]:"string"==typeof a?b.grep(this.shares,function(b){return b.share===a})[0]:a},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(f)},option:function(a,b){return 1===arguments.length?this[a]:(this[a]=b,this._passOptionToShares(a,b),void this.refresh())},shareOption:function(a,b,c){return a=this._normalizeShare(a),2===arguments.length?a[b]:(a[b]=c,void this.refresh())}},b.fn.jsSocials=function(a){var e=b.makeArray(arguments),g=e.slice(1),h=this;return this.each(function(){var e,i=b(this),j=i.data(f);if(j)if("string"==typeof a){if(e=j[a].apply(j,g),e!==c&&e!==j)return h=e,!1}else j._detachWindowResizeCallback(),j._init(a),j._render();else new d(i,a)}),h};var l=function(a){var c;b.isPlainObject(a)?c=d.prototype:(c=k[a],a=arguments[1]||{}),b.extend(c,a)},m={popup:function(c){return b("<a>").attr("href","#").on("click",function(){return a.open(c.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(a){return b("<a>").attr({target:"_blank",href:a.shareUrl})},self:function(a){return b("<a>").attr({target:"_self",href:a.shareUrl})}};a.jsSocials={Socials:d,shares:k,shareStrategies:m,setDefaults:l}}(window,jQuery),function(a,b,c){b.extend(c.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"https://graph.facebook.com/?id={url}",getCount:function(a){return a.share&&a.share.share_count||0}},vkontakte:{label:"Like",logo:"fa fa-vk",shareUrl:"https://vk.com/share.php?url={url}&title={title}&description={text}",countUrl:"https://vk.com/share.php?act=count&index=1&url={url}",getCount:function(a){return parseInt(a.slice(15,-2).split(", ")[1])}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:""},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(a){return a.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(a){return a.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(a){return a.result.views}},telegram:{label:"Telegram",logo:"fa fa-paper-plane",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""},viber:{label:"Viber",logo:"fa fa-volume-control-phone",shareUrl:"viber://forward?text={url} {text}",countUrl:"",shareIn:"self"},pocket:{label:"Pocket",logo:"fa fa-get-pocket",shareUrl:"https://getpocket.com/save?url={url}&title={title}",countUrl:""},messenger:{label:"Share",logo:"fa fa-commenting",shareUrl:"fb-messenger://share?link={url}",countUrl:"",shareIn:"self"}})}(window,jQuery,window.jsSocials);

/**
 * jquery.skewSlider.js v1.0.0
 *
 
 * Copyright 2014, Hector Mancera.
 * 
 */
(function(e,t,n){"use strict";var r=t.Modernizr;e.SKEWSlider=function(t,n){this.$el=e(n);this._init(t)};e.SKEWSlider.defaults={speed:1e3,easing:"ease",skew:-25,width:"100%",height:"100%",slidePercent:75,centered:true,preloadCount:2,moveFx:false,delay:0,speedDifference:150,infiniteSlide:true,navDots:true,itemPadding:false,moveOnHover:4,hoverSpeed:600,clickOnSiblings:true,ratio:40/11,slideshow:8e3,breakpoints:false,showCaption:true,setCurrent:0,NextPrevDistance:1,itemsToslide:1};e.SKEWSlider.prototype={_init:function(t){this.options=e.extend(true,{},e.SKEWSlider.defaults,t);this.optionsBackup=e.extend(true,{},e.SKEWSlider.defaults,t);this._config();this.options.slideshow&&this._slideShow()},_config:function(){var t=this.options.skew,n=this;this.$el.addClass("skw-container");this.$list=this.$el.children("ul").addClass("skw-list");this.$items=this.$list.children("li");this.HoverSiblings=true;this.itemsCount=this.$items.length;this.updateDelay=false;this.breakpoint=false;this.updateTimeout;this.captionTimeout;this.isHovering=false;this.current=this.options.setCurrent;this.$items.each(function(){var n=e(this);n.css("transform","skew("+t+"deg, 0)");n.append('<div class="skw-loader" />')});this.support=r.csstransitions&&r.csstransforms;this.support3d=r.csstransforms3d;var i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},s={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",transform:"transform"};if(this.support){this.transEndEventName=i[r.prefixed("transition")]+".skewSlider";this.transformName=s[r.prefixed("transform")]}if(this.support){this.$items.css("transition",this.transformName+" "+this.options.speed+"ms "+this.options.easing);this.$list.css("transition",this.transformName+" "+this.options.speed+"ms "+this.options.easing)}this.$el.css({overflow:"hidden",position:"relative"});this.isAnimating=false;this.isAnimatingInf=false;if(this.itemsCount>1){this.$navPrev=e('<span class="skw-prev">&lt;</span>');this.$navNext=e('<span class="skw-next">&gt;</span>');!this.options.infiniteSlide&&this.$navPrev.addClass("skw-trans");var o="";for(var u=0;u<this.itemsCount;++u){var a=u===this.current?'<span class="skw-current"></span>':"<span></span>";o+=a}var f=e('<div class="skw-dots"/>').append(o),l=e('<nav class="skw-nav" />').append(f).prepend(this.$navPrev).append(this.$navNext).appendTo(this.$el);this.$navDots=l.find(".skw-dots span");this.$mainNav=this.$el.children(".skw-nav");this.$mainNav.css("marginLeft",-this.$mainNav.width()/2)}this.$caption=e('<div class="skw-caption" />');this.$items.eq(this.current).addClass("skw-animate");this.$caption=this.$caption.appendTo(this.$el);this.$nav=this.$el.find(".skw-nav");this._update(true)},_update:function(n,r,i){function b(e){return e*(Math.PI/180)}function A(e,t){return e*100/t}var s=e(t).width(),o=this,u=this.options.moveFx,a=this.options.infiniteSlide?this.$items.add(this.$infItems):this.$item,f=this.options.infiniteSlide?this.options.preloadCount:0;if(!n&&this.options.breakpoints){for(var l in o.optionsBackup){o.options[l]=o.optionsBackup[l]}}this.old=this.current;if(r){for(var c in r){o.options[c]=r[c]}}if(this.options.breakpoints){o.breakpoint=false;for(var l in this.options.breakpoints){var h=this.options.breakpoints[l];for(var c in h){if(h.hasOwnProperty(c)){if(c=="maxWidth"){if(s<=h[c]){var p=this.options.breakpoints[l];for(var l in p){o.options[l]=p[l]}}}}}}}if(n){this.current=this.options.setCurrent}else if(r){if(r["setCurrent"]||r["setCurrent"]==0){this.current=this.options.setCurrent}}if(this.options.navDots){this.$nav.addClass("show")}else{this.$nav.removeClass("show")}this._loadCaption();var d=this.options.width;if(typeof d!="number"){var v=d.substring(0,d.length-1);d=this.$el.parent().width()*(v/100)}var m=this.options.slidePercent/100,g=Math.abs(this.options.ratio?d/this.options.ratio:this.options.height);this.$el.css({height:g,width:d});if(typeof g!="number"){var y=g.substring(0,g.length-1);g=Math.abs(this.$el.parent().height()*(y/100))}var w=g/2*Math.tan(b(Math.abs(this.options.skew))),E=d-w*2,S=E/d,x=(1-S)/2,T=d*S,N=this.options.centered?d*x+T*Math.abs(1-m)/2:d*x,C=(this.itemsCount+this.options.preloadCount)*2*Math.round(T*m),k=Math.round(T*m),L=k*100/C;this._updatePos(i,k,C);this.$list.css({height:"100%",width:C});this.$items.css({width:A(k,C)+"%",display:"block","z-index":7});if(this.options.itemPadding){this.$items.find(".skw-content").css({paddingLeft:w*2,paddingRight:w*2})}else{this.$items.find(".skw-content").css({paddingLeft:"",paddingRight:""})}var O=C*(A(k,C)/100);var M=Math.round(O+w*2),_=Math.round((O*(M/100)-O)/2/d*100);this.$items.find(".skw-content").add(this.$el.find(".skw-loader")).css({transform:"skew("+this.options.skew*-1+"deg, 0) translate(-"+Math.round(w)+"px, 0)",width:M});if(!n&&this.options.infiniteSlide){this.$infItems.css({width:A(k,C)+"%","z-index":7}).find(".skw-content").css({transform:"skew("+this.options.skew*-1+"deg, 0) translate(-"+w+"px, 0)",width:M});for(var D=0;D<this.options.preloadCount;D++){this.$infItems.eq(D).css({left:Math.round(-(O*(this.options.preloadCount-D)))})}}if(n&&this.options.infiniteSlide){for(var D=1;D<=this.options.preloadCount;D++){this.$items.eq(this.itemsCount-D).clone().removeClass().addClass("skw-infLeft skw-infItem").css({left:Math.round(-(O*D))}).prependTo(this.$list);this.$items.eq(D-1).clone().removeClass().addClass("skw-infRight skw-infItem").appendTo(this.$list)}this.$infItems=this.$list.find(".skw-infItem")}if(n){this._loadImages()}this.$list.css("marginLeft",Math.round(N));this._toggleNavControls();this._initEvents()},_updatePos:function(e,t,n){var r=t,n=n,i=this,s=-1*r/n*100*this.current,o=-1*this.current*100,u=this.options.infiniteSlide?this.$items.add(this.$infItems):this.$items,a=this.options.infiniteSlide?this.options.preloadCount:0;i.$list.css("transform",i.support3d?"translate3d("+s+"%,0,0)":"translate("+s+"%)");u.css("transform",i.support3d?"translate3d(0,0,0) skew("+i.options.skew+"deg, 0)":"translate(0) skew("+i.options.skew+"deg, 0)");if(i.options.moveFx){setTimeout(function(){u.css("transform",i.support3d?"translate3d("+o+"%,0,0) skew("+i.options.skew+"deg, 0)":"translate("+o+"%) skew("+i.options.skew+"deg, 0)");i.$list.css("transform",i.support3d?"translate3d(0,0,0)":"translate(0)")},e)}if(this.current<0||this.current>this.itemsCount-1){u.eq(i.current+a).addClass("skw-itemActive skw-visible");this.$infItems.removeClass("skw-itemActive skw-visible");this.isAnimatingInf=e;this._toggleNavControls();this.old=this.current;var f=this.current<0?i.itemsCount+i.current:Math.abs(i.itemsCount-i.current);i.current=f;this._fakeStates(f,e)}},_initEvents:function(){var n=this,r;if(this.itemsCount>1){this.$navPrev.on("click.skewSlider",e.proxy(this._navigate,this,"previous"));this.$navNext.on("click.skewSlider",e.proxy(this._navigate,this,"next"));this.$navDots.on("click.skewSlider",function(){n._jump(e(this).index())})}if(this.options.moveOnHover){e(this.$el).on("mouseenter.skewSlider",".skw-itemNext, .skw-itemPrev",function(){n._hoverItem(true,e(this))});e(this.$el).on("mouseleave.skewSlider",".skw-itemNext, .skw-itemPrev",function(){n._hoverItem(false,e(this))})}e(this.$el).on("click",".skw-list > li.skw-itemNext > a, .skw-list > li.skw-itemPrev > a",function(e){e.preventDefault()});if(this.options.clickOnSiblings){e(this.$el).on("click.skewSlider",".skw-itemNext",function(){var t=e(this);if(!n.options.moveFx){t.css("transform",n.support3d?"translate3d(0,0,0) skew("+n.options.skew+"deg, 0)":"translate(0) skew("+n.options.skew+"deg, 0)")}n._navigate("next");setTimeout(function(){t.css("z-index",n.itemsCount+1)},n.options.speed)});e(this.$el).on("click.skewSlider",".skw-itemPrev",function(){var t=e(this);if(!n.options.moveFx){t.css("transform",n.support3d?"translate3d(0,0,0) skew("+n.options.skew+"deg, 0)":"translate(0) skew("+n.options.skew+"deg, 0)")}n._navigate("previous");setTimeout(function(){t.css("z-index",n.itemsCount+1)},n.options.speed)})}if(this.options.slideshow){e(this.$el).on("mouseenter.skewSlider",function(){clearInterval(n.slideShow)});e(this.$el).on("mouseleave.skewSlider",function(){n._slideShow()})}e(t).on("resize",function(){r&&clearTimeout(r);r=setTimeout(function(){n._update()},500)})},_hoverItem:function(e,t){var n=t,r,i=this;if(this.isAnimating||!this.HoverSiblings){return false}this.$items.eq(this.current).removeClass("skw-visible");if(e){if(this.options.moveFx){var s=n.hasClass("skw-itemNext")?-1*this.current*100-this.options.moveOnHover:-1*this.current*100+this.options.moveOnHover}else{var s=n.hasClass("skw-itemNext")?-1*this.options.moveOnHover:this.options.moveOnHover}this.isHovering=true;n.css({transform:this.support3d?"translate3d("+s+"%,0,0) skew("+this.options.skew+"deg, 0)":"translate("+s+"%) skew("+this.options.skew+"deg, 0)",transition:this.transformName+" "+this.options.hoverSpeed+"ms "+this.options.easing,"z-index":99})}else{if(this.options.moveFx){n.css({transform:this.support3d?"translate3d("+ -1*this.current*100+"%,0,0) skew("+this.options.skew+"deg, 0)":"translate("+ -1*this.current*100+"%) skew("+this.options.skew+"deg, 0)",transition:this.transformName+" "+this.options.hoverSpeed+"ms "+this.options.easing})}else{n.css({transform:this.support3d?"translate3d(0,0,0) skew("+this.options.skew+"deg, 0)":"translate(0) skew("+this.options.skew+"deg, 0)",transition:this.transformName+" "+this.options.hoverSpeed+"ms "+this.options.easing})}}},_navigate:function(e){if(this.isAnimating){return false}this.isAnimating=true;this.old=this.current;if(e==="next"){this.current+=this.options.itemsToslide}else if(e==="previous"){this.current-=this.options.itemsToslide}this._slide()},_slideShow:function(){var e=this;clearInterval(e.slideShow);this.slideShow=setInterval(function(){e._navigate("next")},e.options.slideshow)},_jump:function(e){if(e===this.current||this.isAnimating){return false}this.isAnimating=true;this.old=this.current;this.current=e;this._slide()},_loadCaption:function(){var e=this.$items.eq(this.current),t=e.find(".skw-content").data("caption"),n=this;clearTimeout(this.captionTimeout);if(t&&this.options.showCaption){n.$caption.html(t).css({opacity:1,pointerEvents:""})}else{n.$caption.css({opacity:0,pointerEvents:"none"});this.captionTimeout=setTimeout(function(){n.$caption.html("")},1e3)}},_slide:function(t){var n=this.options.infiniteSlide?this.$items.add(this.$infItems):this.$item,r=this.options.infiniteSlide?this.options.preloadCount:0,i=this;if(t!=="no-trans"){this.$infItems.removeClass("skw-itemActive");this._toggleNavControls()}this.$caption.css("opacity",0);var s=this.current;var o=e.proxy(function(){this.isAnimating=false;this.isAnimatingInf=false;this._loadCaption();this.$items.eq(this.current).addClass("skw-animate").siblings(".skw-animate").removeClass("skw-animate")},this);var u=this;this._loadImages();if(!this.options.moveFx&&this.options.moveOnHover){this.$items.eq(this.current).css("transform",this.support3d?"translate3d(0,0,0) skew("+this.options.skew+"deg, 0)":"translate(0) skew("+this.options.skew+"deg, 0)");if(this.options.infiniteSlide){var a;if(this.current>this.itemsCount-1){a=this.options.preloadCount}else if(this.current<0){a=this.options.preloadCount-1}this.$infItems.eq(a).css("transform",this.support3d?"translate3d(0,0,0) skew("+this.options.skew+"deg, 0)":"translate(0) skew("+this.options.skew+"deg, 0)")}}if(!this.support||!this.options.moveFx){var f=this.$items.outerWidth(true),l=this.$list.width(),c=-1*f/l*100*this.current;if(this.support){this.$list.css({transform:this.support3d?"translate3d("+c+"%,0,0)":"translate("+c+"%)",transition:this.transformName+" "+this.options.speed+"ms "+this.options.easing})}else{this.$list.animate("margin-left",c+"%")}this.maxTime=this.options.speed}else{var c=-1*this.current*100,h=u.old<u.current?1:-1;this.maxTime=0;n.each(function(){var t=e(this),n=u.options.infiniteSlide?t.index()-u.options.preloadCount:t.index(),r=Math.abs(u.current-n);var s=u.options.speedDifference;for(var o=1;o<=r;o++){s+=u.options.speedDifference/(Math.pow(1.2,o)*2)}s-=u.options.speedDifference;if(s>i.maxTime){i.maxTime=s}var a=n>u.current?u.options.speed-s*h:u.options.speed+s*h;t.css("transition",u.transformName+" "+a+"ms "+u.options.easing);if(u.options.delay>0){var f=u.old;if(h>0){if(n<=f){t.css({transitionDelay:u.options.delay+"ms","z-index":u.itemsCount})}else{t.css({transitionDelay:0,"z-index":u.itemsCount+1})}}else{if(n>=f){t.css({transitionDelay:u.options.delay+"ms","z-index":u.itemsCount-Math.abs(n-f)})}else{t.css({transitionDelay:0,"z-index":u.itemsCount+1})}}}t.css("transform",this.support3d?"translate3d("+c+"%,0,0) skew("+u.options.skew+"deg, 0)":"translate("+c+"%) skew("+u.options.skew+"deg, 0)")});i.maxTime+=u.options.speed}var p=u.options.speed;if(this.current<0||this.current>this.itemsCount-1){this.isAnimating=true;this.old=this.current;var d=this.current<0?u.itemsCount+u.current:Math.abs(u.itemsCount-u.current);p=this.current<0?this.maxTime+u.options.delay:p+u.options.delay;this._fakeStates(d,p)}if(t=="no-trans"){u.isAnimating=true;p=0;console.log("inf");setTimeout(function(){u.$el.removeClass("skw-noTransition");u.HoverSiblings=true;u.$el.removeClass("skw-noEvents")},100)}setTimeout(function(){o.call()},p)},_fakeStates:function(e,t){var n=this;this.isAnimatingInf=t;this.current=e;this.$el.addClass("skw-noEvents");setTimeout(function(){n.HoverSiblings=false;n.$el.addClass("skw-noTransition");n._slide("no-trans")},t)},_toggleNavControls:function(){if(!this.options.infiniteSlide){switch(this.current){case 0:this.$navNext.removeClass("skw-trans");this.$navPrev.addClass("skw-trans");break;case this.itemsCount-1:this.$navNext.addClass("skw-trans");this.$navPrev.removeClass("skw-trans");break;default:this.$navNext.removeClass("skw-trans");this.$navPrev.removeClass("skw-trans");break}}this.$navDots.eq(this.old).removeClass("skw-current").end().eq(this.current).addClass("skw-current");var e=this.options.infiniteSlide?this.$items.add(this.$infItems):this.$items,t=this.options.infiniteSlide?this.options.preloadCount:0,n=this;e.eq(this.old+t).not(".skw-infItem").removeClass("skw-itemActive");var r=e.eq(n.current+t);e.filter(".skw-itemNext").removeClass("skw-itemNext");e.filter(".skw-itemPrev").removeClass("skw-itemPrev");r.addClass("skw-itemActive");if(this.current>=0&&this.current<this.itemsCount){e.eq(this.current+t+this.options.NextPrevDistance).addClass("skw-itemNext");e.eq(this.options.centered?this.current+t-this.options.NextPrevDistance:this.current+t-1).addClass("skw-itemPrev")}if(this.current<0){e.eq(this.current+this.itemsCount+t).addClass("skw-itemActive");e.eq(this.current+this.itemsCount+t+1).addClass("skw-animate");e.eq(this.current+this.itemsCount+t+this.options.NextPrevDistance).addClass("skw-itemNext");e.eq(this.options.centered?this.current+this.itemsCount+t-this.options.NextPrevDistance:this.current+this.itemsCount+t-1).addClass("skw-itemPrev")}if(this.current>=this.itemsCount){e.eq(this.current-this.itemsCount+t).addClass("skw-itemActive");e.eq(this.current-this.itemsCount+t-1).addClass("skw-animate");e.eq(this.current-this.itemsCount+t+this.options.NextPrevDistance).addClass("skw-itemNext");e.eq(this.options.centered?this.current-this.itemsCount+t-this.options.NextPrevDistance:this.current-this.itemsCount+t-1).addClass("skw-itemPrev");this.$navDots.eq(this.old).removeClass("skw-current").end().eq(this.current-this.itemsCount).addClass("skw-current")}},_loadImages:function(){var e=this,t=this.options.infiniteSlide?this.$items.add(this.$infItems):this.$items,n=this.options.infiniteSlide?this.options.preloadCount:0;for(var r=e.current-e.options.preloadCount;r<=e.current+e.options.preloadCount;r++){var i=t.eq(r+n),s=i.find(".skw-content"),o=s.data("bg");if(o&&!s.hasClass("charged"))s.css("background-image","url("+o+")").addClass("charged")}},update:function(e,t,n,r){var i=0,s=this,o=true;if(this.updateDelay){o=false}if(this.isAnimatingInf){if(!r){if(t){setTimeout(function(){t(false)},n)}return false}i=this.isAnimatingInf+100;this.updateDelay=true}this.updateTimeout=setTimeout(function(){var r=s.options.infiniteSlide?s.$items.add(s.$infItems):s.$items;n=n||600;s.$list.parent().css("transition","all "+n+"ms");s.$list.css("transition","all "+n+"ms");r.css("transition","all "+n+"ms");r.find(".skw-content").css("transition","all "+n+"ms");if(!this.updateDelay){s._update(false,e,n);s._toggleNavControls()}if(t){setTimeout(function(){t(o)},n)}s.updateDelay=false},i)},navigate:function(e,t){var n=this;if(e=="next"||e=="previous"){var r=e=="next"?this.current+1:this.current-1;this._jump(r)}else{this._jump(e)}console.log(n.maxTime);if(t){setTimeout(function(){t()},n.maxTime+200)}}};e.fn.skewSlider=function(t){if(typeof t==="string"){var n=Array.prototype.slice.call(arguments,1);this.each(function(){var r=e.data(this,"skewSlider");if(!r){logError("cannot call methods on cbpFWSlider prior to initialization; "+"attempted to call method '"+t+"'");return}if(!e.isFunction(r[t])||t.charAt(0)==="_"){logError("no such method '"+t+"' for cbpFWSlider instance");return}r[t].apply(r,n)})}else{this.each(function(){var n=e.data(this,"skewSlider");if(n){n._init()}else{n=e.data(this,"skewSlider",new e.SKEWSlider(t,this))}})}return this}})(jQuery,window)
	