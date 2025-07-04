const express = require('express');
const app = express();

const port = process.env.PORT || 9002;
const serverDomain = process.env.SERVER_DOMAIN || "localhost";
const httpProtocol = process.env.HTTP_PROTOCOL || 'http';

const platformssopasscodeprofile = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>AuthenticationMethod</key>
			<string>Password</string>
			<key>ExtensionData</key>
			<dict>
				<key>AppAllowList</key>
				<string>com.apple.,com.microsoft.</string>
				<key>browser_sso_disable_mfa</key>
				<integer>1</integer>
				<key>browser_sso_interaction_enabled</key>
				<integer>1</integer>
			</dict>
			<key>ExtensionIdentifier</key>
			<string>com.microsoft.CompanyPortalMac.ssoextension</string>
			<key>PayloadDisplayName</key>
			<string>Extensible Single Sign-On</string>
			<key>PayloadIdentifier</key>
			<string>com.apple.extensiblesso.26FA5437-C5A8-44DB-8A2C-438365D689DF</string>
			<key>PayloadType</key>
			<string>com.apple.extensiblesso</string>
			<key>PayloadUUID</key>
			<string>26FA5437-C5A8-44DB-8A2C-438365D689DF</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PlatformSSO</key>
			<dict>
				<key>AuthenticationMethod</key>
				<string>Password</string>
				<key>EnableCreateUserAtLogin</key>
				<true/>
				<key>EnableCreateFirstUserDuringSetup</key>
				<true/>
				<key>UseSharedDeviceKeys</key>
				<true/>
				<key>UserAuthorizationMode</key>
				<string>Admin</string>
				<key>NewUserAuthorizationMode</key>
				<string>Admin</string>
				<key>TokenToUserMapping</key>
				<dict>
					<key>AccountName</key>
					<string>preferred_username</string>
					<key>FullName</key>
					<string>preferred_username</string>
				</dict>
				<key>NewUserAuthenticationMethods</key>
				<array>
					<string>Password</string>
				</array>
			</dict>
			<key>RegistrationToken</key>
			<string>{{DEVICEREGISTRATION}}</string>
			<key>TeamIdentifier</key>
			<string>UBF8T346G9</string>
			<key>Type</key>
			<string>Redirect</string>
			<key>URLs</key>
			<array>
				<string>https://login.microsoftonline.com</string>
				<string>https://login.microsoft.com</string>
				<string>https://sts.windows.net</string>
				<string>https://login.partner.microsoftonline.cn</string>
				<string>https://login.chinacloudapi.cn</string>
				<string>https://login.microsoftonline.us</string>
				<string>https://login-us.microsoftonline.com</string>
			</array>
		</dict>
	</array>
	<key>PayloadDisplayName</key>
	<string>Platform SSO - Password Sync</string>
	<key>PayloadIdentifier</key>
	<string>mdm.manageengine.com</string>
	<key>PayloadScope</key>
	<string>System</string>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>BFFE3ECD-24B4-478B-B5D1-B1CA16853848</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
</dict>
</plist>`;

const platformssosecureenclaveprofile = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>AuthenticationMethod</key>
			<string>UserSecureEnclaveKey</string>
			<key>ExtensionData</key>
			<dict>
				<key>AppPrefixAllowList</key>
				<string>com.apple.,com.microsoft.</string>
				<key>Enable_SSO_On_All_ManagedApps</key>
				<integer>1</integer>
				<key>browser_sso_disable_mfa</key>
				<integer>1</integer>
				<key>browser_sso_interaction_enabled</key>
				<integer>1</integer>
			</dict>
			<key>ExtensionIdentifier</key>
			<string>com.microsoft.CompanyPortalMac.ssoextension</string>
			<key>PayloadDisplayName</key>
			<string>Platform SSO - Entra -  Secure Enclave Flow</string>
			<key>PayloadIdentifier</key>
			<string>com.apple.extensiblesso.F48A4B7A-ABAE-409E-8066-B79D58A6C140</string>
			<key>PayloadType</key>
			<string>com.apple.extensiblesso</string>
			<key>PayloadUUID</key>
			<string>F48A4B7A-ABAE-409E-8066-B79D58A6C140</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PlatformSSO</key>
			<dict>
				<key>AuthenticationMethod</key>
				<string>UserSecureEnclaveKey</string>
				<key>UseSharedDeviceKeys</key>
				<true/>
			</dict>
			<key>RegistrationToken</key>
			<string>{{DEVICEREGISTRATION}}</string>
			<key>TeamIdentifier</key>
			<string>UBF8T346G9</string>
			<key>Type</key>
			<string>Redirect</string>
			<key>URLs</key>
			<array>
				<string>https://login.microsoft.com</string>
				<string>https://sts.windows.net</string>
				<string>https://login.partner.microsoftonline.cn</string>
				<string>https://login.chinacloudapi.cn</string>
				<string>https://login.microsoftonline.us</string>
				<string>https://login-us.microsoftonline.com</string>
				<string>https://login.microsoftonline.com</string>
			</array>
		</dict>
	</array>
	<key>PayloadDisplayName</key>
	<string>Platform SSO - Entra -  Secure Enclave Flow</string>
	<key>PayloadIdentifier</key>
	<string>3213D4B8-7376-4144-94EE-2CABB078856D</string>
	<key>PayloadScope</key>
	<string>System</string>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>3213D4B8-7376-4144-94EE-2CABB078856D</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
	<key>TargetDeviceType</key>
	<integer>5</integer>
</dict>
</plist>`


const companyportalmanifest = `<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
    <dict>
        <key>assets</key>
        <array>
            <dict>
                <key>kind</key>
                <string>software-package</string>
                <key>url</key>
                <string>https://officecdn.microsoft.com/pr/C1297A47-86C4-4C1F-97FA-950631F94777/MacAutoupdate/CompanyPortal-Installer.pkg</string>
            </dict>
        </array>
        <key>metadata</key>
        <dict>
            <key>bundle-identifier</key>
            <string>com.microsoft.CompanyPortalMac</string>
            <key>kind</key>
            <string>software</string>
            <key>title</key>
            <string>Microsoft Company Portal</string>
        </dict>
    </dict>
    </array>
</dict>
</plist>
`
const landingpage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sample Login Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
    }
    .login-container {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 300px;
    }
    .login-container h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .login-container label {
      display: block;
      margin-bottom: 0.5rem;
    }
    .login-container input[type="text"],
    .login-container input[type="password"] {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .login-container button {
      width: 100%;
      padding: 0.7rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .login-container button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" required />
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
  <script>
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault()
      window.location.href = "/authResponse";
    });
  </script>
</body>
</html>
`;

app.use(express.json());

app.get("/profile", (req, res) => {

	const pssoProfileType = req.query.psso_profile_type;
	console.log("Got GET Request for /profile for type: " + pssoProfileType);

	const inputStream = pssoProfileType == "1"
		? Buffer.from(platformssopasscodeprofile)
		: Buffer.from(platformssosecureenclaveprofile);

	const responseHeaders = {
		"Content-Type": "application/xml",
		"Content-Length":inputStream.length
	};
	
  	res.writeHead(200, responseHeaders);
	res.write(inputStream);
})

app.get("/manifest", (req, res) => {
    console.log("Got GET Request for /manifest");
	const inputStream = Buffer.from(companyportalmanifest);
	
	const responseHeaders = {
		"Content-Type": "application/xml",
		"Content-Length":inputStream.length
	};
	
  	res.writeHead(200, responseHeaders);
	res.write(inputStream);
})

app.get("/auth", (req, res) => {
	try {
		console.log("Got GET Request for /auth");
		res.status(200);
		res.type('text/html');
		res.send(landingpage);
	} catch (err) {
		console.error('Error reading file:', err);
	}
})

app.get('/authResponse', (req, res) => {
  	const responseHeaders = {
    		"Location": "apple-remotemanagement-user-login://authentication-results?access-token=dXNlci1pZGVudGl0eQ",
  	};
  	res.set(responseHeaders).status(308).end();
});

app.get("/redirectedDEPJSON", (req, res) => {
	const pssoJSON={
					"code": "com.apple.psso.required",
  					"description": "MDM Server requires the user to authenticate with Identity Provider - BY MEMDM",
  					"message": "The MDM server requires you to authenticate with your Identity Provider. Please follow the instructions provided by your organization to complete the authentication process - BY MEMDM",
  					"details": {
    					"Package": {
      						"ManifestURL": `${httpProtocol}://${serverDomain}:${port}/manifest`
    					},
    				"ProfileURL": `${httpProtocol}://${serverDomain}:${port}/profile?psso_profile_type=1`,
    				"AuthURL": `${httpProtocol}://${serverDomain}:${port}/auth`
  					}}
	const inputStream = Buffer.from(JSON.stringify(pssoJSON));
	
	const responseHeaders = {
		"Content-Type": "application/json",
		"Content-Length":inputStream.length
	};
	
  	res.writeHead(403, responseHeaders);
	res.write(inputStream);
	res.end();
})

app.get("/redirectedDEPXML", (req, res) => {
	const pssoXML =`<?xml version="1.0" encoding="UTF-8"?>
					<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
					<plist version="1.0">
					<dict>
						<key>code</key>
						<string>com.apple.psso.required</string>
						<key>details</key>
						<dict>
							<key>ProfileURL</key>
							<string>${httpProtocol}://${serverDomain}:${port}/profile?psso_profile_type=1</string>
							<key>Package</key>
							<dict>
								<key>ManifestURL</key>
								<string>${httpProtocol}://${serverDomain}:${port}/manifest</string>
							</dict>
							<key>AuthURL</key>
							<string>${httpProtocol}://${serverDomain}:${port}/auth</string>
						</dict>
					</dict>
					</plist>`
	const inputStream = Buffer.from(pssoXML);
	
	const responseHeaders = {
		"Content-Type": "application/xml",
		"Content-Length":inputStream.length
	};
	
  	res.writeHead(403, responseHeaders);
	res.write(inputStream);
	res.end();
})


app.listen(port, () => console.log(`Listening to port ${port}`));
