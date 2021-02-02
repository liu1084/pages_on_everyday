---
layout: post
title: "java/How to execute shell command from Java"
date: 2017-03-09 10:05:53 +0800
comments: true
categories: 
---

In Java, you can use `Runtime.getRuntime().exec` to execute external shell command 

```java
p = Runtime.getRuntime().exec("host -t a " + domain);
p.waitFor();

BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));

String line = "";
while ((line = reader.readLine())!= null) {
	sb.append(line + "\n");
}

```

# PING example

Classical example to execute the ping command and print out its output.

```java
package com.mkyong.shell;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ExecuteShellComand {

	public static void main(String[] args) {

		ExecuteShellComand obj = new ExecuteShellComand();

		String domainName = "google.com";

		//in mac oxs
		String command = "ping -c 3 " + domainName;

		//in windows
		//String command = "ping -n 3 " + domainName;

		String output = obj.executeCommand(command);

		System.out.println(output);

	}

	private String executeCommand(String command) {

		StringBuffer output = new StringBuffer();

		Process p;
		try {
			p = Runtime.getRuntime().exec(command);
			p.waitFor();
			BufferedReader reader =
                            new BufferedReader(new InputStreamReader(p.getInputStream()));

                        String line = "";
			while ((line = reader.readLine())!= null) {
				output.append(line + "\n");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return output.toString();

	}

}

```


# HOST Example

Example to execute shell command host -t a google.com to get all the IP addresses that attached to google.com. Later, we use regular expression to grab all the IP addresses and display it.

P.S “host” command is available in *nix system only.

```java
package com.mkyong.shell;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExecuteShellComand {

	private static final String IPADDRESS_PATTERN = "([01]?\\d\\d?|2[0-4]\\d|25[0-5])"
		+ "\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])"
		+ "\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])"
		+ "\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])";

	private static Pattern pattern = Pattern.compile(IPADDRESS_PATTERN);
	private static Matcher matcher;

	public static void main(String[] args) {

		ExecuteShellComand obj = new ExecuteShellComand();

		String domainName = "google.com";
		String command = "host -t a " + domainName;

		String output = obj.executeCommand(command);

		//System.out.println(output);

		List<String> list = obj.getIpAddress(output);

		if (list.size() > 0) {
			System.out.printf("%s has address : %n", domainName);
			for (String ip : list) {
				System.out.println(ip);
			}
		} else {
			System.out.printf("%s has NO address. %n", domainName);
		}

	}

	private String executeCommand(String command) {

		StringBuffer output = new StringBuffer();

		Process p;
		try {
			p = Runtime.getRuntime().exec(command);
			//Method waitFor() will make the current thread to wait until the external program finish and return the exit value to the waited thread.
			p.waitFor();
			BufferedReader reader =
                           new BufferedReader(new InputStreamReader(p.getInputStream()));

			String line = "";
			while ((line = reader.readLine())!= null) {
				output.append(line + "\n");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return output.toString();

	}

	public List<String> getIpAddress(String msg) {

		List<String> ipList = new ArrayList<String>();

		if (msg == null || msg.equals(""))
			return ipList;

		matcher = pattern.matcher(msg);
		while (matcher.find()) {
			ipList.add(matcher.group(0));
		}

		return ipList;
	}
}
```