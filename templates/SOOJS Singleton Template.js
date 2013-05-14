function ${NAME}(observer) {

	// - - - - - - - - - - - - - - - - -
	// S I N G L E T O N
	var singletonId		= "SOOJS Singleton Template-Singleton-Object";
	if ( ! window["Singletons"]) window["Singletons"] = {};
	if ( window["Singletons"][singletonId] ) {
		var singleton = window["Singletons"][singletonId];
        if (observer) {
		    singleton.requests.addObserver(observer);
        }
		return singleton;
	} else {
		window["Singletons"][singletonId] = this;
	}
	// - - - - - - - - - - - - - - - - -
	
	var my 				= this;
	var observers		= [];


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 P R O T O C O L
	 *	 (implement these)
	 */
	var observerCallbacks 	= {

//		gameCollectionSaysHello 			: function (title, message) {
//			observerWork.tellAllObservers("gameCollectionSaysHello", title, message);
//		}

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 I N I T I A L I Z E
	 */
	var initialize 			= function () {
		requests.addObserver(observer);
	};



	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 O P T I O N S
	 */
	var options 	= {

		debug				: false

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 R E Q U E S T S
	 */
	var requests = {

		addObserver 		: function (observer) {
			observerWork.addObserver(observer);
		},

		removeObserver 		: function (observer) {
			observerWork.removeObserver(observer);
		}

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *		I N T E R N A L
	 *		F U N C T I O N S
	 */
	var internals = {

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *		O B S E R V E R
	 *		W O R K
	 */
	var observerWork = {
		addObserver 		: function (observer) {
			if ( ! observerWork.doesObserverExist(observer) ) {
			    observers.push(observer);
			}
		},

		removeObserver 		: function (observer) {
			observers.popElement(observer);
		},

		doesObserverExist	: function (observer) {
			return observers.contains(observer);
		},

		tellAllObservers : function(callbackName) {

			for (var i = 0; i < observers.length; i++) {
				var observer = observers[i];
				if (observer && callbackName) {
					var callback 	= null;
					var trueArgs	= Array.prototype.slice.call(arguments);

					// peel off our callbackName argument
					trueArgs.shift();

					if ( observer[callbackName] ) {
						callback = observer[callbackName];
					}

					else if (observer.callbackHandlers && observer.callbackHandlers[callbackName]) {
						callback = observer.callbackHandlers[callbackName];
					}

					if (callback) {
						callback.apply(arguments.callee.caller, trueArgs);
					}
				}
			}
		}
	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 C A L L B A C K
	 *	 H A N D L E R S
	 */
	var callbackHandlers = {


	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 D E F I N E
	 *	 P U B L I C
	 */
	my.requests 			= requests || null;
	my.options 				= options || null;
	my.callbackHandlers 	= callbackHandlers || null;


	// ---++---     ---++---     ---++---     ---++---     ---++---
	// * RUN UPON SETUP
	initialize();
    return my;


}