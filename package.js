Package.describe({
  name: "natestrauser:select2",
  summary: "Select2 is a jQuery based replacement for select boxes.",
  version: "4.0.1",
  git: "https://github.com/nate-strauser/meteor-select2.git"
});

Npm.depends({
  select2: "4.0.1"
});

SELECT2_DIST_PATH = ".npm/package/node_modules/select2/dist";

DEFAULT_LANGUAGES = ["ar", "az", "bg", "ca", "cs", "da", "de", "en", "es", "et", "eu", "fa", "fi", "fr", "gl", "he", "hi", "hr", "hu", "id", "it", "ja", "ko", "lt", "lv", "mk", "ms", "nb", "nl", "pl", "pt-BR", "pt", "ro", "ru", "sk", "sr-Cyrl", "sr", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];

LANGUAGES = DEFAULT_LANGUAGES;
if(process.env.SELECT2_LANGUAGES) {
  LANGUAGES = process.env.SELECT2_LANGUAGES.split(',');
}

FILES = [];
for (var i = 0; i < LANGUAGES.length; i++) {
  FILES.push(SELECT2_DIST_PATH + "/js/i18n/" + LANGUAGES[i] + ".js");
}

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use("jquery", "client");

    api.add_files([
      SELECT2_DIST_PATH + "/js/select2.js"
    ], "client", {bare: true});

    api.add_files([
      SELECT2_DIST_PATH + "/css/select2.css"
    ], "client");

    api.add_files(FILES, "client");
});
