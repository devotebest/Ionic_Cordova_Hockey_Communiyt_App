// Use a an object for variables so as not to pollute the global namespace
//
var config = {

	// Env
	//
	environment: "production",

	// Analytics key
	//
	analytics: "UA-19286809-1",

	// Paypal
	//
	clientIDs: {
		"PayPalEnvironmentProduction" : "AWlcSBAJw277R7KwDDcAxdxDURy2yFEYF4MAIF1NTJOjWKozUPUwr6Im-X_E",
		"PayPalEnvironmentSandbox"    : "AeYcoBCx7AucC5L11myF5faGb-XOeJt67OqCxEBiZY54YwGBXEiaOoJZPG5R"
    },
	paypal_environment: "PayPalEnvironmentProduction",
	// paypal_environment: "PayPalEnvironmentSandbox",
	// paypal_environment: "PayPalEnvironmentNoNetwork",

	// Pushwoosh
	//
	pushwooshwAppId: "539FB-AD35F",
	pushwooshProjectId: "1053070365891",

	// Global variables
	//
	app_version: "4.05",
	api_version: "2.01",

	// Change the value only if we want reset the local storage
	//
    localstorage_update: "4.00"
}

// Environment vars
//
if (config.environment === "production")
{
	config.base = "https://hockey-community.com/";
}
else if (config.environment === "staging")
{
	config.base = "https://staginghc.herokuapp.com/";
}
else if (config.environment === "development")
{
	config.base = "http://192.168.0.46:8081/";
}

config.api = config.base + "api/v2/";