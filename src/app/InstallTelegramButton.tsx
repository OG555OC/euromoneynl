"use client";

const DEFAULT_INSTALL_LINK = "https://telegram.org/apps";
const IOS_APP_STORE =
  "https://apps.apple.com/app/telegram-messenger/id686449807";
const ANDROID_PLAY =
  "https://play.google.com/store/apps/details?id=org.telegram.messenger";

function getInstallLink() {
  const ua = navigator.userAgent || "";

  if (/android/i.test(ua)) {
    return ANDROID_PLAY;
  }

  if (/iphone|ipad|ipod/i.test(ua)) {
    return IOS_APP_STORE;
  }

  return DEFAULT_INSTALL_LINK;
}

export default function InstallTelegramButton() {
  return (
    <a
      className="button button-secondary"
      href={DEFAULT_INSTALL_LINK}
      onClick={(event) => {
        event.currentTarget.href = getInstallLink();
      }}
      target="_blank"
      rel="noreferrer"
    >
      Ik heb geen Telegram.
    </a>
  );
}
