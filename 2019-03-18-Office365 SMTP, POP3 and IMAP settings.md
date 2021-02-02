### Office365 SMTP, POP3 and IMAP settings

Here are the correct settings you should use to connect HESK to Office365.com

» Email sending

To send emails using Office365 server enter these details:

SMTP Host: smtp.office365.com
SMTP Port: 587
SSL Protocol: OFF
TLS Protocol: ON
SMTP Username: (your Office365 username)
SMTP Password: (your Office365 password)

Also make sure that your:

"From" email in HESK settings (General tab) is set to your Office365 email address
"From" name in HESK settings (General tab) is NOT set to an email address - Microsoft security policies will reject sending emails if the From name is an email address
 

» POP3 fetching

To fetch mail from Office365 server enter these details:

POP3 Host: outlook.office365.com
POP3 Port: 995
TLS Protocol: ON
POP3 Username: (your Office365 username)
POP3 Password: (your Office365 password)

 

» IMAP fetching

To fetch mail from Office365 server using IMAP protocol instead, enter these details:

IMAP Host: outlook.office365.com
IMAP Port: 993
Encryption: SSL
IMAP Username: (your Office365 username)
IMAP Password: (your Office365 password)

 

» Error messages

Connection timed out
Could not connect to...
Testing connection, this can take a while... 

This usually means required ports are blocked on your server in the firewall.

Contact your hosting company to verify and ask them to unblock required ports (587, 995 and/or 993) to allow TCP connections.
 

Password error: Logon failure: unknown user name or bad password.
Too many login failures

Office365 doesn't recognize your username or your password is incorrect. Double-check both the username and password. Passwords are CaSe SeNSiTiVe.


554 5.2.0 STOREDRV.Submission.Exception:SendAsDeniedException.MapiExceptionSendAsDenied

Make sure the "From" email (HESK settings > General tab) is set to the SMTP email address and that the "From" name is NOT set to an email address