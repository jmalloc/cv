const algo = "AES-GCM";

async function loadKey() {
  const key = window.CV_KEY;
  if (!key) {
    return null;
  }

  return await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(key),
    { name: algo },
    false,
    ["encrypt", "decrypt"],
  );
}

async function encrypt(plaintext) {
  const key = await loadKey();
  if (!key) {
    throw new Error("no encryption key found");
  }

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: algo, iv: iv },
    key,
    new TextEncoder().encode(plaintext),
  );

  const message = new Uint8Array(iv.byteLength + ciphertext.byteLength);
  message.set(iv);
  message.set(new Uint8Array(ciphertext), iv.byteLength);

  return btoa(String.fromCharCode(...message));
}

async function decrypt(key, base64message) {
  const message = Uint8Array.from(atob(base64message), (c) => c.charCodeAt(0));
  const iv = message.slice(0, 12);
  const encrypted = message.slice(12);

  const decrypted = await crypto.subtle.decrypt(
    { name: algo, iv: iv },
    key,
    encrypted,
  );

  return new TextDecoder().decode(decrypted);
}

function replace(elem, from, to) {
  if (elem.nodeType == Node.TEXT_NODE) {
    elem.textContent = elem.textContent.replaceAll(from, to);
  }

  if (elem.attributes) {
    for (const attr of elem.attributes) {
      attr.value = attr.value.replaceAll(from, to);
    }
  }

  for (const child of elem.childNodes) {
    replace(child, from, to);
  }
}

window.onload = () => {
  (async () => {
    console.log(await encrypt("0438 872 813"));

    key = await loadKey();
    if (!key) {
      return;
    }

    for (const elem of document.querySelectorAll("[data-ciphertext]")) {
      const ciphertext = elem.getAttribute("data-ciphertext");
      const plaintext = await decrypt(key, ciphertext);
      elem.removeAttribute("data-ciphertext");
      replace(elem, "(redacted)", plaintext);
    }

    for (const elem of document.querySelectorAll(".crypto-unavailable")) {
      elem.remove();
    }
  })().catch((err) => {
    throw err;
  });
};
