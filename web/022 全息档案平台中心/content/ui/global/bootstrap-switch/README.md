# Bootstrap Switch
[![Dependency Status](https://david-dm.org/nostalgiaz/bootstrap-switch.svg?style=flat)](https://david-dm.org/nostalgiaz/bootstrap-switch)
[![devDependency Status](https://david-dm.org/nostalgiaz/bootstrap-switch/dev-status.svg?style=flat)](https://david-dm.org/nostalgiaz/bootstrap-switch#info=devDependencies)
[![NPM Version](http://img.shields.io/npm/v/bootstrap-switch.svg?style=flat)](https://www.npmjs.org/)

Turn checkboxes and radio buttons in toggle switches.

## Contribute

Hi, Emanuele here. I am currently the sole contributor of Bootstrap Switch and have been mantaining it for quite a considerable amount of time.
The development pace is strongly affected by the personal lack of time and a missing core team behind the project.
It would be nice to have someone available for clearing the list of open issues and occasionally implementing new functionalities.
If interest, you can drop me a line or pick a bug, kill it and open a Pull Request against `develop` branch.
Any contribution made after February 5th, 2015 is to be dual-licensed Apache and MIT, and thus, once all previous contributors agree, we will change the license to MIT (like Bootstrap did)

Many thanks.

## Demo and Documentation

- [Examples](http://www.bootstrap-switch.org/examples.html)
- [Options](http://www.bootstrap-switch.org/options.html)
- [Methods](http://www.bootstrap-switch.org/methods.html)
- [Events](http://www.bootstrap-switch.org/events.html)

## Getting started

Include the dependencies: jQuery, Bootstrap and Bootstrap Switch CSS + Javascript:

``` html
[...]
<link href="bootstrap.css" rel="stylesheet">
<link href="bootstrap-switch.css" rel="stylesheet">
<script src="jquery.js"></script>
<script src="bootstrap-switch.js"></script>
[...]
```

Add your checkbox:

```html
<input type="checkbox" name="my-checkbox" checked>
```

Initialize Bootstrap Switch on it:

```javascript
$("[name='my-checkbox']").bootstrapSwitch();
```

Enjoy.

## Less

If you want to use your bootstrap variables, include `bootstrap-switch.less` in your compilation stack. You can even choose among Bootstrap versions 2.3.2 or 3.*.* compatible source.

## AngularJs

Two custom directives are available:
- [angular-bootstrap-switch](https://github.com/frapontillo/angular-bootstrap-switch)
- [angular-toggle-switch](https://github.com/JumpLink/angular-toggle-switch)

## KnockoutJs

A Knockout binding handler is available [here](https://github.com/pauloortins/knockout-bootstrap-switch)

## NuGet

A NuGet package is available [here](https://github.com/blachniet/bootstrap-switch-nuget)

## Supported browsers

IE9+ and all the other modern browsers.

## License

Licensed under the Apache License, Version 2.0
http://www.apache.org/licenses/LICENSE-2.0

We are in the process of changing from Apache to MIT. If you contributed before February 5th, 2015, please add your vote here to accept license change: https://github.com/nostalgiaz/bootstrap-switch/issues/347
