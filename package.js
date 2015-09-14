Package.describe({
  name:"natestrauser:select2",
  summary: "Select2 is a jQuery based replacement for select boxes.",
  version: "4.0.0",
  git: "https://github.com/nate-strauser/meteor-select2.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.1.0.3");
  
  api.use("jquery", "client");

  api.add_files([
    "lib/select2/dist/js/select2.js"
  ], "client", {bare: true});

  api.add_files([
    "lib/select2/dist/css/select2.css"
  ], "client");
});
