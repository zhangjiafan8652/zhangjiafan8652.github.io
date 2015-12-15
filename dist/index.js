
!function (a) {
	a.flexslider = function (b, c) {
		var d = b;
		d.init = function () {
			function b(a) {
				if (!d.animating && (39 == a.keyCode || 37 == a.keyCode)) {
					if (39 == a.keyCode) {
						var b = d.getTarget("next");
					} else {
						if (37 == a.keyCode) {
							var b = d.getTarget("prev");
						}
					}
					d.canAdvance(b) && d.flexAnimate(b, d.vars.pauseOnAction);
				}
			}
			function e(a) {
				d.animating ? a.preventDefault() : 1 == a.touches.length && (d.pause(), r = d.vertical ? d.height() : d.width(), t = Number(new Date), q = d.vertical ? (d.currentSlide + d.cloneOffset) * d.height() : (d.currentSlide + d.cloneOffset) * d.width(), o = d.vertical ? a.touches[0].pageY : a.touches[0].pageX, p = d.vertical ? a.touches[0].pageX : a.touches[0].pageY, d.setTransition(0), this.addEventListener("touchmove", f, !1), this.addEventListener("touchend", g, !1));
			}
			function f(a) {
				s = d.vertical ? o - a.touches[0].pageY : o - a.touches[0].pageX, u = d.vertical ? Math.abs(s) < Math.abs(a.touches[0].pageX - p) : Math.abs(s) < Math.abs(a.touches[0].pageY - p), u || (a.preventDefault(), "slide" == d.vars.animation && d.transitions && (d.vars.animationLoop || (s /= 0 == d.currentSlide && 0 > s || d.currentSlide == d.count - 1 && s > 0 ? Math.abs(s) / r + 2 : 1), d.args[d.prop] = d.vertical ? "translate3d(0," + (-q - s) + "px,0)" : "translate3d(" + (-q - s) + "px,0,0)", d.container.css(d.args)));
			}
			function g() {
				if (d.animating = !1, d.animatingTo == d.currentSlide && !u && null != s) {
					var a = d.getTarget(s > 0 ? "next" : "prev");
					d.canAdvance(a) && Number(new Date) - t < 550 && Math.abs(s) > 20 || Math.abs(s) > r / 2 ? d.flexAnimate(a, d.vars.pauseOnAction) : d.flexAnimate(d.currentSlide, d.vars.pauseOnAction);
				}
				this.removeEventListener("touchmove", f, !1), this.removeEventListener("touchend", g, !1), o = null, p = null, s = null, q = null;
			}
			if (d.vars = a.extend({}, a.flexslider.defaults, c), d.data("flexslider", !0), d.container = a(".slides", d), d.slides = a(".slides > li", d), d.count = d.slides.length, d.animating = !1, d.currentSlide = d.vars.slideToStart, d.animatingTo = d.currentSlide, d.atEnd = 0 == d.currentSlide ? !0 : !1, d.eventType = "ontouchstart" in document.documentElement ? "touchstart" : "click", d.cloneCount = 0, d.cloneOffset = 0, d.manualPause = !1, d.vertical = "vertical" == d.vars.slideDirection, d.prop = d.vertical ? "top" : "marginLeft", d.args = {}, d.transitions = "webkitTransition" in document.body.style, d.transitions && (d.prop = "-webkit-transform"), "" != d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).eq(a(".slides").index(d.container)), d.containerExists = d.controlsContainer.length > 0), "" != d.vars.manualControls && (d.manualControls = a(d.vars.manualControls, d.containerExists ? d.controlsContainer : d), d.manualExists = d.manualControls.length > 0), d.vars.randomize && (d.slides.sort(function () {
				return Math.round(Math.random()) - 0.5;
			}), d.container.empty().append(d.slides)), "slide" == d.vars.animation.toLowerCase()) {
				d.transitions && d.setTransition(0), d.css({overflow:"hidden"}), d.vars.animationLoop && (d.cloneCount = 2, d.cloneOffset = 1, d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))), d.newSlides = a(".slides > li", d);
				var h = -1 * (d.currentSlide + d.cloneOffset);
				d.vertical ? (d.newSlides.css({display:"block", width:"100%", "float":"left"}), d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
					d.css({position:"relative"}).height(d.slides.filter(":first").height()), d.args[d.prop] = d.transitions ? "translate3d(0," + h * d.height() + "px,0)" : h * d.height() + "px", d.container.css(d.args);
				}, 100)) : (d.args[d.prop] = d.transitions ? "translate3d(" + h * d.width() + "px,0,0)" : h * d.width() + "px", d.container.width(200 * (d.count + d.cloneCount) + "%").css(d.args), setTimeout(function () {
					d.newSlides.width(d.width()).css({"float":"left", display:"block"});
				}, 100));
			} else {
				d.transitions = !1, d.slides.css({width:"100%", "float":"left", marginRight:"-100%"}).eq(d.currentSlide).fadeIn(d.vars.animationDuration);
			}
			if (d.vars.controlNav) {
				if (d.manualExists) {
					d.controlNav = d.manualControls;
				} else {
					for (var i = a("<ol class=\"flex-control-nav\"></ol>"), j = 1, k = 0; k < d.count; k++) {
						i.append("<li><a>" + j + "</a></li>"), j++;
					}
					d.containerExists ? (a(d.controlsContainer).append(i), d.controlNav = a(".flex-control-nav li a", d.controlsContainer)) : (d.append(i), d.controlNav = a(".flex-control-nav li a", d));
				}
				d.controlNav.eq(d.currentSlide).addClass("active"), d.controlNav.bind(d.eventType, function (b) {
					b.preventDefault(), a(this).hasClass("active") || (d.direction = d.controlNav.index(a(this)) > d.currentSlide ? "next" : "prev", d.flexAnimate(d.controlNav.index(a(this)), d.vars.pauseOnAction));
				});
			}
			if (d.vars.directionNav) {
				var l = a("<ul class=\"flex-direction-nav\"><li><a class=\"prev\" href=\"#\">" + d.vars.prevText + "</a></li><li><a class=\"next\" href=\"#\">" + d.vars.nextText + "</a></li></ul>");
				d.containerExists ? (a(d.controlsContainer).append(l), d.directionNav = a(".flex-direction-nav li a", d.controlsContainer)) : (d.append(l), d.directionNav = a(".flex-direction-nav li a", d)), d.vars.animationLoop || (0 == d.currentSlide ? d.directionNav.filter(".prev").addClass("disabled") : d.currentSlide == d.count - 1 && d.directionNav.filter(".next").addClass("disabled")), d.directionNav.bind(d.eventType, function (b) {
					b.preventDefault();
					var c = d.getTarget(a(this).hasClass("next") ? "next" : "prev");
					d.canAdvance(c) && d.flexAnimate(c, d.vars.pauseOnAction);
				});
			}
			if (d.vars.keyboardNav && 1 == a("ul.slides").length && a(document).bind("keyup", b), d.vars.mousewheel && (d.mousewheelEvent = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel", d.bind(d.mousewheelEvent, function (a) {
				a.preventDefault(), a = a ? a : window.event;
				var b = a.detail ? -1 * a.detail : a.wheelDelta / 40, c = d.getTarget(0 > b ? "next" : "prev");
				d.canAdvance(c) && d.flexAnimate(c, d.vars.pauseOnAction);
			})), d.vars.slideshow && (d.vars.pauseOnHover && d.vars.slideshow && d.hover(function () {
				d.pause();
			}, function () {
				d.manualPause || d.resume();
			}), d.animatedSlides = setInterval(d.animateSlides, d.vars.slideshowSpeed)), d.vars.pausePlay) {
				var m = a("<div class=\"flex-pauseplay\"><span></span></div>");
				d.containerExists ? (d.controlsContainer.append(m), d.pausePlay = a(".flex-pauseplay span", d.controlsContainer)) : (d.append(m), d.pausePlay = a(".flex-pauseplay span", d));
				var n = d.vars.slideshow ? "pause" : "play";
				d.pausePlay.addClass(n).text("pause" == n ? d.vars.pauseText : d.vars.playText), d.pausePlay.bind(d.eventType, function (b) {
					b.preventDefault(), a(this).hasClass("pause") ? (d.pause(), d.manualPause = !0) : (d.resume(), d.manualPause = !1);
				});
			}
			if ("ontouchstart" in document.documentElement) {
				var o, p, q, r, s, t, u = !1;
				d.each(function () {
					"ontouchstart" in document.documentElement && this.addEventListener("touchstart", e, !1);
				});
			}
			"slide" == d.vars.animation.toLowerCase() && a(window).resize(function () {
				d.animating || (d.vertical ? (d.height(d.slides.filter(":first").height()), d.args[d.prop] = -1 * (d.currentSlide + d.cloneOffset) * d.slides.filter(":first").height() + "px", d.transitions && (d.setTransition(0), d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"), d.container.css(d.args)) : (d.newSlides.width(d.width()), d.args[d.prop] = -1 * (d.currentSlide + d.cloneOffset) * d.width() + "px", d.transitions && (d.setTransition(0), d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"), d.container.css(d.args)));
			}), d.vars.start(d);
		}, d.flexAnimate = function (a, b) {
			if (!d.animating) {
				if (d.animating = !0, d.animatingTo = a, d.vars.before(d), b && d.pause(), d.vars.controlNav && d.controlNav.removeClass("active").eq(a).addClass("active"), d.atEnd = 0 == a || a == d.count - 1 ? !0 : !1, !d.vars.animationLoop && d.vars.directionNav && (0 == a ? d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled") : a == d.count - 1 ? d.directionNav.removeClass("disabled").filter(".next").addClass("disabled") : d.directionNav.removeClass("disabled")), d.vars.animationLoop || a != d.count - 1 || (d.pause(), d.vars.end(d)), "slide" == d.vars.animation.toLowerCase()) {
					var c = d.vertical ? d.slides.filter(":first").height() : d.slides.filter(":first").width();
					d.slideString = 0 == d.currentSlide && a == d.count - 1 && d.vars.animationLoop && "next" != d.direction ? "0px" : d.currentSlide == d.count - 1 && 0 == a && d.vars.animationLoop && "prev" != d.direction ? -1 * (d.count + 1) * c + "px" : -1 * (a + d.cloneOffset) * c + "px", d.args[d.prop] = d.slideString, d.transitions ? (d.setTransition(d.vars.animationDuration), d.args[d.prop] = d.vertical ? "translate3d(0," + d.slideString + ",0)" : "translate3d(" + d.slideString + ",0,0)", d.container.css(d.args).one("webkitTransitionEnd transitionend", function () {
						d.wrapup(c);
					})) : d.container.animate(d.args, d.vars.animationDuration, function () {
						d.wrapup(c);
					});
				} else {
					d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration), d.slides.eq(a).fadeIn(d.vars.animationDuration, function () {
						d.wrapup();
					});
				}
			}
		}, d.wrapup = function (a) {
			"slide" == d.vars.animation && (0 == d.currentSlide && d.animatingTo == d.count - 1 && d.vars.animationLoop ? (d.args[d.prop] = -1 * d.count * a + "px", d.transitions && (d.setTransition(0), d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"), d.container.css(d.args)) : d.currentSlide == d.count - 1 && 0 == d.animatingTo && d.vars.animationLoop && (d.args[d.prop] = -1 * a + "px", d.transitions && (d.setTransition(0), d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"), d.container.css(d.args))), d.animating = !1, d.currentSlide = d.animatingTo, d.vars.after(d);
		}, d.animateSlides = function () {
			d.animating || d.flexAnimate(d.getTarget("next"));
		}, d.pause = function () {
			clearInterval(d.animatedSlides), d.vars.pausePlay && d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText);
		}, d.resume = function () {
			d.animatedSlides = setInterval(d.animateSlides, d.vars.slideshowSpeed), d.vars.pausePlay && d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText);
		}, d.canAdvance = function (a) {
			return !d.vars.animationLoop && d.atEnd ? 0 == d.currentSlide && a == d.count - 1 && "next" != d.direction ? !1 : d.currentSlide == d.count - 1 && 0 == a && "next" == d.direction ? !1 : !0 : !0;
		}, d.getTarget = function (a) {
			return d.direction = a, "next" == a ? d.currentSlide == d.count - 1 ? 0 : d.currentSlide + 1 : 0 == d.currentSlide ? d.count - 1 : d.currentSlide - 1;
		}, d.setTransition = function (a) {
			d.container.css({"-webkit-transition-duration":a / 1000 + "s"});
		}, d.init();
	}, a.flexslider.defaults = {animation:"fade", slideDirection:"horizontal", slideshow:!0, slideshowSpeed:7000, animationDuration:600, directionNav:!0, controlNav:!0, keyboardNav:!0, mousewheel:!1, prevText:"Previous", nextText:"Next", pausePlay:!1, pauseText:"Pause", playText:"Play", randomize:!1, slideToStart:0, animationLoop:!0, pauseOnAction:!0, pauseOnHover:!1, controlsContainer:"", manualControls:"", start:function () {
	}, before:function () {
	}, after:function () {
	}, end:function () {
	}}, a.fn.flexslider = function (b) {
		return this.each(function () {
			1 == a(this).find(".slides li").length ? a(this).find(".slides li").fadeIn(400) : 1 != a(this).data("flexslider") && new a.flexslider(a(this), b);
		});
	};
}(jQuery);
!function (a) {
	a(function () {
		function b() {
			var b = a(".banner"), c = a(window).width(), d = c / 1280 * 540 - 1;
			b.height(d);
		}
		function c(b) {
			var c = b.result;
			if (c.length > 0) {
				i.empty();
				var d = [];
				a.each(c, function (a, b) {
					var c = b._id, e = b.picture, f = " ", g = " ", h = " ";
					if (b.source) {
						var i = "<li><a href=\"" + b.source + "\" ><img src=\"" + e + "\" /><div class=\"flex-caption\"><h4>" + f + "</h4><p>" + g + "</p><p>" + h + "</p> </div></a></li>";
					} else {
						var i = "<li><a href=\"./news.html?newsId=" + c + "\" ><img src=\"" + e + "\" /><div class=\"flex-caption\"><h4>" + f + "</h4><p>" + g + "</p><p>" + h + "</p> </div></a></li>";
					}
					d.push(i);
				}), i.append(d.join("")), a(".flexslider").flexslider({animationLoop:!0, pauseOnAction:!1});
			}
		}
		function d() {
			var b = a(".routes"), c = b.find(".content"), d = fakeRouteList.length;
			c.empty(), a.each(fakeRouteList, function (a, b) {
				a > d - 6 - 1 && c.prepend(renderRouteContent(b));
			});
		}
		function e(b) {
			var c = b.result;
			if (k.empty(), c.length > 0) {
				var d = [], c = c.slice(0, 9);
				a.each(c, function (a, b) {
					var c = b.driver_id, e = b.avatar, f = b.departure, g = b.name.replace("\xe5\xb8\x88\xe5\x82\x85", "") + "\xe5\xb8\x88\xe5\x82\x85", h = "<li><a href=\"./driverDetail.html?driverId=" + c + "&departure=" + encodeURIComponent(f) + "\"><div class=\"driver-head-image-mask\"><img src=\"" + e + "\" alt=\"" + g + "\xe5\x8f\xb8\xe6\x9c\xba\"></div><h4 class=\"driver-name\">" + g + "</h4><p class=\"driver-dream\">\xe4\xbb\x8e" + f + "\xe5\x87\xba\xe5\x8f\x91</p></a></li>";
					d.push(h);
				}), k.append(d.join(""));
			}
		}
		function f(b) {
			b.length > 0 && (j.empty(), a.each(b, function (a, b) {
				var c = b.city, d = (b.price, b.route_image || "./staticsource/specialroute-image/" + (a + 1) + ".png"), e = b.total, f = "<li><a href=\"./driverList.html?departure=" + encodeURIComponent(c) + "\"><div class=\"img-content\" style=\"background-image:url(" + d + ")\"></div><div class=\"route-info\"><h4><span class=\"route-name\">\xe4\xbb\x8e" + c + "\xe5\x87\xba\xe5\x8f\x91</span></h4><p>" + e + "\xe5\x90\x8d\xe5\x8f\xb8\xe6\x9c\xba\xe6\x95\xb4\xe8\xa3\x85\xe5\xbe\x85\xe5\x8f\x91</p></div></a></li>";
				j.append(f);
			}));
		}
		function g(b) {
			var c = b.result;
			if (c.length > 0) {
				var d = [];
				a.each(c, function (a, b) {
					var c = b.pictures && b.pictures[0] || "/static/web_m/img/default_avatar.png", e = b.name + b.spend_time + "\xe6\x97\xa5\xe6\xb8\xb8", f = b.title, g = b.price, h = b._id;
					if (h) {
						var i = "routedetail?route_id=" + h;
					}
					var j = "<li><a href=\"" + i + "\"><img src=\"" + c + "\" alt=\"\"><h4 class=\"trip-name\">" + e + "<span class=\"trip-price\">" + g + "/\xe4\xba\xba</span></h4><p class=\"trip-content\">" + f + "</p></a></li>";
					d.push(j);
				}), l.append(d);
			}
		}
		function h() {
			var a = 1;
			return function () {
				a++, Api.getMoreRoute({type:"get", data:{page_size:9, page_number:a}}).then(function (a) {
					var b = a.status;
					b && g(a);
				});
			};
		}
		var i = a(".slides"), j = a(".waterfall-content"), k = a(".drivers ul"), l = a(".hot-routes ul"), m = a(".load-more-btn"), n = a(".shutdown");
		b(), a(window).resize(function () {
			b();
		}), Api.getBannerInfo({type:"get", data:{bypass:1}}).then(function (a) {
			var b = a.status;
			b && c(a);
		});
		var o = a(".routes");
		o.find(".content");
		d(), Api.specialDriver({type:"get"}).then(function (a) {
			var b = a.status;
			b && e(a);
		}), Api.specialRouteDriverSearch({type:"get", data:{}}).then(function (a) {
			var b = a.result;
			f(b);
		}).fail();
		var p = h();
		m.on("click", function () {
			p();
		}), a.isEmptyObject(userStatus) && !a.cookie("registerBannerClosed") ? a(".bottomLevel").removeClass("hidden") : a(".bottomLevel").remove(), n.on("click", function () {
			a(".bottomLevel").remove(), a.cookie("registerBannerClosed", "true"), !a.cookie("appLinkClosed") && q.css("bottom", "5px");
		});
		var q = a(".app-container");
		a.cookie("appLinkClosed") ? q.remove() : (q.removeClass("hidden"), a.cookie("registerBannerClosed") && q.css("bottom", "5px")), a(".app-close").on("click", function () {
			q.remove(), a.cookie("appLinkClosed", "true");
		});
	});
}(jQuery);
var fakeRouteList = [{status:1, name:"\xe5\xaf\xae\xe5\x9b\xbd\xe4\xb9\x8b\xe6\x97\x85", title:"\xe5\x8e\xbb\xe8\x80\x81\xe6\x8c\x9d\xe9\xa2\x86\xe7\x95\xa5\xe6\x9c\x80\xe6\xa3\x92\xe7\x9a\x84\xe4\xb8\x9c\xe5\x8d\x97\xe4\xba\x9a", pictures:["fakeDataImage/01.jpg"], price:3500, discount_price:2760, route_type:3, url:"http://www.zouzhe.com/news.html?newsId=54bf5653c508d76cf6a75899"}, {status:1, name:"\xe4\xba\x91\xe5\x8d\x97\xe9\x9a\x90\xe4\xb8\x96\xe7\xbb\x9d\xe6\x99\xaf", title:"\xe6\x80\x92\xe6\xb1\x9f - \xe6\x9c\xaa\xe8\xa2\xab\xe5\xbc\x80\xe5\x9e\xa6\xe7\x9a\x84\xe6\x97\x85\xe6\xb8\xb8\xe5\xa4\x84\xe5\xa5\xb3\xe5\x9c\xb0", pictures:["fakeDataImage/02.jpg"], price:6000, url:"http://www.zouzhe.com/news.html?newsId=54c07091c508d76cf6a75e16"}, {status:1, name:"\xe8\x8c\xb6\xe9\xa9\xac\xe5\x8f\xa4\xe9\x81\x93", title:"\xe8\xaf\xba\xe9\x82\x93 - \xe4\xb8\x8a\xe5\x8d\x83\xe5\xb9\xb4\xe5\x8e\x86\xe5\x8f\xb2\xe7\x9a\x84\xe7\x99\xbd\xe6\x97\x8f\xe6\x9d\x91\xe5\xaf\xa8", pictures:["fakeDataImage/03.jpg"], price:3600, url:"http://www.zouzhe.com/news.html?newsId=54d04292c508d77c267f2882"}, {status:1, name:"\xe4\xbb\x99\xe6\x9c\xac\xe9\x82\xa3\xe4\xb8\xe6\x96\x87\xe6\xbd\x9c\xe6\xb0\xb4\xe8\xaf\xbe\xe7\xa8\x8b", title:"\xe5\xa6\xe6\xbd\x9c\xe6\xb0\xb4\xef\xbc\x8c\xe6\xb2\xa1\xe6\x9c\x89\xe7\xac\xa8\xef\xbc\x8c\xe5\x8f\xaa\xe6\x9c\x89\xe6\x87\x92", pictures:["fakeDataImage/04.jpg"], price:"\xe4\xbb\xb7\xe6\xa0\xbc\xef\xbf\xa53600/\xe4\xba\xba", route_type:1, url:"http://www.zouzhe.com/news.html?newsId=54d204bfc508d77c267f4154"}, {status:1, name:"\xe6\xb3\xbc\xe6\xb0\xb4\xe8\xa7\x85\xe9\xa3\x9f\xe5\x82\xa3\xe5\x91\xb3", title:"\xe5\x82\xa3\xe6\x97\x8f\xe5\xbf\x83\xe7\x9b\xae\xe4\xb8\xe7\x9a\x84\xe6\xb0\xb4 - \xe7\x94\x9f\xe5\x91\xbd\xe7\x9a\x84\xe8\xa1\x80\xe6\xba\x90", pictures:["fakeDataImage/05.jpg"], price:2400, url:"http://www.zouzhe.com/news.html?newsId=54d3572ac508d77c267f52e7"}, {status:1, name:"\xe6\x85\xa2\xe6\xb8\xb8\xe6\xb3\xb0\xe5\x8c\x97", title:"\xe7\x8e\xab\xe7\x91\xb0\xe4\xb9\x8b\xe7\xba\xa6-\xe6\xb3\xb0\xe5\x8c\x97\xe6\xb8\x85\xe8\xbf\x88\xe5\xb0\x8f\xe5\x9f\x8e", pictures:["fakeDataImage/06.jpg"], price:"\xe4\xbb\xb7\xe6\xa0\xbc\xef\xbf\xa53300/\xe4\xba\xba", route_type:1, url:"http://www.zouzhe.com/news.html?newsId=54d327a7c508d77c267f4ec7"}, {status:1, name:"\xe9\xa3\x8e\xe4\xb8\x8b\xe7\x9a\x84\xe6\x97\xa5\xe5\x90 - \xe4\xbb\x99\xe6\x9c\xac\xe9\x82\xa3", title:"\xe5\xa9\x86\xe7\xbd\x97\xe6\xb4\xb2\xe4\xb8\x8a\xe6\x9c\x80\xe5\xae\x8c\xe7\xbe\x8e\xe7\x9a\x84\xe7\x8f\x8d\xe7\x8f\xa0", pictures:["fakeDataImage/07.jpg"], price:"\xe4\xbb\xb7\xe6\xa0\xbc\xef\xbf\xa53000/\xe4\xba\xba", route_type:1, url:"http://www.zouzhe.com/news.html?newsId=54d5af29c508d753682078e0"}, {status:1, name:"\xe5\x8b\x87\xe6\x95\xa2\xe8\x80\x85\xe7\x9a\x84\xe6\xb8\xb8\xe6\x88\x8f", title:"\xe5\xbe\x81\xe6\x9c\x8d\xe5\x93\x88\xe5\xb7\xb4\xe9\x9b\xaa\xe5\xb1\xb1\xef\xbc\x8c\xe4\xbd\x93\xe5\x91\xb3\xe4\xba\xba\xe7\x94\x9f\xe7\x9c\x9f\xe8\xb0\x9b", pictures:["fakeDataImage/08.jpg"], price:"\xe4\xbb\xb7\xe6\xa0\xbc\xef\xbf\xa52600/\xe4\xba\xba", route_type:1, url:"http://www.zouzhe.com/news.html?newsId=54d49950c508d77c267f66ec"}, {status:1, name:"\xe9\x9b\xaa\xe5\x9f\x9f\xe6\xa1\x83\xe6\xba\x90", title:"\xe6\x9e\x97\xe8\x8a\x9d - \xe4\xb8\x80\xe5\x9c\xba\xe6\xa1\x83\xe8\x8a\xb1\xe7\x9a\x84\xe7\x9b\x9b\xe5\xae\xb4", pictures:["fakeDataImage/09.jpg"], price:"\xe7\xab\x8b\xe5\x8d\xb3\xe6\x8a\xa5\xe5\x90\x8d", route_type:1, url:"http://www.zouzhe.com/news.html?newsId=54d5c709c508d75368207c2c"}, {status:1, name:"\xe5\x85\x83\xe9\x98\xb3\xe6\xa2\xaf\xe7\x94\xb0", title:"\xe7\xbd\x97\xe5\xb9\xb3\xe6\xb2\xb9\xe8\x8f\x9c\xe8\x8a\xb1\xe7\xba\xa2", pictures:["fakeDataImage/10.jpg"], price:3900, url:"http://www.zouzhe.com/news.html?newsId=54d82854c508d75368208780"}, {status:1, name:"\xe5\x93\x88\xe5\xb0\x94\xe6\xbb\xa8\xe4\xba\x9a\xe5\xb8\x83\xe5\x8a\x9b\xe6\xbb\x91\xe9\x9b\xaa", title:"\xe4\xba\xba\xe7\x94\x9f\xe8\x8b\xa6\xe7\x9f\xef\xbc\x8c\xe6\x9d\xa5\xe5\xbd\x93\xe6\xac\xa1\xe6\x91\x94\xe8\xb7\xa4\xe7\x8e\x8b", pictures:["fakeDataImage/11.jpg"], price:1500, url:"http://www.zouzhe.com/news.html?newsId=54db3e69c508d76d3c8abb77"}, {status:1, name:"\xe7\x9b\x97\xe5\xa2\x93\xe7\xac\x94\xe8\xae\xb0", title:"\xe9\x95\xbf\xe7\x99\xbd\xe5\xb1\xb1\xe6\xb8\xa9\xe6\xb3\x89\xe5\x86\xb0\xe7\x81\xab\xe4\xb8\xa4\xe9\x87\x8d\xe5\xa4\xa9", pictures:["fakeDataImage/12.jpg"], price:6000, url:"http://www.zouzhe.com/news.html?newsId=54d9cfecc508d753682097fb"}, {status:1, name:"\"\xe6\x85\xa2\"\xe6\xb8\xb8\xe4\xb9\x8b\xe6\x97\x85", title:"\xe5\x9f\xe6\x98\xa5\xef\xbc\x8c\xe5\xae\x89\xe7\x84\xb6\xe4\xb8\x96\xe5\xa4\x96\xe7\x9a\x84\xe9\x9a\x90\xe7\xa7\x98\xe5\x8f\xa4\xe9\x95\x87", pictures:["fakeDataImage/13.jpg"], price:1400, url:"http://www.zouzhe.com/news.html?newsId=54e1b05ec508d7089590a1dd"}, {status:1, name:"\xe9\xa6\x99\xe6\xa0\xbc\xe9\x87\x8c\xe6\x8b\x89", title:"\xe6\x9c\x80\xe6\x8e\xa5\xe8\xbf\x91\xe5\xa4\xa9\xe5\xa0\x82\xe7\x9a\x84\xe5\x9c\xb0\xe6\x96\xb9", pictures:["fakeDataImage/14.jpg"], price:2100, url:"http://www.zouzhe.com/news.html?newsId=54e1b0abc508d7089590a1de"}, {status:1, name:"\xe4\xb8\x80\xe8\xb7\xaf\xe5\x90\x91\xe5\x8c\x97", title:"\xe5\x9c\xa8\xe4\xb8\x96\xe7\x95\x8c\xe4\xb8\x8a\xe6\x9c\x80\xe7\xbe\x8e\xe5\xa5\xbd\xe7\x9a\x84\xe8\x8d\x89\xe5\x8e\x9f\xe4\xb8\x8a\xe7\x94\x9f\xe6\xb4\xbb", pictures:["fakeDataImage/15.jpg"], price:1800, url:"http://www.zouzhe.com/news.html?newsId=54dc56bdc508d77cede34c55"}, {status:1, name:"\xe5\x9c\xa8\xe6\x8b\x89\xe5\xb8\x82\xe6\xb5\xb7\xe6\xb8\xb8\xe8\x88\xb9", title:"\xe4\xba\x8e\xe8\x8c\xb6\xe9\xa9\xac\xe5\x8f\xa4\xe9\x81\x93\xe9\xa9\xb0\xe9\xaa\x8b", pictures:["fakeDataImage/16.jpg"], price:"\xe6\xaf\x8f\xe4\xba\xba\xef\xbf\xa5148\xe8\xb5\xb7", route_type:1, url:"http://www.zouzhe.com/news.html?newsId=54e1a03cc508d7089590a1da"}, {status:1, name:"\xe7\xbe\x8e\xe9\xa3\x9f\xe7\x9a\x84\xe4\xbf\x98\xe8\x99\x8f", title:"\xe9\x9d\x9e\xe5\x8e\xbb\xe4\xb8\x8d\xe5\x8f\xaf\xe7\x9a\x84\xe4\xba\x91\xe5\x8d\x97\xe9\xa5\x95\xe9\xa4\xae\xe9\xa3\x9f\xe5\x85\x89\xe4\xb9\x8b\xe6\x97\x85", pictures:["fakeDataImage/17.jpg"], price:4500, url:"http://www.zouzhe.com/news.html?newsId=54e1c58ec508d7089590a1e5"}, {status:1, name:"\xe5\xaf\xbb\xe8\x97\x8f\xe5\x9c\xb0\xe5\xaf\x86\xe7\xa0\x81", title:"\xe7\x99\xbb\xe4\xb8\x96\xe7\x95\x8c\xe4\xb9\x8b\xe5\xb7\x85", pictures:["fakeDataImage/18.jpg"], price:9800, url:"http://www.zouzhe.com/news.html?newsId=54dc4bd0c508d77cede343e8"}, {status:1, name:"\xe5\xbc\x82\xe5\x9f\x9f\xe6\xa1\x83\xe6\xba\x90\xe6\xbb\x87\xe8\xa5\xbf\xe8\xa1\x8c", title:"\xe9\x82\x82\xe9\x80\x85\xe4\xb8\x80\xe6\xae\xb5\xe6\x95\x85\xe4\xba\x8b\xef\xbc\x8c\xe5\x93\x81\xe5\x91\xb3\xe4\xb8\x80\xe6\x96\xb9\xe7\xbe\x8e\xe9\xa3\x9f", pictures:["fakeDataImage/19.jpg"], price:3999, url:"http://www.zouzhe.com/news.html?newsId=54fd3502c508d7739461c404"}, {status:1, name:"\xe6\x81\x8d\xe8\x8b\xa5\xe4\xb8\x96\xe5\xa4\x96\xe7\x9a\x84\xe5\xa5\xb3\xe5\x84\xbf\xe5\x9b\xbd\xe6\xb3\xb8\xe6\xb2\xbd\xe6\xb9\x96", title:"\xe6\xaf\x95\xe7\x94\x9f\xe6\x83\xb3\xe5\x8e\xbb\xe7\xac\xac\xe4\xba\x8c\xe6\xac\xa1\xe7\x9a\x84\xe4\xbb\x99\xe5\xa2\x83", pictures:["fakeDataImage/20.jpg"], price:2100, url:"http://www.zouzhe.com/news.html?newsId=54e1bb2ec508d7089590a1e4"}, {status:1, name:"\xe8\x88\x8c\xe5\xb0\x96\xe4\xb8\x8a\xe7\x9a\x84\xe9\xbb\x94\xe4\xb8\x9c\xe5\x8d\x97", title:"\xe4\xb8\x8d\xe8\xb7\x9f\xe9\xa3\x8e\xe7\x9a\x84\xe6\x8e\xa2\xe5\xba\x97\xe6\x8c\x87\xe5\x8d\x97\xe5\xa4\xa7\xe5\x85\xac\xe5\xbc\x80", pictures:["fakeDataImage/21.jpg"], price:3600, url:"http://www.zouzhe.com/news.html?newsId=54e1dd1cc508d70f164fb20d"}, {status:1, name:"\xe8\xa5\xbf\xe8\xa1\x8c\xe8\xb7\xaf\xe4\xb8\x8a\xe7\x9a\x84\xe6\x9c\x9d\xe5\x9c\xa3", title:"\xe4\xb8\x80\xe7\xa7\x8d\xe8\xb7\xaf\xe5\x9c\xa8\xe8\x84\x9a\xe4\xb8\x8b\xe7\x9a\x84\xe8\x99\x94\xe8\xaf\x9a", pictures:["fakeDataImage/22.jpg"], price:14960, url:"http://www.zouzhe.com/news.html?newsId=54f6f520c508d75d1d3304f9"}];
!function () {
	for (var a = fakeRouteList.length, b = 0; a > b; b++) {
		var c = fakeRouteList[b], d = Math.floor(Math.random() * a);
		fakeRouteList[b] = fakeRouteList[d], fakeRouteList[d] = c;
	}
}();

