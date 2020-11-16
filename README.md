<b>مستندات مربوط به استفاده از سرچیا<b>

# لیست محتوا

* [توضیحات](#توضیحات)
	
* [تکنولوژی](#تکنولوژی)

* [تنظیمات](#تنظیمات)

* [توابع](#توابع)

# توضیحات
<p dir="rtl">این کتابخانه جهت تسهیل استفاده از خدمات جست‌وجو به عنوان سرویس توسعه داده‌شده‌است</p>

# تکنولوژی
* javascript


	
#  تنظیمات
<div dir="rtl">
جهت استفاده از این کتاب‌خانه لازم است قبل از فراخوانی توابع فایل حاوی توابع در صفحه بارگزاری شود
<br>
لازم است فقط یک بار قبل از استفاده از توابع مقادیر مربوط به تنظیمات مقداردهی شود
<br>
بدیهی است در صورت عدم مقداردهی هر یک از موارد، مقدار پیش‌فرض اعمال خواهد شد
<br>	

</div>



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
<ul dir="rtl">
	<p dir="rtl">
		قبل از ساختن قالب‌ها لازم است بدانید:
	</p>
	<li dir="rtl">
		قالب‌ها تگ‌های htlmای هستند که به ازای هر element باید به selectorای که در تنظیمات مشخص شده‌اند اضافه شود
	</li>
	<li dir="rtl">
برای استفاده از مقادیر موجود در سند(document) می‌توانید از عبارت ${this.token} استفاده کنید با این توضیح که به‌جای کلمه token هر ویژگی(field) موجود در سندی که قبلا در سرچیا ذخیره شده است، قابل استفاده است
	</li>
	<li dir="rtl">
	مقادیر docId و position همواره در تمام سندها به صورت پیش‌فرض قابل دسترسی هستند
</li>
</ul>

<p>searchiaInstantSearchTemplate</p>
<p dir="rtl">تمپلیت مربوط به سرچ سریع</p>
<p>searchiaInstantSearchResultContainer</p>
<p dir="rtl"></p>
<p>searchiaSearchTemplate</p>
<p dir="rtl"></p>
<p>searchiaSearchResultContainer</p>
<p dir="rtl"></p>
<p>searchiaTotalHitsContainer</p>
<p dir="rtl"></p>
<p>searchiaSearchTime</p>
<p dir="rtl"></p>
<p>searchiaIndexName</p>
<p dir="rtl"></p>
<p>searchiaAPIKey</p>
<p dir="rtl"></p>
<p>searchiaSearchInputId</p>
<p dir="rtl"></p>
<p>searciaFrom</p>
<p dir="rtl"></p>
<p>searchiaNRPP</p>
<p dir="rtl"></p>
<p>runSearchiaOnInputChange</p><p dir="rtl"></p>



# توابع

<p dir="rtl">این کتاب‌خانه به طور کلی شامل ۴ تابع است که نحوه استفاده از هر کدام به شرح زیر است:</p>


```
instantSearch(query,nrpp);
```

```
search(query,from,nrpp);
```

```
click(query,docId,position);
```

```
addToCart(docId);
```
