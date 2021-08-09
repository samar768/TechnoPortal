export default function  convertJSONstringtoObject(data)
{
    // var datatest = {"\\id\\":"\\23232\\","\\pass\\":"\\1434\\"};
    console.log(data);
    var b=JSON.stringify(data);
    var str = b.replace(/\\/g, '');
    str=JSON.parse(str);
     console.log(str);
    return (str);
}
