## SSH server gives "userauth_pubkey: key type ssh-rsa not in PubkeyAcceptedAlgorithms [preauth\]" when connecting with Putty

```shell


# A simple solution.

# Add this line in /etc/ssh/sshd_config.

PubkeyAcceptedAlgorithms +ssh-rsa

# Afterwards, restart the sshd service to make the new settings come into effect.

# sudo systemctl restart sshd


```

