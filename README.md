<b>مستندات مربوط به استفاده از سرچیا<b>
## لیست محتوا
* [توضیحات](#general-info)
* [تکنولوژی](#technologies)
* [نحوه استفاده](#setup)

## توضیحات
این کتابخانه جهت تسهیل استفاده از خدمات جست‌وجو به عنوان سرویس توسعه داده‌شده‌است	
## تکنولوژی
تکنولوژی مورد استفاده جهت پیاده‌سازی:
* javascript

	
## نحوه استفاده
این کتاب‌خانه به طور کلی شامل ۴ تابع است که نحوه استفاده از هر کدام به شرح زیر است:

```
<script type="text/javascript" src="searchia.js?v=2"></script>
<script type="text/javascript">
     window.onload = function () {
       searchia= new SearchiaBuilder({
       searchiaTemplate:"<tr><td>${this.anchors}</td><td>${this.depth}</td><td>${this.title}</td></tr>",
       searchiaResContainer:"searchia-res-container",
       searchiaTotalHitsContainer:"searchia-total-hits",
       searchiaSearchTime:"searchia-search-time",
       searchiaInstantIndexName:"yazd_uni",
       searchiaIndexName:"yazd_uni",
       searchiaAPIKey:"WewDcp6ocko8ZY0",
       searchiaSearchInputId:'searchia-search-box',
       searciaFrom:0,
       searchiaNRPP:10,
       runSearchiaOnInputChange:true      
    });
  };
</script>
```
