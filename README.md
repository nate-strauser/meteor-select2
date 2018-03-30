Select2
===================


Package for [Select2](http://ivaynberg.github.io/select2/)



## How to install

Add package
```
meteor add natestrauser:select2
```

## How to use

Add a specific class in your template for the select element you want to apply Select2 to (and read the value of _data-id_):

```html
<select class="select2-dropdown" name="state" id="select2-example">
  <option value="value1" data-id="id1">value1</option>
  <option value="value2" data-id="id2">value2</option>
</select>
```


Enable Select2 for the specific class in the .js file of your template:

```javascript
Template.MyTemplate.onRendered(function() {
    // Enable select2
    $('.select2-dropdown').select2();
});
```

Add a function for the selection event:

```javascript
'change select': function(event, template) {
        var id = $('#select2-example option:selected').data('id');
        }
```

Or for any other events:

```javascript
'click #save-button': function(event, template) {
        var id = $('#select2-example option:selected').data('id');
        }
```



See also the [Select2 documentation](https://select2.org/).