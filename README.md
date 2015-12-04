Select2
===================


Package for [Select2](http://ivaynberg.github.io/select2/)



## How to install

Add package
```
meteor add natestrauser:select2
```

## i18n.
# Send only some language files to the client
If you need reduce package throughput you can specify which languages to send to the client by setting an environment variable like:
```
SELECT2_LANGUAGES='es,de'
```
Only Spanish and German language should go over the wire instead of all translations.
