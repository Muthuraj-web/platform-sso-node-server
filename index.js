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
			<key>PayloadContent</key>
			<dict>
				<key>AllowAllAppsAccess</key>
				<true/>
				<key>CertificateRenewalTimeInterval</key>
				<integer>14</integer>
				<key>Challenge</key>
				<string>ONGL5lsm3DixYi0Bu9V_Z396dCgzAa_Cu7TDrUx3CWw</string>
				<key>Key Type</key>
				<string>RSA</string>
				<key>Key Usage</key>
				<integer>1</integer>
				<key>KeyIsExtractable</key>
				<false/>
				<key>Keysize</key>
				<integer>2048</integer>
				<key>Name</key>
				<string>SCEP Server Name</string>
				<key>Subject</key>
				<array>
					<array>
						<array>
							<string>CN</string>
							<string>%ComputerName% managementAttestation %HardwareUUID%</string>
						</array>
					</array>
				</array>
				<key>URL</key>
				<string>https://trial-5957156.okta.com/pki/7D821A2E96C64F65BAB23F2C098629BA00D1B2E8/scep/rac23q9ipfbw5WThW698</string>
			</dict>
			<key>PayloadDescription</key>
			<string></string>
			<key>PayloadDisplayName</key>
			<string>SCEP (CA-OKTAPreview)</string>
			<key>PayloadEnabled</key>
			<true/>
			<key>PayloadIdentifier</key>
			<string>FB7C3BE5-4B3B-4C92-B5D8-D8081237AADE</string>
			<key>PayloadOrganization</key>
			<string>State of California - Office of Digital Innovation</string>
			<key>PayloadType</key>
			<string>com.apple.security.scep</string>
			<key>PayloadUUID</key>
			<string>1234556</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
		<dict>
			<key>Configuration</key>
			<array>
				<dict>
					<key>ApplicationIdentifier</key>
					<string>B7F62B65BN.com.okta.mobile</string>
					<key>AssociatedDomains</key>
					<array>
						<string>authsrv:trial-5957156.okta.com?mode=managed</string>
					</array>
					<key>EnableDirectDownloads</key>
					<true/>
				</dict>
				<dict>
					<key>ApplicationIdentifier</key>
					<string>B7F62B65BN.com.okta.mobile.auth-service-extension</string>
					<key>AssociatedDomains</key>
					<array>
						<string>authsrv:trial-5957156.okta.com?mode=managed</string>
					</array>
					<key>EnableDirectDownloads</key>
					<true/>
				</dict>
			</array>
			<key>PayloadDisplayName</key>
			<string>Associated Domains #1</string>
			<key>PayloadIdentifier</key>
			<string>com.apple.associated-domains.0AD77FAA-6D40-4C66-A7FE-C9A61871507F</string>
			<key>PayloadType</key>
			<string>com.apple.associated-domains</string>
			<key>PayloadUUID</key>
			<string>0AD77FAA-6D40-4C66-A7FE-C9A61871507F</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
		<dict>
			<key>AuthenticationMethod</key>
			<string>Password</string>
			<key>ExtensionIdentifier</key>
			<string>com.okta.mobile.auth-service-extension</string>
			<key>PayloadDisplayName</key>
			<string>Single Sign-On Extensions Payload</string>
			<key>PayloadIdentifier</key>
			<string>B05C79FC-6F87-498F-B17C-3E35107C3CED</string>
			<key>PayloadOrganization</key>
			<string>JAMF Software</string>
			<key>PayloadType</key>
			<string>com.apple.extensiblesso</string>
			<key>PayloadUUID</key>
			<string>B05C79FC-6F87-498F-B17C-3E35107C3CED</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>PlatformSSO</key>
			<dict>
				<key>AccountDisplayName</key>
				<string>Okta Preview</string>
				<key>AdministratorGroups</key>
				<array>
					<string>Admin Group</string>
				</array>
				<key>AllowDeviceIdentifiersInAttestation</key>
				<true/>
				<key>AuthenticationMethod</key>
				<string>Password</string>
				<key>EnableAuthorization</key>
				<true/>
				<key>EnableCreateFirstUserDuringSetup</key>
				<true/>
				<key>EnableCreateUserAtLogin</key>
				<true/>
				<key>EnableRegistrationDuringSetup</key>
				<true/>
				<key>FileVaultPolicy</key>
				<array>
					<string>AttemptAuthentication</string>
				</array>
				<key>LoginPolicy</key>
				<array>
					<string>AttemptAuthentication</string>
				</array>
				<key>NewUserAuthenticationMethods</key>
				<array>
					<string>Password</string>
				</array>
				<key>NewUserAuthorizationMode</key>
				<string>Temporary</string>
				<key>NonPlatformSSOAccounts</key>
				<array>
					<string>odiitadmin</string>
				</array>
				<key>TokenToUserMapping</key>
				<dict>
					<key>AccountName</key>
					<string>macOSAccountUsername</string>
					<key>FullName</key>
					<string>macOSAccountFullName</string>
				</dict>
				<key>UnlockPolicy</key>
				<array>
					<string>AttemptAuthentication</string>
				</array>
				<key>UseSharedDeviceKeys</key>
				<true/>
				<key>UserAuthorizationMode</key>
				<string>Standard</string>
			</dict>
			<key>RegistrationToken</key>
			<string>any</string>
			<key>TeamIdentifier</key>
			<string>B7F62B65BN</string>
			<key>Type</key>
			<string>Redirect</string>
			<key>URLs</key>
			<array>
				<string>https://trial-5957156.okta.com/device-access/api/v1/nonce</string>
				<string>https://trial-5957156.okta.com/oauth2/v1/token</string>
			</array>
		</dict>
		<dict>
			<key>PayloadContent</key>
			<dict>
				<key>com.okta.mobile</key>
				<dict>
					<key>Forced</key>
					<array>
						<dict>
							<key>mcx_preference_settings</key>
							<dict>
								<key>OktaVerify.LaunchOptions</key>
								<string>HideMainWindow</string>
								<key>OktaVerify.OrgUrl</key>
								<string>trial-5957156.okta.com</string>
								<key>OktaVerify.UserPrincipalName</key>
								<string>%HardwareUUID%</string>
							</dict>
						</dict>
					</array>
				</dict>
			</dict>
			<key>PayloadDisplayName</key>
			<string>Custom Settings</string>
			<key>PayloadIdentifier</key>
			<string>A55BE7C7-8E28-4453-9B6B-EB285AF415B1</string>
			<key>PayloadOrganization</key>
			<string>JAMF Software</string>
			<key>PayloadType</key>
			<string>com.apple.ManagedClient.preferences</string>
			<key>PayloadUUID</key>
			<string>A55BE7C7-8E28-4453-9B6B-EB285AF415B1</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
		<dict>
			<key>PayloadContent</key>
			<dict>
				<key>com.okta.mobile.auth-service-extension</key>
				<dict>
					<key>Forced</key>
					<array>
						<dict>
							<key>mcx_preference_settings</key>
							<dict>
								<key>OktaVerify.OrgUrl</key>
								<string>trial-5957156.okta.com</string>
								<key>OktaVerify.PasswordSyncClientID</key>
								<string>0oaygjzu4zLrvwnIR697</string>
								<key>OktaVerify.UserPrincipalName</key>
								<string>%HardwareUUID%</string>
								<key>PlatformSSO.ProtocolVersion</key>
								<string>2.0</string>
							</dict>
						</dict>
					</array>
				</dict>
			</dict>
			<key>PayloadDisplayName</key>
			<string>Custom Settings</string>
			<key>PayloadIdentifier</key>
			<string>26039503-D959-4240-BA21-ADAFCF252882</string>
			<key>PayloadOrganization</key>
			<string>JAMF Software</string>
			<key>PayloadType</key>
			<string>com.apple.ManagedClient.preferences</string>
			<key>PayloadUUID</key>
			<string>26039503-D959-4240-BA21-ADAFCF252882</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
		<dict>
			<key>PayloadContent</key>
			<dict>
				<key>com.apple.preference.security</key>
				<dict>
					<key>Forced</key>
					<array>
						<dict>
							<key>mcx_preference_settings</key>
							<dict>
								<key>dontAllowPasswordResetUI</key>
								<true/>
							</dict>
						</dict>
					</array>
				</dict>
			</dict>
			<key>PayloadDisplayName</key>
			<string>Custom Settings</string>
			<key>PayloadIdentifier</key>
			<string>31B38398-0CEE-475B-8B43-F3BCC8651294</string>
			<key>PayloadOrganization</key>
			<string>JAMF Software</string>
			<key>PayloadType</key>
			<string>com.apple.ManagedClient.preferences</string>
			<key>PayloadUUID</key>
			<string>31B38398-0CEE-475B-8B43-F3BCC8651294</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
	</array>
	<key>PayloadDescription</key>
	<string>https://help.okta.com/oie/en-us/content/topics/identity-engine/devices/okta-ca-static-scep-macos-jamf.htm</string>
	<key>PayloadDisplayName</key>
	<string>Security | Okta | Platform SSO | JSON</string>
	<key>PayloadEnabled</key>
	<true/>
	<key>PayloadIdentifier</key>
	<string>B8E9A271-ABF1-48DA-9BEB-123456789</string>
	<key>PayloadOrganization</key>
	<string>ORG</string>
	<key>PayloadRemovalDisallowed</key>
	<true/>
	<key>PayloadScope</key>
	<string>System</string>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>B8E9A271-ABF1-48DA-9BEB-123456789</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
</dict>
</plist>
`;

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
                <string>https://trial-5957156.okta.com/artifacts/OKTA_VERIFY_MACOS/9.54.1/OktaVerify-9.54.1-5838-ebd8af7.pkg</string>
            </dict>
        </array>
        <key>metadata</key>
        <dict>
            <key>bundle-identifier</key>
            <string>com.okta.mobile</string>
            <key>kind</key>
            <string>software</string>
            <key>title</key>
            <string>Okta Verify Custom Package</string>
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
