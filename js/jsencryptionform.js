var encoded = null;

function encryptFormText() {
	if (document.encForm.key.value.length == 0) {
		alert("Please specify a Key with which to Encrypt the Text.");
		return;
	}
	if(document.encForm.text2enc.value.length == 0) {
		alert("No text to Encrypt!  Please enter or paste into the Plain Text field.");
		return;
	}
	encoded = GibberishAES.enc(document.encForm.text2enc.value, document.encForm.key.value);
	document.encForm.text2dec.value = encoded;
};

function decryptFormText() {
	if (document.encForm.key.value.length == 0) {
		alert("Please specify a Key with which to Decrypt the Text.");
		return;
	}
	if(document.encForm.text2dec.value.length == 0) {
		alert("No text to Decrypt!  Please enter or paste into the Encrypted Text field.");
		return;
	}
	try {
		var dec = GibberishAES.dec(document.encForm.text2dec.value, document.encForm.key.value);
		document.encForm.decrypted.value = dec;
	} catch (err) {
		alert("Invalid Key");
	}
};
