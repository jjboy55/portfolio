function displayCode(event){
    var html = document.getElementById('html').value;
    var css = document.getElementById('css').value;
    var javascript = document.getElementById('javascript').value;

    var style = document.getElementsByTagName('style')[0];

    var script = document.createElement('script');
    script.innerText = javascript;

    if(document.getElementsByTagName('script').length > 2)
    {
        var existingScript = document.getElementsByTagName('script')[1];
        document.body.replaceChild(script, existingScript);
    }else{
        document.body.appendChild(script);
    }

    var display = document.getElementById('display');
    display.innerHTML = html;
    style.innerText = css;
}