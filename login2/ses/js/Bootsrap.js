(function ensightenInit() {
	var ensightenOptions = {
		client: "citizensbank",
		clientId: 397,
		publishPath: "olbprod",
		isPublic: 0,
		serverComponentLocation: "nexus.ensighten.com/citizensbank/olbprod/serverComponent.php",
		staticJavascriptPath: "nexus.ensighten.com/citizensbank/olbprod/code/",
		ns: 'Bootstrapper',
		nexus: "nexus.ensighten.com",
		scUseCacheBuster: "true",
		enableTagAuditBeacon: "false",
		enablePagePerfBeacon: "false",
		registryNs: "ensBootstraps",
		generatedOn: "Wed Apr 21 15:04:52 GMT 2021",
		beaconSamplingSeedValue: 11
	};
	if(!window[ensightenOptions.ns]) {
		window[ensightenOptions.registryNs] || (window[ensightenOptions.registryNs] = {});
		window[ensightenOptions.registryNs][ensightenOptions.ns] = window[ensightenOptions.ns] = function(f) {
			function l(a) {
				this.name = "DependencyNotAvailableException";
				this.message = "Dependency with id " + a + "is missing"
			}

			function m(a) {
				this.name = "BeaconException";
				this.message = "There was an error durring beacon initialization";
				a = a || {};
				this.lineNumber = a.lineNumber || a.line;
				this.fileName = a.fileName
			}

			function n() {
				for(var a = b.dataDefinitionIds.length, c = !0, d = 0; d < a; d++) {
					var e = b.dataDefinitions[b.dataDefinitionIds[d]];
					if(!e || null == e.endRegistration) {
						c = !1;
						break
					}
				}
				c && b.callOnDataDefintionComplete()
			}
			var e = {},
				b = {};
			b.ensightenOptions = ensightenOptions;
			b.scDataObj = {};
			e.version = "1.26.0";
			e.nexus = f.nexus || "nexus.ensighten.com";
			e.rand = -1;
			e.currSec = (new Date).getSeconds();
			e.options = {
				interval: f.interval || 100,
				erLoc: f.errorLocation || e.nexus + "/error/e.gif",
				scLoc: f.serverComponentLocation || e.nexus + "/" + f.client + "/serverComponent.php",
				sjPath: f.staticJavascriptPath || e.nexus + "/" + f.client + "/code/",
				alLoc: f.alertLocation || e.nexus + "/alerts/a.gif",
				publishPath: f.publishPath,
				isPublic: f.isPublic,
				client: f.client,
				clientId: f.clientId,
				enableTagAuditBeacon: f.enableTagAuditBeacon,
				scUseCacheBuster: f.scUseCacheBuster,
				beaconSamplingSeedValue: f.beaconSamplingSeedValue || -1
			};
			e.ruleList = [];
			e.allDeploymentIds = [];
			e.runDeploymentIds = [];
			e.runRuleIds = [];
			e.exceptionList = [];
			e.ensightenVariables = {};
			e.test = function(a) {
				if(!(a.executionData.hasRun || a.executionData.runTime && 0 < a.executionData.runTime.length)) {
					for(var c = 0; c < a.dependencies.length; c++)
						if(!1 === a.dependencies[c]()) return;
					a.execute()
				}
			};
			l.prototype = Error();
			l.prototype || (l.prototype = {});
			l.prototype.constructor = l;
			e.DependencyNotAvailableException = l;
			m.prototype = Error();
			m.prototype || (m.prototype = {});
			m.prototype.constructor = m;
			e.BeaconException = m;
			e.checkForInvalidDependencies = function(a, c, d, h) {
				for(a = 0; a < d.length; a++)
					if("DEPENDENCYNEVERAVAILABLE" === d[a]) return b.currentRuleId = this.id, b.currentDeploymentId = this.deploymentId, b.reportException(new e.DependencyNotAvailableException(h[a])), c && -1 !== c && e.allDeploymentIds.push(c), !0;
				return !1
			};
			b.currentRuleId = -1;
			b.currentDeploymentId = -1;
			b.reportedErrors = [];
			b.reportedAlerts = [];
			b.AF = [];
			b._serverTime = "";
			b._clientIP = "";
			b.sampleBeacon = function() {
				var a = !1;
				try {
					var c = (e.currSec || 0) % 20,
						b = e.options.beaconSamplingSeedValue; - 1 === b ? a = !0 : 0 !== c && 0 === b % c && (a = !0)
				} catch(h) {}
				return a
			};
			b.getServerComponent = function(a) {
				b.callOnGetServerComponent();
				b.insertScript(window.location.protocol + "//" + e.options.scLoc, !1, a || !0, e.options.scUseCacheBuster)
			};
			b.setVariable = function(a, c) {
				e.ensightenVariables[a] = c
			};
			b.getVariable = function(a) {
				return a in e.ensightenVariables ? e.ensightenVariables[a] : null
			};
			b.testAll = function() {
				for(var a = 0; a < e.ruleList.length; a++) e.test(e.ruleList[a])
			};
			b.executionState = {
				DOMParsed: !1,
				DOMLoaded: !1,
				dataDefinitionComplete: !1,
				conditionalRules: !1,
				readyForServerComponent: !1
			};
			b.reportException = function(a) {
				a.timestamp = (new Date).getTime();
				e.exceptionList.push(a);
				a = window.location.protocol + "//" + e.options.erLoc + "?msg=" + encodeURIComponent(a.message || "") + "&lnn=" + encodeURIComponent(a.lineNumber || a.line || -1) + "&fn=" + encodeURIComponent(a.fileName || "") + "&cid=" + encodeURIComponent(e.options.clientId || -1) + "&client=" + encodeURIComponent(e.options.client || "") + "&publishPath=" + encodeURIComponent(e.options.publishPath || "") + "&rid=" + encodeURIComponent(b.currentRuleId || -1) + "&did=" + encodeURIComponent(b.currentDeploymentId || -1) + "&errorName=" + encodeURIComponent(a.name || "");
				a = b.imageRequest(a);
				a.timestamp = (new Date).getTime();
				this.reportedErrors.push(a)
			};
			b.Rule = function(a) {
				this.execute = function() {
					this.executionData.runTime.push(new Date);
					b.currentRuleId = this.id;
					b.currentDeploymentId = this.deploymentId;
					try {
						this.code()
					} catch(c) {
						window[ensightenOptions.ns].reportException(c)
					} finally {
						this.executionData.hasRun = !0, -1 !== this.deploymentId && (e.runDeploymentIds.push(this.deploymentId), e.runRuleIds.push(this.id)), b.testAll()
					}
				};
				this.id = a.id;
				this.deploymentId = a.deploymentId;
				this.dependencies = a.dependencies || [];
				this.code = a.code;
				this.executionData = {
					hasRun: !1,
					runTime: []
				}
			};
			b.registerRule = function(a) {
				if(b.getRule(a.id) && -1 !== a.id) return !1;
				e.ruleList.push(a); - 1 !== a.deploymentId && e.allDeploymentIds.push(a.deploymentId);
				b.testAll();
				return !0
			};
			b.getRule = function(a) {
				for(var c = 0; c < e.ruleList.length; c++)
					if(e.ruleList[c].id === a) return e.ruleList[c];
				return !1
			};
			b.getRuleList = function() {
				return e.ruleList
			};
			b.clearRuleList = function() {
				e.ruleList = []
			};
			b.getAllDeploymentIds = function() {
				return e.allDeploymentIds
			};
			b.getRunRuleIds = function() {
				return e.runRuleIds
			};
			b.getRunDeploymentIds = function() {
				return e.runDeploymentIds
			};
			b.hasRuleRun = function(a) {
				return(a = b.getRule(a)) ? a.executionData.hasRun : !1
			};
			e.toTwoChar = function(a) {
				return(2 === a.toString().length ? "" : "0") + a
			};
			b.Alert = function(a) {
				var c = new Date;
				c = c.getFullYear() + "-" + e.toTwoChar(c.getMonth()) + "-" + e.toTwoChar(c.getDate()) + " " + e.toTwoChar(c.getHours()) + ":" + e.toTwoChar(c.getMinutes()) + ":" + e.toTwoChar(c.getSeconds());
				this.severity = a.severity || 1;
				this.subject = a.subject || "";
				this.type = a.type || 1;
				this.ruleId = a.ruleId || -1;
				this.severity = encodeURIComponent(this.severity);
				this.date = encodeURIComponent(c);
				this.subject = encodeURIComponent(this.subject);
				this.type = encodeURIComponent(this.type)
			};
			b.generateAlert = function(a) {
				a = b.imageRequest(window.location.protocol + "//" + e.options.alLoc + "?d=" + a.date + "&su=" + a.subject + "&se=" + a.severity + "&t=" + a.type + "&cid=" + e.options.clientId + "&client=" + e.options.client + "&publishPath=" + e.options.publishPath + "&rid=" + b.currentRuleId + "&did=" + b.currentDeploymentId);
				a.timestamp = (new Date).getTime();
				this.reportedAlerts.push(a)
			};
			b.imageRequest = function(a) {
				var c = new Image(0, 0);
				c.src = a;
				return c
			};
			b.insertScript = function(a, c, d, h) {
				var p = document.getElementsByTagName("script"),
					g;
				h = void 0 !== h ? h : !0;
				if(void 0 !== c ? c : 1)
					for(g = 0; g < p.length; g++)
						if(p[g].src === a && p[g].readyState && /loaded|complete/.test(p[g].readyState)) return;
				if(d) {
					d = 1 == d && "object" == typeof b.scDataObj ? b.scDataObj : d;
					e.rand = Math.random() * ("1E" + (10 * Math.random()).toFixed(0));
					c = window.location.href;
					"object" === typeof d && d.PageID && (c = d.PageID, delete d.PageID);
					if("object" === typeof d)
						for(g in d) {
							g = ~c.indexOf("#") ? c.slice(c.indexOf("#"), c.length) : "";
							c = c.slice(0, g.length ? c.length - g.length : c.length);
							c += ~c.indexOf("?") ? "&" : "?";
							for(k in d) c += k + "=" + d[k] + "&";
							c = c.slice(0, -1) + g;
							break
						}
					a += "?";
					h && (a += "r=" + e.rand + "&");
					a += "namespace=" + ensightenOptions.ns + "&";
					a += "staticJsPath=" + ensightenOptions.staticJavascriptPath + "&";
					a += "publishedOn=" + ensightenOptions.generatedOn + "&";
					a += "ClientID=" + encodeURIComponent(e.options.clientId) + "&PageID=" + encodeURIComponent(c)
				}(function(a, c, b) {
					var d = c.head || c.getElementsByTagName("head");
					setTimeout(function() {
						if("item" in d) {
							if(!d[0]) {
								setTimeout(arguments.callee, 25);
								return
							}
							d = d[0]
						}
						var a = c.createElement("script");
						a.src = b;
						a.onload = a.onerror = function() {
							this.addEventListener && (this.readyState = "loaded")
						};
						d.insertBefore(a, d.firstChild)
					}, 0)
				})(window, document, a)
			};
			b.loadScriptCallback = function(a, c, b) {
				var d = document.getElementsByTagName("script"),
					e;
				b = d[0];
				for(e = 0; e < d.length; e++)
					if(d[e].src === a && d[e].readyState && /loaded|complete/.test(d[e].readyState)) try {
						c()
					} catch(g) {
						window[ensightenOptions.ns].reportException(g)
					} finally {
						return
					}
					d = document.createElement("script");
				d.type = "text/javascript";
				d.async = !0;
				d.src = a;
				d.onerror = function() {
					this.addEventListener && (this.readyState = "loaded")
				};
				d.onload = d.onreadystatechange = function() {
					if(!this.readyState || "complete" === this.readyState || "loaded" === this.readyState) {
						this.onload = this.onreadystatechange = null;
						this.addEventListener && (this.readyState = "loaded");
						try {
							c.call(this)
						} catch(g) {
							window[ensightenOptions.ns].reportException(g)
						}
					}
				};
				b.parentNode.insertBefore(d, b)
			};
			b.insertPageFiles = function(a) {
				var b = 0,
					d = 0,
					e = function() {
						d == a.length - 1 && window[ensightenOptions.ns].callOnPageSpecificCompletion();
						d++
					};
				for(b = 0; b < a.length; ++b) window[ensightenOptions.ns].loadScriptCallback(a[b], e)
			};
			b.unobtrusiveAddEvent = function(a, b, d) {
				try {
					var c = a[b] ? a[b] : function() {};
					a[b] = function() {
						d.apply(this, arguments);
						return c.apply(this, arguments)
					}
				} catch(p) {
					window[ensightenOptions.ns].reportException(p)
				}
			};
			b.anonymous = function(a, c) {
				return function() {
					try {
						b.currentRuleId = c ? c : "anonymous", a()
					} catch(d) {
						window[ensightenOptions.ns].reportException(d)
					}
				}
			};
			b.setCurrentRuleId = function(a) {
				b.currentRuleId = a
			};
			b.setCurrentDeploymentId = function(a) {
				b.currentDeploymentId = a
			};
			b.bindImmediate = function(a, c, d) {
				if("function" === typeof a) a = new b.Rule({
					id: c || -1,
					deploymentId: d || -1,
					dependencies: [],
					code: a
				});
				else if("object" !== typeof a) return !1;
				b.registerRule(a)
			};
			b.bindDOMParsed = function(a, c, d) {
				if("function" === typeof a) a = new b.Rule({
					id: c || -1,
					deploymentId: d || -1,
					dependencies: [function() {
						return window[ensightenOptions.ns].executionState.DOMParsed
					}],
					code: a
				});
				else if("object" !== typeof a) return !1;
				b.registerRule(a)
			};
			b.bindDOMLoaded = function(a, c, d) {
				if("function" === typeof a) a = new b.Rule({
					id: c || -1,
					deploymentId: d || -1,
					dependencies: [function() {
						return window[ensightenOptions.ns].executionState.DOMLoaded
					}],
					code: a
				});
				else if("object" !== typeof a) return !1;
				b.registerRule(a)
			};
			b.bindPageSpecificCompletion = function(a, c, d) {
				if("function" === typeof a) a = new b.Rule({
					id: c || -1,
					deploymentId: d || -1,
					dependencies: [function() {
						return window[ensightenOptions.ns].executionState.conditionalRules
					}],
					code: a
				});
				else if("object" !== typeof a) return !1;
				b.registerRule(a)
			};
			b.bindOnGetServerComponent = function(a, c, d) {
				if("function" === typeof a) a = new b.Rule({
					id: c || -1,
					deploymentId: d || -1,
					dependencies: [function() {
						return window[ensightenOptions.ns].executionState.readyForServerComponent
					}],
					code: a
				});
				else if("object" !== typeof a) return !1;
				b.registerRule(a)
			};
			b.bindDataDefinitionComplete = function(a, c, d) {
				if("function" === typeof a) a = new b.Rule({
					id: c || -1,
					deploymentId: d || -1,
					dependencies: [function() {
						return window[ensightenOptions.ns].executionState.dataDefinitionComplete
					}],
					code: a
				});
				else if("object" !== typeof a) return !1;
				b.registerRule(a)
			};
			b.checkHasRun = function(a) {
				if(0 === a.length) return !0;
				for(var c, d = 0; d < a.length; ++d)
					if(c = b.getRule(parseInt(a[d], 10)), !c || !c.executionData.hasRun) return !1;
				return !0
			};
			b.bindDependencyImmediate = function(a, c, d, h, f) {
				var g = [];
				if(!e.checkForInvalidDependencies(c, h, d, f)) {
					g.push(function() {
						return window[ensightenOptions.ns].checkHasRun(d)
					});
					if("function" === typeof a) a = new b.Rule({
						id: c || -1,
						deploymentId: h || -1,
						dependencies: g,
						code: a
					});
					else if("object" !== typeof a) return !1;
					b.registerRule(a)
				}
			};
			b.bindDependencyDOMLoaded = function(a, c, d, h, f) {
				var g = [];
				if(!e.checkForInvalidDependencies(c, h, d, f)) {
					g.push(function() {
						return window[ensightenOptions.ns].executionState.DOMLoaded
					});
					g.push(function() {
						return window[ensightenOptions.ns].checkHasRun(d)
					});
					if("function" === typeof a) a = new b.Rule({
						id: c || -1,
						deploymentId: h || -1,
						dependencies: g,
						code: a
					});
					else if("object" !== typeof a) return !1;
					b.registerRule(a)
				}
			};
			b.bindDependencyDOMParsed = function(a, c, d, h, f) {
				var g = [];
				if(!e.checkForInvalidDependencies(c, h, d, f)) {
					g.push(function() {
						return window[ensightenOptions.ns].executionState.DOMParsed
					});
					g.push(function() {
						return window[ensightenOptions.ns].checkHasRun(d)
					});
					if("function" === typeof a) a = new b.Rule({
						id: c || -1,
						deploymentId: h || -1,
						dependencies: g,
						code: a
					});
					else if("object" !== typeof a) return !1;
					b.registerRule(a)
				}
			};
			b.bindDependencyPageSpecificCompletion = function(a, c, d, h, f) {
				var g = [];
				if(!e.checkForInvalidDependencies(c, h, d, f)) {
					g.push(function() {
						return window[ensightenOptions.ns].executionState.conditionalRules
					});
					g.push(function() {
						return window[ensightenOptions.ns].checkHasRun(d)
					});
					if("function" === typeof a) a = new b.Rule({
						id: c || -1,
						deploymentId: h || -1,
						dependencies: g,
						code: a
					});
					else if("object" !== typeof a) return !1;
					b.registerRule(a)
				}
			};
			b.bindDependencyOnGetServerComponent = function(a, c, d, h, f) {
				var g = [];
				if(!e.checkForInvalidDependencies(c, h, d, f)) {
					g.push(function() {
						return window[ensightenOptions.ns].executionState.readyForServerComponent
					});
					g.push(function() {
						return window[ensightenOptions.ns].checkHasRun(d)
					});
					if("function" === typeof a) a = new b.Rule({
						id: c || -1,
						deploymentId: h || -1,
						dependencies: g,
						code: a
					});
					else if("object" !== typeof a) return !1;
					b.registerRule(a)
				}
			};
			b.bindDependencyPageSpecificCompletion = function(a, c, d, f, p) {
				var g = [];
				if(!e.checkForInvalidDependencies(c, f, d, p)) {
					g.push(function() {
						return window[ensightenOptions.ns].executionState.dataDefinitionComplete
					});
					g.push(function() {
						return window[ensightenOptions.ns].checkHasRun(d)
					});
					if("function" === typeof a) a = new b.Rule({
						id: c || -1,
						deploymentId: f || -1,
						dependencies: g,
						code: a
					});
					else if("object" !== typeof a) return !1;
					b.registerRule(a)
				}
			};
			b.dataDefintionIds = [];
			b.dataDefinitions = [];
			b.pageSpecificDataDefinitionsSet = !1;
			b.setPageSpecificDataDefinitionIds = function(a) {
				for(var c = a ? a.length : 0, d = 0; d < c; d++) {
					var e = a[d];
					if(Array.prototype.indexOf) - 1 == b.dataDefinitionIds.indexOf(e) && b.dataDefinitionIds.push(e);
					else {
						for(var f = !1, g = b.dataDefinitionIds.length, l = 0; l < g; l++)
							if(b.dataDefinitionIds[l] === e) {
								f = !0;
								break
							}
						f || b.dataDefinitionIds.push(e)
					}
				}
				b.pageSpecificDataDefinitionsSet = !0;
				n()
			};
			b.DataDefinition = function(a, b) {
				this.id = a;
				this.registrationFn = b;
				this.endRegistrationTime = this.startRegistrationTime = null;
				this.startRegistration = function() {
					this.startRegistrationTime = new Date
				};
				this.endRegistration = function() {
					this.endRegistrationTime = new Date
				}
			};
			b.registerDataDefinition = function(a, c) {
				var d = b.dataDefinitions[c];
				d || (d = new b.DataDefinition(c, a), b.dataDefinitions[c] = d);
				d.startRegistrationTime || (d.startRegistration(), d.registrationFn(), d.endRegistration());
				b.pageSpecificDataDefinitionsSet && n()
			};
			b.callOnDataDefintionComplete = function() {
				b.executionState.dataDefinitionComplete = !0;
				b.testAll()
			};
			b.callOnDOMParsed = function() {
				window[ensightenOptions.ns].executionState.DOMParsed = !0;
				window[ensightenOptions.ns].testAll()
			};
			b.callOnDOMLoaded = function() {
				window[ensightenOptions.ns].executionState.DOMParsed = !0;
				window[ensightenOptions.ns].executionState.DOMLoaded = !0;
				window[ensightenOptions.ns].testAll()
			};
			b.callOnPageSpecificCompletion = function() {
				for(var a = document.getElementsByTagName("script"), b = 0, d = a.length; b < d; b++)
					if(a[b].src && a[b].src.match(/\.ensighten\.com\/(.+?)\/code\/.*/i) && "loaded" != a[b].readyState && "complete" != a[b].readyState) {
						setTimeout(window[ensightenOptions.ns].callOnPageSpecificCompletion, 50);
						return
					}
				setTimeout(function() {
					window[ensightenOptions.ns].executionState.conditionalRules = !0;
					window[ensightenOptions.ns].testAll()
				}, 1)
			};
			b.callOnGetServerComponent = function() {
				window[ensightenOptions.ns].executionState.readyForServerComponent = !0;
				window[ensightenOptions.ns].testAll()
			};
			b.hasDOMParsed = function() {
				return window[ensightenOptions.ns].executionState.DOMParsed
			};
			b.hasDOMLoaded = function() {
				return window[ensightenOptions.ns].executionState.DOMLoaded
			};
			b.hasPageSpecificCompletion = function() {
				return window[ensightenOptions.ns].executionState.conditionalRules
			};
			var r = function() {
				var a = [],
					b = !1,
					d = !1;
				return {
					add: function(c) {
						b && !d ? c() : "function" == typeof c && (a[a.length] = c)
					},
					exec: function() {
						d = !0;
						do {
							var c = a;
							a = [];
							b = !0;
							for(var e = 0; e < c.length; e++) try {
								c[e].call(window)
							} catch(g) {
								window[ensightenOptions.ns].reportException(g)
							}
						} while (0 < a.length);
						d = !1
					},
					haveRun: function() {
						return b
					}
				}
			};
			b.new_fArray = function() {
				return r()
			};
			e.timer = null;
			(function() {
				function a(a, b) {
					return function() {
						a.apply(b, arguments)
					}
				}
				window.console || (window.console = {});
				var b = window.console;
				if(!b.log)
					if(window.log4javascript) {
						var d = log4javascript.getDefaultLogger();
						b.log = a(d.info, d);
						b.debug = a(d.debug, d);
						b.info = a(d.info, d);
						b.warn = a(d.warn, d);
						b.error = a(d.error, d)
					} else b.log = function() {};
				b.debug || (b.debug = b.log);
				b.info || (b.info = b.log);
				b.warn || (b.warn = b.log);
				b.error || (b.error = b.log)
			})();
			document.addEventListener ? (-1 < navigator.userAgent.indexOf("AppleWebKit/") ? e.timer = window.setInterval(function() {
				/loaded|interactive|complete/.test(document.readyState) && (clearInterval(e.timer), b.callOnDOMParsed())
			}, 50) : document.addEventListener("DOMContentLoaded", b.callOnDOMParsed, !1), window.addEventListener("load", b.callOnDOMLoaded, !1)) : (setTimeout(function() {
				var a = window.document;
				(function() {
					try {
						if(!document.body) throw "continue";
						a.documentElement.doScroll("left")
					} catch(c) {
						setTimeout(arguments.callee, 15);
						return
					}
					window[ensightenOptions.ns].callOnDOMParsed()
				})()
			}, 1), window.attachEvent("onload", function() {
				window[ensightenOptions.ns].callOnDOMLoaded()
			}));
			document.readyState && "complete" === document.readyState && (b.executionState.DOMParsed = !0, b.executionState.DOMLoaded = !0);
			"true" === e.options.enableTagAuditBeacon && b.sampleBeacon() && window.setTimeout(function() {
				if(window[ensightenOptions.ns] && !window[ensightenOptions.ns].mobilePlatform) try {
					for(var a = [], c, d, h, l, g = 0; g < e.ruleList.length; ++g) d = e.ruleList[g], h = d.executionData.hasRun ? "1" : "0", l = d.deploymentId.toString() + "|" + d.id.toString() + "|" + h, a.push(l);
					c = "[" + a.join(";") + "]";
					var m = window.location.protocol + "//" + e.nexus + "/" + encodeURIComponent(f.client) + "/" + encodeURIComponent(f.publishPath) + "/TagAuditBeacon.rnc?cid=" + encodeURIComponent(f.clientId) + "&data=" + c + "&idx=0&r=" + e.rand;
					b.imageRequest(m)
				} catch(q) {
					b.currentRuleId = -1, b.currentDeploymentId = -1, a = new e.BeaconException(q), window[ensightenOptions.ns].reportException(a)
				}
			}, 3E3);
			window.setInterval(b.testAll, e.options.interval);
			return b
		}(ensightenOptions);
		"true" === ensightenOptions.enablePagePerfBeacon && window[ensightenOptions.ns] && window[ensightenOptions.ns].sampleBeacon() && window[ensightenOptions.ns].bindDOMParsed(function() {
			if(!window[ensightenOptions.ns].mobilePlatform) {
				var f = window.performance;
				if(f) {
					f = f.timing || {};
					var l = f.navigationStart || 0,
						m = {
							connectEnd: "ce",
							connectStart: "cs",
							domComplete: "dc",
							domContentLoadedEventEnd: "dclee",
							domContentLoadedEventStart: "dcles",
							domInteractive: "di",
							domLoading: "dl",
							domainLookupEnd: "dle",
							domainLookupStart: "dls",
							fetchStart: "fs",
							loadEventEnd: "lee",
							loadEventStart: "les",
							redirectEnd: "rede",
							redirectStart: "reds",
							requestStart: "reqs",
							responseStart: "resps",
							responseEnd: "respe",
							secureConnectionStart: "scs",
							unloadEventStart: "ues",
							unloadEventEnd: "uee"
						};
					var n = "&ns=" + encodeURIComponent(f.navigationStart);
					for(var e in m)
						if(void 0 !== f[e]) {
							var b = f[e] - l;
							n += "&" + m[e] + "=" + (0 < b ? encodeURIComponent(b) : 0)
						} else n += "&" + m[e] + "=-1";
					window[ensightenOptions.ns].timing = n;
					e = ensightenOptions.nexus || "nexus.ensighten.com";
					f = ensightenOptions.staticJavascriptPath || "";
					n = f.indexOf("/", 0);
					l = f.indexOf("/code/");
					f = f.substring(n, l) + "/perf.rnc";
					f += "?cid=" + encodeURIComponent(ensightenOptions.clientId) + window[ensightenOptions.ns].timing;
					window[ensightenOptions.ns].imageRequest("//" + e + f)
				}
			}
		});
		window[ensightenOptions.ns].ensEvent || (window[ensightenOptions.ns].ensEvent = function(p, u) {
			var k = {
				queue: {},
				pollQueue: {},
				pushTrigger: function(b, c) {
					if("[object Array]" === Object.prototype.toString.call(b)) {
						for(var g = 0; g < b.length; g++) k.pushTrigger(b[g], c);
						return !0
					}
					if("string" != typeof b) return !1;
					this.queue[b] = this.queue[b] || {
						fn: []
					};
					"function" == typeof c && this.queue[b].fn.push(c);
					return !0
				},
				callTrigger: function(b, c, g) {
					if("string" != typeof b) return !1;
					b = k.queue[b];
					if("object" == typeof b && b.fn && b.fn.length && (0 != b.fireOnFirstSet && c == u || c != u && 0 != b.fireOnUpdate))
						for(c = 0; c < b.fn.length; c++) try {
							b.fn[c].call(this)
						} catch(n) {
							p[ensightenOptions.ns].reportException(n)
						}
				},
				setPollOptions: function(b, c, g) {
					this.queue[b] = this.queue[b] || {
						fn: []
					};
					this.queue[b].fireOnFirstSet = c;
					this.queue[b].fireOnUpdate = g
				},
				callPoll: function(b, c, g, p, r) {
					if("string" == typeof b && c && c.length && !(1 > c.length)) {
						for(var n = 0; n < c.length; n++) k.setPollOptions(c[n], p, r);
						k.pushWatch(b, c, g)
					}
				},
				pushWatch: function(b, c, g) {
					this.pollQueue[b] || (this.pollQueue[b] = {
						previousVal: u,
						eventArr: [],
						valueFn: g
					});
					this.pollQueue[b].eventArr = this.pollQueue[b].eventArr.concat(c);
					this.pollQueue[b].valueFn = g
				},
				globalWatch: function() {
					setInterval(function() {
						for(var b in k.pollQueue) {
							var c = k.pollQueue[b],
								g = c.valueFn(b);
							if(c.previousVal !== g && null !== g && "" !== g) {
								for(var n = 0; n < c.eventArr.length; n++) k.callTrigger.call(p, c.eventArr[n], c.previousVal, g);
								k.pollQueue[b].previousVal = g
							}
						}
					}, 500)
				}
			};
			k.globalWatch();
			return {
				add: function(b, c) {
					return k.pushTrigger(b, c)
				},
				get: function(b) {
					return k.queue[b]
				},
				trigger: function(b, c) {
					return k.callTrigger.call(c || p, b)
				},
				poll: function(b, c, g, n, r) {
					r = r || p[ensightenOptions.ns].data.resolve;
					return k.callPoll(b, c, r, g, n)
				}
			}
		}(window), function(p, u, k) {
			u[p] = k()
		}("qwery", window[ensightenOptions.ns], function() {
			function p() {
				this.c = {}
			}

			function u(a) {
				return H.g(a) || H.s(a, "(^|\\s+)" + a + "(\\s+|$)", 1)
			}

			function k(a, d) {
				for(var e = 0, f = a.length; e < f; e++) d(a[e])
			}

			function b(a) {
				for(var d = [], e = 0, f = a.length; e < f; ++e) l(a[e]) ? d = d.concat(a[e]) : d[d.length] = a[e];
				return d
			}

			function c(a) {
				for(var d = 0, e = a.length, f = []; d < e; d++) f[d] = a[d];
				return f
			}

			function g(a) {
				for(;
					(a = a.previousSibling) && 1 != a.nodeType;);
				return a
			}

			function n(a, d, e, f, b, h, l, c, g, k, y) {
				var I, B, m;
				if(1 !== this.nodeType || d && "*" !== d && this.tagName && this.tagName.toLowerCase() !== d || e && (I = e.match(Q)) && I[1] !== this.id) return !1;
				if(e && (m = e.match(R)))
					for(a = m.length; a--;)
						if(!u(m[a].slice(1)).test(this.className)) return !1;
				if(g && v.pseudos[g] && !v.pseudos[g](this, y)) return !1;
				if(f && !l)
					for(B in g = this.attributes, g)
						if(Object.prototype.hasOwnProperty.call(g, B) && (g[B].name || B) == b) return this;
				return f && !x(h, S(this, b) || "", l) ? !1 : this
			}

			function r(a) {
				return J.g(a) || J.s(a, a.replace(T, "\\$1"))
			}

			function x(a, d, e) {
				switch(a) {
					case "=":
						return d == e;
					case "^=":
						return d.match(w.g("^=" + e) || w.s("^=" + e, "^" + r(e), 1));
					case "$=":
						return d.match(w.g("$=" + e) || w.s("$=" + e, r(e) + "$", 1));
					case "*=":
						return d.match(w.g(e) || w.s(e, r(e), 1));
					case "~=":
						return d.match(w.g("~=" + e) || w.s("~=" + e, "(?:^|\\s+)" + r(e) + "(?:\\s+|$)", 1));
					case "|=":
						return d.match(w.g("|=" + e) || w.s("|=" + e, "^" + r(e) + "(-|$)", 1))
				}
				return 0
			}

			function q(a, d) {
				var e = [],
					f = [],
					b, h, l = d,
					c = C.g(a) || C.s(a, a.split(K)),
					g = a.match(L);
				if(!c.length) return e;
				var m = (c = c.slice(0)).pop();
				c.length && (b = c[c.length - 1].match(M)) && (l = N(d, b[1]));
				if(!l) return e;
				var y = m.match(E);
				var v = l !== d && 9 !== l.nodeType && g && /^[+~]$/.test(g[g.length - 1]) ? function(a) {
					for(; l = l.nextSibling;) 1 == l.nodeType && (y[1] ? y[1] == l.tagName.toLowerCase() : 1) && (a[a.length] = l);
					return a
				}([]) : l.getElementsByTagName(y[1] || "*");
				b = 0;
				for(m = v.length; b < m; b++)
					if(h = n.apply(v[b], y)) e[e.length] = h;
				if(!c.length) return e;
				k(e, function(a) {
					t(a, c, g) && (f[f.length] = a)
				});
				return f
			}

			function t(a, d, e, b) {
				function l(a, b, c) {
					for(; c = U[e[b]](c, a);)
						if(f(c) && n.apply(c, d[b].match(E)))
							if(b) {
								if(h = l(c, b - 1, c)) return h
							} else return c
				}
				var h;
				return(h = l(a, d.length - 1, a)) && (!b || z(h, b))
			}

			function f(a, d) {
				return a && "object" === typeof a && (d = a.nodeType) && (1 == d || 9 == d)
			}

			function h(a) {
				var d = [],
					e;
				var f = 0;
				a: for(; f < a.length; ++f) {
					for(e = 0; e < d.length; ++e)
						if(d[e] == a[f]) continue a;
					d[d.length] = a[f]
				}
				return d
			}

			function l(a) {
				return "object" === typeof a && isFinite(a.length)
			}

			function N(a, d, e) {
				return 9 === a.nodeType ? a.getElementById(d) : a.ownerDocument && ((e = a.ownerDocument.getElementById(d)) && z(e, a) && e || !z(a, a.ownerDocument) && F('[id="' + d + '"]', a)[0])
			}

			function v(a, d) {
				var e, h;
				var g = d ? "string" == typeof d ? v(d)[0] : !d.nodeType && l(d) ? d[0] : d : m;
				if(!g || !a) return [];
				if(a === window || f(a)) return !d || a !== window && f(g) && z(a, g) ? [a] : [];
				if(a && l(a)) return b(a);
				if(e = a.match(V)) {
					if(e[1]) return(h = N(g, e[1])) ? [h] : [];
					if(e[2]) return c(g.getElementsByTagName(e[2]));
					if(W && e[3]) return c(g.getElementsByClassName(e[3]))
				}
				return F(a, g)
			}

			function y(a, d) {
				return function(e) {
					var f, b;
					O.test(e) ? 9 !== a.nodeType && ((b = f = a.getAttribute("id")) || a.setAttribute("id", b = "__qwerymeupscotty"), d(a.parentNode || a, '[id="' + b + '"]' + e, !0), f || a.removeAttribute("id")) : e.length && d(a, e, !1)
				}
			}
			var m = document,
				D = m.documentElement,
				F, Q = /#([\w\-]+)/,
				R = /\.[\w\-]+/g,
				M = /^#([\w\-]+)$/,
				X = /^([\w]+)?\.([\w\-]+)$/,
				O = /(^|,)\s*[>~+]/,
				Y = /^\s+|\s*([,\s\+~>]|$)\s*/g,
				A = /[\s>\+~]/,
				P = /(?![\s\w\-\/\?&=:\.\(\)!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
				T = /([.*+?\^=!:${}()|\[\]\/\\])/g,
				V = new RegExp(M.source + "|" + /^([\w\-]+)$/.source + "|" + /^\.([\w\-]+)$/.source),
				L = new RegExp("(" + A.source + ")" + P.source, "g"),
				K = new RegExp(A.source + P.source),
				E = new RegExp(/^(\*|[a-z0-9]+)?(?:([\.#]+[\w\-\.#]+)?)/.source + "(" + /\[([\w\-]+)(?:([\|\^\$\*~]?=)['"]?([ \w\-\/\?&=:\.\(\)!,@#%<>\{\}\$\*\^]+)["']?)?\]/.source + ")?(" + /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/.source + ")?"),
				U = {
					" ": function(a) {
						return a && a !== D && a.parentNode
					},
					">": function(a, d) {
						return a && a.parentNode == d.parentNode && a.parentNode
					},
					"~": function(a) {
						return a && a.previousSibling
					},
					"+": function(a, d, e, f) {
						return a ? (e = g(a)) && (f = g(d)) && e == f && e : !1
					}
				};
			p.prototype = {
				g: function(a) {
					return this.c[a] || void 0
				},
				s: function(a, d, e) {
					d = e ? new RegExp(d) : d;
					return this.c[a] = d
				}
			};
			var H = new p,
				J = new p,
				w = new p,
				C = new p,
				z = "compareDocumentPosition" in D ? function(a, d) {
					return 16 == (d.compareDocumentPosition(a) & 16)
				} : "contains" in D ? function(a, d) {
					d = 9 === d.nodeType || d == window ? D : d;
					return d !== a && d.contains(a)
				} : function(a, d) {
					for(; a = a.parentNode;)
						if(a === d) return 1;
					return 0
				},
				S = function() {
					var a = m.createElement("p");
					return(a.innerHTML = '<a href="#x">x</a>', "#x" != a.firstChild.getAttribute("href")) ? function(a, e) {
						return "class" === e ? a.className : "href" === e || "src" === e ? a.getAttribute(e, 2) : a.getAttribute(e)
					} : function(a, e) {
						return a.getAttribute(e)
					}
				}(),
				W = !!m.getElementsByClassName,
				Z = m.querySelector && m.querySelectorAll,
				aa = function(a, d) {
					var e = [],
						f, b;
					try {
						if(9 === d.nodeType || !O.test(a)) return c(d.querySelectorAll(a));
						k(f = a.split(","), y(d, function(a, d) {
							b = a.querySelectorAll(d);
							1 == b.length ? e[e.length] = b.item(0) : b.length && (e = e.concat(c(b)))
						}));
						return 1 < f.length && 1 < e.length ? h(e) : e
					} catch(ba) {}
					return G(a, d)
				},
				G = function(a, d) {
					var e = [],
						f, b;
					a = a.replace(Y, "$1");
					if(f = a.match(X)) {
						var l = u(f[2]);
						f = d.getElementsByTagName(f[1] || "*");
						var c = 0;
						for(b = f.length; c < b; c++) l.test(f[c].className) && (e[e.length] = f[c]);
						return e
					}
					k(f = a.split(","), y(d, function(a, f, h) {
						l = q(f, a);
						c = 0;
						for(b = l.length; c < b; c++)
							if(9 === a.nodeType || h || z(l[c], d)) e[e.length] = l[c]
					}));
					return 1 < f.length && 1 < e.length ? h(e) : e
				};
			A = function(a) {
				"undefined" !== typeof a.useNativeQSA && (F = a.useNativeQSA ? Z ? aa : G : G)
			};
			A({
				useNativeQSA: !0
			});
			v.configure = A;
			v.uniq = h;
			v.is = function(a, d, e) {
				if(f(d)) return a == d;
				if(l(d)) return !!~b(d).indexOf(a);
				for(var c = d.split(","), h; d = c.pop();)
					if(h = C.g(d) || C.s(d, d.split(K)), d = d.match(L), h = h.slice(0), n.apply(a, h.pop().match(E)) && (!h.length || t(a, h, d, e))) return !0;
				return !1
			};
			v.pseudos = {};
			return v
		}), function() {
			function p(f, b, c) {
				n || (n = window[ensightenOptions.ns].qwery);
				var h = n;
				if((h = h.call(c, b, c)) && 0 < h.length) {
					if("_root" == b) f = c;
					else if(f === c) f = void 0;
					else {
						b: {
							for(var l = h.length, g = 0; g < l; g++)
								if(f === h[g]) {
									h = !0;
									break b
								}
							h = !1
						}
						h || (f.parentNode ? (r++, f = p(f.parentNode, b, c)) : f = void 0)
					}
					return f
				}
				return !1
			}

			function u(f, b, c, g) {
				q[f.id] || (q[f.id] = {});
				q[f.id][b] || (q[f.id][b] = {});
				q[f.id][b][c] || (q[f.id][b][c] = []);
				q[f.id][b][c].push(g)
			}

			function k(f, b, c, g) {
				if(g || c)
					if(g)
						for(var h = 0; h < q[f.id][b][c].length; h++) {
							if(q[f.id][b][c][h] === g) {
								q[f.id][b][c].pop(h, 1);
								break
							}
						} else delete q[f.id][b][c];
					else q[f.id][b] = {}
			}

			function b(b, c, l) {
				if(q[b][l]) {
					var f = c.target || c.srcElement,
						h, k, m = {},
						n = k = 0;
					r = 0;
					for(h in q[b][l]) q[b][l].hasOwnProperty(h) && (k = p(f, h, t[b].element)) && g.matchesEvent(l, t[b].element, k, "_root" == h, c) && (r++, q[b][l][h].match = k, m[r] = q[b][l][h]);
					c.stopPropagation = function() {
						c.cancelBubble = !0
					};
					for(k = 0; k <= r; k++)
						if(m[k])
							for(n = 0; n < m[k].length; n++) {
								if(!1 === m[k][n].call(m[k].match, c)) {
									g.cancel(c);
									return
								}
								if(c.cancelBubble) return
							}
				}
			}

			function c(c, h, l, n) {
				function f(c) {
					return function(f) {
						b(p, f, c)
					}
				}
				c instanceof Array || (c = [c]);
				l || "function" != typeof h || (l = h, h = "_root");
				var p = this.id,
					m;
				for(m = 0; m < c.length; m++) q[p] && q[p][c[m]] || g.addEvent(this, c[m], f(c[m])), n ? k(this, c[m], h, l) : u(this, c[m], h, l);
				return this
			}

			function g(b, c, l, k) {
				if("string" == typeof b && "function" == typeof c || "string" == typeof c) g(document).on(b, c, l, k || !1);
				if(!(this instanceof g)) {
					for(var f in t)
						if(t[f].element === b) return t[f];
					x++;
					t[x] = new g(b, x);
					t[x]._on = t[x].on;
					t[x].on = function(b, c, f, g) {
						var h = "function" == typeof c ? c : f;
						if("function" == typeof c ? f : g) b = [b], "string" == typeof c && b.push(c), b.push(function(b) {
							return function(c) {
								c.defaultPrevented || window[ensightenOptions.ns].Delegate.load(this);
								if(this.nodeName && "a" != this.nodeName.toLowerCase()) return b.call(this);
								"undefined" != typeof c.preventDefault ? c.preventDefault() : c.returnValue = !1;
								b.call(this)
							}
						}(h)), this._on.apply(this, b);
						else return this._on.call(this, b, c, f)
					};
					return t[x]
				}
				this.element = b;
				this.id = c
			}
			var n, r = 0,
				x = 0,
				q = {},
				t = {};
			g.prototype.on = function(b, g, l) {
				return c.call(this, b, g, l)
			};
			g.prototype.off = function(b, g, l) {
				return c.call(this, b, g, l, !0)
			};
			g.cancel = function(b) {
				b.preventDefault();
				b.stopPropagation()
			};
			g.addEvent = function(b, c, g) {
				b.element.addEventListener(c, g, "blur" == c || "focus" == c)
			};
			g.matchesEvent = function() {
				return !0
			};
			g.load = function(b) {
				setTimeout(function(b, c) {
					return function() {
						if(b.nodeName && "a" == b.nodeName.toLowerCase()) {
							if(c && /^javascript\s*:/.test(c)) return(new Function(unescape(c))).call(window);
							c && (window.location.href = c)
						}
					}
				}(b, b.href || ""), 750)
			};
			window[ensightenOptions.ns].Delegate = g
		}(), function(p) {
			var u = p.addEvent;
			p.addEvent = function(k, b, c) {
				if(k.element.addEventListener) return u(k, b, c);
				"focus" == b && (b = "focusin");
				"blur" == b && (b = "focusout");
				k.element.attachEvent("on" + b, c)
			};
			p.cancel = function(k) {
				k.preventDefault && k.preventDefault();
				k.stopPropagation && k.stopPropagation();
				k.returnValue = !1;
				k.cancelBubble = !0
			}
		}(window[ensightenOptions.ns].Delegate), window[ensightenOptions.ns].on = window[ensightenOptions.ns].Delegate);
		Bootstrapper.dataDefinitionIds = [];
		Bootstrapper.bindDOMLoaded(function() {
			var Bootstrapper = window["Bootstrapper"];
			var ensightenOptions = Bootstrapper.ensightenOptions;
			var scriptSrc = "https://nebula-cdn.kampyle.com/wu/356861/onsite/embed.js";
			window.formId = 25290;
			Bootstrapper.insertScript(scriptSrc);
			window.showSurvey = function(string, position) {
				if(typeof KAMPYLE_ONSITE_SDK !== "undefined") {
					KAMPYLE_ONSITE_SDK.loadForm(formId);
					KAMPYLE_ONSITE_SDK.showForm(formId)
				} else {
					var scriptTag = document.createElement("script");
					scriptTag.src = scriptSrc;
					document.body.appendChild(scriptTag)
				}
			};
			Bootstrapper.ajaxListener.create(function() {
				return document.querySelector(".footer-top ul") || []
			}, function(el) {
				el.innerHTML += '\x3cli\x3e\x3ca onclick\x3d"showSurvey(formId);" style\x3d"cursor:pointer;"\x3e\x3cimg src\x3d"https://www.citizensbank.com/assets/CB_media/images/feedback.png" alt\x3d"Give Feedback" border\x3d"0" style\x3d"cursor:pointer;border:0px;height:40px;width:40px;padding-right:4px;"\x3eFeedback\x3c/a\x3e\x3c/li\x3e'
			})
		}, 3156598, 610159);
		Bootstrapper.bindImmediate(function() {
			var Bootstrapper = window["Bootstrapper"];
			var ensightenOptions = Bootstrapper.ensightenOptions;
			Bootstrapper.AF = function() {
				var g = {
					data: {},
					_dataConfig: {},
					logHistory: [],
					debug: !0,
					dataObj: function(a) {
						var b = a ? [] : "";
						b.finalized = !1;
						b.type = a;
						return b
					},
					validateInput: function(a) {
						if("object" !== typeof a || "number" !== typeof a.length) return this.log("Error, input must be type Array");
						/set|push|call|eval|finalize|join/.test(a[0]) || this.log("Error, '" + a[0] + "' is not a valid command");
						return !0
					},
					storeData: function(a, b, d, c, e) {
						e = this.getConfig(b, d, e);
						b = this.data[b][d];
						if(e.finalized) return this.log("Error, cannot modify finalized key '" + d + "'"), b;
						if("undefined" !== typeof b && e.multi) return "join" == a ? b = b.concat(c) : b.push(c), b;
						e.multi ? (d = [c], "join" == a && (d = [].concat(c))) : d = c;
						return d
					},
					getConfig: function(a, b, d, c) {
						a = this._dataConfig[a] || {};
						c = {};
						return "undefined" == typeof a[b] ? (c.multi = d, c.finalized = !1, c) : a[b]
					},
					store: function(a, b, d, c, e) {
						this.data[b] = this.data[b] || {};
						this.data[b][d] = this.storeData(a, b, d, c, e);
						return this.data[b][d]
					},
					parseCode: function(a) {
						return((a || function() {}) + "").replace(/^function\s*\(\s*\)\s*\{|\}$/g, "")
					},
					callFn: function(a, b, d, c) {
						if("function" == typeof a)
							if(d) "undefined" != typeof window.execScript ? window.execScript(this.parseCode(a)) : eval.call(window, this.parseCode(a));
							else return a.apply(window, c);
						else if("function" == typeof this.data[a][b])
							if(d) "undefined" != typeof window.execScript ? window.execScript(this.parseCode(this.data[a][b])) : eval.call(window, this.parseCode(this.data[a][b]));
							else return c = "object" == typeof c && "number" == typeof c.length ? c : [], this.data[a][b].apply(this.data[a], c);
						else return this.log("Error, '" + b + "' is not a function")
					},
					parse: function(a) {
						if(this.validateInput(a)) {
							a = Array.prototype.slice.call(a, 0);
							var b = a.shift(),
								d = a.shift(),
								c = a.shift(),
								e = a[0];
							if(/set|push|join/.test(b)) return this.store(b, d, c, e, /push|join/.test(b));
							if(/call|eval/.test(b)) return this.callFn(d, c, "eval" == b, a);
							if("finalize" == b) return a = this._dataConfig[d] = this._dataConfig[d] || {}, a = a[c] || {
									multi: !1
								},
								a.finalized = !0, this._dataConfig[d][c] = a
						}
					},
					log: function(a) {
						this.logHistory.push(a);
						return this.debug && "object" == typeof console ? console.log(a) && !1 : !1
					}
				};
				if("object" == typeof Bootstrapper.AF && "[object Array]" !== Object.prototype.toString.call(Bootstrapper.AF)) return Bootstrapper.AF;
				if("[object Array]" === Object.prototype.toString.call(Bootstrapper.AF))
					for(var h = Bootstrapper.AF, f = 0; f < h.length; f++) try {
						g.parse(h[f])
					} catch(k) {}
				return {
					push: function(a) {
						return g.parse(a)
					}
				}
			}();
			Bootstrapper.ajaxListener = function() {
				var listeners = {},
					listener = function(a, b) {
						var detected = [],
							selector = a || function() {},
							attach = b || function(node) {};
						return function() {
							if(typeof selector == "function" && typeof attach == "function") {
								var n = selector();
								if(typeof n == "object")
									if(typeof n.length != "undefined") {
										n = Array.prototype.slice.call(n, 0);
										for(var i = n.length - 1; i >= 0; i--)
											for(var j = 0; j < detected.length; j++)
												if(n[i] == detected[j]) n.splice(i, 1);
										for(var i = 0; i < n.length; detected.push(n[i++]));
										for(var i = 0; i < n.length; attach.call(n[i], n[i++]));
									} else {
										for(var i = 0; i < detected.length; i++)
											if(n == detected[i]) return;
										detected.push(n);
										attach.call(n, n)
									}
							}
						}
					},
					_public = {
						create: function(x, y) {
							do var a = parseInt(Math.random() * 1E5) + ""; while (listeners[a]);
							listeners[a] = listener(x, y)
						}
					};
				setInterval(function() {
					for(key in listeners) listeners[key]()
				}, 500);
				return _public
			}();
			(function() {
				window._log = window._log || function() {};
				var b = Bootstrapper,
					d = b.data;
				if(d) {
					d.calculated = {
						data: {},
						top: function(g, c) {
							var c = c || ":",
								a = [],
								s = [],
								r = [],
								b;
							if(g && ~g.indexOf(c)) {
								b = Bootstrapper.data.calculated.all || {};
								for(i in b) ~i.indexOf(g) && (a[i.split(c)[1].replace(/_/g, " ")] = b[i])
							} else {
								b = d.calculated.get(g).split(",");
								for(i = 0; i < b.length; ++i) {
									if(!a[b[i]]) a[b[i]] = 0;
									++a[b[i]]
								}
							}
							for(i in a) s.push([i, a[i]]);
							s.sort(function(a, b) {
								return b[1] - a[1]
							});
							for(var i = 0, l = s.length; i < l; i++)
								if(s[i][0] && s[i][0] != "") r.push(s[i][0]);
							return r.join(",")
						},
						max: function(g, c) {
							return d.calculated.top(g, c).split(",")[0]
						},
						rec: function(g, c, b) {
							b = "number" == typeof b ? b : 10;
							var t = d.calculated,
								a = t.get,
								e = t.set,
								a = a(g) || 0;
							if(0 == a) return e(g, c), c;
							a = a.split(",");
							a.length == b && a.shift();
							a.push(c);
							a = a.join(",");
							return e(g, a), a
						},
						avg: function(a, e) {
							a = a.split(e || ",") || "";
							if("" != a && "object" == typeof a) {
								if(1 < a.length) {
									var d = a.length,
										b = 0,
										c;
									for(i = 0; i < d; i++) c = parseInt("." == a[i].charAt(0) ? "0" + a[i] : a[i]), "number" == typeof c && (b += c);
									return Math.round(b / d)
								}
								return a.join("")
							}
							return ""
						}
					};
					d.calculateData = function(n, fn) {
						try {
							var $$LS = d.local;
							var c = d.calculated,
								$$LS = $$LS.utils,
								$all = $$LS.all(),
								$name = n,
								$get = $$LS.get,
								$set = function(a, b) {
									$$LS.set(a, b);
									if(a.charAt(0) != "_") {
										d.calculated.data[a.replace("data.", "")] = b;
										_log("***PROFILE-UPDATED:" + a + "\x3d" + b)
									}
								},
								$value = $get(n) || "",
								$data = d.extract,
								$sess = $get("_data.session") || "",
								$session = $sess.split("-")[0],
								$time = (new Date).getTime(),
								$url = window.location.href,
								$top = c.top,
								$max = c.max,
								$record = c.rec,
								$avg = c.avg,
								$first = ($get("_data.firstPageOfSession") || "") == "true" ? !0 : !1;
							c.get = $get;
							c.set = $set;
							c.all = $all;
							if(~$sess.indexOf("-")) {
								var ts = $sess.split("-")[1];
								if($time - ts > 18E5) {
									$set("_data.lastSession", $session);
									$sess = $time + "-" + $time;
									$session = $time
								} else $sess = $session + "-" + $time
							} else {
								$sess = $time + "-" + $time;
								$session = $time;
								$set("_data.lastSession", $session)
							}
							$set("_data.session", $sess);
							var $lastSession = $get("_data.lastSession") || $session;
							if(n) {
								try {
									$val = fn.call(window, $name, $value, $all, $get, $set, $data, $session, $lastSession, $time, $url, $top, $max, $record, $avg, $first)
								} catch(e) {
									$val = $value
								}
								$val = $val == null || $val == undefined || typeof $val == "object" ? "" : $val;
								$set($name, $val);
								return $val
							} else {
								var C = d.calculateData;
								if($get("_data.visitStamp") != $session) C("data.visit", function(n, v, a, g, s, d, e, l, t, u, p, m, r, w, f) {
									var v = v || 0,
										x = 12,
										pv = g("data.sessionPageViews") || "",
										ts = g("data.timeOnSite") || "";
									s("data.landingPage", u);
									s("data.lastExitPage", g("_data.currPage") || "");
									s("data.uuid", d("uuid", "cookie") || "");
									r("_data.avgTime", g("data.timeOnSite") || "");
									r("_data.avgPageViews", g("data.sessionPageViews") || "");
									if(l != "" && pv != "" && ts != "") r("_data.engagementTrend", l + "|" + pv + "|" + ts);
									s("data.averageTimeOnSite", w(g("_data.avgTime")) || "");
									s("data.averageSessionPageViews", w(g("_data.avgPageViews")) || "");
									s("data.visitorType", e != l ? "Returning" : "New");
									s("data.visitorGroup", g("data.visitorGroup") || Math.ceil(Math.random() * x));
									s("data.daysSinceLastVisit", e != l ? parseInt(((e - l) / (24 * 60 * 60 * 1E3)).toFixed(0)) : 0);
									s("_data.visitStamp", e);
									return ++v
								});
								C("data.sessionPageViews", function(n, v, a, g, s, d, e, l, t, u, p, m, r, w, f) {
									var v = v || 0,
										p = g("data.totalPageViews") || 0;
									s("data.totalPageViews", ++p);
									s("data.timeOnSite", ((t - e) / (60 * 1E3)).toFixed(0));
									s("_data.currPage", u);
									if(g("_data.sessionStamp") != e) {
										s("_data.sessionStamp", e);
										s("_data.firstPageOfSession", "true");
										return 1
									} else {
										s("_data.firstPageOfSession", "false");
										return ++v
									}
								})
							}
							if(window.performance && performance.timing) {
								var timing = performance.timing,
									websiteResponse = timing.responseEnd - timing.fetchStart,
									domInteractive = timing.domInteractive - timing.navigationStart,
									domLoaded = timing.domContentLoadedEventEnd - timing.navigationStart,
									fullyLoaded = timing.loadEventEnd - timing.navigationStart;
								$set("data.timingInitialResponse", websiteResponse);
								$set("data.timingDOMInteractive", domInteractive);
								$set("data.timingDOMLoaded", domLoaded);
								$set("data.timingFullyLoaded", fullyLoaded)
							}
						} catch(e) {
							return "unsupported"
						}
					};
					d.calculateData()
				}
			})();
			Bootstrapper.dataManager = function() {
				var _private = {
						data: {},
						add: function(o) {
							if(typeof o == "object" && o.id) {
								o.get = function(e) {
									return Bootstrapper.dataManager.getDataElement(this.id, e)
								};
								this.data[o.id] = o
							}
						},
						getObj: function(i) {
							if(i) return _private.data[i];
							return _private.data
						},
						getDataElement: function(i, e) {
							if(typeof this.data[i] == "undefined") return "";
							var dataObj = this.data[i].data,
								retVal;
							if(typeof dataObj == "object") {
								if(typeof dataObj[e] == "undefined") return "";
								dataObj = dataObj[e];
								if(typeof dataObj.get == "string") {
									var d = eval(dataObj.get);
									if(typeof dataObj.mod == "string" && dataObj.mod !== "") {
										var m = "(function(){ return " + (dataObj.mod === "" ? "this" : dataObj.mod) + ";})";
										retVal = eval(m).call(d)
									} else if(typeof dataObj.mod == "function") retVal = dataObj.mod.call(d, d);
									else retVal = d
								} else if(typeof dataObj.get == "function") {
									var d = dataObj.get.call(this.data[i]);
									if(typeof dataObj.mod == "string" && dataObj.mod !== "") {
										var m = "(function(){ return " + (dataObj.mod === "" ? "this" : dataObj.mod) + ";})";
										retVal = eval(m).call(d)
									} else if(typeof dataObj.mod == "function") retVal = dataObj.mod.call(d, d);
									else retVal = d
								}
								return retVal
							}
						},
						getDataLayer: function(i) {
							var retObj = {};
							var dataObj = this.data[i].data;
							for(key in dataObj) try {
								retObj[key] = this.getDataElement(i, key)
							} catch(e) {
								retObj[key] = null
							}
							return retObj
						},
						getAllData: function() {
							var data = this.data,
								retObj = {
									_d: {}
								};
							for(var key in data) {
								retObj._d[key] = {};
								var d = this.getDataLayer(key);
								for(var k in d) {
									retObj[k] = d[k];
									retObj._d[key][k] = d[k]
								}
							}
							return retObj
						},
						getData: function(i) {
							if(i) return this.getDataLayer(i);
							else return this.getAllData()
						},
						addDataElement: function(layerId, name, o) {
							if(typeof this.data[layerId] == "object" && typeof name == "string" && typeof o == "object") {
								var d = this.data[layerId];
								d.data[name] = o
							}
						}
					},
					_public = {
						push: function(dl) {
							_private.add(dl)
						},
						getObj: function(i) {
							return _private.getObj(i)
						},
						getData: function(i) {
							return _private.getData(i)
						},
						getDataElement: function(i, e) {
							return _private.getDataElement(i, e)
						},
						addDataElement: function(layerId, name, o) {
							return _private.addDataElement(layerId, name, o)
						}
					};
				return _public
			}();
			Bootstrapper.dataManager.map = function() {
				return {
					define: function(n, d) {
						if(Bootstrapper.data)
							for(i in d) {
								var v = typeof d[i] == "string" ? Bootstrapper.data.extract(d[i]) : d[i]();
								Bootstrapper.data.dataManagerPush(i, v, n)
							}
					}
				}
			}();
			window.$data = function(a, b) {
				if(typeof b == "string") try {
					return Bootstrapper.dataManager.getDataElement(a, b)
				} catch(e) {} else if(typeof a == "string") return Bootstrapper.dataManager.getData()[a] || "";
				return ""
			};
			Bootstrapper.bindOnGetServerComponent(function() {
				var DL = Bootstrapper.dataManager && Bootstrapper.targetingExtension ? Bootstrapper.dataManager.getData() : {};
				if(~document.cookie.indexOf("VTP:enabled")) DL["ensightenVT"] = 1;
				if(Bootstrapper.scDataObj)
					for(i in DL) Bootstrapper.scDataObj[i] = DL[i]
			});
			var ns = window[ensightenOptions.ns];
			ns.VTconfig = ns.VTconfig || {};
			ns.VTconfig["DM"] = this.deploymentId;
			Bootstrapper.dataManager.pushObject = function(obj, id, name) {
				Bootstrapper.dataManager.push({
					name: name || id,
					id: id,
					data: {}
				});
				for(var k in obj)
					if(obj[k] && typeof obj[k] !== "function") Bootstrapper.dataManager.addDataElement(id, k, {
						name: k,
						get: function(o, key) {
							return function() {
								return o[key]
							}
						}(obj, k)
					})
			};
			(function() {
				function s(e, t, n) {
					var r = t == "blur" || t == "focus";
					e.element.addEventListener(t, n, r)
				}

				function o(e) {
					e.preventDefault();
					e.stopPropagation()
				}

				function u(t) {
					if(e) return e;
					if(t.matches) e = t.matches;
					if(t.webkitMatchesSelector) e = t.webkitMatchesSelector;
					if(t.mozMatchesSelector) e = t.mozMatchesSelector;
					if(t.msMatchesSelector) e = t.msMatchesSelector;
					if(t.oMatchesSelector) e = t.oMatchesSelector;
					if(!e) e = p.matchesSelector;
					return e
				}

				function a(element, n, r) {
					if(n == "_root") return r;
					if(element === r) return;
					try {
						if(u(element).call(element, n)) return element
					} catch(error) {
						e = null;
						if(u(element).call(element, n)) return element
					}
					if(element.parentNode) {
						t++;
						return a(element.parentNode, n, r)
					}
				}

				function f(e, t, n, i) {
					if(!r[e.id]) r[e.id] = {};
					if(!r[e.id][t]) r[e.id][t] = {};
					if(!r[e.id][t][n]) r[e.id][t][n] = [];
					r[e.id][t][n].push(i)
				}

				function l(e, t, n, i) {
					if(!i && !n) {
						r[e.id][t] = {};
						return
					}
					if(!i) {
						delete r[e.id][t][n];
						return
					}
					for(var s = 0; s < r[e.id][t][n].length; s++)
						if(r[e.id][t][n][s] === i) {
							r[e.id][t][n].pop(s, 1);
							break
						}
				}

				function c(e, n, s) {
					if(!r[e][s]) return;
					var o = n.target || n.srcElement,
						u, f, l = {},
						c = 0,
						h = 0;
					t = 0;
					for(u in r[e][s])
						if(r[e][s].hasOwnProperty(u)) {
							f = a(o, u, i[e].element);
							if(f && p.matchesEvent(s, i[e].element, f, u == "_root", n)) {
								t++;
								r[e][s][u].match = f;
								l[t] = r[e][s][u]
							}
						}
					n.stopPropagation = function() {
						n.cancelBubble = true
					};
					for(c = 0; c <= t; c++)
						if(l[c])
							for(h = 0; h < l[c].length; h++) {
								if(l[c][h].call(l[c].match, n) === false) {
									p.cancel(n);
									return
								}
								if(n.cancelBubble) return
							}
				}

				function h(e, t, n, i) {
					function u(e) {
						return function(t) {
							c(s, t, e)
						}
					}
					if(!(e instanceof Array)) e = [e];
					if(!n && typeof t == "function") {
						n = t;
						t = "_root"
					}
					var s = this.id,
						o;
					for(o = 0; o < e.length; o++) {
						if(!r[s] || !r[s][e[o]]) p.addEvent(this, e[o], u(e[o]));
						if(i) {
							l(this, e[o], t, n);
							continue
						}
						f(this, e[o], t, n)
					}
					return this
				}

				function p(e, t) {
					if(typeof e == "string" && typeof t == "function" || typeof t == "string") p(document).on(arguments[0], arguments[1], arguments[2], arguments[3] || false);
					if(!(this instanceof p)) {
						for(var r in i)
							if(i[r].element === e) return i[r];
						n++;
						i[n] = new p(e, n);
						i[n]._on = i[n].on;
						i[n].on = function(e, t, n, r) {
							var i = typeof t == "function" ? t : n,
								s = typeof t == "function" ? n || false : r || false;
							if(!s) return this._on.call(this, e, t, n);
							else {
								var o = [e];
								if(typeof t == "string") o.push(t);
								o.push(function(e) {
									return function(t) {
										if(!t.defaultPrevented) Bootstrapper.Delegate.load(this, s);
										if(typeof t.preventDefault != "undefined") t.preventDefault();
										else t.returnValue = false;
										e.call(this)
									}
								}(i));
								this._on.apply(this, o)
							}
						};
						return i[n]
					}
					this.element = e;
					this.id = t
				}
				var e, t = 0,
					n = 0,
					r = {},
					i = {};
				_delay = 750;
				p.prototype.on = function(e, t, n) {
					return h.call(this, e, t, n)
				};
				p.prototype.off = function(e, t, n) {
					return h.call(this, e, t, n, true)
				};
				p.matchesSelector = function() {};
				p.cancel = o;
				p.addEvent = s;
				p.matchesEvent = function() {
					return true
				};
				p.load = function(e, t) {
					var n = typeof t == "number" ? parseInt(t) : 750;
					setTimeout(function(e, t) {
						return function() {
							if(e.nodeName && "a" == e.nodeName.toLowerCase()) {
								if(t && /^javascript\s*:/.test(t)) return(new Function(unescape(t))).call(window);
								else if(e.target && /_blank|_new/i.test(e.target)) return true;
								if(t) window.location.href = t
							}
						}
					}(e, e.href || ""), n)
				};
				Bootstrapper.Delegate = p
			})();
			(function(e) {
				var t = e.addEvent;
				e.addEvent = function(e, n, r) {
					if(e.element.addEventListener) return t(e, n, r);
					if(n == "focus") n = "focusin";
					if(n == "blur") n = "focusout";
					e.element.attachEvent("on" + n, r)
				};
				e.simpleMatchesSelector = function(e) {
					if(e.charAt(0) === ".") return(" " + this.className + " ").indexOf(" " + e.slice(1) + " ") > -1;
					if(e.charAt(0) === "#") return this.id === e.slice(1);
					return this.tagName.toUpperCase() === e.toUpperCase()
				};
				e.matchesSelector = function(t) {
					if(!~t.indexOf(" ") && !~t.indexOf("\x3e")) return e.simpleMatchesSelector.call(this, t);
					else {
						var n = this,
							r = t.split(" ").reverse();
						while(r.length) {
							var i = r.shift();
							if(~i.indexOf("\x3e")) {
								i = i.split("\x3e").reverse();
								while(i.length) {
									tempSel = i.shift();
									if(e.simpleMatchesSelector.call(n, tempSel)) n = n.parentNode;
									else return false
								}
								if(!r.length) return true
							} else
								while(n != document) {
									var s = e.simpleMatchesSelector.call(n, i);
									if(n.parentNode) n = n.parentNode;
									n = n.parentnode ? n.parentnode : document;
									if(s) {
										if(!r.length) return true;
										break
									}
								}
						}
						return false
					}
				};
				e.cancel = function(e) {
					if(e.preventDefault) e.preventDefault();
					if(e.stopPropagation) e.stopPropagation();
					e.returnValue = false;
					e.cancelBubble = true
				}
			})(Bootstrapper.Delegate);
			Bootstrapper.on = Bootstrapper.Delegate;
			document.getElementsByClassName = document.getElementsByClassName || function(b) {
				var c = this.all || this.getElementsByTagName("*"),
					d = [];
				b = RegExp("(?:^|\\s)" + b + "(?:\\s|$)");
				for(var a = 0; a < c.length; a++) b.test(c[a].className) && d.push(c[a]);
				return d
			};
			Bootstrapper.getQueryParam = function(key, loc) {
				if(!this.params || loc) {
					var search = loc || window.location.search;
					var params = search.replace(/^\?/, ""),
						paramObj = {};
					params = params.split("\x26");
					for(var i = 0; i < params.length; i++) {
						var t = params[i].split("\x3d");
						paramObj[t[0]] = t[1]
					}
					if(!loc) this.params = paramObj;
					else return paramObj[key] || ""
				}
				return this.params[key] || ""
			};
			Bootstrapper.getElementXPath = function(e) {
				var n = e;
				var p = "";
				while(n != document.getElementsByTagName("html")[0]) {
					var t = "/" + n.tagName;
					if(n.id != "") {
						t += "#" + n.id;
						p = t + p
					} else {
						var c = 1;
						_n = n.previousSibling;
						while(_n != null) {
							if(n.tagName == _n.tagName) c++;
							_n = _n.previousSibling
						}
						p = t + (c != 1 ? "[" + c + "]" : "") + p
					}
					n = n.parentNode
				}
				return Bootstrapper.getMinXPath("/HTML" + p)
			};
			Bootstrapper.getMinXPath = function(path) {
				var p = path.split("/"),
					lastId = 0;
				for(var i = 0; i < p.length; i++)
					if(~p[i].indexOf("#")) lastId = i;
				for(var i = lastId - 1; i > 0; i--)
					if(!p[i].match(/^(html|body)/i)) p.splice(i, 1);
				return p.join("/")
			};
			Bootstrapper.getElementByXPathStep = function(d, a) {
				var c = ~a.indexOf("#") ? a.split("#")[1] : "",
					e = c ? 0 : ~a.indexOf("[") ? parseInt(a.match(/\[(\d+)\]/)[1]) : 0,
					f = (c ? a.split("#")[0] : e ? a.split("[")[0] : a).toLowerCase();
				if(d == document && f == "html" && e == 0) return document.getElementsByTagName("html")[0];
				if(~a.indexOf("#")) return document.getElementById(a.split("#")[1]);
				var b = d.firstChild;
				if(!b) return null;
				for(var g = 0, e = e != 0 ? e - 1 : e; b;) {
					if(b.nodeType == 1)
						if(b.tagName.toLowerCase() == f && c != "" && b.id == c) return b;
						else if(b.tagName.toLowerCase() == f && g == e && c == "") return b;
					else b.tagName.toLowerCase() == f && g++;
					b = b.nextSibling
				}
			};
			Bootstrapper.getElementByXPath = function(d, n) {
				for(var d = d.split("/"), a = Bootstrapper.getElementByXPathStep(n || document, d[1]), c = 2; c < d.length; c++) {
					if(a == null) return null;
					a = Bootstrapper.getElementByXPathStep(a, d[c])
				}
				return a
			};
			window._log = function(m) {
				window._enslog = window._enslog || [];
				window._enslog.push(m);
				if(console) {
					var v = typeof m == "string" ? m : "",
						s = window.location.search,
						p = ~s.indexOf("ensightenDebug\x3d") ? s.split("ensightenDebug\x3d")[1].split("\x26")[0].split("#")[0].split(";")[0] : !1;
					if(p && p == "act") {
						if(~v.indexOf("$$$")) console.log(v)
					} else if(p && p == "cloak") {
						if(~v.indexOf("*** Cloak")) console.log(v)
					} else if(p) console.log(m)
				}
			};
			Bootstrapper.MVT = function() {
				var g = {},
					h = {
						split: function(b, a) {
							var c = [];
							do {
								var d = b.shift(),
									e = [],
									f = [d];
								(e = d.x.split("/")).shift();
								for(d = b.length - 1; - 1 < d; d--) {
									var g = b[d].x.split("/");
									g.shift();
									g[0] == e[0] && (f.push(b[d]), b.splice(d, 1))
								}
								c.push(f)
							} while (0 < b.length);
							for(d = 0; d < c.length; d++) e = this.getCommon(c[d]), Bootstrapper.MVT.traverse(a, e, c[d])
						},
						getCommon: function(b) {
							for(var a = [], c = 0; c < b.length; a.push(b[c++].x));
							if(1 == a.length) return a[0];
							for(c = 0; c < a.length;
								(a[c] = a[c++].split("/")).shift());
							b = a[0];
							for(c = 1; c < a.length; c++) {
								for(var d = 0; d < a[c].length; d++)
									if(a[0][d] != a[c][d]) {
										var e = d;
										break
									}
								if(e) break
							}
							return "/" + b.slice(0, e).join("/")
						},
						tests: []
					},
					i = {
						hidden: [],
						cloaks: [],
						EDLutils: !0,
						initialized: !1,
						invisibilityCloak: !1,
						disabled: !!~window.location.search.indexOf("ensTools\x3ddisable"),
						cloakDisabled: (true || !!~window.location.search.indexOf("ensCloak\x3ddisable")) && !~window.location.search.indexOf("ensCloak\x3denable"),
						forceSyncCloak: !!~window.location.search.indexOf("ensCloak\x3d") && !!~window.location.search.indexOf("!resync"),
						content: {
							initialized: !1,
							map: {},
							list: "",
							target: function(o) {
								if(typeof o == "string" && ~o.indexOf("##") && ~o.indexOf("@@")) this.store(o);
								else {
									if(o instanceof Array) {
										var c = "";
										for(var i = 0, l = o.length; i < l; i++)
											if(o[i].u) c += "##" + o[i].u + "@@" + (o[i].x || "")
									} else if(o.u) o = "##" + o.u + "@@" + (o.x || "");
									this.store(o)
								}
							},
							utils: function(a, n, o) {
								if(Bootstrapper.data) try {
									if(a == "get") return Bootstrapper.data.getEngine("store").utils.get(n);
									else if(a == "set") return Bootstrapper.data.getEngine("store").utils.set(n, o)
								} catch(e) {
									Bootstrapper.MVT.EDLutils = false;
									_log("*** Cloak:EDL utils not available")
								} else {
									Bootstrapper.MVT.EDLutils = false;
									_log("*** Cloak:EDL not available")
								}
							},
							store: function(o) {
								if(!Bootstrapper.MVT.content.initialized) this.list = o;
								else {
									if(this.list == "") this.list = o;
									this.utils("set", "_ensCloak", o)
								}
								_log("*** Cloak:Storage updated")
							},
							load: function(d) {
								var cl;
								if(d == 1) cl = this.list;
								else cl = this.utils("get", "_ensCloak");
								if(!d) {
									_log("GLOBAL: " + this.list);
									_log("STORED: " + cl)
								}
								if(typeof cl == "string" && cl != "" && ~cl.indexOf("##")) {
									cl = cl.split("##");
									for(var i = 0, l = cl.length; i < l; i++)
										if(~cl[i].indexOf("@@")) {
											var u = cl[i].split("@@")[0],
												x = cl[i].split("@@")[1] || "";
											if(d == "list") {
												_log("URL: " + u);
												_log("XPATH: " + x)
											}
											this.add({
												"u": u,
												"x": x
											})
										}
									_log("*** Cloak:Storage loaded")
								} else _log("*** Cloak:Storage empty")
							},
							add: function(o) {
								if(o.u) {
									if(~window.location.href.indexOf(o.u))
										if(o.x && o.x != "") {
											if(typeof this.map[o.x] == "undefined") {
												this.map[o.x] = o;
												this.map[o.x].t = "map"
											}
										} else Bootstrapper.MVT.invisibilityCloak = true
								} else if(typeof this.map[o.x] == "undefined") {
									this.map[o.x] = o;
									this.map[o.x].t = "map"
								}
							},
							init: function() {
								if(!Bootstrapper.MVT.cloakDisabled) {
									var sync = this.utils("get", "_ensCloakSync") || "",
										time = (new Date).getTime(),
										fetch = true;
									if(Bootstrapper.MVT.EDLutils) {
										if(~sync != "" && !isNaN(sync))
											if(time - sync > 18E5) sync = time;
											else fetch = false;
										else sync = time;
										if(fetch) this.utils("set", "_ensCloakSync", sync)
									} else fetch = false;
									if(fetch || Bootstrapper.MVT.forceSyncCloak) {
										if(Bootstrapper.scDataObj) Bootstrapper.scDataObj["ensCloak"] = "sync";
										if(this.list == "") Bootstrapper.MVT.invisibilityCloak = true;
										_log("*** Cloak:Syncing")
									}
									this.load(1);
									this.load(2)
								}
								var m = this.map;
								for(i in m)
									if(m[i].x) Bootstrapper.MVT.push({
										x: m[i].x,
										m: m[i].x,
										t: "map"
									});
								if(Bootstrapper.MVT.invisibilityCloak && !Bootstrapper.MVT.disabled && !Bootstrapper.MVT.cloakDisabled) Bootstrapper.MVT.cover()
							}
						},
						addModule: function(b, a) {
							g[b] = a
						},
						swap: function(b, a) {
							g[a.t].swap(b, a)
						},
						start: function(b) {
							for(var a = 0; a < b.length; a++) g[b[a].t].init(b[a]);
							a = h.getCommon(b);
							"/" == a && h.split(b, document);
							this.traverse(document, a, b)
						},
						init: function() {
							Bootstrapper.MVT.content.initialized = !0;
							Bootstrapper.MVT.content.init();
							_log("*** MVT:init - " + h.tests.length + " targets");
							Bootstrapper.MVT.initialized = !0;
							_log(h.tests.slice());
							if(h.tests.length && !this.disabled) Bootstrapper.MVT.start(h.tests)
						},
						push: function(o) {
							if(Bootstrapper.MVT.disabled) return;
							if(typeof o == "object") {
								_log("*** MVT:push");
								_log(o);
								if(typeof this.setDone == "undefined") {
									this.setDone = 1;
									Bootstrapper.bindPageSpecificCompletion(function() {
										Bootstrapper.MVT.done()
									});
									Bootstrapper.bindDOMLoaded(function() {
										setTimeout(function() {
											Bootstrapper.MVT.done()
										}, 500)
									})
								}
								if(o.x) {
									o.cloak = this.cloak(o, 1);
									if(o.t && this.content.map[o.x])
										if(o.t == "map") this.content.map[o.x].cloak = o.cloak;
										else if(this.content.map[o.x].cloak) Bootstrapper.MVT.delCSS(this.content.map[o.x].cloak)
								}
								if(this.initialized && o.x) {
									_log("MVT:content");
									_log(o);
									if(this.content.map[o.x])
										for(i in o) this.content.map[o.x][i] = o[i];
									else this.check(o)
								} else {
									for(var i = 0; i < h.tests.length; i++)
										if(h.tests[i].x && o.x && h.tests[i].x == o.x)
											if(h.tests[i].t == "map" && o.t != "map") {
												for(j in o) h.tests[i][j] = o[j];
												return
											}
									h.tests.push(o);
									this.hidden.push(o)
								}
							}
						},
						injectCSS: function(x, e) {
							var d = document,
								s = d.createElement("style");
							if(e) s.className = "_ensCSS";
							if("\v" == "v") {
								d.getElementsByTagName("head")[0].appendChild(s);
								s.styleSheet.cssText = x
							} else {
								s.type = "text/css";
								s.innerHTML = x;
								d.getElementsByTagName("head")[0].appendChild(s)
							}
							return s
						},
						delCSS: function(s, f) {
							if(s) try {
								if("\v" == "v") s.styleSheet.cssText = "/**/";
								if(s.parentNode) s.parentNode.removeChild(s);
								return !0
							} catch(e) {
								if(f) return f();
								return !1
							}
							return !1
						},
						cover: function() {
							_log("*** Cloak:Cover");
							this.invisibilityCloak = this.injectCSS("body{position:relative; opacity:0 !important;filter:alpha(opacity\x3d0) !important;background:none !important}");
							Bootstrapper.bindPageSpecificCompletion(function() {
								Bootstrapper.MVT.uncover("Uncover - complete")
							});
							Bootstrapper.bindDOMLoaded(function() {
								setTimeout(function() {
									Bootstrapper.MVT.uncover("Uncover - loaded")
								}, 500)
							});
							setTimeout(function() {
								Bootstrapper.MVT.uncover("Uncover - timeout")
							}, 7E3)
						},
						uncover: function(l) {
							if(this.invisibilityCloak)
								if(this.delCSS(this.invisibilityCloak)) {
									this.invisibilityCloak = !1;
									_log("*** Cloak:" + l)
								}
						},
						cloak: function(o, t) {
							var s = false,
								x = o.toString();
							if(typeof o == "object" && o.x) x = o.x;
							if(~x.indexOf("/HTML/")) x = x.substr(1).replace(/\//g, " ").replace(/\[.*\]$/g, "");
							s = Bootstrapper.MVT.injectCSS(x + "{visibility:hidden !important}", t);
							if(t) this.cloaks.push(s);
							return s
						},
						show: function(a, b) {
							if(b && b.cloak) this.delCSS(b.cloak);
							else if(a) {
								a.style.display = a.style.oldDisplay || "block";
								a.style.visibility = "visible"
							}
						},
						done: function() {
							var a = this.hidden,
								c = this.cloaks,
								s = document.getElementsByTagName("style");
							for(i = 0; i < h.length; i++) this.show(h[i]);
							this.hidden = [];
							for(i = 0; i < c.length; i++) this.delCSS(c[i]);
							this.cloaks = [];
							for(i = 0; i < s.length; i++)
								if(s[i].className == "_ensCSS") this.delCSS(s[i]);
							_log("*** MVT:done")
						},
						check: function(o) {
							var n = Bootstrapper.getElementByXPath(o.x);
							_log("*** MVT:check");
							_log(n);
							if(n) Bootstrapper.MVT.swap(n, o);
							else if(!Bootstrapper.hasDOMLoaded()) setTimeout(function() {
								Bootstrapper.MVT.check(o)
							}, 25);
							else {
								setTimeout(function() {
									Bootstrapper.MVT.done()
								}, 100);
								_log("*** MVT:unresolved - not found")
							}
						},
						traverse: function(b, a, c) {
							if(1 == c.length && c[0].x == a) var d = !0;
							for(var e = 0; e < c.length; c[e].x = c[e++].x.slice(a.length));
							(a = a.split("/")).shift();
							for(e = 0; e < a.length; e++) {
								var f = Bootstrapper.getElementByXPathStep(b, a[e]);
								if(null != f) {
									Bootstrapper.swapNodes = Bootstrapper.swapNodes || [];
									Bootstrapper.swapNodes.push(f);
									b = f
								} else {
									a = "/" + a.slice(e).join("/");
									for(e = 0; e < c.length; c[e].x = a + c[e++].x);
									if(!Bootstrapper.hasDOMParsed()) {
										setTimeout(function(a, b, c) {
											return function() {
												Bootstrapper.MVT.traverse(a, b, c)
											}
										}(b, a, c), 25);
										return
									} else {
										setTimeout(function() {
											Bootstrapper.MVT.done()
										}, 100);
										_log("*** MVT:unresolved - not found");
										return
									}
								}
							}
							d ? this.swap(b, c[0]) : h.split(c, b)
						}
					};
				return i
			}();
			Bootstrapper.bindOnGetServerComponent(function() {
				Bootstrapper.MVT.init()
			});
			Bootstrapper.MVT.addModule("map", {
				init: function(a) {},
				swap: function(a, b) {
					if(typeof Bootstrapper.DOMloadedDone == "undefined" || !Bootstrapper.DOMloadedDone) {
						if(Bootstrapper.hasDOMLoaded() && typeof Bootstrapper.DOMloadedDone == "undefined") {
							Bootstrapper.DOMloadedDone = !1;
							_log("*** DOM:loaded ***");
							setTimeout(function() {
								Bootstrapper.DOMloadedDone = !0
							}, 500)
						}
						if(Bootstrapper.MVT.content.map[b.m].t != "map") {
							for(i in Bootstrapper.MVT.content.map[b.m]) b[i] = Bootstrapper.MVT.content.map[b.m][i];
							Bootstrapper.MVT.swap(a, b);
							return
						} else {
							setTimeout(function() {
								Bootstrapper.MVT.swap(a, b)
							}, 10);
							return
						}
					} else {
						_log("*** MVT:show - no changes found \x3d " + b.m);
						Bootstrapper.MVT.show(a, b)
					}
				}
			});
			Bootstrapper.MVT.addModule("xp", {
				init: function(a) {},
				swap: function(a, b) {
					_log("*** MVT:loaded");
					_log(a);
					_log(b);
					var d = 0;
					if(b.p == "replace") {
						if(!a.tagName.toUpperCase().match(/IMG|INPUT|TEXTAREA/)) {
							a.innerHTML = b.c;
							a.className = a.className + " ensContent";
							d = a
						}
					} else {
						d = document.createElement("div");
						d.className = "ensContent";
						d.innerHTML = b.c;
						if(b.p == "prepend")
							if(a.firstChild !== null) a.insertBefore(d, a.firstChild);
							else d = 0;
						else if(b.p == "append") a.appendChild(d, a);
						else if(b.p == "element")
							if(a.parentNode !== null) a.parentNode.replaceChild(d, a);
							else d = 0;
						else if(b.p == "before")
							if(a.parentNode !== null) a.parentNode.insertBefore(d, a);
							else d = 0;
						else if(b.p == "after")
							if(a.parentNode !== null)
								if(a.nextSibling === null) a.parentNode.appendChild(d);
								else a.parentNode.insertBefore(d, a.nextSibling);
						else d = 0
					}
					try {
						if(d)
							for(var s = d.getElementsByTagName("script"), l = s.length, i = 0; i < l; i++)
								if(s[i].src) {
									var l = document.createElement("script");
									l.src = s[i].src;
									l.type = s[i].type;
									s[i].parentNode.replaceChild(d, s[i])
								} else Function("try{" + s[i].text + "}catch(e){}")()
					} catch(e) {}
					_log("*** MVT:complete");
					Bootstrapper.MVT.show(a, b)
				}
			});
			Bootstrapper.VTconfig = Bootstrapper.VTconfig || {};
			Bootstrapper.VTconfig["MVT"] = this.deploymentId;
			Bootstrapper.propertyWatcher = function(options) {
				var _private = {
					watchers: []
				};
				var _public = {};
				_private.options = options || {};
				_private.options.interval = _private.options.interval || 50;
				_private.Watcher = function(propertyFn, options) {
					var _public = {};
					_public.propertyFn = propertyFn;
					_public.lastValue = undefined;
					_public.options = options;
					_public.change = function(oldVal, newVal) {};
					return _public
				};
				_private.doChecks = function() {
					for(var i = 0; i < _private.watchers.length; i++) {
						var w = _private.watchers[i];
						var p = w.propertyFn ? w.propertyFn() : null;
						if(w.lastValue != p) {
							w.change(w.lastValue, p);
							w.lastValue = p;
							if(w.options)
								if(w.options.stopOnReturn) _private.watchers.splice(i, 1)
						}
					}
					_private.resetTimer()
				};
				_private.resetTimer = function() {
					window.setTimeout(function() {
						_private.doChecks()
					}, _private.options.interval)
				};
				_private.addWatcher = function(fn, options) {
					var w = _private.Watcher(fn, options);
					_private.watchers.push(w);
					return w
				};
				_public = {
					create: _private.addWatcher
				};
				_private.doChecks();
				return _public
			}();
			Bootstrapper.trim = function(str) {
				return str.replace(/^\s+|\s+$/g, "")
			};
			Bootstrapper.fnIsEmpty = function(fn) {
				try {
					if(fn) {
						var rx = /^function [^(]*\(\)[ ]*{(.*)}$/;
						var b = rx.exec((fn + "").replace(/\n/g, ""))[1];
						return Bootstrapper.trim(b) === ""
					} else return true
				} catch(err) {
					console.info(err);
					return false
				}
			}
		}, 3390874, 516593);
		Bootstrapper.bindImmediate(function() {
			var Bootstrapper = window["Bootstrapper"];
			var ensightenOptions = Bootstrapper.ensightenOptions;
			var visitorObj = {
				"trackingServer": "metrics.citizensbank.com",
				"cookieLifetime": "",
				"cookieDomain": ""
			};
			if("smetrics.citizensbank.com") visitorObj.trackingServerSecure = "smetrics.citizensbank.com";
			if("metrics.citizensbank.com") visitorObj.marketingCloudServer = "metrics.citizensbank.com";
			if("smetrics.citizensbank.com") visitorObj.marketingCloudServerSecure = "smetrics.citizensbank.com";
			if("") visitorObj.loadTimeout = "";
			window.Visitor = function(q, w) {
				function x(d) {
					return function(b) {
						b = b || s.location.href;
						try {
							var c = a.Xa(b, d);
							if(c) return m.Hb(c)
						} catch(e) {}
					}
				}

				function B(a) {
					function b(a, d, b) {
						b = b ? b += "|" : b;
						return b + (a + "\x3d" + encodeURIComponent(d))
					}
					for(var c = "", e = 0, f = a.length; e < f; e++) {
						var g = a[e],
							h = g[0],
							g = g[1];
						g != j && g !== u && (c = b(h, g, c))
					}
					return function(a) {
						var d = m.Da(),
							a = a ? a += "|" : a;
						return a + ("TS\x3d" + d)
					}(c)
				}
				if(!q) throw "Visitor requires Adobe Marketing Cloud Org ID";
				var a = this;
				a.version = "2.1.0";
				var s = window,
					l = s.Visitor;
				l.version = a.version;
				s.s_c_in || (s.s_c_il = [], s.s_c_in = 0);
				a._c = "Visitor";
				a._il = s.s_c_il;
				a._in = s.s_c_in;
				a._il[a._in] = a;
				s.s_c_in++;
				a.na = {
					La: []
				};
				var v = s.document,
					j = l.Pb;
				j || (j = null);
				var F = l.Qb;
				F || (F = void 0);
				var i = l.Va;
				i || (i = !0);
				var k = l.Sa;
				k || (k = !1);
				var n = {
					r: !!s.postMessage,
					Ra: 1,
					ea: 864E5,
					ba: "adobe_mc",
					ca: "adobe_mc_sdid",
					w: /^[0-9a-fA-F\-]+$/,
					Qa: 5,
					Ta: /^\d+$/,
					fa: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/
				};
				a.Rb = n;
				a.ka = function(a) {
					var b = 0,
						c, e;
					if(a)
						for(c = 0; c < a.length; c++) e = a.charCodeAt(c),
							b = (b << 5) - b + e, b &= b;
					return b
				};
				a.u = function(a, b) {
					var c = "0123456789",
						e = "",
						f = "",
						g, h, j = 8,
						k = 10,
						l = 10;
					b === o && (y.isClientSideMarketingCloudVisitorID = i);
					if(1 == a) {
						c += "ABCDEF";
						for(g = 0; 16 > g; g++) h = Math.floor(Math.random() * j), e += c.substring(h, h + 1), h = Math.floor(Math.random() * j), f += c.substring(h, h + 1), j = 16;
						return e + "-" + f
					}
					for(g = 0; 19 > g; g++) h = Math.floor(Math.random() * k), e += c.substring(h, h + 1), 0 == g && 9 == h ? k = 3 : (1 == g || 2 == g) && 10 != k && 2 > h ? k = 10 : 2 < g && (k = 10), h = Math.floor(Math.random() * l), f += c.substring(h, h + 1), 0 == g && 9 == h ? l = 3 : (1 == g || 2 == g) && 10 != l && 2 > h ? l = 10 : 2 < g && (l = 10);
					return e + f
				};
				a.Ya = function() {
					var a;
					!a && s.location && (a = s.location.hostname);
					if(a)
						if(/^[0-9.]+$/.test(a)) a = "";
						else {
							var b = a.split("."),
								c = b.length - 1,
								e = c - 1;
							1 < c && 2 >= b[c].length && (2 == b[c - 1].length || 0 > ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf("," + b[c] + ",")) && e--;
							if(0 < e)
								for(a = ""; c >= e;) a = b[c] + (a ? "." : "") + a, c--
						}
					return a
				};
				a.cookieRead = function(a) {
					var a = encodeURIComponent(a),
						b = (";" + v.cookie).split(" ").join(";"),
						c = b.indexOf(";" + a + "\x3d"),
						e = 0 > c ? c : b.indexOf(";", c + 1);
					return 0 > c ? "" : decodeURIComponent(b.substring(c + 2 + a.length, 0 > e ? b.length : e))
				};
				a.cookieWrite = function(d, b, c) {
					var e = a.cookieLifetime,
						f, b = "" + b,
						e = e ? ("" + e).toUpperCase() : "";
					c && "SESSION" != e && "NONE" != e ? (f = "" != b ? parseInt(e ? e : 0, 10) : -60) ? (c = new Date, c.setTime(c.getTime() + 1E3 * f)) : 1 == c && (c = new Date, f = c.getYear(), c.setYear(f + 2 + (1900 > f ? 1900 : 0))) : c = 0;
					return d && "NONE" != e ? (v.cookie = encodeURIComponent(d) + "\x3d" + encodeURIComponent(b) + "; path\x3d/;" + (c ? " expires\x3d" + c.toGMTString() + ";" : "") + (a.cookieDomain ? " domain\x3d" + a.cookieDomain + ";" : ""), a.cookieRead(d) == b) : 0
				};
				a.h = j;
				a.z = function(a, b) {
					try {
						"function" == typeof a ? a.apply(s, b) : a[1].apply(a[0], b)
					} catch(c) {}
				};
				a.M = function(d, b) {
					b && (a.h == j && (a.h = {}), a.h[d] == F && (a.h[d] = []), a.h[d].push(b))
				};
				a.t = function(d, b) {
					if(a.h != j) {
						var c = a.h[d];
						if(c)
							for(; 0 < c.length;) a.z(c.shift(), b)
					}
				};
				a.s = function(a, b, c, e) {
					c = encodeURIComponent(b) + "\x3d" + encodeURIComponent(c);
					b = m.Fb(a);
					a = m.wb(a);
					if(-1 === a.indexOf("?")) return a + "?" + c + b;
					var f = a.split("?"),
						a = f[0] + "?",
						e = m.ib(f[1], c, e);
					return a + e + b
				};
				a.Xa = function(a, b) {
					var c = RegExp("[\\?\x26#]" + b + "\x3d([^\x26#]*)").exec(a);
					if(c && c.length) return decodeURIComponent(c[1])
				};
				a.eb = x(n.ba);
				a.fb = x(n.ca);
				a.ha = function() {
					var d = a.fb(void 0);
					d && d.SDID && d[G] === q && (a._supplementalDataIDCurrent = d.SDID, a._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = i)
				};
				a.ga = function() {
					var d = a.eb();
					if(d && d.TS && !(Math.floor((m.Da() - d.TS) / 60) > n.Qa || d[G] !== q)) {
						var b = d[o],
							c = a.setMarketingCloudVisitorID;
						b && b.match(n.w) && c(b);
						a.j(t, -1);
						d = d[r];
						b = a.setAnalyticsVisitorID;
						d && d.match(n.w) && b(d)
					}
				};
				a.cb = function(d) {
					function b(d) {
						m.Ga(d) && a.setCustomerIDs(d)
					}

					function c(d) {
						d = d || {};
						a._supplementalDataIDCurrent = d.supplementalDataIDCurrent || "";
						a._supplementalDataIDCurrentConsumed = d.supplementalDataIDCurrentConsumed || {};
						a._supplementalDataIDLast = d.supplementalDataIDLast || "";
						a._supplementalDataIDLastConsumed = d.supplementalDataIDLastConsumed || {}
					}
					if(d) try {
						if(d = m.Ga(d) ? d : m.Gb(d), d[a.marketingCloudOrgID]) {
							var e = d[a.marketingCloudOrgID];
							b(e.customerIDs);
							c(e.sdid)
						}
					} catch(f) {
						throw Error("`serverState` has an invalid format.");
					}
				};
				a.l = j;
				a.$a = function(d, b, c, e) {
					b = a.s(b, "d_fieldgroup", d, 1);
					e.url = a.s(e.url, "d_fieldgroup", d, 1);
					e.m = a.s(e.m, "d_fieldgroup", d, 1);
					y.d[d] = i;
					e === Object(e) && e.m && "XMLHttpRequest" === a.pa.F.G ? a.pa.rb(e, c, d) : a.useCORSOnly || a.ab(d, b, c)
				};
				a.ab = function(d, b, c) {
					var e = 0,
						f = 0,
						g;
					if(b && v) {
						for(g = 0; !e && 2 > g;) {
							try {
								e = (e = v.getElementsByTagName(0 < g ? "HEAD" : "head")) && 0 < e.length ? e[0] : 0
							} catch(h) {
								e = 0
							}
							g++
						}
						if(!e) try {
							v.body && (e = v.body)
						} catch(k) {
							e = 0
						}
						if(e)
							for(g = 0; !f && 2 > g;) {
								try {
									f = v.createElement(0 < g ? "SCRIPT" : "script")
								} catch(l) {
									f = 0
								}
								g++
							}
					}!b || !e || !f ? c && c() : (f.type = "text/javascript", f.src = b, e.firstChild ? e.insertBefore(f, e.firstChild) : e.appendChild(f), e = a.loadTimeout, p.d[d] = {
						requestStart: p.p(),
						url: b,
						xa: e,
						va: p.Ca(),
						wa: 0
					}, c && (a.l == j && (a.l = {}), a.l[d] = setTimeout(function() {
						c(i)
					}, e)), a.na.La.push(b))
				};
				a.Wa = function(d) {
					a.l != j && a.l[d] && (clearTimeout(a.l[d]), a.l[d] = 0)
				};
				a.la = k;
				a.ma = k;
				a.isAllowed = function() {
					if(!a.la && (a.la = i, a.cookieRead(a.cookieName) || a.cookieWrite(a.cookieName, "T", 1))) a.ma = i;
					return a.ma
				};
				a.b = j;
				a.c = j;
				var H = l.gc;
				H || (H = "MC");
				var o = l.nc;
				o || (o = "MCMID");
				var G = l.kc;
				G || (G = "MCORGID");
				var I = l.hc;
				I || (I = "MCCIDH");
				var M = l.lc;
				M || (M = "MCSYNCS");
				var K = l.mc;
				K || (K = "MCSYNCSOP");
				var L = l.ic;
				L || (L = "MCIDTS");
				var C = l.jc;
				C || (C = "MCOPTOUT");
				var E = l.ec;
				E || (E = "A");
				var r = l.bc;
				r || (r = "MCAID");
				var D = l.fc;
				D || (D = "AAM");
				var A = l.dc;
				A || (A = "MCAAMLH");
				var t = l.cc;
				t || (t = "MCAAMB");
				var u = l.oc;
				u || (u = "NONE");
				a.N = 0;
				a.ja = function() {
					if(!a.N) {
						var d = a.version;
						a.audienceManagerServer && (d += "|" + a.audienceManagerServer);
						a.audienceManagerServerSecure && (d += "|" + a.audienceManagerServerSecure);
						a.N = a.ka(d)
					}
					return a.N
				};
				a.oa = k;
				a.f = function() {
					if(!a.oa) {
						a.oa = i;
						var d = a.ja(),
							b = k,
							c = a.cookieRead(a.cookieName),
							e, f, g, h, l = new Date;
						a.b == j && (a.b = {});
						if(c && "T" != c) {
							c = c.split("|");
							c[0].match(/^[\-0-9]+$/) && (parseInt(c[0], 10) != d && (b = i), c.shift());
							1 == c.length % 2 && c.pop();
							for(d = 0; d < c.length; d += 2)
								if(e = c[d].split("-"), f = e[0], g = c[d + 1], 1 < e.length ? (h = parseInt(e[1], 10), e = 0 < e[1].indexOf("s")) : (h = 0, e = k), b && (f == I && (g = ""), 0 < h && (h = l.getTime() / 1E3 - 60)), f && g && (a.e(f, g, 1), 0 < h && (a.b["expire" + f] = h + (e ? "s" : ""), l.getTime() >= 1E3 * h || e && !a.cookieRead(a.sessionCookieName)))) a.c || (a.c = {}), a.c[f] = i
						}
						if(!a.a(r) && m.o() && (c = a.cookieRead("s_vi"))) c = c.split("|"), 1 < c.length && 0 <= c[0].indexOf("v1") && (g = c[1], d = g.indexOf("["), 0 <= d && (g = g.substring(0, d)), g && g.match(n.w) && a.e(r, g))
					}
				};
				a._appendVersionTo = function(d) {
					var b = "vVersion|" + a.version,
						c = Boolean(d) ? a._getCookieVersion(d) : null;
					c ? m.jb(c, a.version) && (d = d.replace(n.fa, b)) : d += (d ? "|" : "") + b;
					return d
				};
				a.hb = function() {
					var d = a.ja(),
						b, c;
					for(b in a.b) !Object.prototype[b] && a.b[b] && "expire" != b.substring(0, 6) && (c = a.b[b], d += (d ? "|" : "") + b + (a.b["expire" + b] ? "-" + a.b["expire" + b] : "") + "|" + c);
					d = a._appendVersionTo(d);
					a.cookieWrite(a.cookieName, d, 1)
				};
				a.a = function(d, b) {
					return a.b != j && (b || !a.c || !a.c[d]) ? a.b[d] : j
				};
				a.e = function(d, b, c) {
					a.b == j && (a.b = {});
					a.b[d] = b;
					c || a.hb()
				};
				a.Za = function(d, b) {
					var c = a.a(d, b);
					return c ? c.split("*") : j
				};
				a.gb = function(d, b, c) {
					a.e(d, b ? b.join("*") : "", c)
				};
				a.Wb = function(d, b) {
					var c = a.Za(d, b);
					if(c) {
						var e = {},
							f;
						for(f = 0; f < c.length; f += 2) e[c[f]] = c[f + 1];
						return e
					}
					return j
				};
				a.Yb = function(d, b, c) {
					var e = j,
						f;
					if(b)
						for(f in e = [], b) Object.prototype[f] || (e.push(f), e.push(b[f]));
					a.gb(d, e, c)
				};
				a.j = function(d, b, c) {
					var e = new Date;
					e.setTime(e.getTime() + 1E3 * b);
					a.b == j && (a.b = {});
					a.b["expire" + d] = Math.floor(e.getTime() / 1E3) + (c ? "s" : "");
					0 > b ? (a.c || (a.c = {}), a.c[d] = i) : a.c && (a.c[d] = k);
					c && (a.cookieRead(a.sessionCookieName) || a.cookieWrite(a.sessionCookieName, "1"))
				};
				a.ia = function(a) {
					if(a && ("object" == typeof a && (a = a.d_mid ? a.d_mid : a.visitorID ? a.visitorID : a.id ? a.id : a.uuid ? a.uuid : "" + a), a && (a = a.toUpperCase(), "NOTARGET" == a && (a = u)), !a || a != u && !a.match(n.w))) a = "";
					return a
				};
				a.k = function(d, b) {
					a.Wa(d);
					a.i != j && (a.i[d] = k);
					p.d[d] && (p.d[d].Nb = p.p(), p.J(d));
					y.d[d] && y.Na(d, k);
					if(d == H) {
						y.isClientSideMarketingCloudVisitorID !== i && (y.isClientSideMarketingCloudVisitorID = k);
						var c = a.a(o);
						if(!c || a.overwriteCrossDomainMCIDAndAID) {
							c = "object" == typeof b && b.mid ? b.mid : a.ia(b);
							if(!c) {
								if(a.D) {
									a.getAnalyticsVisitorID(j, k, i);
									return
								}
								c = a.u(0, o)
							}
							a.e(o, c)
						}
						if(!c || c == u) c = "";
						"object" == typeof b && ((b.d_region || b.dcs_region || b.d_blob || b.blob) && a.k(D, b), a.D && b.mid && a.k(E, {
							id: b.id
						}));
						a.t(o, [c])
					}
					if(d == D && "object" == typeof b) {
						c = 604800;
						b.id_sync_ttl != F && b.id_sync_ttl && (c = parseInt(b.id_sync_ttl, 10));
						var e = a.a(A);
						e || ((e = b.d_region) || (e = b.dcs_region), e && (a.j(A, c), a.e(A, e)));
						e || (e = "");
						a.t(A, [e]);
						e = a.a(t);
						if(b.d_blob || b.blob)(e = b.d_blob) || (e = b.blob), a.j(t, c), a.e(t, e);
						e || (e = "");
						a.t(t, [e]);
						!b.error_msg && a.C && a.e(I, a.C)
					}
					if(d == E) {
						c = a.a(r);
						if(!c || a.overwriteCrossDomainMCIDAndAID)(c = a.ia(b)) ? c !== u && a.j(t, -1) : c = u, a.e(r, c);
						if(!c || c == u) c = "";
						a.t(r, [c])
					}
					a.idSyncDisableSyncs ? z.Ea = i : (z.Ea = k, c = {}, c.ibs = b.ibs, c.subdomain = b.subdomain, z.Ib(c));
					if(b === Object(b)) {
						var f;
						a.isAllowed() && (f = a.a(C));
						f || (f = u, b.d_optout && b.d_optout instanceof Array && (f = b.d_optout.join(",")), c = parseInt(b.d_ottl, 10), isNaN(c) && (c = 7200), a.j(C, c, i), a.e(C, f));
						a.t(C, [f])
					}
				};
				a.i = j;
				a.v = function(d, b, c, e, f) {
					var g = "",
						h, k = m.yb(d);
					if(a.isAllowed())
						if(a.f(), g = a.a(d, N[d] === i), (!g || a.c && a.c[d]) && (!a.disableThirdPartyCalls || k)) {
							if(d == o || d == C ? h = H : d == A || d == t ? h = D : d == r && (h = E), h) {
								if(b && (a.i == j || !a.i[h])) a.i == j && (a.i = {}), a.i[h] = i, a.$a(h, b, function(b) {
									a.a(d) || (p.d[h] && (p.d[h].timeout = p.p(), p.d[h].xb = !!b, p.J(h)), b && y.Na(h, i), b = "", d == o ? b = a.u(0, o) : h == D && (b = {
										error_msg: "timeout"
									}), a.k(h, b))
								}, f);
								a.M(d, c);
								if(g) return g;
								b || a.k(h, {
									id: u
								});
								return ""
							}
						} else g || (d === o ? (a.M(d, c), g = a.u(0, o), a.setMarketingCloudVisitorID(g)) : d === r ? (a.M(d, c), g = "", a.setAnalyticsVisitorID(g)) : (g = "", e = i));
					if((d == o || d == r) && g == u) g = "", e = i;
					c && e && a.z(c, [g]);
					return g
				};
				a._setMarketingCloudFields = function(d) {
					a.f();
					a.k(H, d)
				};
				a.setMarketingCloudVisitorID = function(d) {
					a._setMarketingCloudFields(d)
				};
				a.D = k;
				a.getMarketingCloudVisitorID = function(d, b) {
					if(a.isAllowed()) {
						a.marketingCloudServer && 0 > a.marketingCloudServer.indexOf(".demdex.net") && (a.D = i);
						var c = a.B("_setMarketingCloudFields");
						return a.v(o, c.url, d, b, c)
					}
					return ""
				};
				a.bb = function(d) {
					a.getAudienceManagerBlob(d, i)
				};
				l.AuthState = {
					UNKNOWN: 0,
					AUTHENTICATED: 1,
					LOGGED_OUT: 2
				};
				a.A = {};
				a.K = k;
				a.C = "";
				a.setCustomerIDs = function(d) {
					if(a.isAllowed() && d) {
						a.f();
						var b, c;
						for(b in d)
							if(!Object.prototype[b] && (c = d[b]))
								if("object" == typeof c) {
									var e = {};
									c.id && (e.id = c.id);
									c.authState != F && (e.authState = c.authState);
									a.A[b] = e
								} else a.A[b] = {
									id: c
								};
						var d = a.getCustomerIDs(),
							e = a.a(I),
							f = "";
						e || (e = 0);
						for(b in d) Object.prototype[b] || (c = d[b], f += (f ? "|" : "") + b + "|" + (c.id ? c.id : "") + (c.authState ? c.authState : ""));
						a.C = a.ka(f);
						a.C != e && (a.K = i, a.bb(function() {
							a.K = k
						}))
					}
				};
				a.getCustomerIDs = function() {
					a.f();
					var d = {},
						b, c;
					for(b in a.A) Object.prototype[b] || (c = a.A[b], d[b] || (d[b] = {}), c.id && (d[b].id = c.id), d[b].authState = c.authState != F ? c.authState : l.AuthState.UNKNOWN);
					return d
				};
				a._setAnalyticsFields = function(d) {
					a.f();
					a.k(E, d)
				};
				a.setAnalyticsVisitorID = function(d) {
					a._setAnalyticsFields(d)
				};
				a.getAnalyticsVisitorID = function(d, b, c) {
					if(!m.o() && !c) return a.z(d, [""]), "";
					if(a.isAllowed()) {
						var e = "";
						c || (e = a.getMarketingCloudVisitorID(function() {
							a.getAnalyticsVisitorID(d, i)
						}));
						if(e || c) {
							var f = c ? a.marketingCloudServer : a.trackingServer,
								g = "";
							a.loadSSL && (c ? a.marketingCloudServerSecure && (f = a.marketingCloudServerSecure) : a.trackingServerSecure && (f = a.trackingServerSecure));
							var h = {};
							if(f) {
								var f = "http" + (a.loadSSL ? "s" : "") + "://" + f + "/id",
									e = "d_visid_ver\x3d" + a.version + "\x26mcorgid\x3d" + encodeURIComponent(a.marketingCloudOrgID) + (e ? "\x26mid\x3d" + encodeURIComponent(e) : "") + (a.idSyncDisable3rdPartySyncing ? "\x26d_coppa\x3dtrue" : ""),
									j = ["s_c_il", a._in, "_set" + (c ? "MarketingCloud" : "Analytics") + "Fields"],
									g = f + "?" + e + "\x26callback\x3ds_c_il%5B" + a._in + "%5D._set" + (c ? "MarketingCloud" : "Analytics") + "Fields";
								h.m = f + "?" + e;
								h.sa = j
							}
							h.url = g;
							return a.v(c ? o : r, g, d, b, h)
						}
					}
					return ""
				};
				a._setAudienceManagerFields = function(d) {
					a.f();
					a.k(D, d)
				};
				a.B = function(d) {
					var b = a.audienceManagerServer,
						c = "",
						e = a.a(o),
						f = a.a(t, i),
						g = a.a(r),
						g = g && g != u ? "\x26d_cid_ic\x3dAVID%01" + encodeURIComponent(g) : "";
					a.loadSSL && a.audienceManagerServerSecure && (b = a.audienceManagerServerSecure);
					if(b) {
						var c = a.getCustomerIDs(),
							h, j;
						if(c)
							for(h in c) Object.prototype[h] || (j = c[h], g += "\x26d_cid_ic\x3d" + encodeURIComponent(h) + "%01" + encodeURIComponent(j.id ? j.id : "") + (j.authState ? "%01" + j.authState : ""));
						d || (d = "_setAudienceManagerFields");
						b = "http" + (a.loadSSL ? "s" : "") + "://" + b + "/id";
						e = "d_visid_ver\x3d" + a.version + "\x26d_rtbd\x3djson\x26d_ver\x3d2" + (!e && a.D ? "\x26d_verify\x3d1" : "") + "\x26d_orgid\x3d" + encodeURIComponent(a.marketingCloudOrgID) + "\x26d_nsid\x3d" + (a.idSyncContainerID || 0) + (e ? "\x26d_mid\x3d" + encodeURIComponent(e) : "") + (a.idSyncDisable3rdPartySyncing ? "\x26d_coppa\x3dtrue" : "") + (f ? "\x26d_blob\x3d" + encodeURIComponent(f) : "") + g;
						f = ["s_c_il", a._in, d];
						c = b + "?" + e + "\x26d_cb\x3ds_c_il%5B" + a._in + "%5D." + d;
						return {
							url: c,
							m: b + "?" + e,
							sa: f
						}
					}
					return {
						url: c
					}
				};
				a.getAudienceManagerLocationHint = function(d, b) {
					if(a.isAllowed() && a.getMarketingCloudVisitorID(function() {
							a.getAudienceManagerLocationHint(d, i)
						})) {
						var c = a.a(r);
						!c && m.o() && (c = a.getAnalyticsVisitorID(function() {
							a.getAudienceManagerLocationHint(d, i)
						}));
						if(c || !m.o()) return c = a.B(), a.v(A, c.url, d, b, c)
					}
					return ""
				};
				a.getLocationHint = a.getAudienceManagerLocationHint;
				a.getAudienceManagerBlob = function(d, b) {
					if(a.isAllowed() && a.getMarketingCloudVisitorID(function() {
							a.getAudienceManagerBlob(d, i)
						})) {
						var c = a.a(r);
						!c && m.o() && (c = a.getAnalyticsVisitorID(function() {
							a.getAudienceManagerBlob(d, i)
						}));
						if(c || !m.o()) {
							var c = a.B(),
								e = c.url;
							a.K && a.j(t, -1);
							return a.v(t, e, d, b, c)
						}
					}
					return ""
				};
				a._supplementalDataIDCurrent = "";
				a._supplementalDataIDCurrentConsumed = {};
				a._supplementalDataIDLast = "";
				a._supplementalDataIDLastConsumed = {};
				a.getSupplementalDataID = function(d, b) {
					!a._supplementalDataIDCurrent && !b && (a._supplementalDataIDCurrent = a.u(1));
					var c = a._supplementalDataIDCurrent;
					a._supplementalDataIDLast && !a._supplementalDataIDLastConsumed[d] ? (c = a._supplementalDataIDLast, a._supplementalDataIDLastConsumed[d] = i) : c && (a._supplementalDataIDCurrentConsumed[d] && (a._supplementalDataIDLast = a._supplementalDataIDCurrent, a._supplementalDataIDLastConsumed = a._supplementalDataIDCurrentConsumed, a._supplementalDataIDCurrent = c = !b ? a.u(1) : "", a._supplementalDataIDCurrentConsumed = {}), c && (a._supplementalDataIDCurrentConsumed[d] = i));
					return c
				};
				l.OptOut = {
					GLOBAL: "global"
				};
				a.getOptOut = function(d, b) {
					if(a.isAllowed()) {
						var c = a.B("_setMarketingCloudFields");
						return a.v(C, c.url, d, b, c)
					}
					return ""
				};
				a.isOptedOut = function(d, b, c) {
					return a.isAllowed() ? (b || (b = l.OptOut.GLOBAL), (c = a.getOptOut(function(c) {
						a.z(d, [c == l.OptOut.GLOBAL || 0 <= c.indexOf(b)])
					}, c)) ? c == l.OptOut.GLOBAL || 0 <= c.indexOf(b) : j) : k
				};
				a.appendVisitorIDsTo = function(d) {
					var b = n.ba,
						c = B([
							[o, a.a(o)],
							[r, a.a(r)],
							[G, a.marketingCloudOrgID]
						]);
					try {
						return a.s(d, b, c)
					} catch(e) {
						return d
					}
				};
				a.appendSupplementalDataIDTo = function(d, b) {
					b = b || a.getSupplementalDataID(m.sb(), !0);
					if(!b) return d;
					var c = n.ca,
						e;
					e = "SDID\x3d" + encodeURIComponent(b) + "|" + (G + "\x3d" + encodeURIComponent(a.marketingCloudOrgID));
					try {
						return a.s(d, c, e)
					} catch(f) {
						return d
					}
				};
				a.ra = {
					postMessage: function(a, b, c) {
						var e = 1;
						b && (n.r ? c.postMessage(a, b.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : b && (c.location = b.replace(/#.*$/, "") + "#" + +new Date + e++ + "\x26" + a))
					},
					X: function(a, b) {
						var c;
						try {
							if(n.r)
								if(a && (c = function(c) {
										if("string" === typeof b && c.origin !== b || "[object Function]" === Object.prototype.toString.call(b) && !1 === b(c.origin)) return !1;
										a(c)
									}), window.addEventListener) window[a ? "addEventListener" : "removeEventListener"]("message", c, !1);
								else window[a ? "attachEvent" : "detachEvent"]("onmessage", c)
						} catch(e) {}
					}
				};
				var m = {
					O: function() {
						if(v.addEventListener) return function(a, b, c) {
							a.addEventListener(b, function(a) {
								"function" === typeof c && c(a)
							}, k)
						};
						if(v.attachEvent) return function(a, b, c) {
							a.attachEvent("on" + b, function(a) {
								"function" === typeof c && c(a)
							})
						}
					}(),
					map: function(a, b) {
						if(Array.prototype.map) return a.map(b);
						if(void 0 === a || a === j) throw new TypeError;
						var c = Object(a),
							e = c.length >>> 0;
						if("function" !== typeof b) throw new TypeError;
						for(var f = Array(e), g = 0; g < e; g++) g in c && (f[g] = b.call(b, c[g], g, c));
						return f
					},
					za: function(a, b) {
						return this.map(a, function(a) {
							return encodeURIComponent(a)
						}).join(b)
					},
					Fb: function(a) {
						var b = a.indexOf("#");
						return 0 < b ? a.substr(b) : ""
					},
					wb: function(a) {
						var b = a.indexOf("#");
						return 0 < b ? a.substr(0, b) : a
					},
					ib: function(a, b, c) {
						a = a.split("\x26");
						c = c != j ? c : a.length;
						a.splice(c, 0, b);
						return a.join("\x26")
					},
					yb: function(d, b, c) {
						if(d !== r) return k;
						b || (b = a.trackingServer);
						c || (c = a.trackingServerSecure);
						d = a.loadSSL ? c : b;
						return "string" === typeof d && d.length ? 0 > d.indexOf("2o7.net") && 0 > d.indexOf("omtrdc.net") : k
					},
					Ga: function(a) {
						return Boolean(a && a === Object(a))
					},
					zb: function(d, b) {
						return 0 > a._compareVersions(d, b)
					},
					jb: function(d, b) {
						return 0 !== a._compareVersions(d, b)
					},
					Mb: function(a) {
						document.cookie = encodeURIComponent(a) + "\x3d; Path\x3d/; Expires\x3dThu, 01 Jan 1970 00:00:01 GMT;"
					},
					o: function() {
						return !!a.trackingServer || !!a.trackingServerSecure
					},
					Gb: function(a, b) {
						function c(a, d) {
							var e, j, i = a[d];
							if(i && "object" === typeof i)
								for(e in i) Object.prototype.hasOwnProperty.call(i, e) && (j = c(i, e), void 0 !== j ? i[e] = j : delete i[e]);
							return b.call(a, d, i)
						}
						if("object" === typeof JSON && "function" === typeof JSON.parse) return JSON.parse(a, b);
						var e;
						e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
						a = "" + a;
						e.lastIndex = 0;
						e.test(a) && (a = a.replace(e, function(a) {
							return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
						}));
						if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof b ? c({
							"": e
						}, "") : e;
						throw new SyntaxError("JSON.parse");
					},
					Da: function() {
						return Math.round((new Date).getTime() / 1E3)
					},
					Hb: function(a) {
						for(var b = {}, a = a.split("|"), c = 0, e = a.length; c < e; c++) {
							var f = a[c].split("\x3d");
							b[f[0]] = decodeURIComponent(f[1])
						}
						return b
					},
					sb: function(a) {
						for(var a = a || 5, b = ""; a--;) b += "abcdefghijklmnopqrstuvwxyz0123456789" [Math.floor(36 * Math.random())];
						return b
					}
				};
				a.Xb = m;
				a.pa = {
					F: function() {
						var a = "none",
							b = i;
						"undefined" !== typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? a = "XMLHttpRequest" : "undefined" !== typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (b = k), 0 < Object.prototype.toString.call(window.Ob).indexOf("Constructor") && (b = k));
						return {
							G: a,
							$b: b
						}
					}(),
					tb: function() {
						return "none" === this.F.G ? j : new window[this.F.G]
					},
					rb: function(d, b, c) {
						var e = this;
						b && (d.U = b);
						try {
							var f = this.tb();
							f.open("get", d.m + "\x26ts\x3d" + (new Date).getTime(), i);
							"XMLHttpRequest" === this.F.G && (f.withCredentials = i, f.timeout = a.loadTimeout, f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), f.onreadystatechange = function() {
								if(4 === this.readyState && 200 === this.status) a: {
									var a;
									try {
										if(a = JSON.parse(this.responseText), a !== Object(a)) {
											e.n(d, j, "Response is not JSON");
											break a
										}
									} catch(b) {
										e.n(d, b, "Error parsing response as JSON");
										break a
									}
									try {
										for(var c = d.sa, f = window, g = 0; g < c.length; g++) f = f[c[g]];
										f(a)
									} catch(i) {
										e.n(d, i, "Error forming callback function")
									}
								}
							});
							f.onerror = function(a) {
								e.n(d, a, "onerror")
							};
							f.ontimeout = function(a) {
								e.n(d, a, "ontimeout")
							};
							f.send();
							p.d[c] = {
								requestStart: p.p(),
								url: d.m,
								xa: f.timeout,
								va: p.Ca(),
								wa: 1
							};
							a.na.La.push(d.m)
						} catch(g) {
							this.n(d, g, "try-catch")
						}
					},
					n: function(d, b, c) {
						a.CORSErrors.push({
							ac: d,
							error: b,
							description: c
						});
						d.U && ("ontimeout" === c ? d.U(i) : d.U(k))
					}
				};
				var z = {
					Ua: 3E4,
					da: 649,
					Pa: k,
					id: j,
					W: [],
					S: j,
					Ba: function(a) {
						if("string" === typeof a) return a = a.split("/"), a[0] + "//" + a[2]
					},
					g: j,
					url: j,
					ub: function() {
						var d = "http://fast.",
							b = "?d_nsid\x3d" + a.idSyncContainerID + "#" + encodeURIComponent(v.location.href);
						this.g || (this.g = "nosubdomainreturned");
						a.loadSSL && (d = a.idSyncSSLUseAkamai ? "https://fast." : "https://");
						d = d + this.g + ".demdex.net/dest5.html" + b;
						this.S = this.Ba(d);
						this.id = "destination_publishing_iframe_" + this.g + "_" + a.idSyncContainerID;
						return d
					},
					mb: function() {
						var d = "?d_nsid\x3d" + a.idSyncContainerID + "#" + encodeURIComponent(v.location.href);
						"string" === typeof a.L && a.L.length && (this.id = "destination_publishing_iframe_" + (new Date).getTime() + "_" + a.idSyncContainerID, this.S = this.Ba(a.L), this.url = a.L + d)
					},
					Ea: j,
					ya: k,
					Z: k,
					H: j,
					pc: j,
					Eb: j,
					qc: j,
					Y: k,
					I: [],
					Cb: [],
					Db: [],
					Ha: n.r ? 15 : 100,
					T: [],
					Ab: [],
					ta: i,
					Ka: k,
					Ja: function() {
						return !a.idSyncDisable3rdPartySyncing && (this.ya || a.Tb) && this.g && "nosubdomainreturned" !== this.g && this.url && !this.Z
					},
					Q: function() {
						function a() {
							e = document.createElement("iframe");
							e.sandbox = "allow-scripts allow-same-origin";
							e.title = "Adobe ID Syncing iFrame";
							e.id = c.id;
							e.style.cssText = "display: none; width: 0; height: 0;";
							e.src = c.url;
							c.Eb = i;
							b();
							document.body.appendChild(e)
						}

						function b() {
							m.O(e, "load", function() {
								e.className = "aamIframeLoaded";
								c.H = i;
								c.q()
							})
						}
						this.Z = i;
						var c = this,
							e = document.getElementById(this.id);
						e ? "IFRAME" !== e.nodeName ? (this.id += "_2", a()) : "aamIframeLoaded" !== e.className ? b() : (this.H = i, this.Fa = e, this.q()) : a();
						this.Fa = e
					},
					q: function(d) {
						var b = this;
						d === Object(d) && (this.T.push(d), this.Jb(d));
						if((this.Ka || !n.r || this.H) && this.T.length) this.J(this.T.shift()), this.q();
						!a.idSyncDisableSyncs && this.H && this.I.length && !this.Y && (this.Pa || (this.Pa = i, setTimeout(function() {
							b.Ha = n.r ? 15 : 150
						}, this.Ua)), this.Y = i, this.Ma())
					},
					Jb: function(a) {
						var b, c, e;
						if((b = a.ibs) && b instanceof Array && (c = b.length))
							for(a = 0; a < c; a++) e = b[a], e.syncOnPage && this.ua(e, "", "syncOnPage")
					},
					J: function(a) {
						var b = encodeURIComponent,
							c, e, f, g, h;
						if((c = a.ibs) && c instanceof Array && (e = c.length))
							for(f = 0; f < e; f++) g = c[f], h = [b("ibs"), b(g.id || ""), b(g.tag || ""), m.za(g.url || [], ","), b(g.ttl || ""), "", "", g.fireURLSync ? "true" : "false"],
								g.syncOnPage || (this.ta ? this.P(h.join("|")) : g.fireURLSync && this.ua(g, h.join("|")));
						this.Ab.push(a)
					},
					ua: function(d, b, c) {
						var e = (c = "syncOnPage" === c ? i : k) ? K : M;
						a.f();
						var f = a.a(e),
							g = k,
							h = k,
							j = Math.ceil((new Date).getTime() / n.ea);
						f ? (f = f.split("*"), h = this.Kb(f, d.id, j), g = h.pb, h = h.qb, (!g || !h) && this.Aa(c, d, b, f, e, j)) : (f = [], this.Aa(c, d, b, f, e, j))
					},
					Kb: function(a, b, c) {
						var e = k,
							f = k,
							g, h, j;
						for(h = 0; h < a.length; h++) g = a[h], j = parseInt(g.split("-")[1], 10), g.match("^" + b + "-") ? (e = i, c < j ? f = i : (a.splice(h, 1), h--)) : c >= j && (a.splice(h, 1), h--);
						return {
							pb: e,
							qb: f
						}
					},
					Bb: function(a) {
						if(a.join("*").length > this.da)
							for(a.sort(function(a, c) {
									return parseInt(a.split("-")[1], 10) - parseInt(c.split("-")[1], 10)
								}); a.join("*").length > this.da;) a.shift()
					},
					Aa: function(d, b, c, e, f, g) {
						var h = this;
						if(d) {
							if("img" === b.tag) {
								var d = b.url,
									c = a.loadSSL ? "https:" : "http:",
									i, k, l;
								for(e = 0, i = d.length; e < i; e++) {
									k = d[e];
									l = /^\/\//.test(k);
									var n = new Image;
									m.O(n, "load", function(b, c, d, e) {
										return function() {
											h.W[b] = j;
											a.f();
											var g = a.a(f),
												i = [];
											if(g) {
												var g = g.split("*"),
													k, l, m;
												for(k = 0, l = g.length; k < l; k++) m = g[k], m.match("^" + c.id + "-") || i.push(m)
											}
											h.Oa(i, c, d, e)
										}
									}(this.W.length, b, f, g));
									n.src = (l ? c : "") + k;
									this.W.push(n)
								}
							}
						} else this.P(c), this.Oa(e, b, f, g)
					},
					P: function(d) {
						var b = encodeURIComponent;
						this.I.push((a.Ub ? b("---destpub-debug---") : b("---destpub---")) + d)
					},
					Oa: function(d, b, c, e) {
						d.push(b.id + "-" + (e + Math.ceil(b.ttl / 60 / 24)));
						this.Bb(d);
						a.e(c, d.join("*"))
					},
					Ma: function() {
						var d = this,
							b;
						this.I.length ? (b = this.I.shift(), a.ra.postMessage(b, this.url, this.Fa.contentWindow), this.Cb.push(b), setTimeout(function() {
							d.Ma()
						}, this.Ha)) : this.Y = k
					},
					X: function(a) {
						var b = /^---destpub-to-parent---/;
						"string" === typeof a && b.test(a) && (b = a.replace(b, "").split("|"), "canSetThirdPartyCookies" === b[0] && (this.ta = "true" === b[1] ? i : k, this.Ka = i, this.q()), this.Db.push(a))
					},
					Ib: function(d) {
						if(this.url === j || d.subdomain && "nosubdomainreturned" === this.g) this.g = "string" === typeof a.qa && a.qa.length ? a.qa : d.subdomain || "", this.url = this.ub();
						d.ibs instanceof Array && d.ibs.length && (this.ya = i);
						this.Ja() && (a.idSyncAttachIframeOnWindowLoad ? (l.aa || "complete" === v.readyState || "loaded" === v.readyState) && this.Q() : this.kb());
						"function" === typeof a.idSyncIDCallResult ? a.idSyncIDCallResult(d) : this.q(d);
						"function" === typeof a.idSyncAfterIDCallResult && a.idSyncAfterIDCallResult(d)
					},
					lb: function(d, b) {
						return a.Vb || !d || b - d > n.Ra
					},
					kb: function() {
						function a() {
							b.Z || (document.body ? b.Q() : setTimeout(a, 30))
						}
						var b = this;
						a()
					}
				};
				a.Sb = z;
				a.timeoutMetricsLog = [];
				var p = {
					ob: window.performance && window.performance.timing ? 1 : 0,
					Ia: window.performance && window.performance.timing ? window.performance.timing : j,
					$: j,
					R: j,
					d: {},
					V: [],
					send: function(d) {
						if(a.takeTimeoutMetrics && d === Object(d)) {
							var b = [],
								c = encodeURIComponent,
								e;
							for(e in d) d.hasOwnProperty(e) && b.push(c(e) + "\x3d" + c(d[e]));
							d = "http" + (a.loadSSL ? "s" : "") + "://dpm.demdex.net/event?d_visid_ver\x3d" + a.version + "\x26d_visid_stg_timeout\x3d" + a.loadTimeout + "\x26" + b.join("\x26") + "\x26d_orgid\x3d" + c(a.marketingCloudOrgID) + "\x26d_timingapi\x3d" + this.ob + "\x26d_winload\x3d" + this.vb() + "\x26d_ld\x3d" + this.p();
							(new Image).src = d;
							a.timeoutMetricsLog.push(d)
						}
					},
					vb: function() {
						this.R === j && (this.R = this.Ia ? this.$ - this.Ia.navigationStart : this.$ - l.nb);
						return this.R
					},
					p: function() {
						return(new Date).getTime()
					},
					J: function(a) {
						var b = this.d[a],
							c = {};
						c.d_visid_stg_timeout_captured = b.xa;
						c.d_visid_cors = b.wa;
						c.d_fieldgroup = a;
						c.d_settimeout_overriden = b.va;
						b.timeout ? b.xb ? (c.d_visid_timedout = 1, c.d_visid_timeout = b.timeout - b.requestStart, c.d_visid_response = -1) : (c.d_visid_timedout = "n/a", c.d_visid_timeout = "n/a", c.d_visid_response = "n/a") : (c.d_visid_timedout = 0, c.d_visid_timeout = -1, c.d_visid_response = b.Nb - b.requestStart);
						c.d_visid_url = b.url;
						l.aa ? this.send(c) : this.V.push(c);
						delete this.d[a]
					},
					Lb: function() {
						for(var a = 0, b = this.V.length; a < b; a++) this.send(this.V[a])
					},
					Ca: function() {
						return "function" === typeof setTimeout.toString ? -1 < setTimeout.toString().indexOf("[native code]") ? 0 : 1 : -1
					}
				};
				a.Zb = p;
				var y = {
					isClientSideMarketingCloudVisitorID: j,
					MCIDCallTimedOut: j,
					AnalyticsIDCallTimedOut: j,
					AAMIDCallTimedOut: j,
					d: {},
					Na: function(a, b) {
						switch(a) {
							case H:
								b === k ? this.MCIDCallTimedOut !== i && (this.MCIDCallTimedOut = k) : this.MCIDCallTimedOut = b;
								break;
							case E:
								b === k ? this.AnalyticsIDCallTimedOut !== i && (this.AnalyticsIDCallTimedOut = k) : this.AnalyticsIDCallTimedOut = b;
								break;
							case D:
								b === k ? this.AAMIDCallTimedOut !== i && (this.AAMIDCallTimedOut = k) : this.AAMIDCallTimedOut = b
						}
					}
				};
				a.isClientSideMarketingCloudVisitorID = function() {
					return y.isClientSideMarketingCloudVisitorID
				};
				a.MCIDCallTimedOut = function() {
					return y.MCIDCallTimedOut
				};
				a.AnalyticsIDCallTimedOut = function() {
					return y.AnalyticsIDCallTimedOut
				};
				a.AAMIDCallTimedOut = function() {
					return y.AAMIDCallTimedOut
				};
				a.idSyncGetOnPageSyncInfo = function() {
					a.f();
					return a.a(K)
				};
				a.idSyncByURL = function(d) {
					var b, c = d || {};
					b = c.minutesToLive;
					var e = "";
					a.idSyncDisableSyncs && (e = e ? e : "Error: id syncs have been disabled");
					if("string" !== typeof c.dpid || !c.dpid.length) e = e ? e : "Error: config.dpid is empty";
					if("string" !== typeof c.url || !c.url.length) e = e ? e : "Error: config.url is empty";
					if("undefined" === typeof b) b = 20160;
					else if(b = parseInt(b, 10), isNaN(b) || 0 >= b) e = e ? e : "Error: config.minutesToLive needs to be a positive number";
					b = {
						error: e,
						rc: b
					};
					if(b.error) return b.error;
					var e = d.url,
						f = encodeURIComponent,
						c = z,
						g, e = e.replace(/^https:/, "").replace(/^http:/, "");
					g = m.za(["", d.dpid, d.dpuuid || ""], ",");
					d = ["ibs", f(d.dpid), "img", f(e), b.ttl, "", g];
					c.P(d.join("|"));
					c.q();
					return "Successfully queued"
				};
				a.idSyncByDataSource = function(d) {
					if(d !== Object(d) || "string" !== typeof d.dpuuid || !d.dpuuid.length) return "Error: config or config.dpuuid is empty";
					d.url = "//dpm.demdex.net/ibs:dpid\x3d" + d.dpid + "\x26dpuuid\x3d" + d.dpuuid;
					return a.idSyncByURL(d)
				};
				a._compareVersions = function(a, b) {
					if(a === b) return 0;
					var c = a.toString().split("."),
						e = b.toString().split("."),
						f;
					a: {
						f = c.concat(e);
						for(var g = 0, h = f.length; g < h; g++)
							if(!n.Ta.test(f[g])) {
								f = k;
								break a
							}
						f = i
					}
					if(!f) return NaN;
					for(; c.length < e.length;) c.push("0");
					for(; e.length < c.length;) e.push("0");
					a: {
						for(f = 0; f < c.length; f++) {
							g = parseInt(c[f], 10);
							h = parseInt(e[f], 10);
							if(g > h) {
								c = 1;
								break a
							}
							if(h > g) {
								c = -1;
								break a
							}
						}
						c = 0
					}
					return c
				};
				a._getCookieVersion = function(d) {
					d = d || a.cookieRead(a.cookieName);
					return(d = n.fa.exec(d)) && 1 < d.length ? d[1] : null
				};
				a._resetAmcvCookie = function(d) {
					var b = a._getCookieVersion();
					(!b || m.zb(b, d)) && m.Mb(a.cookieName)
				};
				0 > q.indexOf("@") && (q += "@AdobeOrg");
				a.marketingCloudOrgID = q;
				a.cookieName = "AMCV_" + q;
				a.sessionCookieName = "AMCVS_" + q;
				a.cookieDomain = a.Ya();
				a.cookieDomain == s.location.hostname && (a.cookieDomain = "");
				a.loadSSL = 0 <= s.location.protocol.toLowerCase().indexOf("https");
				a.loadTimeout = 3E4;
				a.CORSErrors = [];
				a.marketingCloudServer = a.audienceManagerServer = "dpm.demdex.net";
				var N = {};
				N[A] = i;
				N[t] = i;
				if(w && "object" == typeof w) {
					for(var J in w) !Object.prototype[J] && (a[J] = w[J]);
					a.idSyncContainerID = a.idSyncContainerID || 0;
					a.resetBeforeVersion && a._resetAmcvCookie(a.resetBeforeVersion);
					a.ga();
					a.ha();
					a.f();
					J = a.a(L);
					var O = Math.ceil((new Date).getTime() / n.ea);
					!a.idSyncDisableSyncs && z.lb(J, O) && (a.j(t, -1), a.e(L, O));
					a.getMarketingCloudVisitorID();
					a.getAudienceManagerLocationHint();
					a.getAudienceManagerBlob();
					a.cb(a.serverState)
				} else a.ga(), a.ha();
				if(!a.idSyncDisableSyncs) {
					z.mb();
					m.O(window, "load", function() {
						l.aa = i;
						p.$ = p.p();
						p.Lb();
						var a = z;
						a.Ja() && a.Q()
					});
					try {
						a.ra.X(function(a) {
							z.X(a.data)
						}, z.S)
					} catch(P) {}
				}
			};
			Visitor.getInstance = function(q, w) {
				var x, B = window.s_c_il,
					a;
				0 > q.indexOf("@") && (q += "@AdobeOrg");
				if(B)
					for(a = 0; a < B.length; a++)
						if((x = B[a]) && "Visitor" == x._c && x.marketingCloudOrgID == q) return x;
				return new Visitor(q, w)
			};
			(function() {
				function q() {
					w.aa = x
				}
				var w = window.Visitor,
					x = w.Va,
					B = w.Sa;
				x || (x = !0);
				B || (B = !1);
				window.addEventListener ? window.addEventListener("load", q) : window.attachEvent && window.attachEvent("onload", q);
				w.nb = (new Date).getTime()
			})();
			window.visitor = Visitor.getInstance("4C3B0C3755C3822E7F000101@AdobeOrg", visitorObj)
		}, 3390888, 468243);
		Bootstrapper.getServerComponent(Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined);
	}
})();