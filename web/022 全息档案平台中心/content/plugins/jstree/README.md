# jstree

[jsTree][jstree] is a tree view for jQuery (depends on 1.9.1 or later). 
It is absolutely free (MIT licence) and supports all modern browsers and IE from version 8 up. 
jsTree can display trees by parsing HTML or JSON and supports AJAX, it is themeable and easy to configure and customize. Events are fired when the user interacts with the tree. Other notable features are inline editing, drag'n'drop support, fuzzy searching (with optional server side calls), tri-state checkbox support, configurable node types, AMD compatibility, easily extendable via plugins.
[jstree]: http://www.jstree.com/

## Getting Started

Download or checkout the latest copy and include the scripts and styles in your web page. Then create an instance (in this case using the inline HTML).

```html
<link rel="stylesheet" href="dist/themes/default/style.min.css" />
<script src="dist/libs/jquery.js"></script>
<script src="dist/jstree.min.js"></script>
<script>
$(function() {
  $('#container').jstree(/* optional config object here */);
});
</script>
<div id="container">
  <ul>
    <li>Root node
      <ul>
        <li id="child_node">Child node</li>
      </ul>
    </li>
  </ul>
</div>
```

Listen for changes on the tree using events:

```html
<script>
$(function () {
  $('#container').on('changed.jstree', function (e, data) {
    console.log(data.selected);
  });
});
</script>
```

And interact with the tree:

```html
<script>
$(function () {
	$('#container').jstree(true).select_node('child_node');
});
</script>
```

For a complete list of configuration options, events and available functions refer to the [documentation][docs] and [demos][demo].
[docs]: http://jstree.com/docs
[demo]: http://jstree.com/demo

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

_Please do NOT edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

If you want to you can always [donate a small amount][paypal] to help the development of jstree.
[paypal]: https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=paypal@vakata.com&currency_code=USD&amount=&return=http://jstree.com/donation&item_name=Buy+me+a+coffee+for+jsTree

## License
Copyright (c) 2014 Ivan Bozhanov (http://vakata.com) 

Licensed under the [MIT license][mit].
[mit]: http://www.opensource.org/licenses/mit-license.php
