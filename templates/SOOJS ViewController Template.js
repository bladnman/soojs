function ${NAME}(delegateRef, inViewId) {
	var my 				= this;
	var delegate 		= delegateRef || null;
	var rootViewId		= inViewId;
	var view            = null;

	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 P R O T O C O L
	 *	 (implement these)
	 */
	var delegateCallbacks 	= {
		mainViewWillShow 			: function () {
			if(delegate && delegate.mainViewWillShow) {
				delegate.mainViewWillShow();
			}
		},

		mainViewDidShow 			: function () {
			if(delegate && delegate.mainViewDidShow) {
				delegate.mainViewDidShow();
			}
		}
	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 I N I T I A L I Z E
	 */
	var initialize 			= function () {
		view				= objects.getRootViewObject();
		internals.attachUserActionHandlers();
	};



	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 V I E W
	 *	 W O R K E R S
	 */
	var options 	= {
		debug				: false
	};

	var viewIds 	= {
	};

	var classes 	= {
		saveButtonClass		: "someCSSClassName"
	};

	var objects 	= {
		getRootViewObject 	: function () {
			return $("#" + rootViewId);
		},

		getSaveButton		: function () {
			return view.find("." + classes.saveButtonClass).first();
		}
	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 R E Q U E S T S
	 */
	var requests = {
		show 		: function () {
			animations.showFromTop();
		}
	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 U S E R
	 *   A C T I O N S
	 */
	var userActions = {
//		saveButtonPressed 	: function () {
//			internals.saveData();
//		}
	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 A N I M A T I O N S
	 */
	var animations = {
		showFromTop 			: function (duration) {

			delegateCallbacks.mainViewWillShow();
			setTimeout(animations.showAniCompleted, duration);
		},

		showAniCompleted 		: function () {
			delegateCallbacks.mainViewDidShow();
		}
	};

	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 D R A W E R S
	 */
	var drawers = {
//		showSaveButton 		: function () {
//			object.getSaveButton().show();
//		}
	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *		I N T E R N A L
	 *		F U N C T I O N S
	 */
	var internals = {
//		saveData	 				: function () {
//
//		},

		attachUserActionHandlers 	: function () {
			// SAVE PRESS
			//objects.getSaveButton().bind("click", userActions.saveButtonPressed);
		}
	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 C A L L B A C K
	 *	 H A N D L E R S
	 */
	var callbackHandlers = {
//		objectIAmDelegateOfCallback 		: function () {
//		}
	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 D E F I N E
	 *	 P U B L I C
	 */
	my.requests 			= requests || null;
	my.options 				= options || null;
	my.callbackHandlers 	= callbackHandlers || null;
	my.delegateCallbacks 	= delegateCallbacks || null;


	// ---++---     ---++---     ---++---     ---++---     ---++---
	// * RUN UPON SETUP
	initialize();
	return my;


}