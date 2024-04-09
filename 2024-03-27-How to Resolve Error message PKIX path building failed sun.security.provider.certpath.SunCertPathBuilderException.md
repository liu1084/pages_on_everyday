## How to Resolve Error message "PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target"

### Issue

The following error message appears in the unified agent logs and the scan finishes with exit code SERVER_FAILURE (-5).

```plaintext
PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```

### Cause

This is a common error message reported by the Java Virtual Machine. This occurs when the Java environment does not have a proper CA certificate path to the HTTPS server to verify that it is a valid website. This is a java specific error and is not reported by other technologies.

### Solution

##### Creating the certificate

First you will need to create a certificate. To do that follow these steps:

1. Open an HTTPS connection to the URL (i.e https://www.example.com/, https://saas.whitesourcesoftware.com/ in the browser
2. Press F12 to access the browser’s Developer Tools
3. Go to the ‘Security’ tab
4. Click ‘View certificate’
5. In the Certificate details window, go to the ‘Details’ tab
6. Click ‘Export’
7. Make sure the file format is: ‘Base64-encoded ASCII, single certificate (*.pem, *.crt)’
8. Name the file: **Windows:** ‘whitesourcesoftware.com.crt’ (**Mac OS:** ‘whitesourcesoftware.com.cer’)

##### Adding the certificate to your keystore

Note:

The location of JAVA and or the JDK can vary depending on your initial install location. If you have JDK installed, your JAVA_HOME variable is set to the jdk* directory, and not the jre*. Please use the same Java version that is accessed when you run the “java” command.

1. Once the certificate file has been created, open a command-line window.
   Navigate to your Java installation directory. Make sure that this is the same version of java that is being accessed when running the “java” command otherwise the certificate will not be recognized. Once there, then navigate to lib → security under this directory.

2. Make sure that the cacerts keystore is in this directory.

3. Execute the following command to import the certificate into the cacerts keystore:
   For **Windows:**

   ```plaintext
   keytool -import -noprompt -trustcacerts -alias http://www.example.com -file "C:\Path\to\www.example.com.crt" -keystore cacerts
   ```

   For **Mac OS:**

   ```plaintext
   keytool -import -noprompt -trustcacerts -alias http://www.example.com -file "C:\Path\to\www.example.com.cer" -keystore cacerts
   ```

Note:

You will be prompted to provide the cacerts keystore password, The default password for cacerts is 'changeit'.

Note:

If the system cannot find the keytool command, then you may need to use a JDK version, and you have the JDK binary path added to your PATH environment variable.