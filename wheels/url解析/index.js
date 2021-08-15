const testURL = 'https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest';
function parseQueryString(url) {
    //coding here
    let data = url.split('?');
    let paramStr = data[1];
    let paramList = paramStr.split('&');
    let obj = {}
    for (let i = 0; i < paramList.length; i++) {
        let param = paramList[i].split('=')
        obj[param[0]] = decodeURIComponent(param[1])
    }
    return obj
}
console.log(parseQueryString(testURL))