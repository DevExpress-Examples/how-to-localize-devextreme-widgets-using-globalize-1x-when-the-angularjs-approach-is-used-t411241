<!-- default file list -->
*Files to look at*:

<!-- default file list end -->
# How to localize DevExtreme widgets using Globalize 1.X when the AngularJS approach is used


<p>To localize DevExtreme widgets, do the following:</p>
<p><br>- Link required dictionaries as described in the following help topic:<br><a href="http://js.devexpress.com/Documentation/Guide/UI_Widgets/Common/Localization/?search=local&version=16_1&approach=jQuery#Link_Dictionaries">Link Dictionaries</a><br><br></p>
<p><strong>Note</strong> that the order of references is important.</p>
<p><br>- Reference the DevExtreme localization script:<br><a href="http://js.devexpress.com/Documentation/Guide/UI_Widgets/Common/Localization/?search=local&version=16_1&approach=jQuery#Use_Predefined_Dictionaries">Use Predefined Dictionaries</a> <br><br>- Initialize your application after setting the locale:<br><br></p>


```js
$.when(
   ...
).then(

    Globalize.load
).then(function () {
   ..
    Globalize.locale('de');

    angular.bootstrap(document, ['dxApp']);
});

```


<p><strong>Important</strong>: Call the angular.bootstrap method only after setting a page locale.</p>
<p><br>For a more <strong>detailed description</strong>, refer to the following help topic:</p>
<br><a href="http://js.devexpress.com/Documentation/Guide/UI_Widgets/Common/Localization/?version=16_1#Localization">Localization</a> <br><br><strong>See also:</strong><br><a href="http://js.devexpress.com/Documentation/Guide/UI_Widgets/Common/Localization/?search=local&version=16_1&approach=jQuery#Use_Predefined_Dictionaries">Extend Predefined Dictionaries</a><br><a href="https://github.com/jquery/globalize/blob/master/doc/api/message/load-messages.md">Globalize.formatMessage</a><br><a href="https://github.com/unicode-cldr">Unicode-CLDR repository</a><br><a href="https://www.devexpress.com/Support/Center/Question/Details/T311368">Localized resources for DevExtreme widgets</a>

<br/>


