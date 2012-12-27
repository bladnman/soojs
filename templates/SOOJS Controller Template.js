function ClassNameHere(delegateRef) {
	var my 				= this;
	var delegate 		= delegateRef || null;


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 P R O T O C O L
	 *	 (implement these)
	 */
	var delegateCallbacks 	= {

		aControllerCallback1 			: function () {
			if(delegate && delegate.aControllerCallback1) {
				delegate.aControllerCallback1();
			}
		}

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 I N I T I A L I Z E
	 */
	var initialize 			= function () {

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

		sayHello 		: function () {
			
		}

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *		I N T E R N A L
	 *		F U N C T I O N S
	 */
	var internals = {

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 C A L L B A C K
	 *	 H A N D L E R S
	 */
	var callbackHandlers = {

		objectIAmDelegateOfCallback 		: function () {
		}

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



}