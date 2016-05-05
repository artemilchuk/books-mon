$( window ).load( function(){
    function init () {
        $( "div.popup" ).replaceWith( "<div class='description'><div class='text'>Ще більше відеоматеріалів в <a class='knopka1' href='https://study.ed-era.com/courses/EdEra/g102/G102/about' target='_blank'>онлайн-курсі</a> від розробників цієї книги</div><div class='btn-knopka'><a class='knopka' href='https://study.ed-era.com/courses/EdEra/g102/G102/about'   target='_blank'>Перейти на курс</a></div>" );
        $("div.description").after( "<div class='space'></div>" );
    }
$( "body" ).append('
<div id="hypercomments_widget"></div>
<script type="text/javascript">
_hcwp = window._hcwp || [];
_hcwp.push({widget:"Stream", widget_id: 74671});
(function() {
if("HC_LOAD_INIT" in window)return;
HC_LOAD_INIT = true;
var lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en").substr(0, 2).toLowerCase();
var hcc = document.createElement("script"); hcc.type = "text/javascript"; hcc.async = true;
hcc.src = ("https:" == document.location.protocol ? "https" : "http")+"://w.hypercomments.com/widget/hc/74671/"+lang+"/widget.js";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hcc, s.nextSibling);
})();
</script>
<a href="http://hypercomments.com" class="hc-link" title="comments widget">comments powered by HyperComments</a>
');

    init();
    require(["gitbook"], function (gitbook) {
        gitbook.events.bind("page.change", init);
    });
});