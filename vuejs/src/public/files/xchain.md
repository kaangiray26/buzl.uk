# xchain
Encrypt Files with Shared Keys

![](../project_images/xchain.png)

## About
xchain encrypts files and splits them into multiple keys, so that the original file can only be reproduced if all keys are gathered together.

The way it works is that the xchain creates cryptographically secure random bit sequences and uses the XOR operation to create a block of sequences. So, the original file becomes the result, when the block of sequences are XOR-ed together.

There is also a graphical user interface for xchain, which is built GTK+.

Check it out here:
* [GitHub](https://github.com/kaangiray26/xchain-pub)
* [F-Droid](https://f-droid.org/packages/geddit.buzl.uk)
* [GitHub Releases](https://github.com/kaangiray26/geddit-app/releases)