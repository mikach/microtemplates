Microtemplates
==============
Javascript microtemplates in 20 lines of code.

Based on John Resig's microtemplates.

Compatible with CommonJS && RequireJS.

Example1 (typical usage):
```
var s = '<div class="users"><% for ( var i = 0; i < users.length; i++ ) { %>' + 
        '<li><%=users[i].name%></a></li> <% } %></div>';
var data = { users: [   { name: 'first' }, { name: 'second' } ] };

microtpl(s)(data);
```
Result:
```
<div class="users"><li>first</a></li> <li>second</a></li> </div>
```
Example2 (with specific pattern):
```
var s = '{{=a}}, {{=b}}! {{ if (true) }} true {{ else }} false';

microtpl(s, /{{|}}/)({ a: 'hello', b: 'world' });
```
Result:
```
hello, world! true
```
