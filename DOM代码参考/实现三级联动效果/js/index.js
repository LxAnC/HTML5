/*
 * 1,分析数据 ： 通过省会的二位数组中的 城市对应的数字  --> 城市对象的属性 从而找到 对象城市数组
 * --->找到city对应的数字  ---> 院校的属性值   从而找到 对应的学院数组
 * 2，实践
 */

(function() { //命名空间  代码块  块级作用域
    let provinceNode = document.getElementById('province'),
        cityNode = document.getElementById('city'),
        schoolNode = document.getElementById('school');

    //省会的获取
    let provinceStr = '';
    for (let i = 0; i < province.length; i++) {
        // province[i][1]
        provinceStr += '<option value=' + province[i][0] + '>' + province[i][1] + '</option>';
    }
    // console.log(provinceStr);
    provinceNode.innerHTML = provinceStr;

    //城市的获取---数组
    let cityArr = city[provinceNode.value];
    // console.log(provinceNode.value);
    let cityStr = '';
    for (let i = 0; i < cityArr.length; i++) {
        // province[i][1]
        cityStr += '<option value=' + cityArr[i][0] + '>' + cityArr[i][1] + '</option>';
    }
    cityStr += '<option>其他</option>';
    cityNode.innerHTML = cityStr;

    //院校的获取 ---数组
    let schoolArr = allschool[cityNode.value];
    // console.log(cityNode.value);
    let schoolStr = '';
    for (let i = 0; i < schoolArr.length; i++) {
        // province[i][1]
        schoolStr += '<option >' + schoolArr[i][2] + '</option>';
    }
    schoolStr += '<option>其他</option>';
    schoolNode.innerHTML = schoolStr;

    //联动事件
    provinceNode.onchange = function() { //省会改变 ---城市 ---院校 都会变
        // console.log(provinceNode.value)
        let cityArr = city[provinceNode.value];
        // console.log(cityArr);
        let cityStr = '';
        for (let i = 0; i < cityArr.length; i++) {
            cityStr += '<option value=' + cityArr[i][0] + '>' + cityArr[i][1] + '</option>';
        }
        cityStr += '<option>其他</option>';
        cityNode.innerHTML = cityStr;
        //院校的获取 ---数组
        // console.log(cityNode.value);
        let schoolArr = allschool[cityNode.value];
        // console.log(allschool[cityNode.value]);
        let schoolStr = '';
        for (let i = 0; i < schoolArr.length; i++) {
            schoolStr += '<option >' + schoolArr[i][2] + '</option>';
        }
        schoolStr += '<option>其他</option>';
        schoolNode.innerHTML = schoolStr;
    }

    cityNode.onchange = function() {
        // console.log(cityNode.value);
        let schoolArr = allschool[cityNode.value];
        let schoolStr = '';
        if (schoolArr) {
            for (let i = 0; i < schoolArr.length; i++) {
                // province[i][1]
                schoolStr += '<option >' + schoolArr[i][2] + '</option>';
            }
            schoolNode.innerHTML = schoolStr;
        } else {
            schoolStr = '<option>其他</option>';
            schoolNode.innerHTML = schoolStr;
        }
    }
})()