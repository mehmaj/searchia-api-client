<b>مستندات مربوط به استفاده از سرچیا<b>

## لیست محتوا

* [توضیحات](#توضیحات)
	
* [تکنولوژی](#تکنولوژی)

* [تنظیمات](#تنظیمات)

* [توابع](#توابع)

## توضیحات
###### <p dir="rtl">این کتابخانه جهت تسهیل استفاده از خدمات جست‌وجو به عنوان سرویس توسعه داده‌شده‌است</p>

## تکنولوژی
* javascript


	
##  تنظیمات
###### <div dir="rtl">
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
<ul dir="rtl" class="flash">
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

###### <p dir="rtl">قالب مربوط به جست‌و‌جوی سریع</p>
<p>searchiaInstantSearchResultContainer</p>

###### <p dir="rtl">selector مربوط به نتایج جست‌و‌جوی سریع</p>
<p>searchiaSearchTemplate</p>

###### <p dir="rtl">قالب مربوط به جست‌و‌جو</p>
<p>searchiaSearchResultContainer</p>

###### <p dir="rtl">selector مربوط به نتایج جست‌و‌جو</p>
<p>searchiaTotalHitsContainer</p>

###### <p dir="rtl">selector مربوط به تعداد کل نتایج بازیابی شده</p>
<p>searchiaSearchTime</p>

###### <p dir="rtl">selector مربوط به زمان واکشی نتایج</p>
<p>searchiaIndexName</p>

###### <p dir="rtl">نام index که در سرچیا تعریف شده‌است</p>
<p>searchiaAPIKey</p>

###### <p dir="rtl">apiKey که از سرچیا دریافت کرده‌اید</p>
<p>searchiaSearchInputId</p>

###### <p dir="rtl">selector مربوط به input مربوط به جست‌و‌جو</p>
<p>searciaFrom</p>

###### <p dir="rtl">ردیف شروع واکشی نتایج</p>
<p>searchiaNRPP</p>

###### <p dir="rtl">تعداد نتایج واکشی شده (Number Of Results Per Page)</p>
 <p>runSearchiaOnInputChange</p>

###### <p dir="rtl">در صورتی که مقدار این مورد برابر true باشد با تغییر input مربوط به جستجو(searchiaSearchInputId) به صورت خودکار محتوای تابع instantSearch() با پرس‌و‌جو موجود در input جست‌و‌جو فراخوانی خواهد‌شد</p>



## توابع

###### <p dir="rtl">این کتاب‌خانه به طور کلی شامل ۴ تابع است که نحوه استفاده از هر کدام به شرح زیر است:</p>

#### <p dir="rtl">جست‌و‌جوی سریع</p>

```
instantSearch(query,nrpp);
```
###### <ul dir="rtl"><li dir="rtl">توضیحات جست‌و‌جوی سریع ؟؟؟</li></ul>

#### <p dir="rtl">جست‌و‌جو</p>

```
search(query,from,nrpp);
```
###### <ul dir="rtl"><li dir="rtl">توضیحات جست‌و‌جو ؟؟؟</li></ul>

#### <p dir="rtl">کلیک</p>

```
click(query,docId,position);
```
###### <ul dir="rtl"><li dir="rtl">کلیک کاربر بر روی نتیجه جست‌و‌جو</li></ul>


#### <p dir="rtl">اضافه کردن محصول به سبد خرید</p>

```
addToCart(docId);
```
###### <ul dir="rtl"><li dir="rtl" style="font-size=.1em">اضافه کردن محصول به سبد خرید توسط کاربر</li></ul>

