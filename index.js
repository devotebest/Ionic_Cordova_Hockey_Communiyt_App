/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	//
	initialize: function ()
	{
		this.bindEvents();

		var that = this;

		// Check if we need to clear local storage
		//
		if ( ! localStorage.getItem('localstorage_update') || localStorage.getItem('localstorage_update') !== config.localstorage_update )
		{
			localStorage.clear();
			localStorage.setItem('localstorage_update', config.localstorage_update);
		}

		// Check for current user to switch to games list
		//
		if ( localStorage.getObj('current_user') )
		{
			// Set global var for session and change to games list
			//
			current_user = localStorage.getObj('current_user');

			// Activate the hc framework on the newsfeed
			//
			$.activate({current_page: document.getElementById('newsfeed')});

			// Set top color for ios
			//
			if (config.os === 'ios') document.getElementsByTagName('HTML')[0].style.backgroundColor = '#0B8843';
		}
		// User is not signed in
		//
		else
		{
			// Activate the hc framework on the newsfeed
			//
			$.activate({current_page: document.getElementById('title')});

			// Set top color for ios
			//
			if (config.os === 'ios') document.getElementsByTagName('HTML')[0].style.backgroundColor = '#ffffff';
		}
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function ()
	{
		var that = this,
			doc  = document;

		// Set these before the keyboard comes up
		//
		config.windowHeight = window.innerHeight;
		config.windowWidth  = window.innerWidth;

		// App events
		//
		if ( config.os === 'test_browser' )
		{
			// Delay for browser to let templates load
			//
			setTimeout(function ()
			{
				that.onDeviceReady();
			}, 1000);
		}
		else
		{
			doc.addEventListener('deviceready', that.onDeviceReady, false);
			doc.addEventListener('offline', that.offlineDevice, false);
			doc.addEventListener('online', that.onlineDevice, false);
		}
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function ()
	{
		log('deviceready');

		// OS specific
		//
		oS();

		// Analytics
		//
		analytics.startTrackerWithId(config.analytics);

		// Prepare payment shiz (paypal)
		//
		var onPrepareRender = function ()
		{
			log('Paypal is ready for action');
		},
		onPayPalMobileInit = function ()
		{
			PayPalMobile.prepareToRender(config.paypal_environment, configuration(), onPrepareRender);
		},
		configuration = function ()
		{
			var config = new PayPalConfiguration({merchantName: "Hockey Community", merchantPrivacyPolicyURL: "https://hockey-community.com/page/privacy", merchantUserAgreementURL: "https://hockey-community.com/page/tos"});
			return config;
		};

		PayPalMobile.init(config.clientIDs, onPayPalMobileInit);

		// Pushwoosh
		//
		initPushWooshListener();
		h.addDevice();
	},
	// Update the app's default language
	//
	updateLanguage: function(language)
	{
		localStorage.setItem('default_language',language);
		moment.locale(language);
	},
	// Device goes online
	//
	onlineDevice: function ()
	{

	},
	// Device goes offline
	//
	offlineDevice: function ()
	{

	}
};