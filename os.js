// Date time picker
//
function callDateTimePicker(datetime, callback)
{
    var options = {
        date: datetime ? datetime : new Date(),
        mode: 'date',
        minDate: (new Date()).valueOf()
    };

    datePicker.show(options, function(date)
    {
        var options = {
            date: datetime ? datetime : new Date(),
            mode: 'time'
        };

        datePicker.show(options, function(time)
        {
            callback(
            {
                date: date,
                time: time
            });
        });
    });
}

// Register pushwoosh
//
function registerPushWoosh()
{
    var pushNotification = window.plugins.pushNotification;

    // Initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID"
    //
    pushNotification.onDeviceReady(
    {
        projectid : config.pushwooshProjectId,
        appid     : config.pushwooshwAppId,
        pw_appid  : config.pushwooshwAppId
    });

    // Register for pushes
    //
    pushNotification.registerDevice(
    // Success
    //
    function(status)
    {
        localStorage.setItem('pushToken', status);
        h.addDevice();
    },
    // Failure
    //
    function(status)
    {

    });
}

// Pushwoosh Listener
//
function initPushWooshListener()
{
    var pushNotification = window.plugins.pushNotification;

    registerPushWoosh();

    // Set up the event handler
    //
    document.addEventListener('push-notification', function(event)
    {
        var notification = event.notification,
            model_type   = notification.userdata.model_type,
            model_id     = notification.userdata.model_id;

        if (notification.foreground)
        {
            h.nativeConfirm(notification.title, 'Incoming Notification', ['Check it out', 'Not now'], function(i)
            {
                if (i === 1)
                {
                    route();
                }
            });
        }
        else
        {
            route();
        }

        pushNotification.stopGeoPushes();

        // Route
        //
        function route()
        {
            // Check if we got the neccessary information
            //
            if (model_id && model_type)
            {
                $.nextPage(model_type.toLowerCase(), {id: model_id}, 1);
            }
            // Route to notifications screen
            //
            else
            {
                $.nextPage('notifications', localStorage.getObj('notifications'), 17);
            }

            // Clear history so they go back to newsfeed
            //
            setTimeout(function()
            {
                $.clearHistory();

            }, 600);
        }
    });
}

// iOS html5 validation shim
//
function html5Validate()
{
    return false;
}


// OS specific JS
//
function oS()
{
    // Remap back button
    //
    document.addEventListener('backbutton', function()
    {
        switch ($.getCurrentPage().id)
        {
            case 'title':
                navigator.app.exitApp();
                break;

            case 'login':
                $.nextPage('title',{}, 2);
                break;

            case 'newsfeed':

                // Close the overlay
                //
                if (document.getElementById('post_form_overlay').classList.contains('open'))
                {
                    $.post_button.callback();
                    $.post_button.svg.toggle();
                }
                // Close menu
                //
                else if (document.getElementById('hc_sidemenu').classList.contains('open'))
                {
                    $.menu_svg.toggle();
                    h.toggleNewsfeedMenu();
                }
                else
                {

                    // Ask user if he wants to quit
                    //
                    h.nativeConfirm('Are you sure you would like to exit HC?', 'Whoooaaa nelly', ['Yes', 'Cancel'], function(i)
                    {
                        if (i === 1)
                        {
                            navigator.app.exitApp();
                        }
                    });
                }
                break;

            case 'event':

                // Check for payment popup
                //
                if ($.payment_popup && $.payment_popup.isOpen())
                {
                    $.payment_popup.toggleOverlay({close: true});
                }
                else
                {
                    $.back(2);
                }
                break;

            case 'postform-event':
            case 'postform-status':

                // Rinks search popup
                //
                if ($.rink_popup && $.rink_popup.isOpen())
                {
                    $.rink_popup.toggle({close: true});
                }
                else
                {
                    $.back(4);
                }
                break;


            default:
                $.back(2);
                break;
        }
    }, false);
}

// Checks if app is installed then launches program
//
function openIntent(obj, callback)
{
    var app_available = function(url, package_name)
    {
        appAvailability.check(package_name,
            // Success
            //
            function()
            {
                window.plugins.webintent.startActivity(
                {
                    action: window.plugins.webintent.ACTION_VIEW,
                    url: url

                }, function() {}, function()
                {
                    callback();
                });
            },
            // Failure
            //
            function()
            {
                callback();
            });
    };

    // Check for google maps
    //
    if (obj.model_type == 'location')
    {
        // Check for google maps
        app_available("http://maps.google.com/maps?saddr=&daddr=" + obj.rink.latitude + "," + obj.rink.longitude + "&mode=driving&sensor=true", 'com.google.android.apps.maps');
    }
    else
    {
        callback();
    }

}