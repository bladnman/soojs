var SOOJS = SOOJS || {};
SOOJS.util = {
	/**
	 *
	 * @param delegate - {Object} the object to call this callback on
	 * @param callbackName - {String} the name of the callback
	 * @return {*} will return whatever the callback itself returns
	 */
	executeCallback : function(delegate, callbackName) {

		if (delegate && callbackName) {
			var callback 	= null;
			var trueArgs	= Array.prototype.slice.call(arguments);

			// peel off our 2 arguments
			trueArgs.shift();
			trueArgs.shift();

			if ( delegate[callbackName] ) {
				callback = delegate[callbackName];
			}

			else if (delegate.callbackHandlers && delegate.callbackHandlers[callbackName]) {
				callback = delegate.callbackHandlers[callbackName];
			}

			if (callback) {
				return callback.apply(arguments.callee.caller, trueArgs);
			}
		}

		return false;
	},

	getObjectForExternalization : function(object) {
		return (typeof object === 'undefined' || object === null) ? {} : object;
	}
};