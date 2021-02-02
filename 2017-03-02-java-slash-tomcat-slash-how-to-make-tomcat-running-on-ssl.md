---
layout: post
title: "java/tomcat/How to make tomcat running on SSL?"
date: 2017-03-02 09:28:03 +0800
comments: true
categories: 
---


How to configure Tomcat to support SSL or https
By mkyong | December 14, 2010 | Viewed : 254,021 times +1,334 pv/w

A guide to show you how to configure Tomcat 6.0 to support SSL or https connection.

1. Generate Keystore
First, uses “keytool” command to create a self-signed certificate. During the keystore creation process, you need to assign a password and fill in the certificate’s detail.

$Tomcat\bin>keytool -genkey -alias mkyong -keyalg RSA -keystore c:\mkyongkeystore
Enter keystore password:
Re-enter new password:
What is your first and last name?
  [Unknown]:  yong mook kim
What is the name of your organizational unit?
  //omitted to save space
  [no]:  yes

Enter key password for <mkyong>
        (RETURN if same as keystore password):
Re-enter new password:

$Tomcat\bin>
Here, you just created a certificate named “mkyongkeystore“, which locate at “c:\“.

Certificate Details
You can use same “keytool” command to list the existing certificate’s detail
$Tomcat\bin>keytool -list -keystore c:\mkyongkeystore
Enter keystore password:

Keystore type: JKS
Keystore provider: SUN

Your keystore contains 1 entry

mkyong, 14 Disember 2010, PrivateKeyEntry,
Certificate fingerprint (MD5): C8:DD:A1:AF:9F:55:A0:7F:6E:98:10:DE:8C:63:1B:A5

$Tomcat\bin>

 
2. Connector in server.xml
Next, locate your Tomcat’s server configuration file at $Tomcat\conf\server.xml, modify it by adding a connector element to support for SSL or https connection.

File : $Tomcat\conf\server.xml

//...
<!-- Define a SSL HTTP/1.1 Connector on port 8443
        This connector uses the JSSE configuration, when using APR, the
        connector should be using the OpenSSL style configuration
        described in the APR documentation -->

<Connector port="8443" protocol="HTTP/1.1" SSLEnabled="true"
              maxThreads="150" scheme="https" secure="true"
              clientAuth="false" sslProtocol="TLS"
	       keystoreFile="c:\mkyongkeystore"
	       keystorePass="password" />
 //...
Note
keystorePass="password" is the password you assigned to your keystore via “keytool” command.

 
3. Done
Saved it and restart Tomcat, access to https://localhost:8443/
