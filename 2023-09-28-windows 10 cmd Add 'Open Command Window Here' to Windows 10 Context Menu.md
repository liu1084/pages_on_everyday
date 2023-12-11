## windows 10 cmd: Add 'Open Command Window Here' to Windows 10 Context Menu

> https://www.itprotoday.com/windows-10/add-open-command-window-here-windows-10-context-menu

Microsoft has hidden the command prompt from the [Power User](https://www.itprotoday.com/windows-78/q-why-are-my-windows-power-users-group-privileges-different-windows-vista-and-later-my) menu (Windows key + X), file menu for file explorer, and the extended or right-click Windows 10 context menu (Shift + Right-click). Here's how to bring back the option to launch the Windows 10 "Open command window here" prompt from the right-click Windows 10 context menu.

**Adding ‘Open command window here’ Option to the Windows 10 Context Menu of a Folder**

**Step One:** To enable the Windows 10 open command prompt here, first press Windows key and + R from the keyboard to open the Run command. Type regedit and then hit enter from the keyboard to open the [registry](http://www.itprotoday.com/management-mobility/editing-registry).

**Step Two:** Go to the following path:

HKEY_CLASSES_ROOT\Directory\shell\cmd

**Step Three:** Right-click the cmd key. Scroll to [Permissions ](http://www.itprotoday.com/management-mobility/understand-permissions-needed-run-remote-powershell)and then click it.

**Step Four:** Click Advanced.

**Step Five:** Click the Change link.

**Step Six:** Type your user account name and click ‘Check Names’ to verify it. Click OK when you are done.

**Step Seven:** Check ‘Replace owner on subcontainers and objects’. Click Apply and then OK.

**Step Eight:** In ‘Permissions for cmd’ window, select the Administrator account. Check Allow for full control option. Click Apply and then OK.

**Step Nine:** Inside the cmd key (right window), right click HideBasedOnVelocityId and then click Rename.

**Step Ten:** Rename the DWORD from HideBasedOnVelocityId to ShowBasedOnVelocityId, then hit Enter from the keyboard.

You are done. When you press shift from the keyboard and then right-click on any folder, you will have the ‘Open command window here’ option on the Windows 10 Context Menu.

**Adding ‘Open command window here’ Option to the Context Menu of Background**

Here are the few steps you need to take:

**Step One:** Press Windows key + R simultaneously to open the Run command. Type regedit and hit enter from the keyboard to open the registry.

**Step Two:** Go to the following path:

HKEY_CLASSES_ROOT\Directory\Background\shell\cmd

**Step Three:** Right-click the cmd key and then click Permissions.

**Step Four:** Click Advanced.

**Step Five:** Click the change link on top of the window in front of owner option.

**Step Six:** Type your user account name and click ‘Check Names’ to verify it. Click OK when you are done.

**Step Seven:** Check ‘Replace owner on subcontainers and objects’ option. Click Apply and then OK.

**Step Eight:** In permissions window, choose the administrator user. Check Allow for Full Control option, click Apply and then OK.

**Step Nine:** Inside the cmd key (right window), right-click the HideBasedOnVelocityId DWORD and then click Rename.

**Step Ten:** Change the DWORD name from HideBasedOnVelocityId to ShowBasedOnVelocityId and press Enter from the keyboard.

That’s all for adding the WIndows 10 [open command prompt](https://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/). When you press shift and right-click anywhere on your windows background, you will have an option of ‘Open command window here’ as shown in the following screenshot from [Windows 10](http://www.itprotoday.com/windows-10/how-use-speech-dictation-windows-10).