/*!
 * EzyXhr v1.0
 * 
 *
 * 
 * 
 *
 * TODO: Add File and licensing (WTF License) information
 * 
 * 
 *
 * Date: 2014-5-12
 */
 
 
 function XMLHttpFactory(){
    this.createXMLHttpRequest = funtion(){
        if(typeof window.XMLHttpRequest !== "undefined") {
            return new XMLHttpRequest();
        } elseif(typeof window.ActiveXObject !== "undefined") {
            return new ActiveXObject("MSXML2.XMLHttp");
        } else {
            console.log("Your browser doesn't support XHR Objects");
        }
        return "";
    }
 }
 
 /*
    Usage:
    var xhr = XMLHttpFactory.createXMLHttpRequest();
 */