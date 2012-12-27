function ClassNameHere() {

	var my 				= this;
	my.pubVar			= "";

	// - - - - - - - - - - - - -
	// delete everything below for
	// the simplest of objects


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 I N I T I A L I Z E
	 *	 (main execution called when instantiated)
	 */
	var initialize 			= function () {

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 R E Q U E S T S
	 */
	var requests = {

		isValid					: function() {
			return true;
		}

	};


	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *		I N T E R N A L
	 *		F U N C T I O N S
	 */
	var internals = {
		
	};



	/* ---++---     ---++---     ---++---     ---++---     ---++---
	 *	 D E F I N E
	 *	 P U B L I C
	 */
	my.requests 			= requests || null;


	// ---++---     ---++---     ---++---     ---++---     ---++---
	// * RUN UPON SETUP
	initialize();

}