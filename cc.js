var fs = require("fs");

var args = process.argv.slice(2);
var source = args[0];
var output = args[1];

function conv(data) {
    const OpenCC = require('opencc');
    /**
     * hk2s.json
     * hk2t.json
     * jp2t.json
     * s2hk.json
     * s2t.json
     * s2tw.json
     * s2twp.json
     * t2hk.json
     * t2jp.json
     * t2s.json
     * t2tw.json
     * tw2s.json
     * tw2sp.json
     * tw2t.json
     */
    const converter = new OpenCC('s2twp.json');
    return converter.convertPromise(data)
}

fs.readFile(source, function (err, buf) {
    //console.log(buf.toString());
    conv(buf).then(converted => {
        //console.log(converted);  // 漢字
        fs.writeFile(output, converted, (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
    });;
});






