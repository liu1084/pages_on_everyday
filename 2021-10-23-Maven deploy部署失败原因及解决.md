## Maven deploy部署失败原因及解决



If an artifact fails to deploy from Maven (or other build tools) make note of the HTTP status code returned. Then check below to see what the code means, and how to diagnose and fix the issue.

#### Code 400 - Method not Allowed

Nexus has received your deployment request but cannot process it because it is invalid. There are two common causes for this.

The most common reason is that you are trying to re-deploy an artifact into a repository which does not allow redeployment. Check the “deployment policy” in your hosted repository configuration. If it is set to “disable redeploy” it means you cannot redeploy an artifact which is already in the repository. Note that this is the default setting for Nexus release repositories, since redeploying release artifacts is a maven anti-pattern.

The second common reason for this code is that you are trying to deploy a release artifact into a snapshot repository, or vice versa.

#### Code 401 - Unauthorized

Either no login credentials were sent with the request, or login credentials which are invalid were sent.  Checking the “authorization and authentication” system feed in the Nexus UI can help narrow this down. If credentials were sent there will be an entry in the feed.

If no credentials were sent this is likely due to a mis-match between the id in your pom’s distributionManagement section and your settings.xml’s server section that holds the login credentials.

#### Code 402 - Payment Required

This error is returned if you are using Nexus Professional and your license has expired.

#### Code 403 - Forbidden

The login credentials sent were valid, but the user does not have permission to upload to the repository. [Go](http://lib.csdn.net/base/go) to “administration/security” in the Nexus UI, and bring up the user (or the user’s role if they are mapped via an external role mapping) and examine the role tree to see what repository privileges they have been assigned. A user will need create and update privileges for a repository to be able to deploy into it.

#### Code 404 - Not Found

The repository URL is invalid. Note that this code is returned after the artifact upload has completed, so it can be a bit confusing.

#### Code 502 - Reverse Proxy Timeout

You have a reverse proxy in front of Nexus (such as Nginx or Apache+mod_proxy) and the pending deployment request had no activity for the period of time specified in the reverse proxy’s timeout setting.  This could be due to the timeout being set to a very low value, the Nexus server being under very high load, or a bug in Nexus. If you need help diagnosing this contact support.

#### Code 503 - Service unavailable

This is not thrown by Nexus but instead your reverse proxy.

-   Is Nexus running? Check that Nexus is running.
-   Nexus is not redirecting correctly due to its force base url or jetty.xml settings. Review what has changed to make this stop working.
-   another server has the same IP as the Nexus host and your reverse proxy is confused. This is a network issue that your IT staff may need to help you solve.