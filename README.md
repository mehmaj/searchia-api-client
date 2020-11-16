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


	
## اضافه کردن کتاب‌خانه و مقداردهی تنظیمات
<p dir="rtl">
جهت استفاده از این کتاب‌خانه لازم است قبل از فراخوانی توابع فایل حاوی توابع در صفحه بارگزاری شود.
	<br>
لازم است فقط یک بار قبل از استفاده از توابع مقادیر مربوط به تنظیمات مقداردهی شود.
	<br>
بدیهی است در صورت عدم مقداردهی هر یک از موارد، مقدار پیش‌فرض اعمال خواهد شد.
</p>


```
<script type="text/javascript" src="searchia.js?v=2"></script>
<script type="text/javascript">
     window.onload = function () {
     searchiaInstantSearchTemplate:"<tr><td>${this.position}</td><td>${this.docId}</td><td>${this.depth}</td><td>${this.title}</td></tr>",
     searchiaInstantSearchResultContainer:"searchia-res-container",
     searchiaSearchTemplate:"<tr><td>${this.position}</td><td>${this.docId}</td><td>${this.depth}</td><td>${this.title}</td></tr>",
     searchiaSearchResultContainer:"searchia-res-container",
     searchiaTotalHitsContainer:"searchia-total-hits",
     searchiaSearchTime:"searchia-search-time",
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
<p>searchiaInstantSearchTemplate</p><p dir="rtl">تمپلیت مربوط به سرچ سریع</p>
<p>searchiaInstantSearchResultContainer</p><p dir="rtl">تمپلیت مربوط به سرچ سریع</p>
<p>searchiaSearchTemplate</p><p dir="rtl">تمپلیت مربوط به سرچ سریع</p>
<p>searchiaSearchResultContainer</p><p dir="rtl">تمپلیت مربوط به سرچ سریع</p>



## توابع
این کتاب‌خانه به طور کلی شامل ۴ تابع است که نحوه استفاده از هر کدام به شرح زیر است:
