# 地区联动

```
<script type="text/javascript" src="jquery.js"></script>  
<script type="text/javascript" src="jquery.cityselect.js"></script>
```
##在#city区域里放三个下拉select，对应class为：prov、city、dist，分别表示省、市、区。若只想实现省市二级联动，去掉第三个dist的select就可以了。
```
<div id="city">  
    <select class="prov"></select>   
    <select class="city" disabled="disabled"></select>  
    <select class="dist" disabled="disabled"></select>  
</div>
```

##调用cityselect：
```
$("#city").citySelect();
```
##也可以自定义省市区。
```
$("#city").citySelect({   
    url:"city.min.js",   
    prov:"湖南", //省份  
    city:"长沙", //城市  
    dist:"岳麓区", //区县  
    nodata:"none" //当子集无数据时，隐藏select  
});
```
##用JSON数据：
```
$("#city").citySelect({  
    url:{"citylist":[  
        {"p":"前端课程","c":[{"n":"HTML"},{"n":"CSS3","a":[{"s":"HTML5"},{"s":"AJAX"}]},  
        {"n":"JSON"}]},  
        {"p":"编程语言","c":[{"n":"C"},{"n":"Objective-C"},{"n":"PHP"},{"n":"Python"}]},  
        {"p":"数据库","c":[{"n":"Mysql"},{"n":"SqlServer"},{"n":"Mssql"}]},  
    ]},  
    prov:"",  
    city:"",  
    dist:"",  
    nodata:"none"  
});
```
##加载PHP文件
```
$("#city").citySelect({  
    url:"ajax.php"  
});
```